import "./PopularArtist.css";
import { useState } from "react";

function PopularArtist() {
  const [artist] = useState([
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
        <h1>Popular Artists</h1>
        <p>Show all</p>
      </div>
      <div className="artist-slider">
        <ul>
          {artist.map((a, index) => (
            <li key={index}>
              <img src={a.image} alt={a.name} />
              <p>{a.name}</p>
              <span>Artist</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularArtist;

