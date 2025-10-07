import React from 'react';

const mockGroups = ['Group 1: React Learners', 'Group 2: JS Enthusiasts'];

const Community = () => {
  if (!localStorage.getItem('token')) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div>
      <div className="flower illustration" /> {/* Flowers from slide 4 */}
      <h2 className="accent">Community Groups</h2>
      <ul>
        {mockGroups.map((group, i) => <li key={i}>{group}</li>)}
      </ul>
    </div>
  );
};

export default Community;