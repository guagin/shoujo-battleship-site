var e=`
const vec3 oceanSunDirection=vec3(-.45,.42,-.72);
float skyHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float skyNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(skyHash(i),skyHash(i+vec2(1.,0.)),f.x),mix(skyHash(i+vec2(0.,1.)),skyHash(i+1.),f.x),f.y);}
vec3 oceanSky(vec3 d,float t,float overcast){
 float h=max(0.,d.y);
 vec3 c=mix(vec3(.42,.55,.65),vec3(.075,.23,.43),pow(h,.4));
 vec2 uv=d.xz/max(.18,h)*.9+vec2(t*.001,0.);
 float n=skyNoise(uv)*.68+skyNoise(uv*2.1+3.7)*.32;
 float cloud=smoothstep(mix(.5,.26,overcast),mix(.72,.58,overcast),n)*smoothstep(0.,.14,h);
 c=mix(c,mix(vec3(.79,.83,.86),vec3(.3,.36,.42),overcast),cloud*.9);
 return mix(c,vec3(.3,.37,.43),overcast*.35);
}
// GGX sun highlight with roughness increased by unresolved normal variation.
float oceanSpecular(vec3 N,vec3 V,float roughness){
 vec3 L=normalize(oceanSunDirection),H=normalize(V+L);
 float nv=max(.001,dot(N,V)),nl=max(0.,dot(N,L)),nh=max(0.,dot(N,H)),vh=max(0.,dot(V,H));
 float a=roughness*roughness,a2=a*a,d=nh*nh*(a2-1.)+1.;
 float D=a2/(3.14159265*d*d);
 float gv=2.*nv/(nv+sqrt(a2+(1.-a2)*nv*nv));
 float gl=2.*nl/(nl+sqrt(a2+(1.-a2)*nl*nl));
 float F=.0204+.9796*pow(1.-vh,5.);
 return D*gv*gl*F/(4.*nv);
}`;export{e as t};