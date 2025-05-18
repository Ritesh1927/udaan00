// utils/email.js
const nodemailer = require('nodemailer');

// Create transporter using your App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME, // udaan00365@gmail.com
    pass: process.env.EMAIL_PASSWORD  // oapjvawctjsugkfq
  }
});

const sendEmail = async (options) => {
  try {
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: options.email,
      subject: options.subject,
      text: options.text || options.html.replace(/<[^>]*>?/gm, ''), // Fallback text
      html: options.html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${options.email}: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error(`Email could not be sent: ${error.message}`);
  }
};

module.exports = sendEmail;