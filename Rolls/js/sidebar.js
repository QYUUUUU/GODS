const openOverlayBtn = document.getElementById("open-overlay-btn");
const overlay = document.getElementById("overlay");
const originalContent = document.getElementById("original-content");

openOverlayBtn.addEventListener("click", () => {
  overlay.classList.toggle("show");
  originalContent.classList.toggle("show");
});