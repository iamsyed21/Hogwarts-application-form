import { useUserContext } from '@/hooks/useUserContext.js';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Step3 = ({ onNext, onBack }) => {
  const { state } = useUserContext();
  const [hogwartsHouse, setHogwartsHouse] = useState(state.hogwartsHouse || '');

  useEffect(() => {
    setHogwartsHouse(state.hogwartsHouse || '');
  }, [state]);

  const handleNext = () => {
    if(hogwartsHouse == ''){
      toast.error('Do not be Shy! As the sorting does take your request into consideration!');
    }else{
      onNext({ hogwartsHouse });
    }
  };
  const handleBack = () =>{
    onBack({ hogwartsHouse });
  };

  const handleHouseSelect = (house) => {
    setHogwartsHouse(house);
  };

  return (
    <div>
      <h2>Select Your Hogwarts House</h2>
    <div className="step3-container">
      <div className="flex-wrapper">
        <div className={`banner-one ${hogwartsHouse === 'Gryffindor' ? 'selected' : ''}`} onClick={() => handleHouseSelect('Gryffindor')}><p>G</p></div>
        <div className={`banner-two ${hogwartsHouse === 'Ravenclaw' ? 'selected' : ''}`} onClick={() => handleHouseSelect('Ravenclaw')}><p>R</p></div>
        <div className={`banner-three ${hogwartsHouse === 'Hufflepuff' ? 'selected' : ''}`} onClick={() => handleHouseSelect('Hufflepuff')}><p>H</p></div>
        <div className={`banner-four ${hogwartsHouse === 'Slytherin' ? 'selected' : ''}`} onClick={() => handleHouseSelect('Slytherin')}><p>S</p></div>
      </div>
      <h2>
      {hogwartsHouse !==''?<>{hogwartsHouse}</>:<>Select An House</>}
      </h2>
    </div>
    <p>Choose your preferred house, and the Sorting Hat will take your choice into consideration as it determines your magical destiny.</p>
    <button onClick={handleNext}>Next</button>
      {onBack && <button onClick={handleBack}>Back</button>}
    </div>
  );
};

export default Step3;