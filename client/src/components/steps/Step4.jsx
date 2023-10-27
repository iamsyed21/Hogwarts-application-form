import { useUserContext } from '@/hooks/useUserContext.js';
import userEmailSender from '@/hooks/useEmailSender.js';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
 



const Step4 = ({ onNext, onBack }) => {
  const { state } = useUserContext();
  const [email, setEmail] = useState(state.email || '');
  const [showEmail, setShowEmail] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const { sendEmail, isLoading, isError, response } = userEmailSender();

  useEffect(() => {
    setEmail(state.email || '');
  }, [state]);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (showEmail) {
      setIsValid(validateEmail(email));
    } else {
      setIsValid(true);
    }
  }, [email, showEmail]);

  const handleNext = async () => {
    if (isValid) {
      if (showEmail) {
        if (email && validateEmail(email)) { // Check if email is typed and valid
          await sendEmail({ ...state, email }); // Pass the email along with other state
          if (isError) {
            toast.error('Failed to send email');
          } else {
            toast.success('Email sent successfully');
          }
        } else {
          toast.error('Invalid email format.');
          return; // Return early to prevent moving to the next step
        }
      }
      onNext({ email });
    } else {
      toast.error('Invalid email format.');
    }
  };
  
  const handleBack = () =>{
    onBack({ email });
  };

  return (
    <div>

    
    <div className='step4-container'>
      <h2>Summary</h2>
      <table>
        <tr><td>Given Name:</td><td>{state.givenName || state.firstName}</td></tr>
        <tr><td>Full Name:</td><td>{state.firstName} {state.lastName}</td></tr>
        <tr><td>Age:</td><td>{state.age}</td></tr>
        <tr><td>Nationality:</td><td>{state.nationality}</td></tr>
        <tr><td>Gender:</td><td>{state.gender}</td></tr>
        <tr><td>House:</td><td>{state.hogwartsHouse}</td></tr>
      </table>
      <label>
        <input type="checkbox" onChange={() => setShowEmail(!showEmail)} />
        Mail me this response
      </label>
      <br />
      {showEmail && <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />}
    </div>
    
    {isLoading ? (
        <>
        Sending The Email!
        </>
      ) : (
        <>
          <button onClick={handleNext}>Next</button>
          {onBack && <button onClick={handleBack}>Back</button>}
        </>
      )}
      
    </div>
  );
};

export default Step4;

