// utils/emailSender.js
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Initialize OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' // Redirect URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

module.exports = {
  sendEmail: async ({ email, subject, html }) => {
    try {
      // Get new access token
      const accessToken = await oAuth2Client.getAccessToken();

      // Create transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USERNAME,
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          accessToken: accessToken.token
        }
      });

      // Send email
      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject,
        html
      });

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Email sending failed:', error);
      throw new Error(`Email could not be sent: ${error.message}`);
    }
  }
};