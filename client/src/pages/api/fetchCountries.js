import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.first.org/data/v1/countries');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json(error.response?.data || {});
  }
}