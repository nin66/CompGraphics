

const upNormal = new THREE.Vector3(0, 1, 0);
let modelIndex = 0;
let models = [
    'models/gltf/Rocks.glb',
    'models/gltf/Coral.glb',
    'models/gltf/Coral1.glb',
    'models/gltf/Coral2.glb',
    'models/gltf/Coral3.glb',
    'models/gltf/Coral4.glb',
    'models/gltf/Coral5.glb',
    'models/gltf/Coral6.glb',
    'models/gltf/Shells.glb',
    'models/gltf/Rocks1.glb',
    'models/gltf/Rocks2.glb',
    'models/gltf/Rocks3.glb',
    'models/gltf/Rocks4.glb',
    'models/gltf/Rocks5.glb',
    'models/gltf/Rocks6.glb',
    'models/gltf/Rocks7.glb',
    'models/gltf/Rocks8.glb',
    'models/gltf/Rocks9.glb',
    'models/gltf/Rocks10.glb',
    'models/gltf/Rocks11.glb',
    'models/gltf/Rocks12.glb'
]

//  Updates the plane's attributes.
function UpdatePlane() {
    //  Converts the positions of the vertices that make up the plane into an array.
    //  Later used for modifying the Z-Axis points with Perlin noise.
    var v = Perlin_Mesh.geometry.attributes.position.array;
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
            var startColour = Utils.RGB(177, 176, 140);
            var targetColour = Utils.RGB(232, 227, 174);
            var colour = new THREE.Color();
            colour.lerpColors(targetColour, startColour, Math.abs(Perlin));     //  Interpolate colour based on Perlin Noise.
            colours.push(colour.r, colour.g, colour.b);
        } else if (Perlin >= 0) {
            var startColour = Utils.RGB(232, 227, 174);
            var targetColour = Utils.RGB(232, 227, 174);
            var colour = new THREE.Color();
            colour.lerpColors(startColour, targetColour, Perlin);     //  Interpolate colour based on Perlin Noise.
            colours.push(colour.r, colour.g, colour.b);

            if (Math.random() < .0023) {
                var ray = new THREE.Raycaster(new THREE.Vector3(v[i], v[i+1] + 5, v[i+2]), new THREE.Vector3(0,-1,0), 0, 10);
                var intersects = ray.intersectObjects(scene.children);
                if (intersects.length > 0) {
                    var face = intersects[0].face;
                    if (face === null) { continue; }    //  Pass if there is no terrain underneath.

                    var normal = face.normal;
                    if (normal !== null) {
                        if(modelIndex >= models.length){
                            modelIndex = 0;
                        }
                        loadGLTF(models[modelIndex], v[i+1], v[i+2], v[i], normal);
                        console.log(modelIndex)
                        //modelIndex++;
                    }
                }
            }
        }
    }
    
    //  Ensures the mesh moves along with the Perlin noise offset/s.
    Perlin_Mesh.geometry.attributes.position.needsUpdate = true;
    Perlin_Mesh.geometry.computeVertexNormals();

    //  Set the colours of the triangle faces.
    PerlinGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colours), 3));
}

//  Interpolates perlin heights using Sine Ease In-Out.
function Function(f) {
    return f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
}
