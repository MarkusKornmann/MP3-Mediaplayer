const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const tracks = playlist.getElementsByTagName('li');
let currentTrack = 0;

function loadTrack(index) {
    audioPlayer.src = tracks[index].getAttribute('data-src');
    audioPlayer.play();
}

audioPlayer.addEventListener('ended', function() {
    currentTrack++;
    if (currentTrack >= tracks.length) {
        currentTrack = 0;
    }
    loadTrack(currentTrack);
});

for (let i = 0; i < tracks.length; i++) {
    tracks[i].addEventListener('click', function() {
        currentTrack = i;
        loadTrack(currentTrack);
    });
}

// Load the first track initially
loadTrack(currentTrack);
