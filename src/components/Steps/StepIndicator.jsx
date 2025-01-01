import React from "react";
import StepItem from "./StepItem";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    "Personal Information",
    "Work Information",
    "Education",
    "Payroll",
  ];

  return (
    <div className="flex items-center justify-center w-full my-6">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`flex items-center ${
            index === steps.length - 1 ? "" : "flex-grow"
          }`}
          style={index === steps.length - 1 ? { width: "12%" } : { flex: 1 }}
        >
          <StepItem
            step={index + 1}
            label={label}
            isActive={index + 1 === currentStep}
          />

          {index < steps.length - 1 && (
            <div className="flex-1 h-[2px] bg-gray-300 mx-2 relative">
              {index + 1 < currentStep && (
                <div className="absolute left-0 top-0 h-[2px] bg-green-500 w-full"></div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
