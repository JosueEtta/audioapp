const music = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
function playOrStopMusic() {
  let playState = music.paused ? "play" : "pause";
  if (playState === "play") {
    music.play();
    document.getElementById("playBtn").style.display = "none";
  } else {
    music.pause();
    document.getElementById("pauseBtn").style.display = "none";
  }
}
