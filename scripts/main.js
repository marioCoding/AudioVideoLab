///////////////////////////////////////////////////
import { cueTimer } from "./cuepoints.js"; 

/* The following code changes the changing-div when a given cuepoint in the video plays */
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
  const changingDiv = document.querySelector(".changing-div");
  
  
  document.addEventListener("DOMContentLoaded", (e) => {
    var myCues = [
        { seconds: 3, callback: displayProfessorImage },
        { seconds: 11, callback: displaySynergiesImage },
        { seconds: 15, callback: displayMathImage },
        { seconds: 17, callback: displayZeroGif },
        { seconds: 23, callback: displayBananaImage },
        { seconds: 31, callback: displayChatGif },
        { seconds: 37, callback: displayParadigmShift },
        { seconds: 45, callback: displayThinkingEmoji },
        { seconds: 50, callback: displayNukeGif },
        { seconds: 54, callback: displayWoozyEmoji }
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
  function displaySynergiesImage() {
    image1.style.display = "none";
    image2.style.display = "block";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    image7.style.display = "none";
    image8.style.display = "none";
    image9.style.display = "none";
    image10.style.display = "none";
    changingDiv.style.height = "100%";
    document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/05/26/81/70/360_F_526817019_Od2aIhfc86OplRwY254RdRmeq6ggHZJc.jpg')";
    document.body.style.backgroundSize = "100vw 100vh";
  }
  function displayMathImage() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "block";
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
  function displayZeroGif() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "block";
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
  function displayBananaImage() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "block";
    image6.style.display = "none";
    image7.style.display = "none";
    image8.style.display = "none";
    image9.style.display = "none";
    image10.style.display = "none";
    changingDiv.style.height = "100%";
    document.body.style.background = "linear-gradient(180deg, rgba(133,226,218,1) 0%, rgba(240,181,158,1) 100%)";
    document.body.style.backgroundSize = "125vw 125vh";
  }
  function displayChatGif() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "block";
    image7.style.display = "none";
    image8.style.display = "none";
    image10.style.display = "none";
    changingDiv.style.height = "100%";
    document.body.style.background = "linear-gradient(180deg, rgba(133,226,218,1) 0%, rgba(240,181,158,1) 100%)";
    document.body.style.backgroundSize = "100vw 100vh";
  }
  function displayParadigmShift() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    image7.style.display = "block";
    image8.style.display = "none";
    image10.style.display = "none";
    changingDiv.style.height = "100%";
    document.body.style.backgroundSize = "100vw 100vh";
  }
  function displayThinkingEmoji() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    image7.style.display = "none";
    image8.style.display = "block";
    image9.style.display = "none";
    image10.style.display = "none";
    changingDiv.style.height = "90%";
    document.body.style.backgroundSize = "100vw 100vh";
  }
  function displayNukeGif() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    image7.style.display = "none";
    image8.style.display = "none";
    image9.style.display = "block";
    image10.style.display = "none";
    changingDiv.style.height = "100%";
    document.body.style.background = "linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(246,3,3,1) 17%, rgba(121,9,9,1) 57%, rgba(255,177,0,1) 100%)";
  }
  function displayWoozyEmoji() {
    image1.style.display = "none";
    image2.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image5.style.display = "none";
    image6.style.display = "none";
    image7.style.display = "none";
    image8.style.display = "none";
    image9.style.display = "none";
    image10.style.display = "block";
    changingDiv.style.height = "80%";
    document.body.style.background = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(30,85,107,1) 65%, rgba(54,110,179,1) 87%, rgba(97,138,176,1) 100%)";
    document.body.style.backgroundSize = "100vw 125vh";
  }
  
  
