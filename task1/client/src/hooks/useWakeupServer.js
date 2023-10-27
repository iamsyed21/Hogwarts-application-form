import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const useWakeupServer = () => {
  useEffect(() => {
    const wakeupServer = async () => {
      try {
        const { data } = await axios.get('/api/wakeup');
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    };

    wakeupServer();
  }, []);
};
