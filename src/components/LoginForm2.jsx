import React, { useState } from 'react';
import {users} from '../users';
import { useNavigate } from 'react-router-dom';
export default function LoginForm2({ currentStep, formData, setCurrentStep, setFormData }) {
  const navigate=useNavigate();
  const [password, setPassword] = useState(formData.password);
  const [isValid, setIsValid] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const userpass = users.find((user) => user.password === password );
  const handleChange = (e) => {
    setPassword(e.target.value);
    setIsValid(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === null ){
      setIsValid(false);
      return;
    }
    if (!userpass) {
      setIsPassword(false);
      return;
    }
    else{
      navigate('/home');
    }


    setFormData({ ...formData, password }); 

    console.log('Final Form Data:', formData); 
  };

  return (
    <>
     <div className='w-[350px] h-[439px]
    border-2 border-gray-400 p-4
    rounded-lg'>
       {!isPassword && (
          <div className='pb-2'>
          <div className="modal_error  rounded-xl border-2 inline-block border-red-500 p-2">
                <h2 className='text-base text-red-600'>Incorrect email password.</h2>
                <p className='text-sm'>Make sure the password you type is correct.</p>
              </div>
        </div>
            )}
      <h2 className='text-2xl pb-4'>Sign In</h2>
      <div className="user pb-4">
      <span>{formData.email} </span> 
      <a className='text-blue-600  hover:underline hover:text-red-400' href="#!"> Change</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className='font-bold pb-2' htmlFor="password">Password</label>
          <div className='pt-2 pb-4'>
            <input
              type="text"
              id='password'
              value={password}
              onChange={handleChange}
              className={`w-full
              border-2 ${isValid ? 'border-gray-400' : 'border-red-500'}
              rounded-md p-1 focus:ring-offset-2 focus:ring-2`}
            />
            {!isValid && (
              <p className="text-red-500 text-sm">Enter your email  password</p>
            )}
          </div>
        </div>
        <button className='bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus
      w-full rounded-xl p-1'>Sign In</button>
      </form>
     
     
      <div className="desc py-4">
        <div className="check flex items-center gap-2">
        <input type="checkbox" />
       <span >Keep me Sign in.</span>
        <a className='text-blue-600 block hover:underline hover:text-red-400' href="">
          Detail
        </a>
        </div>
       
      </div>
    </div>
    </>
   
  );
}
