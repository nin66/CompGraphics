

//  
//  EXPERIMENTAL
//  

function buildGUI() {
    gui = new dat.GUI();

    var params = {
        TimeOfDay_WIP: directionalLight.rotation.x
    }

    gui.add(params, 'TimeOfDay_WIP', 0, 255, .1).onChange(function(rot) {
        directionalLight.color = Utils.RGB(255 - rot, 255 - rot, 255 - rot);
        ambientLight.intensity = (rot / 255) * 2;
    });
}

buildGUI();