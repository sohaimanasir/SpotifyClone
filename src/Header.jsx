// Header.jsx
import "./Header.css";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="spotify-navbar">
        <div className="spotify-logo">
          <img
            src=".\src\assets\Spotify_Primary_Logo_RGB_White.png"
            alt="spotify-logo"
          />
        </div>
        <div className="home-icon">
          <i className="fa-solid fa-house"></i>
        </div>
        <div className="search-bar">
          <div className="search-input-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="What do you want to play?"
            />
            <i className="fa-solid fa-window-restore restore-icon"></i>
          </div>
        </div>
      </div>

      <div
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>

      <nav className={`nav-elements ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="spotify-elements">
          <p className="nav-item">Premium</p>
          <p className="nav-item">Support</p>
          <p className="nav-item">Download</p>
        </div>

        <div className="log-in-section">
          <div className="install-app">
            <i className="fa-solid fa-arrow-down"></i>
            <p className="nav-item">Install App</p>
          </div>
          <p className="nav-item signup-link">Sign up</p>
          <button className="login-btn">Log in</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
