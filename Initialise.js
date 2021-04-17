

var scene;
var camera;
var renderer;
var day_light;
var ambient_light;

var clock = new THREE.Clock();
var deltaTime;

scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x10388c, 1, 250);

var ratio = window.innerWidth / window.innerHeight;

// FOV, size, near, far clipping planes.
camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 10000);

day_light = new THREE.DirectionalLight(0xFFFFFF, 1);
day_light.position.set(0, 10, 0);
scene.add(day_light);

ambient_light = new THREE.AmbientLight(0x104E88);
scene.add(ambient_light);

renderer = new THREE.WebGLRenderer();
renderer.antialias = true;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0x000088));
//renderer.setClearColor(new THREE.Color(1, 1, 1));
document.body.appendChild(renderer.domElement);

//  Automatically respond to the screen resizing.
window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	camera.updateProjectionMatrix();

	renderer.render(scene, camera);
})
