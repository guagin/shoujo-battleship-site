function e(e,t,n,r=!1){if(t<=0||n<=0||e.some(e=>![e.x,e.y,e.z,e.w].every(Number.isFinite)))return[];let i=[e=>e.w+e.x,e=>e.w-e.x,e=>e.w+e.y,e=>e.w-e.y,e=>r?e.z:e.w+e.z,e=>e.w-e.z,e=>e.w-1e-7],a=e;for(let e of i){let t=[];for(let n=0;n<a.length;n++){let r=a[n],i=a[(n+1)%a.length],o=e(r),s=e(i);if(o>=0&&t.push(r),o>=0!=s>=0){let e=o/(o-s);t.push({x:r.x+(i.x-r.x)*e,y:r.y+(i.y-r.y)*e,z:r.z+(i.z-r.z)*e,w:r.w+(i.w-r.w)*e})}}if(a=t,a.length<3)return[]}return a.map(e=>({x:(1+e.x/e.w)*t/2,y:(1-e.y/e.w)*n/2}))}function t(e,t){return{x:t[0]*e.x+t[4]*e.y+t[8]*e.z+t[12]*e.w,y:t[1]*e.x+t[5]*e.y+t[9]*e.z+t[13]*e.w,z:t[2]*e.x+t[6]*e.y+t[10]*e.z+t[14]*e.w,w:t[3]*e.x+t[7]*e.y+t[11]*e.z+t[15]*e.w}}function n(e,t,n,r,i=!1){if(n<=0||r<=0||![e.x,e.y,e.z,e.w,t.x,t.y,t.z,t.w].every(Number.isFinite))return;let a=e=>[e.w+e.x,e.w-e.x,e.w+e.y,e.w-e.y,i?e.z:e.w+e.z,e.w-e.z,e.w-1e-7],o=a(e),s=a(t),c=0,l=1;for(let e=0;e<o.length;e++)if(o[e]<0&&s[e]<0||(o[e]<0?c=Math.max(c,o[e]/(o[e]-s[e])):s[e]<0&&(l=Math.min(l,o[e]/(o[e]-s[e]))),c>l))return;let u=i=>{let a=e.w+(t.w-e.w)*i;return{x:(1+(e.x+(t.x-e.x)*i)/a)*n/2,y:(1-(e.y+(t.y-e.y)*i)/a)*r/2}},d=u(c),f=u(l);return{x1:d.x,y1:d.y,x2:f.x,y2:f.y,endVisible:s.every(e=>e>=0)}}var r=`
uniform int uEnergyLightCount;
uniform vec4 uEnergyLightSegments[8];
uniform vec4 uEnergyLightColors[8];
vec3 energySurfaceLight(vec3 p,vec3 normal,vec3 view){
 vec3 light=vec3(0.);
 vec3 reflected=reflect(-view,normal);
 for(int i=0;i<8;i++){
  if(i>=uEnergyLightCount)break;
  vec4 segment=uEnergyLightSegments[i];
  vec2 axis=segment.zw-segment.xy;
  vec2 samplePoint=p.xz+normal.xz*10.;
  float along=clamp(dot(samplePoint-segment.xy,axis)/max(dot(axis,axis),.001),0.,1.);
  vec2 closest=segment.xy+axis*along;
  vec2 delta=samplePoint-closest;
  float distance2=dot(delta,delta);
  if(distance2>3600.)continue;
  vec3 toLight=normalize(vec3(closest.x-p.x,3.,closest.y-p.z));
  float glint=pow(max(0.,dot(reflected,toLight)),24.);
  float band=exp(-distance2/150.);
  float spill=exp(-distance2/650.);
  vec4 tint=uEnergyLightColors[i];light+=(tint.rgb*spill*.35+mix(tint.rgb,vec3(1.),.35)*band*(.18+glint*1.8))*tint.w;
 }
 return min(light,vec3(2.));
}
`,i=`
uniform int uEnergyWaterCount;
uniform vec4 uEnergyWaterSegments[8];
uniform float uEnergyWaterAges[8];
uniform vec3 uEnergyWaterAxes[8];
uniform vec2 uEnergyWaterEnvelopes[8];
uniform sampler2D uEnergyFoam;
// Returns displacement, horizontal slope and aerated crest intensity.
vec4 energyWater(vec2 p){
 vec4 result=vec4(0.);
 for(int i=0;i<8;i++){
  if(i>=uEnergyWaterCount)break;
  vec4 segment=uEnergyWaterSegments[i];float age=uEnergyWaterAges[i];
  vec3 axis=uEnergyWaterAxes[i];vec2 forward=axis.xy,side=vec2(-forward.y,forward.x);
  vec2 relative=p-segment.xy;float along=dot(relative,forward);
  vec2 offset=relative-forward*clamp(along,0.,axis.z);float d2=dot(offset,offset);
  if(d2>8100.)continue;
  // World-anchored breakup: old wakes must not rotate or slide with the emitter.
  float d=sqrt(d2),signedSide=dot(relative,side);
  vec2 uv=p/64.+vec2(age*.018,-age*.012);
  vec3 pattern=textureLod(uEnergyFoam,uv,0.).rgb;
  vec3 detail=textureLod(uEnergyFoam,uv*2.73+vec2(age*.025,0.),0.).rgb;
  // A breaking wave packet, with a shallow depression behind its leading crest.
  // Stagger the response along the beam instead of raising a whole capsule at once.
  float localAge=max(0.,age-clamp(along,0.,axis.z)*.00012-pattern.g*.12);
  float birth=smoothstep(0.,.24,localAge);
  float asymmetry=mix(.88,1.12,smoothstep(-12.,12.,signedSide));
  float front=2.+localAge*(9.+pattern.r*3.)*asymmetry+(pattern.b-.5)*9.;
  float spread=12.+localAge*9.;
  float fade=uEnergyWaterEnvelopes[i].x*birth;
  float breakup=.35+.65*smoothstep(.18,.78,pattern.b);
  float delta=d-front;
  float crest=.42*exp(-delta*delta/spread)*fade*breakup;
  float back=d-max(0.,front-6.-localAge);
  float trough=-.24*exp(-back*back/(spread*1.8))*fade;
  float slope=crest*(-2.*delta/spread)+trough*(-2.*back/(spread*1.8));
  // Foam lingers behind the breaking edge in torn patches, not a white outline.
  float patches=smoothstep(.38,.72,pattern.b+detail.r*.16)*smoothstep(.22,.68,detail.g);
  float froth=exp(-back*back/(spread*2.8))*fade*patches*.65;
  float ends=1.-smoothstep(axis.z+3.,axis.z+24.,along);
  result+=vec4(trough+crest,offset/max(d,.001)*slope,froth)*ends;
 }
 return result;
}
`,a=class{x=0;z=0;following=!0;px=0;py=0;inside=!1;edgeLock=!1;trackedShip;wasRespawning=!1;observeRespawn(e){let t=this.trackedShip===e&&this.wasRespawning&&e.respawn<=0;return this.trackedShip=e,this.wasRespawning=e.respawn>0,t&&this.recenter(e.x,e.z),t}pointer(e,t){this.px=e,this.py=t,this.inside=Math.abs(e)<=1&&Math.abs(t)<=1,Math.abs(e)<.9&&Math.abs(t)<.9&&(this.edgeLock=!1)}leave(){this.inside=!1}drag(e,t,n){this.following=!1,this.inside=!1,this.x=Math.max(-n,Math.min(n,this.x-e)),this.z=Math.max(-n,Math.min(n,this.z-t))}recenter(e,t){this.x=e,this.z=t,this.following=!0,this.edgeLock=!0}update(e,t,n,r,i){if(this.following&&(this.x=t.x,this.z=t.z),!i||!this.inside||this.edgeLock)return;let a=e=>Math.sign(e)*Math.max(0,(Math.abs(e)-.9)/.1),o=a(this.px),s=-a(this.py),c=Math.hypot(o,s);if(!c)return;this.following=!1,c>1&&(o/=c,s/=c);let l=Math.max(70,Math.min(250,n*.65));this.x=Math.max(-r,Math.min(r,this.x+o*l*e)),this.z=Math.max(-r,Math.min(r,this.z+s*l*e))}},o=class{scale=1;elapsed=0;frames=0;fastWindows=0;reset(){this.elapsed=0,this.frames=0,this.fastWindows=0}sample(e){if(e<=0||e>250)return this.reset(),!1;if(this.elapsed+=e,this.frames++,this.elapsed<1500)return!1;let t=this.elapsed/this.frames;this.elapsed=0,this.frames=0;let n=this.scale;return t>17.2?(this.scale=Math.max(.8,Math.floor(this.scale*Math.max(.8,Math.sqrt(14.5/t))*100)/100),this.fastWindows=0):t<12?++this.fastWindows>=4&&(this.scale=Math.min(1,this.scale+.03),this.fastWindows=0):this.fastWindows=0,this.scale!==n}};function s(e,t,n,r,i=1080){return Math.min(Math.max(.01,n),1.5,1920/Math.max(1,e),1080/Math.max(1,t))*(i/1080)*Math.min(1,Math.max(.01,r))}export{r as a,t as c,i,o as n,e as o,a as r,n as s,s as t};