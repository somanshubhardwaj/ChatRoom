// src/App.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000');

function App() {
  const [room, setRoom] = useState('');
  const [currentRoom, setCurrentRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const joinRoom = () => {
    if (room) {
      socket.emit('joinRoom', { room });
      setCurrentRoom(room);
      setMessages([]); // Clear messages when switching rooms
    }
  };

  const sendMessage = () => {
    if (message && currentRoom) {
      socket.emit('sendMessage', { room: currentRoom, message });
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <div className="room-container">
        <input
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="Enter room name..."
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
      {currentRoom && <h2>Room: {currentRoom}</h2>}
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
