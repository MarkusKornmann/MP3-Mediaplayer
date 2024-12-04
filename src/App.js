import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTrack, setCurrentTrack] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tracks = [
    { src: "https://lmy.de/vgNHg", title: "Lotus 2" }, //https://www.amigaremix.com/listen/3611/solarstriker_-_lotus_2_o.stelzer_remix_-_amigaremix_03611.mp3
    { src: "https://lmy.de/pgygn", title: "Spaceballs" }, //https://www.amigaremix.com/listen/3612/gareth_wood_-_spaceballs_-_state_of_the_art_no_corruption_mix_-_amigaremix_03612.mp3
    { src: "https://lmy.de/foZMo", title: "Apidya" }, //https://www.amigaremix.com/listen/3545/dr.future_-_apidya_highscore_-_amigaremix_03545.mp3
    { src: "https://lmy.de/AFBOr", title: "Giana Sisters" }, //https://www.amigaremix.com/listen/2805/mortalshock_-_giana_sisters_intro_remix_-_amigaremix_02805.mp3
    { src: "https://lmy.de/XpiLv", title: "Monkey Island" }, //https://www.amigaremix.com/listen/52/deadly_cookie_-_monkey_island_-_amigaremix_00052.mp3
    { src: "https://lmy.de/JcuJr", title: "Wing Commander" }, //https://www.amigaremix.com/listen/2888/mano_-_wing_commander_-_intro_-_amigaremix_02888.mp3
    { src: "https://lmy.de/qvWeM", title: "Speedball2" }, //https://www.amigaremix.com/listen/3062/pinozulpo_-_speedball_2_-_brutal_antanux_-_amigaremix_03062.mp3
    { src: "https://lmy.de/kMNTh", title: "Crystal Hammer" }, //https://www.amigaremix.com/listen/3265/solarstriker_-_crystal_hammer_2020_remix_-_amigaremix_03265.mp3
    { src: "https://lmy.de/wNTCD", title: "Turrican2" }, //https://www.amigaremix.com/listen/3548/tony_fluke73_wiren_-_turrican_ii_freedom_live_performance_-_amigaremix_03548.mp3
    { src: "https://lmy.de/HauJG", title: "Kid Chaos" }, //https://www.amigaremix.com/listen/112/infamous_-_kid_chaos_running_red_remix_-_amigaremix_00112.mp3
    { src: "https://lmy.de/QYuhH", title: "Nightwolf" }, //https://www.amigaremix.com/listen/3549/nightwolf_-_emaxtrsi_-_def.loration_nightwolf_2024_remix_-_amigaremix_03549.mp3
    { src: "https://lmy.de/qQSKR", title: "Silkworm" }, //https://www.amigaremix.com/listen/3428/tony_fluke73_wiren_-_silkworm_turrican_mashup_bit_live_2022_-_amigaremix_03428.mp3
    { src: "https://lmy.de/lAcWX", title: "Hybris" }, //https://www.amigaremix.com/listen/3333/jogeir_liljedahl_-_hybris_imploded_-_amigaremix_03333.mp3
    { src: "https://lmy.de/ecReG", title: "Amiga Tribute" },// https://www.amigaremix.com/listen/2375/ultrasyd_-_amiga_tribute_-_amigaremix_02375.mp3
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