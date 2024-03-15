import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConnect from '../../utils/dbConnect';
import Learner from '../../models/learner'; // Import Learner model

export default async function handler(req, res) {
  await dbConnect(); // Ensure database connection

  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Check if the learner already exists
      const learnerExists = await Learner.findOne({ email });
      if (learnerExists) return res.status(409).send('Learner already exists');

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new learner
      const newLearner = new Learner({
        email,
        password: hashedPassword,
      });
      await newLearner.save();

      // Generate JWT
      const token = jwt.sign(
        { learnerId: newLearner._id },
        process.env.NEXT_PUBLIC_JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
