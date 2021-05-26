

//  Utils module for Group 18, Assignment 4.

function A4(){

    this.random = function(min, max){
        return Math.random() * (max - min) + min;
    }

    this.addPlane = function(kPoints, x, y, z){
        const plane_geo = new THREE.BufferGeometry();
        plane_geo.setAttribute('position', new THREE.BufferAttribute(kPoints, 3));
        const plane_material = new THREE.MeshBasicMaterial({color : 0x00ff00});
        //const plane_material = new THREE.MeshPhongMaterial({color : 0x33FF33, specular : 0x773300, shininess : 3});
        plane_material.wireframe = true;
        const plane_mesh = new THREE.Mesh(plane_geo, plane_material);
        plane_mesh.position.set(x, y, z);
        scene.add(plane_mesh);

        return plane_geo;
    }

    this.RGB = function(r, g, b) {
        const kRatio255 = 0.0039215686274509803921568627451;

        r *= kRatio255;
        g *= kRatio255;
        b *= kRatio255;

        return new THREE.Color(r, g, b);
    }

    this.RGBToV = function(r, g, b) {
        const kRatio255 = 0.0039215686274509803921568627451;
        return new THREE.Vector3(r * kRatio255, g * kRatio255, b * kRatio255);
    }

    this.Debug = function(e) {
        console.log(e);
    }

    this.Interpolate = function() {
        return .125;
    }
}