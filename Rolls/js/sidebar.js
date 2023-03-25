const openOverlayBtn = document.getElementById("open-overlay-btn");
const openOverlayBox = document.getElementById("rightside");
const overlay = document.getElementById("overlay");
const originalContent = document.getElementById("original-content");

openOverlayBox.addEventListener("click", () => {
  overlay.classList.toggle("show");
  originalContent.classList.toggle("show");
  if(openOverlayBox.classList.contains("show")){
    openOverlayBox.classList.remove("show");
  }else{
    openOverlayBox.classList.add("show");
  }
});
