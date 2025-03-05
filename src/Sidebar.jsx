import "./Sidebar.css";
import PopularArtist from "./PopularArtist.jsx";
import RecentlyPlayed from "./RecentlyPlayed.jsx";
import FeaturedPlaylists from "./FeaturedPlaylists.jsx";
import { HomeIcon, SearchIcon, LibraryIcon } from "./Icons.jsx";

function BodySection() {
  return (
    <>
      <div className="spotify-main-section">
        <div className="sidebar-section">
          <div className="logo">
            <img src="\public\assets\logo.jpg" alt="" />
          </div>
          <div className="sidebar-nav">
            <ul>
              <li className="nav-item active">
                <a href="#home">
                  <HomeIcon />
                  <span>Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#search">
                  <SearchIcon />
                  <span>Search</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#library">
                  <LibraryIcon />
                  <span>Your Library</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="playlist-section">
            <div className="playlist-actions">
              <button className="create-playlist">
                <span className="plus-icon">+</span>
                <span>Create Playlist</span>
              </button>
              <button className="liked-songs">
                <span className="heart-icon">❤</span>
                <span>Liked Songs</span>
              </button>
            </div>
            <div className="playlist-divider"></div>
            <div className="playlists">
              <ul>
                <li>
                  <a href="#playlist1">Chill Vibes</a>
                </li>
                <li>
                  <a href="#playlist2">Workout Mix</a>
                </li>
                <li>
                  <a href="#playlist3">Road Trip</a>
                </li>
                <li>
                  <a href="#playlist4">Study Focus</a>
                </li>
                <li>
                  <a href="#playlist5">Party Hits</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="songs-section">
          <div className="content-wrapper">
            <PopularArtist />
            <RecentlyPlayed />
            <FeaturedPlaylists />
          </div>
        </div>
      </div>
    </>
  );
}

export default BodySection;
