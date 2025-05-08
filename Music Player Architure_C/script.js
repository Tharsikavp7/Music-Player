// script.js
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");

// Playlist
const songs = [
  { name: "song1.mp3", title: "Relaxing Tune" },
  { name: "song2.mp3", title: "Happy Vibes" },
  { name: "song3.mp3", title: "Smooth Jazz" }
];

let songIndex = 0;

// Load song
function loadSong(song) {
  audio.src = song.name;
  title.innerText = song.title;
}

// Play song
function playSong() {
  audio.play();
  playBtn.innerText = "⏸️";
}

// Pause song
function pauseSong() {
  audio.pause();
  playBtn.innerText = "▶️";
}

// Toggle play/pause
let isPlaying = false;
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
  isPlaying = !isPlaying;
});

// Previous song
prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
  isPlaying = true;
});

// Next song
nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
  isPlaying = true;
});

// Initial load
loadSong(songs[songIndex]);
