import { DiceManager, DiceD10 } from '../node_modules/threejs-dice/lib/dice.js';
import { buildPage, caracteristique, competence, competenceMalus, caracteristiqueMalus, modifier } from './personnage.js';
//Config de lancement de dés
buildPage();

var number;
var rethrows;

function calculate(rethrow){
    
    number = parseInt(caracteristique) + parseInt(caracteristiqueMalus) + parseInt(competenceMalus);
    
    if(modifier != null && modifier != 0){
        number += parseInt(modifier);
    }

    rethrows = 0;
   switch(competence){
        case 0:
            break;
        case 1:
            number++;
            break
        case 2:
            number++;
            rethrows = 1;
            break;
        case 3:
            number = number + 2;
            rethrows = 1;
            break;
        case 4:
            number = number + 2;
            rethrows = 2;
            break;
        case 5:
            number = number + 3;
            rethrows = 2;
            break;
        case 6:
            number = number + 3;
            rethrows = 3;
            break;
        default:
            // Handle any unexpected values
            console.log('Unexpected value for competence:', competence, " and caracteristique");
            break;
        }



    const boite = document.getElementById("ui-controls");

    const input = document.getElementById("rethrowNumber");

   
      
    // Vérifier si le champ input existe déjà
    if (input) {
        rethrows = input.value;
    } else {
        // Créer dynamiquement un nouveau champ input
        const input = document.createElement("input");
        input.type = "number";
        input.max = rethrows;
        input.value = rethrows;
        input.id = "rethrowNumber";
        boite.appendChild(input); // Ajouter le champ input à la fin du formulaire
        input.addEventListener("change",()=>{
            if(input.value>rethrows){
                input.value=rethrows;
            }
        });
    
    }
    return [number,rethrows];
}


// MAIN
var container, scene, camera, renderer, controls, stats, world, dice = [];

init();

// FUNCTIONS
function init()
{
	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.01, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(60,60,-0);
	// RENDERER
    renderer = new THREE.WebGLRenderer( {antialias:true, alpha: true} );
    renderer.setClearColor( 0x000000, 0 ); // the default
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	container = document.getElementById( 'ThreeJS' );
	container.appendChild( renderer.domElement );

	// EVENTS
	// CONTROLS
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	// STATS
	stats = new Stats();

	let ambient = new THREE.AmbientLight('#ffffff', 0.5);
	scene.add(ambient);

    let directionalLight = new THREE.DirectionalLight('#ffffff', 0.5);
    directionalLight.position.x = -1000;
    directionalLight.position.y = 0;
    directionalLight.position.z = 1000;
    scene.add(directionalLight);

    let light = new THREE.SpotLight(0xefdfd5, 0.5);
    light.position.y = 100;
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.camera.near = 50;
    light.shadow.camera.far = 110;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add(light);


	// FLOOR
	var floorMaterial = new THREE.MeshPhongMaterial( { color: '#232323', side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(30, 30, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.receiveShadow  = true;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);
   
	// CUSTOM //
	////////////
    world = new CANNON.World();

    world.gravity.set(0, -9.82 * 30, 0);
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 16;
    DiceManager.setWorld(world);

    //Floor
    let floorBody = new CANNON.Body({mass: 0, shape: new CANNON.Plane(), material: DiceManager.floorBodyMaterial});
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.add(floorBody);
    
    function onWindowResize() {
        var SCREEN_WIDTH = window.innerWidth;
        var SCREEN_HEIGHT = window.innerHeight;
        var aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
    
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    }
    
    window.addEventListener( 'resize', onWindowResize, false );

    function randomDiceThrow(rethrow = false) {
        //Récuperer le nombre de dés à lancer
        var throws = calculate(rethrow);
        
        var numberRethrow = throws[1];
        var numberThrow = rethrow ? numberRethrow : throws[0];
        
        // Vider tous les dés de la scène
       
        dice.forEach(die => {
            scene.remove(die.getObject());
            if (die.getObject().body) {
                world.remove(die.getObject().body);
            }
        });
        dice = [];

        const rerollbtn = document.getElementById("reroll-btn");
        if(rerollbtn){
            rerollbtn.remove();
        }
        if(rethrow){
            const input = document.getElementById("rethrowNumber");
            input.remove();
        }else{
            const boite = document.getElementById("ui-controls");
            const button = document.createElement("button");
            button.id = "reroll-btn";
            button.textContent="Rethrow";
            boite.appendChild(button); // Ajouter le champ input à la fin du formulaire
            button.addEventListener("click", () => randomDiceThrow(true));
        }

        for (var i = 0; i < numberThrow; i++) {
            var die = new DiceD10({size: 1.5, backColor: "#ffffff"});
            scene.add(die.getObject());
            dice.push(die);
        }
        var diceValues = [];
        var trimmedValues = [];
        for (var i = 0; i < dice.length; i++) {
            let yRand = Math.random() * 20
            dice[i].getObject().position.x = -15 - (i % 3) * 1.5;
            dice[i].getObject().position.y = 2 + Math.floor(i / 3) * 1.5;
            dice[i].getObject().position.z = -15 + (i % 3) * 1.5;
            dice[i].getObject().quaternion.x = (Math.random()*90-45) * Math.PI / 180;
            dice[i].getObject().quaternion.z = (Math.random()*90-45) * Math.PI / 180;
            dice[i].updateBodyFromMesh();
            let rand = Math.random() * 5;
            dice[i].getObject().body.velocity.set(25 + rand, 40 + yRand, 15 + rand);
            dice[i].getObject().body.angularVelocity.set(20 * Math.random() -10, 20 * Math.random() -10, 20 * Math.random() -10);
    
            let value = Math.floor(Math.random() * 10) + 1; // generate a random integer between 1 and 10
            // trimmedValues.push({value});
            trimmedValues.push({dice: dice[i].constructor.name, value: value});
            diceValues.push({dice: dice[i], value: value});
        }
        addThrow(trimmedValues);
        DiceManager.prepareValues(diceValues);
        
    }
    requestAnimationFrame( animate );
 
    const roll = document.getElementById("roll-btn");
    roll.addEventListener("click", () => randomDiceThrow());

}

function animate()
{
    updatePhysics();
	render();
	update();

    requestAnimationFrame( animate );

}

function updatePhysics() {
    world.step(1.0 / 60.0);

    for (var i in dice) {
        dice[i].updateMeshFromBody();
    }
}

function update()
{
	controls.update();
	stats.update();
}

function render()
{
	renderer.render( scene, camera );
}




const caracteristiquePicker = document.getElementById("caracteristique");
const competencePicker = document.getElementById("competence");

caracteristiquePicker.addEventListener("change",()=>{
    const rerollbtn = document.getElementById("reroll-btn");
        if(rerollbtn){
            rerollbtn.remove();
        }
    const input = document.getElementById("rethrowNumber");
    if(input){
        input.remove();
    }
});

competencePicker.addEventListener("change",()=>{
    const rerollbtn = document.getElementById("reroll-btn");
        if(rerollbtn){
            rerollbtn.remove();
        }
    const input = document.getElementById("rethrowNumber");
    if(input){
        input.remove();
    }
});


async function addThrow(diceValues){    
    
    //Ajoute les valeurs au dashboard commun
    try {
        const response = await fetch(`/throws/new/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ diceValues: JSON.stringify(diceValues), Id_Personnage })
        });
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
