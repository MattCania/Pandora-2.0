require("dotenv").config();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: "smtp.gmail.gmail",
	port: 587,
	secure: false, // true for port 465, false for other ports
	auth: {
	  user: process.env.MAILER_EMAIL,
	  pass: process.env.MAILER_PASS,
	},
});

const mailOptions = {
	from: {
		name: 'Pandora Incorporated',
		address: process.env.MAILER_EMAIL
	},
	to: ['matthewgab24@gmail.com'],
	subject: 'About something',
	text: 'kys',
	html: '<b>kys</b>',
}


export const sendSubscriptionReceipt = (recipientEmail, receiptFilePath, userId) => {
    const mailOptions = {
        from: process.env.MAIL_FROM,
        to: recipientEmail, 
        subject: 'Subscription Receipt', 
        text: 'Please find your subscription receipt attached.', 
        attachments: [
            {
                filename: `receipt_${userId}.pdf`,
                path: receiptFilePath, 
                contentType: 'application/pdf',
            },
        ],
    };
    return transporter.sendMail(mailOptions);
};

export default transporter