var e=class{samples=[];time=0;elapsed=0;strip=0;last;reset(){this.samples.length=0,this.last=void 0,this.elapsed=0,this.time=0,this.strip=0}update(e,t,n,r,i,a,o){e=Math.max(0,e),this.time+=e,this.elapsed+=e;let s=!1,c=0;for(;c<this.samples.length&&this.time-this.samples[c].born>=12;)c++;c&&(this.samples.splice(0,c),s=!0);let l=i<0?-1:1,u=t-Math.sin(r)*o*.46*l,d=n-Math.cos(r)*o*.46*l,f=this.last?Math.hypot(u-this.last.x,d-this.last.z):0;if((!a||Math.abs(i)<=.6||this.last&&(f>o*3||l!==this.last.sign))&&(this.last&&=(this.strip++,void 0)),e>0&&a&&Math.abs(i)>.6&&this.elapsed>=.1&&(!this.last||f>.2)){let e=this.last&&f>0?(d-this.last.z)/f:Math.cos(r),t=this.last&&f>0?-(u-this.last.x)/f:-Math.sin(r);this.samples.push({x:u,z:d,nx:e,nz:t,born:this.time,strength:Math.min(1,Math.abs(i)/18),strip:this.strip}),this.last={x:u,z:d,sign:l},this.elapsed=0,s=!0}return s}writeIndices(e){let t=0;for(let n=1;n<this.samples.length;n++){if(this.samples[n].strip!==this.samples[n-1].strip)continue;let r=(n-1)*2;e.set([r,r+2,r+1,r+1,r+2,r+3],t),t+=6}return t}},t={clear:{height:1,speed:1,sun:1,cloud:0,wakeRoughness:.1},overcast:{height:1.45,speed:1.1,sun:.3,cloud:.65,wakeRoughness:.45},rain:{height:2.1,speed:1.35,sun:.08,cloud:.95,wakeRoughness:.85},fog:{height:.45,speed:.65,sun:.12,cloud:.8,wakeRoughness:0}};function n(e){return 1-Math.exp(-Math.max(0,e)/4)}var r=`attribute float washKind;uniform float width,length,speed;varying vec2 washUV;varying float kind;
   void main(){washUV=position.xz;kind=washKind;
    float reach=mix(length*(.55+speed*.4),length*(.22+speed*.48),kind);
    float breadth=mix(width*.8+reach*.34,width*(.65+speed*.5),kind);
    vec3 p=vec3(position.x*breadth,.28,mix(length*.46,-length*.44,kind)-position.z*reach);
    gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
   }`,i=`uniform sampler2D foamMap;uniform float time,speed,turn,thrust,width,length,wakeRoughness;
   varying vec2 washUV;varying float kind;
   void main(){
    float along=washUV.y;float across=washUV.x;
    vec2 uv=vec2(across*1.7,along*2.6-time*(.06+speed*.06));
    vec3 foam=texture2D(foamMap,uv).rgb;
    // Sample before the varying branch so texture derivatives remain defined on WebGPU.
    float swirl=sin(along*20.-time*(2.+speed)+foam.r*3.);
    vec3 bubbles=texture2D(foamMap,uv*2.1+vec2(swirl*.05,-time*.08)).rgb;
    // Broad packets interrupt the crest; signed UVs keep port/starboard independent.
    vec3 packets=texture2D(foamMap,vec2(across*.43+along*.19,along*.72-time*.035)).rgb;
    float density=0.;
    if(kind<.5){
     float reach=length*(.55+speed*.4),breadth=width*.8+reach*.34;
     // Crests start at the bow and diverge outside the hull.
     float crest=(width*.1+along*reach*.34)/breadth;
     float d=abs(across+(foam.r-.5)*mix(.025,.08,wakeRoughness))-crest
       +(packets.r-.5)*(.025+along*.085);
     float ridgeWidth=(.018+speed*.011+along*.018)*mix(.55,1.6,packets.r);
     float ridge=exp(-pow(d/ridgeWidth,2.));
     float echo=exp(-pow((d-.065-along*.055)/.028,2.))*.24*smoothstep(.34,.63,bubbles.b);
     float crests=smoothstep(.29,.61,packets.b*.7+foam.r*.3);
     float lace=smoothstep(.2,.62,foam.g*.45+bubbles.b*.55);
     float asymmetric=clamp(1.+sign(across)*turn*.45,.5,1.5);
     density=(ridge+echo)*smoothstep(0.,.07,along)*(1.-smoothstep(.4,1.,along))
       *mix(.08,1.,crests)*mix(.15,1.,lace)*asymmetric;
    }else{
     // Two rotating, advected propeller streams merge into broken white water.
     float center=turn*along*.3+swirl*.055*along;
     float left=across-center-.2-sin(time*1.9-along*24.)*.055;
     float right=across-center+.2+sin(time*2.1-along*24.+1.4)*.055;
     float jets=exp(-left*left/(.014+along*.09))+exp(-right*right/(.014+along*.09));
     float broken=mix(.3,1.,smoothstep(.15,.65,foam.b*.45+bubbles.g*.55));
     density=jets*broken*(1.-smoothstep(.15,1.,along))*smoothstep(0.,.025,along)
       *(1.-smoothstep(.7,1.,abs(across)))*(1.+thrust*.28);
    }
    float strength=smoothstep(.02,.7,speed)*min(1.,.4+speed*.55);
    float breakup=mix(1.,smoothstep(.18,.7,foam.b*.5+bubbles.g*.5),wakeRoughness*.7);
    float alpha=clamp(density*strength*.78*breakup,0.,.85);
    gl_FragColor=vec4(mix(vec3(.63,.8,.84),vec3(.94,.98,1.),foam.g),alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`,a=(e,t,n)=>e+(t-e)*n;function o(){let e=new Uint8Array(262144),t=(e,t,n)=>{e=(e%n+n)%n,t=(t%n+n)%n;let r=Math.sin(e*127.1+t*311.7+47)*43758.5453;return r-Math.floor(r)},n=(e,n,r)=>{let i=e*r,o=n*r,s=Math.floor(i),c=Math.floor(o),l=i-s,u=o-c,d=l*l*(3-2*l),f=u*u*(3-2*u);return a(a(t(s,c,r),t(s+1,c,r),d),a(t(s,c+1,r),t(s+1,c+1,r),d),f)};for(let t=0;t<256;t++)for(let r=0;r<256;r++){let i=r/256,a=t/256,o=n(i,a,8),s=n(i,a,24),c=n(i,a,64),l=o*.55+s*.3+c*.15,u=Math.max(0,1-Math.abs(s-.5)*8)**2,d=(t*256+r)*4;e[d]=o*255,e[d+1]=Math.min(1,u*.65+c*.35)*255,e[d+2]=l*255,e[d+3]=255}return{data:e,size:256}}export{n as a,t as i,i as n,e as o,r,o as t};