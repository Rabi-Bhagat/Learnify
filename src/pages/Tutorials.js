
import React from 'react';
import TutorialCard from '../components/TutorialCard';

const mockTutorials = [
  { title: 'React Basics', description: 'Learn React fundamentals.' },
  { title: 'Advanced JS', description: 'Deep dive into JavaScript.' },
];

const Tutorials = () => {
  if (!localStorage.getItem('token')) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div>
      <div className="mushroom illustration" /> {/* Mushroom from slide 3 */}
      <h2 className="accent">Curated Tutorials</h2>
      {mockTutorials.map((tut, i) => <TutorialCard key={i} {...tut} />)}
    </div>
  );
};

export default Tutorials;