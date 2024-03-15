import mongoose from 'mongoose';

const learnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Learner = mongoose.models.Learner
            ?  mongoose.model('Learner')
            :  mongoose.model('Learner', learnerSchema);

export default Learner;