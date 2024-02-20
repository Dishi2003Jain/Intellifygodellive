// pages/api/send-otp.js

import nodemailer from 'nodemailer';

// Temporary storage. In production, consider using a database or cache.
const otpStore = {};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP

    otpStore[email] = otp; // Store OTP with the email as the key

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example with Gmail
      auth: {
        user: process.env.EMAIL_USERNAME, // Email from which you want to send OTP
        pass: process.env.EMAIL_PASSWORD, // Email password or App password
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Your OTP for login',
      text: `Your OTP is: ${otp}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ message: 'OTP sent successfully' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
