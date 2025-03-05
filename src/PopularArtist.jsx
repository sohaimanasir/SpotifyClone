import "./PopularArtist.css";
import { useState } from "react";
import { PlayIcon } from "./Icons.jsx";

function PopularArtist() {
  const [artists] = useState([
    {
      name: "Pritam",
      image:
        "data:image/jpeg;base64,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",
    },
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
