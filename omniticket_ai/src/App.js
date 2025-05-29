import React from 'react';
import './App.css';
import MainContainer from './MainContainer';

/**
 * PUBLIC_INTERFACE
 * App: Top-level shell layout for OmniTicket AI
 * Handles branding/navbar and renders the main UI container (MainContainer).
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            {/* Placeholder for navigation actions, login, etc. */}
            <button className="btn">Sign In</button>
          </div>
        </div>
      </nav>
      <main style={{ marginTop: 72 }}>
        {/* Main business UI area */}
        <MainContainer />
      </main>
    </div>
  );
}

export default App;