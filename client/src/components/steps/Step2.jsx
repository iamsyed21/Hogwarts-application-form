import useFetchCountries from '@/hooks/useFectchCountries.js';
import { useUserContext } from '@/hooks/useUserContext.js';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const Step2 = ({ onNext, onBack }) => {
  const { state } = useUserContext();
  const [nationality, setNationality] = useState(state.nationality || '');
  const [age, setAge] = useState(state.age || 0);
  const [gender, setGender] = useState(state.gender || '');
  const [isValid, setIsValid] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [countries, loading] = useFetchCountries();


  const name = state.givenName || state.firstName || state.lastName || "";
  const options = loading ? ['Loading...'] : countries;


  useEffect(() => {
    setNationality(state.nationality || '');
    setAge(state.age || '');
    setGender(state.gender || '');
  }, [state]);

  useEffect(() => {
    setIsValid(
      nationality.trim() !== '' &&
      age > 0 &&
      gender.trim() !== ''
    );
  }, [nationality, age, gender]);

  const handleNext = () => {
    if (isValid) {
      onNext({ nationality, age, gender });
    } else {
      if(nationality.trim() == ''){
        toast.error('Please tell us about your nationality');
      }else if(age == 0){
        toast.error('Whats your age?');
      }else if(gender.trim() == ''){
        toast.error('Kindly select an option from the gender list');
      }else{
        toast.error('All fields are required.');
      }
    }
  };

  const handleBack = () =>{
    onBack({ nationality, age, gender });
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const selectOption = (option) => {
    setNationality(option);
    setIsActive(false);
  };

  return (
    <div className='step2Wrapper'>

      <h1>
        Alright! {name !== '' && name}
      </h1>
      <h3 className='text-center m-4'>
        Just few more details!
      </h3>
      <label for="age">{name !== ''?<p>How Old Are You, {name}?</p>:<p>How Old Are You?</p>}</label>
      <input
        type="number"
        name='age'
        id='age'
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <div className='nationWrapper'>
      <p>Country:</p>
      <div className={`select-container ${isActive ? 'active' : ''}`}>
      <div className="select" onClick={toggleActive}>
        <input type="text" id="input" placeholder="Nationality" value={nationality} readOnly />
      </div>
      <div className="option-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${nationality === option ? 'selected' : ''}`}
            onClick={() => selectOption(option)}
          >
            <label>{option}</label>
          </div>
        ))}
      </div>
    </div>
      </div>
  
      <div className='radioWrapper'>
      <p>Gender:</p>
      <group>
      <div class="input-container">
      <input type="radio" name="Male" value="Male"  checked={gender === 'Male'} onChange={() => setGender('Male')}  /><label>Male</label>      
    </div>
    <div class="input-container">
      <input type="radio" name="Female" value="Female" checked={gender === 'Female'} onChange={() => setGender('Female')}/><label>Female</label>
    </div>
    <div class="input-container">
      <input type="radio" name="Non-Binary" value="Non-Binary" checked={gender === 'Non-Binary'} onChange={() => setGender('Non-Binary')}  /><label>Non-Binary</label>     
    </div>
    <div class="input-container">
      <input type="radio" name="Transgender" value="Transgender" checked={gender === 'Transgender'} onChange={() => setGender('Transgender')}  /><label>Transgender</label>  
    </div>  
    <div class="input-container">
      <input type="radio" name="Other" value="Other" checked={gender === 'Other'} onChange={() => setGender('Other')} /><label>Other</label>  
    </div> 
    
  </group>
      </div>
      <div><span>You can always come back later <br /> and finish the form, we will save your progress!</span></div>
      <br />
      <br />
      <button onClick={handleNext}>Next</button>
      {onBack && <button onClick={handleBack}>Back</button>}
    </div>
  );
};

export default Step2


