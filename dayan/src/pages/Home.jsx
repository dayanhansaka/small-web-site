import React from 'react';
import bgImage from '../assets/srilanka-bg.jpg';

function Home() {
  return (
    <div 
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Sri Lanka</h1>
        <p>Explore the Wonder of Asia—from ancient ruins and lush tea plantations to pristine beaches.</p>
        <button className="explore-btn">Discover Destinations</button>
      </div>
    </div>
  );
}

export default Home;