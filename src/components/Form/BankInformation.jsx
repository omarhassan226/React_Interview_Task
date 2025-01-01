import React from "react";
import InputField from "./InputField";

const BankInformation = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Bank information</h2>
      <div className="grid grid-cols-3 gap-4">
        <InputField label="Last Name" />
        <InputField label="Gender" />
        <InputField label="Age" />
        <InputField label="Date of Birth" type="date" />
        <InputField label="Nationality" />
        <InputField label="National ID" />
        <InputField label="National ID Attachment" type="file" />
        <InputField label="Military Status" />
        <InputField label="Marital Status" />
        <InputField label="City" />
      </div>
    </>
  );
};

export default BankInformation;
