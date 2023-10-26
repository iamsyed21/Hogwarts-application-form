import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/fetchCountries');
        const data = response.data.data;
        const countryArray = Object.values(data).map((item) => `${item.country}, ${item.region}`);
        const sortedCountryArray = countryArray.sort((a, b) => {
            const countryA = a.split(',')[0].trim();
            const countryB = b.split(',')[0].trim();
            return countryA.localeCompare(countryB);
          });
        setCountries(sortedCountryArray);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [countries, loading];
};

export default useFetchCountries;
