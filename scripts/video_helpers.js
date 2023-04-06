import { cueTimer } from "./cuepoints.js";

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


///////////////////////////////////////////////////
/* The following code changes the changing-div according to 
  a given cuepoint in the video */

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const image5 = document.querySelector(".image5");
const image6 = document.querySelector(".image6");
const image7 = document.querySelector(".image7");

document.addEventListener("DOMContentLoaded", (e) => {
  var myCues = [
      { seconds: 3.6, callback: displayProfessorImage },
      { seconds: 11.5, callback: displaySynergiesImage },
      { seconds: 23, callback: displayBananaImage },
      { seconds: 31, callback: displayChatGif },
      { seconds: 37.5, callback: displayParadigmShift },
      { seconds: 50, callback: displayNukeGif },
      { seconds: 54, callback: displayEmojiImage }
  ];

  //this activates the cuepoints module.
  // Pass it the ID of the video to watch
  // and the array of cuepoint objects.
  cueTimer.setup("vid", myCues);

  //shortcut variables
  const vid = document.querySelector("#vid");
  const selectList = document.querySelector("#video_select");

  // make the select list control what video format to play
  selectList.addEventListener("change", (e) => {
      selectVideo(e, vid);
  });

});

function displayProfessorImage() {
  image1.style.display = "block";
}
function displaySynergiesImage() {
  image1.style.display = "none";
  image2.style.display = "block";
}
function displayBananaImage() {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "block";
}
function displayChatGif() {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "block";
}
function displayParadigmShift() {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "block";
}
function displayNukeGif() {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "block";
}
function displayEmojiImage() {
  image1.style.display = "none";
  image2.style.display = "none";
  image3.style.display = "none";
  image4.style.display = "none";
  image5.style.display = "none";
  image6.style.display = "none";
  image7.style.display = "block";
}

