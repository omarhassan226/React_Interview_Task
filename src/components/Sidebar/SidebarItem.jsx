import React from "react";

const SidebarItem = ({ label, icon, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer rounded-md ${
        active ? "bg-blue-700" : "hover:bg-blue-800"
      }`}
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span>{label}</span>
    </li>
  );
};

export default SidebarItem;
