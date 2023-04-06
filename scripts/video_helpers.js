

///////////////////////////////////////////////////
const video = document.querySelector(".videoPlayer")
const buttonPlay = document.querySelector(".play-button");
const buttonPause = document.querySelector(".pause-button");
const buttonMute = document.querySelector(".mute-button");
const buttonUnmute = document.querySelector(".unmute-button");
const buttonRewind = document.querySelector(".rewind-button");
const buttonEnd = document.querySelector(".end-button");

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

