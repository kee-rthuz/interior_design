
import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Navbar';
import Loading from './components/loding'; // Assuming your Loading component is in the same directory

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;

