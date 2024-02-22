import React, { useState } from "react";
import LoginForm1 from "./components/LoginForm1";
import LoginForm2 from "./components/LoginForm2";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="flex flex-col items-center py-4">
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
      <footer className="py-4 w-full border-t-2 mt-4 border-gray-300 flex flex-col items-center">
        <div className="link inline-flex gap-4">
          <a
            className="text-blue-500 hover:underline text-sm hover:text-red-300"
            href="#!"
          >
          
            Conditions of Use
          </a>
          <a
            className="text-blue-500 hover:underline text-sm hover:text-red-300"
            href="#!"
          >
           
            Privacy Notice
          </a>
          <a
            className="text-blue-500 hover:underline text-sm hover:text-red-300"
            href="#!"
          >
           
            Help
          </a>
        </div>
        <div className="copyright text-center py-2">
          <span className="text-sm">© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </footer>
    </div>
  );
}
