// src/components/Header.jsx
export default function Header() {
    return (
      <header className="header">
        <div>
          <h1>Farmer Management System - Taita Taveta County</h1>
          <p className="slogan">
            <strong>Methali ya Kiswahili:</strong> "Mkulima ni mmoja, walaji ni wengi."
            <br />
            <small>(The farmer is one, but the eaters are many – honoring every mkulima's effort)</small>
          </p>
        </div>
        <div className="user-info">
          Admin <span style={{ fontSize: '1.5rem' }}>🧑‍🌾</span>
        </div>
      </header>
    );
  }