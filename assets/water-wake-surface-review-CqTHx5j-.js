import{g as e,t}from"./mesh.pure-DhirsM6E.js";import"./babylon-runtime-gStt1xEm.js";import{n}from"./material.pure-Dpk-H6aH.js";import{n as r}from"./groundBuilder-Blu2Ps0u.js";import{a as i,i as a,n as o,o as s,r as c}from"./foam-pixels-LZaEnoMq.js";var l=`
attribute vec3 position;

uniform mat4 viewProjection;

attribute vec3 wakeData;

attribute vec2 wakeNormal;

uniform float wakeTime;
uniform float wakeRoughness;

uniform float wakeWidth;

varying vec3 vWake;

varying vec2 vWorld;

   void main(){float age=max(0.,wakeTime-wakeData.y);vec3 p=position;
   p.xz+=wakeNormal*wakeWidth*age*mix(.12,.24,wakeRoughness)*wakeData.x;
   vWake=vec3(wakeData.x,age,wakeData.z*pow(max(0.,1.-age/mix(12.,7.,wakeRoughness)),1.7));
   vWorld=p.xz;gl_Position=viewProjection*vec4(p,1.);}`,u=`
uniform float surge;
uniform float wakeRoughness;

uniform sampler2D foamMap;

varying vec3 vWake;

varying vec2 vWorld;

   void main(){
   vec3 broad=texture2D(foamMap,vWorld*.045+vec2(vWake.y*.006,0.)).rgb;
   vec3 fine=texture2D(foamMap,vWorld*.137+vec2(.31,.67)+broad.rg*.1).rgb;
   float x=abs(vWake.x+(broad.r-.5)*mix(.22,.6,wakeRoughness));
   float center=exp(-x*x*8.);
   float edge=exp(-pow((x-(.55+broad.b*.22))*8.,2.))*.4;
   float broken=smoothstep(mix(.18,.36,wakeRoughness),.72,broad.b*.55+fine.g*.45);
   float alpha=(center+edge)*(1.-smoothstep(.62,1.,x))*broken*vWake.z*.72;
   vec3 foam=mix(vec3(.58,.75,.79),vec3(.9,.96,.95),fine.g);
   gl_FragColor=vec4(mix(foam,vec3(.4,1.,.94),surge),alpha*(1.+surge*.45));
   
   
   }`,d=96,f=256,p=762,m=new WeakMap,h=class r{scene;mesh;material;used=new Set;params=new Float32Array(384);positions=new Float32Array(d*f*3);data=new Float32Array(d*f*3);normals=new Float32Array(d*f*2);indices=new Uint16Array(d*p);scratch=new Uint16Array(p);dirty=new Set;indexDirty=!1;observer;counts=new Uint16Array(d);cacheKey=``;compactIndices=new Uint16Array(d*p);static acquire(e,t,n=u){let i=m.get(e);i||(i=new Map,m.set(e,i));let a=t.uniqueId+`:`+n,o=i.get(a);return o||(o=new r(e,t,n),o.cacheKey=a,i.set(a,o)),o}constructor(n,r,i=u){this.scene=n,this.mesh=new t(`native-wake-batch`,n),this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setVerticesData(`position`,this.positions,!0,3),this.mesh.setVerticesData(`wakeData`,this.data,!0,3),this.mesh.setVerticesData(`wakeNormal`,this.normals,!0,2);let a=new Float32Array(d*f);for(let e=0;e<d;e++)a.fill(e,e*f,(e+1)*f);this.mesh.setVerticesData(`wakeSlot`,a,!1,1),this.mesh.setIndices(this.indices,null,!0);let o=l.replace(`uniform float wakeTime;`,`attribute float wakeSlot;
uniform vec4 wakeSlots[96];`).replace(`uniform float wakeRoughness;`,`varying float wakeRoughness;`).replace(`uniform float wakeWidth;`,``).replace(`void main(){`,`void main(){vec4 slot=wakeSlots[int(wakeSlot)];float wakeTime=slot.x;float wakeWidth=slot.y;wakeRoughness=slot.z;`);this.material=new e(`native-wake-batch-material`,n,{vertexSource:o,fragmentSource:i.replace(`uniform float wakeRoughness;`,`varying float wakeRoughness;`)},{attributes:[`position`,`wakeData`,`wakeNormal`,`wakeSlot`],uniforms:[`viewProjection`,`wakeSlots`,`surge`],samplers:[`foamMap`],needAlphaBlending:!0}),this.material.backFaceCulling=!1,this.material.disableDepthWrite=!0,this.material.setTexture(`foamMap`,r),this.material.setFloat(`surge`,0),this.mesh.material=this.material,this.mesh.setEnabled(!1),this.observer=n.onBeforeRenderObservable.add(()=>this.flush())}allocate(){for(let e=0;e<d;e++)if(!this.used.has(e))return this.used.add(e),e;throw Error(`Wake batch capacity exceeded`)}update(e,t,n,r,i){if(this.params.set([t.time,n,r,0],e*4),!i)return;let a=t.samples,o=e*f;for(let e=0;e<a.length;e++){let t=a[e];for(let r=0;r<2;r++){let i=o+e*2+r,a=i*3,s=r?1:-1;this.positions[a]=t.x+t.nx*n*.35*s,this.positions[a+1]=.22,this.positions[a+2]=t.z+t.nz*n*.35*s,this.data[a]=s,this.data[a+1]=t.born,this.data[a+2]=t.strength,this.normals[i*2]=t.nx,this.normals[i*2+1]=t.nz}}let s=t.writeIndices(this.scratch),c=e*p;this.counts[e]=s;for(let e=0;e<p;e++)this.indices[c+e]=e<s?o+this.scratch[e]:o;this.dirty.add(e),this.indexDirty=!0}clear(e){this.counts[e]=0,this.indices.fill(e*f,e*p,(e+1)*p),this.indexDirty=!0}flush(){this.material.setArray4(`wakeSlots`,Array.from(this.params));for(let e of this.dirty){let t=e*f;for(let[e,n,r]of[[`position`,this.positions,3],[`wakeData`,this.data,3],[`wakeNormal`,this.normals,2]])this.mesh.getVertexBuffer(e).updateDirectly(n.subarray(t*r,(t+f)*r),t*r)}if(this.dirty.clear(),this.indexDirty){let e=0;for(let t=0;t<d;t++){let n=this.counts[t];n&&(this.compactIndices.set(this.indices.subarray(t*p,t*p+n),e),e+=n)}this.mesh.updateIndices(this.compactIndices),this.mesh.subMeshes.length?(this.mesh.subMeshes[0].indexCount=e,this.mesh.subMeshes[0].setBoundingInfo(this.mesh.getBoundingInfo())):new n(0,0,d*f,0,e,this.mesh),this.indexDirty=!1}this.mesh.setEnabled(this.counts.some(e=>e>0))}release(e){this.clear(e),this.used.delete(e),this.used.size||(this.scene.onBeforeRenderObservable.remove(this.observer),this.mesh.dispose(),this.material.dispose(),m.get(this.scene)?.delete(this.cacheKey))}},g=e=>e.replace(/\b(uniform|varying)\s+(float|vec2)\s+([^;]+);/g,(e,t,n,r)=>`
`+r.split(`,`).map(e=>`${t} ${n} ${e.trim()};`).join(`
`)+`
`),_=class{mesh;material;speed=0;previous=0;heading;turn=0;acceleration=0;time=0;constructor(n,r,i,a,s=!1){if(this.mesh=new t(`native-bow-prop-wash`,n),this.mesh.setVerticesData(`position`,[-1,0,0,1,0,0,-1,0,1,1,0,1,-1,0,0,1,0,0,-1,0,1,1,0,1]),this.mesh.setVerticesData(`washKind`,[0,0,0,0,1,1,1,1],!1,1),this.mesh.setIndices([0,2,1,1,2,3,4,6,5,5,6,7]),this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,s){let e=[-1,0,0,1,0,0,-1,0,1,1,0,1,-1,0,0,1,0,0,-1,0,1,1,0,1],t=[0,0,0,0,1,1,1,1],n=[0,2,1,1,2,3,4,6,5,5,6,7];for(let r of[2,3]){let i=t.length;for(let a=0;a<=8;a++)if(e.push(-1,0,a/8,1,0,a/8),t.push(r,r),a){let e=i+(a-1)*2;n.push(e,e+2,e+1,e+1,e+2,e+3)}}this.mesh.setVerticesData(`position`,e),this.mesh.setVerticesData(`washKind`,t,!1,1),this.mesh.setIndices(n)}let l=e=>e.replaceAll(`length*(.55+speed*.4)`,`length*(.08+speed*.1)`).replace(`width*.1+along`,`width*.48+along`),u=s?l(c).replace(`uniform float width,length,speed;`,`uniform float width,length,speed,turn;`).replace(`length*(.22+speed*.48)`,`length*(.07+speed*.08)`).replace(`gl_Position=`,`if(kind>1.5){float side=kind<2.5?-1.:1.;float asymmetry=clamp(1.-side*turn*.8,.6,1.65);float spread=(width*.16+position.z*length*(.16+speed*.035))*asymmetry;p=vec3(side*(width*.49+(position.x+1.)*.5*spread),.28,length*(.48-position.z*.96));}gl_Position=`):c,d=s?l(o).replace(`if(kind<.5){`,`if(kind>1.5){
     float outward=(across+1.)*.5;
     float side=kind<2.5?-1.:1.;
     float crest=.55+(packets.r-.5)*.2+sin(along*19.-time*.8)*.045;
     float ridge=exp(-pow((outward-crest)/(.07+packets.b*.065),2.));
     float wash=exp(-pow((outward-crest+.17)/.16,2.))*.35;
     float band=(ridge+wash)*smoothstep(.12,.3,outward);
     float ends=smoothstep(0.,.12,along)*(1.-smoothstep(.65,1.,along));
     float patches=smoothstep(.18,.57,foam.g*.5+bubbles.b*.5)*mix(.15,1.,smoothstep(.25,.55,packets.b));
     float lace=smoothstep(.14,.48,bubbles.g)*exp(-pow((outward-crest-.08)*12.,2.));
     float bias=clamp(1.-side*turn*.65,.6,1.6);
     density=(band*patches+lace*.4)*ends*1.45*bias*(1.-smoothstep(.12,.28,along));
    }else if(kind<.5){`).replace(`float strength=smoothstep`,`if(kind<1.5)density*=1.35;float strength=smoothstep`):o;this.material=new e(`native-wash`,n,{vertexSource:g(`precision highp float;attribute vec3 position;uniform mat4 worldViewProjection;`+u.replace(`projectionMatrix*modelViewMatrix`,`worldViewProjection`)),fragmentSource:g(`precision highp float;uniform float fieldBow;`+d.replace(`float strength=smoothstep`,`if(kind<.5)density*=mix(1.,1.-smoothstep(.06,.22,along),fieldBow);float strength=smoothstep`).replace(/#include <[^>]+>/g,``))},{attributes:[`position`,`washKind`],uniforms:[`worldViewProjection`,`width`,`length`,`time`,`speed`,`turn`,`thrust`,`wakeRoughness`,`fieldBow`],samplers:[`foamMap`],needAlphaBlending:!0}),this.material.setTexture(`foamMap`,r),this.material.setFloat(`width`,i),this.material.setFloat(`length`,a),this.material.backFaceCulling=!1,this.material.disableDepthWrite=!0,this.mesh.material=this.material,this.mesh.setEnabled(!1)}update(e,t,n,r,i,a,o,s=!1){if(this.material.setFloat(`fieldBow`,+!!s),!a){this.speed=0,this.turn=0,this.acceleration=0,this.heading=void 0,this.previous=i,this.mesh.setEnabled(!1);return}if(e>0){let t=1-Math.exp(-e*5),n=this.heading===void 0?0:Math.atan2(Math.sin(r-this.heading),Math.cos(r-this.heading));this.turn+=(Math.max(-1,Math.min(1,n/e*4))-this.turn)*t,this.acceleration+=(Math.max(0,Math.min(1,(Math.abs(i)-Math.abs(this.previous))/e/3))-this.acceleration)*t,this.speed+=(Math.min(1.6,Math.abs(i)/18)-this.speed)*t,this.heading=r,this.previous=i,this.time+=e}for(let[e,t]of Object.entries({time:this.time,speed:this.speed,turn:this.turn,thrust:this.acceleration,wakeRoughness:o}))this.material.setFloat(e,t);this.mesh.position.set(t,0,n),this.mesh.rotation.y=r+(i<0?Math.PI:0),this.mesh.setEnabled(this.speed>.025)}dispose(){this.material.dispose(),this.mesh.dispose()}},v=class{width;length;wash;mesh;material;batch;slot=0;history=new s;indices=new Uint16Array(762);positions=new Float32Array(768);data=new Float32Array(768);normals=new Float32Array(512);rough=.1;trailWidth=1;get empty(){return this.history.samples.length===0}reset(){this.history.reset(),this.batch?this.batch.clear(this.slot):this.mesh.setEnabled(!1)}constructor(n,r,i,a,o=u,s=!1){if(this.width=i,this.length=a,this.trailWidth=i*(s?2.2:1),a>5&&(this.wash=new _(n,r,i,a,s)),typeof location<`u`&&new URLSearchParams(location.search).get(`wakeBatches`)!==`0`){this.batch=h.acquire(n,r,o),this.slot=this.batch.allocate(),this.mesh=this.batch.mesh;return}this.mesh=new t(`native-wake`,n),this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setVerticesData(`position`,this.positions,!0,3),this.mesh.setVerticesData(`wakeData`,this.data,!0,3),this.mesh.setVerticesData(`wakeNormal`,this.normals,!0,2),this.mesh.setIndices(this.indices,null,!0),this.material=new e(`native-wake-material`,n,{vertexSource:l,fragmentSource:o},{attributes:[`position`,`wakeData`,`wakeNormal`],uniforms:[`viewProjection`,`wakeTime`,`wakeRoughness`,`wakeWidth`,`surge`],samplers:[`foamMap`],needAlphaBlending:!0}),this.material.backFaceCulling=!1,this.material.disableDepthWrite=!0,this.material.setTexture(`foamMap`,r),this.material.setFloat(`wakeWidth`,this.trailWidth),this.mesh.material=this.material}update(e,t,r,o,s,c,l,u=!1){this.rough+=(a[l].wakeRoughness-this.rough)*i(e),this.wash?.update(e,t,r,o,s,c,this.rough,u);let d=this.history.update(e,t,r,o,s,c,this.length);if(this.batch){this.batch.update(this.slot,this.history,this.trailWidth,this.rough,d);return}this.material.setFloat(`wakeRoughness`,this.rough),this.material.setFloat(`surge`,0),this.material.setFloat(`wakeTime`,this.history.time);let f=this.history.samples;if(this.mesh.setEnabled(f.length>1),!d)return;let p=this.history.writeIndices(this.indices);this.mesh.updateIndices(this.indices),this.mesh.releaseSubMeshes(),new n(0,0,f.length*2,0,p,this.mesh),!(f.length<2)&&(f.forEach((e,t)=>{for(let n=0;n<2;n++){let r=t*2+n,i=r*3,a=n?1:-1;this.positions.set([e.x+e.nx*this.trailWidth*.35*a,.22,e.z+e.nz*this.trailWidth*.35*a],i),this.data.set([a,e.born,e.strength],i),this.normals.set([e.nx,e.nz],r*2)}}),this.mesh.updateVerticesData(`position`,this.positions),this.mesh.updateVerticesData(`wakeData`,this.data),this.mesh.updateVerticesData(`wakeNormal`,this.normals))}dispose(){this.wash?.dispose(),this.batch?this.batch.release(this.slot):(this.mesh.dispose(),this.material.dispose())}},y=`
precision highp float;
uniform float surge;
uniform float wakeRoughness;
uniform sampler2D foamMap;
varying vec3 vWake;
varying vec2 vWorld;
void main(){
 vec3 broad=texture2D(foamMap,vWorld*.045+vec2(vWake.y*.006,0.)).rgb;
 vec3 fine=texture2D(foamMap,vWorld*.137+vec2(.31,.67)+broad.rg*.1).rgb;
 float age=vWake.y;
 float cross=vWake.x+(broad.r-.5)*.32;
 // No secondary ridge running continuously down both edges of the ribbon.
 float spread=mix(7.,2.8,smoothstep(.4,5.,age));
 float body=exp(-cross*cross*spread);
 float patches=smoothstep(.22+smoothstep(1.,8.,age)*.14,.66,broad.b*.52+fine.g*.48);
 // Fade at the actual mesh boundary, independent of displaced texture coordinates.
 float border=1.-smoothstep(.45,.96,abs(vWake.x));
 // Prop wash owns the first second; aged foam progressively fragments and dissolves.
 float handoff=smoothstep(.05,.5,age);
 float alpha=body*border*patches*vWake.z*handoff*.66;
 vec3 color=mix(vec3(.58,.75,.79),vec3(.9,.96,.95),fine.g);
 gl_FragColor=vec4(mix(color,vec3(.4,1.,.94),surge),alpha);
}`,b=`
uniform vec3 eye;
uniform float clock;
vec3 waterColor(vec2 p,vec2 disturbance,float calm){
 vec2 ripple=vec2(sin(p.x*.7+p.y*.41+clock*.8),cos(p.y*.83-p.x*.29-clock*.6))*.028;
 vec3 n=normalize(vec3(ripple.x*(1.-calm)+disturbance.x,1.,ripple.y*(1.-calm)+disturbance.y));
 vec3 v=normalize(eye-vec3(p.x,0.,p.y));
 vec3 reflected=reflect(-v,n);
 vec3 sky=mix(vec3(.32,.48,.56),vec3(.08,.22,.34),smoothstep(0.,.9,reflected.y));
 float fresnel=.025+.975*pow(1.-max(dot(n,v),0.),5.);
 vec3 light=normalize(vec3(-.5,1.,-.6));
 float sun=pow(max(dot(n,normalize(light+v)),0.),mix(90.,190.,calm));
 return mix(vec3(.022,.13,.18),sky,fresnel)+vec3(.55,.59,.57)*sun*.5;
}`,x=`precision highp float;attribute vec3 position;uniform mat4 worldViewProjection;varying vec2 waterXZ;void main(){waterXZ=position.xz;gl_Position=worldViewProjection*vec4(position,1.);}`,S=class{foamOnly;histories=[];mesh;material;sea;seaMaterial;positions=new Float32Array(36864);wakeData=new Float32Array(49152);normals=new Float32Array(24576);indices=new Uint16Array(36576);sizes=[];length=34;dirty=!1;time=0;enabled=!0;constructor(n,i,a=!1){this.foamOnly=a,this.sea=r(`review-sea`,{width:4e3,height:4e3},n),this.seaMaterial=new e(`review-sea`,n,{vertexSource:x,fragmentSource:`precision highp float;varying vec2 waterXZ;${b}void main(){gl_FragColor=vec4(waterColor(waterXZ,vec2(0.),0.),1.);}`},{attributes:[`position`],uniforms:[`worldViewProjection`,`eye`,`clock`]}),this.sea.material=this.seaMaterial,this.sea.setEnabled(!a),this.mesh=new t(`review-water-disturbance-batch`,n),this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setVerticesData(`position`,this.positions,!0,3),this.mesh.setVerticesData(`wakeData`,this.wakeData,!0,4),this.mesh.setVerticesData(`wakeNormal`,this.normals,!0,2),this.mesh.setIndices(this.indices,null,!0),this.material=new e(`review-water-disturbance`,n,{vertexSource:`precision highp float;attribute vec3 position;attribute vec4 wakeData;attribute vec2 wakeNormal;uniform mat4 viewProjection;uniform float clock;varying vec2 waterXZ;varying vec4 wake;varying vec2 across;
void main(){float hullWidth=length(wakeNormal)*5.;float age=max(0.,clock-wakeData.y);vec3 p=position;float spread=mix(hullWidth*.6+age*hullWidth*.44,hullWidth*.5+age*max(hullWidth*.4,wakeData.z*18.*.45),wakeData.w);p.xz+=normalize(wakeNormal)*wakeData.x*spread;waterXZ=p.xz;wake=vec4(wakeData.x,age,wakeData.z,wakeData.w);across=normalize(wakeNormal);gl_Position=viewProjection*vec4(p,1.);}`,fragmentSource:`precision highp float;varying vec2 waterXZ;varying vec4 wake;varying vec2 across;uniform sampler2D foamMap;uniform float foamOnly;${b}
void main(){vec3 noise=texture2D(foamMap,waterXZ*.027).rgb;
vec3 detail=texture2D(foamMap,waterXZ*.14+noise.rr*.1).rgb;
float age=wake.y;float x=abs(wake.x);float life=pow(max(0.,1.-age/12.),1.3);float edge=1.-smoothstep(mix(.6,.88,wake.w),.99,x);
float envelope=exp(-pow((x-mix(.48,.73,wake.w)-(noise.r-.5)*.025)*mix(5.,11.,wake.w),2.));
float slope=sin(age*4.8-x*12.+noise.r*2.)*envelope*.11*life*wake.z;
vec2 normal=across*slope;float calm=exp(-x*x*9.)*.65*life*(1.-wake.w);
float alpha=edge*life*smoothstep(.1,.9,age)*wake.z*.8;
// Only short broken sections of the outgoing bow crest become white water.
float coverage=smoothstep(.16,.58,noise.g*.45+detail.b*.55);
float lace=smoothstep(.12,.6,detail.g);
float foam=wake.w*envelope*coverage*mix(.18,1.,lace)*pow(max(0.,1.-age/8.),1.5)*1.3;
vec3 color=mix(waterColor(waterXZ,normal,calm),vec3(.82,.9,.92),clamp(foam,0.,1.));
gl_FragColor=foamOnly>.5?vec4(vec3(.82,.9,.92),clamp(foam*alpha,0.,.85)):vec4(color,alpha);}`},{attributes:[`position`,`wakeData`,`wakeNormal`],uniforms:[`viewProjection`,`eye`,`clock`,`foamOnly`],samplers:[`foamMap`],needAlphaBlending:!0}),this.material.setFloat(`foamOnly`,+!!a),this.material.setTexture(`foamMap`,i),this.material.disableDepthWrite=!0,this.material.backFaceCulling=!1,this.mesh.material=this.material,this.mesh.alphaIndex=-10}reset(e,t=5,n=34){this.length=n,this.sizes=Array.from({length:e},()=>({width:t,length:n})),this.histories=Array.from({length:e*2},()=>new s),this.time=0,this.dirty=!0}updateShip(e,t,n,r,i,a,o=!0,s=5,c=this.length){this.sizes[e]={width:s,length:c};for(let s=0;s<2;s++){let l=s*c*.92;this.dirty=this.histories[e*2+s].update(t,n+Math.sin(i)*l,r+Math.cos(i)*l,i,a,o,c)||this.dirty}}update(e,t){this.time+=e;for(let e of[this.material,this.seaMaterial])e.setFloat(`clock`,this.time),e.setVector3(`eye`,t);if(this.dirty){let e=0,t=0;for(let[n,r]of this.histories.entries()){let i=e;r.samples.forEach((a,o)=>{for(let t=0;t<2;t++){let r=e++,i=t?1:-1;this.positions.set([a.x,.12,a.z],r*3),this.wakeData.set([i,a.born,a.strength,n%2],r*4),this.normals.set([a.nx*this.sizes[Math.floor(n/2)].width/5,a.nz*this.sizes[Math.floor(n/2)].width/5],r*2)}if(o&&a.strip===r.samples[o-1].strip){let e=i+(o-1)*2;this.indices.set([e,e+2,e+1,e+1,e+2,e+3],t),t+=6}})}this.mesh.updateVerticesData(`position`,this.positions),this.mesh.updateVerticesData(`wakeData`,this.wakeData),this.mesh.updateVerticesData(`wakeNormal`,this.normals),this.mesh.updateIndices(this.indices),this.mesh.releaseSubMeshes(),new n(0,0,e,0,t,this.mesh),this.mesh.setEnabled(this.enabled&&t>0),this.dirty=!1}else this.enabled||this.mesh.setEnabled(!1)}dispose(){this.mesh.dispose(),this.material.dispose(),this.sea.dispose(),this.seaMaterial.dispose()}};export{y as n,v as r,S as t};