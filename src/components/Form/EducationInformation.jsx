import React from "react";
import InputField from "./InputField";

const EducationInformation = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Education information</h2>

      <div className="grid grid-cols-3 gap-4">
        <InputField label="National ID" />
        <InputField label="National ID Attachment" type="file" />
        <InputField label="Military Status" />
        <InputField label="Marital Status" />
        <InputField label="City" />
        <InputField label="Address" />
        <InputField label="Email" type="email" />
        <InputField label="Phone Number 1" />
        <InputField label="Phone Number 2" />
        <InputField label="Social Insurance Number" />
      </div>
    </>
  );
};

export default EducationInformation;
