import axios from 'axios';

export default async function handler(req, res) {
  
  try {
    const response = await axios.get('https://randomuser.me/api/');
    
    const userData = response.data.results[0];
    
    res.status(200).json(userData);
  } catch (error) {
    
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}
