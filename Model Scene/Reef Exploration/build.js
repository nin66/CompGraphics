

var GLTFLoader = new THREE.GLTFLoader();
// let mixer;
let mixer = [];
let meshes = [];
let skinned = [];

function loadGLTF(url, x, y, z) {
    x = x || 0;     //  Default positions.
    y = y || 0;     //
    z = z || 0;     //

    GLTFLoader.load(url, (gltf) => {

        if (gltf.animations.length != 0) {
            
            // mixer = new THREE.AnimationMixer(gltf.scene);
            // var action = mixer.clipAction(gltf.animations[0]);
            // action.play();
            for (let i = 0; i < gltf.animations.length; ++i) {
                var m = new THREE.AnimationMixer(gltf.scene);
                mixer.push(m);
                var action = m.clipAction(gltf.animations[i]);
                action.play();
            }
        }
        
        gltf.scene.position.x = x;
        gltf.scene.position.y = y;
        gltf.scene.position.z = z;

        scene.add(gltf.scene);
    });
}

var mesh = null;
var ambientlight;
var directionalLight;
var cameralight;
var floor = null;

function addLight() {
    ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), .5);
    directionalLight = new THREE.DirectionalLight(new THREE.Color(1, 1, 1), 1);
}

//Create floor
function createFloor() {
    var floorMaterial = new THREE.MeshLambertMaterial();
    floorMaterial.color = new THREE.Color(1, 1, 1);
    var floorGeometry = new THREE.PlaneGeometry(100, 50, 20, 10);

    floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -90 * (Math.PI / 180);
    floor.position.y = -.5;
}

//Add all shapes to the scene
function addShapes() {
    // scene.add(floor);
    scene.add(camera);
    scene.add(ambientLight);
    scene.add(directionalLight);
}