

//  Creates a plane.
function MakePlane(){
    PerlinGeometry = new THREE.PlaneBufferGeometry(width, height, resolution, resolution);
    //var geometry_material = new THREE.MeshBasicMaterial();
    Perlin_Material = new THREE.MeshPhongMaterial();
    Perlin_Material.flatShading = false;
    Perlin_Material.vertexColors = true;
    Perlin_Material.color = new THREE.Color(1, 1, 1);
    Perlin_Material.wireframe = false;
    Perlin_Mesh = new THREE.Mesh(PerlinGeometry, Perlin_Material);
    //  Flip the plane so that it's Z-Axis is facing in the world's positive Y-Axis.
    rot = 270 * ((Math.PI * 2) / 360); //  Flip using Rad2Deg.
    Perlin_Mesh.rotation.x = rot;
    Perlin_Mesh.rotation.z = rot;
    
    Perlin_Mesh.receiveShadow = true;
    
    PerlinGeometry.computeVertexNormals();
    scene.add(Perlin_Mesh);
}