

/*
    Handles the visual-distortion effect whilst underwater.
*/

var composer;
var FX_TR, FX_BR, FX_TL, FX_BL;
var effectMultiplier = 1;
var effectSpeed = 1;

//  Shader Effect Handling.
composer = new THREE.EffectComposer(renderer);
composer.addPass( new THREE.RenderPass(scene, camera));

FX_TR = new THREE.ShaderPass(THREE.VergilWaterShader);
FX_BR = new THREE.ShaderPass(THREE.VergilWaterShader);
FX_TL = new THREE.ShaderPass(THREE.VergilWaterShader);
FX_BL = new THREE.ShaderPass(THREE.VergilWaterShader);

//  'centerX' = distortion on the X-Axis.
//  'centerY' = distortion on the Y-Axis.

//  Top-Right distortion.
FX_TR.uniforms['centerX'].value = .375 * effectMultiplier;
FX_TR.uniforms['centerY'].value = 1 * effectMultiplier;

//  Bottom-Right distortion.
FX_BR.uniforms['centerX'].value = 1 * effectMultiplier;
FX_BR.uniforms['centerY'].value = -.375 * effectMultiplier;

//  Top-Left distortion.
FX_TL.uniforms['centerX'].value = -.375 * effectMultiplier;
FX_TL.uniforms['centerY'].value = 2 * effectMultiplier;

//  Bottom-Left distortion.
FX_BL.uniforms['centerX'].value = -1 * effectMultiplier;
FX_BL.uniforms['centerY'].value = -.75 * effectMultiplier;

FX_BL.renderToScreen = true;

composer.addPass(FX_TR);
composer.addPass(FX_BR);
composer.addPass(FX_TL);
composer.addPass(FX_BL);

function Tick(){
    requestAnimationFrame(Tick);

    //  Speed of the distortion.
    // FX_TR.uniforms['time'].value += Math.random() * effectSpeed;
    // FX_BR.uniforms['time'].value += Math.random() * effectSpeed;
    // FX_TL.uniforms['time'].value += Math.random() * effectSpeed;
    // FX_BL.uniforms['time'].value += Math.random() * effectSpeed;

    //  Render Effects
    composer.render();
};

function setVolume(id, vol){
    var myAudio = document.getElementById(id);
    myAudio.volume = vol;
}

Tick();

InitialiseGeometry();
