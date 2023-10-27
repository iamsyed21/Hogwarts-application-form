import { useEffect } from 'react';
import axios from 'axios';

const useFetchRandomUser = (dispatch, shouldFetch) => {
  useEffect(() => {

    const fetchData = async () => {
      
      try {
        
        const response = await axios.get('api/getrandomuser');
        
        const { dob, location, gender } = response.data;
        
        const hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
        const randomHouse = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];

        dispatch({
          type: 'UPDATE_USER',
          payload: {
            age: dob.age,
            nationality: location.country,
            gender,
            hogwartsHouse: randomHouse,
          },
        });
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchData();
  }, [dispatch, shouldFetch]);
};

export default useFetchRandomUser;
