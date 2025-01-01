import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import StepIndicator from "../components/Steps/StepIndicator";
import StepNavigationButtons from "../components/ButtonGroup/StepNavigationButtons";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useSteps } from "../providers/StepContext";

const EmployeeForm = () => {
  const { step } = useSteps();

  return (
    <div className="flex">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Navbar />
        <div className="w-3/4 p-4 ml-[25%]">
          <Header />
          <StepIndicator currentStep={step} />
          <div className="p-4 bg-white rounded-lg shadow-md">
            <Outlet />
          </div>
          <StepNavigationButtons />
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
