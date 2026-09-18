import{b as e}from"./mesh.pure-ECA1_wkB.js";import"./texture-BtN_L_oK.js";import{t}from"./constants-DfNKfgSv.js";import{n}from"./lightConstants---VMShX2.js";import"./meshBuilder-D1eoIY6D.js";import{t as r}from"./computeShader.pure-DOY-ukNZ.js";import"./engine.computeShader-BOOZk-JO.js";function i(e,t=17391){let n=new Float32Array(e),r=t>>>0,i=()=>(r=Math.imul(r,1664525)+1013904223>>>0,(r+.5)/4294967296);for(let t=0;t<e;t+=2){let r=Math.sqrt(-2*Math.log(i())),a=2*Math.PI*i();n[t]=r*Math.cos(a),t+1<e&&(n[t+1]=r*Math.sin(a))}return n}function a(n,r,i,a,o){let s=new e(null,i,a,o,r,!1,!1,t.TEXTURE_NEAREST_SAMPLINGMODE,t.TEXTURETYPE_FLOAT,t.TEXTURE_CREATIONFLAG_STORAGE);return s.name=n,s.wrapU=t.TEXTURE_WRAP_ADDRESSMODE,s.wrapV=t.TEXTURE_WRAP_ADDRESSMODE,s}function o(n,r){let a=i(n*n*2);return new e(a,n,n,t.TEXTUREFORMAT_RG,r,!1,!1,t.TEXTURE_NEAREST_SAMPLINGMODE,t.TEXTURETYPE_FLOAT)}var s=`const PI: f32 = 3.1415926;\r
\r
@group(0) @binding(0) var H0: texture_storage_2d<rgba32float, write>;\r
@group(0) @binding(1) var Noise: texture_2d<f32>;\r
\r
struct Params {\r
    textureSize: u32,\r
    tileSize: f32,\r
    windTheta: f32,\r
    windSpeed: f32,\r
    smallWaveLengthCutoff: f32,\r
};\r
\r
@group(0) @binding(2) var<uniform> params: Params;\r
\r
fn phillipsSpectrum2D(k: vec2<f32>) -> f32 {\r
    if(length(k) < 0.0001) {\r
        return 0.0;\r
    }\r
\r
    // Signed unit Gaussian noise needs an explicit sea-state amplitude.
    let A: f32 = 0.12;
    let windDir = vec2<f32>(cos(params.windTheta), sin(params.windTheta));\r
    let g: f32 = 9.81;\r
    let L: f32 = params.windSpeed * params.windSpeed / g;\r
    let k2: f32 = dot(k, k);\r
    let kL2: f32 = k2 * L * L;\r
    let k4: f32 = k2 * k2;\r
    var kw2: f32 = dot(normalize(k), normalize(windDir));\r
    kw2 *= kw2;\r
\r
    let l: f32 = params.smallWaveLengthCutoff;\r
    let cutoff: f32 = exp(-k2 * l * l);\r
\r
    return A * exp(-1.0 / kL2) * kw2 * cutoff / k4;\r
}\r
\r
@compute @workgroup_size(8,8,1)\r
fn computeSpectrum(@builtin(global_invocation_id) id: vec3<u32>) {\r
	let deltaK = 2.0 * PI / params.tileSize;\r
	let nx = f32(id.x) - f32(params.textureSize) / 2.0;\r
	let nz = f32(id.y) - f32(params.textureSize) / 2.0;\r
	let k = vec2<f32>(nx, nz) * deltaK;\r
\r
    let noise_k = textureLoad(Noise, vec2<i32>(id.xy), 0).xy;\r
    let h0_k = noise_k * sqrt(phillipsSpectrum2D(k) / 2.0);\r
\r
    let noise_minus_k = textureLoad(Noise, vec2<i32>((vec2<u32>(params.textureSize) - id.xy) % vec2<u32>(params.textureSize)), 0).xy;
    let h0_minus_k = noise_minus_k * sqrt(phillipsSpectrum2D(-k) / 2.0);\r
    let h0_minus_k_conj = vec2<f32>(h0_minus_k.x, -h0_minus_k.y);\r
\r
    textureStore(H0, vec2<i32>(id.xy), vec4<f32>(h0_k, h0_minus_k_conj));\r
}
`,c=class{computeShader;gaussianNoise;h0;uniformBuffer;textureSize;tileSize;settings={windTheta:0,windSpeed:31,smallWaveLengthCutOff:.01};constructor(e,i,c){this.textureSize=e,this.tileSize=i,this.computeShader=new r(`computeSpectrum`,c,{computeSource:s},{bindingsMapping:{H0:{group:0,binding:0},Noise:{group:0,binding:1},params:{group:0,binding:2}},entryPoint:`computeSpectrum`}),this.gaussianNoise=o(e,c),this.h0=a(`h0`,c,e,e,t.TEXTUREFORMAT_RGBA),this.uniformBuffer=new n(c),this.uniformBuffer.addUniform(`textureSize`,1),this.uniformBuffer.addUniform(`tileSize`,1),this.uniformBuffer.addUniform(`windTheta`,1),this.uniformBuffer.addUniform(`windSpeed`,1),this.uniformBuffer.addUniform(`smallWaveLengthCutOff`,1),this.computeShader.setStorageTexture(`H0`,this.h0),this.computeShader.setTexture(`Noise`,this.gaussianNoise,!1),this.computeShader.setUniformBuffer(`params`,this.uniformBuffer),this.uniformBuffer.updateInt(`textureSize`,this.textureSize),this.uniformBuffer.updateFloat(`tileSize`,this.tileSize),this.uniformBuffer.updateFloat(`windTheta`,this.settings.windTheta),this.uniformBuffer.updateFloat(`windSpeed`,this.settings.windSpeed),this.uniformBuffer.updateFloat(`smallWaveLengthCutOff`,this.settings.smallWaveLengthCutOff),this.uniformBuffer.update(),this.computeShader.dispatchWhenReady(Math.ceil(this.textureSize/8),Math.ceil(this.textureSize/8),1)}dispose(){this.h0.dispose(),this.gaussianNoise.dispose(),this.uniformBuffer.dispose()}updateSettingsGPU(){this.uniformBuffer.update()}},l=`const PI: f32 = 3.1415926;\r
\r
@group(0) @binding(0) var H0: texture_2d<f32>;\r
@group(0) @binding(1) var HT: texture_storage_2d<rg32float, write>;\r
@group(0) @binding(2) var DHT: texture_storage_2d<rg32float, write>;\r
@group(0) @binding(3) var Displacement: texture_storage_2d<rg32float, write>;\r
\r
struct Params {\r
    textureSize: u32,\r
    tileSize: f32,\r
    elapsedSeconds: f32,\r
};\r
\r
@group(0) @binding(4) var<uniform> params: Params;\r
\r
fn omega(k: vec2<f32>) -> f32 {\r
    return sqrt(length(k) * 9.81);\r
}\r
\r
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {\r
	return vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r
}\r
\r
@compute @workgroup_size(8,8,1)\r
fn computeSpectrum(@builtin(global_invocation_id) id: vec3<u32>) {\r
    let iid = vec3<i32>(id);\r
\r
    let deltaK = 2.0 * PI / params.tileSize;\r
    let n = f32(id.x) - f32(params.textureSize) / 2.0;\r
    let m = f32(id.y) - f32(params.textureSize) / 2.0;\r
    let k = vec2<f32>(n, m) * deltaK;\r
\r
	let theta = params.elapsedSeconds * omega(k);\r
	let exponent = vec2<f32>(cos(theta), sin(theta));\r
    let h0: vec4<f32> = textureLoad(H0, iid.xy, 0);\r
\r
	let h = complexMult(h0.xy, exponent) + complexMult(h0.zw, vec2<f32>(exponent.x, -exponent.y));\r
\r
	let ih = vec2<f32>(-h.y, h.x);\r
\r
	let ikh = complexMult(k, ih);\r
\r
    // in the paper there is a minus sign here, i don't know why I need to remove it\r
	let displacement = ikh / (length(k) + 0.001);\r
\r
    textureStore(HT, iid.xy, vec4<f32>(h, vec2(0.0)));\r
    textureStore(DHT, iid.xy, vec4<f32>(ikh, vec2(0.0)));\r
    textureStore(Displacement, iid.xy, vec4<f32>(displacement, vec2(0.0)));\r
}`,u=class{initialSpectrum;computeShader;ht;dht;displacement;settings;constructor(e,i){this.initialSpectrum=e,this.computeShader=new r(`computeSpectrum`,i,{computeSource:l},{bindingsMapping:{H0:{group:0,binding:0},HT:{group:0,binding:1},DHT:{group:0,binding:2},Displacement:{group:0,binding:3},params:{group:0,binding:4}},entryPoint:`computeSpectrum`}),this.ht=a(`ht`,i,e.textureSize,e.textureSize,t.TEXTUREFORMAT_RG),this.dht=a(`dht`,i,e.textureSize,e.textureSize,t.TEXTUREFORMAT_RG),this.displacement=a(`displacement`,i,e.textureSize,e.textureSize,t.TEXTUREFORMAT_RG),this.settings=new n(i),this.settings.addUniform(`textureSize`,1),this.settings.addUniform(`tileSize`,1),this.settings.addUniform(`elapsedSeconds`,1),this.computeShader.setTexture(`H0`,this.initialSpectrum.h0,!1),this.computeShader.setStorageTexture(`HT`,this.ht),this.computeShader.setStorageTexture(`DHT`,this.dht),this.computeShader.setStorageTexture(`Displacement`,this.displacement),this.computeShader.setUniformBuffer(`params`,this.settings)}generate(e){this.settings.updateInt(`textureSize`,this.initialSpectrum.textureSize),this.settings.updateFloat(`tileSize`,this.initialSpectrum.tileSize),this.settings.updateFloat(`elapsedSeconds`,e),this.settings.update(),this.computeShader.dispatch(Math.ceil(this.initialSpectrum.textureSize/8),Math.ceil(this.initialSpectrum.textureSize/8),1)}dispose(){this.ht.dispose(),this.dht.dispose(),this.displacement.dispose(),this.settings.dispose()}},d=`const PI: f32 = 3.1415926;\r
\r
@group(0) @binding(0) var PrecomputeBuffer: texture_storage_2d<rgba32float, write>;\r
\r
struct Params {\r
    step: i32,\r
    textureSize: i32,\r
};\r
\r
@group(0) @binding(1) var<uniform> params: Params;\r
\r
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32>\r
{\r
	return vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r
}\r
\r
fn complexExp(a: vec2<f32>) -> vec2<f32>\r
{\r
	return vec2<f32>(cos(a.y), sin(a.y)) * exp(a.x);\r
}\r
\r
@compute @workgroup_size(1,8,1)\r
fn precomputeTwiddleFactorsAndInputIndices(@builtin(global_invocation_id) id: vec3<u32>)\r
{\r
    let iid = vec3<i32>(id);\r
	let b = params.textureSize >> (id.x + 1u);\r
	let mult = 2.0 * PI * vec2<f32>(0.0, -1.0) / f32(params.textureSize);\r
	let i = (2 * b * (iid.y / b) + (iid.y % b)) % params.textureSize;\r
	let twiddle = complexExp(mult * vec2<f32>(f32((iid.y / b) * b)));\r
\r
    textureStore(PrecomputeBuffer, iid.xy, vec4<f32>(twiddle.x, twiddle.y, f32(i), f32(i + b)));\r
	textureStore(PrecomputeBuffer, vec2<i32>(iid.x, iid.y + params.textureSize / 2), vec4<f32>(-twiddle.x, -twiddle.y, f32(i), f32(i + b)));\r
}`,f=`struct Params {\r
    step: i32,\r
    textureSize: i32,\r
};\r
\r
@group(0) @binding(0) var<uniform> params: Params;\r
\r
@group(0) @binding(1) var PrecomputedData: texture_2d<f32>;\r
\r
@group(0) @binding(2) var InputBuffer: texture_2d<f32>;\r
@group(0) @binding(3) var OutputBuffer: texture_storage_2d<rg32float, write>;\r
\r
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {\r
	return vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r
}\r
\r
@compute @workgroup_size(8,8,1)\r
fn horizontalStepInverseFFT(@builtin(global_invocation_id) id: vec3<u32>) {\r
    let iid = vec3<i32>(id);\r
    let data = textureLoad(PrecomputedData, vec2<i32>(params.step, iid.x), 0);\r
	let inputsIndices = vec2<i32>(data.ba);\r
\r
    let input0 = textureLoad(InputBuffer, vec2<i32>(inputsIndices.x, iid.y), 0);\r
    let input1 = textureLoad(InputBuffer, vec2<i32>(inputsIndices.y, iid.y), 0);\r
\r
    textureStore(OutputBuffer, iid.xy, vec4<f32>(\r
        input0.xy + complexMult(vec2<f32>(data.r, -data.g), input1.xy), 0.0, 0.0\r
    ));\r
}`,p=`struct Params {\r
    step: i32,\r
    textureSize: i32,\r
};\r
\r
@group(0) @binding(0) var<uniform> params: Params;\r
\r
@group(0) @binding(1) var PrecomputedData: texture_2d<f32>;\r
\r
@group(0) @binding(2) var InputBuffer: texture_2d<f32>;\r
@group(0) @binding(3) var OutputBuffer: texture_storage_2d<rg32float, write>;\r
\r
fn complexMult(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {\r
	return vec2<f32>(a.r * b.r - a.g * b.g, a.r * b.g + a.g * b.r);\r
}\r
\r
@compute @workgroup_size(8,8,1)\r
fn verticalStepInverseFFT(@builtin(global_invocation_id) id: vec3<u32>) {\r
    let iid = vec3<i32>(id);\r
    let data = textureLoad(PrecomputedData, vec2<i32>(params.step, iid.y), 0);\r
	let inputsIndices = vec2<i32>(data.ba);\r
\r
    let input0 = textureLoad(InputBuffer, vec2<i32>(iid.x, inputsIndices.x), 0);\r
    let input1 = textureLoad(InputBuffer, vec2<i32>(iid.x, inputsIndices.y), 0);\r
\r
    textureStore(OutputBuffer, iid.xy, vec4<f32>(\r
        input0.xy + complexMult(vec2<f32>(data.r, -data.g), input1.xy), 0.0, 0.0\r
    ));\r
}`,m=`@group(0) @binding(0) var InputBuffer: texture_2d<f32>;\r
@group(0) @binding(1) var OutputBuffer: texture_storage_2d<rg32float, write>;\r
\r
@compute @workgroup_size(8,8,1)\r
fn permute(@builtin(global_invocation_id) id: vec3<u32>) {\r
    let iid = vec3<i32>(id);\r
    let input = textureLoad(InputBuffer, iid.xy, 0);\r
\r
    textureStore(OutputBuffer, iid.xy, input * (1.0 - 2.0 * f32((iid.x + iid.y) % 2)));\r
}`,h=`@group(0) @binding(0) var dest: texture_storage_2d<rg32float, write>;\r
@group(0) @binding(1) var src: texture_2d<f32>;\r
\r
struct Params {\r
    width: u32,\r
    height: u32,\r
};\r
@group(0) @binding(2) var<uniform> params: Params;\r
\r
@compute @workgroup_size(8, 8, 1)\r
fn main(@builtin(global_invocation_id) global_id: vec3<u32>) {\r
    if (global_id.x >= params.width || global_id.y >= params.height) {\r
        return;\r
    }\r
    let pixel: vec4<f32> = textureLoad(src, vec2<i32>(global_id.xy), 0);\r
    textureStore(dest, vec2<i32>(global_id.xy), pixel);\r
}`,g=class{computeShader;params;constructor(e){this.computeShader=new r(`copyTextureCompute`,e,{computeSource:h},{bindingsMapping:{dest:{group:0,binding:0},src:{group:0,binding:1},params:{group:0,binding:2}}}),this.params=new n(e),this.params.addUniform(`width`,1),this.params.addUniform(`height`,1),this.computeShader.setUniformBuffer(`params`,this.params)}dispose(){this.params.dispose()}makeCopy(e,t){this.computeShader.setTexture(`src`,e,!1),this.computeShader.setStorageTexture(`dest`,t);let{width:n,height:r}=e.getSize();this.params.updateInt(`width`,n),this.params.updateInt(`height`,r),this.params.update(),this.computeShader.dispatch(Math.ceil(n/8),Math.ceil(r/8),1)}},_=class{engine;textureSize;precompute;twiddleTable;settings;horizontalStepIFFT;verticalStepIFFT;permutation;copyComputeShader;constructor(e,i){this.engine=e,this.textureSize=i,this.precompute=new r(`computeTwiddleFactors`,this.engine,{computeSource:d},{bindingsMapping:{PrecomputeBuffer:{group:0,binding:0},params:{group:0,binding:1}},entryPoint:`precomputeTwiddleFactorsAndInputIndices`});let o=Math.log2(i)|0;this.twiddleTable=a(`precomputeTwiddle`,this.engine,o,this.textureSize,t.TEXTUREFORMAT_RGBA),this.settings=new n(this.engine),this.settings.addUniform(`step`,1),this.settings.addUniform(`textureSize`,1),this.precompute.setStorageTexture(`PrecomputeBuffer`,this.twiddleTable),this.precompute.setUniformBuffer(`params`,this.settings),this.settings.updateInt(`textureSize`,this.textureSize),this.settings.update(),this.precompute.dispatchWhenReady(o,this.textureSize/2/8,1),this.horizontalStepIFFT=new r(`horizontalStepIFFT`,this.engine,{computeSource:f},{bindingsMapping:{params:{group:0,binding:0},PrecomputedData:{group:0,binding:1},InputBuffer:{group:0,binding:2},OutputBuffer:{group:0,binding:3}},entryPoint:`horizontalStepInverseFFT`}),this.horizontalStepIFFT.setUniformBuffer(`params`,this.settings),this.horizontalStepIFFT.setTexture(`PrecomputedData`,this.twiddleTable,!1),this.verticalStepIFFT=new r(`verticalStepIFFT`,this.engine,{computeSource:p},{bindingsMapping:{params:{group:0,binding:0},PrecomputedData:{group:0,binding:1},InputBuffer:{group:0,binding:2},OutputBuffer:{group:0,binding:3}},entryPoint:`verticalStepInverseFFT`}),this.verticalStepIFFT.setUniformBuffer(`params`,this.settings),this.verticalStepIFFT.setTexture(`PrecomputedData`,this.twiddleTable,!1),this.permutation=new r(`permute`,this.engine,{computeSource:m},{bindingsMapping:{InputBuffer:{group:0,binding:0},OutputBuffer:{group:0,binding:1}},entryPoint:`permute`}),this.copyComputeShader=new g(this.engine)}applyToTexture(e,t,n=!0){let r=Math.log2(this.textureSize)|0,i=!1;for(let n=0;n<r;++n)i=!i,this.settings.updateInt(`step`,n),this.settings.update(),this.horizontalStepIFFT.setTexture(`InputBuffer`,i?e:t,!1),this.horizontalStepIFFT.setStorageTexture(`OutputBuffer`,i?t:e),this.horizontalStepIFFT.dispatch(Math.ceil(this.textureSize/8),Math.ceil(this.textureSize/8),1);for(let n=0;n<r;++n)i=!i,this.settings.updateInt(`step`,n),this.settings.update(),this.verticalStepIFFT.setTexture(`InputBuffer`,i?e:t,!1),this.verticalStepIFFT.setStorageTexture(`OutputBuffer`,i?t:e),this.verticalStepIFFT.dispatch(Math.ceil(this.textureSize/8),Math.ceil(this.textureSize/8),1);i&&this.copyComputeShader.makeCopy(t,e),this.permutation.setTexture(`InputBuffer`,e,!1),this.permutation.setStorageTexture(`OutputBuffer`,t),this.permutation.dispatch(Math.ceil(this.textureSize/8),Math.ceil(this.textureSize/8),1),n&&this.copyComputeShader.makeCopy(t,e)}dispose(){this.copyComputeShader.dispose(),this.twiddleTable.dispose(),this.settings.dispose()}},v=`// Reuse one FFT at non-commensurate spatial scales. No extra compute dispatches.
vec2 waveRotate(vec2 p, float angle){float c=cos(angle),s=sin(angle);return vec2(c*p.x-s*p.y,s*p.x+c*p.y);}
vec2 waveUV1(vec2 p){return waveRotate(p,.53)*.431+vec2(.173,.719);}
vec2 waveUV2(vec2 p){return waveRotate(p,-.37)*1.713+vec2(.637,.291);}
vec2 waveGradient(vec2 p){
 return texture2D(gradientMap,p).rg*.72
  +waveRotate(texture2D(gradientMap,waveUV1(p)).rg,-.53)*(.38*.431)
  +waveRotate(texture2D(gradientMap,waveUV2(p)).rg,.37)*(.20*1.713);
}
`;export{a,c as i,_ as n,u as r,v as t};