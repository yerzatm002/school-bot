import React, { useState } from 'react';
import '../styles/ChatGPT.css'; // You can create this file for styling

const GameCatalog = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async () => {
    if (inputMessage === '') return;
  
    // Append user's message to chat
    const userMessage = { role: 'user', content: inputMessage };
    setMessages([...messages, userMessage]);
  
    // Clear the input field
    setInputMessage('');
  
    try {
      // Call the OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer sk-l-AQVLvcgluc7Qt9EMoTqgjWRMJHpkDxCKVeosrifKT3BlbkFJC40Sfu4YHcb1VgsBAqLa1hpUv0oifUwUywkFNonh4A`,
        },
        body: JSON.stringify({
          model: 'gpt-4', // or 'gpt-3.5-turbo'
          messages: [{ role: 'user', content: inputMessage }],
        }),
      });
  
      const data = await response.json();
      console.log('API Response:', data); // Log API response to check if you're receiving it
  
      if (data && data.choices && data.choices.length > 0) {
        const gptMessage = data.choices[0].message.content;
        
        // Append ChatGPT's response to chat
        const gptResponse = { role: 'gpt', content: gptMessage };
        setMessages((prevMessages) => [...prevMessages, gptResponse]);
      } else {
        console.error('No valid response from API:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role === 'user' ? 'user-message' : 'gpt-message'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default GameCatalog;
