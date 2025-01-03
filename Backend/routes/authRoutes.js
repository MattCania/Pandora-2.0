const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { userAccounts } = "../models";

router.post("/register", async (req, res) => {
  const { username, email, password, firstname, lastname, middlename } =
    req.body;

  try {
    const userExists = await userAccounts.findOne({ where: { username } });
    if (userExists) throw new Error("Username Already Exists");
    const emailExists = await userAccounts.findOne({ where: { email } });
    if (emailExists) throw new Error("Email Already Exists");

    if (password.length < 8 || password.length > 15)
      throw new Error("Invalid Password");

    const registerUser = await userAccounts.create({
      username,
      email,
      password,
      firstname,
      lastname,
      middlename,
    });

    if (!registerUser) throw new Error("Registration Error");

    res.status(200).json({ message: "Successfully Registered User" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailExists = await userAccounts.findOne({ where: { email } });
    if (!emailExists) throw new Error("Incorrect Email");

    const isMatch = await bcrypt.compare(password, emailExists.password);

    if (!isMatch) throw new Error("Incorrect Password");

    res.status(200).json({ message: "Successful Login" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out" });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
});

module.exports = router;
