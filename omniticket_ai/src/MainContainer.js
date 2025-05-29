import React from "react";
import "./MainContainer.css";

// Placeholder images (use your own assets here or public URLs)
const sportsImg = "https://cdn-icons-png.flaticon.com/512/69/69524.png";      // soccer ball icon
const moviesImg = "https://cdn-icons-png.flaticon.com/512/2829/2829881.png"; // movie clapper
const travelImg = "https://cdn-icons-png.flaticon.com/512/747/747086.png";   // airplane
const eventsImg = "https://cdn-icons-png.flaticon.com/512/753/753318.png";   // microphone
const moreImg = "https://cdn-icons-png.flaticon.com/512/1828/1828817.png";   // plus/add

/**
 * PUBLIC_INTERFACE
 * MainContainer: Redesigned with left vertical navbar, modern image-based buttons, overhauled theme, and relocated notification center.
 */
function MainContainer() {
  // Dummy state logic/skipped for now, as placeholder is sufficient
  return (
    <div className="main-container vertical-layout">
      {/* Side Vertical Navigation */}
      <nav className="vertical-nav" aria-label="Domain Navigation">
        <div className="nav-brand">
          <span role="img" aria-label="Logo" className="nav-logo">🎟️</span>
        </div>
        <div className="vertical-nav-tabs">
          {/* Replace SVGs below with accessible images */}
          <button className="vertical-nav-btn active" tabIndex="0" aria-label="Sports">
            <span className="nav-icon" aria-hidden="true">
              <img
                src={sportsImg}
                alt="Sports"
                className="nav-img"
                draggable="false"
              />
            </span>
            <span className="nav-label">Sports</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Movies">
            <span className="nav-icon" aria-hidden="true">
              <img
                src={moviesImg}
                alt="Movies"
                className="nav-img"
                draggable="false"
              />
            </span>
            <span className="nav-label">Movies</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Travel">
            <span className="nav-icon" aria-hidden="true">
              <img
                src={travelImg}
                alt="Travel"
                className="nav-img"
                draggable="false"
              />
            </span>
            <span className="nav-label">Travel</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Events">
            <span className="nav-icon" aria-hidden="true">
              <img
                src={eventsImg}
                alt="Events"
                className="nav-img"
                draggable="false"
              />
            </span>
            <span className="nav-label">Events</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="More">
            <span className="nav-icon" aria-hidden="true">
              <img
                src={moreImg}
                alt="+ More"
                className="nav-img"
                draggable="false"
              />
            </span>
            <span className="nav-label">+ More</span>
          </button>
        </div>
      </nav>

      {/* Main Content + Notification Header */}
      <div className="main-content-area">
        {/* Top Header with Notification Center */}
        <header className="main-header">
          <div className="header-title">
            {/* Could add user avatar, time, etc, here */}
            <span style={{ fontWeight: 700, fontSize: "1.22rem", letterSpacing: ".03em" }}>
              Welcome to OmniTicket AI
            </span>
          </div>
          <aside className="header-notification-center" aria-label="Notifications">
            <div className="notification-bell" title="Notifications">🔔</div>
            <div className="notification-center-placeholder">
              Notification Center (Placeholder)
            </div>
          </aside>
        </header>

        {/* Universal Search Bar */}
        <section className="main-search-bar-zone">
          <div className="main-search-bar-placeholder">
            <span role="img" aria-label="Search" style={{ marginRight: 7 }}>🔎</span>
            Universal Search (Placeholder)
          </div>
        </section>

        {/* Recommendations/Carousel */}
        <section className="main-recommendations-zone">
          <div className="recommendations-placeholder">
            🎯 Personalized Recommendations / Carousels (Placeholder)
          </div>
        </section>

        {/* Booking/Seat Map/AR/VR */}
        <section className="main-booking-zone">
          <div className="booking-placeholder">
            🗺️ Booking Flow & Interactive Seat Map (AR/VR Preview Placeholder)
          </div>
        </section>
      </div>

      {/* Floating AI Chatbot */}
      <aside className="main-chatbot-fab">
        <button className="chatbot-fab-btn">
          <span role="img" aria-label="AI" style={{ fontSize: 23, verticalAlign: "middle" }}>🤖</span>
          <span style={{ fontWeight: 700, letterSpacing: 0.5, marginLeft: 8 }}>AI Chat</span>
        </button>
      </aside>

      {/* Admin/Vendor Dashboard Access */}
      <aside className="main-dashboard-access">
        <button className="dashboard-access-btn">
          <span role="img" aria-label="Admin" style={{ marginRight: 7 }}>🛠️</span>
          Admin/Vendor Dashboard
        </button>
      </aside>
    </div>
  );
}

export default MainContainer;
