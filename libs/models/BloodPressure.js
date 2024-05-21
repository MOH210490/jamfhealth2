// models/BloodPressure.js
import mongoose from 'mongoose';

const BloodPressureSchema = new mongoose.Schema({
  systolicValue: {
    type: Number,
  },
  diastolicValue: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
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

export default mongoose.models.BloodPressure || mongoose.model('BloodPressure', BloodPressureSchema);
