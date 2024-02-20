// pages/api/verify-otp.js

// Use the same temporary storage or database/cache for production
const otpStore = {};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, otp } = req.body;

    if (otpStore[email] && otpStore[email] === otp) {
      delete otpStore[email]; // Clear OTP after successful verification
      res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ message: 'Invalid OTP' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
