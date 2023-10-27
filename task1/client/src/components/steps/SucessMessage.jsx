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
    <h3>You have successfully completed the form.</h3>
    <img className='letterImage' src="/assets/letter.png" alt="hogwarts letter" />
    <p>Look out for that letter! It might fly in anytime now!</p>
    <div className="d-flex justify-content-center align-items-center">
  <button className="text-center" onClick={handleReset}>Submit another Response!</button>
</div>

  </div>
  );
};

export default SucessMessage