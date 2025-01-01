import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("All Employees");

  const menuItems = [
    { label: "Dashboard", icon: "../../../public/dash.svg" },
    { label: "All Employees", icon: "../../../public/employee.svg" },
    { label: "All Departments", icon: "../../../public/department.svg" },
    { label: "Attendance", icon: "../../../public/attend.svg" },
    { label: "Payroll", icon: "../../../public/payroll.svg" },
    { label: "Leaves", icon: "../../../public/leaves.svg" },
    { label: "Jobs", icon: "../../../public/jobs.svg" },
    { label: "Candidates", icon: "../../../public/candidates.svg" },
    { label: "Settings", icon: "../../../public/settings2.svg" },
    { label: "Log Out", icon: "../../../public/logout.svg" },
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
