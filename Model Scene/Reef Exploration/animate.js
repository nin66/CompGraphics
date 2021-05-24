

function animate() {

    /** Delta time */
    delta = clock.getDelta();
    time += delta;


    bubbleParticles.forEach(b => { //bubble animation (spins around z axis)
        b.position.addScaledVector(direction, speed * delta);
        b.position.y+=.07;
        b.rotation.z-=.02;
        if (b.position.y >= 800) {
            b.position.y = 100;
        } else {
        }
    });

    renderer.render(scene, camera);

    mixer.forEach(function (call){
        call.update(delta);
    });

    moveableModels.forEach(function(model) {
        // Where to access all moveable models.
        // E.g.,
        // console.log(model);
        model.position.z -= 2 * delta;
        // console.log(model.position);
    });

    computeDaylightColour(delta);

    requestAnimationFrame(animate);
}

//  Below is yoinked from the lab.

//Define a raycaster from THREE to apply for intersected objects
var raycaster = new THREE.Raycaster();
raycaster.near = 0;
raycaster.far = 5000;

//add event listener to the model and move the model with mouse-down position
function onDocumentMouseDown(event) {
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {    //  RaycastHit = true.
		if (intersects[0].object.name.length !== 0) {
            const name = intersects[0].object.name;
            document.getElementById('modelname').innerHTML = name;
            switch (name) {
                case kLobster:
                    document.getElementById('modelinfo').innerHTML = Information.Lobster();
                    break;
                case kFish:
                    document.getElementById('modelinfo').innerHTML = Information.Fish();
                    break;
                case kRocks:
                    document.getElementById('modelinfo').innerHTML = Information.Rocks();
                    break;
                case kCoral:
                    document.getElementById('modelinfo').innerHTML = Information.Coral();
                    break;
                case kShells:
                    document.getElementById('modelinfo').innerHTML = Information.Shells();
                    break;
                case kSeaweed:
                    document.getElementById('modelinfo').innerHTML = Information.Seaweed();
                    break;
                case kStarFish:
                    document.getElementById('modelinfo').innerHTML = Information.StarFish();
                    break;
                case kCrab:
                    document.getElementById('modelinfo').innerHTML = Information.Crab();
                    break;
                case kDolphin:
                    document.getElementById('modelinfo').innerHTML = Information.Dolphin();
                    break;
                case kEel:
                    document.getElementById('modelinfo').innerHTML = Information.Eel();
                    break;
                case kHammerhead:
                    document.getElementById('modelinfo').innerHTML = Information.Hammerhead();
                    break;
                case kOctopus:
                    document.getElementById('modelinfo').innerHTML = Information.Octopus();
                    break;
                case kSeal:
                    document.getElementById('modelinfo').innerHTML = Information.Seal();
                    break;
                case kShark:
                    document.getElementById('modelinfo').innerHTML = Information.Shark();
                    break;
                case kSquid:
                    document.getElementById('modelinfo').innerHTML = Information.Squid();
                    break;
                case kStingray:
                    document.getElementById('modelinfo').innerHTML = Information.Stingray();
                    break;
                case kTurtle:
                    document.getElementById('modelinfo').innerHTML = Information.Turtle();
                    break;
                case kWhale:
                    document.getElementById('modelinfo').innerHTML = Information.Whale();
                    break;
            }
        } else {
           document.getElementById('modelname').innerHTML = '';
           document.getElementById('modelinfo').innerHTML = '';
        }
    }
}

var fPointLightTime = 0;
var fTimeOfDaySpeed = .01;
const v3Right = new THREE.Vector3(1, 0, 0);
const solstice = new THREE.Color(0xFFFFFF);
const sunsetrise = new THREE.Color(0xFF8C00);
var colour = new THREE.Color();

function computeDaylightColour(fDelta) {
    fPointLightTime += fDelta * fTimeOfDaySpeed;
    pointLight.position.y = 1536 * Math.sin(fPointLightTime);
    pointLight.position.x = 1536 * Math.cos(fPointLightTime);

    var vFrom = new THREE.Vector3();
    vFrom.x = pointLight.position.x;
    vFrom.y = pointLight.position.y;
    vFrom.z = pointLight.position.z;
    
    var vTo = new THREE.Vector3();
    vTo.x = v3Right.x;
    vTo.y = v3Right.y;
    vTo.z = v3Right.z;

    vFrom.normalize();
    vTo.normalize();

    var dot = (vFrom.x * vTo.x) + (vFrom.y * vTo.y) + (vFrom.z * vTo.z);

    colour.lerpColors(solstice, sunsetrise, Math.abs(dot));
    pointLight.color = colour;
}