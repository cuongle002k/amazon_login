import React, { useState } from 'react';
import {users} from '../users'
export default function LoginForm1({ currentStep, formData, setCurrentStep, setFormData }) {
  const [email, setEmail] = useState(formData.email);
  const [isValid, setIsValid] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setIsValid(false);
      return;
    }
    const user = users.find((user) => user.email === email );
    if(!user){
      setIsUser(false);
      return;
    }
    // Update form data and move to next step
    setFormData({ ...formData, email }); 
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
       {!isUser && (
        <div className='pb-2'>
          <div className="modal_error  rounded-xl border-2 inline-block border-red-500 p-2">
                <h2 className='text-base text-red-600'>Incorrect email or phonenumber</h2>
                <p className='text-sm'>We cannot find an account with that email address/phone number</p>
              </div>
        </div>
              
            )}
      <div className='w-[350px] h-[367px]
    border-2 border-gray-400 p-4
    rounded-lg'>
      
      <h2 className='text-2xl pb-4'>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className='font-bold pb-2' htmlFor="email">Email or mobile phone number</label>
          <div className='pt-2 pb-4'>
            <input
              type="text"
              id='email'
              value={email}
              onChange={handleChange}
              className={`w-full
              border-2 ${isValid ? 'border-gray-400' : 'border-red-500'}
              rounded-md p-1 focus:ring-offset-2 focus:ring-2`}
            />
            {!isValid && (
              <p className="text-red-500 text-sm">Enter your email or mobile phone number</p>
            )}
            
          </div>
        </div>
        <button className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus
      w-full rounded-xl p-1'>Continue</button>
      </form>
      <div className="term_condtion py-2">
        <p className='text-sm'>By continuing, you agree to Amazon's
          <a className='text-blue-600 hover:underline hover:text-red-400' href="#!"> Conditions of Use </a>
          and
          <a className='text-blue-600 hover:underline hover:text-red-400' href="#!"> Privacy Notice</a>.
        </p>
      </div>
      <div className="help py-2 border-b-2 border-gray-400">
        <a className='text-blue-600 text-sm hover:underline hover:text-red-400' href="#!">Need help</a>
      </div>
      <div className="desc py-4">
        <p className='font-bold'>Buying for work?</p>
        <a className='text-blue-600 text-sm block hover:underline hover:text-red-400' href="">Shop on Amazon Business</a>
      </div>
    </div>
    </>
    
  );
}
