import "./PopularArtist.css";
import { useState } from "react";
import { PlayIcon } from "./Icons.jsx";

function PopularArtist() {
  const [artists] = useState([
    { name: "Pritam", image: "/pritam.jpg" },
    { name: "Atif Aslam", image: "/atif.jpg" },
    { name: "Anuv Jain", image: "/anuv.jpg" },
    { name: "Arijit Singh", image: "/arijit.jpg" },
    { name: "Karan Aujla", image: "/karan.jpg" },
    { name: "Shubh", image: "/shubh.jpg" },
    { name: "AP Dhillon", image: "/ap.jpg" },
  ]);

  return (
    <div className="popular-artist">
      <div className="artist-header">
        <h2>Popular Artists</h2>
        <button className="show-all">Show all</button>
      </div>
      <div className="artist-slider">
        <ul>
          {artists.map((artist, index) => (
            <li key={index}>
              <div className="artist-card">
                <div className="artist-image-container">
                  <img src={artist.image} alt={artist.name} />
                  <div className="play-button-container">
                    <button className="play-button">
                      <PlayIcon />
                    </button>
                  </div>
                </div>
                <p className="artist-name">{artist.name}</p>
                <span className="artist-label">Artist</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularArtist;
