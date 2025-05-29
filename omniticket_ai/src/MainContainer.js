import React from "react";
import "./MainContainer.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer: Redesigned with left vertical navbar, modern buttons, overhauled theme, and relocated notification center.
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
          <button className="vertical-nav-btn active" tabIndex="0">
            <span role="img" aria-label="Sports" className="nav-icon">🏟️</span>
            <span className="nav-label">Sports</span>
          </button>
          <button className="vertical-nav-btn">
            <span role="img" aria-label="Movies" className="nav-icon">🎬</span>
            <span className="nav-label">Movies</span>
          </button>
          <button className="vertical-nav-btn">
            <span role="img" aria-label="Travel" className="nav-icon">✈️</span>
            <span className="nav-label">Travel</span>
          </button>
          <button className="vertical-nav-btn">
            <span role="img" aria-label="Events" className="nav-icon">🎤</span>
            <span className="nav-label">Events</span>
          </button>
          <button className="vertical-nav-btn">
            <span role="img" aria-label="More" className="nav-icon">➕</span>
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
