import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('Hello, World!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = `Greeting: ${greeting}`;
  }, [greeting]);

  const fetchGreeting = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://100.25.217.223:5000/api/greeting');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (error) {
      console.error('Error fetching greeting:', error);
      setError('Failed to fetch greeting. Please try again later.');
      setGreeting('Error occurred');
    } finally {
      setLoading(false);
    }
  };

  const changeGreeting = () => {
    const greetings = [
      'Hello there!',
      'Welcome to our app!',
      'Greetings, user!',
      'Hi, nice to see you!',
      'Welcome aboard!'
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting);
  };

  const openBackend = () => {
    window.open('http://100.25.217.223:5000/api/items', '_blank');
  };

  const closeBackend = () => {
    window.open('http://100.25.217.223:5000/api/greeting', '_blank');
  };

  return (
    <div className="container">
      <h1>{greeting}</h1>
      
      {error && <p className="error-message">{error}</p>}
      
      <div className="button-group">
        <button 
          onClick={changeGreeting} 
          className="button"
        >
          Change Greeting
        </button>
        
        <button 
          onClick={fetchGreeting} 
          className={`button ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Fetch Greeting from API'}
        </button>
        
        <button 
          onClick={openBackend} 
          className="button"
        >
          Open Items API
        </button>
        
        <button 
          onClick={closeBackend} 
          className="button"
        >
          Open Greeting API
        </button>
      </div>
    </div>
  );
}

export default App;
