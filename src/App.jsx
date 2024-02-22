import React, { useState } from 'react';
import LoginForm1 from './components/LoginForm1';
import LoginForm2 from './components/LoginForm2';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <div className='flex flex-col items-center py-4'>
      <div className="logo pb-4">
        <img src="/logo.png" alt="logo" width={128} />
      </div>
      {currentStep === 1 ? (
        <LoginForm1
          currentStep={currentStep}
          formData={formData}
          setCurrentStep={setCurrentStep}
          setFormData={setFormData}
        />
      ) : (
        <LoginForm2
          currentStep={currentStep}
          formData={formData}
          setCurrentStep={setCurrentStep}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}