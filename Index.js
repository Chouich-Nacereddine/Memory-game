import { render } from "./Tools/Card.js";

function startAudio() {
    const audio = document.getElementById("gameSound");
    audio.volume = 1;
    audio.play();
    document.getElementById("playButton").style.display = "none";
    
    audio.addEventListener("ended", function() {
        audio.currentTime = 0; // Reset the audio to the beginning
        audio.play(); // Play the audio again
      });
      
    import('./Tools/Card.js')
      .then((module) => {
        const { render } = module;
        render();
      })
      .catch((error) => {
        console.error('Error loading Card.js:', error);
      });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("playButton");
    playButton.addEventListener("click", startAudio);
  });