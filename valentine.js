function createConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        document.body.appendChild(confetti);
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * -100 + "px";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    }
}
createConfetti();
function animateHeart() {
    const heart = document.querySelector('.heart');
    let scale = 1;
    let growing = true;
    setInterval(() => {
        if (growing) {
            scale += 0.05;
            if (scale >= 1.3) growing = false;
        } else {
            scale -= 0.05;
            if (scale <= 1) growing = true;
        }
        heart.style.transform = `translate(-50%, -50%) rotate(45deg) scale(${scale})`;
    }, 100);
}

function floatingText() {
    const text = document.querySelector('.text');
    let direction = 1;
    setInterval(() => {
        text.style.transform = `translateX(-50%) translateY(${direction * 5}px)`;
        direction *= -1;
    }, 500);
}

createConfetti();
animateHeart();
floatingText();