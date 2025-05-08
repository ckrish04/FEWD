import React, { useState } from 'react';

const ContactUs = ({ username, onLogout }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${username}: ${message}`);
    setMessage('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <p>Welcome, <strong>{username}</strong>! <button onClick={onLogout}>Logout</button></p>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your message here..."
          rows="5"
          cols="50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit" style={{ marginTop: '10px' }}>Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
