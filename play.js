const music = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const audioImg = document.getElementById("audio-img");
const options = document.querySelectorAll(".options img");

function playOrStopMusic() {
  let playState = music.paused ? "play" : "pause";
  if (playState === "play") {
    pauseBtn.style.display = "flex";
    audioImg.classList.add("rotate");
    playBtn.style.display = "none";
    music.play();
  } else {
    pauseBtn.style.display = "none";
    audioImg.classList.remove("rotate");
    playBtn.style.display = "flex";
    music.pause();
  }
}
