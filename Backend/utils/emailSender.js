const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Initialize OAuth2 client ONCE (not per email)
const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI || 'https://developers.google.com/oauthplayground'
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

// Cache the transporter to avoid recreating it
let cachedTransporter = null;

async function createTransporter() {
  if (cachedTransporter) return cachedTransporter;
  
  const accessToken = await oAuth2Client.getAccessToken();

  cachedTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_FROM, // Should match your OAuth authorized email
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      accessToken: accessToken.token
    },
    pool: true // Enable connection pooling
  });

  return cachedTransporter;
}

module.exports = {
  sendEmail: async ({ email, subject, html }) => {
    try {
      const transporter = await createTransporter();
      
      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject,
        html,
        // Important for deliverability:
        dsn: {
          id: `${Date.now()}`,
          return: 'headers',
          notify: ['failure', 'delay'],
          recipient: process.env.EMAIL_ADMIN || process.env.EMAIL_FROM
        }
      });

      console.log('Email sent to:', email);
    } catch (error) {
      console.error('Email failed to:', email, 'Error:', error.message);
      throw new Error(`Email delivery failed: ${error.message}`);
    }
  }
};