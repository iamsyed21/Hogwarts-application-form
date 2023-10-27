import { useUserContext } from '@/hooks/useUserContext.js';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
 



const Step4 = ({ onNext, onBack }) => {
  const { state } = useUserContext();
  const [email, setEmail] = useState(state.email || '');
  const [isValid, setIsValid] = useState(true);
  

  useEffect(() => {
    setEmail(state.email || '');
  }, [state]);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };



  const handleNext = async () => {
    if (isValid) {
      onNext({  });
    } else {
      toast.error('Invalid email format.');
    }
  };
  
  const handleBack = () =>{
    onBack({  });
  };

  return (
    <div>

    
    <div className='step4-container'>
      <h2>Summary</h2>
      <table>
        <tr><td>Given Name:</td><td>{state.givenName || state.firstName}</td></tr>
        <tr><td>Full Name:</td><td>{state.firstName} {state.lastName}</td></tr>
        <tr><td>Age:</td><td>{state.age}</td></tr>
        <tr><td>Nation:</td><td>{state.nationality}</td></tr>
        <tr><td>Gender:</td><td>{state.gender}</td></tr>
        <tr><td>House:</td><td>{state.hogwartsHouse}</td></tr>
      </table>
      
    </div>
    
  
          <button onClick={handleNext}>Next</button>
          {onBack && <button onClick={handleBack}>Back</button>}
        
      
      
    </div>
  );
};

export default Step4;

