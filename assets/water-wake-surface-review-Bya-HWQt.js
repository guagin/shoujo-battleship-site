import{t as e,y as t}from"./mesh.pure-ECA1_wkB.js";import{o as n}from"./math.vector.pure-DvOxp7ND.js";import{n as r}from"./material.pure-DhgEF69j.js";import"./babylon-runtime-D01J63DY.js";import{i}from"./groundBuilder-BJ8XFhqQ.js";import{o as a}from"./foam-pixels-LZaEnoMq.js";var o=`
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
}`,s=`
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
}`,c=`precision highp float;attribute vec3 position;uniform mat4 worldViewProjection;varying vec2 waterXZ;void main(){waterXZ=position.xz;gl_Position=worldViewProjection*vec4(position,1.);}`,l=class{foamOnly;histories=[];mesh;material;sea;seaMaterial;positions=new Float32Array(36864);wakeData=new Float32Array(49152);normals=new Float32Array(24576);indices=new Uint16Array(36576);minimum=new n;maximum=new n;sizes=[];length=34;dirty=!1;time=0;enabled=!0;constructor(n,r,a=!1){this.foamOnly=a,this.sea=i(`review-sea`,{width:4e3,height:4e3},n),this.seaMaterial=new t(`review-sea`,n,{vertexSource:c,fragmentSource:`precision highp float;varying vec2 waterXZ;${s}void main(){gl_FragColor=vec4(waterColor(waterXZ,vec2(0.),0.),1.);}`},{attributes:[`position`],uniforms:[`worldViewProjection`,`eye`,`clock`]}),this.sea.material=this.seaMaterial,this.sea.setEnabled(!a),this.mesh=new e(`review-water-disturbance-batch`,n),this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setVerticesData(`position`,this.positions,!0,3),this.mesh.setVerticesData(`wakeData`,this.wakeData,!0,4),this.mesh.setVerticesData(`wakeNormal`,this.normals,!0,2),this.mesh.setIndices(this.indices,null,!0),this.material=new t(`review-water-disturbance`,n,{vertexSource:`precision highp float;attribute vec3 position;attribute vec4 wakeData;attribute vec2 wakeNormal;uniform mat4 viewProjection;uniform float clock;varying vec2 waterXZ;varying vec4 wake;varying vec2 across;
void main(){float hullWidth=length(wakeNormal)*5.;float age=max(0.,clock-wakeData.y);vec3 p=position;float spread=mix(hullWidth*.6+age*hullWidth*.44,hullWidth*.5+age*max(hullWidth*.4,wakeData.z*18.*.45),wakeData.w);p.xz+=normalize(wakeNormal)*wakeData.x*spread;waterXZ=p.xz;wake=vec4(wakeData.x,age,wakeData.z,wakeData.w);across=normalize(wakeNormal);gl_Position=viewProjection*vec4(p,1.);}`,fragmentSource:`precision highp float;varying vec2 waterXZ;varying vec4 wake;varying vec2 across;uniform sampler2D foamMap;uniform float foamOnly;${s}
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
gl_FragColor=foamOnly>.5?vec4(vec3(.82,.9,.92),clamp(foam*alpha,0.,.85)):vec4(color,alpha);}`},{attributes:[`position`,`wakeData`,`wakeNormal`],uniforms:[`viewProjection`,`eye`,`clock`,`foamOnly`],samplers:[`foamMap`],needAlphaBlending:!0}),this.material.setFloat(`foamOnly`,+!!a),this.material.setTexture(`foamMap`,r),this.material.disableDepthWrite=!0,this.material.backFaceCulling=!1,this.mesh.material=this.material,this.mesh.alphaIndex=-10}reset(e,t=5,n=34){this.length=n,this.sizes=Array.from({length:e},()=>({width:t,length:n})),this.histories=Array.from({length:e*2},()=>new a),this.time=0,this.dirty=!0}updateShip(e,t,n,r,i,a,o=!0,s=5,c=this.length){this.sizes[e].width=s,this.sizes[e].length=c;for(let s=0;s<2;s++){let l=s*c*.92;this.dirty=this.histories[e*2+s].update(t,n+Math.sin(i)*l,r+Math.cos(i)*l,i,a,o,c)||this.dirty}}update(e,t){this.time+=e;for(let e of[this.material,this.seaMaterial])e.setFloat(`clock`,this.time),e.setVector3(`eye`,t);if(this.dirty){let e=0,t=0;this.minimum.set(1/0,.12,1/0),this.maximum.set(-1/0,.12,-1/0);for(let n=0;n<this.histories.length;n++){let r=this.histories[n].samples,i=e,a=this.sizes[Math.floor(n/2)].width/5;for(let o=0;o<r.length;o++){let s=r[o];this.minimum.x=Math.min(this.minimum.x,s.x),this.minimum.z=Math.min(this.minimum.z,s.z),this.maximum.x=Math.max(this.maximum.x,s.x),this.maximum.z=Math.max(this.maximum.z,s.z);for(let t=0;t<2;t++){let r=e++,i=r*3,o=r*4,c=r*2;this.positions[i]=s.x,this.positions[i+1]=.12,this.positions[i+2]=s.z,this.wakeData[o]=t?1:-1,this.wakeData[o+1]=s.born,this.wakeData[o+2]=s.strength,this.wakeData[o+3]=n%2,this.normals[c]=s.nx*a,this.normals[c+1]=s.nz*a}if(o&&s.strip===r[o-1].strip){let e=i+(o-1)*2;this.indices[t++]=e,this.indices[t++]=e+2,this.indices[t++]=e+1,this.indices[t++]=e+1,this.indices[t++]=e+2,this.indices[t++]=e+3}}}if(e)for(let[t,n,r]of[[`position`,this.positions,3],[`wakeData`,this.wakeData,4],[`wakeNormal`,this.normals,2]])this.mesh.getVertexBuffer(t).updateDirectly(n.subarray(0,e*r),0);t&&this.mesh.getScene().getEngine().updateDynamicIndexBuffer(this.mesh.geometry.getIndexBuffer(),this.indices.subarray(0,t),0),e&&this.mesh.getBoundingInfo().reConstruct(this.minimum,this.maximum,this.mesh.getWorldMatrix());let n=this.mesh.subMeshes[0];n?(n.verticesCount=e,n.indexCount=t,n.setBoundingInfo(this.mesh.getBoundingInfo())):new r(0,0,e,0,t,this.mesh),this.mesh.setEnabled(this.enabled&&t>0),this.dirty=!1}else this.enabled||this.mesh.setEnabled(!1)}dispose(){this.mesh.dispose(),this.material.dispose(),this.sea.dispose(),this.seaMaterial.dispose()}};export{o as n,l as t};