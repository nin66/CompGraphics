/* global THREE */
//Declare Systen Variables

var scene;
var camera;
var renderer;
var controls;
var clock;
var flashlight;
var gui;
var dragControls;

//Setup the 3 main components: scene, camera, renderer
function setScene() {
    scene = new THREE.Scene();
    var ratio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 5000);
    camera.position.set(0, 50, 20);
    camera.lookAt(0, 0, 5);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // controls = new THREE.OrbitControls(camera, renderer.domElement);
    dragControls = new THREE.DragControls(objects, camera, renderer.domElement);
    //scene.fog = new THREE.Fog(0x10388c, 150, 1000);
    const loader = new THREE.TextureLoader();
const bgTexture = loader.load('bg2.png');
scene.background = bgTexture;

    scene.fog = new THREE.FogExp2(0x144b6d, 0.003);
    clock = new THREE.Clock();
    flashlight = new THREE.SpotLight(0xffffff,3, 300, 75, 0.5);
    camera.add(flashlight);
    flashlight.position.set(0,0,1);
    flashlight.target = camera;
    const h = new THREE.AxesHelper(100000000);
    scene.add(h);
}

//Resize the scene and update the camera aspect to the screen ration
var resizeScene = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
};

function clearScene() {
    for (let i = scene.children.length - 1; i >= 0; i--)
        if (scene.children[i].type === "Mesh")
            scene.remove(scene.children[i]);
}