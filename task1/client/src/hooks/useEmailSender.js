import axios from 'axios';
import { useState } from 'react';




const useEmailSender = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [response, setResponse] = useState(null);

    const sendEmail = async (formData) => {
        setIsLoading(true);
        setIsError(false);
       
        try {
          const res = await axios.post('https://hogwarst-mail-sender.onrender.com/sendemail', {
            name: formData.givenName || `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            age: formData.age,
            gender: formData.gender,
            house: formData.hogwartsHouse,
          });


          
          setResponse(res.data);
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };

      return { sendEmail, isLoading, isError, response };
}

export default useEmailSender

