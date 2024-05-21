// pages/api/bloodsugar.js
import connectDB from '@/utils/connectDB';
import BloodSugar from '@/libs/models/BloodSugar';

export default async function handler(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const bloodSugarRecords = await BloodSugar.find({}).populate('userId');
        res.status(200).json({ success: true, data: bloodSugarRecords });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const { userId, diabetesType, age, condition, value, unit, shouldBeStored, date } = req.body;
        const bloodSugarRecord = await BloodSugar.create({
          userId,
          diabetesType,
          age,
          condition,
          value,
          unit,
          shouldBeStored,
          date,
        });
        res.status(201).json({ success: true, data: bloodSugarRecord });
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
