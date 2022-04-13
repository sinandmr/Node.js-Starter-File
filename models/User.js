import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'This username already using.'],
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', userSchema);
