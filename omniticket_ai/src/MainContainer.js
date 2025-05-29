import React from "react";
import "./MainContainer.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer: Vertical navigation bar with modern SVG icon buttons for each domain.
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

      {/* Main Content + Notification/Action Button Cluster */}
      <div className="main-content-area">
        {/* Top Header with Notification Center, AI Chatbot, and Dashboard */}
        {/* 
          Layout structure:
          - Notification bell and Notification Center (left/top)
          - AI Chatbot and Dashboard buttons clustered to the right/top-right on desktop, fixed to bottom on mobile
          All buttons have dedicated containers and spacing, avoiding overlap on any device.
        */}
        <header className="main-header new-action-header">
          <div className="header-title">
            {/* Could add user avatar, time, etc, here */}
            <span style={{ fontWeight: 700, fontSize: "1.22rem", letterSpacing: ".03em" }}>
              Welcome to OmniTicket AI
            </span>
          </div>
          {/* All action buttons/notifications grouped for visual clarity */}
          <div className="header-action-group">
            {/* Notification Center */}
            <aside className="header-notification-center" aria-label="Notifications">
              <div className="notification-bell" title="Notifications">🔔</div>
              <div className="notification-center-placeholder">
                Notification Center (Placeholder)
              </div>
            </aside>
            {/* Floating AI Chatbot Button (moves to floating on mobile) */}
            <aside className="main-chatbot-fab header-aligned">
              <button className="chatbot-fab-btn" tabIndex="0">
                <span role="img" aria-label="AI" style={{ fontSize: 23, verticalAlign: "middle" }}>🤖</span>
                <span className="chatbot-btn-label">AI Chat</span>
              </button>
            </aside>
            {/* Dashboard Access Button (moves to floating on mobile) */}
            <aside className="main-dashboard-access header-aligned">
              <button className="dashboard-access-btn" tabIndex="0">
                <span role="img" aria-label="Admin" style={{ marginRight: 7 }}>🛠️</span>
                <span className="dashboard-btn-label">Dashboard</span>
              </button>
            </aside>
          </div>
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
      {/* On mobile: AI Chatbot and Dashboard become fixed/floating at bottom.
          This fallback placement ensures no overlaps and good accessibility.
      */}
      <div className="fixed-mobile-action-bar">
        <button className="chatbot-fab-btn" tabIndex="0">
          <span role="img" aria-label="AI" style={{ fontSize: 21, verticalAlign: "middle" }}>🤖</span>
          <span className="chatbot-btn-label">AI Chat</span>
        </button>
        <button className="dashboard-access-btn" tabIndex="0">
          <span role="img" aria-label="Admin" style={{ marginRight: 7 }}>🛠️</span>
          <span className="dashboard-btn-label">Dashboard</span>
        </button>
      </div>
    </div>
  );
}

export default MainContainer;
