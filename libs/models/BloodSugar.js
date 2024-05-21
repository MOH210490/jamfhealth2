// models/BloodSugar.js
import mongoose from 'mongoose';

const BloodSugarSchema = new mongoose.Schema({
  diabetesType: {
    type: String,
  },
  age: {
    type: Number,
  },
  condition: {
    type: String,
  },
  value: {
    type: Number,
  },
  unit: {
    type: String,
  },
  shouldBeStored: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.models.BloodSugar || mongoose.model('BloodSugar', BloodSugarSchema);
