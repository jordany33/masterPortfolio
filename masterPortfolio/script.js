// Typewriter effect
let i = 0;
let j = 0;
const words = ["making cool stuff.", "solving problems.", "learning new things.", "exploring the unknown."];
let currentWord = "";
let isDeleting = false;
let isWaiting = false;
let speed = 35;

function typeWriter() {
  if (isWaiting) return;

  if (!isDeleting && i <= words[j].length) {
    currentWord = words[j].substring(0, i);
    i++;
  }

  if (isDeleting && i >= 0) {
    currentWord = words[j].substring(0, i);
    i--;
  }

  document.querySelector('.typing').textContent = currentWord;

  // when typing and deleting, hide the blinker
  if (!isWaiting) {
    document.querySelector('.typing').style.animation = 'none';
  } else {
    document.querySelector('.typing').style.animation = 'blink 1s infinite';
  }

  if (i == words[j].length + 1) {
    isDeleting = true;
    setTimeout(() => {
      isWaiting = false;
      typeWriter();
    }, 1500); // Change the pause duration here
    isWaiting = true;
  }

  if (i == 0 && isDeleting) {
    isDeleting = false;
    j = j == words.length - 1 ? 0 : j + 1;
  }

  setTimeout(typeWriter, speed);
}

window.onload = typeWriter;
