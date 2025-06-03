import React, { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('Hello, World!');
  const [loading, setLoading] = useState(false);

  const fetchGreeting = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://100.25.217.223:5000/api/greeting');
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (error) {
      setGreeting('Failed to fetch greeting.');
    } finally {
      setLoading(false);
    }
  };

  const changeGreeting = () => {
    setGreeting('You clicked the button!');
  };

  const openBackend = () => {
    window.open('http://100.25.217.223:5000/api/items', '_blank');
  };

  const closeBackend = () => {
    window.open('http://100.25.217.223:5000/api/greeting', '_blank');
  };

  return (
    <div style={styles.container}>
      <h1>{greeting}</h1>
      <div style={styles.buttonGroup}>
        <button onClick={changeGreeting} style={styles.button}>Change Greeting</button>
        <button onClick={fetchGreeting} style={styles.button}>
          {loading ? 'Loading...' : 'Fetch Greeting from API'}
        </button>
        <button onClick={openBackend} style={styles.button}>Open Backend Link</button>
        <button onClick={closeBackend} style={styles.button}>close Backend Link</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial',
    textAlign: 'center',
    marginTop: '20%',
    padding: '20px',
  },
  buttonGroup: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default App;
