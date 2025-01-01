import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("All Employees");

  const menuItems = [
    { label: "Dashboard", icon: "dash.svg" },
    { label: "All Employees", icon: "employee.svg" },
    { label: "All Departments", icon: "department.svg" },
    { label: "Attendance", icon: "attend.svg" },
    { label: "Payroll", icon: "payroll.svg" },
    { label: "Leaves", icon: "leaves.svg" },
    { label: "Jobs", icon: "jobs.svg" },
    { label: "Candidates", icon: "candidates.svg" },
    { label: "Settings", icon: "settings2.svg" },
    { label: "Log Out", icon: "logout.svg" },
  ];

  return (
    <div
      style={{ position: "fixed" }}
      className="w-1/4 bg-blue-900 text-white h-screen p-4"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <img src="logo.svg" alt="Logo" />
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            icon={item.icon}
            active={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
