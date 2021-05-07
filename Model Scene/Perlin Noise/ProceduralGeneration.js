

var Utils;

var width, height, scale;
var resolution;
var heightMultiplier;

var offsetX, offsetY;
var offsetDeltaX, offsetDeltaY;

var PerlinGeometry, Perlin_Material, Perlin_Mesh;
var bDrawColours = true;

var sea, sea_material, sea_mesh;

var wavesSpeedX = 0, wavesSpeedY = 0;
var waveHeight;

var treeMxN, currentTrees;
var allTrees = [];

Start();

//  Called before the first frame.
function Start(){

    Utils = new A4();

    //  Plane settings.
    width = 2048;
    height = 2048;
    resolution = 500;
    
    //  Perlin noise settings. [PLANE]
    scale = 250;
    heightMultiplier = 105;

    offsetDeltaX = .025;
    offsetDeltaY = .025;
    
    //const points = [];

    //  Maximum number of Trees.
    treeMxN = 50;
    currentTrees = 0;
    
    //OnGUI();
}