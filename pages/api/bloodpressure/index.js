// pages/api/bloodpressure.js
import connectDB from '@/utils/connectDB';
import BloodPressure from '@/libs/models/BloodPressure';

export default async function handler(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const bloodPressureRecords = await BloodPressure.find({}).populate('userId');
        res.status(200).json({ success: true, data: bloodPressureRecords });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const { userId, systolicValue, diastolicValue, weight, height, shouldBeStored, date } = req.body;
        const bloodPressureRecord = await BloodPressure.create({
          userId,
          systolicValue,
          diastolicValue,
          weight,
          height,
          shouldBeStored,
          date,
        });
        res.status(201).json({ success: true, data: bloodPressureRecord });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
