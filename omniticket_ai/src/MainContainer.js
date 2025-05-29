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
          {/* 
            To swap to production icons/images, replace the inline SVG content below 
            with your production asset, or import as a React component and use here.
          */}
          <button className="vertical-nav-btn active" tabIndex="0" aria-label="Sports">
            {/* Sports Icon (placeholder SVG - replace with production asset if needed) */}
            <span className="nav-icon" aria-hidden="true">
              {/* Example: Soccer ball */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" stroke="#4696d2" strokeWidth="2" fill="#f6fbff"/>
                <polygon points="12,7 15,10 13.5,14 10.5,14 9,10" fill="#34A853"/>
                <polygon points="12,12 14.5,10 13.25,13 10.75,13 9.5,10" fill="#4696d2"/>
              </svg>
            </span>
            <span className="nav-label">Sports</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Movies">
            {/* Movies Icon (placeholder SVG - replace with production asset if needed) */}
            <span className="nav-icon" aria-hidden="true">
              {/* Example: Movie clapperboard */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <rect x="3" y="7" width="18" height="12" rx="2.5" fill="#fff" stroke="#4696d2" strokeWidth="2"/>
                <rect x="3" y="4" width="18" height="4" rx="1" fill="#34A853"/>
                <rect x="5" y="5" width="2" height="2" rx=".5" fill="#F9AB00"/>
                <rect x="9" y="5" width="2" height="2" rx=".5" fill="#F9AB00"/>
                <rect x="13" y="5" width="2" height="2" rx=".5" fill="#F9AB00"/>
                <rect x="17" y="5" width="2" height="2" rx=".5" fill="#F9AB00"/>
              </svg>
            </span>
            <span className="nav-label">Movies</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Travel">
            {/* Travel Icon (placeholder SVG - replace with production asset if needed) */}
            <span className="nav-icon" aria-hidden="true">
              {/* Example: Airplane */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M2 20l20-8-20-8v6l15 2-15 2z" fill="#4696d2"/>
                <rect x="2" y="19" width="2" height="3" rx="1" fill="#34A853"/>
              </svg>
            </span>
            <span className="nav-label">Travel</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="Events">
            {/* Events Icon (placeholder SVG - replace with production asset if needed) */}
            <span className="nav-icon" aria-hidden="true">
              {/* Example: Microphone */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <rect x="9" y="3" width="6" height="10" rx="3" fill="#F9AB00" stroke="#4696d2" strokeWidth="2"/>
                <rect x="10.2" y="13" width="3.6" height="6" rx="1.8" fill="#34A853"/>
                <rect x="11.25" y="19.5" width="1.5" height="2" rx="0.5" fill="#4696d2"/>
              </svg>
            </span>
            <span className="nav-label">Events</span>
          </button>
          <button className="vertical-nav-btn" tabIndex="0" aria-label="More">
            {/* +More Icon (placeholder SVG - replace with production asset if needed) */}
            <span className="nav-icon" aria-hidden="true">
              {/* Example: Plus with circle */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" stroke="#bee2fe" strokeWidth="2" fill="#fff"/>
                <rect x="11" y="7" width="2" height="10" rx="1" fill="#4696d2"/>
                <rect x="7" y="11" width="10" height="2" rx="1" fill="#4696d2"/>
              </svg>
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
