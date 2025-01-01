import React from "react";
import { useSteps } from "../../providers/StepContext";

const StepNavigationButtons = () => {
  const { nextStep, previousStep, step } = useSteps();

  return (
    <div className="flex justify-between mt-4">
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
        onClick={previousStep}
        disabled={step <= 1}
      >
        ← Previous
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={nextStep}
      >
        Next →
      </button>
    </div>
  );
};

export default StepNavigationButtons;
