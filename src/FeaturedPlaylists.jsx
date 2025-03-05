// import "./FeaturedPlaylists.css";
import { useState } from "react";
import { PlayIcon } from "./Icons.jsx";

function FeaturedPlaylists() {
  const [playlists] = useState([
    {
      name: "Top Hits Hindi",
      description: "The hottest tracks in India right now",
      image: "src/assets/tophindihits.jpg",
    },
    {
      name: "Punjabi 101",
      description: "Ultimate Punjabi hits",
      image: "src/assets/punjabi101.jpg",
    },
    {
      name: "Bollywood Butter",
      description: "Smooth hits from Bollywood",
      image: "src/assets/bollybutter.jpg",
    },
    {
      name: "Indie India",
      description: "Best of independent Indian artists",
      image: "src/assets/indieindia.jpg",
    },
    {
      name: "Trending Now",
      description: "What's trending in India",
      image: "src/assets/trendingnow.jpg",
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
