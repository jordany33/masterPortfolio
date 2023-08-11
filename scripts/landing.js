// Typewriter effect
let i = 0;
let j = 0;
const words = ["making cool stuff.", "solving problems.", "learning new things.", "exploring the unknown."];
let currentWord = "";
let isDeleting = false;
let isWaiting = false;
let speed = 45;

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

//Custom hamburger icon
var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");

McButton.click(function () {
    $(this).toggleClass("active");

    if (McButton.hasClass("active")) {
        McBar1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
        McBar3.velocity({ top: "50%" }, { duration: 200, easing: "swing" })
            .velocity({ rotateZ: "90deg" }, { duration: 800, delay: 200, easing: [500, 20] });
        McButton.velocity({ rotateZ: "135deg" }, { duration: 800, delay: 200, easing: [500, 20] });
    } else {
        McButton.velocity("reverse");
        McBar3.velocity({ rotateZ: "0deg" }, { duration: 800, easing: [500, 20] })
            .velocity({ top: "100%" }, { duration: 200, easing: "swing" });
        McBar1.velocity("reverse", { delay: 800 });
    }
});

