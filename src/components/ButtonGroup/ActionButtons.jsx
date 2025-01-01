import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex justify-end space-x-4">
      <button className="bg-gray-300 px-4 py-2 rounded-md">Discard</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </div>
  );
};

export default ActionButtons;
