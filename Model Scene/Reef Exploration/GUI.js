

//  
//  EXPERIMENTAL
//  

function buildGUI() {
    gui = new dat.GUI();

    var params = {
        TimeOfDay_WIP: directionalLight.rotation.z
    }

    gui.add(params, 'TimeOfDay_WIP', 0, 4, .1).onChange(function(rot) {
        // directionalLight.color = Utils.RGB(255 - rot, 255 - rot, 255 - rot);
        // ambientLight.intensity = (rot / 255) * 2;
        directionalLight.position.x = 50 * Math.cos(rot);
        directionalLight.position.y = 50 * Math.sin(rot);
        PerlinGeometry.computeVertexNormals();
    });
}

buildGUI();