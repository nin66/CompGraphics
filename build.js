function InitialiseGeometry() {
    var box_geometry = new THREE.BoxGeometry(5, 5, 5);
    var cubeMaterial = new THREE.MeshPhongMaterial();

    var cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = -50;
    cube.position.y = 50;
    cube.position.z = 100;
    scene.add(cube);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = -45;
    cube.position.y = 55;
    cube.position.z = 120;
    scene.add(cube);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = -70;
    cube.position.y = 40;
    cube.position.z = 100;
    scene.add(cube);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = -30;
    cube.position.y = 30;
    cube.position.z = 80;
    scene.add(cube);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = -50;
    cube.position.y = 80;
    cube.position.z = 130;
    scene.add(cube);
    camera.lookAt(cube.position);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = -100;
    cube.position.y = -100;
    cube.position.z = 180;
    scene.add(cube);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = -70;
    cube.position.y = 100;
    cube.position.z = 100;
    scene.add(cube);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = 100;
    cube.position.y = 30;
    cube.position.z = 80;
    scene.add(cube);

    cube = new THREE.Mesh(box_geometry, cubeMaterial);
    cube.position.x = 120;
    cube.position.y = 70;
    cube.position.z = 130;
    scene.add(cube);

    var box = new THREE.BoxGeometry(1, 1, 1);

    //  Create a circle with cubes.
    var resolution = 256;
    var deltaTheta = (2 * Math.PI) / resolution;
    var theta = 0;
    for (let radius = 1; radius < 50; radius += 5) {
        for (let i = 0; i < resolution; ++i) {
            var c = new THREE.Mesh(box, cubeMaterial);

            c.position.x = radius * Math.cos(theta);
            c.position.y = radius * Math.sin(theta);
            c.position.z = 100;

            theta += deltaTheta;

            c.name = 'clickable';

            box.computeBoundingBox();
            //box.computeVertexNormals();

            scene.add(c);
        }
    }
}
