import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConnect from '../../utils/dbConnect';
import Learner from '../../models/learner'; // Import Learner model

export default async function handler(req, res) {
  await dbConnect(); 

  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Find learner by email
      const learner = await Learner.findOne({ email });
      if (!learner) return res.status(404).send('Learner not found');

      // Check password
      const isMatch = await bcrypt.compare(password, learner.password);
      if (!isMatch) return res.status(401).send('Incorrect password');

      // Generate JWT
      const token = jwt.sign(
        { learnerId: learner._id },
        process.env.NEXT_PUBLIC_JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
