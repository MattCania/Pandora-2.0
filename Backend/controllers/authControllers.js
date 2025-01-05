const bcrypt = require("bcryptjs");
const { userAccounts } = require("../models");

const register = async (req, res) => {
  const {
    username,
    email,
    password,
    firstname,
    lastname,
    middlename,
    currency,
    organization,
  } = req.body;

  try {
    const userExists = await userAccounts.findOne({ where: { username } });
    if (userExists) throw new Error("Username already exists");
    const emailExists = await userAccounts.findOne({ where: { email } });
    if (emailExists) throw new Error("Email already exists");

    if (!password || password.length < 8 || password.length > 15)
      throw new Error("Invalid password length");

    const registerUser = await userAccounts.create({
      username,
      email,
      securedPassword: password,
      firstname,
      lastname,
      middlename,
      currency,
      organization,
    });

    if (!registerUser) throw new Error("Registration failed");

    res.status(200).json({ message: "Successfully registered user" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExists = await userAccounts.findOne({ where: { email } });

    if (!emailExists) throw new Error("Incorrect Email");

    const isMatch = await bcrypt.compare(password, emailExists.securedPassword);

    if (!isMatch) throw new Error("Incorrect Password");

    req.session.userId = emailExists.user_id;
    req.session.email = emailExists.email;
    req.session.username = emailExists.username;

    res.status(200).json({ message: "Successful Login" });
  } catch (error) {
	console.error(error)
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out" });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
};

const verifyEmail = (req, res) => {

}

module.exports = {
  register,
  login,
  logout,
  verifyEmail
};
