import"./modulepreload-polyfill-P2Xu9kJm.js";import{a as e}from"./abstractEngine.pure-oEE0vhxs.js";import{y as t}from"./mesh.pure-ECA1_wkB.js";import{n}from"./scene.pure-Dic6ZcRQ.js";import{n as r,r as i,t as a}from"./texture-BtN_L_oK.js";import{o}from"./math.vector.pure-DvOxp7ND.js";import{t as s}from"./math.color.pure-DiJ39ld0.js";import{X as c}from"./material.pure-DhgEF69j.js";import{t as l}from"./constants-DfNKfgSv.js";import"./math.vector-CG8xOaky.js";import"./math.color-CTvCOweE.js";import{n as u}from"./texture.pure-BPVTPqcA.js";import{t as d}from"./cubeTexture.pure-B2PiaB_A.js";import"./postprocess.vertex-D9d0Du8L.js";import"./postprocess.vertex-qbpNH4iO.js";import"./meshBuilder-D1eoIY6D.js";import{t as f}from"./meshBuilder.pure-BYTUwQby.js";import"./renderTargetTexture-sHDaiX9-.js";import{t as p}from"./arcRotateCamera-C9dDuc9h.js";import{n as m}from"./webgpuEngine-DqXtKpWk.js";import{i as h,n as g,r as _,t as v}from"./twgsl-DYF6MUpA.js";import"./engine.computeShader-BOOZk-JO.js";import"./depthRendererSceneComponent-DqVIvQcU.js";import"./cubeTexture-CeL0Ji2J.js";import{a as y,i as b,n as x,r as S,t as C}from"./waveSampling-m1YzD4tP.js";var w=`precision highp float;\r
\r
varying vec3 vNormalW;\r
varying vec3 vPositionW;\r
varying vec4 vPositionClip;
varying vec2 vWaveUV;
uniform sampler2D gradientMap;
uniform float tileSize;
\r
uniform vec3 cameraPositionW;\r
uniform vec3 lightDirection;\r
\r
uniform sampler2D depthSampler;\r
uniform sampler2D textureSampler;\r
uniform samplerCube reflectionSampler;
// WAVE_SAMPLING
\r
void main() {\r
    // Resolve fine wave shading independently of the distant geometry LOD.
    vec2 gradient = waveGradient(vWaveUV) * (0.5 / tileSize);
    vec3 normal = normalize(vec3(-gradient.x, 1.0, -gradient.y));
\r
    vec2 screenUV = vPositionClip.xy / vPositionClip.w;\r
    screenUV = screenUV * 0.5 + 0.5;\r
\r
    vec3 backgroundColor = texture2D(textureSampler, screenUV).rgb;\r
\r
    float surfaceDepth = vPositionClip.z;\r
    float backgroundDepth = texture2D(depthSampler, screenUV).r;\r
\r
    float distanceThroughWater = max(surfaceDepth - backgroundDepth, 0.0);\r
\r
    float ndl = max(0.0, dot(normal, -lightDirection));\r
    vec3 diffuseColor = vec3(0.01, 0.06, 0.1);\r
\r
    diffuseColor = mix(diffuseColor, backgroundColor, exp(-distanceThroughWater * 0.1));\r
\r
    vec3 viewRayW = normalize(vPositionW - cameraPositionW);\r
    vec3 viewRayRefractedW = refract(viewRayW, normal, 0.75);\r
    vec3 viewRayReflectedW = reflect(viewRayW, normal);\r
\r
    // water fresnel (https://fileadmin.cs.lth.se/cs/Education/EDAF80/seminars/2022/sem_4.pdf)\r
    float fresnel = 0.02 + 0.98 * pow(1.0 - dot(-viewRayW, normal), 5.0);\r
\r
    vec3 reflectedColor = textureCube(reflectionSampler, viewRayReflectedW).rgb;\r
\r
    float specular = pow(max(0.0, dot(reflect(-lightDirection, normal), viewRayW)), 720.0) * 210.0;\r
\r
    vec3 finalColor = mix(diffuseColor * ndl, reflectedColor + specular, fresnel);\r
\r
    // The standalone ShaderMaterial bypasses Babylon's image-processing shader.
    finalColor = max(finalColor, vec3(0.0));
    gl_FragColor = vec4(pow(finalColor / (vec3(1.0) + finalColor), vec3(1.0 / 2.2)), 1.0);
}
`,T=`precision highp float;\r
\r
attribute vec3 position;\r
attribute vec3 normal;\r
attribute vec2 uv;\r
\r
uniform mat4 world;\r
uniform mat4 worldViewProjection;\r
\r
uniform sampler2D heightMap;\r
uniform sampler2D gradientMap;\r
uniform sampler2D displacementMap;\r
\r
uniform float tileSize;\r
\r
varying vec3 vNormalW;\r
varying vec3 vPositionW;\r
varying vec4 vPositionClip;
varying vec2 vWaveUV;
\r
float scalingFactor;
// WAVE_SAMPLING
\r
vec3 sampleHeightAndGradient(vec2 point) {\r
    float height = texture(heightMap, point).r*.72+texture(heightMap,waveUV1(point)).r*.38+texture(heightMap,waveUV2(point)).r*.20;
    vec2 gradient = waveGradient(point);
    vec3 heightAndGradient = vec3(height, gradient);\r
\r
    return heightAndGradient * scalingFactor * 0.5;\r
}\r
\r
void main() {\r
    scalingFactor = 1 / tileSize;\r
\r
    vec3 waterPosition = position;\r
\r
    vec2 displacement = (texture(displacementMap, uv).rg*.72+waveRotate(texture(displacementMap,waveUV1(uv)).rg,-.53)*.38+waveRotate(texture(displacementMap,waveUV2(uv)).rg,.37)*.20) * scalingFactor;
    waterPosition.x += displacement.x;\r
    waterPosition.z += displacement.y;\r
\r
    vec3 heightAndGradient = sampleHeightAndGradient(uv);\r
    waterPosition.y += heightAndGradient.x;\r
    vec3 normal = normalize(vec3(-heightAndGradient.y, 1.0, -heightAndGradient.z));\r
\r
    // normal using central difference\r
    /*float epsilon = 0.001;\r
    vec3 tangent1 = normalize(vec3(uv.x + epsilon, sampleHeightAndGradient(uv + vec2(epsilon, 0.0)).x, uv.y) - vec3(uv.x - epsilon, sampleHeightAndGradient(uv - vec2(epsilon, 0.0)).x, uv.y));\r
    vec3 tangent2 = normalize(vec3(uv.x, sampleHeightAndGradient(uv + vec2(0.0, epsilon)).x, uv.y + epsilon) - vec3(uv.x, sampleHeightAndGradient(uv - vec2(0.0, epsilon)).x, uv.y - epsilon));\r
    vec3 normal = -normalize(cross(tangent1, tangent2));*/\r
\r
    vPositionW = vec3(world * vec4(waterPosition, 1.0));
    vWaveUV = uv;
    vNormalW = vec3(world * vec4(normal, 0.0));\r
    vPositionClip = worldViewProjection * vec4(waterPosition, 1.0);\r
\r
    gl_Position = vPositionClip;\r
}
`,E=new URL(`TropicalSunnyDay_px-DTR9BO-s.jpg`,import.meta.url).href,D=new URL(`TropicalSunnyDay_py-DnjYcger.jpg`,import.meta.url).href,O=new URL(`TropicalSunnyDay_pz-Daux1Spc.jpg`,import.meta.url).href,k=new URL(`TropicalSunnyDay_nx-sttCNAG9.jpg`,import.meta.url).href,A=new URL(`TropicalSunnyDay_ny-KUUa-93f.jpg`,import.meta.url).href,j=new URL(`TropicalSunnyDay_nz-C0Jp6NHV.jpg`,import.meta.url).href,M=class extends t{textureSize;tileSize;reflectionTexture;initialSpectrum;dynamicSpectrum;ifft;heightMap;gradientMap;displacementMap;depthRenderer;screenRenderTarget;elapsedSeconds=60;constructor(t,n,r,i){if(e.ShadersStore.oceanVertexShader===void 0&&(e.ShadersStore.oceanVertexShader=T.replace(`// WAVE_SAMPLING`,C)),e.ShadersStore.oceanFragmentShader===void 0&&(e.ShadersStore.oceanFragmentShader=w.replace(`// WAVE_SAMPLING`,C)),super(t,r,`ocean`,{attributes:[`position`,`normal`,`uv`],uniforms:[`world`,`worldView`,`worldViewProjection`,`view`,`projection`,`cameraPositionW`,`lightDirection`,`tileSize`],samplers:[`heightMap`,`gradientMap`,`displacementMap`,`reflectionSampler`,`depthSampler`,`textureSampler`]}),this.depthRenderer=r.enableDepthRenderer(r.activeCamera,!1,!0),this.setTexture(`depthSampler`,this.depthRenderer.getDepthMap()),this.screenRenderTarget=new c(`screenTexture`,{ratio:.5},r),r.customRenderTargets.push(this.screenRenderTarget),this.setTexture(`textureSampler`,this.screenRenderTarget),this.reflectionTexture=new d(``,r,null,!1,[E,D,O,k,A,j]),this.setTexture(`reflectionSampler`,this.reflectionTexture),n.h0.textureFormat!=l.TEXTUREFORMAT_RGBA)throw Error(`The base spectrum must have a texture format of RGBA`);this.textureSize=n.textureSize,this.tileSize=n.tileSize,this.initialSpectrum=n,this.dynamicSpectrum=new S(this.initialSpectrum,i),this.ifft=new x(i,this.textureSize),this.heightMap=y(`heightBuffer`,i,this.textureSize,this.textureSize,l.TEXTUREFORMAT_RG),this.gradientMap=y(`gradientBuffer`,i,this.textureSize,this.textureSize,l.TEXTUREFORMAT_RG),this.displacementMap=y(`displacementBuffer`,i,this.textureSize,this.textureSize,l.TEXTUREFORMAT_RG),this.setTexture(`heightMap`,this.heightMap),this.setTexture(`gradientMap`,this.gradientMap),this.setTexture(`displacementMap`,this.displacementMap)}update(e,t){this.elapsedSeconds+=e,this.dynamicSpectrum.generate(this.elapsedSeconds);let n=this.getScene().meshes.filter(e=>e.material!==this);this.depthRenderer.getDepthMap().renderList=n,this.screenRenderTarget.renderList=n,this.ifft.applyToTexture(this.dynamicSpectrum.ht,this.heightMap),this.ifft.applyToTexture(this.dynamicSpectrum.dht,this.gradientMap),this.ifft.applyToTexture(this.dynamicSpectrum.displacement,this.displacementMap);let r=this.getScene().activeCamera;if(r===null)throw Error(`No active camera found`);this.setVector3(`cameraPositionW`,r.globalPosition),this.setFloat(`tileSize`,this.tileSize),this.setVector3(`lightDirection`,t)}dispose(e,t,n){this.dynamicSpectrum.dispose(),this.ifft.dispose(),this.heightMap.dispose(),this.gradientMap.dispose(),this.displacementMap.dispose(),super.dispose(e,t,n)}};document.querySelector(`#app`).innerHTML=`<header><div><small>TIDEBOUND / OCEAN LAB</small><h1>WebTide 海面試驗</h1></div><a href="/?renderer=babylon#play">返回 Abyssal 遊戲版 ↗</a></header><main><canvas aria-label="WebTide 海面"></canvas><div id="status" role="status">正在初始化 WebGPU…</div></main><footer><div class="controls"><button data-view="low">海平面</button><button data-view="tactical">戰術俯視</button><button id="pause">暫停波浪</button><label>模擬頻率 <select id="rate"><option value="30">30 Hz</option><option value="60">60 Hz</option></select></label><span id="stats"></span></div><p>拖曳旋轉、滾輪縮放。這是 WebTide 原生海面試看；尚未接入戰鬥、船艦倒影與能量砲水面互動。</p><p>來源 <a href="https://github.com/BarthPaleologue/WebTide" target="_blank" rel="noreferrer">WebTide · MIT</a>。此頁效能不代表 24 艦交戰效能。</p></footer>`;var N=document.querySelector(`canvas`),P=document.querySelector(`#status`);async function F(){if(!await m.IsSupportedAsync)throw Error(`此瀏覽器未提供 WebGPU。請使用已開啟硬體加速的 Chrome；仍可從上方返回 Abyssal 遊戲版。`);let e=new m(N,{antialias:!0,glslangOptions:{jsPath:h,wasmPath:_},twgslOptions:{jsPath:g,wasmPath:v}});await e.initAsync();let t=new n(e),c=new p(`review`,-Math.PI/2,1.35,20,new o(0,0,0),t);c.minZ=.1,c.maxZ=500,c.lowerRadiusLimit=4,c.upperRadiusLimit=90,c.upperBetaLimit=1.52,c.lowerBetaLimit=.2,c.wheelPrecision=8,c.attachControl(N,!0);let l=new r(`sun`,new o(1,-1,3).normalize(),t);new i(`sky`,o.Up(),t).intensity=.8;let d=new M(`webtide`,new b(256,10,e),t,e),y=f.CreateBox(`sky`,{size:300},t),x=new a(`sky`,t);x.backFaceCulling=!1,x.disableLighting=!0,x.reflectionTexture=d.reflectionTexture,x.reflectionTexture.coordinatesMode=u.SKYBOX_MODE,y.material=x;let S=[64,32,16].map(e=>{let n=f.CreateGround(`water-`+e,{width:180,height:180,subdivisions:e*9},t);n.material=d;let r=n.getVerticesData(`uv`);for(let e=0;e<r.length;e++)r[e]*=18;return n.setVerticesData(`uv`,r),n.setEnabled(!1),n}),C=-1,w=()=>{let e=c.radius>45?2:+(c.radius>28);e!==C&&(S.forEach((t,n)=>t.setEnabled(n===e)),C=e)};w();let T=f.CreateGround(`seabed`,{width:200,height:200},t);T.position.y=-12;let E=new a(`sand`,t);E.diffuseColor=new s(.32,.29,.22),E.specularColor=s.Black(),T.material=E;let D=!1,O=0,k=0,A=30;document.querySelector(`#pause`).addEventListener(`click`,e=>{D=!D,e.target.textContent=D?`繼續波浪`:`暫停波浪`}),document.querySelector(`#rate`).addEventListener(`change`,e=>A=Number(e.target.value)),document.querySelectorAll(`[data-view]`).forEach(e=>e.addEventListener(`click`,()=>{c.alpha=-Math.PI/2,c.beta=e.dataset.view===`low`?1.35:.48,c.radius=e.dataset.view===`low`?20:65,c.target.set(0,0,0)}));let j=()=>{e.setSize(Math.min(1920,N.clientWidth),Math.min(1080,N.clientHeight))};j(),window.addEventListener(`resize`,j),await t.whenReadyAsync(),P.hidden=!0,window.__webtide={engine:e,scene:t,water:d,camera:c},e.runRenderLoop(()=>{let n=Math.min(e.getDeltaTime()/1e3,.1);w(),D||(O+=n,O>=1/A&&(d.update(O,l.direction),O=0)),t.render(),k+=n,k>.5&&(document.querySelector(`#stats`).textContent=`${Math.round(e.getFps())} FPS · WebGPU · ${C===2?`遠景`:C===1?`中景`:`近景`} · ${Math.round(t.getActiveIndices()/3).toLocaleString()} 三角形 · ${e.getRenderWidth()} × ${e.getRenderHeight()}`,k=0)}),window.addEventListener(`pagehide`,()=>{e.stopRenderLoop(),t.dispose(),e.dispose()},{once:!0})}F().catch(e=>{P.hidden=!1,P.textContent=String(e.message??e),P.dataset.error=`true`,console.error(e)});