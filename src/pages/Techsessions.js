import React, { useState } from 'react';

const TechSessions = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  if (!localStorage.getItem('token')) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div>
      <div className="star illustration"> </div> {/* Stars from slide 3 */}
      <h2 className="accent">Weekly Tech Session</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'scroll' }}>
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type message..." style={{ margin: '10px 0' }} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default TechSessions;