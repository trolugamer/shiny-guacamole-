const scanButton = document.querySelector("#scan-button");
const progressBar = document.querySelector("#progress-bar");
const scanPercent = document.querySelector("#scan-percent");
const scanStatus = document.querySelector("#scan-status");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const downloadForm = document.querySelector("#download-form");
const formMessage = document.querySelector("#form-message");

const scanSteps = [
  "Analizando memoria",
  "Revisando archivos críticos",
  "Comprobando extensiones",
  "Inspeccionando red Wi‑Fi",
  "Optimizando privacidad",
  "Escaneo completado: sin amenazas",
];

let scanTimer;

function setScanProgress(percent) {
  progressBar.style.width = `${percent}%`;
  scanPercent.textContent = `${percent}%`;
}

function runScan() {
  clearInterval(scanTimer);
  let progress = 0;
  scanButton.disabled = true;
  scanButton.textContent = "Escaneando...";
  setScanProgress(progress);

  scanTimer = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 7;
    const safeProgress = Math.min(progress, 100);
    const stepIndex = Math.min(Math.floor(safeProgress / 20), scanSteps.length - 1);

    setScanProgress(safeProgress);
    scanStatus.textContent = scanSteps[stepIndex];

    if (safeProgress >= 100) {
      clearInterval(scanTimer);
      scanButton.disabled = false;
      scanButton.textContent = "Volver a escanear";
    }
  }, 420);
}

scanButton.addEventListener("click", runScan);

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

downloadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(downloadForm).get("email");
  formMessage.textContent = `Enlace demo enviado a ${email}.`;
  downloadForm.reset();
});
