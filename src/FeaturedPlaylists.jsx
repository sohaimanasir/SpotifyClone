// import "./FeaturedPlaylists.css";
import { useState } from "react";
import { PlayIcon } from "./Icons.jsx";

function FeaturedPlaylists() {
  const [playlists] = useState([
    {
      name: "Top Hits Hindi",
      description: "The hottest tracks in India right now",
      image: "/playlist1.jpg",
    },
    {
      name: "Punjabi 101",
      description: "Ultimate Punjabi hits",
      image: "/playlist2.jpg",
    },
    {
      name: "Bollywood Butter",
      description: "Smooth hits from Bollywood",
      image: "/playlist3.jpg",
    },
    {
      name: "Indie India",
      description: "Best of independent Indian artists",
      image: "/playlist4.jpg",
    },
    {
      name: "Trending Now",
      description: "What's trending in India",
      image: "/playlist5.jpg",
    },
  ]);

  return (
    <div className="featured-playlists">
      <div className="section-header">
        <h2>Featured Playlists</h2>
        <button className="show-all">Show all</button>
      </div>
      <div className="playlists-grid">
        {playlists.map((playlist, index) => (
          <div className="playlist-card" key={index}>
            <div className="playlist-image-container">
              <img src={playlist.image} alt={playlist.name} />
              <div className="play-button-container">
                <button className="play-button">
                  <PlayIcon />
                </button>
              </div>
            </div>
            <p className="playlist-name">{playlist.name}</p>
            <p className="playlist-description">{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedPlaylists;
