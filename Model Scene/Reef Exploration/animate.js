

function animate() {

    /** Delta time */
    delta = clock.getDelta();

    bubbleParticles.forEach(b => { //bubble animation (spins around z axis)
        b.position.addScaledVector(V3Up, speed * delta);
        b.rotation.z-=.02;
        if (b.position.y >= 100) { //respawn height
            b.position.y = 10;
        } else {
        }
    });

    mixer.forEach(function (call){
        call.update(delta);
    });

    moveableModels.forEach(function(m){
        m.translateZ(kMoveSpeed * delta);

        if (Math.abs(m.position.x) > hWidth || m.position.y > 200 || m.position.y < 0 || Math.abs(m.position.z) > hHeight) {
            var r = A4.random3(-hWidth, hWidth, 50, heightMultiplier, -hHeight, height);
            m.position.set(r.x, r.y, r.z);
        }
    });

	PerformFishyMovement();

    ComputeDaylightColour(delta);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

var raycaster = new THREE.Raycaster();
raycaster.near = 0;
raycaster.far = 5000;

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

var vTo = new THREE.Vector3();              //  For some reason, THREE.js doesn't like setting a Vector3
vTo.x = V3Right.x;                          //  like var v3 = v.position; so it is done like this.
vTo.y = V3Right.y;                          //  It looks horrendous, but stick with it.
vTo.z = V3Right.z;                          //

const au = 1536;    //  Distance between the sun and the terrain; astronomical unit.
const solstice = new THREE.Color(0xDDDDFF);     //  Solstice colour: When the sun is directly above the terrain.
const sunsetrise = new THREE.Color(0xFF8C00);   //  sunsetrise colour: When the sun's light is interrupted by the atmosphere.
var colour = new THREE.Color();
var bSpawned = false;

function ComputeDaylightColour(fDelta) {
	fPointLightTime += fDelta * fTimeOfDaySpeed;
	pointLight.position.y = au * Math.sin(fPointLightTime);
	pointLight.position.x = au * Math.cos(fPointLightTime);

	var vFrom = new THREE.Vector3();        //
	vFrom.x = pointLight.position.x;        //
	vFrom.y = pointLight.position.y;        //
	vFrom.z = pointLight.position.z;        //

	vFrom.normalize();
	vTo.normalize();

	var dot = A4.Dot(vFrom, vTo);

	if (!bSpawned && aToSpawn.length > 0) {
		SpawnNewFishies();
	}

	colour.lerpColors(solstice, sunsetrise, Math.abs(dot));
	pointLight.color = colour;
}

const kMoveSpeed = 7.5;

function PerformFishyMovement() {
    if (bInitialised && seeker.length > 0) {

        bCalculatedPath = true;

		for (let i = 0; i < seeker.length; ++i) {
            if (A4.Distance(seeker[i].position, seekerTarget[i].position) > 5) {
                var vFrom = new THREE.Vector3();
                vFrom.x = seeker[i].position.x;
                vFrom.y = seeker[i].position.y;
                vFrom.z = seeker[i].position.z;

                var vTo = new THREE.Vector3();
                vTo.x = seekerTarget[i].position.x;
                vTo.y = seekerTarget[i].position.y + 5;
                vTo.z = seekerTarget[i].position.z;

                var vTargetPosition = new THREE.Vector3();
                vTargetPosition.x = vTo.x - vFrom.x;
                vTargetPosition.y = vTo.y - vFrom.y;
                vTargetPosition.z = vTo.z - vFrom.z;
                vTargetPosition.normalize();

                seeker[i].position.x += vTargetPosition.x * kMoveSpeed * delta;
                seeker[i].position.y += vTargetPosition.y * kMoveSpeed * delta;
                seeker[i].position.z += vTargetPosition.z * kMoveSpeed * delta;

		seeker[i].lookAt(seekerTarget[i].position);

            } else {
                //  On Target Reached.
		aToSpawn.push(seeker[i]);

                seeker.splice(i, 1);
                seekerTarget.splice(i, 1);

            }
        }
    }
}
