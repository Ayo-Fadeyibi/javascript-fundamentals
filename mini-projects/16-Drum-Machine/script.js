const drumButtons = document.querySelectorAll('.drum-pad');
const resultDisplay = document.getElementById('display');

drumButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const audioElement = button.querySelector('.clip');
    const drumName = button.id;
    
    resultDisplay.textContent = drumName;
    audioElement.currentTime = 0; 
    audioElement.play();
  })
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  const button = Array.from(drumButtons).find(btn => btn.textContent.trim() === key);
  
  if (button) {
    const audioElement = button.querySelector('.clip');
    const drumName = button.id;
    
    resultDisplay.textContent = drumName;
    audioElement.currentTime = 0; 
    audioElement.play();
  }
})
