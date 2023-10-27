import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://hogwarst-mail-sender.onrender.com/sendemail', req.body);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(error.response?.status || 500).json(error.response?.data || {});
    }
  } else {
    // Handle any other HTTP method
    return res.status(405).end();
  }
}