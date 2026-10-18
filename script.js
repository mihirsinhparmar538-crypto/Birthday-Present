function openHeart() {
   
    const heartPopup = document.getElementById("heartPopup");

    heartPopup.style.display = "flex";

    void heartPopup.offsetWidth;

    heartPopup.classList.remove("closing");
    heartPopup.classList.add("opening");

    createIndividualBursts();

}

function openGift() {

    console.log("OPEN GIFT CLICKED");

    document.getElementById("openGiftButton").style.display = "none";

    document.getElementById("giftMessage").classList.remove("hidden");

    document.getElementById("recipientText").textContent =
        " For My Girl 🫶";

    confetti();
    burst();

   
}

function openPhoto(event) {

    event.stopPropagation();

    document.getElementById("photoPopup").style.display = "flex";

}

document.getElementById("photoButton").addEventListener("click", function (event) {

    openPhoto(event);

});

document.getElementById("heartButton").addEventListener("click", function (event) {

    event.stopPropagation();

    const heartPopup = document.getElementById("heartPopup");

    heartPopup.style.display = "flex";

    void heartPopup.offsetWidth;

    heartPopup.classList.remove("closing");

    heartPopup.classList.add("opening");

});

document.addEventListener("click", function (event) {

    const heartPopup = document.getElementById("heartPopup");

    if (!heartPopup.classList.contains("opening")) {
        return;
    }

    if (
        event.target.closest(".heartCard") ||
        event.target.closest("#heartButton")
    ) {
        return;
    }

    heartPopup.classList.remove("opening");
    heartPopup.classList.add("closing");

    setTimeout(function () {

        heartPopup.style.display = "none";
        heartPopup.classList.remove("closing");

    }, 600);

});

function confetti() {

    for (let i = 0; i < 40; i++) {

        const piece = document.createElement("div");

        piece.textContent = "💖", "✨";

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-20px";
        piece.style.fontSize = "20px";
        piece.style.zIndex = "2000";
        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        piece.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                {
                    transform:
                        "translateY(100vh) rotate(1deg)",
                    opacity: 0
                }
            ],
            {
                duration: 2000 + Math.random() * 1000,
                easing: "linear"
            }
        );

        setTimeout(function () {
            piece.remove();
        }, 4000);
    }
}


function burst() {

    const burst = document.createElement("div");

    burst.textContent = "✨💖✨💖";

    burst.style.position = "fixed";
    burst.style.left = "50%";
    burst.style.top = "50%";
    burst.style.transform = "translate(-50%, -50%) scale(0)";
    burst.style.fontSize = "45px";
    burst.style.zIndex = "2000";
    burst.style.pointerEvents = "none";

    document.body.appendChild(burst);

    burst.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(0)",
                opacity: 0
            },
            {
                transform: "translate(-50%, -50%) scale(1.5)",
                opacity: 1
            },
            {
                transform: "translate(-50%, -50%) scale(2)",
                opacity: 0
            }
        ],
        {
            duration: 1200,
            easing: "ease-out"
        }
    );

    setTimeout(function () {
        burst.remove();
    }, 1300);
}

function createIndividualBursts() {

    const hearts = document.querySelectorAll(".heartShape");

    hearts.forEach(function(heart) {

        // Remove old particles from this heart
        heart.querySelectorAll(".miniBurstParticles").forEach(function(particle) {
            particle.remove();
        });

        for (let i = 0; i < 8; i++) {

            const particle = document.createElement("span");

            particle.className = "miniBurstParticles";
            particle.textContent = "❤️";

            const angle = (360 / 8) * i;
            const distance = 140;

            const x = Math.cos(angle * Math.PI / 180) * distance;
            const y = Math.sin(angle * Math.PI / 180) * distance;

            particle.style.position = "absolute";
            particle.style.left = "50%";
            particle.style.top = "50%";
            particle.style.fontSize = "20px";
            particle.style.pointerEvents = "none";

            heart.appendChild(particle);

            particle.animate(
                [
                    {
                        transform: "translate(-50%, -50%) scale(0)",
                        opacity: 0
                    },
                    {
                        transform: "translate(-50%, -50%) scale(1)",
                        opacity: 1
                    },
                    {
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 2300,
                    delay: i * 60,
                    easing: "ease-out",
                    iterations: Infinity
                }
            );
        }
    });
}

document.getElementById("photoPopup").addEventListener("click", function () {

    this.style.display = "closing";

    setTimeout(() => {

        this.style.display = "none";
        this.classList.remove("closing");

    }, 500);

});

function createBackgroundParticle() {

    const particle = document.createElement("span");

    particle.classList.add("backgroundParticle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDuration = Math.random() * 4 + 4 + "s";
    particle.style.animationDelay = Math.random() * 6 + "s";

    const size = Math.random() * 5 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.opacity = Math.random() * 0.5 + 0.5;
    particle.style.filter = "brightness(1.2)";

    const colors = ["red", "blue", "white", "yellow", "orange"];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    particle.style.boxShadow = `0 0 10px ${particle.style.background}`;

    document.getElementById("particleBackground").appendChild(particle);
    
}

for (let i = 0; i < 50; i++) {

    createBackgroundParticle();

}

document.querySelectorAll(".balloon").forEach(function(balloon) {

    balloon.addEventListener("click", function(event) {

        event.stopPropagation();

        if (balloon.classList.contains("popped")) {
            return;

        }

        const balloonRect = balloon.getBoundingClientRect();

        balloon.classList.add("popped");

        for (let i = 0; i < 12; i++) {

            const particle = document.createElement("span");

            particle.classList.add("popParticle");
            particle.textContent = "★";

            particle.style.position = "fixed";
            particle.style.fontSize = "18px";
            particle.style.color = "white";
            particle.style.zIndex = "2000";

            const particleColors = [

                "#fcd00f"

            ];

            const particleColor = 
                
                particleColors[Math.floor(Math.random() * particleColors.length)];
              
            particle.style.color = particleColor;    

            particle.style.left =
                balloonRect.left + balloonRect.width / 2 + "px";
             
            particle.style.top =
                balloonRect.top + balloonRect.height / 2 + "px";

            document.body.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 100;

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.animate(
                [
                    {

                        transform: "translate(-50%, -50%) scale(0)",
                        opacity: 0

                    },
                    {

                        transform: "translate(-50%, -50%) scale(1.4)",
                        opacity: 1

                    },
                    {

                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0)`,
                        opacity: 0
                    }
                ],
                {

                    duration: 1000,
                    easing: "ease-out"

                }

            );

            setTimeout(function () {

                particle.remove();

            }, 700);

        }

        const messagePositions = [

            { top: "50%", left: "15%" },
            { top: "50%", left: "85%" },
            { top: "50%", left: "30%" },
            { top: "50%", left: "70%" },
            { top: "50%", left: "50%" }

        ];
      
        const messageBox = document.createElement("div");

        messageBox.classList.add("balloonMessage");

        
        const position = 
            messagePositions[document.querySelectorAll(".balloonMessage").length];

        messageBox.textContent = balloon.dataset.message;

        document.getElementById("balloonPopup").appendChild(messageBox);

        messageBox.style.top = position.top;
        messageBox.style.left = position.left;

        messageBox.textContent = balloon.dataset.message;
    
        setTimeout(function() {

            messageBox.classList.add("show");

            messageBox.style.opacity = "1";
            messageBox.style.transform = "translateY(0) scale(1)";

        },40);

    });

});

document.getElementById("balloonButton").addEventListener("click", function(event) {

    const balloonPopup = document.getElementById("balloonPopup");
    const particleBackground = document.getElementById("particleBackground");

    balloonPopup.style.display = "flex";
    particleBackground.style.display = "none";
    particleBackground.innerHTML = "";

});

document.querySelectorAll(".miniGiftButton").forEach(function(button) {

    button.addEventListener("click", function() {

        const gift = button.parentElement.querySelector(".miniGift")

        gift.classList.remove("popOpen");

        void gift.offsetWidth;

        gift.classList.add("popOpen");

    });

});

const fourthGiftButton = document.getElementById("fourthGiftButton");
const letter = document.getElementById("fourthLetter");
const backdrop = document.getElementById("letterBackdrop");
const unrollButton = document.getElementById("unrollingLetterButton");

const line1 = document.getElementById("letterLine1");
const line2 = document.getElementById("letterLine2");
const line3 = document.getElementById("letterLine3");
const line4 = document.getElementById("letterLine4");

fourthGiftButton.addEventListener("click", function () {

    letter.style.display = "block";
    backdrop.style.display = "block";


    // Reset the button and letter 
    letter.classList.remove("opening", "unrolling", "unrolled", "rolled");
    unrollButton.classList.remove("fadeIn");
    unrollButton.style.display = "none";

    line1.textContent = "";
    line2.textContent = "";
    line3.textContent = "";
    line4.textContent = "";

    // Show the rolled letter immediately - no sliding
    
    void letter.offsetWidth;
    letter.classList.add("rolled");

    // Fade in the button after the letter appears
    setTimeout(function () {

        unrollButton.style.display = "block";
        void unrollButton.offsetWidth;
        unrollButton.classList.add("fadeIn");

    }, 350);
    
});    

unrollButton.addEventListener("click", function () {

    unrollButton.classList.remove("fadeIn");
    unrollButton.style.display = "none";

    letter.classList.remove("rolled", "unrolled");
    void letter.offsetWidth;
    letter.classList.add("unrolling");

    letter.classList.remove("unrolled");

    setTimeout(function () {

        letter.classList.add("unrolled");

    }, 1300);

    // Type the message after the paper finishes unrolling
    setTimeout(function () {

        typeText(line1, "My Cute Princess ", 50, function () {
            typeText(line2, "Dear Blueberry , ", 50, function () {
                typeText(line3, " Text ", 50, function () {
                    typeText(line4, "~ Golden Boy", 50);

                });

            });

        });

    }, 1350);
    
})

backdrop.addEventListener("click", function () {

    letter.style.display = "none";
    backdrop.style.display = "none";

    letter.classList.remove("opening", "unrolling", "rolled");
    unrollButton.classList.remove("fadeIn");
    unrollButton.style.display = "none";

});

function typeText(element, text, speed, finished) {

    let index = 0;

    function writeNextLetter() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(writeNextLetter, speed);

        } else {
            if (typeof finished === "function") {
                finished();

            }
            
        }
        
    }

    writeNextLetter();

}

document.getElementById("balloonPopup").addEventListener("click", function(event) {

    if (event.target.closest(".balloonMessage") ||
  
       event.target.closest(".balloonMessage")) {

        return;

    }

    this.style.display = "none";

});


const handwrittenName = "Mihir";

document.addEventListener("DOMContentLoaded", function() {

    const fifthGiftButton = document.getElementById("fifthGiftButton");
    const fifthMessageBox = document.getElementById("fifthMessageBox");
    const writingPaths = document.getElementById("writingPaths");

    if (!fifthGiftButton || !fifthMessageBox || !writingPaths) {

        console.error("Fifth gift: an HTML element is missing.");
        return;

    }

    fifthGiftButton.addEventListener("click", function(event) {
        event.stopPropagation();

        fifthMessageBox.style.display = "block";
        writingPaths.replaceChildren();

        const nameText = document.createElementNS(

            "http://www.w3.org/2000/svg",
            "text"

        );

        nameText.setAttribute("x", "10");
        nameText.setAttribute("y", "60");
        nameText.textContent = handwrittenName;

        writingPaths.appendChild(nameText);

    });

});