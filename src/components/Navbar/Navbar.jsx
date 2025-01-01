import React from "react";
import UserProfile from "../Header/UserProfile";

const Navbar = () => {
  return (
    <div
      style={{ borderRadius: "0 0 20px 0" }}
      className="bg-blue-900 flex justify-between items-center px-6 py-3"
    >
      <div></div>

      <div className="flex items-center gap-4">
        <button>
          <img src="settings.svg" alt="" />
        </button>

        <button>
          <img src="notifications.svg" alt="" />
        </button>

        <div className="flex items-center gap-2">
          <UserProfile />
          <button>
            <img src="arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
