

//Class property that returns the colour as a CSS hex color string 
//for dat.GUI to process
class ColorGUIHelper {
    constructor(object, prop) {
        this.object = object;
        this.prop = prop;
    }
    get value() {
        return `#${this.object[this.prop].getHexString()}`;
    }
    set value(hexString) {
        this.object[this.prop].set(hexString);
    }
}

// This helper class passes the Fog class to dat.gui so when it 
//manipulates the 'near' or 'far' properties, these values do not overlap.
class FogGUIHelper {
    constructor(fog, backgroundColor) {
        this.fog = fog;
        this.backgroundColor = backgroundColor;
    }
    get near() {
        return this.fog.near;
    }
    set near(v) {
        this.fog.near = v;
        this.fog.far = Math.max(this.fog.far, v);
    }
    get far() {
        return this.fog.far;
    }
    set far(v) {
        this.fog.far = v;
        this.fog.near = Math.min(this.fog.near, v);
    }
    get color() {
        return `#${this.fog.color.getHexString()}`;
    }
    set color(hexString) {
        this.fog.color.set(hexString);
        this.backgroundColor.set(hexString);
    }
}


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