var caracteristiqueValue;
var competenceValue;
var caracteristiqueMalusValue;
var competenceMalusValue;
var modifierValue;

var effort = 0;
var sangfroid = 0;

var legere = 0;
var grave = 0;
var mortelle = 0;

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

function selectBlessure(blessure, note) {
  switch (blessure) {
    case "legere":
      legere = note;
      break;
    case "grave":
      grave = note;
      break;
    case "mortelle":
      mortelle = note;
      break;
  }
  updatePersonnageField(Id_Personnage, "blessure"+blessure, note);
}



function selectReserve(reserve, note) {
  switch (reserve) {
    case "effort":
      effort = note;
      break;
    case "sangfroid":
      sangfroid = note;
      break;
  }
  updatePersonnageField(Id_Personnage, reserve, note);
}

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
  updatePersonnageField(Id_Personnage, caracteristique, note);
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
  updatePersonnageField(Id_Personnage, competence, note)
}

  const inputFields = document.querySelectorAll(".rowToUpdate");
  inputFields.forEach(inputField => {
    // Add change event listener to each input field
    inputField.addEventListener("change", function() {
      // Call the relevant function based on the input field's ID
       updatePersonnageField(Id_Personnage, inputField.id, inputField.value)
    });
  });



function updatePersonnageField(id, field, value) {
  const url = `/personnage/${id}/${field}/${value}`;

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

// Replace with the actual ID you want to fetch
async function getPersonnage(Id_Personnage) {
  try {
    const response = await fetch(`/personnage/${Id_Personnage}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}


getPersonnage(Id_Personnage)
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

    if (data[0].connaissance !== 0 && data[0].connaissance !== null) {
      document.getElementById('connaissancelosange'+data[0].connaissance).click();
    }

    if (data[0].volonte !== 0 && data[0].volonte !== null) {
      document.getElementById('volontelosange'+data[0].volonte).click();
    }

    if (data[0].puissance !== 0 && data[0].puissance !== null) {
      document.getElementById('puissancelosange'+data[0].puissance).click();
    }

    if (data[0].resistance !== 0 && data[0].resistance !== null) {
      document.getElementById('resistancelosange'+data[0].resistance).click();
    }

    if (data[0].reflexes !== 0 && data[0].reflexes !== null) {
      document.getElementById('reflexeslosange'+data[0].reflexes).click();
    }

    if (data[0].perception !== 0 && data[0].perception !== null) {
      document.getElementById('perceptionlosange'+data[0].perception).click();
    }

    if (data[0].empathie !== 0 && data[0].empathie !== null) {
      document.getElementById('empathielosange'+data[0].empathie).click();
    }

    if (data[0].precicion !== 0 && data[0].precicion !== null) {
      document.getElementById('precicionlosange'+data[0].precicion).click();
    }

    if (data[0].arts !== 0 && data[0].arts !== null) {
      document.getElementById('artslosange'+data[0].arts).click();
    }

    if (data[0].animalisme !== 0 && data[0].animalisme !== null) {
      document.getElementById('animalismelosange'+data[0].animalisme).click();
    }

    if (data[0].cite !== 0 && data[0].cite !== null) {
      document.getElementById('citelosange'+data[0].cite).click();
    }

    if (data[0].faune !== 0 && data[0].faune !== null) {
      document.getElementById('faunelosange'+data[0].faune).click();
    }

    if (data[0].civilisations !== 0 && data[0].civilisations !== null) {
      document.getElementById('civilisationslosange'+data[0].civilisations).click();
    }

    if (data[0].relationnel !== 0 && data[0].relationnel !== null) {
      document.getElementById('relationnellosange'+data[0].relationnel).click();
    }

    if (data[0].pistage !== 0 && data[0].pistage !== null) {
      document.getElementById('pistagelosange'+data[0].pistage).click();
    }

    if (data[0].soins !== 0 && data[0].soins !== null) {
      document.getElementById('soinslosange'+data[0].soins).click();
    }

    if (data[0].territoire !== 0 && data[0].territoire !== null) {
      document.getElementById('territoirelosange'+data[0].territoire).click();
    }

    if (data[0].adresse !== 0 && data[0].adresse !== null) {
      document.getElementById('adresselosange'+data[0].adresse).click();
    }

    if (data[0].athletisme !== 0 && data[0].athletisme !== null) {
      document.getElementById('athletismelosange'+data[0].athletisme).click();
    }

    if (data[0].armurerie !== 0 && data[0].armurerie !== null) {
      document.getElementById('armurerielosange'+data[0].armurerie).click();
    }

    if (data[0].discretion !== 0 && data[0].discretion !== null) {
      document.getElementById('discretionlosange'+data[0].discretion).click();
    }

    if (data[0].artisanat !== 0 && data[0].artisanat !== null) {
      document.getElementById('artisanatlosange'+data[0].artisanat).click();
    }
        if (data[0].flore !== 0 && data[0].flore !== null) {
      document.getElementById('florelosange'+data[0].flore).click();
    }

    if (data[0].mecanisme !== 0 && data[0].mecanisme !== null) {
      document.getElementById('mecanismelosange'+data[0].mecanisme).click();
    }

    if (data[0].vigilance !== 0 && data[0].vigilance !== null) {
      document.getElementById('vigilancelosange'+data[0].vigilance).click();
    }

    if (data[0].runes !== 0 && data[0].runes !== null) {
      document.getElementById('runeslosange'+data[0].runes).click();
    }

    if (data[0].voyage !== 0 && data[0].voyage !== null) {
      document.getElementById('voyagelosange'+data[0].voyage).click();
    }

    if (data[0].bouclier !== 0 && data[0].bouclier !== null) {
      document.getElementById('bouclierlosange'+data[0].bouclier).click();
    }

    if (data[0].eclats !== 0 && data[0].eclats !== null) {
      document.getElementById('eclatslosange'+data[0].eclats).click();
    }

    if (data[0].cac !== 0 && data[0].cac !== null) {
      document.getElementById('caclosange'+data[0].cac).click();
    }

    if (data[0].lunes !== 0 && data[0].lunes !== null) {
      document.getElementById('luneslosange'+data[0].lunes).click();
    }

    if (data[0].lancer !== 0 && data[0].lancer !== null) {
      document.getElementById('lancerlosange'+data[0].lancer).click();
    }

    if (data[0].mythes !== 0 && data[0].mythes !== null) {
      document.getElementById('mytheslosange'+data[0].mythes).click();
    }

    if (data[0].melee !== 0 && data[0].melee !== null) {
      document.getElementById('meleelosange'+data[0].melee).click();
    }

    if (data[0].pantheons !== 0 && data[0].pantheons !== null) {
      document.getElementById('pantheonslosange'+data[0].pantheons).click();
    }

    if (data[0].tir !== 0 && data[0].tir !== null) {
      document.getElementById('tirlosange'+data[0].tir).click();
    }

    if (data[0].rituels !== 0 && data[0].rituels !== null) {
      document.getElementById('rituelslosange'+data[0].rituels).click();
    }

    if (data[0].montures !== 0 && data[0].montures !== null) {
      document.getElementById('montureslosange'+data[0].montures).click();
    }

    //  
    //Gérer les réserves :
    //
    var maxeffort = data[0].maxeffort;
    var maxsangfroid = data[0].maxsangfroid;
    effort = data[0].effort;
    sangfroid = data[0].sangfroid;
    function reservesDisplay(maxeffort, maxsangfroid, effort, sangfroid){

      const effortBox = document.getElementById('effort');
      for (let i = 1; i <= maxeffort; i++) {
        const effortCircle = document.createElement("img");
        effortCircle.id="effortcircle"+i;
        effortCircle.classList.add("circlereserve");
        effortCircle.src="./img/circle.png";
        effortBox.appendChild(effortCircle);
      }

      const sangfroidBox = document.getElementById('sangfroid');
      for (let i = 1; i <= maxsangfroid; i++) {
        const sangfroidCircle = document.createElement("img");
        sangfroidCircle.id="sangfroidcircle"+i;
        sangfroidCircle.classList.add("circlereserve");
        sangfroidCircle.src="./img/circle.png";
        sangfroidBox.appendChild(sangfroidCircle);
      }

      const circlesReserve = document.querySelectorAll('.circlereserve');
      circlesReserve.forEach(circle => {
        circle.addEventListener('click', function() {
          var id = this.id;
          var reserve = id.substring(0, id.indexOf("circle"));
          const match = id.match(/\d+$/);
          var note = match ? parseInt(match[0]) : 0;
          var thisImage = this.src;
          thisImage = thisImage.split("/").pop().split("\\").pop();

          if(reserve=="effort"){
            var maxreserve = maxeffort;
          }

          if(reserve=="sangfroid"){
            var maxreserve = maxsangfroid;
          }

          if(thisImage == "circlered.png" && note =="1"){
            this.src="./img/circle.png";
            selectReserve(reserve,0);
            for (let i = note + 1; i <= maxreserve; i++) {
              var tempID= id.replace(/\d+/g, "")+i;
              document.getElementById(tempID).src = './img/circle.png';
            }
          }else if(thisImage == "circle.png" && note =="1"){
            this.src="./img/circlered.png";
            selectReserve(reserve,note);
            for (let i = note + 1; i <= maxreserve; i++) {
              var tempID= id.replace(/\d+/g, "")+i;
              document.getElementById(tempID).src = './img/circle.png';
            }
          }else{
            selectReserve(reserve,note);
            for (let i = 1; i <= note; i++) {
              var tempID= id.replace(/\d+/g, "")+i;
              document.getElementById(tempID).src = './img/circlered.png';
            }
            for (let i = note + 1; i <= maxreserve; i++) {
              var tempID= id.replace(/\d+/g, "")+i;
              document.getElementById(tempID).src = './img/circle.png';
            }
          }
        });
      });


      if(effort){
        if (effort !== 0 && effort !== null) {
          document.getElementById('effortcircle'+effort).click();
        }
      }else{
        if (data[0].effort !== 0 && data[0].effort !== null) {
          document.getElementById('effortcircle'+data[0].effort).click();
        }
      }
      
      if(sangfroid){
        if (sangfroid !== 0 && sangfroid !== null) {
          document.getElementById('sangfroidcircle'+sangfroid).click();
        }
      }else{
        if (data[0].sangfroid !== 0 && data[0].sangfroid !== null) {
          document.getElementById('sangfroidcircle'+data[0].sangfroid).click();
        }
      }
    }

  reservesDisplay(maxeffort, maxsangfroid);
    //  
    //Gérer les blessures :
    //
    var maxblessurelegere = data[0].maxblessurelegere;
    var maxblessuregrave = data[0].maxblessuregrave;
    var maxblessuremortelle = data[0].maxblessuremortelle;

    legere = data[0].blessurelegere;
    grave = data[0].blessuregrave;
    mortelle = data[0].blessuremortelle;
    
    function blessureDisplay(maxblessurelegere, maxblessuregrave, maxblessuremortelle, legere, grave, mortelle){
      const blessurelegereBox = document.getElementById('blessurelegere');
      for (let i = 1; i <= maxblessurelegere; i++) {
        const legerereCircle = document.createElement("img");
       legerereCircle.id="legerecircle"+i;
       legerereCircle.classList.add("circleblessure");
       legerereCircle.src="./img/circle.png";
        blessurelegereBox.appendChild(legerereCircle);
      }
  
      const blessuregraveBox = document.getElementById('blessuregrave');
      for (let i = 1; i <= maxblessuregrave; i++) {
        const graveCircle = document.createElement("img");
        graveCircle.id="gravecircle"+i;
        graveCircle.classList.add("circleblessure");
        graveCircle.src="./img/circle.png";
        blessuregraveBox.appendChild(graveCircle);
      }
  
      const blessuremortelleBox = document.getElementById('blessuremortelle');
      for (let i = 1; i <= maxblessuremortelle; i++) {
        const mortelleCircle = document.createElement("img");
        mortelleCircle.id="mortellecircle"+i;
        mortelleCircle.classList.add("circleblessure");
        mortelleCircle.src="./img/circle.png";
        blessuremortelleBox.appendChild(mortelleCircle);
      }
  
      const circlesblessure = document.querySelectorAll('.circleblessure');
      circlesblessure.forEach(circle => {
        circle.addEventListener('click', function() {
          var id = this.id;
          var blessure = id.substring(0, id.indexOf("circle"));
          var note = parseInt(id.charAt(id.length - 1));
          var thisImage = this.src;
          thisImage = thisImage.split("/").pop().split("\\").pop();
          if(blessure=="legere"){
            var maxblessure = maxblessurelegere;
          }
          if(blessure=="grave"){
            var maxblessure = maxblessuregrave;
          }
  
          if(blessure=="mortelle"){
            var maxblessure = maxblessuremortelle;
          }
  
          if(thisImage == "circlered.png" && note =="1"){
            this.src="./img/circle.png";
            selectBlessure(blessure,0);
            for (let i = note + 1; i <= maxblessure; i++) {
              document.getElementById(this.id.slice(0, -1) + i).src = './img/circle.png';
            }
          }else if(thisImage == "circle.png" && note =="1"){
            this.src="./img/circlered.png";
            selectBlessure(blessure,note);
            for (let i = note + 1; i <= maxblessure; i++) {
              document.getElementById(this.id.slice(0, -1) + i).src = './img/circle.png';
            }
          }else{
            // selectBlessure(blessure, note);
            const currentNote = parseInt(this.id.slice(-1));
            selectBlessure(blessure,note);
            for (let i = 1; i <= currentNote; i++) {
              document.getElementById(this.id.slice(0, -1) + i).src = './img/circlered.png';
            }
            for (let i = currentNote + 1; i <= maxblessure; i++) {
              document.getElementById(this.id.slice(0, -1) + i).src = './img/circle.png';
            }
          }
        });
      });
  

      if(legere){
        if (legere !== 0 && legere !== null) {
          console.log("lost in the speed");
          document.getElementById('legerecircle'+legere).click();
        }
      }else{
        if (data[0].blessurelegere !== 0 && data[0].blessurelegere !== null) {
          document.getElementById('legerecircle'+data[0].blessurelegere).click();
        }
      }


      if(grave){
        if (grave !== 0 && grave !== null) {
          console.log("lost in the speed");
          document.getElementById('gravecircle'+grave).click();
        }
      }else{
        if (data[0].blessuregrave !== 0 && data[0].blessuregrave !== null) {
          document.getElementById('gravecircle'+data[0].blessuregrave).click();
        }
      }

      if(mortelle){
        if (mortelle !== 0 && mortelle !== null) {
          console.log("lost in the speed");
          document.getElementById('mortellecircle'+mortelle).click();
        }
      }else{
        if (data[0].blessuremortelle !== 0 && data[0].blessuremortelle !== null) {
          document.getElementById('mortellecircle'+data[0].blessuremortelle).click();
        }
      }
  
    }
    blessureDisplay(maxblessurelegere, maxblessuregrave, maxblessuremortelle);

    function reserveClear(){
      const circleReserves= document.getElementsByClassName('circlereserve');
      while (circleReserves.length > 0) {
        circleReserves[0].parentNode.removeChild(circleReserves[0]);
      }
    }
    function blessureClear(){
      const circleBlessures= document.getElementsByClassName('circleblessure');
      while (circleBlessures.length > 0) {
        circleBlessures[0].parentNode.removeChild(circleBlessures[0]);
      }
    }

    const increments = document.querySelectorAll(".increments");
    increments.forEach(increment => {
      increment.addEventListener('click', function() {
        var id = increment.id;

        if (id === 'pluslegere') {
          maxblessurelegere = maxblessurelegere+1;
          updatePersonnageField(Id_Personnage, "maxblessurelegere", maxblessurelegere);
        } else if (id === 'moinslegere') {
          maxblessurelegere = maxblessurelegere-1;
          updatePersonnageField(Id_Personnage, "maxblessurelegere", maxblessurelegere);
        } else if (id === 'plusgrave') {
          maxblessuregrave = maxblessuregrave+1;
          updatePersonnageField(Id_Personnage, "maxblessuregrave", maxblessuregrave);
        } else if (id === 'moinsgrave') {
          maxblessuregrave = maxblessuregrave-1;
          updatePersonnageField(Id_Personnage, "maxblessuregrave", maxblessuregrave);
        } else if (id === 'plusmortelle') {
          maxblessuremortelle = maxblessuremortelle+1;
          updatePersonnageField(Id_Personnage, "maxblessuremortelle", maxblessuremortelle);
        } else if (id === 'moinsmortelle') {
          maxblessuremortelle = maxblessuremortelle-1;
          updatePersonnageField(Id_Personnage, "maxblessuremortelle", maxblessuremortelle);
        }
        blessureClear();
        blessureDisplay(maxblessurelegere, maxblessuregrave, maxblessuremortelle, legere, grave, mortelle);
      });
    });

    const incrementsreserve = document.querySelectorAll(".incrementsreserve");
    incrementsreserve.forEach(increment => {
      increment.addEventListener('click', function() {
        var id = increment.id;

        if (id === 'pluseffort') {
          maxeffort = maxeffort+1;
          updatePersonnageField(Id_Personnage, "maxeffort", maxeffort);
        } else if (id === 'moinseffort') {
          maxeffort = maxeffort-1;
          updatePersonnageField(Id_Personnage, "maxeffort", maxeffort);
        } else if (id === 'plussangfroid') {
          maxsangfroid = maxsangfroid+1;
          updatePersonnageField(Id_Personnage, "maxsangfroid", maxsangfroid);
        } else if (id === 'moinssangfroid') {
          maxsangfroid = maxsangfroid-1;
          updatePersonnageField(Id_Personnage, "maxsangfroid", maxsangfroid);
        }
        reserveClear();
        reservesDisplay(maxeffort, maxsangfroid, effort, sangfroid);
      });
    });
   
  })
  .catch((error) => {
    console.error(error);
  });



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
  
    switch(caracSelector.options[caracSelector.selectedIndex].text){
      case "Puissance":
        caracteristiqueMalusValue = document.getElementById("malusphysique").value;
        break;
      case "Resistance":
        caracteristiqueMalusValue = document.getElementById("malusphysique").value;
        break;
  
      case "Precision":
        caracteristiqueMalusValue = document.getElementById("malusmanuel").value;
        break;
      case "Reflexes":
        caracteristiqueMalusValue = document.getElementById("malusmanuel").value;
        break;
  
      case "Connaissance":
        caracteristiqueMalusValue = document.getElementById("malussocial").value;
        break;
      case "Perception":
        caracteristiqueMalusValue = document.getElementById("malussocial").value;
        break;
  
      case "Empathie":
        caracteristiqueMalusValue = document.getElementById("malusmental").value;
        break;
      case "Volonte":
        caracteristiqueMalusValue = document.getElementById("malusmental").value;
        break;
      default:
        console.log("pastrouvé la caracteristiquemalus");
    }
    caracteristiqueValue = variablesMap[caracSelector.value];
    caracteristique = caracteristiqueValue;
    caracteristiqueMalus = caracteristiqueMalusValue;
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
  
    switch(compSelector.options[compSelector.selectedIndex].text){
      case "Arts":
        competenceMalusValue = document.getElementById("malushumain").value;
        break;
  
      case "Cite":
        competenceMalusValue = document.getElementById("malushumain").value;
        break;
  
      case "Civilisations":
        competenceMalusValue = document.getElementById("malushumain").value;
        break;
  
      case "Relationnel":
        competenceMalusValue = document.getElementById("malushumain").value;
        break;
  
      case "Soins":
        competenceMalusValue = document.getElementById("malushumain").value;
        break;
  
  
  
      case "Animalisme":
        competenceMalusValue = document.getElementById("malusanimal").value;
        break;
  
      case "Faune":
        competenceMalusValue = document.getElementById("malusanimal").value;
        break;
  
      case "Montures":
        competenceMalusValue = document.getElementById("malusanimal").value;
        break;
  
      case "Pistage":
        competenceMalusValue = document.getElementById("malusanimal").value;
        break;
  
      case "Territoire":
        competenceMalusValue = document.getElementById("malusanimal").value;
        break;
  
  
  
      case "Adresse":
        competenceMalusValue = document.getElementById("malusoutils").value;
        break;
  
      case "Armurerie":
        competenceMalusValue = document.getElementById("malusoutils").value;
        break;
  
      case "Artisanat":
        competenceMalusValue = document.getElementById("malusoutils").value;
        break;
  
      case "Mecanisme":
        competenceMalusValue = document.getElementById("malusoutils").value;
        break;
  
      case "Runes":
        competenceMalusValue = document.getElementById("malusoutils").value;
        break;
  
      
      
      case "Athletisme":
        competenceMalusValue = document.getElementById("malusterres").value;
        break;
  
      case "Discretion":
        competenceMalusValue = document.getElementById("malusterres").value;
        break;
  
      case "Flore":
        competenceMalusValue = document.getElementById("malusterres").value;
        break;
  
      case "Vigilance":
        competenceMalusValue = document.getElementById("malusterres").value;
        break;
  
      case "Voyage":
        competenceMalusValue = document.getElementById("malusterres").value;
        break;
  
  
  
      case "Bouclier":
        competenceMalusValue = document.getElementById("malusarme").value;
        break;
  
      case "Cac":
        competenceMalusValue = document.getElementById("malusarme").value;
        break;
  
      case "Lance":
        competenceMalusValue = document.getElementById("malusarme").value;
        break;
  
      case "Melee":
        competenceMalusValue = document.getElementById("malusarme").value;
        break;
  
      case "Tir":
        competenceMalusValue = document.getElementById("malusarme").value;
        break;
  
  
  
      case "Eclats":
        competenceMalusValue = document.getElementById("malusinconnu").value;
        break;
  
      case "Lunes":
        competenceMalusValue = document.getElementById("malusinconnu").value;
        break;
  
      case "Mythes":
        competenceMalusValue = document.getElementById("malusinconnu").value;
        break;
  
      case "Pantheons":
        competenceMalusValue = document.getElementById("malusinconnu").value;
        break;
  
      case "Rituels":
        competenceMalusValue = document.getElementById("malusinconnu").value;
        break;
      default:
        console.log("pas trouvé la competencemalus");
    }
    competenceValue = variables2Map[compSelector.value];
    competence = competenceValue;
    competenceMalus = competenceMalusValue;
  }

  const modifierDices = document.getElementById("modifierDices");
  
  function updateModifier(){
    modifierValue = modifierDices.value;
    modifier = modifierValue;
  } 

  setInterval(updateCompetence, 500);
  setInterval(updateCaracteristique, 500);
  setInterval(updateModifier, 500);
  

  return Promise.resolve();
};

export var caracteristique = caracteristiqueValue;
export var competence = competenceValue;

export var caracteristiqueMalus = caracteristiqueMalusValue;
export var competenceMalus= competenceMalusValue;

export var modifier= modifierValue;