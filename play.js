const music = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const audioImg = document.getElementById("audio-img");
function playOrStopMusic() {
  let playState = music.paused ? "play" : "pause";
  if (playState === "play") {
    pauseBtn.style.display = "none";
    audioImg.classList.add("rotate");
    playBtn.style.display = "flex";
    music.play();
  } else {
    pauseBtn.style.display = "flex";
    audioImg.classList.remove("rotate");
    playBtn.style.display = "none";
    music.pause();
  }
}
