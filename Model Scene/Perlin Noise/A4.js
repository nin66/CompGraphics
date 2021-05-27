

//  Utils module for Group 18, Assignment 4.

class A4 {

    static Deg2Rad() {
        return Math.PI * 2.0 / 360.0;
    }

    static Rad2Deg() {
        return 1.0 / Deg2Rad();
    }

    static random(min, max) {
        return Math.random() * (max - min) + min;
    }

    static addPlane(kPoints, x, y, z) {
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

    static RGB(r, g, b) {
        const kRatio255 = 0.0039215686274509803921568627451;

        r *= kRatio255;
        g *= kRatio255;
        b *= kRatio255;

        return new THREE.Color(r, g, b);
    }

    static RGBToV(r, g, b) {
        const kRatio255 = 0.0039215686274509803921568627451;
        return new THREE.Vector3(r * kRatio255, g * kRatio255, b * kRatio255);
    }

    static Clamp(value, min, max) {
        if (value < min)
            value = min;
        else if (value > max)
            value = max;
        return value;
    }

    static Clamp01(value) {
        if (value < 0)
            return 0;
        else if (value > 1)
            return 1;
        else
            return value;
    }

    static MoveTowards(current, target, changeDelta) {
        if (Math.abs(target - current) <= changeDelta)
            return target;
        return current + Math.sign(target - current) * changeDelta;
    }

    static Magnitude(vector) {
        return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
    }

    static Normalise(value) {
        var mag = Magnitude(value);
        if (mag > kEpsilon)
            return value / mag;
        else
            return zero;
    }

    static Dot (lhs, rhs) {
        return lhs.x * rhs.x + lhs.y * rhs.y + lhs.z * rhs.z;
    }

    static Distance(a, b) {
        var diff_x = a.x - b.x;
        var diff_y = a.y - b.y;
        var diff_z = a.z - b.z;
        return Math.sqrt(diff_x * diff_x + diff_y * diff_y + diff_z * diff_z);
    }
}