import React from 'react';
import Adminsidebar from './Adminsidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

function AdminDashboard() {
  return (
    <div className="flex min-h-screen">
      <Adminsidebar />
      <div className="flex-1 ml-64 bg-gray-200 overflow-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
