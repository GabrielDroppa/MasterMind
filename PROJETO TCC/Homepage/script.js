function toggleMenu() {
    const navbar = document.querySelector('.dropdown');
    const isVisible = navbar.style.transform === 'translateY(0px)';
    navbar.style.transform = isVisible ? 'translateY(-100%)' : 'translateY(0px)';
}

const texts = [
    "RPG",
    "Novas Experiências",
    "Inovação",
];

const speed = 100;
let textIndex = 0;
let characterIndex = 0;

const textElements = document.querySelector('.typewriter-text');

function typeWriter() {
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
