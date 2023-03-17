var caracteristiqueValue;
var competenceValue;
export function buildPage() {

const losanges = document.querySelectorAll('.losange');
async function processLosanges() {
losanges.forEach(losange => {
  losange.addEventListener('click', function() {
    var id = this.id;
    var caracteristique = id.substring(0, id.indexOf("losange"));
    var note = parseInt(id.charAt(id.length - 1));
    selectNote(caracteristique, note);
    const currentNote = parseInt(this.id.slice(-1));
    for (let i = 1; i <= currentNote; i++) {
      document.getElementById(this.id.slice(0, -1) + i).src = './img/losangered.png';
    }
    for (let i = currentNote + 1; i <= 5; i++) {
      document.getElementById(this.id.slice(0, -1) + i).src = './img/losange.png';
    }
  });
});
}
processLosanges();

// Variables globales pour stocker les notes sélectionnées
var puissance = 0;
var precicion = 0;
var connaissance = 0;
var volonte = 0;
var resistance = 0;
var reflexes = 0;
var perception = 0;
var empathie = 0;

// Fonction pour gérer la sélection de la note pour chaque caractéristique
function selectNote(caracteristique, note) {
  switch (caracteristique) {
    case "puissance":
      puissance = note;
      break;
    case "precicion":
      precicion = note;
      break;
    case "connaissance":
      connaissance = note;
      break;
    case "volonte":
      volonte = note;
      break;
    case "resistance":
      resistance = note;
      break;
    case "reflexes":
      reflexes = note;
      break;
    case "perception":
      perception = note;
      break;
    case "empathie":
      empathie = note;
      break;
  }
  updatePersonnageField(1, caracteristique, note);
}

const losangescomp = document.querySelectorAll('.losangecarac');

async function processLosangescarac() {
losangescomp.forEach(losange => {
  losange.addEventListener('click', function() {
    var id = this.id;
    var competence = id.substring(0, id.indexOf("losange"));
    var note = parseInt(id.charAt(id.length - 1));
    var thisImage = this.src;
    thisImage = thisImage.split("/").pop().split("\\").pop();
    if(note == 1 && thisImage=="losangered.png"){
      selectNoteCompetence(competence, 0);
      this.src = "./img/losange.png";
      for (let i = 2; i <= 6; i++) {
        var image = document.getElementById(this.id.slice(0, -1) + i).src;
        image = image.split("/").pop().split("\\").pop();
        if(image == "losangered.png" || image == "losange.png"){
          document.getElementById(this.id.slice(0, -1) + i).src = './img/losange.png';
        }else{
          document.getElementById(this.id.slice(0, -1) + i).src = './img/circle.png';
        }
      }
    }else{
      selectNoteCompetence(competence, note);
      const currentNote = parseInt(this.id.slice(-1));
      for (let i = 1; i <= currentNote; i++) {
        var image = document.getElementById(this.id.slice(0, -1) + i).src;
        image = image.split("/").pop().split("\\").pop();
        if(image == "losangered.png" || image == "losange.png"){
          document.getElementById(this.id.slice(0, -1) + i).src = './img/losangered.png';
        }else{
          document.getElementById(this.id.slice(0, -1) + i).src = './img/circlered.png';
        }
      }
      for (let i = currentNote + 1; i <= 6; i++) {
        var image = document.getElementById(this.id.slice(0, -1) + i).src;
        image = image.split("/").pop().split("\\").pop();
        if(image == "losangered.png" || image == "losange.png"){
          document.getElementById(this.id.slice(0, -1) + i).src = './img/losange.png';
        }else{
          document.getElementById(this.id.slice(0, -1) + i).src = './img/circle.png';
        }
      }
    }
  });
});
}
processLosangescarac();
var arts = 0;
var animalisme = 0;
var cite = 0; 
var faune = 0;
var civilisations = 0;
var montures = 0;
var relationnel = 0;
var pistage = 0;
var soins = 0;
var territoire = 0;
var adresse = 0;
var athletisme = 0;
var armurerie = 0;
var discretion = 0;
var artisanat = 0;
var flore = 0;
var mecanisme = 0;
var vigilance = 0;
var runes = 0;
var voyage = 0;
var bouclier = 0;
var eclats = 0;
var cac = 0;
var lunes = 0;
var lancer = 0;
var mythes = 0;
var melee = 0;
var pantheons = 0;
var tir = 0;
var rituels = 0;

function selectNoteCompetence(competence, note) {
  switch (competence) {
    case "arts":
      arts = note;
      break;
    case "animalisme":
      animalisme = note;
      break;
    case "cite":
      cite = note;
      break;
    case "faune":
      faune = note;
      break;
    case "civilisations":
      civilisations = note;
      break;
    case "montures":
      montures = note;
      break;
    case "relationnel":
      relationnel = note;
      break;
    case "pistage":
      pistage = note;
      break;
    case "soins":
      soins = note;
      break;
    case "territoire":
      territoire = note;
      break;
    case "adresse":
      adresse = note;
      break;
    case "athletisme":
      athletisme = note;
      break;
    case "armurerie":
      armurerie = note;
      break;
    case "discretion":
      discretion = note;
      break;
    case "artisanat":
      artisanat = note;
      break;
    case "flore":
      flore = note;
      break;
    case "mecanisme":
      mecanisme = note;
      break;
    case "vigilance":
      vigilance = note;
      break;
    case "runes":
      runes = note;
      break;
    case "voyage":
      voyage = note;
      break;
    case "bouclier":
      bouclier = note;
      break;
    case "eclats":
      eclats = note;
      break;
    case "cac":
      cac = note;
      break;
    case "lunes":
      lunes = note;
      break;
    case "lancer":
      lancer = note;
      break;
    case "mythes":
      mythes = note;
      break;
    case "melee":
      melee = note;
      break;
    case "pantheons":
      pantheons = note;
      break;
    case "tir":
      tir = note;
      break;
    case "rituels":
      rituels = note;
      break;
  }
  updatePersonnageField(1, competence, note)
}

const caracSelector = document.getElementById("caracteristique");
caracSelector.addEventListener("change", function(event) {
  updateCaracteristique();
});
function updateCaracteristique(){
  const variablesMap = {
    puissance: puissance,
    precicion: precicion,
    connaissance: connaissance,
    volonte: volonte,
    resistance: resistance,
    reflexes: reflexes,
    perception: perception,
    empathie: empathie
  };
  caracteristiqueValue = variablesMap[caracSelector.value];
  caracteristique = caracteristiqueValue;
}


const compSelector = document.getElementById("competence");
compSelector.addEventListener("change", function(event) {
  updateCompetence();
});

function updateCompetence(){
  const variables2Map = {
    arts: arts,
    animalisme: animalisme,
    cite: cite,
    faune: faune,
    civilisations: civilisations,
    montures: montures,
    relationnel: relationnel,
    pistage: pistage,
    soins: soins,
    territoire: territoire,
    adresse: adresse,
    athletisme: athletisme,
    armurerie: armurerie,
    discretion: discretion,
    artisanat: artisanat,
    flore: flore,
    mecanisme: mecanisme,
    vigilance: vigilance,
    runes: runes,
    voyage: voyage,
    bouclier: bouclier,
    eclats: eclats,
    cac: cac,
    lunes: lunes,
    lancer: lancer,
    mythes: mythes,
    melee: melee,
    pantheons: pantheons,
    tir: tir,
    rituels: rituels
  };
  competenceValue = variables2Map[compSelector.value];
  competence = competenceValue;
}

setInterval(updateCompetence, 3000);
setInterval(updateCaracteristique, 3000);

  const inputFields = document.querySelectorAll("input");
  inputFields.forEach(inputField => {
    // Add change event listener to each input field
    inputField.addEventListener("change", function() {
      // Call the relevant function based on the input field's ID
       updatePersonnageField(1, inputField.id, inputField.value)
    });
  });



function updatePersonnageField(id, field, value) {
  const url = `http://localhost:3000/personnage/${id}/${field}/${value}`;

  fetch(url, {
    method: 'PUT'
  })
  .then(response => {
    if (response.ok) {

    } else {
      console.error(`Error updating ${field} for personnage with ID ${id}`);
      console.error(response.status, response.statusText);
    }
  })
  .catch(error => {
    console.error(`Error updating ${field} for personnage with ID ${id}`);
    console.error(error);
  });
}




const id = "1"; // Replace with the actual ID you want to fetch
async function getPersonnage(id) {
  try {
    const response = await fetch(`http://localhost:3000/personnage/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}




getPersonnage(id)
  .then((data) => {
    document.getElementById('nom').value = data[0].nom;
    document.getElementById('age').value = data[0].age;
    document.getElementById('genre').value = data[0].genre;
    document.getElementById('instinct').value = data[0].instinct;
    document.getElementById('signeastro').value = data[0].signeastro;
    document.getElementById('origine').value = data[0].origine;
    document.getElementById('depensee').value = data[0].depensee;
    document.getElementById('totale').value = data[0].totale;
    document.getElementById('malusphysique').value = data[0].malusphysique;
    document.getElementById('malusmanuel').value = data[0].malusmanuel;
    document.getElementById('malussocial').value = data[0].malussocial;
    document.getElementById('malushumain').value = data[0].malushumain;
    document.getElementById('malusanimal').value = data[0].malusanimal;
    document.getElementById('malusoutils').value = data[0].malusoutils;
    document.getElementById('malusterres').value = data[0].malusterres;
    document.getElementById('malusarme').value = data[0].malusarme;
    document.getElementById('malusinconnu').value = data[0].malusinconnu;
    document.getElementById('malusmental').value = data[0].malusmental;


    if (data[0].connaissance !== 0) {
      document.getElementById('connaissancelosange'+data[0].connaissance).click();
    }

    if (data[0].volonte !== 0) {
      document.getElementById('volontelosange'+data[0].volonte).click();
    }

    if (data[0].puissance !== 0) {
      document.getElementById('puissancelosange'+data[0].puissance).click();
    }

    if (data[0].resistance !== 0) {
      document.getElementById('resistancelosange'+data[0].resistance).click();
    }

    if (data[0].reflexes !== 0) {
      document.getElementById('reflexeslosange'+data[0].reflexes).click();
    }

    if (data[0].perception !== 0) {
      document.getElementById('perceptionlosange'+data[0].perception).click();
    }

    if (data[0].empathie !== 0) {
      document.getElementById('empathielosange'+data[0].empathie).click();
    }

    if (data[0].precicion !== 0) {
      document.getElementById('precicionlosange'+data[0].precicion).click();
    }

    if (data[0].arts !== 0) {
      document.getElementById('artslosange'+data[0].arts).click();
    }

    if (data[0].animalisme !== 0) {
      document.getElementById('animalismelosange'+data[0].animalisme).click();
    }

    if (data[0].cite !== 0) {
      document.getElementById('citelosange'+data[0].cite).click();
    }

    if (data[0].faune !== 0) {
      document.getElementById('faunelosange'+data[0].faune).click();
    }

    if (data[0].civilisations !== 0) {
      document.getElementById('civilisationslosange'+data[0].civilisations).click();
    }

    if (data[0].relationnel !== 0) {
      document.getElementById('relationnellosange'+data[0].relationnel).click();
    }

    if (data[0].pistage !== 0) {
      document.getElementById('pistagelosange'+data[0].pistage).click();
    }

    if (data[0].soins !== 0) {
      document.getElementById('soinslosange'+data[0].soins).click();
    }

    if (data[0].territoire !== 0) {
      document.getElementById('territoirelosange'+data[0].territoire).click();
    }

    if (data[0].adresse !== 0) {
      document.getElementById('adresselosange'+data[0].adresse).click();
    }

    if (data[0].athletisme !== 0) {
      document.getElementById('athletismelosange'+data[0].athletisme).click();
    }

    if (data[0].armurerie !== 0) {
      document.getElementById('armurerielosange'+data[0].armurerie).click();
    }

    if (data[0].discretion !== 0) {
      document.getElementById('discretionlosange'+data[0].discretion).click();
    }

    if (data[0].artisanat !== 0) {
      document.getElementById('artisanatlosange'+data[0].artisanat).click();
    }
        if (data[0].flore !== 0) {
      document.getElementById('florelosange'+data[0].flore).click();
    }

    if (data[0].mecanisme !== 0) {
      document.getElementById('mecanismelosange'+data[0].mecanisme).click();
    }

    if (data[0].vigilance !== 0) {
      document.getElementById('vigilancelosange'+data[0].vigilance).click();
    }

    if (data[0].runes !== 0) {
      document.getElementById('runeslosange'+data[0].runes).click();
    }

    if (data[0].voyage !== 0) {
      document.getElementById('voyagelosange'+data[0].voyage).click();
    }

    if (data[0].bouclier !== 0) {
      document.getElementById('bouclierlosange'+data[0].bouclier).click();
    }

    if (data[0].eclats !== 0) {
      document.getElementById('eclatslosange'+data[0].eclats).click();
    }

    if (data[0].cac !== 0) {
      document.getElementById('caclosange'+data[0].cac).click();
    }

    if (data[0].lunes !== 0) {
      document.getElementById('luneslosange'+data[0].lunes).click();
    }

    if (data[0].lancer !== 0) {
      document.getElementById('lancerlosange'+data[0].lancer).click();
    }

    if (data[0].mythes !== 0) {
      document.getElementById('mytheslosange'+data[0].mythes).click();
    }

    if (data[0].melee !== 0) {
      document.getElementById('meleelosange'+data[0].melee).click();
    }

    if (data[0].pantheons !== 0) {
      document.getElementById('pantheonslosange'+data[0].pantheons).click();
    }

    if (data[0].tir !== 0) {
      document.getElementById('tirlosange'+data[0].tir).click();
    }

    if (data[0].rituels !== 0) {
      document.getElementById('rituelslosange'+data[0].rituels).click();
    }

    if (data[0].montures !== 0) {
      document.getElementById('montureslosange'+data[0].montures).click();
    }
      
    
  })
  .catch((error) => {
    console.error(error);
  });

  return Promise.resolve();
}
console.log(caracteristiqueValue);
export var caracteristique = caracteristiqueValue;
export var competence = competenceValue;