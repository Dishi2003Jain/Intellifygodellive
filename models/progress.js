import mongoose from 'mongoose';
import Learner from './learner'; // Ensure the path is correct

const moduleProgressSchema = new mongoose.Schema({
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Module' // Reference 'Module' by its collection name
  },
  counts: {
    Circle: { type: Number, default: 0 },
    Square: { type: Number, default: 0 },
    Tool: { type: Number, default: 0 }
  }
});

const progressSchema = new mongoose.Schema({
  learner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Learner'
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Course'
  },
  modules: [moduleProgressSchema] 
});

const Progress = mongoose.models.Progress || mongoose.model('Progress', progressSchema);

export default Progress;
