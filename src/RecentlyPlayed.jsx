// import "./RecentlyPlayed.css";
import { useState } from "react";
import { PlayIcon } from "./Icons.jsx";

function RecentlyPlayed() {
  const [recentTracks] = useState([
    {
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      image: "/public/assets/tumhiho.jpg",
    },
    {
      title: "Pasoori",
      artist: "Ali Sethi, Shae Gill",
      image: "/public/assets/pasoori.jpg",
    },
    {
      title: "Kesariya",
      artist: "Pritam, Arijit Singh",
      image: "/public/assets/kesariya.jpg",
    },
    {
      title: "Raatan Lambiyan",
      artist: "Tanishk Bagchi, Jubin Nautiyal",
      image: "/public/assets/ratanlambiyan.jpg",
    },
    {
      title: "Excuses",
      artist: "AP Dhillon",
      image: "/public/assets/excuses.jpg",
    },
  ]);

  return (
    <div className="recently-played">
      <div className="section-header">
        <h2>Recently Played</h2>
        <button className="show-all">Show all</button>
      </div>
      <div className="tracks-grid">
        {recentTracks.map((track, index) => (
          <div className="track-card" key={index}>
            <div className="track-image-container">
              <img src={track.image} alt={track.title} />
              <div className="play-button-container">
                <button className="play-button">
                  <PlayIcon />
                </button>
              </div>
            </div>
            <p className="track-title">{track.title}</p>
            <p className="track-artist">{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyPlayed;
