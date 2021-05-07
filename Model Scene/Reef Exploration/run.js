

setScene();
addLight();
createFloor();
addShapes();

// loadGLTF('models/gltf/Coral.glb'         , -15, 3, -15);
// loadGLTF('models/gltf/Coral1.glb'        , -10, 3, -15);
// loadGLTF('models/gltf/Coral2.glb'        , -05, 3, -15);
// loadGLTF('models/gltf/Coral3.glb'        , -00, 3, -15);
// loadGLTF('models/gltf/Coral4.glb'        , +05, 3, -15);
// loadGLTF('models/gltf/Coral5.glb'        , +10, 3, -15);
// loadGLTF('models/gltf/Coral6.glb'        , +15, 3, -15);
// loadGLTF('models/gltf/Crab.glb'          , -35, 3, -00);
// loadGLTF('models/gltf/Dolphin.glb'       , -25, 3, -00);
// loadGLTF('models/gltf/Eel.glb'           , -20, 3, -00);
// loadGLTF('models/gltf/Fish.glb'          , -15, 3, -00);
// loadGLTF('models/gltf/Hammerhead.glb'    , -10, 3, -00);
// loadGLTF('models/gltf/Lobster.glb'       , -05, 3, -00);
// loadGLTF('models/gltf/Octopus.glb'       , +00, 3, -00);
// loadGLTF('models/gltf/Penguin.glb'       , +05, 3, -00);
// loadGLTF('models/gltf/Rocks.glb'         , +15, 3, -00);
// loadGLTF('models/gltf/Seal.glb'          , +25, 3, -00);
// loadGLTF('models/gltf/SeaWeed.glb'       , +35, 3, -00);
// loadGLTF('models/gltf/Shark.glb'         , +40, 3, -00);
// loadGLTF('models/gltf/Shells.glb'        , -15, 3, +15);
// loadGLTF('models/gltf/Squid.glb'         , -10, 3, +15);
// loadGLTF('models/gltf/StarFish.glb'      , -05, 3, +15);
// loadGLTF('models/gltf/StingRay.glb'      , +00, 3, +15);
// loadGLTF('models/gltf/Turtle.glb'        , +05, 3, +15);
// loadGLTF('models/gltf/Whale.glb'         , +10, 3, +15);

loadGLTF('models/gltf/Lobster.glb'       , -05, 3, -00, new THREE.Vector3(0, 1, 0), true);

MakePlane();
UpdatePlane();

document.addEventListener('mousedown', onDocumentMouseDown, false);

animate();

window.addEventListener('resize', resizeScene);