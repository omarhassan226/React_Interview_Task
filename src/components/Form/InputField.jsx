import React from "react";

const InputField = ({ label, type = "text", placeholder, error = "" }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className={`mt-1 block w-full px-4 py-2 rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        } shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? "text-red-500" : "text-gray-900"
        }`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
