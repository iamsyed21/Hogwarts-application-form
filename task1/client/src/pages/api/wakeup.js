import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://hogwarst-mail-sender.onrender.com/wakeup');
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Failed to wake up server' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
