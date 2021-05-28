

//  Utils module for Group 18, Assignment 4.

class A4 {

    static kEpsilon = 0.00001;

    static Deg2Rad = Math.PI * 2.0 / 360.0;

    static random(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * @param { Number } x1 X-Axis Lower Limit
     * @param { Number } x2 X-Axis Upper Limit
     * @param { Number } y1 Y-Axis Lower Limit
     * @param { Number } y2 Y-Axis Upper Limit
     * @param { Number } z1 Z-Axis Lower Limit
     * @param { Number } z2 Z-Axis Upper Limit
     * @returns A random Vector3 point between x1-x2, y1-y2, z1-z2
     */
    static random3(x1, x2, y1, y2, z1, z2) {
        var x = A4.random(x1, x2);
        var y = A4.random(y1, y2);
        var z = A4.random(z1, z2);

        return new THREE.Vector3(x, y, z);
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
            return new THREE.Vector3(0, 0, 0);
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