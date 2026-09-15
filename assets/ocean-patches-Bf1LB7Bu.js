var e={tile:28,spectrumTile:10,height:.014,chop:.028,normalGain:1,time:.65},t=e.height*e.spectrumTile/e.tile*e.normalGain,n=`
float patchHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float patchNoise(vec2 p){
 vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(patchHash(i),patchHash(i+vec2(1.,0.)),f.x),mix(patchHash(i+vec2(0.,1.)),patchHash(i+1.),f.x),f.y);
}
float wavePatch(vec2 p,float t){
 vec2 q=vec2(p.x*.72+p.y*.28,p.y*1.15-p.x*.19)*.012+vec2(-t*.004,t*.001);
 float n=patchNoise(q)*.7+patchNoise(q*2.13+vec2(7.3,13.1))*.3;
 return mix(.4,1.4,smoothstep(.22,.78,n));
}`;export{e as n,t as r,n as t};