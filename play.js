const music = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const audioImg = document.getElementById("audio-img");
const heart = document.getElementById("heart");
const list =  document.getElementById("list");
const musicList = document.getElementById("music-list");

heart.addEventListener("click",()=>{
  (heart.style.color === "black") ?  heart.style.color = "#fa0a52" : heart.style.color = "black" ;
});

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

list.addEventListener("click",()=>{
    if(musicList.style.display === "none"){
      musicList.style.display = "block";
      musicList.classList.toggle=("slideLeft");
      musicList.classList.toggle=("slideRight");  
    } 
      else{  
        musicList.classList.toggle=("slideLeft");
        musicList.classList.toggle=("slideRight");  
         musicList.style.display = "none";
      }
});
