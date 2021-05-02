

//  Updates the plane's attributes.
function UpdatePlane() {
    //  Converts the positions of the vertices that make up the plane into an array.
    //  Later used for modifying the Z-Axis points with Perlin noise.
    var v = Perlin_Mesh.geometry.attributes.position.array;

    const colours = [];

    for(var i = 0; i <= v.length; i += 3){
        //  X = v[i].
        //  Y = v[i+1].
        //  Z = v[i+2].
        //  Modify the Z-Axis of this vertex to push it upwards by perlin noise and height multiplier.
        //  This modification is based on the X and Y positions of the plane in world space.
        var x = v[i] / scale + offsetX;
        var y = v[i+1] / scale + offsetY;
        var Perlin = Noise.PerlinNoise(x, y);

        //  Plane colours and heights according to their Perlin noise value.
        v[i+2] = Function(Perlin) * heightMultiplier;   //  This noise function returns a smoothed value
                                                        //  between -1 and 1.
                                                        //  Use Perlin Noise to generate heights and colours.
        if (Perlin < 0) {
            var startColour = Utils.RGB(0, 0, 256);
            var targetColour = Utils.RGB(255, 235, 98);
            var colour = new THREE.Color();
            colour.lerpColors(targetColour, startColour, Math.abs(Perlin));     //  Interpolate colour based on Perlin Noise.
            colours.push(colour.r, colour.g, colour.b);
        } else if (Perlin >= 0) {
            var startColour = Utils.RGB(255, 235, 98);
            var targetColour = Utils.RGB(255, 254, 233);
            var colour = new THREE.Color();
            colour.lerpColors(startColour, targetColour, Perlin);     //  Interpolate colour based on Perlin Noise.
            colours.push(colour.r, colour.g, colour.b);
        }
    }

    //  Ensures the mesh moves along with the Perlin noise offset/s.
    Perlin_Mesh.geometry.attributes.position.needsUpdate = true;
    Perlin_Mesh.geometry.computeVertexNormals();

    //  Set the colours of the triangle faces.
    if (bDrawColours)
        PerlinGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colours), 3));
}

//  Interpolates perlin heights using Sine Ease In-Out.
function Function(f) {
    return f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
}