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
