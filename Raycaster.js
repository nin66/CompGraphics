

//	Define a raycaster from THREE to apply for intersected objects
var raycaster = new THREE.Raycaster();
raycaster.near = 0;
raycaster.far = 3000;
raycaster.camera = camera;

//	Define a selected object
//  	A flag saying if the object has been selected or not.
var selectedObject = false;

document.addEventListener('mousemove', onDocumentMouseDown, false);

var LastIntersect;
var oClickableObjects = [];

var bInitialised = false;
function InitialiseClickable(){
	if (!bInitialised){
		for(let i = 0; i < scene.children.length; ++i){
			if (scene.children[i].name == 'clickable'){
				oClickableObjects.push(scene.children[i]);
			}
		}
		bInitialised = true;
	}
}

//	Add event listener to the model and move the model with mouse-down position
function onDocumentMouseDown(event) {
	camera.updateMatrixWorld();
    camera.updateProjectionMatrix();

    var mouse = new THREE.Vector2();
    var rect = renderer.domElement.getBoundingClientRect();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

	raycaster.origin = camera.position;
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(oClickableObjects, false);

    if (intersects.length > 0) {    //  RaycastHit = true.
	    if (LastIntersect != intersects[0].object) {
		    if (LastIntersect){
		            LastIntersect.material.emissive.setHex(LastIntersect.currentHex);
		    }

		    LastIntersect = intersects[0].object;
		    LastIntersect.currentHex = LastIntersect.material.emissive.getHex();
		    LastIntersect.material.emissive.setHex(0xFFFFFF);
		    scene.remove(LastIntersect);
	    }

    } else {
	    if (LastIntersect) {
	    	LastIntersect.material.emissive.setHex(LastIntersect.currentHex);
	    }

	    LastIntersect = null;
    }
}

InitialiseClickable();
