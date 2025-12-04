/* MÚSICA */
const music = document.getElementById("bg-music");
document.addEventListener("click", () => {
    music.muted = false;
    music.play();
}, { once: true });

/* SOBRE Y CARTA */
const envelope = document.getElementById("envelope");
const letterPanel = document.getElementById("letterPanel");
const closeLetter = document.getElementById("closeLetter");
const openSound = document.getElementById("openSound");

envelope.addEventListener("click", () => {
    envelope.src = "assets/img/abierto.png";
    envelope.classList.add("envelope-opening");

    openSound.play();

    setTimeout(() => {
        letterPanel.classList.add("open");
    }, 600);
});

closeLetter.addEventListener("click", () => {
    letterPanel.classList.remove("open");

    setTimeout(() => {
        envelope.src = "assets/img/cerrado.png";
        envelope.classList.remove("envelope-opening");
    }, 600);
});

/* CORAZONES */
function crearCorazon() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💛";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 15) + "px";
    document.getElementById("hearts").appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(crearCorazon, 900);

/* BOTÓN SORPRESA */
document.getElementById("sorpresaBtn").addEventListener("click", () => {
    alert("💛 Sorpresa: gracias por existir, mi amor 💛");
});
/* SONIDO AL CLIC EN HACHIWARE */
const hachi = document.getElementById("hachi");
const hachiSound = document.getElementById("hachiSound");

hachi.addEventListener("click", () => {
    hachiSound.currentTime = 0; // reinicia si suena varias veces
    hachiSound.play();
});
/* SONIDO AL CLIC EN USAGI */
const usagi = document.getElementById("usagi");
const usagiSound = document.getElementById("usagiSound");

usagi.addEventListener("click", () => {
    usagiSound.currentTime = 0; // reinicia por si se hace click repetido
    usagiSound.play();
});
/* SORPRESA ESCENA CHIIKAWA */
const btnSorpresa = document.getElementById("sorpresaBtn");
const sceneOverlay = document.getElementById("sceneOverlay");
const closeScene = document.getElementById("closeScene");
const sceneMusic = document.getElementById("sceneMusic");

btnSorpresa.addEventListener("click", () => {
    // PAUSAR música principal
    music.pause();

    // Mostrar escena
    sceneOverlay.classList.add("active");

    // Reproducir música épica
    sceneMusic.currentTime = 0;
    sceneMusic.play();
});

closeScene.addEventListener("click", () => {
    // Cerrar escena
    sceneOverlay.classList.remove("active");

    // Detener escena musical
    sceneMusic.pause();
    sceneMusic.currentTime = 0;

    // Reanudar música principal
    music.play();
});
