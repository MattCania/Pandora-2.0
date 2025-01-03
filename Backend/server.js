require("dotenv").config();
const express = require("express");
require("express-async-errors");
const session = require("express-session");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const compression = require("compression");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cors = require("cors");
const helmet = require("helmet");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(hpp());
app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? true : false, // False in Development
  })
);
app.use(
  cors({
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    console.warn(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).send("Too many requests, please try again later.");
  },
});

if (process.env.NODE_ENV === "production") {
  app.use("/api", limiter);
}

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({ db: sequelize }),
    cookie: {
      secure: process.env.NODE_ENV === "production" ? true : false, // Set false in Development
      maxAge: 24 * 60 * 60 * 1000, // 1 Day
    },
  })
);

sequelize
  .sync()
//   .sync({ force: true })
  // .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized successfully!");
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });


// Localhost PORT
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Connected at Port ${port}`);
});
