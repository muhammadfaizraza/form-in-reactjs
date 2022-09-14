import React, { useState } from 'react'

const Subscribe = () => {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const emailCorrect = /\S+@\S+\.\S+/;
    const validateEmail = (event) => {
     
        const email = event.target.value;
     
        if (emailCorrect.test(email)) {
          setIsValid(true);
          setMessage('');
        } else {
          setIsValid(false);
          setMessage('Please enter a valid email!');
        }
      };
      const handleSubmit= () =>{

console.log(isValid)
      }
  
    return (
        <div className="container">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
          onChange={validateEmail}
        />  
  <button onClick={handleSubmit}> Subscribe</button>
    
        <div >
          {message}
        </div>
      </div>
     )
}

export default Subscribe