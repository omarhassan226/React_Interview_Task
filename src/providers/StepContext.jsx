import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const StepsContext = createContext();

export const StepsProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const steps = [
    "general_information",
    "bank_information",
    "education_information",
    "job_information",
  ];

  const nextStep = () => {
    const nextStepIndex = steps.indexOf(steps[step - 1]) + 1;
    if (nextStepIndex < steps.length) {
      setStep((prevStep) => prevStep + 1);
      navigate(steps[nextStepIndex]);
    }
  };

  const previousStep = () => {
    const prevStepIndex = steps.indexOf(steps[step - 1]) - 1;
    if (prevStepIndex >= 0) {
      setStep((prevStep) => prevStep - 1);
      navigate(steps[prevStepIndex]);
    }
  };

  return (
    <StepsContext.Provider value={{ step, nextStep, previousStep }}>
      {children}
    </StepsContext.Provider>
  );
};

// Custom hook to use the context
export const useSteps = () => {
  return useContext(StepsContext);
};
