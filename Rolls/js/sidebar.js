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
