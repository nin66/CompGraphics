

var width, height, scale;
var resolution;
var heightMultiplier;

var PerlinGeometry, Perlin_Material, Perlin_Mesh;

Start();

//  Called before the first frame.
function Start(){

    //  Plane settings.
    width = 2048;
    height = 2048;
    resolution = 256;
    
    //  Perlin noise settings. [PLANE]
    scale = 250;
    heightMultiplier = 105;
}