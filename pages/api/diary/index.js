import connectDB from '@/utils/connectDB';
import BloodPressure from '@/libs/models/BloodPressure';
import BloodSugar from '@/libs/models/BloodSugar';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  await connectDB();

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = session?.user?.id;

  if (!userId) {
    return res.status(400).json({ message: "User ID not found" });
  }

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const bloodSugarRecords = await BloodSugar.find({ userId }).sort({ date: 'desc' });
        const bloodPressureRecords = await BloodPressure.find({ userId }).sort({ date: 'desc' });
        res.status(200).json({ success: true, bloodSugarRecords, bloodPressureRecords });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
