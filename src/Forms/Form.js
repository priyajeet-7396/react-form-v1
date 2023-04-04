import React, { useState } from 'react'
import FormSighnup from './FormSighnup'
import Formsuccess from './Formsuccess'
import './Form.css';

const Form = () => {
  const [isSubmitted , setIsSubmitted] = useState(false)

function submitForm(){
  setIsSubmitted(true);
}

  return (
    <>
    <div className="form-container">
    <span className="close-btn">x</span>
    <div className="form-content-left">
    <img src='img/img-2.svg' alt='spaceship' className='form-img'></img>
      
    </div>
    {!isSubmitted ? (<FormSighnup submitForm={submitForm}/>) : (<Formsuccess/>)}
    </div>
     
    
    
    </>
  )
}

export default Form;