

var cursor;

var ASCIIKeyCode = {};

var fVMovementSpeed = 1;    //  Speed of the camera's position.
var fQMovementSpeed = 1;    //  Speed of the camera's rotation (using arrow keys).

//  Mouse Coordiantes.
cursor = new THREE.Vector2();

//  Keyboard Handling.
document.onkeydown = KeyDown;
document.onkeyup = KeyUp;
function KeyDown(event) {
    ASCIIKeyCode[event.keyCode] = true;
}

function KeyUp(event) {
    ASCIIKeyCode[event.keyCode] = false;
}

//  Mouse Handling
var bLeftMouse = false;
var azimuth = 0.0;
var inclination = 0.0;
var prevAzimuth = 0.0;
var prevInclination = 0.0;

document.onmousedown = function(event){
    bLeftMouse = true;
    azimuth = event.clientX;
    inclination = event.clientY;
    prevAzimuth = azimuth;
    prevInclination = inclination;
}

document.onmouseup = function(event) {
    bLeftMouse = false;
}

document.onmousemove = function(event) {
    if(!bLeftMouse)
        return;

    //  X-Axis and Y-Axis boundaries according to screen space.
    //  Value between -1 and +1.
    cursor.x = 2 * (event.clientX / window.innerWidth) - 1;
    cursor.y = 2 * (event.clientY / window.innerHeight) - 1;
    azimuth = event.clientX;
    inclination = event.clientY;
    cursor.x = (event.clientX / window.innerWidth) * 2 - 1;
    cursor.y = (event.clientY / window.innerHeight) * 2 - 1;
}

//  Do not re-render the scene: (renderer.render(scene, camera));
function UpdateControls() {
    requestAnimationFrame(UpdateControls);

    if(bLeftMouse) {
        var deltaAzimuth = azimuth - prevAzimuth;
        var deltaInclination = inclination - prevInclination;
        prevAzimuth = azimuth;
        prevInclination = inclination;

        RotateRelativeTo(camera, new THREE.Vector3(0,1,0), -0.002 * deltaAzimuth)

        camera.rotateOnAxis (new THREE.Vector3(1,0,0), -0.002 * deltaInclination);
    }

    UpdateCameraQuaternion();
    UpdateCameraVector3();

    camera.updateMatrixWorld();
    camera.updateProjectionMatrix();
}

//  Mouse Rotate Handling.
function RotateRelativeTo(relativeTo, axis, radians) {
    var q = new THREE.Quaternion();

    if (axis.length() != 1) {
        console.warn("Ensure that the input axis : Vector3 is normalised.");
        axis.normalize();
    }

    q.setFromAxisAngle(axis, radians);
    relativeTo.quaternion.multiplyQuaternions(q, relativeTo.quaternion);
}

//  Move camera position using Vector3.
function UpdateCameraVector3(){
    if(ASCIIKeyCode[87]) {  //  W : Forward
        camera.translateZ(-fVMovementSpeed);
    }

    if(ASCIIKeyCode[65]) {  //  A : Left
        camera.translateX(-fVMovementSpeed);
    }

    if(ASCIIKeyCode[83]) {  //  S : Back
        camera.translateZ(fVMovementSpeed);
    }

    if(ASCIIKeyCode[68]) {  //  D : Right
        camera.translateX(fVMovementSpeed);
    }

    if (ASCIIKeyCode[81]) { //  Q : Surface
        camera.translateY(fVMovementSpeed);
    }

    if (ASCIIKeyCode[69]) { //  E : Dive
        camera.translateY(-fVMovementSpeed);
    }
}

//  Update camera angle using Quaternion.
function UpdateCameraQuaternion(){
    if(ASCIIKeyCode[38]) {  //  Up
        camera.rotateOnAxis (new THREE.Vector3(1,0,0), 0.015);
    }

    if(ASCIIKeyCode[37]) {  //  Left
        RotateRelativeTo(camera, new THREE.Vector3(0,1,0), 0.015)
    }

    if(ASCIIKeyCode[40]) {  //  Down
        camera.rotateOnAxis (new THREE.Vector3(1,0,0), -0.015);
    }

    if(ASCIIKeyCode[39]) {  //  Right
        RotateRelativeTo(camera, new THREE.Vector3(0,1,0), -0.015)
    }
}

UpdateControls();
