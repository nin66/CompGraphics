var objects = [];

var GLTFLoader = new THREE.GLTFLoader();
let mixer = [];
/** An array of all moveable models. */
let moveableModels = [];

var V3Zero = new THREE.Vector3(0, 0, 0);

const kRocks = 'Rocks';
const kCoral = 'Coral';
const kFish = 'Fish';

/**
 * Loads a GLTF model from url into the scene at x, y and z on a normal.
 * @param { string } url The URL of the model.
 * @param { number } x The World-X position of where the model should spawn.
 * @param { number } y The World-Y position of where the model should spawn.
 * @param { number } z The World-Z position of where the model should spawn.
 * @param { THREE.Vector3} normal The THREE.Vector3 up normal of the surface to spawn on.
 * @param { string } name The name of the model.
 * @param { boolean } bMoveable Is this model moveable?
 */
function loadGLTF(url, x, y, z, normal, name, bMoveable) {
    x = x || 0;     //  Default positions.
    y = y || 0;     //
    z = z || 0;     //

    GLTFLoader.load(url, (gltf) => {

        if (gltf.animations.length != 0) {
            for (let i = 0; i < gltf.animations.length; ++i) {
                var m = new THREE.AnimationMixer(gltf.scene);
                mixer.push(m);
                var action = m.clipAction(gltf.animations[i]);
                action.play();
            }
        }

        gltf.scene.traverse(function(o){
            if (o.isMesh) {
                o.castShadow = true;
                o.receiveShadow = true;

                o.name = name;
            }
        });

        // if (bMoveable) {
        //     moveableModels.push(gltf.scene);
        // }
        
        //  Apply positions.
        gltf.scene.position.x = x;
        gltf.scene.position.y = y;
        gltf.scene.position.z = z;

        //  Apply normals.
        gltf.scene.rotation.x = normal.x;
        gltf.scene.rotation.y = normal.y;
        gltf.scene.rotation.z = 0;

        // gltf.scene.lookAt(gltf.scene.position.x + up.x, gltf.scene.position.y + up.y, gltf.scene.position.z + up.z);
        gltf.castShadow = true;

        var randomScale = Utils.random(1, 5);
        gltf.scene.scale.set(randomScale, randomScale, randomScale);

        // //  Axes helper for rotations and normals.
        // const ax = new THREE.AxesHelper(20);
        // gltf.scene.add(ax);

        gltf.scene.name = name;

        scene.add(gltf.scene);
    });
}

/**
 * Loads a GLTF coral model from url into the scene at x, y and z on a normal.
 * @param { string } url The URL of the model.
 * @param { number } x The World-X position of where the model should spawn.
 * @param { number } y The World-Y position of where the model should spawn.
 * @param { number } z The World-Z position of where the model should spawn.
 * @param { THREE.Vector3 } normal The THREE.Vector3 up normal of the surface to spawn on.
 * @param { string } name The name of the model.
 */
function loadGLTFCoral(url, x, y, z, normal, name) {
    x = x || 0;     //  Default positions.
    y = y || 0;     //
    z = z || 0;     //

    GLTFLoader.load(url, (gltf) => {

        if (gltf.animations.length != 0) {
            for (let i = 0; i < gltf.animations.length; ++i) {
                var m = new THREE.AnimationMixer(gltf.scene);
                mixer.push(m);
                var action = m.clipAction(gltf.animations[i]);
                action.play();
            }
        }

        //  Set the coral's material and colour.
        gltf.scene.traverse(function(o){
            if (o.isMesh) {
                objects.push(o);
                o.castShadow = true;
                o.receiveShadow = true;

                o.material = new THREE.MeshLambertMaterial();
                o.material.emissive = new THREE.Color(Math.random(), Math.random(), Math.random());

                o.name = name;
            }
        })

        
        //  Apply positions.
        gltf.scene.position.x = x;
        gltf.scene.position.y = y;
        gltf.scene.position.z = z;

        //  Apply normals.
        gltf.scene.rotation.x = normal.x;
        gltf.scene.rotation.y = normal.y;
        gltf.scene.rotation.z = 0;

        gltf.castShadow = true;

        var randomScale = Utils.random(1, 5);
        gltf.scene.scale.set(randomScale, randomScale, randomScale);

        // const ax = new THREE.AxesHelper(20);
        // gltf.scene.add(ax);

        gltf.scene.name = name;

        scene.add(gltf.scene);

        if (randomScale > 4) {
            var random = Math.random();
            if (random < .25)
                loadGLTF('models/gltf/BrownFish.glb', x, y + 10, z, V3Zero, kFish, true);
            else if (random < .5)
                loadGLTF('models/gltf/Dory.glb', x, y + 10, z, V3Zero, kFish, true);
            else if (random < .75)
                loadGLTF('models/gltf/Marlin.glb', x, y + 10, z, V3Zero, kFish, true);
            else
                loadGLTF('models/gltf/Tuna.glb', x, y + 10, z,V3Zero, kFish, true);
        }
    });
}

var mesh = null;
var ambientlight;
var directionalLight;
var cameralight;
var floor = null;

function addLight() {
    ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), .5);
    directionalLight = new THREE.DirectionalLight(new THREE.Color(1, 1, 1), .5);
    directionalLight.position.set(0, 0, 0);
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
