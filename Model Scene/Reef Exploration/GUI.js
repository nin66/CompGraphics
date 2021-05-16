//  
//  EXPERIMENTAL
//  


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

    var params = {
        TimeOfDay: directionalLight.rotation.z,
        Flashlight : flashlight.visible
    }

    gui.add(params, 'TimeOfDay', 0, 12, .1).onChange(function(rot) {
        // directionalLight.color = Utils.RGB(255 - rot, 255 - rot, 255 - rot);
        // ambientLight.intensity = (rot / 255) * 2;
        directionalLight.position.x = 50 * Math.cos(rot);
        directionalLight.position.y = 50 * Math.sin(rot);
        PerlinGeometry.computeVertexNormals();
    });

    gui.add(params, 'Flashlight').onChange(function(bOn){
        flashlight.visible = bOn;
    });

}

buildGUI();