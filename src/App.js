import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tracks = [
    { src: "https://lmy.de/vgNHg", title: "Lotus 2" },
    { src: "https://lmy.de/pgygn", title: "Spaceballs" },
    { src: "https://lmy.de/wNTCD", title: "Turrican2" },
    { src: "https://lmy.de/foZMo", title: "Apidya" },
    { src: "https://lmy.de/AFBOr", title: "Giana Sisters" },
    { src: "https://lmy.de/XpiLv", title: "Monkey Island" },
    { src: "https://lmy.de/JcuJr", title: "Wing Commander" },
    { src: "https://lmy.de/qvWeM", title: "Speedball2" },
    { src: "https://lmy.de/aeluu", title: "Crystal Hammer" },
    { src: "https://lmy.de/HauJG", title: "Kid Chaos" },
     ];

  useEffect(() => {
    const audioPlayer = document.getElementById("audioPlayer");

    function loadTrack(index) {
      audioPlayer.src = tracks[index].src;
      audioPlayer.play();
    }

    audioPlayer.addEventListener("ended", () => {
      setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    });

    loadTrack(currentTrack);

    return () => {
      audioPlayer.removeEventListener("ended", () => {
        setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
      });
    };
  }, [currentTrack, tracks]);

  return (
    <div className="player-container">
      <audio id="audioPlayer" controls>
        Ihr Browser unterstützt das Audio-Element nicht.
      </audio>
      <ul id="playlist">
        {tracks.map((track, index) => (
          <li key={index} onClick={() => setCurrentTrack(index)}>
            {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;