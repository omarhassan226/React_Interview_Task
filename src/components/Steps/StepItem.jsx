import React from "react";

const StepItem = ({ step, label, isActive }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          isActive ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
        }`}
      >
        {step}
      </div>

      <p
        className={`text-sm mt-2 ${
          isActive ? "text-green-600 font-medium" : "text-gray-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default StepItem;
