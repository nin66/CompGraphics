

function animate() {
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
//Define a selected object
//  A flag saying if the object has been selected or not.
var selectedObject = false;

//add event listener to the model and move the model with mouse-down position
function onDocumentMouseDown(event) {
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1
    mouse.y = (event.clientY / renderer.domElement.clientHeight) * 2 - 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, false);
    
    if (intersects.length > 0) {    //  RaycastHit = true.
        //  If we selected the model.
        if ((intersects[0].object.name === 'Loaded Mesh') && !selectedObject){
            intersects[0].object.material.color = new THREE.Color(1, 1.5, .155);
            console.log("moised");
            selectedObject = true;
        }

        //  If model is not selected or dropped.
        if ((intersects[0].object.name !== 'Loaded Mesh') && selectedObject){
            mesh.material.color = new THREE.Color(.6, .2, .4);

            var pos = intersects[0].point;

            mesh.position.x = pos.x;
            mesh.position.y = -pos.y;

            selectedObject = false;
        }
    }
}
