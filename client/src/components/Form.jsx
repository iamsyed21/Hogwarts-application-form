import { useUserContext } from '@/hooks/useUserContext.js'
import React, { useState } from 'react'
import Step1 from './steps/Step1.jsx';
import Step2 from './steps/Step2.jsx';
import Step3 from './steps/Step3.jsx';
import Step4 from './steps/Step4.jsx';
import SucessMessage from './steps/SucessMessage.jsx';
import { updateUser } from '@/context/user/userActions.js';
import HeroPage from '@/scenes/HeroPage.jsx';




const Form = () => {
    const {state, dispatch} = useUserContext();
    const [currentStep, setCurrentStep] = useState(state.stepFormProgress);

    const handleNextStep = (userData) => {
        updateUser(dispatch, { ...userData, stepFormProgress: currentStep + 1 });
        setCurrentStep(currentStep + 1);
      };
    
      const handleBackStep = (userData) => {
        updateUser(dispatch, { ...userData, stepFormProgress: currentStep - 1 });
        setCurrentStep(currentStep - 1);
      };
    
    
  return (
    <div className='container'>
    <div className='formStyleWrapper'>
    {currentStep === 0 && <HeroPage setCurrentStep={setCurrentStep}/>}
      {currentStep === 1 && <Step1 onNext={handleNextStep} />}
      {currentStep === 2 && <Step2 onNext={handleNextStep} onBack={handleBackStep} />}
      {currentStep === 3 && <Step3 onNext={handleNextStep} onBack={handleBackStep} />}
      {currentStep === 4 && <Step4 onNext={handleNextStep} onBack={handleBackStep} />}
      {currentStep === 5 && <SucessMessage setCurrentStep={setCurrentStep} />}
    </div>
    </div>
  )
}

export default Form