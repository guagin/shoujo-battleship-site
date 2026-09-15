import{n as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t,g as n,p as r,s as i,t as a,y as o}from"./mesh.pure-DhirsM6E.js";import{c as s,n as c}from"./scene.pure-t3CtMfeD.js";import{c as l,i as u,n as d,r as f}from"./babylon-runtime-gStt1xEm.js";import{n as ee,r as te,t as p}from"./texture-S-F2CH4U.js";import{a as m,n as h,o as g,s as _,t as v}from"./math.vector.pure-BzvwHg0o.js";import{n as y,t as b}from"./math.color.pure-DBUb_tz1.js";import{t as x}from"./math.plane-CSpNQuAH.js";import{t as S}from"./baseTexture.pure-CwrxO1UM.js";import{t as C}from"./constants-DfNKfgSv.js";import{n as w}from"./texture.pure-hfNyzrEQ.js";import{n as T,t as E}from"./effectRenderer.pure-ZcFG6nei.js";import{_ as ne,i as re,o as D,t as O}from"./babylon-impact-vfx-C4-5_fUI.js";import{n as k,t as A}from"./material.pure-Dpk-H6aH.js";import{t as j}from"./pbrMaterial.pure-CEt1_xpy.js";import{r as ie}from"./pointLight.pure-HAucGfwh.js";import{t as M}from"./multiRenderTarget.pure-B6IFWnic.js";import{$t as N,A as P,Bt as ae,E as oe,G as F,Ht as I,Pt as se,Rt as ce,U as L,V as R,Xt as z,Z as B,cn as V,dt as H,et as U,f as W,ft as G,gt as K,ht as le,kt as q,ln as J,nt as ue,qt as de,tt as fe,un as Y,w as pe,y as X}from"./three.module-yU8Zk6W6.js";import{n as Z,r as me}from"./impact-vfx-BDLTYzOR.js";var Q=e({asmPass:()=>ve,bfPass:()=>_e,foamPass:()=>ye,h0Pass:()=>he,specPass:()=>ge}),he=`
precision highp float;
precision highp int;
#define PI 3.141592653589793
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
float sat(float x){ return clamp(x, 0.0, 1.0); }
vec3  sat3(vec3 x){ return clamp(x, 0.0, 1.0); }

uniform float uN, uL, uWind, uFetch, uDepth, uSwell, uSpread, uShort, uCutLo, uCutHi, uAmp;
uniform vec2  uWindDir;
uniform int   uSeed;
layout(location=0) out vec4 oH0;
const float G = 9.81;

uint pcg(uint v){ uint s = v*747796405u + 2891336453u;
  uint w = ((s >> ((s >> 28u) + 4u)) ^ s)*277803737u; return (w >> 22u) ^ w; }
float rnd(uint s){ return float(pcg(s))*(1.0/4294967296.0); }
vec2 gauss2(int nx, int nz){
  uint h = pcg(uint(nx + 262144)*1973u + uint(nz + 262144)*9277u + uint(uSeed)*26699u);
  float u1 = max(1e-7, rnd(h));
  float u2 = rnd(h ^ 0x9E3779B9u);
  float r  = sqrt(-2.0*log(u1));
  return vec2(r*cos(2.0*PI*u2), r*sin(2.0*PI*u2));
}
float disp(float k){ return sqrt(G*k*tanh(min(k*uDepth, 20.0))); }
float dispD(float k){
  float a  = min(k*uDepth, 20.0);
  float th = tanh(a), ch = cosh(a);
  float w  = max(sqrt(G*k*th), 1e-6);
  return G*(uDepth*k/(ch*ch) + th)/(2.0*w);
}
float jonswap(float w, float wp, float alpha){
  float sg = (w <= wp) ? 0.07 : 0.09;
  float r  = exp(-(w-wp)*(w-wp)/(2.0*sg*sg*wp*wp));
  float iw = 1.0/max(w, 1e-4);
  float p  = wp*iw; p = p*p*p*p;
  return alpha*G*G*pow(iw, 5.0)*exp(-1.25*p)*pow(3.3, r);
}
float tma(float w){
  float wh = w*sqrt(uDepth/G);
  if (wh <= 1.0) return 0.5*wh*wh;
  if (wh <  2.0) return 1.0 - 0.5*(2.0-wh)*(2.0-wh);
  return 1.0;
}
float normFac(float s){
  float s2 = s*s, s3 = s2*s, s4 = s3*s;
  if (s < 5.0) return -0.000564*s4 + 0.00776*s3 - 0.044*s2 + 0.192*s + 0.163;
  return -4.80e-8*s4 + 1.07e-5*s3 - 9.53e-4*s2 + 5.90e-2*s + 3.93e-1;
}
float cos2s(float th, float s){ return normFac(s)*pow(abs(cos(0.5*th)), 2.0*s); }
float spreadPow(float w, float wp){ return (w > wp) ? 9.77*pow(w/wp, -2.5) : 6.97*pow(w/wp, 5.0); }
float dirSpectrum(float th, float w, float wp){
  float s = spreadPow(w, wp) + 16.0*tanh(min(w/wp, 20.0))*uSwell*uSwell;
  float c = cos(th);
  return mix((2.0/PI)*c*c*step(0.0, c), cos2s(th, s), uSpread);
}
void main(){
  ivec2 id = ivec2(gl_FragCoord.xy);
  int nx = id.x - int(uN)/2;
  int nz = id.y - int(uN)/2;
  float dk = 2.0*PI/uL;
  vec2  k  = vec2(float(nx), float(nz))*dk;
  float kl = length(k);
  vec2 a = vec2(0.0), b = vec2(0.0);
  if (kl > 1e-6 && kl >= uCutLo && kl < uCutHi){
    float U     = max(uWind, 0.6);
    float F     = max(uFetch, 100.0);
    float wp    = 22.0*pow(G*G/(U*F), 1.0/3.0);
    float alpha = 0.076*pow(U*U/(F*G), 0.22);
    float w     = disp(kl);
    float base  = jonswap(w, wp, alpha)*tma(w)
                * exp(-kl*kl*uShort*uShort)
                * abs(dispD(kl))/kl * dk*dk;
    float thK = atan(k.y, k.x);
    float thW = atan(uWindDir.y, uWindDir.x);
    float dth = thK - thW;
    /* Tessendorf  h0 = (xi_r + i·xi_i)·sqrt(P).  KCAL is calibrated so that
       uAmp = 1 reproduces the Hasselmann fetch-limited law
       Hs = 0.0016·sqrt(gF)/U · U²/g  to within 2% over the whole UI range. */
    const float KCAL = 0.13;
    a = gauss2( nx,  nz)*sqrt(KCAL*max(base*dirSpectrum(dth,      w, wp), 0.0))*uAmp;
    b = gauss2(-nx, -nz)*sqrt(KCAL*max(base*dirSpectrum(dth + PI, w, wp), 0.0))*uAmp;
  }
  oH0 = vec4(a, b.x, -b.y);
}`,ge=`
precision highp float;
precision highp int;
#define PI 3.141592653589793
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
float sat(float x){ return clamp(x, 0.0, 1.0); }
vec3  sat3(vec3 x){ return clamp(x, 0.0, 1.0); }

uniform sampler2D uH0;
uniform float uN, uL, uTime, uDepth;
layout(location=0) out vec4 o0;
layout(location=1) out vec4 o1;
void main(){
  ivec2 id = ivec2(gl_FragCoord.xy);
  vec2  k  = (vec2(id) - uN*0.5)*(2.0*PI/uL);
  float kl = length(k);
  if (kl < 1e-6){ o0 = vec4(0.0); o1 = vec4(0.0); return; }
  vec4  h0 = texelFetch(uH0, id, 0);
  float w  = sqrt(9.81*kl*tanh(min(kl*uDepth, 20.0)));
  float c  = cos(w*uTime), s = sin(w*uTime);
  vec2  h  = cmul(h0.xy, vec2(c, s)) + cmul(h0.zw, vec2(c, -s));
  vec2  kn = k/kl;
  // Pack1 = Dx + i·Dz | Pack2 = Dy + i·dDx/dz | Pack3 = dDy/dx + i·dDy/dz | Pack4 = dDx/dx + i·dDz/dz
  o0 = vec4( cmul(h, vec2(kn.y, -kn.x)),        cmul(h, vec2(1.0, k.x*k.y/kl)) );
  o1 = vec4( cmul(h, vec2(-k.y, k.x)),          cmul(h, vec2(k.x*k.x/kl, k.y*k.y/kl)) );
}`,_e=`
precision highp float;
precision highp int;
#define PI 3.141592653589793
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
float sat(float x){ return clamp(x, 0.0, 1.0); }
vec3  sat3(vec3 x){ return clamp(x, 0.0, 1.0); }

uniform sampler2D uSrc0, uSrc1, uBf;
uniform int uStage, uDir;
layout(location=0) out vec4 o0;
layout(location=1) out vec4 o1;
void main(){
  ivec2 id = ivec2(gl_FragCoord.xy);
  int   ix = (uDir == 0) ? id.x : id.y;
  vec4  bf = texelFetch(uBf, ivec2(uStage, ix), 0);
  ivec2 pa = (uDir == 0) ? ivec2(int(bf.z), id.y) : ivec2(id.x, int(bf.z));
  ivec2 pb = (uDir == 0) ? ivec2(int(bf.w), id.y) : ivec2(id.x, int(bf.w));
  vec2  tw = bf.xy;
  vec4 a0 = texelFetch(uSrc0, pa, 0), b0 = texelFetch(uSrc0, pb, 0);
  vec4 a1 = texelFetch(uSrc1, pa, 0), b1 = texelFetch(uSrc1, pb, 0);
  o0 = vec4(a0.rg + cmul(tw, b0.rg), a0.ba + cmul(tw, b0.ba));
  o1 = vec4(a1.rg + cmul(tw, b1.rg), a1.ba + cmul(tw, b1.ba));
}`,ve=`
precision highp float;
precision highp int;
#define PI 3.141592653589793
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
float sat(float x){ return clamp(x, 0.0, 1.0); }
vec3  sat3(vec3 x){ return clamp(x, 0.0, 1.0); }

uniform sampler2D uSrc0, uSrc1;
uniform float uN, uChop;
layout(location=0) out vec4 oDisp;
layout(location=1) out vec4 oDeriv;
void main(){
  ivec2 id = ivec2(gl_FragCoord.xy);
  float perm = (mod(float(id.x + id.y), 2.0) < 0.5) ? 1.0 : -1.0;
  float inv  = perm;               // the butterfly IS the unnormalised centred IDFT
  vec4 A = texelFetch(uSrc0, id, 0)*inv;   // A = (Dx, Dz, Dy, dDx/dz)
  vec4 B = texelFetch(uSrc1, id, 0)*inv;   // B = (dDy/dx, dDy/dz, dDx/dx, dDz/dz)
  float lam  = uChop;
  float dxdx = B.z*lam, dzdz = B.w*lam, dxdz = A.w*lam;
  float J    = (1.0 + dxdx)*(1.0 + dzdz) - dxdz*dxdz;   // < 0 ⇒ surface folds ⇒ breaking
  oDisp  = vec4(A.x*lam, A.z, A.y*lam, J);
  oDeriv = vec4(B.x, B.y, dxdx, dzdz);
}`,ye=`
precision highp float;
precision highp int;
#define PI 3.141592653589793
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
float sat(float x){ return clamp(x, 0.0, 1.0); }
vec3  sat3(vec3 x){ return clamp(x, 0.0, 1.0); }

uniform sampler2D uDisp, uPrev;
uniform float uN, uThresh, uStrength, uDecay, uDt;
layout(location=0) out vec4 oFoam;
void main(){
  vec2 uv = gl_FragCoord.xy/uN;
  float J  = texture(uDisp, uv).w;
  float inj = sat((uThresh - J)*uStrength);
  float t = 1.0/uN;
  float p = texture(uPrev, uv).r*0.40
          + (texture(uPrev, uv + vec2( t, 0.0)).r + texture(uPrev, uv + vec2(-t, 0.0)).r
          +  texture(uPrev, uv + vec2(0.0, t)).r + texture(uPrev, uv + vec2(0.0,-t)).r)*0.12
          + (texture(uPrev, uv + vec2( t, t)).r + texture(uPrev, uv + vec2( t,-t)).r
          +  texture(uPrev, uv + vec2(-t, t)).r + texture(uPrev, uv + vec2(-t,-t)).r)*0.03;
  p *= exp(-uDecay*uDt);
  oFoam = vec4(max(p - 0.03*uDt, inj));
}`,be=class{engine;scene;resolution;lengths=[768,121,19];result=[];foam=[];spectrum=[];targets=[];passes=new Map;quad;butterfly;ping;pong;foamIndex=0;initialized=!1;ready=!1;constructor(e,n,r=128){this.engine=e,this.scene=n,this.resolution=r,this.quad=new E(e);let i=r,a=Math.log2(i),o=new Float32Array(a*i*4),s=new Uint32Array(i);for(let e=0;e<i;e++){let t=e,n=0;for(let e=0;e<a;e++)n=n<<1|t&1,t>>=1;s[e]=n}for(let e=0;e<a;e++)for(let t=0;t<i;t++){let n=t*(i>>e+1)%i,r=2*Math.PI*n/i,c=1<<e,l=t%(1<<e+1)<c,u=(t*a+e)*4;o[u]=Math.cos(r),o[u+1]=Math.sin(r),o[u+2]=e===0?s[l?t:t-1]:l?t:t-c,o[u+3]=e===0?s[l?t+1:t]:l?t+c:t}this.butterfly=new t(o,a,i,C.TEXTUREFORMAT_RGBA,n,!1,!1,w.NEAREST_SAMPLINGMODE,C.TEXTURETYPE_FLOAT),this.ping=this.target(`fft-ping`,2),this.pong=this.target(`fft-pong`,2);for(let e=0;e<3;e++)this.spectrum.push(this.target(`fft-spectrum-`+e,1)),this.result.push(this.target(`fft-surface-`+e,2,!0)),this.foam.push([this.target(`fft-foam-a-`+e,1,!0),this.target(`fft-foam-b-`+e,1,!0)]);for(let[t,n]of Object.entries(Q)){let r=[...n.matchAll(/uniform\s+(\w+)\s+([^;]+);/g)].flatMap(e=>e[2].split(`,`).map(t=>({type:e[1],name:t.trim()})));this.passes.set(t,new T({engine:e,name:t,fragmentShader:n,vertexShader:`attribute vec2 position; void main(){gl_Position=vec4(position,0.,1.);}`,attributeNames:[`position`],uniformNames:r.filter(e=>e.type!==`sampler2D`).map(e=>e.name),samplerNames:r.filter(e=>e.type===`sampler2D`).map(e=>e.name)}))}}target(e,t,n=!1){let r=new M(e,this.resolution,t,this.scene,{generateDepthBuffer:!1,generateMipMaps:!1,defaultType:n?C.TEXTURETYPE_HALF_FLOAT:C.TEXTURETYPE_FLOAT,samplingModes:Array(t).fill(n?w.BILINEAR_SAMPLINGMODE:w.NEAREST_SAMPLINGMODE)});for(let e of r.textures)e.wrapU=e.wrapV=w.WRAP_ADDRESSMODE,e.gammaSpace=!1;return this.targets.push(r),r}draw(e,t,n){let r=this.passes.get(e);r.onApplyObservable.clear(),r.onApplyObservable.add(()=>{for(let[e,t]of Object.entries(n))t instanceof S?r.effect.setTexture(e,t):t instanceof m?r.effect.setVector2(e,t):e===`uSeed`||e===`uStage`||e===`uDir`?r.effect.setInt(e,t):r.effect.setFloat(e,t)}),this.quad.render(r,t.renderTarget)}foamTexture(e){return this.foam[e][this.foamIndex].textures[0]}step(e,t){if([...this.passes.values()].some(e=>!e.effect.isReady()))return!1;let n=this.resolution,r=Math.log2(n);if(!this.initialized){for(let e of this.foam)for(let t of e)this.engine.bindFramebuffer(t.renderTarget),this.engine.clear(new y(0,0,0,0),!0,!1,!1),this.engine.unBindFramebuffer(t.renderTarget);let e=[1e-4,2*Math.PI*6/121,2*Math.PI*6/19,9999],t=38*Math.PI/180;for(let r=0;r<3;r++)this.draw(`h0Pass`,this.spectrum[r],{uN:n,uL:this.lengths[r],uWind:8,uFetch:21e4,uDepth:420,uSwell:.72,uSpread:.62,uShort:.0075,uCutLo:e[r],uCutHi:e[r+1],uAmp:.48,uWindDir:new m(Math.cos(t),Math.sin(t)),uSeed:1337});this.initialized=!0}for(let i=0;i<3;i++){this.draw(`specPass`,this.ping,{uH0:this.spectrum[i].textures[0],uN:n,uL:this.lengths[i],uTime:e,uDepth:420});let a=this.ping,o=this.pong;for(let e=0;e<2;e++)for(let t=0;t<r;t++)this.draw(`bfPass`,o,{uSrc0:a.textures[0],uSrc1:a.textures[1],uBf:this.butterfly,uStage:t,uDir:e}),[a,o]=[o,a];this.draw(`asmPass`,this.result[i],{uSrc0:a.textures[0],uSrc1:a.textures[1],uN:n,uChop:1.05}),this.draw(`foamPass`,this.foam[i][1-this.foamIndex],{uDisp:this.result[i].textures[0],uPrev:this.foam[i][this.foamIndex].textures[0],uN:n,uThresh:.62,uStrength:1.05,uDecay:.42,uDt:Math.min(t,.1)})}return this.foamIndex=1-this.foamIndex,this.ready=!0,this.engine.restoreDefaultFramebuffer(),!0}dispose(){for(let e of this.passes.values())e.dispose();for(let e of this.targets)e.dispose();this.butterfly.dispose(),this.quad.dispose()}};function xe(e=256){let t=new Uint8Array(e*e*4),n=Array.from({length:24},(e,t)=>{let n=2+t*1.7,r=.4+Math.sin(t*12.71)*.65;return{x:Math.round(Math.cos(r)*n),y:Math.round(Math.sin(r)*n),phase:t*2.399,amp:.15/(1+t)**.6}});for(let r=0;r<e;r++)for(let i=0;i<e;i++){let a=0,o=0;for(let t of n){let n=Math.sin((i*t.x+r*t.y)*Math.PI*2/e+t.phase)*t.amp;a+=n,o+=n*t.y/Math.max(1,t.x)}let s=Math.hypot(a,o,1),c=(r*e+i)*4;t[c]=(a/s*.5+.5)*255,t[c+1]=(o/s*.5+.5)*255,t[c+2]=(1/s*.5+.5)*255,t[c+3]=255}let r=new pe(t,e,e,se);return r.wrapS=r.wrapT=ce,r.magFilter=fe,r.minFilter=ue,r.generateMipmaps=!0,r.needsUpdate=!0,r}var $=class{scene;waves;material;mesh;sky;normal=xe();mirror;elapsed=1;clock=0;settings;size=0;reflectionMatrix=v.Identity();fft;simulationElapsed=1;constructor(e,t){if(this.scene=e,this.waves=t,t||(this.fft=new be(e.getEngine(),e)),this.mirror=new f(`sea-reflection`,512,e,!1,C.TEXTURETYPE_UNSIGNED_BYTE),this.mirror.mirrorPlane=new x(0,-1,0,.05),this.mirror.clearColor=new y(0,0,0,0),this.mirror.renderParticles=!1,this.mirror.renderSprites=!1,this.mirror.onBeforeRenderObservable.add(()=>this.reflectionMatrix.copyFrom(e.getTransformMatrix())),this.material=new I({side:2,uniforms:{seaHeight:{value:1},seaSpeed:{value:1},seaSun:{value:1},seaCloud:{value:0},time:{value:0},cameraPosition:{value:new J},normalMap:{value:this.normal},reflectionMap:{value:this.mirror},reflectionMatrix:{value:this.reflectionMatrix},reflectionEnabled:{value:0},toneMappingExposure:{value:.85},uVisibility:{value:2e3},uWeatherFogColor:{value:new X(`#879eaa`)}},vertexShader:`uniform float time;varying vec3 vW;
void main(){vec3 p=position;vec3 disp=vec3(0.,sin(p.x*.013+p.z*.007+time*.6)*.26+sin(p.z*.023-p.x*.009-time*.48)*.14,0.);p += disp;vW=p;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float time,toneMappingExposure,uVisibility,reflectionEnabled,seaSun,seaCloud;uniform vec3 cameraPosition,uWeatherFogColor;uniform sampler2D normalMap,reflectionMap;uniform mat4 reflectionMatrix;varying vec3 vW;
${D}
float sat(float x){return clamp(x,0.,1.);}
void main(){vec2 uv=vW.xz;vec2 n1=texture2D(normalMap,uv*.008+vec2(time*.006,time*.002)).rg*2.-1.;vec2 n2=texture2D(normalMap,uv*.026+vec2(-time*.009,time*.005)).rg*2.-1.;vec2 n3=texture2D(normalMap,uv*.071+vec2(time*.011,-time*.007)).rg*2.-1.;
float distanceToEye=length(cameraPosition-vW);float detail=1.-smoothstep(180.,1400.,distanceToEye);vec2 slope=n1*.65+n2*.35+n3*.2*detail;
vec3 N=normalize(vec3(-slope.x,1.,-slope.y));vec3 V=normalize(cameraPosition-vW);
float facing = dot(V, N);float foam=0.;float fn=texture2D(normalMap,uv*.043).b;
float bed = -400.0;
float fres=.0204+.9796*pow(1.-sat(facing),5.);vec3 reflected=oceanSky(reflect(-V,N),time,seaCloud);
vec4 clip=reflectionMatrix*vec4(vW.x,0.,vW.z,1.);vec2 coord=clip.xy/max(.001,clip.w)*.5+.5;vec2 distortion=slope*.012*clamp(140./max(30.,distanceToEye),.15,1.);vec4 objectReflection=texture2D(reflectionMap,clamp(coord+distortion,vec2(.001),vec2(.999)));
float bounds=step(0.,coord.x)*step(coord.x,1.)*step(0.,coord.y)*step(coord.y,1.);reflected=mix(reflected,objectReflection.rgb,objectReflection.a*bounds*reflectionEnabled*.85);
vec3 normalDx=dFdx(N),normalDy=dFdy(N);
float variance=dot(normalDx,normalDx)+dot(normalDy,normalDy);
float roughness=clamp(sqrt(.14*.14+min(.2,variance)*.5+(1.-detail)*.014),.14,.45);
float sparkle=oceanSpecular(N,V,roughness)*.7*seaSun;
vec3 water=mix(vec3(.008,.052,.078),vec3(.018,.095,.12),sat(facing));
vec3 c=mix(water,reflected,fres)+vec3(1.,.91,.78)*sparkle;c=mix(c,vec3(.65,.8,.83),sat(foam)*.8);
float haze=smoothstep(uVisibility*.8,uVisibility*2.,distanceToEye);c=mix(c,uWeatherFogColor*.38,haze*.6);c*=toneMappingExposure/.85;gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2)),1.);}`}),this.fft){let e=`uniform sampler2D uD0,uD1,uD2,uV0,uV1,uV2,uF0,uF1,uF2;uniform float fftReady;`;Object.assign(this.material.uniforms,{fftReady:{value:0}});for(let e=0;e<3;e++)this.material.uniforms[`uD`+e]={value:this.fft.result[e].textures[0]},this.material.uniforms[`uV`+e]={value:this.fft.result[e].textures[1]},this.material.uniforms[`uF`+e]={value:this.fft.foamTexture(e)};this.material.vertexShader=e+`uniform vec3 cameraPosition;`+this.material.vertexShader.replace(`vec3 p=position;`,`vec3 p=position;p.xz+=cameraPosition.xz;`).replace(`p += disp;`,`disp=mix(disp,texture2D(uD0,p.xz/768.).xyz+texture2D(uD1,p.xz/121.).xyz+texture2D(uD2,p.xz/19.).xyz,fftReady);p += disp;`),this.material.fragmentShader=e+this.material.fragmentShader.replace(`vec3 N=normalize`,`vec4 derivatives=texture2D(uV0,uv/768.)+texture2D(uV1,uv/121.)+texture2D(uV2,uv/19.)*detail;slope=mix(slope,derivatives.xy/(vec2(1.)+derivatives.zw),fftReady);vec3 N=normalize`).replace(`float foam=0.;`,`float foam=(texture2D(uF0,uv/768.).r+texture2D(uF1,uv/121.).r+texture2D(uF2,uv/19.).r)*fftReady;`)}else t.configure(this.material);let n=[],r=[];for(let e=0;e<=128;e++){let t=e===0?0:1.5*4e3**(e/128);for(let e=0;e<=192;e++){let r=e/192*Math.PI*2;n.push(Math.cos(r)*t,0,Math.sin(r)*t)}}for(let e=0;e<128;e++)for(let t=0;t<192;t++){let n=e*193+t,i=n+192+1;r.push(n,i,n+1,n+1,i,i+1)}let i=new W;i.setAttribute(`position`,new P(n,3)),i.setIndex(r),this.mesh=new G(i,this.material),this.mesh.frustumCulled=!1,this.mesh.name=`Babylon FFT ocean`,this.mesh.userData.excludeReflection=!0;let a=new I({depthWrite:!1,side:2,uniforms:{time:{value:0},haze:{value:0},seaSun:this.material.uniforms.seaSun,toneMappingExposure:this.material.uniforms.toneMappingExposure},vertexShader:`varying vec3 direction;void main(){direction=position;vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p.xyww;}`,fragmentShader:`uniform float time,haze,seaSun,toneMappingExposure;varying vec3 direction;
${D}
void main(){vec3 d=normalize(direction);vec3 c=oceanSky(d,time,haze);
float sun=pow(max(0.,dot(d,normalize(oceanSunDirection))),350.);c+=vec3(1.,.91,.78)*sun*seaSun*2.5;
c*=toneMappingExposure/.85;gl_FragColor=vec4(pow(max(c,vec3(0.)),vec3(1./2.2)),1.);}`});this.sky=new G(new de(6e3,32,16),a),this.sky.name=`Babylon sky`,this.sky.userData.excludeReflection=!0,this.sky.renderOrder=1e3}apply(e){this.settings=e,this.elapsed=1;let t=Math.round(1024*e.water);t!==this.size&&(this.mirror.resize(t),this.size=t),this.material.uniforms.reflectionEnabled.value=+!!e.reflection}update(e){this.clock+=e,this.material.uniforms.time.value=this.clock,this.sky.material.uniforms.time.value=this.clock,this.sky.material.uniforms.haze.value=this.material.uniforms.seaCloud.value,this.elapsed+=e,this.simulationElapsed+=e}simulate(){if(!(this.simulationElapsed<1/30)){if(this.waves){this.waves.step(this.clock),this.simulationElapsed=0;return}if(this.fft.step(this.clock,this.simulationElapsed)){this.simulationElapsed=0,this.material.uniforms.fftReady.value=1;for(let e=0;e<3;e++)this.material.uniforms[`uF`+e].value=this.fft.foamTexture(e)}}}renderReflection(e){let t=this.settings?.reflection??0;!t||this.elapsed<1/t||(this.elapsed=0,this.mirror.renderList=(e??this.scene.meshes).filter(e=>e.isEnabled()&&e.metadata?.reflect),this.scene.updateTransformMatrix(!0),this.mirror.render())}dispose(){this.mirror.dispose(),this.normal.dispose(),this.fft?.dispose(),this.waves?.dispose()}},Se=class{scene;compactAuxiliary;entries=new Map;materials=new Map;textures=new Map;geometries=new Map;active=new Set;releaseHooks=new Map;tick=0;syncId=0;materialSync=new WeakMap;constructor(e,t=!0){this.scene=e,this.compactAuxiliary=t}onRelease(e,t){let n=()=>{t(),e.removeEventListener(`dispose`,n),this.releaseHooks.delete(e)};e.addEventListener(`dispose`,n),this.releaseHooks.set(e,n)}texture(e){let n=this.textures.get(e);if(n)return n;let r=e.image;if(!r?.width||!r.height)return;let i;if(r.data){if(!(r.data instanceof Uint8Array))return;i=r.data}else{let e=document.createElement(`canvas`);e.width=r.width,e.height=r.height;let t=e.getContext(`2d`);t.drawImage(r,0,0),i=t.getImageData(0,0,r.width,r.height).data}let a=t.CreateRGBATexture(i,r.width,r.height,this.scene,!0,e.flipY,w.TRILINEAR_SAMPLINGMODE);return a.name=e.name||e.uuid,a.gammaSpace=e.colorSpace===ae,a.wrapU=e.wrapS===1e3?w.WRAP_ADDRESSMODE:w.CLAMP_ADDRESSMODE,a.wrapV=e.wrapT===1e3?w.WRAP_ADDRESSMODE:w.CLAMP_ADDRESSMODE,a.uScale=e.repeat.x,a.vScale=e.repeat.y,a.uOffset=e.offset.x,a.vOffset=e.offset.y,a.anisotropicFilteringLevel=4,this.textures.set(e,a),this.onRelease(e,()=>{a.dispose(),this.textures.delete(e)}),a}shader(e,t){let r=t.geometry,i=e.vertexShader,a=e.fragmentShader,o=e=>e.replace(/#include <(?:tonemapping_fragment|colorspace_fragment)>/g,``);i=`precision highp float; precision highp int;
`+o(i),a=`precision highp float; precision highp int;
`+o(a);let s=Object.keys(r.attributes);i=s.filter(e=>!RegExp(`attribute\\s+\\w+\\s+${e}\\b`).test(i)).map(e=>`attribute ${r.attributes[e].itemSize===1?`float`:`vec${r.attributes[e].itemSize}`} ${e};`).join(`
`)+`
uniform mat4 world,view,projection,viewProjection;
`+i,t instanceof L?(i=`#include<instancesDeclaration>
`+i.replace(`uniform mat4 world,view,projection,viewProjection;`,`uniform mat4 view,projection,viewProjection;`),i=i.replace(/void main\s*\(\s*\)\s*\{/,`void main(){
#include<instancesVertex>
`),i=i.replace(/\binstanceMatrix\b/g,`finalWorld`),i=i.replace(/\bmodelViewMatrix\b/g,`view`).replace(/\bmodelMatrix\b/g,`world`)):i=i.replace(/\bmodelViewMatrix\b/g,`(view*world)`).replace(/\bmodelMatrix\b/g,`world`),i=i.replace(/\bprojectionMatrix\b/g,`projection`);let c=Object.keys(e.uniforms).filter(t=>e.uniforms[t].value instanceof N||e.uniforms[t].value instanceof S),l=[`world`,`view`,`projection`,`viewProjection`,...Object.keys(e.uniforms).filter(e=>!c.includes(e))],u=e=>e.replace(/\b(uniform|varying|attribute)\s+(float|int|bool|[biu]?vec[234]|mat[234]|sampler2D|samplerCube)\s+([^;]+);/g,(e,t,n,r)=>`
`+r.split(`,`).map(e=>`${t} ${n} ${e.trim()};`).join(`
`)+`
`);i=u(i),a=u(a);let d=new n(e.name||`ported-effect`,this.scene,{vertexSource:i,fragmentSource:a},{attributes:s,uniforms:l,samplers:c,needAlphaBlending:e.transparent}),f=new Set;for(let t of(e.vertexShader+`
`+e.fragmentShader).matchAll(/uniform\s+int\s+([^;]+);/g))for(let e of t[1].split(`,`))f.add(e.trim());return this.uniforms(e,d,f),d.onBindObservable.add(()=>this.uniforms(e,d,f)),d}uniforms(e,t,n){for(let r in e.uniforms){let i=e.uniforms[r].value;if(i instanceof N){let e=this.texture(i);e&&t.setTexture(r,e)}else if(i instanceof S)t.setTexture(r,i);else if(i instanceof v)t.setMatrix(r,i);else if(typeof i==`number`)n.has(r)?t.setInt(r,i):t.setFloat(r,i);else if(i instanceof X)t.setColor3(r,new b(i.r,i.g,i.b));else if(i instanceof V)t.setVector2(r,new m(i.x,i.y));else if(i instanceof J)t.setVector3(r,new g(i.x,i.y,i.z));else if(i instanceof Y)t.setVector4(r,new _(i.x,i.y,i.z,i.w));else if(i instanceof Float32Array)t.setFloats(r,Array.from(i));else if(Array.isArray(i)&&i.length){let e=i.flatMap(e=>e.toArray?e.toArray():e);i[0]instanceof Y?t.setArray4(r,e):i[0]instanceof J?t.setArray3(r,e):i[0]instanceof V?t.setArray2(r,e):t.setFloats(r,e)}}}material(e,t){let r=this.materials.get(e);if(r)return r;let i;if(t instanceof q){let t=e;if(this.scene.getEngine().isWebGPU){let r=new n(`point-billboards`,this.scene,{vertexSource:`precision highp float;
attribute vec3 position;
attribute vec2 corner;
uniform mat4 worldViewProjection;
uniform mat4 world;
uniform mat4 view;
uniform vec2 viewport;
uniform float pointSize;
varying vec2 pointUV;
void main(){vec4 clip=worldViewProjection*vec4(position,1.);float size=clamp(pointSize/max(1.,-(view*world*vec4(position,1.)).z),1.,128.);clip.xy+=corner*size/viewport*clip.w;gl_Position=clip;pointUV=corner;}`,fragmentSource:`precision highp float;
uniform vec3 tint;
uniform float opacity;
varying vec2 pointUV;
void main(){float a=pow(max(0.,1.-length(pointUV)),2.);gl_FragColor=vec4(tint,a*opacity);}`},{attributes:[`position`,`corner`],uniforms:[`worldViewProjection`,`world`,`view`,`viewport`,`pointSize`,`tint`,`opacity`],needAlphaBlending:!0}),a=()=>{let n=this.scene.getEngine();r.setVector2(`viewport`,new m(n.getRenderWidth(),n.getRenderHeight())),r.setFloat(`pointSize`,t.size*n.getRenderHeight()*.5),r.setFloat(`opacity`,e.opacity),r.setColor3(`tint`,new b(t.color.r,t.color.g,t.color.b))};a(),r.onBindObservable.add(a),i=r}else{let r=new n(`point-glow`,this.scene,{vertexSource:`precision highp float;attribute vec3 position;uniform mat4 worldViewProjection,world,view;uniform float pointSize;void main(){gl_Position=worldViewProjection*vec4(position,1.);gl_PointSize=clamp(pointSize/max(1.,-(view*world*vec4(position,1.)).z),1.,128.);}`,fragmentSource:`precision highp float;uniform vec3 tint;uniform float opacity;void main(){float a=pow(max(0.,1.-length(gl_PointCoord*2.-1.)),2.);gl_FragColor=vec4(tint,a*opacity);}`},{attributes:[`position`],uniforms:[`worldViewProjection`,`world`,`view`,`pointSize`,`tint`,`opacity`],needAlphaBlending:!0});r.pointsCloud=!0,r.onBindObservable.add(()=>{r.setFloat(`pointSize`,t.size*this.scene.getEngine().getRenderHeight()*.5),r.setFloat(`opacity`,e.opacity),r.setColor3(`tint`,new b(t.color.r,t.color.g,t.color.b))}),i=r}}else if(e instanceof I)i=this.shader(e,t);else if(e.customProgramCacheKey()===`muzzle-shockwaves-v1`){let e=new I({transparent:!0,uniforms:{},vertexShader:`attribute float waveAlpha;varying float alpha;void main(){alpha=waveAlpha;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying float alpha;void main(){gl_FragColor=vec4(.72,.86,.9,alpha);}`});i=this.shader(e,t)}else if(e.customProgramCacheKey()===`energy-soft-edge-v1`){let n=new I({transparent:!0,uniforms:{tint:{value:e.color},opacity:{value:e.opacity}},vertexShader:`varying vec3 n,v;void main(){vec4 p=modelViewMatrix*${t instanceof L?`instanceMatrix*`:``}vec4(position,1.);n=mat3(modelViewMatrix${t instanceof L?`*instanceMatrix`:``})*normal;v=-p.xyz;gl_Position=projectionMatrix*p;}`,fragmentShader:`uniform vec3 tint;uniform float opacity;varying vec3 n,v;void main(){float soft=pow(abs(dot(normalize(n),normalize(v))),2.);gl_FragColor=vec4(tint,soft*opacity);}`}),r=this.shader(n,t);r.onBindObservable.add(()=>r.setFloat(`opacity`,e.opacity)),i=r}else if(e instanceof K){let t=new j(e.name||`ship-pbr`,this.scene);t.albedoColor=new b(e.color.r,e.color.g,e.color.b),t.metallic=e.metalness,t.roughness=e.roughness,t.environmentIntensity=.65,e.map&&(t.albedoTexture=this.texture(e.map)??null),e.normalMap&&(t.bumpTexture=this.texture(e.normalMap)??null),e.normalMap&&t.bumpTexture&&(t.bumpTexture.level=e.normalScale.x,t.invertNormalMapY=!0),e instanceof le&&(t.metallicF0Factor=e.specularIntensity,e.specularIntensityMap&&(t.metallicReflectanceTexture=this.texture(e.specularIntensityMap)??null),t.metallicReflectanceColor=new b(e.specularColor.r,e.specularColor.g,e.specularColor.b)),(e.roughnessMap||e.metalnessMap)&&(t.metallicTexture=this.texture(e.roughnessMap||e.metalnessMap)??null,t.useRoughnessFromMetallicTextureGreen=!0,t.useRoughnessFromMetallicTextureAlpha=!1,t.useMetallnessFromMetallicTextureBlue=!0),t.emissiveColor=new b(e.emissive.r,e.emissive.g,e.emissive.b).scale(e.emissiveIntensity),e.emissiveMap&&(t.emissiveTexture=this.texture(e.emissiveMap)??null),t.transparencyMode=e.transparent?j.PBRMATERIAL_ALPHABLEND:e.alphaTest?j.PBRMATERIAL_ALPHATEST:j.PBRMATERIAL_OPAQUE,t.alphaCutOff=e.alphaTest,i=t}else{let t=e,n=new p(e.name||`unlit-effect`,this.scene);n.disableLighting=!0,n.emissiveColor=t.color?new b(t.color.r,t.color.g,t.color.b):b.White(),t.map&&(n.diffuseTexture=this.texture(t.map)??null,n.diffuseTexture&&(n.diffuseTexture.hasAlpha=!0),n.useAlphaFromDiffuseTexture=!0),i=n}return i.backFaceCulling=e.side!==2,i.sideOrientation=A.CounterClockWiseSideOrientation,i.disableDepthWrite=!e.depthWrite,i.alpha=e.opacity,i.alphaMode=e.blending===2?C.ALPHA_ADD:C.ALPHA_COMBINE,i.zOffset=e.polygonOffset?e.polygonOffsetFactor:0,t instanceof q&&!this.scene.getEngine().isWebGPU&&(i.pointsCloud=!0,i.pointSize=e.size||3),this.materials.set(e,i),this.onRelease(e,()=>{i.dispose(!1,!1),this.materials.delete(e)}),i}syncGeometry(e,t){let n=t.mesh;if(t.geometry!==e){let r=this.geometries.get(e);if(!r){r=new i(e.uuid,this.scene),this.geometries.set(e,r);let t=r;this.onRelease(e,()=>{t.dispose(),this.geometries.delete(e);for(let t of this.entries.values())t.geometry===e&&(t.geometry=void 0)});for(let[t,n]of Object.entries(e.attributes)){if(n instanceof R)continue;let e=new Float32Array(n.count*n.itemSize);for(let t=0;t<n.count;t++)for(let r=0;r<n.itemSize;r++)e[t*n.itemSize+r]=n.getComponent(t,r);r.setVerticesData(t,e,!0,n.itemSize)}r.setIndices(e.index?Array.from(e.index.array):Array.from({length:e.attributes.position.count},(e,t)=>t))}r.applyToMesh(n),t.geometry=e,t.versions.clear()}for(let r in e.attributes){let i=e.attributes[r];i instanceof R||(t.versions.has(r)&&t.versions.get(r)!==(i instanceof F?i.data.version:i.version)&&n.updateVerticesData(r,i.array,r===`position`,!1),t.versions.set(r,i instanceof F?i.data.version:i.version))}let r=e.index?.count??e.attributes.position.count,a=e.drawRange.start,o=Math.min(r,a+e.drawRange.count);n.subMeshes?.[0]&&!e.groups.length&&(n.subMeshes[0].indexStart=a,n.subMeshes[0].indexCount=Math.max(0,o-a))}syncPoints(e,t){let n=e.attributes.position,r=t.mesh;if(t.geometry!==e){t.geometry=e,t.pointPositions=new Float32Array(n.count*12);let i=new Float32Array(n.count*8),a=new Uint32Array(n.count*6);for(let e=0;e<n.count;e++)i.set([-1,-1,1,-1,1,1,-1,1],e*8),a.set([e*4,e*4+1,e*4+2,e*4,e*4+2,e*4+3],e*6);r.setVerticesData(`position`,t.pointPositions,!0),r.setVerticesData(`corner`,i,!1,2),r.setIndices(a),t.versions.clear()}let i=n instanceof F?n.data.version:n.version;if(t.versions.get(`position`)!==i){for(let e=0;e<n.count;e++)for(let r=0;r<4;r++){let i=e*12+r*3;t.pointPositions[i]=n.getX(e),t.pointPositions[i+1]=n.getY(e),t.pointPositions[i+2]=n.getZ(e)}r.updateVerticesData(`position`,t.pointPositions,!0,!1),t.versions.set(`position`,i)}r.subMeshes?.[0]&&(r.subMeshes[0].indexStart=e.drawRange.start*6,r.subMeshes[0].indexCount=Math.max(0,Math.min(n.count-e.drawRange.start,e.drawRange.count))*6)}syncInstances(e,t){let n=t.mesh,r=t.instanceBuffers??=new Map,i=n.thinInstanceCount!==e.count,a=(t,a)=>{let o=r.get(t),s=t===`matrix`;!o||o.array!==a.array||o.stride!==a.itemSize?(n.thinInstanceSetBuffer(t,a.array,a.itemSize,!1),s&&(n.thinInstanceCount=e.count,i=!0)):(o.version!==a.version||s&&o.count!==e.count)&&(s&&(n.thinInstanceCount=e.count),n.thinInstanceBufferUpdated(t),s&&(i=!0)),o?(o.array=a.array,o.stride=a.itemSize,o.version=a.version,o.count=e.count):r.set(t,{array:a.array,stride:a.itemSize,version:a.version,count:e.count})};a(`matrix`,e.instanceMatrix),e.instanceColor&&a(`color`,e.instanceColor);for(let t in e.geometry.attributes){let n=e.geometry.attributes[t];n instanceof R&&a(t,n)}n.thinInstanceCount=e.count,i&&e.count>0&&n.thinInstanceRefreshBoundingInfo(!1),n.setEnabled(e.count>0),n.alwaysSelectAsActiveMesh=!0}sync(e){this.syncId++;let t=new Set,n=(e,i=!1)=>{if(!e.visible)return;let o=i||!!e.userData.excludeReflection;if(e instanceof G||e instanceof q||e instanceof B||e instanceof z){if(!e.geometry.attributes.position)return;let n=this.entries.get(e);n||(n={mesh:new a(e.name||e.type,this.scene),versions:new Map},this.entries.set(e,n));let i=e.geometry.attributes.position,s=n.geometry!==e.geometry||n.versions.get(`position`)!==(i instanceof F?i.data.version:i.version),c=n.mesh;e instanceof q&&this.scene.getEngine().isWebGPU?this.syncPoints(e.geometry,n):this.syncGeometry(e.geometry,n);let l=Array.isArray(e.material)?e.material:n.singleMaterial?.[0]===e.material?n.singleMaterial:n.singleMaterial=[e.material];if(l.length===1){let t=this.material(l[0],e);c.material!==t&&(c.material=t)}else if(!(c.material instanceof r)){let t=new r(e.name,this.scene);t.subMaterials=l.map(t=>this.material(t,e)),c.material=t,c.subMeshes=[];for(let t of e.geometry.groups)new k(t.materialIndex??0,0,e.geometry.attributes.position.count,t.start,t.count,c)}for(let t of l){if(this.materialSync.get(t)===this.syncId)continue;let n=this.material(t,e);if(this.materialSync.set(t,this.syncId),n.alpha!==t.opacity&&(n.alpha=t.opacity),n instanceof j){let e=t.transparent||t.opacity<1?j.PBRMATERIAL_ALPHABLEND:t.alphaTest?j.PBRMATERIAL_ALPHATEST:j.PBRMATERIAL_OPAQUE;n.transparencyMode!==e&&(n.transparencyMode=e)}if(n instanceof p&&`color`in t){let e=t.color;(n.emissiveColor.r!==e.r||n.emissiveColor.g!==e.g||n.emissiveColor.b!==e.b)&&n.emissiveColor.set(e.r,e.g,e.b)}}e instanceof z?(v.FromArray(e.matrixWorld.elements).decompose(c.scaling,void 0,c.position),c.billboardMode=a.BILLBOARDMODE_ALL):(s||!n.world||!n.world.equals(e.matrixWorld))&&(v.FromArrayToRef(e.matrixWorld.elements,0,n.nativeWorld??=v.Identity()),c.freezeWorldMatrix(n.nativeWorld),(n.world??=new H).copy(e.matrixWorld)),c.receiveShadows!==e.receiveShadow&&(c.receiveShadows=e.receiveShadow),c.isPickable=!1,c.renderingGroupId=0,c.alphaIndex=e.renderOrder;let u=this.compactAuxiliary&&(e.userData.auxiliaryDetail===!0||e.layers.isEnabled(1));c.metadata??={},c.metadata.reflect=!o&&!u&&l.some(e=>e instanceof K),c.metadata.castShadow=e.castShadow&&!u,e instanceof L?this.syncInstances(e,n):c.setEnabled(c.subMeshes?.some(e=>e.indexCount>0)??!1),e instanceof B&&c.material&&(c.material.fillMode=e instanceof U?A.LineListDrawMode:A.LineStripDrawMode),t.add(c)}for(let t of e.children)n(t,o)};n(e);for(let e of this.active)t.has(e)||e.setEnabled(!1);if(this.active=t,++this.tick%120==0)for(let[t,n]of this.entries){let r=t;for(;r&&r!==e;)r=r.parent;r||(n.mesh.dispose(!1,!1),this.entries.delete(t))}}prepareAuxiliary(e,t){let n=t();if(!n)return;let r=this.active,i=new Map([...r].map(e=>[e,e.isEnabled()])),a;try{this.sync(e),a=this.active}finally{n();for(let e of this.active)r.has(e)||e.setEnabled(!1);for(let[e,t]of i)e.setEnabled(t);this.active=r}let o=[...a].filter(e=>!r.has(e)&&e.subMeshes?.some(e=>e.indexCount>0)),s=[...r].filter(e=>!a.has(e)&&i.get(e));return{meshes:[...a],begin:()=>{for(let e of s)e.setEnabled(!1);for(let e of o)e.setEnabled(!0);return()=>{for(let e of o)e.setEnabled(!1);for(let e of s)e.setEnabled(!0)}}}}dispose(){for(let[e,t]of this.releaseHooks)e.removeEventListener(`dispose`,t);this.releaseHooks.clear();for(let e of this.entries.values())e.mesh.dispose(!1,!1);for(let e of this.materials.values())e.dispose(!1,!1);for(let e of this.textures.values())e.dispose();for(let e of this.geometries.values())e.dispose();this.entries.clear(),this.materials.clear(),this.textures.clear(),this.geometries.clear()}},Ce=class{scene;bridge;seen=new WeakSet;cursor=0;systems=[];map=Z(!1);smokeSystems=[];smokeMap=Z(!0);shockwaves=new me;constructor(e,t,n){this.scene=e,this.bridge=t,n.add(this.shockwaves.mesh)}burst(e,t,n,r,i,a){let o=this.cursor++%32,s=this.systems[o];s||(s=new u(`combat-burst`,128,this.scene),s.particleTexture=this.bridge.texture(this.map),this.systems[o]=s),s.stop(),s.reset(),s.emitter=new g(e,t,n);let c=a===void 0?g.Zero():new g(Math.sin(a)*12,0,Math.cos(a)*12);if(s.direction1=new g(-6,r?12:3,-6).add(c),s.direction2=new g(6,r?28:12,6).add(c),s.minEmitPower=.5,s.maxEmitPower=1,s.minLifeTime=.2,s.maxLifeTime=r?1.5:1,s.minSize=.4*i,s.maxSize=2*i,s.gravity=new g(0,-12,0),s.color1=r?new y(.7,.9,1,.8):new y(1,.7,.2,1),s.color2=r?new y(.9,.98,1,.6):new y(1,.2,.02,.8),s.colorDead=new y(.15,.18,.2,0),s.blendMode=r?u.BLENDMODE_STANDARD:u.BLENDMODE_ADD,s.emitRate=0,s.manualEmitCount=r?45:32,s.start(),!r){let r=this.smokeSystems[o];r||(r=new u(`gun-smoke`,32,this.scene),r.particleTexture=this.bridge.texture(this.smokeMap),this.smokeSystems[o]=r),r.stop(),r.reset(),r.emitter=new g(e,t,n),r.direction1=new g(-1,1,-1).add(c.scale(.2)),r.direction2=new g(2,4,2).add(c.scale(.35)),r.minEmitPower=.5,r.maxEmitPower=1,r.minLifeTime=1.2,r.maxLifeTime=2.8,r.minSize=i*1.5,r.maxSize=i*3,r.gravity=new g(.4,.6,.2),r.color1=new y(.45,.43,.4,.28),r.color2=new y(.3,.33,.34,.2),r.colorDead=new y(.35,.39,.4,0),r.blendMode=u.BLENDMODE_STANDARD,r.emitRate=0,r.manualEmitCount=12,r.start()}}muzzle(e,t,n=203){this.burst(e.x,e.y,e.z,!1,Math.max(1,n/130),t),this.shockwaves.burst(e.x,e.z,Math.max(.7,n/203))}update(e,t){for(let t of e)this.seen.has(t)||(this.seen.add(t),t.kind!==`cast`&&this.burst(t.x,t.kind===`splash`?.5:3,t.z,t.kind===`splash`||t.kind===`underwater`,t.kind===`boom`?4:1.5));for(let e of[...this.systems,...this.smokeSystems])e&&(e.updateSpeed=t>0?.01:0);this.shockwaves.update(t)}reset(){this.seen=new WeakSet;for(let e of[...this.systems,...this.smokeSystems])e&&(e.stop(),e.reset());this.shockwaves.reset()}dispose(){for(let e of[...this.systems,...this.smokeSystems])e&&e.dispose(!1);this.map.dispose(),this.smokeMap.dispose(),this.shockwaves.dispose()}};function we(e,t){let n=t?.canvas??document.createElement(`canvas`),r=t?.engine??new o(n,!1,{preserveDrawingBuffer:!1,stencil:!0,powerPreference:`high-performance`},!1),i=new c(r);i.useRightHandedSystem=!0,i.clearColor=new y(.36,.51,.59,1),i.imageProcessingConfiguration.toneMappingEnabled=!0,i.imageProcessingConfiguration.toneMappingType=s.TONEMAPPING_ACES;let a=new l(`tactical-camera`,new g(0,100,100),i);a.minZ=.5,a.maxZ=6500;let u=new te(`skylight`,new g(0,1,0),i);u.intensity=1.1,u.groundColor=new b(.17,.22,.25);let f=Array.from({length:6},(e,t)=>{let n=new Uint8Array(4096);for(let e=0;e<32;e++)for(let r=0;r<32;r++){let i=t===2?1:t===3?0:1-e/31,a=(e*32+r)*4;n[a]=35+i*100,n[a+1]=55+i*115,n[a+2]=65+i*125,n[a+3]=255}return n}),p=new ie(i,f,32,C.TEXTUREFORMAT_RGBA,C.TEXTURETYPE_UNSIGNED_BYTE,!0,!1,w.TRILINEAR_SAMPLINGMODE);p.gammaSpace=!1,i.environmentTexture=p;let m=new ee(`sun`,new g(.45,-.42,.72).normalize(),i);m.intensity=2.2;let _=new Se(i,new URLSearchParams(location.search).get(`auxiliaryDetails`)!==`full`),v=1,x,S,T,E={render:{calls:0,triangles:0,points:0,lines:0},memory:{geometries:0,textures:0}},D=new URLSearchParams(location.search).has(`renderProfile`),k={};if(D){Object.assign(E,{profile:k});for(let[e,t,n]of[[`activeMeshes`,i.onBeforeActiveMeshesEvaluationObservable,i.onAfterActiveMeshesEvaluationObservable],[`targets`,i.onBeforeRenderTargetsRenderObservable,i.onAfterRenderTargetsRenderObservable],[`draw`,i.onBeforeDrawPhaseObservable,i.onAfterDrawPhaseObservable]]){let i=0,a=0;t.add(()=>{i=performance.now(),a=r._drawCalls.current}),n.add(()=>{k[e]=(k[e]??0)+performance.now()-i,k[e+`Calls`]=(k[e+`Calls`]??0)+r._drawCalls.current-a})}}e.dataset.gpuName=r instanceof o?r.getGlInfo().renderer:`WebGPU`,e.dataset.renderer=t?`webtide`:`babylon`;let A={domElement:n,info:E,shadowMap:{enabled:!1,needsUpdate:!1,autoUpdate:!1},toneMappingExposure:.85,setPixelRatio:e=>{v=e},getPixelRatio:()=>v,setSize:(e,t)=>{n.style.width=`${e}px`,n.style.height=`${t}px`,r.setSize(Math.max(1,Math.round(e*v)),Math.max(1,Math.round(t*v)))},dispose:()=>{}},j,M,N,P;return{renderer:A,createSea(e){M=t?t.sea(i):new $(i),j=M.material,T&&M.apply(T),e.add(M.mesh,M.sky);let n=new oe;return{mesh:M.mesh,sky:M.sky,light:n,sun:new J(-.45,.42,-.72).normalize(),cachedSky:{set:()=>{},dispose:()=>{}},update:e=>M.update(e),dispose:()=>M.dispose()}},createImpacts:e=>new URLSearchParams(location.search).get(`vfx`)===`legacy`?new Ce(i,_,e):new O(i),createEnergyBeams:()=>new URLSearchParams(location.search).get(`energyVfx`)===`legacy`?void 0:new re(i,new URLSearchParams(location.search).get(`energyParticles`)===`native`),applyGraphics(e){T=e,M?.apply(e),i.imageProcessingConfiguration.exposure=e.exposure,e.aa&&!x?x=new d(`edge-aa`,1,a):!e.aa&&x&&(x.dispose(a),x=void 0),e.shadows&&!S?(S=new ne(1024,m),S.usePercentageCloserFiltering=!0,S.bias=.001,S.getShadowMap().onBeforeBindObservable.add(()=>{P=N?.begin()}),S.getShadowMap().onAfterUnbindObservable.add(()=>{P?.(),P=void 0})):!e.shadows&&S&&(S.dispose(),S=void 0)},render(n,s,c){if(D)for(let e of Object.keys(k))k[e]=0;let l=D?performance.now():0,u=0,d=e=>{if(!D)return;let t=performance.now();k[e]=t-l,k[e+`Calls`]=r._drawCalls.current-u,l=t,u=r._drawCalls.current};r.beginFrame(),r._drawCalls.fetchNewFrame(),d(`begin`),M?.simulate(),d(`oceanSimulation`),a.position.set(s.position.x,s.position.y,s.position.z),a.rotationQuaternion=new h(s.quaternion.x,s.quaternion.y,s.quaternion.z,s.quaternion.w),a.fov=s.fov*Math.PI/180,a.minZ=s.near,a.maxZ=s.far,j&&j.uniforms.cameraPosition.value.copy(s.position),d(`camera`),_.sync(n),d(`bridge`),N=c&&(S||T?.reflection)&&new URLSearchParams(location.search).get(`shipPassLOD`)!==`main`?_.prepareAuxiliary(n,c):void 0,d(`auxiliarySync`),m.position.copyFrom(a.position).addInPlace(new g(-100,180,-120)),S&&(S.getShadowMap().renderList=(N?.meshes??i.meshes).filter(e=>(N||e.isEnabled())&&e.receiveShadows&&e.metadata?.castShadow)),d(`shadowList`);let f=N?.begin();try{M?.renderReflection(N?.meshes)}finally{f?.()}d(`reflection`);try{i.render()}finally{P?.(),P=void 0}E.render.calls=r._drawCalls.current,E.render.triangles=i.getActiveIndices()/3,E.memory.geometries=i.geometries.length,E.memory.textures=i.textures.length,r.endFrame(),d(`scene`),e.dataset.renderer=t?`webtide`:`babylon`,e.dataset.babylonVersion=o.Version,e.dataset.waterQuality=String(T?.water??1)},dispose(){x?.dispose(a),S?.dispose(),_.dispose(),i.dispose(),r.dispose()}}}export{$ as n,we as t};