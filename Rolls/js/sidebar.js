const openOverlayBtn = document.getElementById("open-overlay-btn");
const openOverlayBox = document.getElementById("rightside");
const overlay = document.getElementById("overlay");
const originalContent = document.getElementById("original-content");
const html = document.documentElement;

openOverlayBox.addEventListener("click", () => {
  overlay.classList.toggle("show");
  originalContent.classList.toggle("show");
  if(openOverlayBox.classList.contains("show")){
    openOverlayBox.classList.remove("show");
  }else{
    openOverlayBox.classList.add("show");
  }

  html.scrollTop = 0;
  if(html.classList.contains("scrolling")){
    html.classList.remove("scrolling");
  }else{
    html.classList.add("scrolling");
  }
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


const rollingBox = document.getElementById("rollingbox");
let lastId = 0;
function displayDiceThrow(diceThrow) {
  const throwDiv = document.createElement("div");
  throwDiv.className = "throw-box";

  console.log(diceThrow);
  // Parse the JSON string into an array
  const diceValuesArray = JSON.parse(diceThrow.diceValues);

  const nameDiv = document.createElement("h4");

  nameDiv.innerText = diceThrow.nom;

  throwDiv.appendChild(nameDiv);
  // Loop through the diceValues array
  diceValuesArray.forEach(diceObj => {

  
    // Create an image element for each dice value
    const diceImg = document.createElement("img");

    diceImg.classList.add("diceResult");

    // Set the src attribute of the image element using the value property
    diceImg.src = `../img/${diceObj.dice}-${diceObj.value}.png`; // Replace with the actual path to your images

    // Add the image element to the throwDiv
    throwDiv.appendChild(diceImg);
  });

  rollingBox.appendChild(throwDiv);

  setTimeout(() => {
    throwDiv.classList.add("pop");
  }, 10);

  rollingBox.scrollTop = rollingBox.scrollHeight;
}


async function rollsDisplay() {
  try {
    const response = await fetch(`/throws`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    data.forEach((throwData) => {
      if (throwData.Id_Throws > lastId) {
        displayDiceThrow(throwData);
        lastId = throwData.Id_Throws;
      }
    });
  } catch (error) {
    console.error(error);
  }
}

setInterval(rollsDisplay, 1000);