import { useWakeupServer } from '@/hooks/useWakeupServer';
import React from 'react'


const HeroPage = ({ setCurrentStep }) => {

  useWakeupServer();

    const handleReset = () => {
        setCurrentStep(1);
      };
  return (
    <div className='heroPage container'>
      
    <section className="contenedor">
      <div className="casa" id="Gryffindor">Gryffindor</div>
      <div className="casa" id="Hufflepuff">Hufflepuff</div>
      <div className="casa" id="Ravenclaw">Ravenclaw</div>
      <div className="casa" id="Slytherin">Slytherin</div>
    </section>

    <br/>
      <h1 className='text-center'>
        WELCOME TO HOGWARTS ADMISSION PORTAL!
      </h1>
      
    <p className='text-center'>We have few simple questions</p>
    <p className='secretText'>This is just to trick the muggles, we already know everything!</p>
    

    <div className="d-flex justify-content-center align-items-center">
    <button onClick={handleReset}>Lets start</button>
</div>
    
  </div>
  )
}

export default HeroPage