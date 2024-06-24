import React from 'react';
import { FiUser } from 'react-icons/fi';

const AdminNav = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <div className="font-bold text-xl">Dashboard</div>
      <div className="flex items-center space-x-4">
        <FiUser className="w-6 h-6" />
        <div>Account Settings</div>
      </div>
    </div>
  );
};

export default AdminNav;
