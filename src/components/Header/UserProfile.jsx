import React from "react";

const UserProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="user.avif"
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
};

export default UserProfile;
