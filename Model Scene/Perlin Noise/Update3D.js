

var bIntialised = false;
let modelIndex = 0;
let coralIndex = 0;
let moveIndex = 0;

let corals = [
    {'model': 'models/gltf/Coral.glb',	'type': kCoral},
    {'model': 'models/gltf/Coral1.glb', 'type': kCoral},
    {'model': 'models/gltf/Coral2.glb', 'type': kCoral},
    {'model': 'models/gltf/Coral3.glb', 'type': kCoral},
    {'model': 'models/gltf/Coral4.glb', 'type': kCoral},
    {'model': 'models/gltf/Coral5.glb', 'type': kCoral},
    {'model': 'models/gltf/Coral6.glb', 'type': kCoral}
]

let models = [
    {'model': 'models/gltf/Rocks1.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks2.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks3.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks4.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks5.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks6.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks7.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks8.glb',		'type': kRocks},
    {'model': 'models/gltf/Rocks10.glb',	'type': kRocks},
    {'model': 'models/gltf/Rocks11.glb',	'type': kRocks},
    {'model': 'models/gltf/Rocks12.glb',	'type': kRocks},
    {'model': 'models/gltf/Shells.glb',		'type': kShells},
    {'model': 'models/gltf/SeaWeed.glb',	'type': kSeaweed},
    {'model': 'models/gltf/StarFish.glb',	'type': kStarFish}
]

let movable = [ 
    {'model': 'models/gltf/Crab.glb',		'type': kCrab},
    {'model': 'models/gltf/Dolphin.glb',	'type': kDolphin},
    {'model': 'models/gltf/Eel.glb',		'type': kEel},
    {'model': 'models/gltf/Hammerhead.glb', 'type': kHammerhead},
    {'model': 'models/gltf/Lobster.glb',	'type': kLobster},
    {'model': 'models/gltf/Octopus.glb',	'type': kOctopus},
    {'model': 'models/gltf/Shark.glb',		'type': kShark},
    {'model': 'models/gltf/Squid.glb',		'type': kSquid},
    {'model': 'models/gltf/StingRay.glb',	'type': kStingray},
    {'model': 'models/gltf/Turtle.glb',		'type': kTurtle},
    {'model': 'models/gltf/Whale.glb',		'type': kWhale},
    {'model': 'models/gltf/BrownFish.glb',	'type': kFish},
    {'model': 'models/gltf/Dory.glb',		'type': kFish},
    {'model': 'models/gltf/Tuna.glb',		'type': kFish},
    {'model': 'models/gltf/Marlin.glb',		'type': kFish},
]

const upNormal = new THREE.Vector3(0, 1, 0);
const kDeepWater = A4.RGB(177, 176, 140);
const kShallowWater = A4.RGB(232, 227, 174);

var v;

//  Updates the plane's attributes.
function UpdatePlane() {
    //  Converts the positions of the vertices that make up the plane into an array.
    //  Later used for modifying the Z-Axis points with Perlin noise.
    v = Perlin_Mesh.geometry.attributes.position.array;
    const colours = [];

    for(var i = 0; i <= v.length; i += 3) {
        //  X = v[i].
        //  Y = v[i+1].
        //  Z = v[i+2].
        //  Modify the Z-Axis of this vertex to push it upwards by perlin noise and height multiplier.
        //  This modification is based on the X and Y positions of the plane in world space.
        var x = v[i] / scale;
        var y = v[i+1] / scale;
        var Perlin = Noise.PerlinNoise(x, y);

        //  Plane colours and heights according to their Perlin noise value.
        v[i+2] = Function(Perlin) * heightMultiplier;   //  This noise function returns a smoothed value
                                                        //  between -1 and 1.
                                                        //  Use Perlin Noise to generate heights and colours.
        if (Perlin < 0) {
            var colour = new THREE.Color();
            colour.lerpColors(kShallowWater, kDeepWater, Math.abs(Perlin));     //  Interpolate colour based on Perlin Noise.
            colours.push(colour.r, colour.g, colour.b);
        } else if (Perlin >= 0) {
			colours.push(kShallowWater.r, kShallowWater.g, kShallowWater.b);
        }
    }

    //  Ensures the mesh moves along with the Perlin noise offset/s.
    Perlin_Mesh.geometry.attributes.position.needsUpdate = true;
    Perlin_Mesh.geometry.computeVertexNormals();

    //  Set the colours of the triangle faces.
    PerlinGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colours), 3));

    LoadModels();
    
    var uvs = tl.load('Perlin Noise/normals.png', function() {
        Perlin_Mesh.material.normalMap = uvs;
        Perlin_Mesh.material.normalMap.wrapS = Perlin_Mesh.material.normalMap.wrapT = THREE.RepeatWrapping;
        Perlin_Mesh.material.needsUpdate = true;
    });

    bInitialised = true;
}

//  Interpolates perlin heights using Sine Ease In-Out.
function Function(f) {
    return -(Math.cos(Math.PI * f) - 1 ) / 2;
}

function LoadModels() {
    for (let i = 0; i < v.length; i+=3) {
        

        if (Math.random() < .046) {
            var ray = new THREE.Raycaster(new THREE.Vector3(v[i], v[i+1] + 5, v[i+2]), V3Down, 0, 5);
            var intersects = ray.intersectObject(Perlin_Mesh);
            if (intersects.length > 0) {
                var face = intersects[0].face;
                if (face === null) { continue; }    //  Pass if there is no terrain underneath.

                var normal = face.normal;
                if (normal !== null) {
                    if(coralIndex >= corals.length){
                        coralIndex = 0;
                    }
                    loadGLTFCoral(corals[coralIndex]['model'], v[i+1], v[i+2], v[i], normal, corals[coralIndex]['type']);
                    coralIndex++;

                    continue;
                }
            }
        }

        if (Math.random() < .023) {
            var ray = new THREE.Raycaster(new THREE.Vector3(v[i], v[i+1] + 5, v[i+2]), V3Down, 0, 5);
            var intersects = ray.intersectObject(Perlin_Mesh);
            if (intersects.length > 0) {
                var face = intersects[0].face;
                if (face === null) { continue; }    //  Pass if there is no terrain underneath.

                var normal = face.normal;
                if (normal !== null) {
                    if(modelIndex >= models.length){
                        modelIndex = 0;
                    }
                    loadGLTF(models[modelIndex]['model'], v[i+1], v[i+2], v[i], normal, models[modelIndex]['type'], false);
                    modelIndex++;

                    continue;
                }
            }
        }

        if (Math.random() < .0069) {
            if(moveIndex >= movable.length){
                moveIndex = 0;
            }
            loadGLTF(movable[moveIndex]['model'], v[i+1], A4.random(v[i+2] + 50, v[i+2] + 150), v[i], V3Zero, movable[moveIndex]['type'], true);
            moveIndex++;
        }
    }
}