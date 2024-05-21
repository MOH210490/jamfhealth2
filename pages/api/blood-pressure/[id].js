// pages/api/blood-pressure/[id].js
import connectDB from '@/utils/connectDB';
import BloodPressure from '@/libs/models/BloodPressure';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  await connectDB();
  
  const session = await getSession({ req });
  
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  const { method } = req;
  const { id } = req.query;
  
  switch (method) {
    case 'DELETE':
      try {
        const result = await BloodPressure.findByIdAndDelete(id);
        if (!result) {
          return res.status(404).json({ success: false, message: 'Record not found' });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
