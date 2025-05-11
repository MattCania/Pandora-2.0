const express = require("express");
const router = express.Router();

const isAuth = require('../middlewares/authenticator')
const authController = require('../controllers/authControllers')

router.post("/register", authController.register);
router.post("/login", authController.login );
router.post("/logout", authController.logout)
router.post('/verify', authController.verifyEmail)

router.get('/check-session', isAuth, (req, res) => {
  res.status(200).json({
    authenticated: true,
    userId: req.session.userId,
	email: req.session.email,
	username: req.session.username
  });
});

module.exports = router;
