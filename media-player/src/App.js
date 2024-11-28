import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tracks = [
    { src: "https://www.amigaremix.com/listen/3611/solarstriker_-_lotus_2_o.stelzer_remix_-_amigaremix_03611.mp3", title: "Lotus 2" },
    { src: "https://www.amigaremix.com/listen/3612/gareth_wood_-_spaceballs_-_state_of_the_art_no_corruption_mix_-_amigaremix_03612.mp3", title: "Spaceballs" },
    { src: "https://www.amigaremix.com/listen/3548/tony_fluke73_wiren_-_turrican_ii_freedom_live_performance_-_amigaremix_03548.mp3", title: "Turrican2" },
    { src: "https://www.amigaremix.com/listen/3545/dr.future_-_apidya_highscore_-_amigaremix_03545.mp3", title: "Apidya" },
    { src: "https://www.amigaremix.com/listen/2805/mortalshock_-_giana_sisters_intro_remix_-_amigaremix_02805.mp3", title: "Giana Sisters" },
    { src: "https://www.amigaremix.com/listen/52/deadly_cookie_-_monkey_island_-_amigaremix_00052.mp3", title: "Monkey Island" },
    { src: "https://www.amigaremix.com/listen/2888/mano_-_wing_commander_-_intro_-_amigaremix_02888.mp3", title: "Wing Commander" },
    { src: "https://www.amigaremix.com/listen/3062/pinozulpo_-_speedball_2_-_brutal_antanux_-_amigaremix_03062.mp3", title: "Speedball2" },
    { src: "https://www.amigaremix.com/listen/2173/d.a.wilson_-_crystal_hammer_-_electropops_mix_-_amigaremix_02173.mp3", title: "Crystal Hammer" },
    { src: "https://www.amigaremix.com/listen/112/infamous_-_kid_chaos_running_red_remix_-_amigaremix_00112.mp3", title: "Kid Chaos" },
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