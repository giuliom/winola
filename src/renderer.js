const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()

let isRecording = false;
let isPlaying = false;

  //Buttons
  document.addEventListener('DOMContentLoaded', () => {
    const recordButton = document.getElementById('recordButton');
    const recordButtonText = recordButton.querySelector('span');
    const playbackButton = document.getElementById('playbackButton');
    const playbackButtonText = playbackButton.querySelector('span');
  
    recordButton.addEventListener('click', () => {
        isRecording = !isRecording;

        if (isRecording) {
            recordButtonText.textContent = 'Recording...';
        } else {    
            recordButtonText.textContent = 'Record';
        }
    });
  
    playbackButton.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            playbackButtonText.textContent = 'Playing...';
        } else {    
            playbackButtonText.textContent = 'Play';
        }
    });
  });