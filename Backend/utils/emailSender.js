// utils/emailSender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = {
  sendEmail: async ({ email, subject, html }) => {
    try {
      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject,
        html
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  }
};