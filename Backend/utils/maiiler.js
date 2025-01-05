require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASS,
  },
});

const generateOTP = () => {
	return Math.floor(100000 + Math.random() * 900000).toString();
}

const sendTestEmail = async () => {
  const mailOptions = {
    from: {
      name: "Pandora Incorporated",
      address: process.env.MAILER_EMAIL,
    },
    to: ["matthewgab24@gmail.com"],
    subject: "Test Email",
    text: "Hello! This is a test email from Pandora Incorporated.",
    html: "<b>Hello!</b> This is a test email from <i>Pandora Incorporated</i>.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const sendOtp = async ( email ) => {
	
  const otp = generateOTP()
  const mailOptions = {
    from: {
      name: "Pandora Incorporated",
      address: process.env.MAILER_EMAIL,
    },
    to: ["matthewgab24@gmail.com"],
    subject: "Pandora OTP",
    text: `Hello Matthew! Here's your Pandora Account's One Time Password!
		   Please DO NOT Share it
		   ${otp}`,
    html: `<b>Hello Matthew!</b> </br> Here's your Pandora Account's One Time Password </br> Please DO NOT Share it <i> ${otp} </i>.`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Export using CommonJS syntax
module.exports = {
  sendTestEmail,
  sendOtp
};
