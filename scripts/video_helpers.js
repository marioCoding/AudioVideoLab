

///////////////////////////////////////////////////
const video = document.querySelector("#vid")
const buttonPlay = document.querySelector(".play-button");
const buttonPause = document.querySelector(".pause-button");
const buttonMute = document.querySelector(".mute-button");
const buttonUnmute = document.querySelector(".unmute-button");
const buttonRewind = document.querySelector(".rewind-button");
const buttonEnd = document.querySelector(".end-button");
// images
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");
const image6 = document.querySelector(".image6");
const image7 = document.querySelector(".image7");
const image8 = document.querySelector(".image8");
const image9 = document.querySelector(".image9");
const image10 = document.querySelector(".image10");
// other variables
const changingDiv = document.querySelector(".changing-div");


// Functions that control the video playback
const playVideo = function() {
  video.play();
}
const pauseVideo = function() {
  video.pause();
}
let muteVideo = function() {
  video.muted = true;
}
let unmuteVideo = function() {
  video.muted = false;
}
let restartVideo = function(position) {
  if(!position)
    position = 0;
  video.currentTime = 0;
  video.play();
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "none";
  image7.style.display = "none";
  image8.style.display = "none";
  image9.style.display = "none";
  image10.style.display = "none";
  changingDiv.style.height = "100%";
  document.body.style.background = "linear-gradient(180deg, rgba(133,226,218,1) 0%, rgba(240,181,158,1) 100%)";
  document.body.style.backgroundSize = "100vw 100vh";
}
let endVideo = function(position) {
  if(!position)
    position = 0;
  video.currentTime = 57;
  video.pause();
}

// Add event listeners to buttons
buttonPlay.addEventListener("click", playVideo);
buttonPause.addEventListener("click", pauseVideo);
buttonMute.addEventListener("click", muteVideo);
buttonUnmute.addEventListener("click", unmuteVideo);
buttonRewind.addEventListener("click", restartVideo);
buttonEnd.addEventListener("click", endVideo);

