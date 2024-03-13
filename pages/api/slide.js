import dbConnect from '../../utils/dbConnect';
import Course from '../../models/course';

export default async function handler(req, res) {
  const { moduleId } = req.query;

  if (!moduleId) {
    return res.status(400).json({ error: 'Missing moduleId' });
  }

  await dbConnect();

  if (req.method === 'GET') {
    try {
      // Find the course that contains the module by its moduleId
      const course = await Course.findOne({ "modules._id": moduleId });
      if (!course) {
        return res.status(404).json({ error: 'Module not found in any course' });
      }

      // Extract the specific module from the course
      const specificModule = course.modules.find(mod => mod._id.toString() === moduleId);
      if (!specificModule) {
        return res.status(404).json({ error: 'Module not found' });
      }

      // Return the slides for the found module
      return res.status(200).json(specificModule.slides);
    } catch (error) {
      console.error('Error fetching slides:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // If not a GET request, return 405 Method Not Allowed
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
