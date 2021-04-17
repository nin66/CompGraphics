/* global THREE, cube, scene, camera, renderer */

function animate() {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(animate);
}

//add event listener to the model and move the model with mouse-down position
function onDocumentMouseDown(event) {

}