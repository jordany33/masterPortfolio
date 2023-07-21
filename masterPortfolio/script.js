// Tilt Effect
const tiltElement = document.querySelector(".tilt-element");

document.addEventListener("mousemove", (event) => {
    const xPosition = (window.innerWidth / 2 - event.pageX) / 25;
    const yPosition = (window.innerHeight / 2 - event.pageY) / 25;

    tiltElement.style.transform = `rotateY(${xPosition}deg) rotateX(${yPosition}deg)`;
});

document.addEventListener("mouseleave", () => {
    tiltElement.style.transform = "rotateY(0deg) rotateX(0deg)";
});

// Typewriter Effect
const text = "Welcome to My Portfolio! I'm a Software Engineer.";

let index = 0;
function typewriterEffect() {
    const typewriterElement = document.getElementById("typewriter-effect");
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typewriterEffect, 50); // Adjust the speed of typewriter effect here
    }
}

typewriterEffect();
