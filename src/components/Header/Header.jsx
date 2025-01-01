import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-4 shadow-md border-b">
      <div className="flex items-center space-x-2">
        <p className="text-gray-500 text-sm">All Employees</p>
        <span className="text-gray-400">{">"}</span>
        <p className="text-blue-900 text-sm font-medium">New</p>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 border border-blue-700 text-blue-700 rounded hover:bg-gray-100">
          Discard
        </button>
        <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
          Save
        </button>
      </div>
    </div>
  );
};

export default Header;
