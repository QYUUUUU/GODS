const charabox = document.getElementById("charabox");

async function createCharacterCards() {
  const characters = await charactersDisplay();
  

  characters.forEach(character => {
    // Créer une nouvelle div pour la carte du personnage
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card", "col-3"); // Ajouter la classe "col-3"
    
    // Ajouter le nom du personnage à la carte
    const characterName = document.createElement("h2");
    characterName.innerText = character.nom;
    characterCard.appendChild(characterName);
    
    // Ajouter l'ID du personnage à la carte
    const characterId = document.createElement("p");
    characterId.innerText = `ID: ${character.Id_Personnage}`;
    characterCard.appendChild(characterId);
    
    // Ajouter un événement de clic à la carte pour rediriger l'utilisateur vers la feuille de personnage
    characterCard.addEventListener("click", () => {
      window.location.href = `/charactersheet?Id_Personnage=${character.Id_Personnage}`;
    });
    
    // Ajouter la carte du personnage à la boîte de personnages
    charabox.appendChild(characterCard);
  });
}

createCharacterCards();

const newCaracButton = document.getElementById("newCharacter");

newCaracButton.addEventListener("click", ()=>{
    //Call api to make it create a new character for his profil id
    apiNewCharacter();
    
    //Update display
    updateDisplay();
});

async function apiNewCharacter(){
    //create a new character for his profil Id
    try {
        const response = await fetch(`/newcharacter/${userId}`);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function charactersDisplay(){
    //Affiche les personnages de l'utilisateur
    try {
        const response = await fetch(`/getcharacters/${userId}`);
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}


function clearDisplay() {
    const charabox = document.getElementById("charabox");
    while (charabox.firstChild) {
      charabox.removeChild(charabox.firstChild);
    }
  }

function updateDisplay(){
     //Update display
     clearDisplay();
     createCharacterCards();
}

