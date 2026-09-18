const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sprites.vertex-qF3PjKq1.js","./sprites.vertex-BqlKEfIW.js","./shaderStore-D-XQlhUT.js","./fogVertexDeclaration-CiHbVcSR.js","./logDepthDeclaration-DYYUVTrx.js","./logDepthVertex-DSD5XdGw.js","./sprites.fragment-WkD5-zpm.js","./sprites.fragment-CVolMj-i.js","./fogFragmentDeclaration-CWCikRBp.js","./logDepthFragment-CxtJswLx.js","./fogFragment-C9E3EVJj.js","./sprites.vertex-DKBW1__N.js","./sprites.vertex-BcP6Umk5.js","./logDepthDeclaration-3gXGtHbI.js","./fogVertexDeclaration-Bb9kDbrL.js","./logDepthVertex-D5IUM6qd.js","./sprites.fragment-KubYk2-e.js","./sprites.fragment-utgpV53P.js","./fogFragmentDeclaration-kXoGw5iI.js","./logDepthFragment-C5lxT4l1.js","./fogFragment-CKCGTcJi.js"])))=>i.map(i=>d[i]);
import{n as e}from"./observable.pure-H-M_hi7F.js";import{t}from"./engineStore-B_7KzytD.js";import{t as n}from"./logger-CuBYPcDK.js";import{t as r}from"./shaderStore-D-XQlhUT.js";import{C as i}from"./mesh.pure-ECA1_wkB.js";import{c as a,n as o,s}from"./scene.pure-Dic6ZcRQ.js";import{s as c}from"./particleSystemComponent-DEGjVblH.js";import{r as l,t as u}from"./buffer.pure-DsLCkIdT.js";import{i as d,o as f,t as p}from"./math.vector.pure-DvOxp7ND.js";import{n as m}from"./typeStore-Cu_sj2zM.js";import{n as h}from"./math.color.pure-DiJ39ld0.js";import{t as g}from"./preload-helper-uBIymjUX.js";import{g as _}from"./material.pure-DhgEF69j.js";import{t as v}from"./webRequest-dqz0dHXK.js";import{r as y}from"./tools.pure-DNuT35UR.js";import{n as b}from"./lightConstants---VMShX2.js";import{t as x}from"./sceneComponent-Cb-5NwCN.js";import{n as S}from"./texture.pure-BPVTPqcA.js";import{t as C}from"./drawWrapper-BQLD_m1P.js";import{f as ee,n as te,r as w,u as T}from"./ray.core-BtCY8_e9.js";import{t as E}from"./computeShader.pure-DOY-ukNZ.js";import{t as ne}from"./imageProcessingDeclaration-D-Jk7MeR.js";import{t as D}from"./logDepthDeclaration-3gXGtHbI.js";import{t as re}from"./helperFunctions-gEnZbjN3.js";import{t as ie}from"./imageProcessingFunctions-Cqomo2bJ.js";import{t as O}from"./fogFragmentDeclaration-kXoGw5iI.js";import{t as k}from"./clipPlaneFragment-B_IgbgTE.js";import{t as A}from"./logDepthFragment-C5lxT4l1.js";import{t as ae}from"./fogFragment-CKCGTcJi.js";import{t as oe}from"./fogVertexDeclaration-Bb9kDbrL.js";import{t as se}from"./clipPlaneVertex-6IHcna3I.js";import{t as ce}from"./fogVertex-B90wzaBe.js";import{t as le}from"./logDepthVertex-D5IUM6qd.js";var j=`clipPlaneFragmentDeclaration2`,M=`#ifdef CLIPPLANE
in float fClipDistance;
#endif
#ifdef CLIPPLANE2
in float fClipDistance2;
#endif
#ifdef CLIPPLANE3
in float fClipDistance3;
#endif
#ifdef CLIPPLANE4
in float fClipDistance4;
#endif
#ifdef CLIPPLANE5
in float fClipDistance5;
#endif
#ifdef CLIPPLANE6
in float fClipDistance6;
#endif
`;r.IncludesShadersStore[j]||(r.IncludesShadersStore[j]=M);var ue={name:j,shader:M},N=`gpuRenderParticlesPixelShader`,de=`precision highp float;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform sampler2D diffuseSampler;varying vec2 vUV;varying vec4 vColor;
#include<clipPlaneFragmentDeclaration2> 
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#include<fogFragmentDeclaration>
void main() {
#include<clipPlaneFragment> 
vec4 textureColor=texture2D(diffuseSampler,vUV);gl_FragColor=textureColor*vColor;
#ifdef BLENDMULTIPLYMODE
float alpha=vColor.a*textureColor.a;gl_FragColor.rgb=gl_FragColor.rgb*alpha+vec3(1.0)*(1.0-alpha);
#endif 
#include<logDepthFragment>
#include<fogFragment>(color,gl_FragColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=toLinearSpace(gl_FragColor.rgb);
#else
#ifdef IMAGEPROCESSING
gl_FragColor.rgb=toLinearSpace(gl_FragColor.rgb);gl_FragColor=applyImageProcessing(gl_FragColor);
#endif
#endif
}
`;r.ShadersStore[N]||(r.ShadersStore[N]=de);var fe=[ue,ne,D,re,ie,O,k,A,ae];for(let e of fe)r.IncludesShadersStore[e.name]||(r.IncludesShadersStore[e.name]=e.shader);var P=`clipPlaneVertexDeclaration2`,F=`#ifdef CLIPPLANE
uniform vec4 vClipPlane;out float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;out float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;out float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;out float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;out float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;out float fClipDistance6;
#endif
`;r.IncludesShadersStore[P]||(r.IncludesShadersStore[P]=F);var I={name:P,shader:F},L=`gpuRenderParticlesVertexShader`,R=`precision highp float;uniform mat4 view;uniform mat4 projection;uniform vec2 translationPivot;uniform vec3 worldOffset;
#ifdef LOCAL
uniform mat4 emitterWM;
#endif
attribute vec3 position;attribute float age;attribute float life;attribute vec3 size;
#if !defined(BILLBOARD) || defined(BILLBOARDSTRETCHED_LOCAL)
attribute vec3 initialDirection;
#endif
#ifdef BILLBOARDSTRETCHED
attribute vec3 direction;
#endif
attribute float angle;
#ifdef ANIMATESHEET
attribute float cellIndex;
#endif
attribute vec2 offset;attribute vec2 uv;varying vec2 vUV;varying vec4 vColor;varying vec3 vPositionW;
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform mat4 invView;
#endif
#include<clipPlaneVertexDeclaration2>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef COLORGRADIENTS
uniform sampler2D colorGradientSampler;
#ifdef COLORGRADIENTS_COLOR2
attribute vec4 seed;
#endif
#else
uniform vec4 colorDead;attribute vec4 color;
#endif
#ifdef ANIMATESHEET
uniform vec3 sheetInfos;
#endif
#ifdef BILLBOARD
uniform vec3 eyePosition;
#endif
vec3 rotate(vec3 yaxis,vec3 rotatedCorner) {vec3 xaxis=normalize(cross(vec3(0.,1.0,0.),yaxis));vec3 zaxis=normalize(cross(yaxis,xaxis));vec3 row0=vec3(xaxis.x,xaxis.y,xaxis.z);vec3 row1=vec3(yaxis.x,yaxis.y,yaxis.z);vec3 row2=vec3(zaxis.x,zaxis.y,zaxis.z);mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;
#ifdef LOCAL
return ((emitterWM*vec4(position,1.0)).xyz+worldOffset)+alignedCorner;
#else
return (position+worldOffset)+alignedCorner;
#endif
}
#ifdef BILLBOARDSTRETCHED
vec3 rotateAlign(vec3 toCamera,vec3 rotatedCorner) {vec3 normalizedToCamera=normalize(toCamera);
#ifdef BILLBOARDSTRETCHED_LOCAL
vec3 normalizedCrossDirToCamera=normalize(cross(normalize(initialDirection),normalizedToCamera));
#else
vec3 normalizedCrossDirToCamera=normalize(cross(normalize(direction),normalizedToCamera));
#endif
vec3 row0=vec3(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);vec3 row2=vec3(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
vec3 row1=normalize(initialDirection);
#else
vec3 crossProduct=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));vec3 row1=vec3(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
mat3 rotMatrix= mat3(row0,row1,row2);vec3 alignedCorner=rotMatrix*rotatedCorner;
#ifdef LOCAL
return ((emitterWM*vec4(position,1.0)).xyz+worldOffset)+alignedCorner;
#else
return (position+worldOffset)+alignedCorner;
#endif
}
#endif
void main() {
#ifdef EMITRATECTRL
if (life>0.0 && age>=life) {gl_Position=vec4(0.0,0.0,2.0,1.0);vColor=vec4(0.0); 
vUV=vec2(0.0);vPositionW=vec3(0.0);return;}
#endif
#ifdef ANIMATESHEET
float rowOffset=floor(cellIndex/sheetInfos.z);float columnOffset=cellIndex-rowOffset*sheetInfos.z;vec2 uvScale=sheetInfos.xy;vec2 uvOffset=vec2(uv.x ,1.0-uv.y);vUV=(uvOffset+vec2(columnOffset,rowOffset))*uvScale;
#else
vUV=uv;
#endif
float ratio=min(1.0,age/life);
#ifdef COLORGRADIENTS
#ifdef COLORGRADIENTS_COLOR2
vec4 vColor1=texture2D(colorGradientSampler,vec2(ratio,0.25));vec4 vColor2=texture2D(colorGradientSampler,vec2(ratio,0.75));vColor=mix(vColor1,vColor2,seed.x);
#else
vColor=texture2D(colorGradientSampler,vec2(ratio,0));
#endif
#else
vColor=color*vec4(1.0-ratio)+colorDead*vec4(ratio);
#endif
vec2 cornerPos=(offset-translationPivot)*size.yz*size.x;
#ifdef BILLBOARD
vec4 rotatedCorner;rotatedCorner.w=0.;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.y=0.;rotatedCorner.xz+=translationPivot;vec3 yaxis=(position+worldOffset)-eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner.xyz);vec4 viewPosition=(view*vec4(vPositionW,1.0));
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;vec3 toCamera=(position+worldOffset)-eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner.xyz);vec4 viewPosition=(view*vec4(vPositionW,1.0));
#else
rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;rotatedCorner.xy+=translationPivot;
#ifdef LOCAL
vec4 viewPosition=view*vec4(((emitterWM*vec4(position,1.0)).xyz+worldOffset),1.0)+rotatedCorner;
#else
vec4 viewPosition=view*vec4((position+worldOffset),1.0)+rotatedCorner;
#endif
vPositionW=(invView*viewPosition).xyz;
#endif
#else
vec3 rotatedCorner;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=0.;rotatedCorner.z=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.xz+=translationPivot;vec3 yaxis=normalize(initialDirection);vPositionW=rotate(yaxis,rotatedCorner);vec4 viewPosition=view*vec4(vPositionW,1.0);
#endif
gl_Position=projection*viewPosition;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
vec4 worldPos=vec4(vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
}`;r.ShadersStore[L]||(r.ShadersStore[L]=R);var z=[I,oe,D,se,ce,le];for(let e of z)r.IncludesShadersStore[e.name]||(r.IncludesShadersStore[e.name]=e.shader);var B=class{constructor(e,t,n=3,r){this._engine=e,this._label=r,this._engine._storageBuffers.push(this),this._create(t,n)}_create(e,t){this._bufferSize=e,this._creationFlags=t,this._buffer=this._engine.createStorageBuffer(e,t,this._label)}_rebuild(){this._create(this._bufferSize,this._creationFlags)}getBuffer(){return this._buffer}clear(e,t){this._engine.clearStorageBuffer(this._buffer,e,t)}update(e,t,n){this._buffer&&this._engine.updateStorageBuffer(this._buffer,e,t,n)}async read(e,t,n,r){return await this._engine.readFromStorageBuffer(this._buffer,e,t,n,r)}dispose(){let e=this._engine._storageBuffers,t=e.indexOf(this);t!==-1&&(e[t]=e[e.length-1],e.pop()),this._engine._releaseBuffer(this._buffer),this._buffer=null}},V=class{_isUbo(e){return e.addUniform!==void 0}constructor(e){this._isUbo(e)?(this.setMatrix3x3=e.updateMatrix3x3.bind(e),this.setMatrix2x2=e.updateMatrix2x2.bind(e),this.setFloat=e.updateFloat.bind(e),this.setFloat2=e.updateFloat2.bind(e),this.setFloat3=e.updateFloat3.bind(e),this.setFloat4=e.updateFloat4.bind(e),this.setFloatArray=e.updateFloatArray.bind(e),this.setArray=e.updateArray.bind(e),this.setIntArray=e.updateIntArray.bind(e),this.setMatrix=e.updateMatrix.bind(e),this.setMatrices=e.updateMatrices.bind(e),this.setVector3=e.updateVector3.bind(e),this.setVector4=e.updateVector4.bind(e),this.setColor3=e.updateColor3.bind(e),this.setColor4=e.updateColor4.bind(e),this.setDirectColor4=e.updateDirectColor4.bind(e),this.setInt=e.updateInt.bind(e),this.setInt2=e.updateInt2.bind(e),this.setInt3=e.updateInt3.bind(e),this.setInt4=e.updateInt4.bind(e)):(this.setMatrix3x3=e.setMatrix3x3.bind(e),this.setMatrix2x2=e.setMatrix2x2.bind(e),this.setFloat=e.setFloat.bind(e),this.setFloat2=e.setFloat2.bind(e),this.setFloat3=e.setFloat3.bind(e),this.setFloat4=e.setFloat4.bind(e),this.setFloatArray=e.setFloatArray.bind(e),this.setArray=e.setArray.bind(e),this.setIntArray=e.setIntArray.bind(e),this.setMatrix=e.setMatrix.bind(e),this.setMatrices=e.setMatrices.bind(e),this.setVector3=e.setVector3.bind(e),this.setVector4=e.setVector4.bind(e),this.setColor3=e.setColor3.bind(e),this.setColor4=e.setColor4.bind(e),this.setDirectColor4=e.setDirectColor4.bind(e),this.setInt=e.setInt.bind(e),this.setInt2=e.setInt2.bind(e),this.setInt3=e.setInt3.bind(e),this.setInt4=e.setInt4.bind(e))}},pe=class{constructor(e,t){this._bufferComputeShader=[],this._renderVertexBuffers=[],this.alignDataInBuffer=!0,this._parent=e,this._engine=t}contextLost(){this._updateComputeShader=void 0,this._bufferComputeShader.length=0,this._renderVertexBuffers.length=0}isUpdateBufferCreated(){return!!this._updateComputeShader}isUpdateBufferReady(){return this._updateComputeShader?.isReady()??!1}createUpdateBuffer(e){let t={params:{group:0,binding:0},particlesIn:{group:0,binding:1},particlesOut:{group:0,binding:2},randomTexture:{group:0,binding:3},randomTexture2:{group:0,binding:4}};if(this._parent._sizeGradientsTexture&&(t.sizeGradientTexture={group:1,binding:1}),this._parent._angularSpeedGradientsTexture&&(t.angularSpeedGradientTexture={group:1,binding:3}),this._parent._velocityGradientsTexture&&(t.velocityGradientTexture={group:1,binding:5}),this._parent._limitVelocityGradientsTexture&&(t.limitVelocityGradientTexture={group:1,binding:7}),this._parent._dragGradientsTexture&&(t.dragGradientTexture={group:1,binding:9}),this._parent.noiseTexture&&(t.noiseTexture={group:1,binding:11}),this._parent.flowMap&&(t.flowMapTexture={group:1,binding:13}),this._parent._meshPositionTexture&&(t.meshPositionTexture={group:1,binding:14}),this._parent._meshNormalTexture&&(t.meshNormalTexture={group:1,binding:15}),this._updateComputeShader=new E(`updateParticles`,this._engine,`gpuUpdateParticles`,{bindingsMapping:t,defines:e.split(`
`),useExplicitComputePipelineLayout:!0}),this._simParamsComputeShader?.dispose(),this._simParamsComputeShader=new b(this._engine,void 0,void 0,`ComputeShaderParticleSystemUBO`),this._simParamsComputeShader.addUniform(`currentCount`,1),this._simParamsComputeShader.addUniform(`timeDelta`,1),this._simParamsComputeShader.addUniform(`stopFactor`,1),this._simParamsComputeShader.addUniform(`randomTextureSize`,1),this._simParamsComputeShader.addUniform(`lifeTime`,2),this._simParamsComputeShader.addUniform(`emitPower`,2),this._simParamsComputeShader.addUniform(`emitIndex`,1),this._simParamsComputeShader.addUniform(`emitCount`,1),this._parent._colorGradientsTexture||(this._simParamsComputeShader.addUniform(`color1`,4),this._simParamsComputeShader.addUniform(`color2`,4)),this._simParamsComputeShader.addUniform(`sizeRange`,2),this._simParamsComputeShader.addUniform(`scaleRange`,4),this._simParamsComputeShader.addUniform(`angleRange`,4),this._simParamsComputeShader.addUniform(`gravity`,3),this._parent._limitVelocityGradientsTexture&&this._simParamsComputeShader.addUniform(`limitVelocityDamping`,1),this._parent.isAnimationSheetEnabled&&this._simParamsComputeShader.addUniform(`cellInfos`,4),this._parent.noiseTexture&&this._simParamsComputeShader.addUniform(`noiseStrength`,3),this._parent.flowMap&&(this._simParamsComputeShader.addUniform(`flowMapProjection`,16),this._simParamsComputeShader.addUniform(`flowMapStrength`,1)),this._parent.isLocal||this._simParamsComputeShader.addUniform(`emitterWM`,16),this._parent.attractors.length>0){this._simParamsComputeShader.addUniform(`attractorCount`,1);for(let e=0;e<this._parent.maxAttractors;e++)this._simParamsComputeShader.addUniform(`attractorPositionAndStrength[`+e+`]`,4)}return this._parent._startSizeGradients&&this._parent._startSizeGradients.length>0&&this._simParamsComputeShader.addUniform(`startSizeGradientFactor`,1),this._parent._lifeTimeGradients&&this._parent._lifeTimeGradients.length>0&&this._simParamsComputeShader.addUniform(`lifeTimeGradientRange`,2),this._parent._meshPositionTexture&&(this._simParamsComputeShader.addUniform(`meshTriangleCount`,1),this._simParamsComputeShader.addUniform(`meshTextureWidth`,1)),this._parent.particleEmitterType&&this._parent.particleEmitterType.buildUniformLayout(this._simParamsComputeShader),this._updateComputeShader.setUniformBuffer(`params`,this._simParamsComputeShader),new V(this._simParamsComputeShader)}createVertexBuffers(e,t){this._renderVertexBuffers.push(t)}createParticleBuffer(e){let t=new B(this._engine,e.length*4,11,`ComputeShaderParticleSystemBuffer`);return t.update(e),this._bufferComputeShader.push(t),t.getBuffer()}bindDrawBuffers(e,t,n){this._engine.bindBuffers(this._renderVertexBuffers[e],n,t)}preUpdateParticleBuffer(){}updateParticleBuffer(e,t,n){this._simParamsComputeShader.update(),this._updateComputeShader.setTexture(`randomTexture`,this._parent._randomTexture,!1),this._updateComputeShader.setTexture(`randomTexture2`,this._parent._randomTexture2,!1),this._parent._sizeGradientsTexture&&this._updateComputeShader.setTexture(`sizeGradientTexture`,this._parent._sizeGradientsTexture),this._parent._angularSpeedGradientsTexture&&this._updateComputeShader.setTexture(`angularSpeedGradientTexture`,this._parent._angularSpeedGradientsTexture),this._parent._velocityGradientsTexture&&this._updateComputeShader.setTexture(`velocityGradientTexture`,this._parent._velocityGradientsTexture),this._parent._limitVelocityGradientsTexture&&this._updateComputeShader.setTexture(`limitVelocityGradientTexture`,this._parent._limitVelocityGradientsTexture),this._parent._dragGradientsTexture&&this._updateComputeShader.setTexture(`dragGradientTexture`,this._parent._dragGradientsTexture),this._parent.noiseTexture&&this._updateComputeShader.setTexture(`noiseTexture`,this._parent.noiseTexture),this._parent.flowMap&&this._updateComputeShader.setTexture(`flowMapTexture`,this._parent.flowMap),this._parent._meshPositionTexture&&this._updateComputeShader.setTexture(`meshPositionTexture`,this._parent._meshPositionTexture,!1),this._parent._meshNormalTexture&&this._updateComputeShader.setTexture(`meshNormalTexture`,this._parent._meshNormalTexture,!1),this._updateComputeShader.setStorageBuffer(`particlesIn`,this._bufferComputeShader[e]),this._updateComputeShader.setStorageBuffer(`particlesOut`,this._bufferComputeShader[e^1]),this._updateComputeShader.dispatch(Math.ceil(n/64))}releaseBuffers(){for(let e=0;e<this._bufferComputeShader.length;++e)this._bufferComputeShader[e].dispose();this._bufferComputeShader.length=0,this._simParamsComputeShader?.dispose(),this._simParamsComputeShader=null,this._updateComputeShader=null}releaseVertexBuffers(){this._renderVertexBuffers.length=0}},H=!1;function me(){H||(H=!0,m(`BABYLON.ComputeShaderParticleSystem`,pe))}var U=`gpuUpdateParticlesComputeShader`,he=`struct Particle {position : vec3<f32>,
age : f32,
size : vec3<f32>,
life : f32,
seed : vec4<f32>,
direction : vec3<f32>,
dummy0: f32,
#ifdef CUSTOMEMITTER
initialPosition : vec3<f32>,
dummy1: f32,
#endif
#ifndef COLORGRADIENTS
color : vec4<f32>,
#endif
#ifndef BILLBOARD
initialDirection : vec3<f32>,
dummy2: f32,
#endif
#ifdef NOISE
noiseCoordinates1 : vec3<f32>,
dummy3: f32,
noiseCoordinates2 : vec3<f32>,
dummy4: f32,
#endif
#ifdef ANGULARSPEEDGRADIENTS
angle : f32,
#else
angle : vec2<f32>,
#endif
#ifdef ANIMATESHEET
cellIndex : f32,
#ifdef ANIMATESHEETRANDOMSTART
cellStartOffset : f32,
#endif
#endif
};struct Particles {particles : array<Particle>,};struct SimParams {currentCount : f32,
timeDelta : f32,
stopFactor : f32,
randomTextureSize: i32,
lifeTime : vec2<f32>,
emitPower : vec2<f32>,
emitIndex : f32,
emitCount : f32,
#ifndef COLORGRADIENTS
color1 : vec4<f32>,
color2 : vec4<f32>,
#endif
sizeRange : vec2<f32>,
scaleRange : vec4<f32>,
angleRange : vec4<f32>,
gravity : vec3<f32>,
#ifdef LIMITVELOCITYGRADIENTS
limitVelocityDamping : f32,
#endif
#ifdef ANIMATESHEET
cellInfos : vec4<f32>,
#endif
#ifdef NOISE
noiseStrength : vec3<f32>,
#endif
#ifdef FLOWMAP
flowMapProjection : mat4x4<f32>,
flowMapStrength : f32,
#endif
#ifndef LOCAL
emitterWM : mat4x4<f32>,
#endif
#ifdef ATTRACTORS
attractorCount : i32,
attractorPositionAndStrength : array<vec4<f32>,MAX_ATTRACTORS>,
#endif
#ifdef STARTSIZEGRADIENTS
startSizeGradientFactor : f32,
#endif
#ifdef LIFETIMEGRADIENTS
lifeTimeGradientRange : vec2<f32>,
#endif
#ifdef MESHEMITTER
meshTriangleCount : i32,
meshTextureWidth : i32,
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#endif
#ifdef BOXEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
minEmitBox : vec3<f32>,
maxEmitBox : vec3<f32>,
#endif
#ifdef CONEEMITTER
radius : vec2<f32>,
coneAngle : f32,
height : vec2<f32>,
#ifdef DIRECTEDCONEEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
#ifdef CYLINDEREMITTER
radius : f32,
height : f32,
radiusRange : f32,
#ifdef DIRECTEDCYLINDEREMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
#ifdef HEMISPHERICEMITTER
radius : f32,
radiusRange : f32,
directionRandomizer : f32,
#endif
#ifdef POINTEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#endif
#ifdef SPHEREEMITTER
radius : f32,
radiusRange : f32,
#ifdef DIRECTEDSPHEREEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
};@binding(0) @group(0) var<uniform> params : SimParams;@binding(1) @group(0) var<storage,read> particlesIn : Particles;@binding(2) @group(0) var<storage,read_write> particlesOut : Particles;@binding(3) @group(0) var randomTexture : texture_2d<f32>;@binding(4) @group(0) var randomTexture2 : texture_2d<f32>;
#ifdef SIZEGRADIENTS
@binding(0) @group(1) var sizeGradientSampler : sampler;@binding(1) @group(1) var sizeGradientTexture : texture_2d<f32>;
#endif 
#ifdef ANGULARSPEEDGRADIENTS
@binding(2) @group(1) var angularSpeedGradientSampler : sampler;@binding(3) @group(1) var angularSpeedGradientTexture : texture_2d<f32>;
#endif 
#ifdef VELOCITYGRADIENTS
@binding(4) @group(1) var velocityGradientSampler : sampler;@binding(5) @group(1) var velocityGradientTexture : texture_2d<f32>;
#endif
#ifdef LIMITVELOCITYGRADIENTS
@binding(6) @group(1) var limitVelocityGradientSampler : sampler;@binding(7) @group(1) var limitVelocityGradientTexture : texture_2d<f32>;
#endif
#ifdef DRAGGRADIENTS
@binding(8) @group(1) var dragGradientSampler : sampler;@binding(9) @group(1) var dragGradientTexture : texture_2d<f32>;
#endif
#ifdef NOISE
@binding(10) @group(1) var noiseSampler : sampler;@binding(11) @group(1) var noiseTexture : texture_2d<f32>;
#endif
#ifdef FLOWMAP
@binding(12) @group(1) var flowMapSampler : sampler;@binding(13) @group(1) var flowMapTexture : texture_2d<f32>;
#endif
#ifdef MESHEMITTER
@binding(14) @group(1) var meshPositionTexture : texture_2d<f32>;
#ifdef MESHNORMALS
@binding(15) @group(1) var meshNormalTexture : texture_2d<f32>;
#endif
#endif
fn getRandomVec3(offset : f32,vertexID : f32)->vec3<f32> {return textureLoad(randomTexture2,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0).rgb;}
fn getRandomVec4(offset : f32,vertexID : f32)->vec4<f32> {return textureLoad(randomTexture,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0);}
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {let index : u32=GlobalInvocationID.x;let vertexID : f32=f32(index);if (index>=u32(params.currentCount)) {return;}
let PI : f32=3.14159;let timeDelta : f32=params.timeDelta;let newAge : f32=particlesIn.particles[index].age+timeDelta;let life : f32=particlesIn.particles[index].life;let seed : vec4<f32>=particlesIn.particles[index].seed;let direction : vec3<f32>=particlesIn.particles[index].direction;
#ifdef EMITRATECTRL
var offsetFromEmitIndex : f32=vertexID-params.emitIndex;if (offsetFromEmitIndex<0.0) {offsetFromEmitIndex+=params.currentCount; }
let shouldEmit : bool=offsetFromEmitIndex<params.emitCount && params.stopFactor != 0.;
#else
let shouldEmit : bool=newAge>=life && params.stopFactor != 0.;
#endif
if (shouldEmit) {var newPosition : vec3<f32>;var newDirection : vec3<f32>;let randoms : vec4<f32>=getRandomVec4(seed.x,vertexID);let outLife : f32=params.lifeTime.x+(params.lifeTime.y-params.lifeTime.x)*randoms.r;
#ifdef LIFETIMEGRADIENTS
particlesOut.particles[index].life=params.lifeTimeGradientRange.x+(params.lifeTimeGradientRange.y-params.lifeTimeGradientRange.x)*randoms.r;
#else
particlesOut.particles[index].life=outLife;
#endif
#ifdef EMITRATECTRL
particlesOut.particles[index].age=0.0;
#else
particlesOut.particles[index].age=newAge-life;
#endif
particlesOut.particles[index].seed=seed;var sizex : f32;
#ifdef SIZEGRADIENTS 
let sizeGradientRange=textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(0.,0.),0.).rg;sizex=sizeGradientRange.x+(sizeGradientRange.y-sizeGradientRange.x)*seed.y;
#else
sizex=params.sizeRange.x+(params.sizeRange.y-params.sizeRange.x)*randoms.g;
#endif
#ifdef STARTSIZEGRADIENTS
sizex*=params.startSizeGradientFactor;
#endif
particlesOut.particles[index].size=vec3<f32>(
sizex,
params.scaleRange.x+(params.scaleRange.y-params.scaleRange.x)*randoms.b,
params.scaleRange.z+(params.scaleRange.w-params.scaleRange.z)*randoms.a);
#ifndef COLORGRADIENTS
particlesOut.particles[index].color=params.color1+(params.color2-params.color1)*randoms.b;
#endif
#ifndef ANGULARSPEEDGRADIENTS 
particlesOut.particles[index].angle=vec2<f32>(
params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r,
params.angleRange.x+(params.angleRange.y-params.angleRange.x)*randoms.a);
#else
particlesOut.particles[index].angle=params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r;
#endif 
#if defined(POINTEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);newPosition=vec3<f32>(0.,0.,0.);newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#elif defined(BOXEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);newPosition=params.minEmitBox+(params.maxEmitBox-params.minEmitBox)*randoms2;newDirection=params.direction1+(params.direction2-params.direction1)*randoms3; 
#elif defined(HEMISPHERICEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let phi : f32=2.0*PI*randoms2.x;let theta : f32=acos(-1.0+2.0*randoms2.y);let randX : f32=cos(phi)*sin(theta);let randY : f32=cos(theta);let randZ : f32=sin(phi)*sin(theta);newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,abs(randY),randZ);newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#elif defined(SPHEREEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let phi : f32=2.0*PI*randoms2.x;let theta : f32=acos(-1.0+2.0*randoms2.y);let randX : f32=cos(phi)*sin(theta);let randY : f32=cos(theta);let randZ : f32=sin(phi)*sin(theta);newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,randY,randZ);
#ifdef DIRECTEDSPHEREEMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#endif
#elif defined(CYLINDEREMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let yPos : f32=(-0.5+randoms2.x)*params.height;var angle : f32=randoms2.y*PI*2.;let inverseRadiusRangeSquared : f32=(1.-params.radiusRange)*(1.-params.radiusRange);let positionRadius : f32=params.radius*sqrt(inverseRadiusRangeSquared+randoms2.z*(1.-inverseRadiusRangeSquared));let xPos : f32=positionRadius*cos(angle);let zPos : f32=positionRadius*sin(angle);newPosition=vec3<f32>(xPos,yPos,zPos);
#ifdef DIRECTEDCYLINDEREMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
angle=angle+(-0.5+randoms3.x)*PI*params.directionRandomizer;newDirection=vec3<f32>(cos(angle),(-0.5+randoms3.y)*params.directionRandomizer,sin(angle));newDirection=normalize(newDirection);
#endif
#elif defined(CONEEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let s : f32=2.0*PI*randoms2.x;
#ifdef CONEEMITTERSPAWNPOINT
let h : f32=0.0001;
#else
var h : f32=randoms2.y*params.height.y;h=1.-h*h; 
#endif
var lRadius : f32=params.radius.x-params.radius.x*randoms2.z*params.radius.y;lRadius=lRadius*h;let randX : f32=lRadius*sin(s);let randZ : f32=lRadius*cos(s);let randY : f32=h *params.height.x;newPosition=vec3<f32>(randX,randY,randZ); 
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
#ifdef DIRECTEDCONEEMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
if (abs(cos(params.coneAngle))==1.0) {newDirection=vec3<f32>(0.,1.0,0.);} else {newDirection=normalize(newPosition+params.directionRandomizer*randoms3); }
#endif
#elif defined(MESHEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);var triIdx : i32=i32(floor(randoms2.x*f32(params.meshTriangleCount)));triIdx=min(triIdx,params.meshTriangleCount-1);let baseTexel : i32=triIdx*3;let t0 : i32=baseTexel;let t1 : i32=baseTexel+1;let t2 : i32=baseTexel+2;let v0 : vec3<f32>=textureLoad(meshPositionTexture,vec2<i32>(t0 % params.meshTextureWidth,t0/params.meshTextureWidth),0).xyz;let v1 : vec3<f32>=textureLoad(meshPositionTexture,vec2<i32>(t1 % params.meshTextureWidth,t1/params.meshTextureWidth),0).xyz;let v2 : vec3<f32>=textureLoad(meshPositionTexture,vec2<i32>(t2 % params.meshTextureWidth,t2/params.meshTextureWidth),0).xyz;let bu : f32=randoms2.y;let bv : f32=randoms2.z*(1.0-bu);let bw : f32=1.0-bu-bv;newPosition=bu*v0+bv*v1+bw*v2;
#ifdef MESHNORMALS
let n0 : vec3<f32>=textureLoad(meshNormalTexture,vec2<i32>(t0 % params.meshTextureWidth,t0/params.meshTextureWidth),0).xyz;let n1 : vec3<f32>=textureLoad(meshNormalTexture,vec2<i32>(t1 % params.meshTextureWidth,t1/params.meshTextureWidth),0).xyz;let n2 : vec3<f32>=textureLoad(meshNormalTexture,vec2<i32>(t2 % params.meshTextureWidth,t2/params.meshTextureWidth),0).xyz;newDirection=normalize(bu*n0+bv*n1+bw*n2);
#else
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#endif
#elif defined(CUSTOMEMITTER)
newPosition=particlesIn.particles[index].initialPosition;particlesOut.particles[index].initialPosition=newPosition;
#else 
newPosition=vec3<f32>(0.,0.,0.);newDirection=2.0*(getRandomVec3(seed.w,vertexID)-vec3<f32>(0.5,0.5,0.5));
#endif
let power : f32=params.emitPower.x+(params.emitPower.y-params.emitPower.x)*randoms.a;
#ifdef LOCAL
particlesOut.particles[index].position=newPosition;
#else
particlesOut.particles[index].position=(params.emitterWM*vec4<f32>(newPosition,1.)).xyz;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=direction;
#endif
#else
#ifdef LOCAL
let initial : vec3<f32>=newDirection;
#else 
let initial : vec3<f32>=(params.emitterWM*vec4<f32>(newDirection,0.)).xyz;
#endif
particlesOut.particles[index].direction=initial*power;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=initial;
#endif
#endif
#ifdef ANIMATESHEET 
particlesOut.particles[index].cellIndex=params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
particlesOut.particles[index].cellStartOffset=randoms.a*outLife;
#endif 
#endif
#ifdef NOISE
particlesOut.particles[index].noiseCoordinates1=particlesIn.particles[index].noiseCoordinates1;particlesOut.particles[index].noiseCoordinates2=particlesIn.particles[index].noiseCoordinates2;
#endif
} else {var directionScale : f32=timeDelta;particlesOut.particles[index].age=newAge;let ageGradient : f32=newAge/life;
#ifdef VELOCITYGRADIENTS
let velocityGradientRange=textureSampleLevel(velocityGradientTexture,velocityGradientSampler,vec2<f32>(ageGradient,0.),0.).rg;directionScale=directionScale*(velocityGradientRange.x+(velocityGradientRange.y-velocityGradientRange.x)*seed.w);
#endif
#ifdef DRAGGRADIENTS
let dragGradientRange=textureSampleLevel(dragGradientTexture,dragGradientSampler,vec2<f32>(ageGradient,0.),0.).rg;directionScale=directionScale*(1.0-(dragGradientRange.x+(dragGradientRange.y-dragGradientRange.x)*seed.x));
#endif
let position : vec3<f32>=particlesIn.particles[index].position;
#if defined(CUSTOMEMITTER)
particlesOut.particles[index].position=position+(direction-position)*ageGradient; 
particlesOut.particles[index].initialPosition=particlesIn.particles[index].initialPosition;
#else
particlesOut.particles[index].position=position+direction*directionScale;
#endif
particlesOut.particles[index].life=life;particlesOut.particles[index].seed=seed;
#ifndef COLORGRADIENTS 
particlesOut.particles[index].color=particlesIn.particles[index].color;
#endif
#ifdef SIZEGRADIENTS
let sizeGradientRange=textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(ageGradient,0.),0.).rg;particlesOut.particles[index].size=vec3<f32>(
sizeGradientRange.x+(sizeGradientRange.y-sizeGradientRange.x)*seed.y,
particlesIn.particles[index].size.yz);
#else
particlesOut.particles[index].size=particlesIn.particles[index].size;
#endif 
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=particlesIn.particles[index].initialDirection;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#else
var updatedDirection : vec3<f32>=direction+params.gravity*timeDelta;
#ifdef FLOWMAP
var clipSpace=(params.flowMapProjection*vec4f(position,1.));var ndcSpace=clipSpace.xyz/clipSpace.w;var flowMapUV=ndcSpace.xy*0.5+0.5;var flowMapValue=textureSampleLevel(flowMapTexture,flowMapSampler,flowMapUV,0.);var flowMapDirection=(flowMapValue.xyz*2.0-1.0)*flowMapValue.w;updatedDirection+=flowMapDirection*timeDelta*params.flowMapStrength;
#endif
#ifdef LIMITVELOCITYGRADIENTS
let limitVelocityRange=textureSampleLevel(limitVelocityGradientTexture,limitVelocityGradientSampler,vec2<f32>(ageGradient,0.),0.).rg;let limitVelocity : f32=limitVelocityRange.x+(limitVelocityRange.y-limitVelocityRange.x)*seed.y;let currentVelocity : f32=length(updatedDirection);if (currentVelocity>limitVelocity) {updatedDirection=updatedDirection*params.limitVelocityDamping;}
#endif
#ifdef ATTRACTORS
{for (var i : i32=0; i<params.attractorCount; i=i+1) {let toAttractor : vec3<f32>=params.attractorPositionAndStrength[i].xyz-position;let distSq : f32=dot(toAttractor,toAttractor)+1.0;updatedDirection=updatedDirection+(params.attractorPositionAndStrength[i].w/distSq)*normalize(toAttractor)*timeDelta;}}
#endif
particlesOut.particles[index].direction=updatedDirection;
#ifdef NOISE
let noiseCoordinates1 : vec3<f32>=particlesIn.particles[index].noiseCoordinates1;let noiseCoordinates2 : vec3<f32>=particlesIn.particles[index].noiseCoordinates2;let fetchedR : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.x,noiseCoordinates1.y)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let fetchedG : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.z,noiseCoordinates2.x)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let fetchedB : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates2.y,noiseCoordinates2.z)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let force : vec3<f32>=vec3<f32>(-1.+2.*fetchedR,-1.+2.*fetchedG,-1.+2.*fetchedB)*params.noiseStrength;particlesOut.particles[index].direction=particlesOut.particles[index].direction+force*timeDelta;particlesOut.particles[index].noiseCoordinates1=noiseCoordinates1;particlesOut.particles[index].noiseCoordinates2=noiseCoordinates2;
#endif 
#endif 
#ifdef ANGULARSPEEDGRADIENTS
let angularSpeedRange=textureSampleLevel(angularSpeedGradientTexture,angularSpeedGradientSampler,vec2<f32>(ageGradient,0.),0.).rg;let angularSpeed : f32=angularSpeedRange.x+(angularSpeedRange.y-angularSpeedRange.x)*seed.z;particlesOut.particles[index].angle=particlesIn.particles[index].angle+angularSpeed*timeDelta;
#else
let angle : vec2<f32>=particlesIn.particles[index].angle;particlesOut.particles[index].angle=vec2<f32>(angle.x+angle.y*timeDelta,angle.y);
#endif
#ifdef ANIMATESHEET 
var offsetAge : f32=particlesOut.particles[index].age;let dist : f32=params.cellInfos.y-params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
let cellStartOffset : f32=particlesIn.particles[index].cellStartOffset;particlesOut.particles[index].cellStartOffset=cellStartOffset;offsetAge=offsetAge+cellStartOffset;
#else
let cellStartOffset : f32=0.;
#endif 
var ratio : f32;if (params.cellInfos.w==1.0) {ratio=clamp(((cellStartOffset+params.cellInfos.z*offsetAge) % life)/life,0.,1.0);}
else {ratio=clamp((cellStartOffset+params.cellInfos.z*offsetAge)/life,0.,1.0);}
particlesOut.particles[index].cellIndex=f32(i32(params.cellInfos.x+ratio*dist));
#endif
}}
`;r.ShadersStoreWGSL[U]||(r.ShadersStoreWGSL[U]=he),me();var W=!1;function G(){W||(W=!0,i.prototype.createTransformFeedback=function(){let e=this._gl.createTransformFeedback();if(!e)throw Error(`Unable to create Transform Feedback`);return e},i.prototype.deleteTransformFeedback=function(e){this._gl.deleteTransformFeedback(e)},i.prototype.bindTransformFeedback=function(e){this._gl.bindTransformFeedback(this._gl.TRANSFORM_FEEDBACK,e)},i.prototype.beginTransformFeedback=function(e=!0){this._gl.beginTransformFeedback(e?this._gl.POINTS:this._gl.TRIANGLES)},i.prototype.endTransformFeedback=function(){this._gl.endTransformFeedback()},i.prototype.setTranformFeedbackVaryings=function(e,t){this._gl.transformFeedbackVaryings(e,t,this._gl.INTERLEAVED_ATTRIBS)},i.prototype.bindTransformFeedbackBuffer=function(e){this._gl.bindBufferBase(this._gl.TRANSFORM_FEEDBACK_BUFFER,0,e?e.underlyingResource:null)},i.prototype.readTransformFeedbackBuffer=function(e){this._gl.getBufferSubData(this._gl.TRANSFORM_FEEDBACK_BUFFER,0,e)})}var ge=class{constructor(e,t){this._renderVAO=[],this._updateVAO=[],this.alignDataInBuffer=!1,G(),this._parent=e,this._engine=t,this._updateEffectOptions={attributes:[`position`,`initialPosition`,`age`,`life`,`seed`,`size`,`color`,`direction`,`initialDirection`,`angle`,`cellIndex`,`cellStartOffset`,`noiseCoordinates1`,`noiseCoordinates2`],uniformsNames:`currentCount.timeDelta.emitterWM.lifeTime.color1.color2.sizeRange.scaleRange.gravity.emitPower.direction1.direction2.minEmitBox.maxEmitBox.radius.directionRandomizer.height.coneAngle.stopFactor.emitIndex.emitCount.angleRange.radiusRange.cellInfos.noiseStrength.limitVelocityDamping.flowMapProjection.flowMapStrength`.split(`.`),uniformBuffersNames:[],samplers:[`randomSampler`,`randomSampler2`,`sizeGradientSampler`,`angularSpeedGradientSampler`,`velocityGradientSampler`,`limitVelocityGradientSampler`,`noiseSampler`,`dragGradientSampler`,`flowMapSampler`,`meshPositionSampler`,`meshNormalSampler`],defines:``,fallbacks:null,onCompiled:null,onError:null,indexParameters:null,maxSimultaneousLights:0,transformFeedbackVaryings:[]},this._baseUniformsNamesLength=this._updateEffectOptions.uniformsNames.length}contextLost(){this._updateEffect=void 0,this._renderVAO.length=0,this._updateVAO.length=0}isUpdateBufferCreated(){return!!this._updateEffect}isUpdateBufferReady(){return this._updateEffect?.isReady()??!1}createUpdateBuffer(e){if(this._updateEffectOptions.uniformsNames.length=this._baseUniformsNamesLength,this._updateEffectOptions.transformFeedbackVaryings=[`outPosition`],this._updateEffectOptions.transformFeedbackVaryings.push(`outAge`),this._updateEffectOptions.transformFeedbackVaryings.push(`outSize`),this._updateEffectOptions.transformFeedbackVaryings.push(`outLife`),this._updateEffectOptions.transformFeedbackVaryings.push(`outSeed`),this._updateEffectOptions.transformFeedbackVaryings.push(`outDirection`),this._parent.particleEmitterType instanceof c&&this._updateEffectOptions.transformFeedbackVaryings.push(`outInitialPosition`),this._parent._colorGradientsTexture||this._updateEffectOptions.transformFeedbackVaryings.push(`outColor`),this._parent._needsInitialDirection&&this._updateEffectOptions.transformFeedbackVaryings.push(`outInitialDirection`),this._parent.noiseTexture&&(this._updateEffectOptions.transformFeedbackVaryings.push(`outNoiseCoordinates1`),this._updateEffectOptions.transformFeedbackVaryings.push(`outNoiseCoordinates2`)),this._updateEffectOptions.transformFeedbackVaryings.push(`outAngle`),this._parent.isAnimationSheetEnabled&&(this._updateEffectOptions.transformFeedbackVaryings.push(`outCellIndex`),this._parent.spriteRandomStartCell&&this._updateEffectOptions.transformFeedbackVaryings.push(`outCellStartOffset`)),this._updateEffectOptions.defines=e,e.indexOf(`ATTRACTORS`)!==-1){this._updateEffectOptions.uniformsNames.push(`attractorCount`);for(let e=0;e<this._parent.maxAttractors;e++)this._updateEffectOptions.uniformsNames.push(`attractorPositionAndStrength[`+e+`]`)}return e.indexOf(`STARTSIZEGRADIENTS`)!==-1&&this._updateEffectOptions.uniformsNames.push(`startSizeGradientFactor`),e.indexOf(`LIFETIMEGRADIENTS`)!==-1&&this._updateEffectOptions.uniformsNames.push(`lifeTimeGradientRange`),e.indexOf(`MESHEMITTER`)!==-1&&(this._updateEffectOptions.uniformsNames.push(`meshTriangleCount`),this._updateEffectOptions.uniformsNames.push(`meshTextureWidth`)),this._updateEffect=this._engine.createEffect(`gpuUpdateParticles`,this._updateEffectOptions,this._engine),new V(this._updateEffect)}createVertexBuffers(e,t){this._updateVAO.push(this._createUpdateVAO(e)),this._renderVAO.push(this._engine.recordVertexArrayObject(t,null,this._parent._getWrapper(this._parent.blendMode).effect)),this._engine.bindArrayBuffer(null),this._renderVertexBuffers=t}createParticleBuffer(e){return e}bindDrawBuffers(e,t,n){n?this._engine.bindBuffers(this._renderVertexBuffers,n,t):this._engine.bindVertexArrayObject(this._renderVAO[e],null)}preUpdateParticleBuffer(){let e=this._engine;if(this._engine.enableEffect(this._updateEffect),!e.setState)throw Error(`GPU particles cannot work without a full Engine. ThinEngine is not supported`)}updateParticleBuffer(e,t,n){this._updateEffect.setTexture(`randomSampler`,this._parent._randomTexture),this._updateEffect.setTexture(`randomSampler2`,this._parent._randomTexture2),this._parent._flowMap&&this._updateEffect.setTexture(`flowMapSampler`,this._parent._flowMap),this._parent._sizeGradientsTexture&&this._updateEffect.setTexture(`sizeGradientSampler`,this._parent._sizeGradientsTexture),this._parent._angularSpeedGradientsTexture&&this._updateEffect.setTexture(`angularSpeedGradientSampler`,this._parent._angularSpeedGradientsTexture),this._parent._velocityGradientsTexture&&this._updateEffect.setTexture(`velocityGradientSampler`,this._parent._velocityGradientsTexture),this._parent._limitVelocityGradientsTexture&&this._updateEffect.setTexture(`limitVelocityGradientSampler`,this._parent._limitVelocityGradientsTexture),this._parent._dragGradientsTexture&&this._updateEffect.setTexture(`dragGradientSampler`,this._parent._dragGradientsTexture),this._parent.noiseTexture&&this._updateEffect.setTexture(`noiseSampler`,this._parent.noiseTexture),this._parent._meshPositionTexture&&this._updateEffect.setTexture(`meshPositionSampler`,this._parent._meshPositionTexture),this._parent._meshNormalTexture&&this._updateEffect.setTexture(`meshNormalSampler`,this._parent._meshNormalTexture),this._engine.bindVertexArrayObject(this._updateVAO[e],null);let r=this._engine;r.bindTransformFeedbackBuffer(t.getBuffer()),r.setRasterizerState(!1),r.beginTransformFeedback(!0),r.drawArraysType(3,0,n),r.endTransformFeedback(),r.setRasterizerState(!0),r.bindTransformFeedbackBuffer(null)}releaseBuffers(){}releaseVertexBuffers(){for(let e=0;e<this._updateVAO.length;e++)this._engine.releaseVertexArrayObject(this._updateVAO[e]);this._updateVAO.length=0;for(let e=0;e<this._renderVAO.length;e++)this._engine.releaseVertexArrayObject(this._renderVAO[e]);this._renderVAO.length=0}_createUpdateVAO(e){let t={};t.position=e.createVertexBuffer(`position`,0,3);let n=3;t.age=e.createVertexBuffer(`age`,n,1),n+=1,t.size=e.createVertexBuffer(`size`,n,3),n+=3,t.life=e.createVertexBuffer(`life`,n,1),n+=1,t.seed=e.createVertexBuffer(`seed`,n,4),n+=4,t.direction=e.createVertexBuffer(`direction`,n,3),n+=3,this._parent.particleEmitterType instanceof c&&(t.initialPosition=e.createVertexBuffer(`initialPosition`,n,3),n+=3),this._parent._colorGradientsTexture||(t.color=e.createVertexBuffer(`color`,n,4),n+=4),this._parent._needsInitialDirection&&(t.initialDirection=e.createVertexBuffer(`initialDirection`,n,3),n+=3),this._parent.noiseTexture&&(t.noiseCoordinates1=e.createVertexBuffer(`noiseCoordinates1`,n,3),n+=3,t.noiseCoordinates2=e.createVertexBuffer(`noiseCoordinates2`,n,3),n+=3),this._parent._angularSpeedGradientsTexture?(t.angle=e.createVertexBuffer(`angle`,n,1),n+=1):(t.angle=e.createVertexBuffer(`angle`,n,2),n+=2),this._parent._isAnimationSheetEnabled&&(t.cellIndex=e.createVertexBuffer(`cellIndex`,n,1),n+=1,this._parent.spriteRandomStartCell&&(t.cellStartOffset=e.createVertexBuffer(`cellStartOffset`,n,1)));let r=this._engine.recordVertexArrayObject(t,null,this._updateEffect);return this._engine.bindArrayBuffer(null),r}},K=!1;function _e(){K||(K=!0,m(`BABYLON.WebGL2ParticleSystem`,ge))}var q=`gpuUpdateParticlesPixelShader`,ve=`#version 300 es
void main() {discard;}
`;r.ShadersStore[q]||(r.ShadersStore[q]=ve);var J=`gpuUpdateParticlesVertexShader`,ye=`#version 300 es
#define PI 3.14159
uniform float currentCount;uniform float timeDelta;uniform float stopFactor;uniform float emitIndex;uniform float emitCount;
#ifndef LOCAL
uniform mat4 emitterWM;
#endif
uniform vec2 lifeTime;uniform vec2 emitPower;uniform vec2 sizeRange;uniform vec4 scaleRange;
#ifdef FLOWMAP
uniform mat4 flowMapProjection;uniform float flowMapStrength;uniform sampler2D flowMapSampler;
#endif
#ifndef COLORGRADIENTS
uniform vec4 color1;uniform vec4 color2;
#endif
uniform vec3 gravity;uniform sampler2D randomSampler;uniform sampler2D randomSampler2;uniform vec4 angleRange;
#ifdef BOXEMITTER
uniform vec3 direction1;uniform vec3 direction2;uniform vec3 minEmitBox;uniform vec3 maxEmitBox;
#endif
#ifdef POINTEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#endif
#ifdef HEMISPHERICEMITTER
uniform float radius;uniform float radiusRange;uniform float directionRandomizer;
#endif
#ifdef SPHEREEMITTER
uniform float radius;uniform float radiusRange;
#ifdef DIRECTEDSPHEREEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
#ifdef CYLINDEREMITTER
uniform float radius;uniform float height;uniform float radiusRange;
#ifdef DIRECTEDCYLINDEREMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
#ifdef CONEEMITTER
uniform vec2 radius;uniform float coneAngle;uniform vec2 height;
#ifdef DIRECTEDCONEEMITTER
uniform vec3 direction1;uniform vec3 direction2;
#else
uniform float directionRandomizer;
#endif
#endif
in vec3 position;
#ifdef CUSTOMEMITTER
in vec3 initialPosition;
#endif
in float age;in float life;in vec4 seed;in vec3 size;
#ifndef COLORGRADIENTS
in vec4 color;
#endif
in vec3 direction;
#ifndef BILLBOARD
in vec3 initialDirection;
#endif
#ifdef ANGULARSPEEDGRADIENTS
in float angle;
#else
in vec2 angle;
#endif
#ifdef ANIMATESHEET
in float cellIndex;
#ifdef ANIMATESHEETRANDOMSTART
in float cellStartOffset;
#endif
#endif
#ifdef NOISE
in vec3 noiseCoordinates1;in vec3 noiseCoordinates2;
#endif
out vec3 outPosition;
#ifdef CUSTOMEMITTER
out vec3 outInitialPosition;
#endif
out float outAge;out float outLife;out vec4 outSeed;out vec3 outSize;
#ifndef COLORGRADIENTS
out vec4 outColor;
#endif
out vec3 outDirection;
#ifndef BILLBOARD
out vec3 outInitialDirection;
#endif
#ifdef ANGULARSPEEDGRADIENTS
out float outAngle;
#else
out vec2 outAngle;
#endif
#ifdef ANIMATESHEET
out float outCellIndex;
#ifdef ANIMATESHEETRANDOMSTART
out float outCellStartOffset;
#endif
#endif
#ifdef NOISE
out vec3 outNoiseCoordinates1;out vec3 outNoiseCoordinates2;
#endif
#ifdef SIZEGRADIENTS
uniform sampler2D sizeGradientSampler;
#endif 
#ifdef ANGULARSPEEDGRADIENTS
uniform sampler2D angularSpeedGradientSampler;
#endif 
#ifdef VELOCITYGRADIENTS
uniform sampler2D velocityGradientSampler;
#endif
#ifdef LIMITVELOCITYGRADIENTS
uniform sampler2D limitVelocityGradientSampler;uniform float limitVelocityDamping;
#endif
#ifdef DRAGGRADIENTS
uniform sampler2D dragGradientSampler;
#endif
#ifdef NOISE
uniform vec3 noiseStrength;uniform sampler2D noiseSampler;
#endif
#ifdef ANIMATESHEET
uniform vec4 cellInfos;
#endif
#ifdef ATTRACTORS
uniform int attractorCount;uniform vec4 attractorPositionAndStrength[MAX_ATTRACTORS];
#endif
#ifdef STARTSIZEGRADIENTS
uniform float startSizeGradientFactor;
#endif
#ifdef LIFETIMEGRADIENTS
uniform vec2 lifeTimeGradientRange;
#endif
#ifdef MESHEMITTER
uniform sampler2D meshPositionSampler;uniform int meshTriangleCount;uniform int meshTextureWidth;uniform vec3 direction1;uniform vec3 direction2;
#ifdef MESHNORMALS
uniform sampler2D meshNormalSampler;
#endif
#endif
vec3 getRandomVec3(float offset) {return texture(randomSampler2,vec2(float(gl_VertexID)*offset/currentCount,0)).rgb;}
vec4 getRandomVec4(float offset) {return texture(randomSampler,vec2(float(gl_VertexID)*offset/currentCount,0));}
void main() {float newAge=age+timeDelta;
#ifdef EMITRATECTRL
float particleIndex=float(gl_VertexID);float offsetFromEmitIndex=particleIndex-emitIndex;if (offsetFromEmitIndex<0.0) {offsetFromEmitIndex+=currentCount; }
bool shouldEmit=offsetFromEmitIndex<emitCount && stopFactor != 0.;
#else
bool shouldEmit=newAge>=life && stopFactor != 0.;
#endif
if (shouldEmit) {vec3 newPosition;vec3 newDirection;vec4 randoms=getRandomVec4(seed.x);outLife=lifeTime.x+(lifeTime.y-lifeTime.x)*randoms.r;
#ifdef LIFETIMEGRADIENTS
outLife=lifeTimeGradientRange.x+(lifeTimeGradientRange.y-lifeTimeGradientRange.x)*randoms.r;
#endif
#ifdef EMITRATECTRL
outAge=0.0;
#else
outAge=newAge-life;
#endif
outSeed=seed;
#ifdef SIZEGRADIENTS 
vec2 sizeGradientRange=texture(sizeGradientSampler,vec2(0,0)).rg;outSize.x=sizeGradientRange.x+(sizeGradientRange.y-sizeGradientRange.x)*seed.y;
#else
outSize.x=sizeRange.x+(sizeRange.y-sizeRange.x)*randoms.g;
#endif
outSize.y=scaleRange.x+(scaleRange.y-scaleRange.x)*randoms.b;outSize.z=scaleRange.z+(scaleRange.w-scaleRange.z)*randoms.a; 
#ifdef STARTSIZEGRADIENTS
outSize.x*=startSizeGradientFactor;
#endif
#ifndef COLORGRADIENTS
outColor=color1+(color2-color1)*randoms.b;
#endif
#ifndef ANGULARSPEEDGRADIENTS 
outAngle.y=angleRange.x+(angleRange.y-angleRange.x)*randoms.a;outAngle.x=angleRange.z+(angleRange.w-angleRange.z)*randoms.r;
#else
outAngle=angleRange.z+(angleRange.w-angleRange.z)*randoms.r;
#endif 
#ifdef POINTEMITTER
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);newPosition=vec3(0,0,0);newDirection=direction1+(direction2-direction1)*randoms3;
#elif defined(BOXEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);newPosition=minEmitBox+(maxEmitBox-minEmitBox)*randoms2;newDirection=direction1+(direction2-direction1)*randoms3; 
#elif defined(HEMISPHERICEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float phi=2.0*PI*randoms2.x;float theta=acos(2.0*randoms2.y-1.0);float randX=cos(phi)*sin(theta);float randY=cos(theta);float randZ=sin(phi)*sin(theta);newPosition=(radius-(radius*radiusRange*randoms2.z))*vec3(randX,abs(randY),randZ);newDirection=newPosition+directionRandomizer*randoms3; 
#elif defined(SPHEREEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float phi=2.0*PI*randoms2.x;float theta=acos(2.0*randoms2.y-1.0);float randX=cos(phi)*sin(theta);float randY=cos(theta);float randZ=sin(phi)*sin(theta);newPosition=(radius-(radius*radiusRange*randoms2.z))*vec3(randX,randY,randZ);
#ifdef DIRECTEDSPHEREEMITTER
newDirection=direction1+(direction2-direction1)*randoms3;
#else
newDirection=normalize(newPosition+directionRandomizer*randoms3);
#endif
#elif defined(CYLINDEREMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);float yPos=(randoms2.x-0.5)*height;float angle=randoms2.y*PI*2.;float inverseRadiusRangeSquared=((1.-radiusRange)*(1.-radiusRange));float positionRadius=radius*sqrt(inverseRadiusRangeSquared+(randoms2.z*(1.-inverseRadiusRangeSquared)));float xPos=positionRadius*cos(angle);float zPos=positionRadius*sin(angle);newPosition=vec3(xPos,yPos,zPos);
#ifdef DIRECTEDCYLINDEREMITTER
newDirection=direction1+(direction2-direction1)*randoms3;
#else
angle=angle+((randoms3.x-0.5)*PI)*directionRandomizer;newDirection=vec3(cos(angle),(randoms3.y-0.5)*directionRandomizer,sin(angle));newDirection=normalize(newDirection);
#endif
#elif defined(CONEEMITTER)
vec3 randoms2=getRandomVec3(seed.y);float s=2.0*PI*randoms2.x;
#ifdef CONEEMITTERSPAWNPOINT
float h=0.0001;
#else
float h=randoms2.y*height.y;h=1.-h*h; 
#endif
float lRadius=radius.x-radius.x*randoms2.z*radius.y;lRadius=lRadius*h;float randX=lRadius*sin(s);float randZ=lRadius*cos(s);float randY=h *height.x;newPosition=vec3(randX,randY,randZ); 
vec3 randoms3=getRandomVec3(seed.z);
#ifdef DIRECTEDCONEEMITTER
newDirection=direction1+(direction2-direction1)*randoms3;
#else
if (abs(cos(coneAngle))==1.0) {newDirection=vec3(0.,1.0,0.);} else {newDirection=normalize(newPosition+directionRandomizer*randoms3); }
#endif
#elif defined(MESHEMITTER)
vec3 randoms2=getRandomVec3(seed.y);vec3 randoms3=getRandomVec3(seed.z);int triIdx=int(floor(randoms2.x*float(meshTriangleCount)));triIdx=min(triIdx,meshTriangleCount-1);int baseTexel=triIdx*3;int t0=baseTexel;int t1=baseTexel+1;int t2=baseTexel+2;vec3 v0=texelFetch(meshPositionSampler,ivec2(t0 % meshTextureWidth,t0/meshTextureWidth),0).xyz;vec3 v1=texelFetch(meshPositionSampler,ivec2(t1 % meshTextureWidth,t1/meshTextureWidth),0).xyz;vec3 v2=texelFetch(meshPositionSampler,ivec2(t2 % meshTextureWidth,t2/meshTextureWidth),0).xyz;float bu=randoms2.y;float bv=randoms2.z*(1.0-bu);float bw=1.0-bu-bv;newPosition=bu*v0+bv*v1+bw*v2;
#ifdef MESHNORMALS
vec3 n0=texelFetch(meshNormalSampler,ivec2(t0 % meshTextureWidth,t0/meshTextureWidth),0).xyz;vec3 n1=texelFetch(meshNormalSampler,ivec2(t1 % meshTextureWidth,t1/meshTextureWidth),0).xyz;vec3 n2=texelFetch(meshNormalSampler,ivec2(t2 % meshTextureWidth,t2/meshTextureWidth),0).xyz;newDirection=normalize(bu*n0+bv*n1+bw*n2);
#else
newDirection=direction1+(direction2-direction1)*randoms3;
#endif
#elif defined(CUSTOMEMITTER)
newPosition=initialPosition;outInitialPosition=initialPosition;
#else 
newPosition=vec3(0.,0.,0.);newDirection=2.0*(getRandomVec3(seed.w)-vec3(0.5,0.5,0.5));
#endif
float power=emitPower.x+(emitPower.y-emitPower.x)*randoms.a;
#ifdef LOCAL
outPosition=newPosition;
#else
outPosition=(emitterWM*vec4(newPosition,1.)).xyz;
#endif
#ifdef CUSTOMEMITTER
outDirection=direction;
#ifndef BILLBOARD 
outInitialDirection=direction;
#endif
#else
#ifdef LOCAL
vec3 initial=newDirection;
#else 
vec3 initial=(emitterWM*vec4(newDirection,0.)).xyz;
#endif
outDirection=initial*power;
#ifndef BILLBOARD 
outInitialDirection=initial;
#endif
#endif
#ifdef ANIMATESHEET 
outCellIndex=cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
outCellStartOffset=randoms.a*outLife;
#endif 
#endif
#ifdef NOISE
outNoiseCoordinates1=noiseCoordinates1;outNoiseCoordinates2=noiseCoordinates2;
#endif
} else {float directionScale=timeDelta;outAge=newAge;float ageGradient=newAge/life;
#ifdef VELOCITYGRADIENTS
vec2 velocityGradientRange=texture(velocityGradientSampler,vec2(ageGradient,0)).rg;directionScale*=velocityGradientRange.x+(velocityGradientRange.y-velocityGradientRange.x)*seed.w;
#endif
#ifdef DRAGGRADIENTS
vec2 dragGradientRange=texture(dragGradientSampler,vec2(ageGradient,0)).rg;directionScale*=1.0-(dragGradientRange.x+(dragGradientRange.y-dragGradientRange.x)*seed.x);
#endif
#if defined(CUSTOMEMITTER)
outPosition=position+(direction-position)*ageGradient; 
outInitialPosition=initialPosition;
#else
outPosition=position+direction*directionScale;
#endif
outLife=life;outSeed=seed;
#ifndef COLORGRADIENTS 
outColor=color;
#endif
#ifdef SIZEGRADIENTS
vec2 sizeGradientRange=texture(sizeGradientSampler,vec2(ageGradient,0)).rg;outSize.x=sizeGradientRange.x+(sizeGradientRange.y-sizeGradientRange.x)*seed.y;outSize.yz=size.yz;
#else
outSize=size;
#endif 
#ifndef BILLBOARD 
outInitialDirection=initialDirection;
#endif
#ifdef CUSTOMEMITTER
outDirection=direction;
#else
vec3 updatedDirection=direction+gravity*timeDelta;
#ifdef FLOWMAP
vec4 clipSpace=(flowMapProjection*vec4(position,1.));vec3 ndcSpace=clipSpace.xyz/clipSpace.w;vec2 flowMapUV=ndcSpace.xy*0.5+0.5;vec4 flowMapValue=texture(flowMapSampler,flowMapUV);vec3 flowMapDirection=(flowMapValue.xyz*2.0-1.0)*flowMapValue.w;updatedDirection+=flowMapDirection*timeDelta*flowMapStrength;
#endif
#ifdef LIMITVELOCITYGRADIENTS
vec2 limitVelocityRange=texture(limitVelocityGradientSampler,vec2(ageGradient,0)).rg;float limitVelocity=limitVelocityRange.x+(limitVelocityRange.y-limitVelocityRange.x)*seed.y;float currentVelocity=length(updatedDirection);if (currentVelocity>limitVelocity) {updatedDirection=updatedDirection*limitVelocityDamping;}
#endif
#ifdef ATTRACTORS
{for (int i=0; i<attractorCount; i++) {vec3 toAttractor=attractorPositionAndStrength[i].xyz-outPosition;float distSq=dot(toAttractor,toAttractor)+1.0;updatedDirection+=(attractorPositionAndStrength[i].w/distSq)*normalize(toAttractor)*timeDelta;}}
#endif
outDirection=updatedDirection;
#ifdef NOISE
float fetchedR=texture(noiseSampler,vec2(noiseCoordinates1.x,noiseCoordinates1.y)*vec2(0.5)+vec2(0.5)).r;float fetchedG=texture(noiseSampler,vec2(noiseCoordinates1.z,noiseCoordinates2.x)*vec2(0.5)+vec2(0.5)).r;float fetchedB=texture(noiseSampler,vec2(noiseCoordinates2.y,noiseCoordinates2.z)*vec2(0.5)+vec2(0.5)).r;vec3 force=vec3(2.*fetchedR-1.,2.*fetchedG-1.,2.*fetchedB-1.)*noiseStrength;outDirection=outDirection+force*timeDelta;outNoiseCoordinates1=noiseCoordinates1;outNoiseCoordinates2=noiseCoordinates2;
#endif 
#endif 
#ifdef ANGULARSPEEDGRADIENTS
vec2 angularSpeedRange=texture(angularSpeedGradientSampler,vec2(ageGradient,0)).rg;float angularSpeed=angularSpeedRange.x+(angularSpeedRange.y-angularSpeedRange.x)*seed.z;outAngle=angle+angularSpeed*timeDelta;
#else
outAngle=vec2(angle.x+angle.y*timeDelta,angle.y);
#endif
#ifdef ANIMATESHEET 
float offsetAge=outAge;float dist=cellInfos.y-cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
outCellStartOffset=cellStartOffset;offsetAge+=cellStartOffset;
#else
float cellStartOffset=0.;
#endif 
float ratio=0.;if (cellInfos.w==1.0) {ratio=clamp(mod(cellStartOffset+cellInfos.z*offsetAge,life)/life,0.,1.0);}
else {ratio=clamp(cellStartOffset+cellInfos.z*offsetAge/life,0.,1.0);}
outCellIndex=float(int(cellInfos.x+ratio*dist));
#endif
}}`;r.ShadersStore[J]||(r.ShadersStore[J]=ye),_e();var be=class{get animationStarted(){return this._animationStarted}get fromIndex(){return this._fromIndex}get toIndex(){return this._toIndex}get loopAnimation(){return this._loopAnimation}get delay(){return Math.max(this._delay,1)}constructor(){this.width=1,this.height=1,this.angle=0,this.invertU=!1,this.invertV=!1,this.isVisible=!0,this._animationStarted=!1,this._loopAnimation=!1,this._fromIndex=0,this._toIndex=0,this._delay=0,this._direction=1,this._time=0,this._onBaseAnimationEnd=null,this.position={x:1,y:1,z:1},this.color={r:1,g:1,b:1,a:1}}playAnimation(e,t,n,r,i){this._fromIndex=e,this._toIndex=t,this._loopAnimation=n,this._delay=r||1,this._animationStarted=!0,this._onBaseAnimationEnd=i,e<t?this._direction=1:(this._direction=-1,this._toIndex=e,this._fromIndex=t),this.cellIndex=e,this._time=0}stopAnimation(){this._animationStarted=!1}_animate(e){this._animationStarted&&(this._time+=e,this._time>this._delay&&(this._time%=this._delay,this.cellIndex+=this._direction,(this._direction>0&&this.cellIndex>this._toIndex||this._direction<0&&this.cellIndex<this._fromIndex)&&(this._loopAnimation?this.cellIndex=this._direction>0?this._fromIndex:this._toIndex:(this.cellIndex=this._direction>0?this._toIndex:this._fromIndex,this._animationStarted=!1,this._onBaseAnimationEnd&&this._onBaseAnimationEnd()))))}},Y=class t extends be{get size(){return this.width}set size(e){this.width=e,this.height=e}get manager(){return this._manager}constructor(t,n){super(),this.name=t,this.animations=[],this.isPickable=!1,this.useAlphaForPicking=!1,this.onDisposeObservable=new e,this._onAnimationEnd=null,this._endAnimation=()=>{this._onAnimationEnd&&this._onAnimationEnd(),this.disposeWhenFinishedAnimating&&this.dispose()},this.color=new h(1,1,1,1),this.position=f.Zero(),this._manager=n,this._manager.sprites.push(this),this.uniqueId=this._manager.scene.getUniqueId()}getClassName(){return`Sprite`}get fromIndex(){return this._fromIndex}set fromIndex(e){this.playAnimation(e,this._toIndex,this._loopAnimation,this._delay,this._onAnimationEnd)}get toIndex(){return this._toIndex}set toIndex(e){this.playAnimation(this._fromIndex,e,this._loopAnimation,this._delay,this._onAnimationEnd)}get loopAnimation(){return this._loopAnimation}set loopAnimation(e){this.playAnimation(this._fromIndex,this._toIndex,e,this._delay,this._onAnimationEnd)}get delay(){return Math.max(this._delay,1)}set delay(e){this.playAnimation(this._fromIndex,this._toIndex,this._loopAnimation,e,this._onAnimationEnd)}playAnimation(e,t,n,r,i=null){this._onAnimationEnd=i,super.playAnimation(e,t,n,r,this._endAnimation)}dispose(){for(let e=0;e<this._manager.sprites.length;e++)this._manager.sprites[e]==this&&this._manager.sprites.splice(e,1);this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear()}serialize(){let e={};return e.name=this.name,e.position=this.position.asArray(),e.color=this.color.asArray(),e.width=this.width,e.height=this.height,e.angle=this.angle,e.cellIndex=this.cellIndex,e.cellRef=this.cellRef,e.invertU=this.invertU,e.invertV=this.invertV,e.disposeWhenFinishedAnimating=this.disposeWhenFinishedAnimating,e.isPickable=this.isPickable,e.isVisible=this.isVisible,e.useAlphaForPicking=this.useAlphaForPicking,e.animationStarted=this.animationStarted,e.fromIndex=this.fromIndex,e.toIndex=this.toIndex,e.loopAnimation=this.loopAnimation,e.delay=this.delay,e}static Parse(e,n){let r=new t(e.name,n);return r.position=f.FromArray(e.position),r.color=h.FromArray(e.color),r.width=e.width,r.height=e.height,r.angle=e.angle,r.cellIndex=e.cellIndex,r.cellRef=e.cellRef,r.invertU=e.invertU,r.invertV=e.invertV,r.disposeWhenFinishedAnimating=e.disposeWhenFinishedAnimating,r.isPickable=e.isPickable,r.isVisible=e.isVisible,r.useAlphaForPicking=e.useAlphaForPicking,r._fromIndex=e.fromIndex,r._toIndex=e.toIndex,r._loopAnimation=e.loopAnimation,r._delay=e.delay,e.animationStarted&&r.playAnimation(r.fromIndex,r.toIndex,r.loopAnimation,r.delay),r}},xe=class{constructor(t){this.name=x.NAME_SPRITE,this.scene=t,this.scene.spriteManagers=[],this.scene._tempSpritePickingRay=T?T.Zero():null,this.scene.onBeforeSpritesRenderingObservable=new e,this.scene.onAfterSpritesRenderingObservable=new e,this._spritePredicate=e=>e.actionManager?e.isPickable&&e.actionManager.hasPointerTriggers:!1}register(){this.scene._pointerMoveStage.registerStep(x.STEP_POINTERMOVE_SPRITE,this,this._pointerMove),this.scene._pointerDownStage.registerStep(x.STEP_POINTERDOWN_SPRITE,this,this._pointerDown),this.scene._pointerUpStage.registerStep(x.STEP_POINTERUP_SPRITE,this,this._pointerUp)}rebuild(){}dispose(){this.scene.onBeforeSpritesRenderingObservable.clear(),this.scene.onAfterSpritesRenderingObservable.clear();let e=this.scene.spriteManagers;if(e)for(;e.length;)e[0].dispose()}_pickSpriteButKeepRay(e,t,n,r,i){let a=this.scene.pickSprite(t,n,this._spritePredicate,r,i);return a&&(a.ray=e?e.ray:null),a}_pointerMove(e,t,n,r,i){let a=this.scene;return r?a.setPointerOverSprite(null):(n=this._pickSpriteButKeepRay(n,e,t,!1,a.cameraToUseForPointers||void 0),n&&n.hit&&n.pickedSprite?(a.setPointerOverSprite(n.pickedSprite),!a.doNotHandleCursors&&i&&(a._pointerOverSprite&&a._pointerOverSprite.actionManager&&a._pointerOverSprite.actionManager.hoverCursor?i.style.cursor=a._pointerOverSprite.actionManager.hoverCursor:i.style.cursor=a.hoverCursor)):a.setPointerOverSprite(null)),n}_pointerDown(e,t,n,r){let i=this.scene;if(i._pickedDownSprite=null,i.spriteManagers&&i.spriteManagers.length>0&&(n=i.pickSprite(e,t,this._spritePredicate,!1,i.cameraToUseForPointers||void 0),n&&n.hit&&n.pickedSprite&&n.pickedSprite.actionManager)){switch(i._pickedDownSprite=n.pickedSprite,r.button){case 0:n.pickedSprite.actionManager.processTrigger(2,s.CreateNewFromSprite(n.pickedSprite,i,r));break;case 1:n.pickedSprite.actionManager.processTrigger(4,s.CreateNewFromSprite(n.pickedSprite,i,r));break;case 2:n.pickedSprite.actionManager.processTrigger(3,s.CreateNewFromSprite(n.pickedSprite,i,r))}n.pickedSprite.actionManager&&n.pickedSprite.actionManager.processTrigger(5,s.CreateNewFromSprite(n.pickedSprite,i,r))}return n}_pointerUp(e,t,n,r,i){let a=this.scene;if(a.spriteManagers&&a.spriteManagers.length>0){let n=a.pickSprite(e,t,this._spritePredicate,!1,a.cameraToUseForPointers||void 0);n&&(n.hit&&n.pickedSprite&&n.pickedSprite.actionManager&&(n.pickedSprite.actionManager.processTrigger(7,s.CreateNewFromSprite(n.pickedSprite,a,r)),n.pickedSprite.actionManager&&(this.scene._inputManager._isPointerSwiping()||n.pickedSprite.actionManager.processTrigger(1,s.CreateNewFromSprite(n.pickedSprite,a,r)),i&&n.pickedSprite.actionManager.processTrigger(6,s.CreateNewFromSprite(n.pickedSprite,a,r)))),a._pickedDownSprite&&a._pickedDownSprite.actionManager&&a._pickedDownSprite!==n.pickedSprite&&a._pickedDownSprite.actionManager.processTrigger(16,s.CreateNewFromSprite(a._pickedDownSprite,a,r)))}return n}},X=!1;function Z(){X||(X=!0,Object.defineProperty(o.prototype,"onNewSpriteManagerAddedObservable",{get:function(){if(!this.isDisposed&&!this._onNewSpriteManagerAddedObservable){let t=this._onNewSpriteManagerAddedObservable=new e;this.onDisposeObservable.addOnce(()=>t.clear())}return this._onNewSpriteManagerAddedObservable},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"onSpriteManagerRemovedObservable",{get:function(){if(!this.isDisposed&&!this._onSpriteManagerRemovedObservable){let t=this._onSpriteManagerRemovedObservable=new e;this.onDisposeObservable.addOnce(()=>t.clear())}return this._onSpriteManagerRemovedObservable},enumerable:!0,configurable:!0}),o.prototype._internalPickSprites=function(e,t,n,r){if(!a)return null;let i=null;if(!r){if(!this.activeCamera)return null;r=this.activeCamera}if(this.spriteManagers&&this.spriteManagers.length>0)for(let a=0;a<this.spriteManagers.length;a++){let o=this.spriteManagers[a];if(!o.isPickable)continue;let s=o.intersects(e,r,t,n);if(s&&s.hit&&!(!n&&i!=null&&s.distance>=i.distance)&&(i=s,n))break}return i||new a},o.prototype._internalMultiPickSprites=function(e,t,n){if(!a)return null;let r=[];if(!n){if(!this.activeCamera)return null;n=this.activeCamera}if(this.spriteManagers&&this.spriteManagers.length>0)for(let i=0;i<this.spriteManagers.length;i++){let a=this.spriteManagers[i];if(!a.isPickable)continue;let o=a.multiIntersects(e,n,t);o!==null&&(r=r.concat(o))}return r},o.prototype.pickSprite=function(e,t,n,r,i){if(!this._tempSpritePickingRay)return null;w(this,e,t,this._tempSpritePickingRay,i);let a=this._internalPickSprites(this._tempSpritePickingRay,n,r,i);return a&&(a.ray=te(this,e,t,i)),a},o.prototype.pickSpriteWithRay=function(e,t,n,r){if(!this._tempSpritePickingRay)return null;if(!r){if(!this.activeCamera)return null;r=this.activeCamera}T.TransformToRef(e,r.getViewMatrix(),this._tempSpritePickingRay);let i=this._internalPickSprites(this._tempSpritePickingRay,t,n,r);return i&&(i.ray=e),i},o.prototype.multiPickSprite=function(e,t,n,r){return w(this,e,t,this._tempSpritePickingRay,r),this._internalMultiPickSprites(this._tempSpritePickingRay,n,r)},o.prototype.multiPickSpriteWithRay=function(e,t,n){if(!this._tempSpritePickingRay)return null;if(!n){if(!this.activeCamera)return null;n=this.activeCamera}return T.TransformToRef(e,n.getViewMatrix(),this._tempSpritePickingRay),this._internalMultiPickSprites(this._tempSpritePickingRay,t,n)},o.prototype.setPointerOverSprite=function(e){this._pointerOverSprite!==e&&(this._pointerOverSprite&&this._pointerOverSprite.actionManager&&this._pointerOverSprite.actionManager.processTrigger(10,s.CreateNewFromSprite(this._pointerOverSprite,this)),this._pointerOverSprite=e,this._pointerOverSprite&&this._pointerOverSprite.actionManager&&this._pointerOverSprite.actionManager.processTrigger(9,s.CreateNewFromSprite(this._pointerOverSprite,this)))},o.prototype.getPointerOverSprite=function(){return this._pointerOverSprite})}var Q=class e{get fogEnabled(){return this._fogEnabled}set fogEnabled(e){this._fogEnabled!==e&&(this._fogEnabled=e,this._createEffects())}get useLogarithmicDepth(){return this._useLogarithmicDepth}set useLogarithmicDepth(e){let t=!!this._scene?.getEngine().getCaps().fragmentDepthSupported;e&&!t&&n.Warn(`Logarithmic depth has been requested for a sprite renderer on a device that doesn't support it.`),this._useLogarithmicDepth=e&&t,this._createEffects()}get capacity(){return this._capacity}get pixelPerfect(){return this._pixelPerfect}set pixelPerfect(e){this._pixelPerfect!==e&&(this._pixelPerfect=e,this._createEffects())}get shaderLanguage(){return this._shaderLanguage}constructor(e,t,n=.01,r=null,i){this.blendMode=2,this.autoResetAlpha=!0,this.disableDepthWrite=!1,this._fogEnabled=!0,this._pixelPerfect=!1,this._shaderLanguage=0,this._useVAO=!1,this._useInstancing=!1,this._vertexBuffers={},this._isDisposed=!1,this._shadersLoaded=!1,this._pixelPerfect=i?.pixelPerfect??!1,this._capacity=t,this._epsilon=n,this._engine=e,this._useInstancing=e.getCaps().instancedArrays&&e._features.supportSpriteInstancing,this._useVAO=e.getCaps().vertexArrayObject&&!e.disableVertexArrayObjects,this._scene=r,this._useInstancing||this._buildIndexBuffer(),this._vertexBufferSize=this._useInstancing?16:18,this._vertexData=new Float32Array(t*this._vertexBufferSize*(this._useInstancing?1:4)),this._buffer=new u(e,this._vertexData,!0,this._vertexBufferSize);let a=this._buffer.createVertexBuffer(l.PositionKind,0,4,this._vertexBufferSize,this._useInstancing),o=this._buffer.createVertexBuffer(`options`,4,2,this._vertexBufferSize,this._useInstancing),s=6,c;if(this._useInstancing){let t=new Float32Array([this._epsilon,this._epsilon,1-this._epsilon,this._epsilon,this._epsilon,1-this._epsilon,1-this._epsilon,1-this._epsilon]);this._spriteBuffer=new u(e,t,!1,2),c=this._spriteBuffer.createVertexBuffer(`offsets`,0,2)}else c=this._buffer.createVertexBuffer(`offsets`,s,2,this._vertexBufferSize,this._useInstancing),s+=2;let d=this._buffer.createVertexBuffer(`inverts`,s,2,this._vertexBufferSize,this._useInstancing),f=this._buffer.createVertexBuffer(`cellInfo`,s+2,4,this._vertexBufferSize,this._useInstancing),p=this._buffer.createVertexBuffer(l.ColorKind,s+6,4,this._vertexBufferSize,this._useInstancing);this._vertexBuffers[l.PositionKind]=a,this._vertexBuffers.options=o,this._vertexBuffers.offsets=c,this._vertexBuffers.inverts=d,this._vertexBuffers.cellInfo=f,this._vertexBuffers[l.ColorKind]=p,this._initShaderSourceAsync()}async _initShaderSourceAsync(){this._engine.isWebGPU&&!e.ForceGLSL?(this._shaderLanguage=1,await Promise.all([g(()=>import(`./sprites.vertex-qF3PjKq1.js`),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),g(()=>import(`./sprites.fragment-WkD5-zpm.js`),__vite__mapDeps([6,7,2,4,8,9,10]),import.meta.url)])):await Promise.all([g(()=>import(`./sprites.vertex-DKBW1__N.js`),__vite__mapDeps([11,12,2,13,14,15]),import.meta.url),g(()=>import(`./sprites.fragment-KubYk2-e.js`),__vite__mapDeps([16,17,2,13,18,19,20]),import.meta.url)]),this._shadersLoaded=!0,this._createEffects()}_createEffects(){if(this._isDisposed||!this._shadersLoaded)return;this._drawWrapperBase?.dispose(),this._drawWrapperDepth?.dispose(),this._drawWrapperBase=new C(this._engine),this._drawWrapperDepth=new C(this._engine,!1),this._drawWrapperBase.drawContext&&(this._drawWrapperBase.drawContext.useInstancing=this._useInstancing),this._drawWrapperDepth.drawContext&&(this._drawWrapperDepth.drawContext.useInstancing=this._useInstancing);let e=``;this._pixelPerfect&&(e+=`#define PIXEL_PERFECT
`),this._scene&&this._scene.fogEnabled&&this._scene.fogMode!==0&&this._fogEnabled&&(e+=`#define FOG
`),this._useLogarithmicDepth&&(e+=`#define LOGARITHMICDEPTH
`),this._drawWrapperBase.effect=this._engine.createEffect(`sprites`,[l.PositionKind,`options`,`offsets`,`inverts`,`cellInfo`,l.ColorKind],[`view`,`projection`,`textureInfos`,`alphaTest`,`vFogInfos`,`vFogColor`,`logarithmicDepthConstant`],[`diffuseSampler`],e,void 0,void 0,void 0,void 0,this._shaderLanguage),this._drawWrapperDepth.effect=this._drawWrapperBase.effect,this._drawWrapperBase.effect._refCount++,this._drawWrapperDepth.materialContext=this._drawWrapperBase.materialContext}render(e,t,n,r,i=null){if(!this._shadersLoaded||!this.texture||!this.texture.isReady()||!e.length)return;let a=this._drawWrapperBase,o=this._drawWrapperDepth,s=this.fogEnabled&&this._scene&&this._scene.fogEnabled&&this._scene.fogMode!==0,c=a.effect;if(!c.isReady())return;let l=this._engine,u=!!(this._scene&&this._scene.useRightHandedSystem),d=Math.min(this._capacity,e.length),p=0,m=!0,h=this._scene?.floatingOriginOffset||f.ZeroReadOnly;for(let n=0;n<d;n++){let r=e[n];if(!r||!r.isVisible)continue;m=!1,r._animate(t);let a=this.texture.getBaseSize();this._appendSpriteVertex(p++,r,0,0,a,u,i,h),this._useInstancing||(this._appendSpriteVertex(p++,r,1,0,a,u,i,h),this._appendSpriteVertex(p++,r,1,1,a,u,i,h),this._appendSpriteVertex(p++,r,0,1,a,u,i,h))}if(m)return;this._buffer.update(this._vertexData);let g=!!l.depthCullingState.cull,v=l.depthCullingState.zOffset,y=l.depthCullingState.zOffsetUnits;if(l.setState(g,v,!1,!1,void 0,void 0,y),l.enableEffect(a),c.setTexture(`diffuseSampler`,this.texture),c.setMatrix(`view`,n),c.setMatrix(`projection`,r),s){let e=this._scene;c.setFloat4(`vFogInfos`,e.fogMode,e.fogStart,e.fogEnd,e.fogDensity),c.setColor3(`vFogColor`,e.fogColor)}this.useLogarithmicDepth&&this._scene&&_(a.defines,c,this._scene),this._useVAO?(this._vertexArrayObject||=l.recordVertexArrayObject(this._vertexBuffers,this._indexBuffer,c),l.bindVertexArrayObject(this._vertexArrayObject,this._indexBuffer)):l.bindBuffers(this._vertexBuffers,this._indexBuffer,c),l.depthCullingState.depthFunc=l.useReverseDepthBuffer?518:515,this.disableDepthWrite||(c.setBool(`alphaTest`,!0),l.setColorWrite(!1),l.enableEffect(o),this._useInstancing?l.drawArraysType(7,0,4,p):l.drawElementsType(0,0,p/4*6),l.enableEffect(a),l.setColorWrite(!0),c.setBool(`alphaTest`,!1)),l.setAlphaMode(this.blendMode),this._useInstancing?l.drawArraysType(7,0,4,p):l.drawElementsType(0,0,p/4*6),this.autoResetAlpha&&l.setAlphaMode(0),u&&this._scene.getEngine().setState(g,v,!1,!0,void 0,void 0,y),l.unbindInstanceAttributes()}_appendSpriteVertex(e,t,n,r,i,a,o,s){let c=e*this._vertexBufferSize;if(n===0?n=this._epsilon:n===1&&(n=1-this._epsilon),r===0?r=this._epsilon:r===1&&(r=1-this._epsilon),o)o(t,i);else{t.cellIndex||=0;let e=i.width/this.cellWidth,n=t.cellIndex/e>>0;t._xOffset=(t.cellIndex-n*e)*this.cellWidth/i.width,t._yOffset=n*this.cellHeight/i.height,t._xSize=this.cellWidth,t._ySize=this.cellHeight}this._vertexData[c]=t.position.x-s.x,this._vertexData[c+1]=t.position.y-s.y,this._vertexData[c+2]=t.position.z-s.z,this._vertexData[c+3]=t.angle,this._vertexData[c+4]=t.width,this._vertexData[c+5]=t.height,this._useInstancing?c-=2:(this._vertexData[c+6]=n,this._vertexData[c+7]=r),a?this._vertexData[c+8]=+!t.invertU:this._vertexData[c+8]=+!!t.invertU,this._vertexData[c+9]=+!!t.invertV,this._vertexData[c+10]=t._xOffset,this._vertexData[c+11]=t._yOffset,this._vertexData[c+12]=t._xSize/i.width,this._vertexData[c+13]=t._ySize/i.height,this._vertexData[c+14]=t.color.r,this._vertexData[c+15]=t.color.g,this._vertexData[c+16]=t.color.b,this._vertexData[c+17]=t.color.a}_buildIndexBuffer(){let e=[],t=0;for(let n=0;n<this._capacity;n++)e.push(t),e.push(t+1),e.push(t+2),e.push(t),e.push(t+2),e.push(t+3),t+=4;this._indexBuffer=this._engine.createIndexBuffer(e)}rebuild(){this._indexBuffer&&this._buildIndexBuffer(),this._useVAO&&(this._vertexArrayObject=void 0),this._buffer._rebuild();for(let e in this._vertexBuffers)this._vertexBuffers[e]._rebuild();this._spriteBuffer?._rebuild()}dispose(){this._buffer&&=(this._buffer.dispose(),null),this._spriteBuffer&&=(this._spriteBuffer.dispose(),null),this._indexBuffer&&=(this._engine._releaseBuffer(this._indexBuffer),null),this._vertexArrayObject&&=(this._engine.releaseVertexArrayObject(this._vertexArrayObject),null),this.texture&&=(this.texture.dispose(),null),this._drawWrapperBase?.dispose(),this._drawWrapperDepth?.dispose(),this._isDisposed=!0}};Q.ForceGLSL=!1;var $=class r{set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}get children(){return this.sprites}get scene(){return this._scene}get capacity(){return this._spriteRenderer.capacity}get texture(){return this._spriteRenderer.texture}set texture(e){e.wrapU=S.CLAMP_ADDRESSMODE,e.wrapV=S.CLAMP_ADDRESSMODE,this._spriteRenderer.texture=e,this._textureContent=null}get cellWidth(){return this._spriteRenderer.cellWidth}set cellWidth(e){this._spriteRenderer.cellWidth=e}get cellHeight(){return this._spriteRenderer.cellHeight}set cellHeight(e){this._spriteRenderer.cellHeight=e}get fogEnabled(){return this._spriteRenderer.fogEnabled}set fogEnabled(e){this._spriteRenderer.fogEnabled=e}get useLogarithmicDepth(){return this._spriteRenderer.useLogarithmicDepth}set useLogarithmicDepth(e){this._spriteRenderer.useLogarithmicDepth=e}get blendMode(){return this._spriteRenderer.blendMode}set blendMode(e){this._spriteRenderer.blendMode=e}get disableDepthWrite(){return this._disableDepthWrite}set disableDepthWrite(e){this._disableDepthWrite=e,this._spriteRenderer.disableDepthWrite=e}get pixelPerfect(){return this._spriteRenderer.pixelPerfect}set pixelPerfect(e){this._spriteRenderer.pixelPerfect=e,e&&this.texture.samplingMode!==3&&this.texture.updateSamplingMode(3)}get spriteRenderer(){return this._spriteRenderer}constructor(n,r,i,a,o,s=.01,c=S.TRILINEAR_SAMPLINGMODE,l=!1,u=null,d){this.name=n,this._parentContainer=null,this.sprites=[],this.renderingGroupId=0,this.layerMask=268435455,this.isPickable=!1,this.metadata=null,this._wasDispatched=!1,this.onDisposeObservable=new e,this.doNotSerialize=!1,this._disableDepthWrite=!1,this._packedAndReady=!1,this._customUpdate=(e,t)=>{e.cellRef||(e.cellIndex=0);let n=e.cellIndex;typeof n==`number`&&isFinite(n)&&Math.floor(n)===n&&(e.cellRef=this._spriteMap[e.cellIndex]),e._xOffset=this._cellData[e.cellRef].frame.x/t.width,e._yOffset=this._cellData[e.cellRef].frame.y/t.height,e._xSize=this._cellData[e.cellRef].frame.w,e._ySize=this._cellData[e.cellRef].frame.h},o||=t.LastCreatedScene,this.layerMask=o.defaultRenderableLayerMask,Z(),o._getComponent(x.NAME_SPRITE)||o._addComponent(new xe(o)),this._fromPacked=l,this._scene=o;let f=this._scene.getEngine();if(this._spriteRenderer=new Q(f,i,s,o,d?.spriteRendererOptions),a.width&&a.height)this.cellWidth=a.width,this.cellHeight=a.height;else if(a!==void 0)this.cellWidth=a,this.cellHeight=a;else{this._spriteRenderer=null;return}this._scene.spriteManagers&&this._scene.spriteManagers.push(this),this.uniqueId=this.scene.getUniqueId(),r&&(this.texture=new S(r,o,!0,!1,c)),this._fromPacked&&this._makePacked(r,u),this._scene._onNewSpriteManagerAddedObservable?.notifyObservers(this)}getClassName(){return`SpriteManager`}_makePacked(e,t){if(t!==null)try{let e;if(e=typeof t==`string`?JSON.parse(t):t,e.frames.length){let t={};for(let n=0;n<e.frames.length;n++){let r=e.frames[n];if(typeof Object.keys(r)[0]!=`string`)throw Error(`Invalid JSON Format.  Check the frame values and make sure the name is the first parameter.`);let i=r[Object.keys(r)[0]];t[i]=r}e.frames=t}let n=Reflect.ownKeys(e.frames);this._spriteMap=n,this._packedAndReady=!0,this._cellData=e.frames}catch(e){throw this._fromPacked=!1,this._packedAndReady=!1,Error(`Invalid JSON from string. Spritesheet managed with constant cell size.`,{cause:e})}else{let t=/\./g,r;do r=t.lastIndex,t.test(e);while(t.lastIndex>0);let i=e.substring(0,r-1)+`.json`;y.LoadFile(i,e=>{try{let t=JSON.parse(e),n=Reflect.ownKeys(t.frames);this._spriteMap=n,this._packedAndReady=!0,this._cellData=t.frames}catch(e){throw this._fromPacked=!1,this._packedAndReady=!1,Error(`Invalid JSON format. Please check documentation for format specifications.`,{cause:e})}},void 0,void 0,!1,()=>{n.Error(`JSON ERROR: Unable to load JSON file.`),this._fromPacked=!1,this._packedAndReady=!1})}}_checkTextureAlpha(e,t,n,r,i){if(!e.useAlphaForPicking||!this.texture?.isReady())return!0;let a=this.texture.getSize();this._textureContent||(this._textureContent=new Uint8Array(a.width*a.height*4),this.texture.readPixels(0,0,this._textureContent));let o=d.Vector3[0];o.copyFrom(t.direction),o.normalize(),o.scaleInPlace(n),o.addInPlace(t.origin);let s=(o.x-r.x)/(i.x-r.x),c=1-(o.y-r.y)/(i.y-r.y),l=e._xOffset*a.width+s*e._xSize|0,u=e._yOffset*a.height+c*e._ySize|0;return this._textureContent[(l+u*a.width)*4+3]>.5}intersects(e,t,n,r){let i=Math.min(this.capacity,this.sprites.length),o=f.Zero(),s=f.Zero(),c=Number.MAX_VALUE,l=null,u=d.Vector3[0],m=d.Vector3[1],h=t.getViewMatrix(),g,_;for(let t=0;t<i;t++){let i=this.sprites[t];if(i){if(n){if(!n(i))continue}else if(!i.isPickable)continue;if(f.TransformCoordinatesToRef(i.position,h,m),i.angle?(p.TranslationToRef(-m.x,-m.y,0,d.Matrix[1]),p.TranslationToRef(m.x,m.y,0,d.Matrix[2]),p.RotationZToRef(-i.angle,d.Matrix[3]),d.Matrix[1].multiplyToRef(d.Matrix[3],d.Matrix[4]),d.Matrix[4].multiplyToRef(d.Matrix[2],d.Matrix[0]),g=e.clone(),f.TransformCoordinatesToRef(e.origin,d.Matrix[0],g.origin),f.TransformNormalToRef(e.direction,d.Matrix[0],g.direction)):g=e,o.copyFromFloats(m.x-i.width/2,m.y-i.height/2,m.z),s.copyFromFloats(m.x+i.width/2,m.y+i.height/2,m.z),g.intersectsBoxMinMax(o,s)){let e=f.Distance(m,g.origin);if(c>e){if(!this._checkTextureAlpha(i,g,e,o,s))continue;if(_=g,c=e,l=i,r)break}}}}if(l){let e=new a;h.invertToRef(d.Matrix[0]),e.hit=!0,e.pickedSprite=l,e.distance=c;let t=d.Vector3[2];return t.copyFrom(_.direction),t.normalize(),t.scaleInPlace(c),_.origin.addToRef(t,u),e.pickedPoint=f.TransformCoordinates(u,d.Matrix[0]),e}return null}multiIntersects(e,t,n){let r=Math.min(this.capacity,this.sprites.length),i=f.Zero(),o=f.Zero(),s,c=[],l=d.Vector3[0].copyFromFloats(0,0,0),u=d.Vector3[1].copyFromFloats(0,0,0),p=t.getViewMatrix();for(let t=0;t<r;t++){let r=this.sprites[t];if(r){if(n){if(!n(r))continue}else if(!r.isPickable)continue;if(f.TransformCoordinatesToRef(r.position,p,u),i.copyFromFloats(u.x-r.width/2,u.y-r.height/2,u.z),o.copyFromFloats(u.x+r.width/2,u.y+r.height/2,u.z),e.intersectsBoxMinMax(i,o)){if(s=f.Distance(u,e.origin),!this._checkTextureAlpha(r,e,s,i,o))continue;let t=new a;c.push(t),p.invertToRef(d.Matrix[0]),t.hit=!0,t.pickedSprite=r,t.distance=s;let n=d.Vector3[2];n.copyFrom(e.direction),n.normalize(),n.scaleInPlace(s),e.origin.addToRef(n,l),t.pickedPoint=f.TransformCoordinates(l,d.Matrix[0])}}}return c}render(){if(this._fromPacked&&(!this._packedAndReady||!this._spriteMap||!this._cellData))return;let e=this._scene.getEngine().getDeltaTime();this._packedAndReady?this._spriteRenderer.render(this.sprites,e,this._scene.getViewMatrix(),this._scene.getProjectionMatrix(),this._customUpdate):this._spriteRenderer.render(this.sprites,e,this._scene.getViewMatrix(),this._scene.getProjectionMatrix())}rebuild(){this._spriteRenderer?.rebuild()}dispose(){if(this._spriteRenderer&&=(this._spriteRenderer.dispose(),null),this._textureContent=null,this._scene.spriteManagers){let e=this._scene.spriteManagers.indexOf(this);this._scene.spriteManagers.splice(e,1),this._scene._onSpriteManagerRemovedObservable?.notifyObservers(this)}if(this._parentContainer&&this._parentContainer.spriteManagers){let e=this._parentContainer.spriteManagers.indexOf(this);e>-1&&this._parentContainer.spriteManagers.splice(e,1),this._parentContainer=null}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null}serialize(e=!1){let t={};t.name=this.name,t.capacity=this.capacity,t.cellWidth=this.cellWidth,t.cellHeight=this.cellHeight,t.fogEnabled=this.fogEnabled,t.blendMode=this.blendMode,t.disableDepthWrite=this.disableDepthWrite,t.pixelPerfect=this.pixelPerfect,t.useLogarithmicDepth=this.useLogarithmicDepth,this.texture&&(e?t.texture=this.texture.serialize():(t.textureUrl=this.texture.name,t.invertY=this.texture._invertY)),t.sprites=[];for(let e of this.sprites)t.sprites.push(e.serialize());return t.metadata=this.metadata,t}static Parse(e,t,n){let i=new r(e.name,``,e.capacity,{width:e.cellWidth,height:e.cellHeight},t);e.fogEnabled!==void 0&&(i.fogEnabled=e.fogEnabled),e.blendMode!==void 0&&(i.blendMode=e.blendMode),e.disableDepthWrite!==void 0&&(i.disableDepthWrite=e.disableDepthWrite),e.pixelPerfect!==void 0&&(i.pixelPerfect=e.pixelPerfect),e.useLogarithmicDepth!==void 0&&(i.useLogarithmicDepth=e.useLogarithmicDepth),e.metadata!==void 0&&(i.metadata=e.metadata),e.texture?i.texture=S.Parse(e.texture,t,n):e.textureName&&(i.texture=new S(n+e.textureUrl,t,!1,e.invertY===void 0||e.invertY));for(let t of e.sprites)Y.Parse(t,i);return i}static async ParseFromFileAsync(e,n,i,a=``){return await new Promise((o,s)=>{let c=new v;c.addEventListener(`readystatechange`,()=>{if(c.readyState==4){if(c.status==200){let n=JSON.parse(c.responseText),s=r.Parse(n,i||t.LastCreatedScene,a);e&&(s.name=e),o(s)}else s(`Unable to load the sprite manager`)}}),c.open(`GET`,n),c.send()})}static ParseFromSnippetAsync(e,n,i=``){return e===`_BLANK`?Promise.resolve(new r(`Default sprite manager`,`//playground.babylonjs.com/textures/player.png`,500,64,n)):new Promise((a,o)=>{let s=new v;s.addEventListener(`readystatechange`,()=>{if(s.readyState==4){if(s.status==200){let o=JSON.parse(JSON.parse(s.responseText).jsonPayload),c=JSON.parse(o.spriteManager),l=r.Parse(c,n||t.LastCreatedScene,i);l.snippetId=e,a(l)}else o(`Unable to load the snippet `+e)}}),s.open(`GET`,this.SnippetUrl+`/`+e.replace(/#/g,`/`)),s.send()})}};$.SnippetUrl=`https://snippet.babylonjs.com`,$.CreateFromSnippetAsync=$.ParseFromSnippetAsync,Z(),ee();export{B as i,Y as n,G as r,$ as t};