var objects = []; //objects that are draggable, pushed to this array
var ambientlight;
var GLTFLoader = new THREE.GLTFLoader(loadingManager);
let mixer = [];
/** An array of all moveable models. */
let moveableModels = [];
var bubbleParticles = []; //array of bubble objects

var V3Zero = new THREE.Vector3(0, 0, 0);

const kRocks = 'Rocks';             //  Standardised and consistent spelling of objects/models.
const kCoral = 'Coral';             //  This is so that there is no confusion or errors based on
const kFish = 'Fish';               //  the spelling of models.
const kShells = 'Shells';           //
const kSeaweed = 'SeaWeed';         //  Spellings are preceded with 'k' to denote a constant and
const kStarFish = 'Sea Star';       //  for autocomplete.
const kCrab = 'Crab';               //
const kDolphin = 'Dolphin';         //
const kEel = 'Eel';                 //
const kHammerhead = 'Hammerhead';   //
const kLobster = 'Lobster';         //
const kOctopus = 'Octopus';         //
const kSeal = 'Seal';               //
const kShark = 'Shark';             //
const kSquid = 'Squid';             //
const kStingray = 'Stingray';       //
const kTurtle = 'Turtle';           //
const kWhale = 'Whale';             //

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

        gltf.scene.traverse(function (o) {
            if (o.isMesh) {
                o.castShadow = true;
                o.scale.set(2, 2, 2);
                o.name = name;
            }
        });

        if (bMoveable) {
            moveableModels.push(gltf.scene);
        }

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
        gltf.scene.traverse(function (o) {
            if (o.isMesh) {
                objects.push(o);
                o.castShadow = true;
                o.scale.set(2, 2, 2);
                o.material = new THREE.MeshPhongMaterial();
                o.material.color = new THREE.Color(0xFFFFFF * Math.random());

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
                loadGLTF('models/gltf/Tuna.glb', x, y + 10, z, V3Zero, kFish, true);
        }
    });
}

var pointLight

function bubble() {
    //bubbles made using overlaying a plane with a png texture
    let loader = new THREE.TextureLoader(loadingManager);
    loader.load("bubble.png", function (texture) {
        bubbleGeo = new THREE.PlaneBufferGeometry(30, 30);
        bubbleMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true,
            blending: THREE.AdditiveBlending //allows for better blending effect of transparent pngs
        });

        for (let p = 0; p < 100; p++) {
            let bubble = new THREE.Mesh(bubbleGeo, bubbleMaterial);
            bubble.position.set(
                Math.random() * 800 - 200,
                20,
                Math.random() * 500 - 250
            );
            bubble.rotation.x = 0;
            bubble.rotation.y = 0;
            bubble.rotation.z = Math.random() * 360;
            bubble.scale.set(.1, .1, .1);
            bubble.material.opacity = 0.4;
            bubbleParticles.push(bubble);
            scene.add(bubble);
        }
    })

}

function addLight() {
    ambientLight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), .5);

    //  Removed the directional light because THREE.js' directional light doesn't cast shadows.
    //  Replaced with a point light.
    pointLight = new THREE.PointLight();
    pointLight.castShadow = true;

    //  Shadow settings.
    pointLight.shadow.mapSize.width = 2048;     //  Shadow sample size.
    pointLight.shadow.mapSize.height = 2048;    //
    pointLight.shadow.camera.near = 0.5;            //  Shadow casting bounds.
    pointLight.shadow.camera.far = 10000;           //
    scene.add(pointLight);
}

//Add all shapes to the scene
function addShapes() {
    scene.add(camera);
    scene.add(ambientLight);
}
