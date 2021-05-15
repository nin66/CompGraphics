function animate() {

    
    bubbleParticles.forEach(b => { //bubble animation (spins around z axis)
        b.position.y+=.07;
        b.rotation.z-=.02;
    })

    renderer.render(scene, camera);

    /** Delta time */
    var delta = clock.getDelta();

    mixer.forEach(function (call){
        call.update(delta);
    });

    moveableModels.forEach(function(model) {
        // Where to access all moveable models.
        // E.g.,
        // console.log(model);
        // model.position.x += 1 * delta;
        // console.log(model.position);
    });
    
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
                case 'Lobster':
                    document.getElementById('modelinfo').innerHTML = Information.Lobster();
                    break;
                case 'Fish':
                    document.getElementById('modelinfo').innerHTML = Information.Fish();
                    break;
                case kRocks:
                    document.getElementById('modelinfo').innerHTML = Information.Rocks();
                    break;
                case kCoral:
                    document.getElementById('modelinfo').innerHTML = Information.Coral();
                    break;
                case 'Shells':
                    document.getElementById('modelinfo').innerHTML = Information.Shells();
                    break;
                case 'SeaWeed':
                    document.getElementById('modelinfo').innerHTML = Information.Seaweed();
                    break;
            }
        } else {
           document.getElementById('modelname').innerHTML = '';
           document.getElementById('modelinfo').innerHTML = '';
        }
    }
}
