/*--------------------
❤️ AI Love Detector - Modern Version!
--------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const checkLoveBtn = document.getElementById("checkLoveBtn");
    const loveResult = document.getElementById("loveResult");
    const loveMeterBar = document.getElementById("loveMeterBar");
    const loveMusic = document.getElementById("loveMusic");

    // Romantic Messages
    const loveMessages = [
        "Your Love is 100% Pure! ❤️",
        "Anwesha Loves You Infinity! ♾️💖",
        "You Are Anwesha's Favorite Person! 🥰",
        "Your Love is as Bright as Fireworks! 🎆🔥",
        "Anwesha is Secretly Smiling Right Now! 😊💞",
        "You & Anwesha are Made for Each Other! 💑",
        "Anwesha Just Fell in Love Again! 💘",
        "Soulmates Forever! 💖✨",
        "Anwesha's Heart is Full of Love for You! 💝"
    ];

    checkLoveBtn.addEventListener("click", () => {
        const userName = nameInput.value.trim();
        
        if (userName === "") {
            loveResult.innerHTML = "❌ Please enter your name!";
            return;
        }

        // Random Love Percentage
        const lovePercentage = Math.floor(Math.random() * 100) + 1;

        // Random Romantic Message
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];

        // Show Love Result
        loveResult.innerHTML = `<p>❤️ Love Score: ${lovePercentage}%</p>
                                <p>${randomMessage}</p>`;

        // Animate Love Meter
        loveMeterBar.style.width = `${lovePercentage}%`;

        // Play Background Music
        loveMusic.play();
    });
});

/*--------------------
🎆 Ultimate Fireworks Effect - Only on 90+ Love Score for 30 Sec!
--------------------*/

// Create Fireworks Container
const fireworksContainer = document.createElement("div");
fireworksContainer.style.position = "fixed";
fireworksContainer.style.top = "0";
fireworksContainer.style.left = "0";
fireworksContainer.style.width = "100vw";
fireworksContainer.style.height = "100vh";
fireworksContainer.style.pointerEvents = "none";
document.body.appendChild(fireworksContainer);

let fireworkInterval; // Store interval to stop later

// Create a Rocket Firework
function createRocket() {
    let rocket = document.createElement("div");
    rocket.style.position = "absolute";
    rocket.style.width = "10px";
    rocket.style.height = "10px";
    rocket.style.borderRadius = "50%";
    rocket.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
    rocket.style.left = `${Math.random() * window.innerWidth}px`;
    rocket.style.bottom = "0px";

    fireworksContainer.appendChild(rocket);

    let speedY = Math.random() * 5 + 5;
    let crackRocketY = Math.floor(window.innerHeight - (Math.random() * window.innerHeight + 100));

    function moveUp() {
        let bottom = parseFloat(rocket.style.bottom) || 0;
        if (bottom >= crackRocketY) {
            createExplosion(rocket.offsetLeft, bottom, rocket.style.backgroundColor);
            rocket.remove();
            return;
        }
        rocket.style.bottom = `${bottom + speedY}px`;
        requestAnimationFrame(moveUp);
    }
    moveUp();
}

// Create Firework Explosion
function createExplosion(x, y, color) {
    for (let i = 0; i < 20; i++) {
        let spark = document.createElement("div");
        spark.style.position = "absolute";
        spark.style.width = "6px";
        spark.style.height = "6px";
        spark.style.borderRadius = "50%";
        spark.style.backgroundColor = color;
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;

        fireworksContainer.appendChild(spark);

        let speedX = (Math.random() - 0.5) * 10;
        let speedY = Math.random() * 2 - 2;
        let size = Math.floor(Math.random() * 3 + 6);
        let velocity = Math.random() / 5;

        function moveSparkle() {
            size -= 0.1;
            if (size <= 0.2) {
                spark.remove();
                return;
            }
            spark.style.left = `${parseFloat(spark.style.left) + speedX}px`;
            spark.style.top = `${parseFloat(spark.style.top) + speedY}px`;
            speedY += velocity;
            requestAnimationFrame(moveSparkle);
        }
        moveSparkle();
    }
}

// 🎆 Trigger Fireworks Only on 90+ Love Score
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const checkLoveBtn = document.getElementById("checkLoveBtn");
    const loveResult = document.getElementById("loveResult");
    const loveMeterBar = document.getElementById("loveMeterBar");

    checkLoveBtn.addEventListener("click", () => {
        const userName = nameInput.value.trim();

        if (userName === "") {
            loveResult.innerHTML = "❌ Please enter your name!";
            return;
        }

        // Random Love Percentage
        const lovePercentage = Math.floor(Math.random() * 100) + 1;

        // Show Love Score
        loveResult.innerHTML = `<p>❤️ Love Score: ${lovePercentage}%</p>`;

        // Animate Love Meter
        loveMeterBar.style.width = `${lovePercentage}%`;

        // If Love Score is 90+ Trigger Fireworks
        if (lovePercentage > 90) {
            loveResult.innerHTML += `<p class="glow-text">💖 I Love You Anwesha! 💖</p>`;
            
            // Prevent multiple firework intervals
            if (!fireworkInterval) {
                fireworkInterval = setInterval(() => {
                    for (let i = 0; i < 4; i++) {
                        createRocket();
                    }
                }, 500);
                
                // Stop fireworks after 30 seconds
                setTimeout(() => {
                    clearInterval(fireworkInterval);
                    fireworkInterval = null; // Reset interval
                }, 30000);
            }
        }
    });
});

/*--------------------
🔙 Back Button Functionality
--------------------*/
document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "https://anwesha-three.vercel.app/"; // Redirect to Love Carousel
});


