import dbConnect from "../../utils/dbConnect";
import Course from "../../models/course"; // Update the path as per your structure

export default async function handler(req, res) {
  await dbConnect();

  // Extracting courseId from query parameters
//   const { courseId } = req.query;
  const courseId='65ddb3873fe8eb9645ff52ba'
  if (!courseId) {
    return res.status(400).json({ message: 'courseId query parameter is required' });
  }

  try {
    const course = await Course.findById(courseId); // Assuming your Course model includes modules
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course.modules);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}
