

setScene();
addLight();
createFloor();
addShapes();
bubble();
// loadGLTF('models/gltf/Coral.glb'         , -15, 3, -15, new THREE.Vector3(0, 0, 0));
// loadGLTF('models/gltf/Coral1.glb'        , -10, 3, -15, new THREE.Vector3(0, 0, 0));
// loadGLTF('models/gltf/Coral2.glb'        , -05, 3, -15, new THREE.Vector3(0, 0, 0));
// loadGLTF('models/gltf/Coral3.glb'        , -00, 3, -15, new THREE.Vector3(0, 0, 0));
// loadGLTF('models/gltf/Coral4.glb'        , +05, 3, -15, new THREE.Vector3(0, 0, 0));
// loadGLTF('models/gltf/Coral5.glb'        , +10, 3, -15, new THREE.Vector3(0, 0, 0));
// loadGLTF('models/gltf/Coral6.glb'        , +15, 3, -15, new THREE.Vector3(0, 0, 0));
// loadGLTF('models/gltf/Crab.glb'          , -35, 3, -00, new THREE.Vector3(0, 0, 0),'Crab', true);
// loadGLTF('models/gltf/Dolphin.glb'       , -25, 3, -00, new THREE.Vector3(0, 0, 0),'Dolphin', true);
// loadGLTF('models/gltf/Eel.glb'           , -20, 3, -00, new THREE.Vector3(0, 0, 0),'Eel', true);
// loadGLTF('models/gltf/Fish.glb'          , -15, 3, -00, new THREE.Vector3(0, 0, 0),'Fish', true);
// loadGLTF('models/gltf/Hammerhead.glb'    , -10, 3, -00, new THREE.Vector3(0, 0, 0),'Hammerhead', true);
// // loadGLTF('models/gltf/Lobster.glb'       , -05, 3, -00, new THREE.Vector3(0, 0, 0),'Lobster', true);
// loadGLTF('models/gltf/Octopus.glb'       , +00, 3, -00, new THREE.Vector3(0, 0, 0),'Octopus', true);
// loadGLTF('models/gltf/Penguin.glb'       , +05, 3, -00, new THREE.Vector3(0, 0, 0),'Penguin', true);
// // loadGLTF('models/gltf/Rocks.glb'         , +15, 3, -00, new THREE.Vector3(0, 0, 0),'Rocks', true);
// loadGLTF('models/gltf/Seal.glb'          , +25, 3, -00, new THREE.Vector3(0, 0, 0),'Seal', true);
// // loadGLTF('models/gltf/SeaWeed.glb'       , +35, 3, -00, new THREE.Vector3(0, 0, 0),'SeaWeed', true);
// loadGLTF('models/gltf/Shark.glb'         , +40, 3, -00, new THREE.Vector3(0, 0, 0),'Shark', true);
// // loadGLTF('models/gltf/Shells.glb'        , -15, 3, +15, new THREE.Vector3(0, 0, 0),'', true);
// loadGLTF('models/gltf/Squid.glb'         , -10, 3, +15, new THREE.Vector3(0, 0, 0),'Squid', true);
// loadGLTF('models/gltf/StarFish.glb'      , -05, 3, +15, new THREE.Vector3(0, 0, 0),'StarFish', true);
// loadGLTF('models/gltf/StingRay.glb'      , +00, 3, +15, new THREE.Vector3(0, 0, 0),'StingRay', true);
// loadGLTF('models/gltf/Turtle.glb'        , +05, 3, +15, new THREE.Vector3(0, 0, 0),'Turtle', true);
// loadGLTF('models/gltf/Whale.glb'         , +10, 3, +15, new THREE.Vector3(0, 0, 0),'Whale', true);

loadGLTF('models/gltf/Lobster.glb'       , -05, 3, -00, new THREE.Vector3(0, 0, 0), 'Lobster', true);

MakePlane();
UpdatePlane();

document.addEventListener('mousedown', onDocumentMouseDown, false);

animate();

window.addEventListener('resize', resizeScene);