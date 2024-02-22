import React, { useState } from 'react';
import {users} from '../users';
import { useNavigate } from 'react-router-dom';
import { CiWarning } from "react-icons/ci";
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
    <div className='mb-4'>
    {!isPassword && (
          <div className="pb-2 mb-4 w-[349px]">
          <div className="modal_error  rounded-xl border-[1px] drop-shadow-md  border-red-400 p-4">
            <div className="desc flex gap-3">
              <CiWarning className="text-red-500 text-4xl" />
              <div className="desc">
                <h2 className="text-base text-red-600">There was a problem</h2>
                <p className="text-sm">
                Your password is incorrect
                </p>
              </div>
            </div>
          </div>
        </div>
            )}
     <div className='w-[350px] h-[439px]
    border-[1px] border-gray-400 p-4
    rounded-lg'>
       
      <h2 className='text-2xl pb-4'>Sign in</h2>
      <div className="user pb-4">
      <span>{formData.email} </span> 
      <a className='text-blue-600  hover:underline hover:text-red-400' href="#!"> Change</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className='flex justify-between text-sm'>
          <label className='font-bold pb-2' htmlFor="password">Password</label>
          <a className='text-blue-600 block hover:underline hover:text-red-400'  href="">Forgot Password?</a>
          </div>
    
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
    </div>
   
  );
}
