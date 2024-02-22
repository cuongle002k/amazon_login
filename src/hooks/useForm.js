import React, { useState } from 'react';

// Custom hook for managing multi-step form state
const useForm = (steps) => {

  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };



  const getCurrentStep = () => {
    return steps[currentStep];
  };

  return {
    getCurrentStep,
    goToNextStep,
    goToPreviousStep,
    isLastStep: currentStep === steps.length - 1,
    isFirstStep: currentStep === 0
  };
};

// Example usage of multi-step form
