const openOverlayBtn = document.getElementById("open-overlay-btn");
const overlay = document.getElementById("overlay");
const originalContent = document.getElementById("original-content");
const redcross = document.getElementById("redcross");

openOverlayBtn.addEventListener("click", () => {
  overlay.classList.toggle("show");
  originalContent.classList.toggle("show");
});

redcross.addEventListener("click", ()=>{
  overlay.classList.toggle("show");
  originalContent.classList.toggle("show");
});


const malusList = document.querySelectorAll(".malus");
malusList.forEach(malus => {
  if(malus.value == null || malus.value==""){
    malus.value = 0;
  }
  malus.addEventListener("change",()=>{
    if(malus.value == null || malus.value==""){
      malus.value = 0;
    }
  });
});