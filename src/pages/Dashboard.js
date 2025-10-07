import React from 'react';

const Dashboard = () => {
  if (localStorage.getItem('role') !== 'admin') {
    window.location.href = '/';
    return null;
  }

  return (
    <div>
      <h2 className="accent">Admin Dashboard</h2>
      <button>Upload Tutorial</button> {/* Mock form */}
      <button>Schedule Session</button>
      <button>Manage Users</button>
    </div>
  );
};

export default Dashboard;