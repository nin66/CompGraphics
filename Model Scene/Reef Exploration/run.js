

setScene();
addLight();
addShapes();
bubble();

loadGLTF('models/gltf/Lobster.glb'       , -05, 3, -00, new THREE.Vector3(0, 0, 0),'Lobster', true);

MakePlane();
UpdatePlane();

document.addEventListener('mousedown', onDocumentMouseDown, false);

animate();

window.addEventListener('resize', resizeScene);