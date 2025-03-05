import "./PopularArtist.css";
import { useState } from "react";
import { PlayIcon } from "./Icons.jsx";

function PopularArtist() {
  const [artists] = useState([
    { name: "Pritam", image: "/public/assets/Pritam.jpeg" },
    { name: "Atif Aslam", image: "/public/assets/atifaslam.jpg" },
    { name: "Anuv Jain", image: "/public/assets/anuvjain.jpg" },
    { name: "Arijit Singh", image: "/public/assets/arjitsingh.jpg" },
    { name: "Karan Aujla", image: "/public/assets/karanaujla.jpg" },
    { name: "Shubh", image: "/public/assets/shubh.jpg" },
    { name: "AP Dhillon", image: "/public/assets/apdhillon.jpg" },
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
