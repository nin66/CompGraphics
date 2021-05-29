function buildGUI() {
    gui = new dat.GUI();

    //  Should probably want to put these in different categories so it looks prettier.
    var params = {
        DaySpeed : fTimeOfDaySpeed,
        Flashlight : flashlight.visible,
        CameraSpeed : fVMovementSpeed
    }

    gui.add(params, 'DaySpeed', .01, 1, .001).onChange(function(fDS) {
        fTimeOfDaySpeed = fDS;
    });

    gui.add(params, 'Flashlight').onChange(function(bOn) {
        flashlight.visible = bOn;
    });

    gui.add(params, 'CameraSpeed', 1, 10, .5).onChange(function(fV) {
        fVMovementSpeed = fV;
    });

}

buildGUI();