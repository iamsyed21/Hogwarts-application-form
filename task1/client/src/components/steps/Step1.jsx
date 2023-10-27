import { useUserContext } from '@/hooks/useUserContext.js';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const Step1 = ({ onNext }) => {
  const { state } = useUserContext();
  const [firstName, setFirstName] = useState(state.firstName || '');
  const [lastName, setLastName] = useState(state.lastName || '');
  const [givenName, setGivenName] = useState(state.givenName || '');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setFirstName(state.firstName || '');
    setLastName(state.lastName || '');
    setGivenName(state.givenName || '');
  }, [state]);

  const handleNext = () => {
    if (isValid) {
      onNext({ firstName, lastName, givenName });
    } else {
      toast.error('First Name and Last Name are required.');
    }
  };

  useEffect(() => {
    setIsValid(firstName.trim() !== '' && lastName.trim() !== '');
  }, [firstName, lastName]);

  return (
    <div>
      <h1 className='text-center'> Tell us about yourself </h1>
      <label for="firstName">Given Name</label>
      <input type="text" value={firstName} id="firstName" name="firstName" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required/>
      <label for="lastName">Last Name</label>
      <input type="text" value={lastName} id="lastName" name="lastName"  onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required/>
      <br />
      <label for="nickName">Nick Name</label>
      <input type="text" value={givenName} id="nickName" name="nickName" onChange={(e) => setGivenName(e.target.value)} placeholder="What should we call you?" />
      <div><span>You can always come back later and finish the form, we will save your progress!</span></div>
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;