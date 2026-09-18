import{b as e,t,y as n}from"./mesh.pure-ECA1_wkB.js";import{s as r}from"./math.vector.pure-DvOxp7ND.js";import{t as i}from"./constants-DfNKfgSv.js";import{n as a}from"./texture.pure-BPVTPqcA.js";import"./babylon-runtime-D01J63DY.js";import{n as o,r as s}from"./water-entry-ByrRwiyZ.js";import"./instancesDeclaration-CJBvtBV5.js";import"./instancesVertex-C-FoRQR1.js";var c=`
vec2 lazyFrameUV(vec2 localUV,float frame){
 return (vec2(mod(frame,6.),floor(frame/6.))+mix(vec2(.5/128.),vec2(127.5/128.),vec2(localUV.x,1.-localUV.y)))/6.;
}
vec4 lazyFlipbook(vec2 localUV,float frame){
 float f=clamp(frame,0.,35.);
 vec4 a=texture2D(particleMap,lazyFrameUV(localUV,floor(f)));
 vec4 b=texture2D(particleMap,lazyFrameUV(localUV,min(35.,floor(f)+1.)));
 // Premultiplied interpolation preserves soft transparent edges.
 float alpha=mix(a.a,b.a,fract(f));
 vec3 rgb=mix(a.rgb*a.a,b.rgb*b.a,fract(f))/max(alpha,.0001);
 return vec4(rgb,alpha);
}`;function l(e=127,t=0){let n=((Number.isFinite(e)?Math.max(20,Math.min(510,e)):127)/127)**.8,r=Math.abs(Math.trunc(t))%3;return{variant:r,height:16*n*[1.15,.8,1][r],width:8*n*[.75,1.35,1][r],duration:1.6+.45*n,scale:n}}function u(e=65,t=0,n=`torpedo`){let r=Math.max(.45,((Number.isFinite(e)?Math.max(0,Math.min(400,e)):65)/65)**.45),i=Math.abs(Math.trunc(t))%3;return{variant:3+i,height:27*r*[1,.9,1.1][i],width:(n===`mine`?23:18)*r,duration:2+.7*r,scale:r}}var d=1024;function f(e,t){return Number.isFinite(e)&&e<(t?130:105)}function p(e,t,n,r,i){let a=1/0,o=-1/0,s=1/0,c=-1/0,l=e.shallow*e.shallow,u=Math.max(0,Math.min(1,(e.shallow-.82)/.175)),d=u*u*(3-2*u),f=1+.8*l,p=.38*l+.7*d,m=Math.cos(e.angle),h=Math.sin(e.angle);for(let l of[t[0],t[3]])for(let u of[t[1],t[4]])for(let g of[t[2],t[5]]){let t=(l*f+u*p)*e.width,_=g*(1+.18*d)*e.width,v=e.x+m*t+h*_,y=.12+u*e.height,b=e.z-h*t+m*_,x=n[3]*v+n[7]*y+n[11]*b+n[15];if(x<=.001)return 1/0;let S=(n[0]*v+n[4]*y+n[8]*b+n[12])/x*r*.5,C=(n[1]*v+n[5]*y+n[9]*b+n[13])/x*i*.5;a=Math.min(a,S),o=Math.max(o,S),s=Math.min(s,C),c=Math.max(c,C)}return Math.max(o-a,c-s)*1.15}function m(e,t,n,r=16){let i=[];for(let r=0;r<e.length;r++){let a=e[r];if(a.born>t||a.end<=t)continue;let o=(a.x-n.x)**2+(a.z-n.z)**2;o<=900**2&&i.push({index:r,distance:o})}return i.sort((e,t)=>e.distance-t.distance||e.index-t.index),i.slice(0,r).map(e=>e.index).sort((e,t)=>e-t)}function h(e,t,n,r,i,a){let o=i*a;if(e.length%4||e.length/4<t*n*o)throw Error(`Invalid splash pose layout`);let s=new Uint16Array(e.length/4);for(let i=0;i<t;i++)for(let t=0;t<r;t++){let r=0;for(let a=0;a<n;a++){let c=(i*n+a)*o+t,l=e[c*4+1];l<31744&&(r=Math.max(r,l)),s[c]=r}}return s}var g=d,_=class{scene;mesh;material;texture;launchTexture;spray;sprayMaterial;coarseMesh;coarseSpray;coarseMatrices=new Float32Array(256);coarseTiming=new Float32Array(64);fullSelected=[];coarseSelected=[];coarseSlots=new Uint8Array(g);pixelLOD=new URLSearchParams(location.search).get(`splashLOD`)!==`0`;fullDrawnCount=0;coarseDrawnCount=0;detailBounds=[];noiseTexture;instancesDirty=!0;selected=[];disposed=!1;abort=new AbortController;duration=3.25;slots=Array.from({length:g},()=>({end:0,born:0,x:0,z:0,height:0,width:0,angle:0,shallow:0,variant:0,mistSlot:-1}));detailedMistSlots(){return this.selected.map(e=>this.slots[e].mistSlot).filter(e=>e>=0)}variants=[];variantOrder=[];lastVariant=-1;bagCounter=0;matrices=new Float32Array(256);timing=new Float32Array(64);ready=!1;error=``;activeCount=0;drawnCount=0;constructor(e){this.scene=e,this.load()}async load(){try{let o=this.scene.getEngine().getCaps();if(!o.textureHalfFloat||o.maxVertexTextureImageUnits<1)throw Error(`Vertex half-float textures unavailable`);let c={signal:this.abort.signal},l=typeof DecompressionStream<`u`,u=await Promise.all([fetch(`./vfx/shell-splash/mesh.json`,c),fetch(`./vfx/shell-splash/poses.bin`+(l?`.gz`:``),c)]);if(u.some(e=>!e.ok))throw Error(`Splash cache download failed`);let d=l&&!u[1].headers.get(`Content-Encoding`)?.toLowerCase().includes(`gzip`),[f,p]=await Promise.all([u[0].json(),d?new Response(u[1].body.pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer():u[1].arrayBuffer()]);if(this.disposed)return;if(f.version!==3||!f.variants?.length||f.encoding!==`position-half-normal-oct10`||p.byteLength!==f.width*f.textureHeight*8||f.textureHeight>o.maxTextureSize)throw Error(`Invalid splash cache`);this.variants=f.variants,this.detailBounds=f.detailBounds??[],this.duration=f.duration;let m=this.mesh=new t(`blender-shell-water`,this.scene);m.setVerticesData(`position`,f.positions.flat()),m.setIndices(f.indices),m.setVerticesData(`cacheVertex`,Array.from({length:f.vertices},(e,t)=>[t,f.kind[t]]).flat(),!1,2),this.texture=new e(new Uint16Array(p),f.width,f.textureHeight,i.TEXTUREFORMAT_RGBA,this.scene,!1,!1,a.NEAREST_SAMPLINGMODE,i.TEXTURETYPE_HALF_FLOAT),this.texture.wrapU=this.texture.wrapV=a.CLAMP_ADDRESSMODE,this.texture.gammaSpace=!1,this.launchTexture=new e(h(new Uint16Array(p),f.variants.length,f.frames,f.vertices,f.width,f.rowsPerPose),f.width,f.textureHeight,i.TEXTUREFORMAT_R,this.scene,!1,!1,a.NEAREST_SAMPLINGMODE,i.TEXTURETYPE_HALF_FLOAT),this.launchTexture.wrapU=this.launchTexture.wrapV=a.CLAMP_ADDRESSMODE,this.launchTexture.gammaSpace=!1;let g=new Uint8Array(32768),_=new Uint8Array(147968),v=293;for(let e=0;e<g.length;e++)v=Math.imul(v,1664525)+1013904223>>>0,g[e]=v>>>24;for(let e=0;e<32;e++)for(let t=0;t<34;t++)for(let n=0;n<34;n++){let r=g[e*1024+(t+31)%32*32+(n+31)%32],i=((e*34+t)*34+n)*4;_[i]=_[i+1]=_[i+2]=r,_[i+3]=255}this.noiseTexture=e.CreateRGBATexture(_,34,1088,this.scene,!1,!1,a.BILINEAR_SAMPLINGMODE),this.noiseTexture.gammaSpace=!1,this.noiseTexture.wrapU=this.noiseTexture.wrapV=a.CLAMP_ADDRESSMODE;let y=this.material=new n(`blender-water-foam`,this.scene,{vertexSource:`precision highp float;
attribute vec3 position;attribute vec2 cacheVertex;attribute vec4 splashTime;
uniform mat4 viewProjection;uniform float clock;uniform sampler2D poses;uniform sampler2D launchHeights;uniform vec4 cacheLayout;
varying vec3 localP;varying vec3 worldN;varying vec3 worldP;varying float life;varying float droplet;
#include<instancesDeclaration>
${s}
vec4 readPose(float frame){
 float row=floor(cacheVertex.x/cacheLayout.x)+(frame+splashTime.w*cacheLayout.w)*cacheLayout.z;
 return texture2D(poses,vec2((mod(cacheVertex.x,cacheLayout.x)+.5)/cacheLayout.x,(row+.5)/cacheLayout.y));
}
float readLaunchHeight(float frame){
 float row=floor(cacheVertex.x/cacheLayout.x)+(frame+splashTime.w*cacheLayout.w)*cacheLayout.z;
 return texture2D(launchHeights,vec2((mod(cacheVertex.x,cacheLayout.x)+.5)/cacheLayout.x,(row+.5)/cacheLayout.y)).r;
}
vec3 decodeNormal(float encodedNormal){
 vec2 f=vec2(mod(encodedNormal,32.),floor(encodedNormal/32.))/31.*2.-1.;vec3 n=vec3(f,1.-abs(f.x)-abs(f.y));
 if(n.z<0.)n.xy=(1.-abs(n.yx))*mix(vec2(-1.),vec2(1.),step(vec2(0.),n.xy));
 return normalize(n);
}
void main(){
#include<instancesVertex>
 life=clamp((clock-splashTime.x)/splashTime.y,0.,1.);
 float frame=life*(cacheLayout.w-1.);float lo=floor(frame),hi=min(lo+1.,cacheLayout.w-1.);
 vec4 a=readPose(lo),b=readPose(hi);
 vec3 p=mix(a.xyz,b.xyz,fract(frame));
 vec3 n=normalize(mix(decodeNormal(a.w),decodeNormal(b.w),fract(frame)));
 float oblique=splashTime.z*splashTime.z,grazing=entryGrazing(splashTime.z);
 float stretch=1.+.8*oblique,shear=.38*oblique+.7*grazing;
 // Entry biases the launch only. Falling height must not pull water back
 // toward the impact: gravity remains vertical in world space.
 float launchHeight=mix(readLaunchHeight(lo),readLaunchHeight(hi),fract(frame));
 float rising=step(launchHeight-.002,p.y);
 p.x=p.x*stretch+launchHeight*shear;
 p.z*=1.+.18*grazing;
 n=normalize(vec3(n.x/stretch,n.y-rising*shear*n.x/stretch,n.z/(1.+.18*grazing)));
 localP=p;droplet=cacheVertex.y;worldP=(finalWorld*vec4(p,1.)).xyz;
 worldN=normalize(finalWorld[0].xyz*n.x/max(.001,dot(finalWorld[0].xyz,finalWorld[0].xyz))+finalWorld[1].xyz*n.y/max(.001,dot(finalWorld[1].xyz,finalWorld[1].xyz))+finalWorld[2].xyz*n.z/max(.001,dot(finalWorld[2].xyz,finalWorld[2].xyz)));gl_Position=viewProjection*vec4(worldP,1.);
}`,fragmentSource:`precision highp float;
varying vec3 localP;varying vec3 worldN;varying vec3 worldP;varying float life;varying float droplet;
uniform sampler2D surfaceNoise;uniform vec3 eye;
float noise(vec3 p){vec3 i=mod(floor(p),32.),f=fract(p);f=f*f*(3.-2.*f);
 vec2 xy=i.xy+vec2(1.5)+f.xy;
 float a=texture2D(surfaceNoise,vec2(xy.x/34.,(xy.y+i.z*34.)/1088.)).r;
 float b=texture2D(surfaceNoise,vec2(xy.x/34.,(xy.y+mod(i.z+1.,32.)*34.)/1088.)).r;
 return mix(a,b,f.z);}
void main(){
 if(worldP.y<.05||life>=.985)discard;
 float coarse=noise(localP*vec3(62.,24.,62.)+vec3(0.,life*6.,0.));
 float fine=noise(localP*185.);float grain=coarse*.65+fine*.35;
 // A connected lower body launches first; upper fingers break up before the root.
 // Dense early water must not read as uniformly perforated smoke.
 float erosion=mix(.26,.73,smoothstep(.30,.95,life));
 erosion+=smoothstep(.30,.95,localP.y)*.16;
 // kind 1 is a detached drop; kind 2 is a breaking thin jet, not a solid drop.
 if(abs(droplet-1.)>.25&&grain<erosion)discard;
 vec3 normal=normalize(worldN);
 float light=max(0.,dot(normal,normalize(vec3(-.6,1.,-.4))));
 // Aerated water has broad diffuse shading. Strong tube-normal contrast
 // previously exposed every underlying strand as a hard ice-like surface.
 vec3 color=mix(vec3(.40,.48,.50),vec3(.94,.97,.96),clamp(.38+light*.42+(grain-.5)*.18,0.,1.));
 float density=mix(.60,.30,smoothstep(.25,.85,life));
 float waterJoin=smoothstep(.08,2.2,worldP.y);
 // Approximate a soft volume boundary while keeping the middle substantial.
 // Detached small drops keep their visibility; they must not flicker by facing.
 float facing=abs(dot(normal,normalize(eye-worldP)));
 float rim=mix(.16,1.,smoothstep(.02,.58,facing));
 if(abs(droplet-1.)<.25)rim=1.;
 gl_FragColor=vec4(color,mix(density*.78,density,smoothstep(.25,.70,grain))*waterJoin*rim*(droplet<.5?.60:1.));
}`},{attributes:[`position`,`cacheVertex`,`splashTime`],uniforms:[`world`,`viewProjection`,`clock`,`cacheLayout`,`eye`],samplers:[`poses`,`launchHeights`,`surfaceNoise`],needAlphaBlending:!0});if(y.setTexture(`launchHeights`,this.launchTexture),y.setTexture(`surfaceNoise`,this.noiseTexture),y.setTexture(`poses`,this.texture),y.setVector4(`cacheLayout`,new r(f.width,f.textureHeight,f.rowsPerPose,f.frames)),y.backFaceCulling=!1,y.disableDepthWrite=!0,m.material=y,m.isPickable=!1,m.alwaysSelectAsActiveMesh=!0,m.thinInstanceSetBuffer(`matrix`,this.matrices,16,!1),m.thinInstanceSetBuffer(`splashTime`,this.timing,4,!1),m.thinInstanceCount=1,m.setEnabled(!1),await y.forceCompilationAsync(m,{useInstances:!0}),this.disposed)return;let b=this.spray=new t(`blender-water-surface-spray`,this.scene),x=[],S=[],C=[],w=[];for(let e=0;e<f.vertices;e+=12){if(f.kind[e])continue;let t=x.length/3;for(let[t,n]of[[-1,-1],[1,-1],[-1,1],[1,1]])x.push(...f.positions[e]),S.push(e,0),C.push(t,n);w.push(t,t+2,t+1,t+1,t+2,t+3)}b.setVerticesData(`position`,x),b.setVerticesData(`cacheVertex`,S,!1,2),b.setVerticesData(`corner`,C,!1,2),b.setIndices(w);let T=y.shaderPath.vertexSource.replace(`attribute vec3 position;`,`attribute vec3 position;attribute vec2 corner;uniform vec3 eye;varying vec2 puffUV;varying float puffSeed;`).replace(`worldN=normalize`,`puffUV=corner;
     vec3 toward=normalize(eye-worldP);vec3 right=normalize(cross(vec3(0.,1.,0.),toward)+vec3(.0001,0.,0.));vec3 up=cross(toward,right);
     puffSeed=fract(cacheVertex.x*.618033);
     // Irregular spray clusters soften the actual 3D surface, including its silhouette.
     // Larger wisps develop as water breaks up; avoid a uniformly fuzzy launch.
     float breakup=smoothstep(.06,.32,life);
     float size=length(finalWorld[1].xyz)*(.018+.025*puffSeed)*(.65+.55*breakup);
     vec3 outward=normalize(finalWorld[0].xyz*n.x+finalWorld[1].xyz*n.y+finalWorld[2].xyz*n.z);
     float release=max(0.,life-.10);
     worldP+=outward*length(finalWorld[1].xyz)*release*(.035+.07*fract(cacheVertex.x*.371));
     worldP.y-=length(finalWorld[1].xyz)*release*release*.18;
     // Project a vertically stretched 3D spray cluster: at high elevation its
     // vertical extent foreshortens, rather than staying a long upright sticker.
     float verticalStretch=sqrt(1.44*(1.-toward.y*toward.y)+.5625*toward.y*toward.y);
     worldP+=(right*corner.x*.75+up*corner.y*verticalStretch)*size;
     worldN=normalize`),E=this.sprayMaterial=new n(`blender-surface-mist`,this.scene,{vertexSource:T,fragmentSource:`precision highp float;
varying vec2 puffUV;varying vec3 localP;varying float life;varying vec3 worldP;
varying float puffSeed;
varying vec3 worldN;
uniform sampler2D surfaceNoise;
void main(){
 float r=length(puffUV);if(r>1.||worldP.y<.08)discard;
 vec2 coord=puffUV*.5+.5;
 float coarse=texture2D(surfaceNoise,vec2((coord.x*8.+puffSeed*19.+1.5)/34.,(coord.y*8.+puffSeed*17.+1.5)/1088.)).r;
 float fine=texture2D(surfaceNoise,vec2((coord.x*24.+1.5)/34.,(coord.y*24.+floor(puffSeed*31.)*34.+1.5)/1088.)).r;
 float edge=1.-smoothstep(.30,1.,r+(coarse-.5)*.55+(fine-.5)*.10);
 float thickness=sqrt(max(0.,1.-r*r));
 float alpha=edge*(.36+.25*coarse)*thickness*smoothstep(0.,.04,life)*(1.-smoothstep(.38,.94,life))*smoothstep(.08,1.2,worldP.y);
 vec3 normal=normalize(worldN);
 float light=max(0.,dot(normal,normalize(vec3(-.6,1.,-.4))));
 float shade=clamp(.24+light*.54+(coarse-.5)*.20+(fine-.5)*.13,0.,1.);
 vec3 color=mix(vec3(.38,.48,.52),vec3(.95,.98,.97),shade);
 gl_FragColor=vec4(color,alpha);
}`},{attributes:[`position`,`cacheVertex`,`corner`,`splashTime`],uniforms:[`world`,`viewProjection`,`clock`,`cacheLayout`,`eye`],samplers:[`poses`,`launchHeights`,`surfaceNoise`],needAlphaBlending:!0});if(E.setTexture(`launchHeights`,this.launchTexture),E.setTexture(`surfaceNoise`,this.noiseTexture),E.setTexture(`poses`,this.texture),E.setVector4(`cacheLayout`,new r(f.width,f.textureHeight,f.rowsPerPose,f.frames)),E.backFaceCulling=!1,E.disableDepthWrite=!0,b.material=E,b.isPickable=!1,b.alwaysSelectAsActiveMesh=!0,b.thinInstanceSetBuffer(`matrix`,this.matrices,16,!1),b.thinInstanceSetBuffer(`splashTime`,this.timing,4,!1),b.thinInstanceCount=1,b.setEnabled(!1),await E.forceCompilationAsync(b,{useInstances:!0}),f.coarseIndices?.length){let e=this.coarseMesh=new t(`blender-shell-water-small`,this.scene);e.setVerticesData(`position`,f.positions.flat()),e.setIndices(f.coarseIndices),e.setVerticesData(`cacheVertex`,Array.from({length:f.vertices},(e,t)=>[t,f.kind[t]]).flat(),!1,2);let n=this.coarseSpray=new t(`blender-water-surface-spray-small`,this.scene);n.setVerticesData(`position`,x),n.setVerticesData(`cacheVertex`,S,!1,2),n.setVerticesData(`corner`,C,!1,2),n.setIndices(w);for(let[t,r]of[[e,y],[n,E]])t.material=r,t.isPickable=!1,t.alwaysSelectAsActiveMesh=!0,t.thinInstanceSetBuffer(`matrix`,this.coarseMatrices,16,!1),t.thinInstanceSetBuffer(`splashTime`,this.coarseTiming,4,!1),t.thinInstanceCount=1,t.setEnabled(!1),await r.forceCompilationAsync(t,{useInstances:!0})}this.disposed||(this.ready=!0)}catch(e){this.disposed||(this.error=String(e),console.warn(`Authored splash fallback:`,e))}}emit(e,t,n,r,i,a,s,c=-1){if(!this.ready)return!1;let u=this.slots.findIndex(e=>e.end<=i);if(u<0)return!1;let d=this.slots[u],f=l(n,r),p=o(a);if(s===void 0&&!this.variantOrder.length){this.variantOrder=this.variants.map((e,t)=>t);let e=(Math.trunc(r)^++this.bagCounter*2654435769)>>>0;for(let t=this.variantOrder.length-1;t>0;t--){e=Math.imul(e,1664525)+1013904223>>>0;let n=e%(t+1);[this.variantOrder[t],this.variantOrder[n]]=[this.variantOrder[n],this.variantOrder[t]]}let t=this.variantOrder.length-1;t>0&&this.variantOrder[t]===this.lastVariant&&([this.variantOrder[0],this.variantOrder[t]]=[this.variantOrder[t],this.variantOrder[0]])}let m=s===void 0?this.variantOrder.pop():Math.max(0,Math.min(this.variants.length-1,Math.trunc(s)));return s===void 0&&(this.lastVariant=m),Object.assign(d,{x:e,z:t,born:i,end:i+Math.min(this.duration,f.duration*1.18)*p.duration,height:f.height*p.height,width:f.width/.38,angle:a?Math.atan2(-p.z,p.x):r*2.399,shallow:p.shallow,variant:m,mistSlot:c}),this.coarseSlots[u]=0,this.instancesDirty=!0,!0}update(e){if(!this.ready||!this.mesh||!this.material)return;this.activeCount=this.slots.reduce((t,n)=>t+Number(n.born<=e&&n.end>e),0);let t=m(this.slots,e,this.scene.activeCamera.globalPosition),n=[],r=[],i=this.scene.getEngine(),a=i.getRenderingCanvas(),o=a?.clientWidth||i.getRenderWidth(),s=a?.clientHeight||i.getRenderHeight(),c=this.scene.getTransformMatrix().m;for(let e of t){let t=this.slots[e],i=p(t,this.detailBounds[t.variant]??[-.3,0,-.3,.3,1.1,.3],c,o,s),a=this.pixelLOD&&!!this.coarseMesh&&f(i,!!this.coarseSlots[e]);this.coarseSlots[e]=Number(a),(a?r:n).push(e)}let l=(e,t,n,r,i)=>{let a=this.instancesDirty||e.length!==t.length||e.some((e,n)=>e!==t[n]),o=0;if(a)for(let t of e){let e=this.slots[t],i=o*16,a=Math.cos(e.angle),s=Math.sin(e.angle);n.fill(0,i,i+16),n[i]=a*e.width,n[i+2]=-s*e.width,n[i+5]=e.height,n[i+8]=s*e.width,n[i+10]=a*e.width,n[i+12]=e.x,n[i+13]=.12,n[i+14]=e.z,n[i+15]=1,r.set([e.born,e.end-e.born,e.shallow,e.variant],o*4),o++}for(let t of i)t&&(t.setEnabled(e.length>0),t.thinInstanceCount=e.length,e.length&&a&&(t.thinInstanceBufferUpdated(`matrix`),t.thinInstanceBufferUpdated(`splashTime`)))};if(l(n,this.fullSelected,this.matrices,this.timing,[this.mesh,this.spray]),l(r,this.coarseSelected,this.coarseMatrices,this.coarseTiming,[this.coarseMesh,this.coarseSpray]),this.instancesDirty=!1,this.selected=t,this.fullSelected=n,this.coarseSelected=r,this.drawnCount=t.length,this.fullDrawnCount=n.length,this.coarseDrawnCount=r.length,t.length)for(let t of[this.material,this.sprayMaterial])t&&(t.setFloat(`clock`,e),t.setVector3(`eye`,this.scene.activeCamera.globalPosition))}reset(){for(let e of this.slots)e.end=0;this.activeCount=0,this.drawnCount=this.fullDrawnCount=this.coarseDrawnCount=0,this.instancesDirty=!0,this.selected=[],this.fullSelected=[],this.coarseSelected=[],this.coarseSlots.fill(0);for(let e of[this.mesh,this.spray,this.coarseMesh,this.coarseSpray])e?.setEnabled(!1)}dispose(){this.disposed=!0,this.abort.abort(),this.ready=!1,this.mesh?.dispose(),this.material?.dispose(),this.spray?.dispose(),this.coarseMesh?.dispose(),this.coarseSpray?.dispose(),this.sprayMaterial?.dispose(),this.texture?.dispose(),this.launchTexture?.dispose(),this.noiseTexture?.dispose()}},v=[.21259843,.18110236,.77952756,.77952756,.19685039,.17322835,.79527559,.78740157,.18897638,.15748031,.81102362,.79527559,.17322835,.15748031,.82677165,.80314961,.16535433,.14173228,.83464567,.81889764,.15748031,.1496063,.8503937,.84251969,.1496063,.13385827,.8503937,.8503937,.15748031,.12598425,.85826772,.86614173,.14173228,.11811024,.86614173,.86614173,.12598425,.11811024,.86614173,.86614173,.11811024,.11023622,.86614173,.88188976,.11811024,.11023622,.86614173,.88976378,.11023622,.11023622,.87401575,.8976378,.1023622,.11023622,.88976378,.91338583,.1023622,.11811024,.90551181,.93700787,.1023622,.11811024,.92125984,.94488189,.1023622,.12598425,.92125984,.94488189,.1023622,.11811024,.92913386,.95275591,.09448819,.11023622,.92913386,.95275591,.09448819,.11023622,.92913386,.95275591,.08661417,.1023622,.92913386,.96062992,.07874016,.08661417,.93700787,.97637795,.07874016,.08661417,.96062992,.97637795,.07086614,.07874016,.96850394,.99212598,.06299213,.07874016,.96850394,.99212598,.04724409,.08661417,.96062992,1,.03937008,.09448819,.96850394,1,.03937008,.1023622,.96850394,1,.03937008,.09448819,.99212598,1,.03149606,.09448819,1,1,.03937008,.09448819,1,1,.03937008,.07086614,1,1,.03937008,.07086614,1,1,.03937008,.07086614,.99212598,1,.07086614,.07086614,1,1,.07874016,.12598425,.98425197,1],y=9,b=36,x=d,S=1.65,C=class{scene;authored;mesh;material;texture;origins=new Float32Array(x*b*4);profiles=new Float32Array(x*b*4);entries=new Float32Array(x*b*3);detail=new Float32Array(x*b);detailSlots=[];ends=new Float64Array(x);cursor=0;dirty=!1;mistPixelLOD=new URLSearchParams(location.search).get(`mistPixelLOD`)!==`0`;constructor(e,r){this.scene=e,this.authored=new _(e),this.mesh=new t(`shell-water-columns`,e);let i=[],o=[];for(let e=0;e<x;e++)for(let e=0;e<y;e++){let t=i.length/3,n=e<5?e:e+2;i.push(-1,-1,n,1,-1,n,-1,1,n,1,1,n),o.push(t,t+2,t+1,t+1,t+2,t+3)}this.mesh.setVerticesData(`position`,i),this.mesh.setIndices(o),this.mesh.setVerticesData(`birth`,this.origins,!0,4),this.mesh.setVerticesData(`profile`,this.profiles,!0,4),this.mesh.setVerticesData(`entry`,this.entries,!0,3),this.mesh.setVerticesData(`detail`,this.detail,!0,1),this.texture=new a(`./vfx/lazy/smoke-atlas.png`,e,!1,!1,a.TRILINEAR_SAMPLINGMODE),this.texture.hasAlpha=!0,this.texture.gammaSpace=!1,this.texture.wrapU=this.texture.wrapV=a.CLAMP_ADDRESSMODE,this.material=new n(`shell-water-column-material`,e,{vertexSource:`precision highp float;
attribute vec3 position;attribute vec3 entry;attribute vec4 birth;attribute vec4 profile;attribute float detail;
uniform mat4 viewProjection;uniform vec3 eye;uniform float clock;uniform vec4 smokeBounds[36];uniform float pixelScale;uniform float pixelLOD;
varying vec2 uv;varying float age;varying float frame;varying float opacity;varying float waterHeight;varying float mergeLobe;
${s}
void main(){
 age=(clock-birth.w)/max(.001,profile.z);
 if(profile.z<=0.||age<0.||age>=1.){gl_Position=vec4(2.,2.,2.,1.);return;}
 float l=position.z;
 // Shell side jets now come from the 3D cache. The four broad smoke cards
 // read as crossed fins at low angles; retain them only for underwater blasts.
 if(l>=7.&&detail>.5){gl_Position=vec4(2.,2.,2.,1.);return;}
 float seed=fract(birth.x*.173+birth.z*.137+profile.w*.193);
 float side=mod(l,2.)*2.-1.;
 float level=floor(l*.5);
 // Keep the original launch/fan timing, stretching only the mist descent.
 float sourceAge=age*1.65;
 // The fan's existing opacity reaches exactly zero at sourceAge .62.
 // Every vertex in that quad shares its age: clip the whole invisible primitive
 // before rasterization instead of paying for fragments that only discard.
 if(l>=7.&&profile.w<2.5&&sourceAge>=.62){gl_Position=vec4(2.,2.,2.,1.);return;}
 float mistAge=sourceAge<=.3?sourceAge:.3+(sourceAge-.3)*(.7/1.35);
 float localAge=max(0.,mistAge-level*.025);
 float rise=1.-exp(-localAge*13.);
 float fall=smoothstep(.32,1.,localAge);
 float central=1.-step(.5,l);
 float spread=(.025+.035*level)*side*(.2+rise*.4+fall*1.5);
 vec3 toEye=normalize(eye-birth.xyz);
 vec3 right=normalize(vec3(toEye.z,0.,-toEye.x)+vec3(.00001,0.,0.));
 vec3 up=normalize(cross(toEye,right));
 float top=(.12+.23*level)*entryHeight(entry.z)*rise*(1.-.85*fall);
 float tall=mix(.68,1.,central)*profile.x*entryHeight(entry.z)*(.15+.85*rise)*(1.-.35*fall);
 float wide=profile.y*(1.15-.19*level)*(.45+.55*rise+fall*.5);
 vec2 driftDirection=vec2(sin(seed*9.+l*2.4),cos(seed*9.+l*2.4));
 vec3 center=birth.xyz+vec3(driftDirection.x,0.,driftDirection.y)*spread*profile.y;
 center.y+=max(tall*.5,top*profile.x);
 center.xz+=vec2(sin(seed*9.+l*2.4),cos(seed*9.+l*2.4))*profile.y*fall*.25;
 center.xz+=entry.xy*(entry.z*entry.z*.35+entryGrazing(entry.z)*.9)*profile.y*rise*(.4+level*.3);
 // At small screen sizes each left/right pair merges into one 3D-positioned
 // lobe. Fade between them; preserve combined opacity in the remaining lobe.
 mergeLobe=0.;float lobeWeight=1.;
 if(pixelLOD>.5&&profile.w<2.5&&l>.5&&l<4.5){
  float depth=(viewProjection*vec4(center,1.)).w;
  float pixels=max(wide,tall)*pixelScale/max(.01,depth);
  float pairDetail=smoothstep(45.,75.,pixels);
  if(mod(l,2.)>.5){lobeWeight=pairDetail;if(lobeWeight<=0.){gl_Position=vec4(2.,2.,2.,1.);return;}}
  else mergeLobe=1.-pairDetail;
 }
 // Four low ballistic fans establish the impact at the water surface.
 // They spread much faster than the vertical plume and return before its mist fades.
 // Keep texture coordinates undistorted; mist fades rather than folding at sea level.
 frame=clamp(localAge*34.+mod(l*3.+seed*5.,5.),0.,35.);
 // Union both sampled atlas frames. Keep the original UVs and world-space scale;
 // only omit the transparent margin, with padding for texture filtering.
 vec4 a=smokeBounds[int(floor(frame))],b=smokeBounds[int(min(35.,floor(frame)+1.))];
 vec4 bounds=vec4(min(a.xy,b.xy),max(a.zw,b.zw));
 // Far-away mip levels can spread alpha outside the eight-pixel guard.
 // Those quads cover few pixels, so retain their complete filtering footprint.
 if(dot(eye-center,eye-center)>1000000.)bounds=vec4(0.,0.,1.,1.);
 uv=mix(bounds.xy,bounds.zw,position.xy*.5+.5);
 vec2 cropped=uv*2.-1.;
 vec3 p=center+right*cropped.x*wide*.5+up*cropped.y*tall*.5;
 if(l>=7.){
  uv=position.xy*.5+.5;
  float t=clamp(sourceAge/.62,0.,1.);
  float a=(l-7.)*1.5707963+mix(seed*6.283185,atan(entry.x,entry.y),entry.z);
  vec2 d=vec2(sin(a),cos(a)),tangent=vec2(d.y,-d.x);
  float along=position.y*.5+.5;
  // Shell fallback uses narrow spray streaks, not four broad crossed cards.
  // Underwater blasts retain their existing broad surface fan.
  float fanWidth=mix(.012+.045*along,.03+.35*along,step(2.5,profile.w));
  vec2 offset=d*profile.y*(.15+2.3*t)*along+tangent*position.x*profile.y*fanWidth*(.5+t);
  // Forward stretching and drift grow continuously as entry becomes shallower.
  float grazing=entryGrazing(entry.z);
  offset+=entry.xy*dot(offset,entry.xy)*entry.z*entry.z*(1.1+grazing);
  offset+=entry.xy*profile.y*(entry.z*entry.z*1.4+grazing*2.)*t*along;
  p=birth.xyz+vec3(offset.x,along*profile.x*.2*entryHeight(entry.z)*4.*t*(1.-t),offset.y);
 }
 // Underwater pressure builds a low mound, then separates into rising lobes.
 // Reuse the nine existing cards instead of four flat radial fins. Horizontal
 // travel settles at the apex; descent thereafter is along world Y.
 if(profile.w>=2.5){
  float j=l<5.?l:l-2.;
  float a=j*2.399963+seed*6.283185;
  float onset=.045+fract(j*.37+seed)*.035;
  float travel=clamp((age-onset)/.78,0.,1.);
  float ascent=smoothstep(0.,.25,travel);
  float descent=smoothstep(.36,1.,travel);
  float radial=smoothstep(0.,.36,travel);
  float ring=j<2.5?j*.045:.18+fract(j*.618+seed)*.16;
  vec3 c=birth.xyz+vec3(sin(a)*ring*profile.y*radial,0.,cos(a)*ring*profile.y*radial);
  float h=profile.x*(.5+fract(j*.413+seed)*.4)*ascent*(1.-descent);
  float w=profile.y*(j<2.5?.85-j*.1:.48)*( .25+.75*ascent+.35*descent);
  float v=profile.x*(j<2.5?.95-j*.12:.4)*(.18+.82*ascent)*(1.-.68*descent);
  // First central lobe is the broad, low pressure mound at the waterline.
  float mound=1.-smoothstep(.035,.12,age);
  if(j<.5){w=mix(w,profile.y*.8,mound);v=mix(v,profile.x*.08,mound);}
  c.y+=v*.5+h*(j<2.5?.12:.4);
  frame=clamp(travel*31.+fract(j*.31)*3.,0.,35.);
  uv=position.xy*.5+.5;
  p=c+right*position.x*w*.5+up*position.y*v*.5;
 }
 waterHeight=p.y;
 // Shell mist supports the authored core; underwater blasts retain their broad envelope.
 float coverage=detail*(1.-smoothstep(.75,1.05,sourceAge));
 float mistDensity=mix(.72,.34,coverage);
 opacity=smoothstep(0.,.055,localAge)*(1.-smoothstep(.42,1.,mistAge))*mistDensity*lobeWeight;
 if(l>=7.){
  float sprayAge=clamp(sourceAge/.62,0.,1.);
  frame=5.+sprayAge*30.;
  opacity=smoothstep(0.,.025,sourceAge)*(1.-smoothstep(.3,.62,sourceAge))*.38;
 }
 if(profile.w>=2.5){
  float j=l<5.?l:l-2.;
  opacity=smoothstep(j<.5?0.:.055,j<.5?.025:.12,age)*(1.-smoothstep(.62,.98,age))*(j<.5?.7:.48);
  frame=clamp(max(0.,age-.05)/.78*31.+fract(j*.31)*3.,0.,35.);
 }
 gl_Position=viewProjection*vec4(p,1.);
}`,fragmentSource:`precision highp float;
uniform sampler2D particleMap;
varying vec2 uv;varying float age;varying float frame;varying float opacity;varying float waterHeight;varying float mergeLobe;
${c}
void main(){
 if(age<0.||age>=1.||opacity<=0.||waterHeight<=.15)discard;
 float lowerWidth=mix(1.22,.65,smoothstep(.1,.95,uv.y));
 if(abs(uv.x-.5)*2.>=lowerWidth)discard;
 vec4 tex=lazyFlipbook(uv,frame);
 float shade=dot(tex.rgb,vec3(.333333));
 vec3 color=mix(vec3(.57,.72,.79),vec3(.97,.99,1.),smoothstep(.25,.95,shade));
 float border=smoothstep(0.,.12,uv.x)*smoothstep(0.,.12,1.-uv.x)*smoothstep(0.,.09,uv.y)*smoothstep(0.,.12,1.-uv.y);
 float contour=1.-smoothstep(lowerWidth*.65,lowerWidth,abs(uv.x-.5)*2.);
 float waterFade=smoothstep(.15,2.,waterHeight);
 float alpha=tex.a*opacity*border*contour*waterFade;
 gl_FragColor=vec4(color,alpha+mergeLobe*alpha*(1.-alpha));
}`},{attributes:[`position`,`birth`,`profile`,`entry`,`detail`],uniforms:[`viewProjection`,`eye`,`clock`,`smokeBounds`,`pixelScale`,`pixelLOD`],samplers:[`particleMap`],needAlphaBlending:!0}),this.material.setArray4(`smokeBounds`,v),this.material.setTexture(`particleMap`,this.texture),this.material.backFaceCulling=!1,this.material.disableDepthWrite=!0,this.mesh.material=this.material,this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setEnabled(!1)}emit(e,t,n,r,i,a,s=`torpedo`,c,d){c&&=o(c);let f=a===void 0?0:800,p=a===void 0?800:x-800,m=-1;for(let e=0;e<p;e++){let t=f+(this.cursor+e)%p;if(this.ends[t]<=i){m=t;break}}if(m<0)return!1;this.cursor=(m+1)%x,a===void 0&&this.authored.emit(e,t,n,r,i,c,d,m);let h=a===void 0?l(n,r):u(a,r,s);for(let n=0;n<b;n++){let r=m*b*4+n*4;this.origins[r]=e,this.origins[r+1]=.35,this.origins[r+2]=t,this.origins[r+3]=i,this.profiles[r]=h.height,this.profiles[r+1]=h.width,this.profiles[r+2]=h.duration*S,this.profiles[r+3]=h.variant}for(let e=0;e<b;e++){let t=(m*b+e)*3;this.entries[t]=c?.x??0,this.entries[t+1]=c?.z??1,this.entries[t+2]=c?.shallow??0}return this.ends[m]=i+h.duration*S,this.dirty=!0,!0}isReady(){return this.texture.isReady()&&this.material.isReady(this.mesh)}update(e){this.authored.update(e);let t=this.authored.detailedMistSlots().sort((e,t)=>e-t);if(t.length!==this.detailSlots.length||t.some((e,t)=>e!==this.detailSlots[t])){this.detail.fill(0);for(let e of t)this.detail.fill(1,e*b,(e+1)*b);this.mesh.updateVerticesData(`detail`,this.detail),this.detailSlots=t}let n=this.ends.some(t=>t>e);if(this.mesh.setEnabled(n),!n)return;this.dirty&&=(this.mesh.updateVerticesData(`birth`,this.origins),this.mesh.updateVerticesData(`profile`,this.profiles),this.mesh.updateVerticesData(`entry`,this.entries),!1),this.material.setFloat(`clock`,e),this.material.setVector3(`eye`,this.scene.activeCamera.position);let r=this.scene.activeCamera,i=this.scene.getEngine();this.material.setFloat(`pixelScale`,(i.getRenderingCanvas()?.clientHeight||i.getRenderHeight())*.5*r.getProjectionMatrix().m[5]),this.material.setFloat(`pixelLOD`,Number(this.mistPixelLOD))}reset(){this.authored.reset(),this.ends.fill(0),this.profiles.fill(0),this.detail.fill(0),this.detailSlots=[],this.mesh.updateVerticesData(`detail`,this.detail),this.dirty=!0,this.mesh.setEnabled(!1)}dispose(){this.authored.dispose(),this.mesh.dispose(),this.material.dispose(),this.texture.dispose()}};export{c as a,u as i,d as n,l as r,C as t};