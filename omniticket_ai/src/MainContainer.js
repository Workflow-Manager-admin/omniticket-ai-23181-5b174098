import React from "react";
import "./MainContainer.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer: Arranges main features as separate, professional sections with clear visual distinction.
 */
function MainContainer() {
  return (
    <div className="main-container vertical-layout">
      {/* Side Vertical Navigation */}
      <nav className="vertical-nav" aria-label="Domain Navigation">
        <div className="nav-brand">
          <span role="img" aria-label="Logo" className="nav-logo">
            🎟️
          </span>
        </div>
        <div className="vertical-nav-tabs">
          {/* SVG Icon Buttons for each domain */}
          <button className="vertical-nav-btn active" tabIndex="0" aria-label="Sports">
            <span className="nav-icon" aria-hidden="true">
              {/* Soccer ball SVG */}
              <svg width="25" height="25" fill="none" viewBox="0 0 25 25" aria-hidden="true">
                <circle cx="12.5" cy="12.5" r="10.5" stroke="currentColor" strokeWidth="2" fill="#fff"/>
                <circle cx="12.5" cy="12.5" r="4.2" fill="#4696d2" stroke="#203047" strokeWidth="1.5"/>
                <path d="M12.5 8.3L14 10.8 13 13.8 12.5 13 12 13.8 11 10.8z" fill="#F9AB00" stroke="#203047" strokeWidth="1"/>
              </svg>
            </span>
            <span className="nav-label">Sports</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Movies">
            <span className="nav-icon" aria-hidden="true">
              {/* Movie clapperboard SVG */}
              <svg width="26" height="25" fill="none" viewBox="0 0 26 25" aria-hidden="true">
                <rect x="3" y="8" width="20" height="13" rx="2" fill="#fff" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="5" width="20" height="5" rx="1.2" fill="#4696d2" stroke="#203047" strokeWidth="1.5"/>
                <rect x="6" y="7" width="2.6" height="2" rx=".7" fill="#F9AB00"/>
                <rect x="11" y="7" width="2.6" height="2" rx=".7" fill="#F9AB00"/>
                <rect x="16" y="7" width="2.6" height="2" rx=".7" fill="#F9AB00"/>
              </svg>
            </span>
            <span className="nav-label">Movies</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Travel">
            <span className="nav-icon" aria-hidden="true">
              {/* Airplane SVG */}
              <svg width="26" height="25" fill="none" viewBox="0 0 26 25" aria-hidden="true">
                <path d="M4.5 12.8l16-6.1c.5-.18 1 .34.86.86l-6.1 16c-.16.41-.67.52-.93.16l-3.42-5.04-3.54 2.23c-.43.27-.97-.15-.74-.62l2-3.99-5.02-3.41c-.37-.25-.26-.77.15-.93z" fill="#4696d2" stroke="#203047" strokeWidth="1.3"/>
                <circle cx="13.5" cy="13.5" r="1.45" fill="#F9AB00"/>
              </svg>
            </span>
            <span className="nav-label">Travel</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Events">
            <span className="nav-icon" aria-hidden="true">
              {/* Microphone SVG */}
              <svg width="25" height="25" fill="none" viewBox="0 0 25 25" aria-hidden="true">
                <rect x="9.1" y="4" width="6.8" height="11.5" rx="3.4" fill="#fff" stroke="currentColor" strokeWidth="2"/>
                <rect x="11.2" y="17.6" width="2.6" height="4.1" rx="1.2" fill="#4696d2" stroke="#203047" strokeWidth="1"/>
                <path d="M6.2 12.6v.4a6.3 6.3 0 0012.6 0v-.4" stroke="#34A853" strokeWidth="1.4"/>
                <rect x="12.3" y="22.5" width="0.7" height="1.5" rx="0.35" fill="#F9AB00"/>
              </svg>
            </span>
            <span className="nav-label">Events</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="More">
            <span className="nav-icon" aria-hidden="true">
              {/* Plus SVG */}
              <svg width="25" height="25" fill="none" viewBox="0 0 25 25" aria-hidden="true">
                <circle cx="12.5" cy="12.5" r="10.5" stroke="currentColor" strokeWidth="2" fill="#fff"/>
                <rect x="11" y="7" width="3" height="11" rx="1.2" fill="#4696d2"/>
                <rect x="7" y="11" width="11" height="3" rx="1.2" fill="#4696d2"/>
              </svg>
            </span>
            <span className="nav-label">+ More</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="main-content-area">
        {/* Professional sign-in bar & Notification Center below it */}
        <div className="signin-ntf-bar">
          <div className="signin-bar">
            <button className="btn btn-large main-signin-btn">Sign In</button>
          </div>
          {/* Distinct Notification Center Card - visually catchy, refined for a modern professional look */}
          <aside className="main-notification-center" aria-label="Notifications">
            <div className="notification-bell" title="Notifications" tabIndex="0" role="button" aria-label="Open notifications">
              {/* Modern bell icon, high contrast */}
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden="true" style={{marginBottom: -1}}>
                <path d="M10.5 2.75c-3.031 0-5.221 2.151-5.221 5.319v2.833c0 .446-.169 1.025-.377 1.384L3.09 14.3c-.393.661-.052 1.2.747 1.2h13.326c.8 0 1.14-.539.747-1.2l-1.813-2.014c-.208-.36-.377-.938-.377-1.384v-2.833C15.721 4.9 13.532 2.75 10.5 2.75Z" stroke="#F9AB00" strokeWidth="1.5" fill="#fff"/>
                <circle cx="16.5" cy="6.5" r="2" fill="#F9AB00" stroke="#fff" strokeWidth="1"/>
                <path d="M8.3 17.5c.553.604 1.201.9 1.714.9.513 0 1.16-.296 1.714-.9" stroke="#4696d2" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>
            <div className="main-notification-center-label" title="All your notifications in one place.">
              <strong>Notification Center</strong>&nbsp;
              <span style={{color: "#7a8faa", fontWeight: 400}}>
                You’re all caught up! (No new notifications)
              </span>
            </div>
          </aside>
        </div>

        {/* Feature Cards: */}
        <section className="main-feature-card search-card">
          <div className="feature-card-header">
            <span className="feature-card-icon" role="img" aria-label="Search">
              🔎
            </span>
            <span className="feature-card-title">Universal Search</span>
          </div>
          <div className="feature-card-body main-search-bar-placeholder">
            Search for sports, movies, travel, events, and more.
          </div>
        </section>

        <section className="main-feature-card recommendations-card">
          <div className="feature-card-header">
            <span className="feature-card-icon" role="img" aria-label="Recommendations">
              🎯
            </span>
            <span className="feature-card-title">Personalized Recommendations</span>
          </div>
          <div className="feature-card-body recommendations-placeholder">
            Enjoy smart, AI-powered suggestions and event carousels.
          </div>
        </section>

        <section className="main-feature-card booking-card">
          <div className="feature-card-header">
            <span className="feature-card-icon" role="img" aria-label="Booking">
              🎟️
            </span>
            <span className="feature-card-title">Booking Flow</span>
          </div>
          <div className="feature-card-body booking-placeholder">
            Reserve tickets, select combo bundles, and proceed through our streamlined checkout experience.
          </div>
        </section>

        <section className="main-feature-card seatmap-card">
          <div className="feature-card-header">
            <span className="feature-card-icon" role="img" aria-label="Seat Map">
              🗺️
            </span>
            <span className="feature-card-title">Interactive Seat Map</span>
          </div>
          <div className="feature-card-body seatmap-placeholder">
            Explore real-time seat availability (with AR/VR previews) and immersive selection tools.
          </div>
        </section>
      </div>
      {/* Persistent Action Bar: AI Chatbot button fixed at bottom for both desktop and mobile */}
      <div className="persistent-fab-bar">
        <button className="chatbot-fab-btn" tabIndex="0">
          <span role="img" aria-label="AI" style={{ fontSize: 21, verticalAlign: "middle" }}>
            🤖
          </span>
          <span className="chatbot-btn-label">AI Chat</span>
        </button>
      </div>
    </div>
  );
}

export default MainContainer;
