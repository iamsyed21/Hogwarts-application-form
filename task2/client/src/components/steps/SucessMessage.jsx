import React from 'react'
import { useUserContext } from '@/hooks/useUserContext.js';
import { resetUser } from '@/context/user/userActions.js';


const SucessMessage = ({ setCurrentStep }) => {

  const { dispatch } = useUserContext();

  const handleReset = () => {
    resetUser(dispatch); 
    setCurrentStep(0);
  };
  return (
    <div className='text-center'>
    <h1>Hurray!!!!</h1>
    <h3>You have successfully fetched your data.</h3>
    <div className="d-flex justify-content-center align-items-center">
  <button className="text-center" onClick={handleReset}>Check for another Wizard?</button>
</div>

  </div>
  );
};

export default SucessMessage