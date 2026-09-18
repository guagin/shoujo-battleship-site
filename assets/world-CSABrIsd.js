import{H as e,K as t,P as n,V as r,Z as i,_ as a,at as o,c as s,et as c,h as l,i as u,it as d,j as f,l as p,m,p as h,q as g,rt as _,t as v,v as y,x as b}from"./ship-fire-Dyu9AsBv.js";import{n as x,s as S}from"./gun-refit-DVegWHio.js";import{a as C,n as ee}from"./secondary-armament-D2XsI0e-.js";import{a as te,i as w,n as ne,o as T,r as E,t as D}from"./foam-pixels-LZaEnoMq.js";import{a as O,c as re,i as ie,n as k,o as ae,r as A,s as oe,t as j}from"./render-size-D8c-O9s_.js";import{n as se}from"./graphics-settings-CFMEYFtJ.js";import{$ as ce,A as M,At as le,Bt as N,C as P,Ct as F,D as I,Dt as ue,E as de,Et as fe,F as pe,Ft as me,Ht as he,I as L,It as ge,Jt as _e,Kt as ve,L as ye,M as be,N as xe,O as R,Ot as z,P as Se,Q as B,Qt as Ce,R as we,Rt as Te,S as Ee,T as De,U as V,Ut as H,V as Oe,Vt as ke,Wt as Ae,X as je,Z as Me,Zt as Ne,_ as Pe,_t as U,cn as Fe,d as Ie,dn as Le,dt as Re,f as W,ft as ze,g as Be,h as Ve,i as He,in as Ue,j as We,jt as Ge,kt as Ke,l as qe,ln as Je,m as Ye,mt as G,nn as K,nt as q,on as Xe,p as Ze,pn as Qe,pt as J,r as $e,rt as et,sn as tt,t as nt,tt as rt,un as Y,v as it,w as at,wt as ot,y as X,yt as st,z as ct,zt as Z}from"./three.module-DYlIZi1v.js";import{n as lt}from"./GLTFLoader-Dfx5e3af.js";import{n as ut,r as dt,t as ft}from"./game-ship-asset-CsvsHvzs.js";import{n as pt,t as mt}from"./impact-vfx-C3IcXZ2c.js";var ht=class{root=new L;convoy;end;constructor(){let e=new G({color:`#ffd783`,transparent:!0,opacity:.8,side:2}),t=t=>{let n=new J(new N(t-2,t,64),e);return n.rotation.x=-Math.PI/2,n.position.y=1.5,this.root.add(n),n};this.convoy=t(65),this.end=t(85);let n=new Me(new W().setFromPoints([new Y(o.startX,1.5,o.z),new Y(o.endX,1.5,o.z)]),new ce({color:`#ffd783`,dashSize:18,gapSize:16,transparent:!0,opacity:.5}));n.computeLineDistances(),this.root.add(n),this.root.visible=!1}update(e){if(this.root.visible=e.gameMode===`escort`&&e.mode!==`port`,!this.root.visible)return;let t=e.ships[e.escort.shipId];this.convoy.position.set(t.x,1.5,t.z),this.end.position.set(e.escort.end.x,1.5,e.escort.end.z)}},gt=new WeakMap;function _t(e,t){gt.set(e,t)}function vt(e){let t=gt.get(e);return!t||e.opacity!==1||t.opacity!==1||t.transparent||t.alphaHash||`alphaMap`in t&&t.alphaMap?e:t}var yt=class{group=new L;enabled=!0;opaqueStealth=!0;batches=new Map;active=[];hidden=[];frustum=new Se;projection=new ze;nesting=!1;constructor(){this.group.name=`fleet-instances`,this.group.visible=!1,this.group.userData.excludeReflection=!0}begin(e,t){if(this.enabled&&!this.nesting){this.nesting=!0,this.frustum.setFromProjectionMatrix(this.projection.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse));for(let e of this.batches.values())e.sources.length=0,e.mesh.visible=!1;for(let n of e)n.traverseVisible(n=>{if(!(n instanceof J)||n instanceof ve||n instanceof V||n.children.length||Array.isArray(n.material)||Object.keys(n.geometry.morphAttributes).length||!t.layers.test(n.layers)||n.matrixWorld.determinant()<=0||n.frustumCulled&&!this.frustum.intersectsObject(n))return;let r=this.opaqueStealth?vt(n.material):n.material;if(r.transparent||r.alphaHash||r.opacity!==1)return;let i=[n.geometry.uuid,r.uuid,n.layers.mask,n.renderOrder,n.receiveShadow].join(`:`),a=this.batches.get(i);if(!a){let t=new V(n.geometry,r.clone(),Math.max(32,e.length));t.name=`Fleet_`+n.name,t.frustumCulled=!1,t.matrixAutoUpdate=!1,t.layers.mask=n.layers.mask,t.renderOrder=n.renderOrder,t.receiveShadow=n.receiveShadow,t.instanceMatrix.setUsage(I),t.visible=!1,a={mesh:t,sources:[]},this.batches.set(i,a),this.group.add(t)}a.sources.push(n)});this.active.length=0,this.hidden.length=0;for(let e of this.batches.values()){let{mesh:t,sources:n}=e;n.length<2||n.length>t.instanceMatrix.count||(t.count=n.length,n.forEach((e,n)=>{t.setMatrixAt(n,e.matrixWorld),e.visible=!1,this.hidden.push(e)}),t.instanceMatrix.clearUpdateRanges(),t.instanceMatrix.addUpdateRange(0,t.count*16),t.instanceMatrix.needsUpdate=!0,t.visible=!0,this.active.push(e))}this.group.visible=this.active.length>0}}suspend(){if(!this.nesting)return()=>{};this.group.visible=!1;for(let e of this.hidden)e.visible=!0;return()=>{for(let e of this.hidden)e.visible=!1;this.group.visible=this.active.length>0}}end(){for(let e of this.hidden)e.visible=!0;this.hidden.length=0,this.group.visible=!1,this.nesting=!1}reset(){this.end();for(let{mesh:e}of this.batches.values())e.dispose(),e.material.dispose();this.batches.clear(),this.active.length=0,this.group.clear()}dispose(){this.reset(),this.group.removeFromParent()}},bt=class{group=new L;flameMap=pt(!1);smokeMap=pt(!0);flames=new V(new z(1,1),new G({map:this.flameMap,color:`#ff7a20`,transparent:!0,blending:2,depthWrite:!1}),72);smoke=new V(new z(1,1),new G({map:this.smokeMap,color:`#393532`,transparent:!0,opacity:.55,depthWrite:!1}),144);dummy=new F;origin=new Y;constructor(){this.group.userData.excludeReflection=!0,this.group.add(this.smoke,this.flames);for(let e of[this.smoke,this.flames])e.frustumCulled=!1,e.instanceMatrix.setUsage(I)}update(e,t,n){let r=0,i=0;this.dummy.quaternion.copy(n.quaternion);for(let n of e.ships){let a=t[n.id];if(!a?.visible||!v(n)||n.hp<=0||n.respawn>0||e.mode===`port`)continue;let o=1+n.fireAge/30;for(let t=0;t<3&&r<72;t++){this.origin.set((t-1)*1.4,3,(t-1)*5),this.origin.applyMatrix4(a.matrixWorld);let i=1+.15*Math.sin(e.elapsed*17+n.id+t*2);this.dummy.position.copy(this.origin),this.dummy.position.y+=2*o,this.dummy.scale.set(5*o*i,8*o/i,1),this.dummy.updateMatrix(),this.flames.setMatrixAt(r++,this.dummy.matrix)}this.origin.set(0,5,0),this.origin.applyMatrix4(a.matrixWorld);for(let t=0;t<6&&i<144;t++){let n=(e.elapsed*.23+t/6)%1;this.dummy.position.copy(this.origin),this.dummy.position.x+=n*12,this.dummy.position.y+=n*25,this.dummy.scale.setScalar((6+n*13)*o),this.dummy.updateMatrix(),this.smoke.setMatrixAt(i++,this.dummy.matrix)}}for(let[e,t]of[[this.flames,r],[this.smoke,i]])e.count=t,e.visible=t>0,t&&(e.instanceMatrix.needsUpdate=!0)}dispose(){for(let e of[this.flames,this.smoke])e.dispose(),e.geometry.dispose(),e.material.dispose();this.flameMap.dispose(),this.smokeMap.dispose(),this.group.removeFromParent()}},xt=class{group=new L;clouds=[];ghosts=[];texture;constructor(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(210,225,230,.8)`),n.addColorStop(.5,`rgba(190,211,220,.55)`),n.addColorStop(1,`rgba(190,211,220,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),this.texture=new Ye(e),this.group.userData.excludeReflection=!0;for(let e=0;e<72;e++){let e=new Ne(new Ce({map:this.texture,transparent:!0,depthWrite:!1}));e.visible=!1,this.clouds.push(e),this.group.add(e)}let r=new Ae;r.moveTo(0,-32),r.lineTo(-5,-20),r.lineTo(-6,23),r.lineTo(0,30),r.lineTo(6,23),r.lineTo(5,-20),r.closePath();let i=new R(r,{depth:4,bevelEnabled:!1});i.rotateX(Math.PI/2);let a=new qe(7,7,14);for(let e=0;e<24;e++){let e=new L,t=new G({color:`#84dfff`,transparent:!0,opacity:.5,depthWrite:!1});e.add(new J(i,t));let n=new J(a,t);n.position.y=5,e.add(n),e.visible=!1,this.ghosts.push(e),this.group.add(e)}}update(e){this.group.visible=e.mode===`battle`||e.mode===`pause`;let t=e.deployments.fields;this.clouds.forEach((e,n)=>{let r=t.smoke[n];e.visible=!!r,r&&(e.position.set(r.x,12,r.z),e.scale.setScalar(150*Math.min(1,.4+r.age*.3)),e.material.opacity=Math.min(1,r.age*2,r.life/3)*.55,e.material.rotation=Math.sin(n*17)*.5+r.age*.015)}),this.ghosts.forEach((n,r)=>{let i=t.phantoms[r];if(n.visible=!!i&&t.visible(e,e.player,i),!i||!n.visible)return;n.position.set(i.x,3,i.z),n.rotation.y=i.heading;let a=t.identified(e,e.player,i);for(let e of n.children){let t=e.material;t.color.set(a?`#84dfff`:`#82949d`),t.opacity=Math.min(1,i.age*3,i.life/2)*(a?.35:.9)}})}dispose(){let e=new Set,t=new Set;this.group.traverse(n=>{n instanceof J?(e.add(n.geometry),t.add(n.material)):n instanceof Ne&&t.add(n.material)}),e.forEach(e=>e.dispose()),t.forEach(e=>e.dispose()),this.texture.dispose(),this.group.removeFromParent()}},St=class{group=new L;reefs=[];waves=[];walls=new V(new P(30,32,8,9),new U({color:`#586568`,roughness:.9,metalness:.35}),24);transform=new F;constructor(){this.group.userData.excludeReflection=!0,this.walls.count=0,this.walls.frustumCulled=!1,this.group.add(this.walls);for(let e=0;e<6;e++){let e=new J(new N(.98,1,64),new G({color:`#75d7de`,transparent:!0,opacity:.6,side:2,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.visible=!1,this.reefs.push(e),this.group.add(e)}let e=document.createElement(`canvas`);e.width=256,e.height=64;let t=e.getContext(`2d`);for(let e=0;e<256;e++){let n=28+Math.sin(e*.13)*4+Math.sin(e*.041)*5,r=t.createLinearGradient(0,n-16,0,n+22);r.addColorStop(0,`#80daef00`),r.addColorStop(.5,`#e6ffffc0`),r.addColorStop(1,`#80daef00`),t.fillStyle=r,t.fillRect(e,0,1,64)}let n=new Ye(e);this.group.userData.waveTexture=n;for(let e=0;e<24;e++){let e=new J(new z(200,40),new G({map:n,transparent:!0,opacity:.8,side:2,depthWrite:!1}));e.rotation.x=-Math.PI/2,e.visible=!1,this.waves.push(e),this.group.add(e)}}update(e){this.group.visible=e.mode===`battle`||e.mode===`pause`;let t=e.deployments.terrain;this.reefs.forEach((e,n)=>{let r=t.reefs[n];if(e.visible=!!r,!r)return;let i=u[r.index];e.position.set(i.x,1,i.z),e.scale.setScalar(i.r*1.12),e.material.color.set(r.life-r.age<=3.2?`#ffb66d`:`#75d7de`),e.material.opacity=.35+.25*Math.sin(r.age*5)**2}),this.waves.forEach((e,n)=>{let r=t.waves[n];if(e.visible=!!r,!r)return;let i=Math.max(0,r.age-1)*55;e.position.set(r.x+Math.sin(r.heading)*i,1.2,r.z+Math.cos(r.heading)*i),e.rotation.z=r.heading,e.material.opacity=r.age<1?.25:.8*Math.min(1,9-r.age)});let n=0;for(let e of t.walls)this.transform.position.set(e.x,4*Math.min(1,e.age)-4*(Math.max(0,e.age-16)/2),e.z),this.transform.rotation.set(0,e.heading,0),this.transform.scale.setScalar(e.age<1?e.age:1),this.transform.updateMatrix(),this.walls.setMatrixAt(n++,this.transform.matrix);this.walls.count=n,n&&(this.walls.instanceMatrix.needsUpdate=!0)}dispose(){for(let e of[...this.reefs,...this.waves])e.geometry.dispose(),e.material.dispose();this.walls.geometry.dispose(),this.walls.material.dispose(),this.walls.dispose(),this.group.userData.waveTexture.dispose(),this.group.removeFromParent()}},Ct=class{group=new L;fields=new xt;terrain=new St;markers=new V(new ot(3),new G,72);ring=new J(new N(127,130,96),new G({color:`#ffd783`,transparent:!0,opacity:.7,side:2,depthWrite:!1}));transform=new F;color=new X;constructor(){this.group.add(this.fields.group,this.terrain.group),this.group.userData.excludeReflection=!0,this.markers.frustumCulled=!1,this.markers.instanceMatrix.setUsage(I),this.ring.rotation.x=-Math.PI/2,this.group.add(this.markers,this.ring)}update(t){this.fields.update(t),this.terrain.update(t),this.group.visible=t.mode===`battle`||t.mode===`pause`;let n=0;for(let r of t.deployments.items){if(n===72)break;t.deployments.visible(t,r)&&(this.transform.position.set(r.x,2+Math.sin(t.elapsed*2+r.id),r.z),this.transform.rotation.set(0,t.elapsed,0),this.transform.scale.setScalar(r.kind===`mines`?1:2),this.transform.updateMatrix(),this.markers.setMatrixAt(n,this.transform.matrix),this.markers.setColorAt(n,this.color.set(r.team===t.player.team?e[r.kind].color:`#ff735d`)),n++)}this.markers.count=n,this.markers.visible=n>0,n&&(this.markers.instanceMatrix.needsUpdate=!0,this.markers.instanceColor&&(this.markers.instanceColor.needsUpdate=!0)),this.ring.visible=t.flank.active||t.flank.announced,this.ring.position.set(t.flank.x,1,t.flank.z),this.ring.material.color.set(t.flank.kind===`interference`?`#d6a3ff`:`#ffd783`),this.ring.material.opacity=t.flank.announced?.25:.7}dispose(){this.fields.dispose(),this.terrain.dispose(),this.markers.dispose(),this.markers.geometry.dispose(),this.markers.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.group.removeFromParent()}},wt=class{opacity=1;wasCloaked=!1;materials;constructor(e){this.materials=Array.from(e,e=>(e.alphaHash=!0,e.needsUpdate=!0,{material:e,opacity:e.opacity}))}update(e,t,n,r,i=1){let a=t&&r?.35:+!!n;if(t||this.wasCloaked||this.opacity>0&&this.opacity<1){let t=Math.max(0,e)/.8;this.opacity+=Math.sign(a-this.opacity)*Math.min(Math.abs(a-this.opacity),t)}else this.opacity=a;this.wasCloaked=t;let o=this.opacity*i;for(let e of this.materials)e.material.opacity=e.opacity*o;return o>.001}},Tt=class{group=new L;mesh=new V(new qe(1,.12,1),new G({color:16777215,blending:2,transparent:!0,depthWrite:!1}),288);pose=new F;color=new X;constructor(){this.group.userData.excludeReflection=!0,this.mesh.userData.excludeReflection=!0,this.mesh.frustumCulled=!1,this.mesh.instanceMatrix.setUsage(I),this.mesh.count=0,this.group.add(this.mesh)}update(e){let t=this.mesh.count,n=0;if(e.mode===`battle`||e.mode===`pause`)for(let t of e.ships){if(t.hp<=0||t.respawn>0||!e.canSeeDirect(e.player,t))continue;let r=c(t,e.elapsed).filter(e=>e.visual).at(-1);if(!r)continue;let i=e.elapsed-r.time,a=r.visual===`armour`?16757839:7536608,o=r.visual;if(i<0||i>=1)continue;let s=i/1,l=1-(1-s)**3,u=Math.sin(Math.PI*s)**.6,d=Math.sin(t.heading),f=Math.cos(t.heading),p=(e,r,i,o)=>{n>=this.mesh.instanceMatrix.count||(this.pose.position.set(t.x+f*e+d*r,1.8,t.z-d*e+f*r),this.pose.rotation.set(0,t.heading,0),this.pose.scale.set(i,1,o),this.pose.updateMatrix(),this.mesh.setMatrixAt(n,this.pose.matrix),this.color.setHex(a).multiplyScalar(u),this.mesh.setColorAt(n++,this.color))};if(o===`calibration`)for(let e of[-1,1])for(let t=0;t<((r.stacks??0)>=2?3:2);t++)p(e*(8+5*(1-l)),-12+t*8+l*8,.32,3+3*l);if(o===`armour`)for(let e=0;e<3+(r.stacks??1);e++)p((r.side??1)*(11+l*2),-13+e*5,.65*(1-l)+.2,3.4);if(o===`surge`)for(let e of[-1,1])for(let t=0;t<3;t++)p(e*(7+t*1.7),8-t*5-l*24,.25,5+8*l)}this.mesh.count=n,this.mesh.visible=n>0,(n||t)&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0))}dispose(){this.group.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.dispose()}},Et=class{group=new L;rings=[];shieldArc=new N(.97,1,48,1,-Math.PI*5/6,Math.PI*2/3);constructor(){this.group.userData.excludeReflection=!0;for(let e=0;e<24;e++){let e=new J(new N(.987,1,64),new G({transparent:!0,opacity:.35,depthWrite:!1,side:2}));e.rotation.x=-Math.PI/2,e.visible=!1,e.userData.excludeReflection=!0,this.rings.push(e),this.group.add(e)}}update(e){this.rings.forEach((n,r)=>{let i=e.ships[r];if(n.visible=(e.mode===`battle`||e.mode===`pause`)&&!!i&&i.respawn<=0&&t(i)&&![`mines`,`decoy`,`buoy`,`smoke`,`illusion`,`submerge`,`surge`,`salvageWall`].includes(i.tacticalChoice??`default`)&&e.canSeeDirect(e.player,i),!n.visible)return;n.userData.fullRing||(n.userData.fullRing=n.geometry),n.geometry=[`deflector`,`armorShift`].includes(i.tacticalChoice??``)?this.shieldArc:n.userData.fullRing,n.rotation.z=i.tacticalChoice===`armorShift`?i.heading+(i.armorBearing??0):i.tacticalChoice===`deflector`?i.heading:0;let a=g(i),o=1-(i.tacticalTime??0)/a.duration,s=i.type===`mio`?a.radius*(.08+.92*(o*4%1)):a.radius;n.scale.setScalar(s),n.position.set(i.x,.9,i.z),n.material.color.set(a.color),n.material.opacity=i.type===`mio`?.5*(1-o*4%1):.28})}dispose(){let e=new Set([this.shieldArc]);for(let t of this.rings)e.add(t.geometry),t.userData.fullRing&&e.add(t.userData.fullRing),t.material.dispose();for(let t of e)t.dispose();this.group.removeFromParent()}},Dt=class{mesh;data=new Float32Array(768);geometry=new W;constructor(){this.geometry.setAttribute(`position`,new Ie(this.data,3).setUsage(I)),this.geometry.setDrawRange(0,0),this.mesh=new rt(this.geometry,new B({color:`#ffe8a4`,transparent:!0,opacity:.85,depthWrite:!1,blending:2})),this.mesh.frustumCulled=!1,this.mesh.userData.excludeReflection=!0,this.mesh.name=`machine-gun-tracers`}update(e){let t=0;for(let n of e){if(t>=128)break;let e=1-n.life/.13,r=Math.min(1,.2+e),i=Math.max(0,r-.18);for(let e of[i,r]){let r=t*6+(e===i?0:3);this.data[r]=n.x+(n.tx-n.x)*e,this.data[r+1]=n.y+(.6-n.y)*e,this.data[r+2]=n.z+(n.tz-n.z)*e}t++}if(this.mesh.visible=t>0,this.geometry.setDrawRange(0,t*2),t){let e=this.geometry.attributes.position;e.clearUpdateRanges(),e.addUpdateRange(0,t*6),e.needsUpdate=!0}}dispose(){this.mesh.removeFromParent(),this.geometry.dispose(),this.mesh.material.dispose()}};function Ot(e,t){t.set(0,0,0);for(let n=e;n;n=n.parent)n.matrixAutoUpdate&&n.updateMatrix(),t.applyMatrix4(n.matrix);return t}var kt=class{sources=new Map;owned=new Set;owns(e){return this.owned.has(e)}share(e,t,n){let r=this.sources.get(e);r||(r=new Map,this.sources.set(e,r));let i=new Set,a=0;n.traverse(e=>{if(!(e instanceof J))return;let n=`${t}:${a++}:${e.name}`,o=r.get(n);o?e.geometry!==o&&(i.add(e.geometry),e.geometry=o):(r.set(n,e.geometry),this.owned.add(e.geometry))});for(let e of i)this.owned.has(e)||e.dispose()}get size(){return this.owned.size}dispose(){for(let e of this.owned)e.dispose();this.owned.clear(),this.sources.clear()}},At=class{copies=new Map;get(e){let t=this.copies.get(e);return t||(t=e.clone(),this.copies.set(e,t)),t}owns(e){return[...this.copies.values()].includes(e)}dispose(){for(let e of this.copies.values())e.dispose();this.copies.clear()}},jt=class{mesh;slots=Array.from({length:1024},()=>({x:0,z:0,angle:0,life:0}));cursor=0;clock=0;transform=new F;alpha=new Oe(new Float32Array(1024),1).setUsage(I);constructor(){let e=new z(1,1);e.setAttribute(`foamAlpha`,this.alpha);let t=new H({transparent:!0,depthWrite:!1,side:2,vertexShader:`attribute float foamAlpha;varying float a;varying vec2 v;
    void main(){a=foamAlpha;v=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`,fragmentShader:`varying float a;varying vec2 v;
    void main(){vec2 p=v*2.-1.;float edge=pow(max(0.,1.-dot(p,p)),1.5);
    float foam=.55+.45*sin(v.x*53.+sin(v.y*21.)*4.)*sin(v.y*47.);
    gl_FragColor=vec4(.8,.94,.96,a*edge*foam);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`});t.forceSinglePass=!0,this.mesh=new V(e,t,1024),this.mesh.name=`torpedo-water-trails`,this.mesh.frustumCulled=!1,this.mesh.userData.excludeReflection=!0,this.mesh.instanceMatrix.setUsage(I),this.mesh.count=0,this.mesh.visible=!1}update(e,t){if(t<=0)return;for(let e of this.slots)e.life=Math.max(0,e.life-t);if(this.clock+=t,this.clock>=.08){this.clock%=.08;for(let t of e){if(t.kind!==`torpedo`||t.life<=0)continue;let e=Math.atan2(t.vx,t.vz);Object.assign(this.slots[this.cursor++%1024],{x:t.x-Math.sin(e)*3,z:t.z-Math.cos(e)*3,angle:e,life:1.8})}}let n=0;for(let e of this.slots){if(e.life<=0)continue;let t=1.8-e.life,r=this.transform;r.position.set(e.x,.85,e.z),r.rotation.set(-Math.PI/2,0,-e.angle),r.scale.set(1.4+t*1.1,6+t*2,1),r.updateMatrix(),this.mesh.setMatrixAt(n,r.matrix),this.alpha.setX(n,(e.life/1.8)**1.4*.7),n++}this.mesh.count=n,this.mesh.visible=n>0,n&&(this.mesh.instanceMatrix.clearUpdateRanges(),this.mesh.instanceMatrix.addUpdateRange(0,n*16),this.mesh.instanceMatrix.needsUpdate=!0,this.alpha.clearUpdateRanges(),this.alpha.addUpdateRange(0,n),this.alpha.needsUpdate=!0)}dispose(){this.mesh.removeFromParent(),this.mesh.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Mt=class{capacity;wakes=new jt;mesh;transform=new F;colors={torpedo:new X(`#7cf1e0`),player:new X(`#ffe3ac`),other:new X(`#ff7967`)};constructor(e=220){this.capacity=e,this.mesh=new V(new _e(1,6,4),new G({color:16777215}),e),this.mesh.name=`projectile-bodies`,this.mesh.instanceMatrix.setUsage(I);for(let t=0;t<e;t++)this.mesh.setColorAt(t,this.colors.player);this.mesh.instanceColor.setUsage(I),this.mesh.count=0,this.mesh.visible=!1,this.mesh.frustumCulled=!1}update(e,t=0){this.wakes.update(e,t);let n=Math.min(e.length,this.capacity),r=this.mesh,i=this.transform;if(r.count=n,r.visible=n>0,n){for(let t=0;t<n;t++){let n=e[t];i.position.set(n.x,n.kind===`torpedo`?.7:n.y??3,n.z),i.scale.set(n.kind===`secondary`?.35:.65,.6,n.kind===`torpedo`?4:2),i.rotation.set(0,Math.atan2(n.vx,n.vz),0),i.updateMatrix(),r.setMatrixAt(t,i.matrix),r.setColorAt(t,n.kind===`torpedo`?this.colors.torpedo:n.owner===0?this.colors.player:this.colors.other)}r.instanceMatrix.addUpdateRange(0,n*16),r.instanceMatrix.needsUpdate=!0,r.instanceColor.addUpdateRange(0,n*3),r.instanceColor.needsUpdate=!0}}dispose(){this.wakes.dispose(),this.mesh.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.removeFromParent()}};function Nt(){let{data:e,size:t}=D(),n=new at(e,t,t,me);return n.wrapS=n.wrapT=Z,n.magFilter=q,n.minFilter=et,n.generateMipmaps=!0,n.needsUpdate=!0,n}var Pt=class{material;foam=Nt();emitted=new WeakMap;events=[];ships;visible=[];lights=[];constructor(e){this.material=e;let t=e.uniforms;t.uEnergyLightColors={value:Array.from({length:8},()=>new Le)},t.uEnergyFoam={value:this.foam},t.uEnergyWaterCount={value:0},t.uEnergyWaterSegments={value:Array.from({length:8},()=>new Le)},t.uEnergyWaterAges={value:new Float32Array(8)},t.uEnergyLightCount={value:0},t.uEnergyLightSegments={value:Array.from({length:8},()=>new Le)},t.uEnergyWaterAxes={value:Array.from({length:8},()=>new Y)},t.uEnergyWaterEnvelopes={value:Array.from({length:8},()=>new Je)},e.vertexShader=e.vertexShader.replace(`void main(){`,ie+`
void main(){`).replace(`p += disp;`,`p += disp;
  p.y += energyWater(p.xz).x;`),e.fragmentShader=e.fragmentShader.replace(`void main(){`,ie+`
void main(){`).replace(`float facing = dot(V, N);`,`vec4 energyWave=energyWater(vW.xz);
  N=normalize(N+vec3(-energyWave.y,0.,-energyWave.z));
  float facing = dot(V, N);`).replace(`float bed = -400.0;`,`foam=sat(foam+energyWave.w*(.6+.4*fn));
  float bed = -400.0;`),e.fragmentShader.includes(`float haze=`)&&(e.fragmentShader=O+e.fragmentShader.replace(`float haze=`,`c+=energySurfaceLight(vW,N,V);
float haze=`)),e.needsUpdate=!0}update(e,t){if(this.lights.length=0,e.mode!==`port`)for(let n of e.beams){if(!n.active)continue;let e=n.endX-n.x,r=n.endZ-n.z,i=e*e+r*r;if(i<.001)continue;let a=t.position.x-n.x,o=t.position.z-n.z,s=Math.max(0,Math.min(1,(a*e+o*r)/i)),c=(a-e*s)**2+(o-r*s)**2,l=0;for(;l<this.lights.length&&this.lights[l].distance<=c;)l++;l<8&&(this.lights.splice(l,0,{beam:n,distance:c}),this.lights.length>8&&this.lights.pop())}this.material.uniforms.uEnergyLightCount.value=this.lights.length;for(let t=0;t<this.lights.length;t++){let n=this.lights[t].beam;this.material.uniforms.uEnergyLightColors.value[t].set(...C(e.ships[n.owner]?.vessel),n.power??1),this.material.uniforms.uEnergyLightSegments.value[t].set(n.x,n.z,n.endX,n.endZ)}if((this.ships!==e.ships||e.mode===`port`)&&(this.events=[],this.emitted=new WeakMap,this.ships=e.ships),e.mode===`battle`)for(let t of e.beams){let n=this.emitted.get(t);if(n===void 0||t.active&&e.elapsed-n>=.75){this.emitted.set(t,e.elapsed);let n=t.endX-t.x,r=t.endZ-t.z,i=Math.hypot(n,r),a=i>0?1/i:0;this.events.length>=48&&this.events.shift(),this.events.push({beam:{x:t.x,z:t.z,endX:t.endX,endZ:t.endZ,owner:t.owner,life:t.life},time:e.elapsed,ax:n*a,az:r*a,length:i,distance:0})}}let n=0;this.visible.length=0;for(let r of this.events){if(e.elapsed-r.time>=5)continue;this.events[n++]=r;let i=t.position.x-r.beam.x,a=t.position.z-r.beam.z,o=Math.max(0,Math.min(r.length,i*r.ax+a*r.az));r.distance=(i-r.ax*o)**2+(a-r.az*o)**2;let s=0;for(;s<this.visible.length&&this.visible[s].distance<=r.distance;)s++;if(s<8){for(let e=Math.min(7,this.visible.length);e>s;e--)this.visible[e]=this.visible[e-1];this.visible[s]=r}}this.events.length=n;let r=this.material.uniforms;r.uEnergyWaterCount.value=this.visible.length;for(let t=0;t<this.visible.length;t++){let n=this.visible[t],i=Math.max(0,e.elapsed-n.time),a=Math.max(0,Math.min(1,i-4));r.uEnergyWaterSegments.value[t].set(n.beam.x,n.beam.z,n.beam.endX,n.beam.endZ),r.uEnergyWaterAges.value[t]=i,r.uEnergyWaterAxes.value[t].set(n.ax,n.az,n.length),r.uEnergyWaterEnvelopes.value[t].set(Math.exp(-i*.65)*(1-a*a*(3-2*a)),Math.exp(-i*2))}}dispose(){this.foam.dispose()}},Ft=class{group=new L;bodies=new Map;debris=new V(new qe(1,1,1),new U({color:`#383c3c`,roughness:.85}),240);smokeMap;smoke=[];constructor(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,3,64,64,62);n.addColorStop(0,`#303439b0`),n.addColorStop(.45,`#46494d70`),n.addColorStop(1,`#46494d00`),t.fillStyle=n,t.fillRect(0,0,128,128),this.smokeMap=new Ye(e),this.group.userData.excludeReflection=!0,this.debris.frustumCulled=!1,this.group.add(this.debris);for(let e=0;e<24;e++){let e=new Ne(new Ce({map:this.smokeMap,transparent:!0,depthWrite:!1}));e.visible=!1,this.smoke.push(e),this.group.add(e)}}update(e,t,n,i){let a=e.mode===`port`?[]:e.wrecks.filter(t=>Math.hypot(t.x-e.player.x,t.z-e.player.z)<e.visibility),o=new Set(a.filter(e=>e.age<9).map(e=>e.id));for(let[e,t]of this.bodies)o.has(e)||(t.group.removeFromParent(),t.materials.forEach(e=>e.dispose()),this.bodies.delete(e));this.debris.count=0,this.smoke.forEach(e=>e.visible=!1);let s=new F;a.forEach((e,a)=>{if(e.age<9&&!this.bodies.has(e.id)&&t[e.shipId]){let r=new L,a=new Map;for(let a of t[e.shipId].children)a!==n[e.shipId]&&a!==i[e.shipId]&&r.add(a.clone(!0));let o=r.getObjectByName(`Ship_LOD`);if(o){for(let e of[...o.children].slice(0,-1))o.remove(e);o.children[0].visible=!0}r.traverse(e=>{if(e instanceof J){let t=e=>{if(!a.has(e)){let t=e.clone();`color`in t&&t.color.multiplyScalar(.45),a.set(e,t)}return a.get(e)};e.material=Array.isArray(e.material)?e.material.map(t):t(e.material),e.castShadow=!1}}),this.group.add(r),this.bodies.set(e.id,{group:r,materials:[...a.values()]})}let o=r(e),c=this.bodies.get(e.id)?.group;c&&(c.position.set(o.x,o.y,o.z),c.rotation.set(o.pitch,e.heading,o.roll));let l=Math.min(1,(30-e.age)/5);for(let t=0;t<10&&this.debris.count<240;t++){let n=t*2.399+e.id,r=(3+t*.8)*(1-Math.exp(-e.age/3));s.position.set(e.x+Math.cos(n)*r+e.age*.12,.2+Math.sin(e.age*1.5+t)*.2,e.z+Math.sin(n)*r),s.rotation.set(.12*Math.sin(e.age+t),n+e.age*.06,.1),s.scale.set((.5+t%3*.35)*l,.25*l,(1.2+t%4)*l),s.updateMatrix(),this.debris.setMatrixAt(this.debris.count++,s.matrix)}let u=this.smoke[a];u&&e.age<15&&(u.visible=!0,u.position.set(e.x+e.age*.3,4+e.age*.6,e.z),u.scale.setScalar(5+e.age*1.4),u.material.opacity=Math.max(0,1-e.age/15)*.8)}),this.debris.instanceMatrix.needsUpdate=!0}dispose(){for(let e of this.bodies.values())e.materials.forEach(e=>e.dispose());this.bodies.clear(),this.debris.geometry.dispose(),this.debris.material.dispose(),this.smoke.forEach(e=>e.material.dispose()),this.smokeMap.dispose(),this.group.removeFromParent()}};function It(e,t){e.traverse(e=>{if(e instanceof J&&e.userData.terrainBase){let n=e.userData.terrainBase,r=e.geometry.attributes.position,i=e.userData.terrainXZ;if(!i){i={minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0};for(let e=0;e<n.length;e+=3)i.minX=Math.min(i.minX,n[e]),i.maxX=Math.max(i.maxX,n[e]),i.minZ=Math.min(i.minZ,n[e+2]),i.maxZ=Math.max(i.maxZ,n[e+2]);e.userData.terrainXZ=i}let a=t.filter(t=>t.x+t.radius>=i.minX+e.position.x&&t.x-t.radius<=i.maxX+e.position.x&&t.z+t.radius>=i.minZ+e.position.z&&t.z-t.radius<=i.maxZ+e.position.z),o=JSON.stringify([e.position.x,e.position.z,a]);if(e.userData.terrainLocalStamp===o)return;e.userData.terrainLocalStamp=o;for(let t=0;t<r.count;t++)r.setY(t,n[t*3+1]-_(n[t*3]+e.position.x,n[t*3+2]+e.position.z,a));r.needsUpdate=!0,e.geometry.computeVertexNormals(),e.geometry.computeBoundingSphere(),e.geometry.computeBoundingBox()}if(e instanceof V&&e.userData.terrainShrub){let n=e.userData.baseMatrices,r=new ze;for(let i=0;i<e.count;i++)r.fromArray(n,i*16),_(r.elements[12]+e.position.x,r.elements[14]+e.position.z,t)>1&&r.scale(new Y(0,0,0)),e.setMatrixAt(i,r);e.instanceMatrix.needsUpdate=!0}})}var Lt=class{mesh;alpha;constructor(e,t,n,r=!1){let i=e.clone();this.alpha=new Oe(new Float32Array(n),1).setUsage(I),i.setAttribute(`instanceOpacity`,this.alpha);let a=new H({transparent:!0,depthWrite:!1,blending:2,toneMapped:!1,uniforms:{tint:{value:new X(t)}},vertexShader:`attribute float instanceOpacity;varying float alpha;varying vec3 n,v;
void main(){vec4 p=modelViewMatrix*instanceMatrix*vec4(position,1.);n=mat3(modelViewMatrix*instanceMatrix)*normal;v=-p.xyz;alpha=instanceOpacity;gl_Position=projectionMatrix*p;}`,fragmentShader:`uniform vec3 tint;varying float alpha;varying vec3 n,v;
void main(){float edge=${r?`pow(abs(dot(normalize(n),normalize(v))),2.0)`:`1.0`};gl_FragColor=vec4(tint,alpha*edge);}`});this.mesh=new V(i,a,n),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.name=`Energy detail batch`,this.mesh.userData.excludeReflection=!0}reset(){this.mesh.count=0}add(e){if(this.mesh.count>=this.alpha.count)return;e.updateMatrix();let t=this.mesh.count++;this.mesh.setMatrixAt(t,e.matrix),this.alpha.setX(t,e.material.opacity)}flush(){this.mesh.instanceMatrix.needsUpdate=!0,this.alpha.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Rt=(e,t=1)=>new G({color:e,transparent:!0,opacity:t,depthWrite:!1,toneMapped:!1,blending:2});function zt(e){return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 energyNormal; varying vec3 energyView;`).replace(`#include <project_vertex>`,`#include <project_vertex>
energyNormal=normalMatrix*normal;energyView=-mvPosition.xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 energyNormal; varying vec3 energyView;`).replace(`#include <opaque_fragment>`,`#include <opaque_fragment>
gl_FragColor.a*=pow(abs(dot(normalize(energyNormal),normalize(energyView))),2.0);`)},e.customProgramCacheKey=()=>`energy-soft-edge-v1`,e}var Bt=class{beamLayer;group=new L;seen=new WeakSet;arcs=new V(new P(1,1,1,6),Rt(`#d2ffff`,.95),4096);arcGlow=new V(this.arcs.geometry,zt(Rt(`#557fff`,.22)),4096);halo;debris=new V(new ct(1,0),new U({color:`#777367`,roughness:1}),384);map;particles;steam;detailBatches;slots=Array.from({length:48},()=>{let e=new L,t=new J(new P(1,1,1,24),zt(Rt(`#7950ff`,.3))),n=new J(t.geometry,zt(Rt(`#e7ffff`))),r=new J(new ct(1,3),zt(Rt(`#c4afff`,.65))),i=Array.from({length:3},()=>new J(new K(1,.035,6,64),Rt(`#a9cfff`,.7))),a=new J(new N(.92,1,64),Rt(`#d2dfff`,.4));a.rotation.x=-Math.PI/2;let o=new J(r.geometry,zt(Rt(`#ffe6bd`,.8)));return e.add(t,n,r,a,o,...i),this.group.add(e),{group:e,glow:t,core:n,orb:r,rings:i,wave:a,contact:o}});constructor(e){if(this.beamLayer=e,e&&new URLSearchParams(location.search).get(`energyDetails`)!==`legacy`){let e=this.slots[0];this.detailBatches={orb:new Lt(e.orb.geometry,`#c4afff`,48,!0),contact:new Lt(e.contact.geometry,`#ffe6bd`,48,!0),rings:new Lt(e.rings[0].geometry,`#a9cfff`,144),wave:new Lt(e.wave.geometry,`#d2dfff`,48)};for(let e of Object.values(this.detailBatches))this.group.add(e.mesh)}this.group.userData.excludeReflection=!0,this.debris.frustumCulled=!1,this.group.add(this.debris);let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`),r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,`#ffffffff`),r.addColorStop(.2,`#ffffffcc`),r.addColorStop(1,`#ffffff00`),n.fillStyle=r,n.fillRect(0,0,64,64),this.map=new Ye(t);let i=(e,t,n)=>{let r=new W;r.setAttribute(`position`,new Ie(new Float32Array(6144),3).setUsage(I)),r.setDrawRange(0,0);let i=new le(r,new Ge({size:e,color:t,map:this.map,transparent:!0,depthWrite:!1,opacity:n?.85:.22,blending:n?2:1}));return i.frustumCulled=!1,this.group.add(i),i};this.particles=i(1.5,`#b4b4ff`,!0),this.steam=i(12,`#cee1e7`,!1),this.halo=i(25,`#7860ff`,!0),this.halo.material.opacity=.12,this.arcs.frustumCulled=!1,this.arcGlow.frustumCulled=!1,this.group.add(this.arcGlow,this.arcs)}update(e){if(this.beamLayer?.update(e),this.detailBatches)for(let e of Object.values(this.detailBatches))e.reset();this.slots.forEach(e=>e.group.visible=!1),this.debris.count=0,this.arcs.count=this.arcGlow.count=0,this.halo.geometry.setDrawRange(0,0);let t=this.particles.geometry.attributes.position,n=this.steam.geometry.attributes.position,r=0,i=0,a=0,o=new F,s=this.halo.geometry.attributes.position,c=0;if(e.mode===`port`)return this.particles.geometry.setDrawRange(0,0),this.steam.geometry.setDrawRange(0,0),0;for(let t of e.beams){this.seen.has(t)||(this.seen.add(t),t.owner===e.player.id&&(a=1.4));let r=t.active?t.age??0:h-t.life;if(`terrain`in t&&t.terrain)for(let e=0;e<16&&this.debris.count<384;e++){let n=e*2.399,i=12+e*1.7;o.position.set(t.endX+Math.cos(n)*i*r,Math.max(.1,3+(15+e%5*4)*r-15*r*r),t.endZ+Math.sin(n)*i*r),o.rotation.set(r*e,n,r*4),o.scale.setScalar((1+e%3*.5)*Math.min(1,t.life*3)),o.updateMatrix(),this.debris.setMatrixAt(this.debris.count++,o.matrix)}let s=this.beamLayer?.contactParticles?0:Math.min(80,Math.ceil(Math.hypot(t.endX-t.x,t.endZ-t.z)/15));for(let e=0;e<s&&i<2048;e++){let a=(e+.5)/s,o=t.active?(r+e*.137)%1.8:r;n.setXYZ(i++,Re.lerp(t.x,t.endX,a)+Math.sin(e*7)*o*3,1+o*6,Re.lerp(t.z,t.endZ,a)+Math.cos(e*7)*o*3)}}this.debris.instanceMatrix.needsUpdate=!0;let u=[...e.ships.filter(t=>t.energyCharge!==void 0&&e.canSeeDirect(e.player,t)).map(t=>({...l(t,e.craters),owner:t.id,charge:1-t.energyCharge/b(t).charge,life:1,active:!1,age:0,heading:t.energyAim??t.aim})),...e.beams.map(e=>({...e,charge:-1,heading:Math.atan2(e.endX-e.x,e.endZ-e.z)}))];if(u.slice(0,48).forEach((a,l)=>{let u=this.slots[l],d=new Y(a.x,3,a.z),f=new Y(a.endX,3,a.endZ),p=f.clone().sub(d),m=a.charge>=0,g=a.active?a.age??0:h-a.life,_=m||a.active?1:Math.min(1,a.life/.65)**2,v=m?1:1+.08*Math.sin(g*24);u.group.visible=!0;let y=Math.floor(e.elapsed*16),x=e=>Math.sin(e*127.1+y*31.7+l*19.3),S=new Y(Math.sin(a.heading),0,Math.cos(a.heading)),C=new Y(Math.cos(a.heading),0,-Math.sin(a.heading)),ee=(e,t,n)=>{if(this.arcs.count>=4096)return;let r=t.clone().sub(e),i=r.length();i<.001||(o.position.copy(e).add(t).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new Y(0,1,0),r.divideScalar(i)),o.scale.set(n,i,n),o.updateMatrix(),this.arcs.setMatrixAt(this.arcs.count,o.matrix),o.scale.set(n*7,i,n*7),o.updateMatrix(),this.arcGlow.setMatrixAt(this.arcs.count++,o.matrix))};if(!this.beamLayer||m)for(let e=0;e<3;e++){let t=m?18:p.length(),n=m?9:Math.min(64,Math.max(8,Math.ceil(t/15))),r=d.clone();for(let i=1;i<=n;i++){let a=i/n,o=e*Math.PI*2/3+a*8,s=m?(1-a)*12:5+x(i+e*80)*3,c=d.clone().addScaledVector(S,m?(a-.5)*t:a*t).addScaledVector(C,Math.cos(o)*s+x(i*3+e)*2);if(c.y+=Math.sin(o)*s*.7,ee(r,c,(m?.09:.16)*_),i%5==0){let e=c.clone().addScaledVector(C,x(i*9)*10);e.y+=4+x(i*2)*3,ee(c,e,.07*_)}r=c}}let te=m?1:this.beamLayer?0:Math.min(120,Math.ceil(p.length()/10));for(let e=0;e<te&&c<2048;e++){let t=m?0:e/te;s.setXYZ(c++,d.x+p.x*t,d.y,d.z+p.z*t)}for(let[t,n]of[[u.glow,m?.35:7],[u.core,m?.07:1.8]])t.visible=!this.beamLayer,t.visible&&(t.position.copy(d).add(f).multiplyScalar(.5),p.lengthSq()>0&&t.quaternion.setFromUnitVectors(new Y(0,1,0),p.clone().normalize()),t.scale.set(n*_*v*(b(e.ships[a.owner]).width/12),p.length(),n*_*v*(b(e.ships[a.owner]).width/12)),t.material.opacity=m?.25:_*(t===u.glow?.3:1));if(u.orb.position.copy(d),u.orb.scale.setScalar(m?.4+a.charge*2.5:(1.5+4*Math.exp(-g*14))*_),u.orb.material.opacity=m?.4+a.charge*.4:_*.8,u.rings.forEach((t,n)=>{t.position.copy(d).addScaledVector(new Y(Math.sin(a.heading),0,Math.cos(a.heading)),n*3),t.rotation.set(0,a.heading,e.elapsed*(n%2?1:-1)),t.scale.setScalar(m?(10-n*2)*(1-a.charge*.75):a.active?4+n*2+Math.sin(e.elapsed*5+n)*.4:3+g*(20+n*10)),t.material.opacity=m?.2+a.charge*.5:a.active?.65:Math.exp(-g*6)*.8}),u.wave.visible=!m,u.wave.position.set(a.x,.6,a.z),u.wave.scale.setScalar(3+45*(1-Math.exp(-Math.max(0,g)*5))),u.wave.material.opacity=m?0:Math.exp(-g*6)*.5,u.contact.visible=!m&&!!a.active&&`contact`in a&&!!a.contact,u.contact.visible&&(u.contact.position.copy(f),u.contact.scale.setScalar(4.5+Math.sin(e.elapsed*7)*.35),!this.beamLayer?.contactParticles)){for(let n=0;n<24&&r<2048;n++){let i=(e.elapsed+n*.073)%1.2,a=n*2.399,o=i*(5+n%5);t.setXYZ(r++,f.x+Math.cos(a)*o,3+i*(8+n%4)-i*i*4,f.z+Math.sin(a)*o)}for(let t=0;t<8&&i<2048;t++){let r=(e.elapsed+t*.23)%1.8;n.setXYZ(i++,f.x+Math.sin(t*7)*r*2,4+r*7,f.z+Math.cos(t*7)*r*2)}}let w=e.ships[a.owner]?.heading??a.heading,ne=Math.sin(w),T=Math.cos(w);if(m||!this.beamLayer?.contactParticles)for(let n=0;n<20&&r<2048;n++){let i=(n/20+e.elapsed*.6)%1,a=22+(1-i)*18,o=(n%2?1:-1)*3;t.setXYZ(r++,d.x-ne*a+T*o,3+Math.sin(i*Math.PI)*2,d.z-T*a-ne*o)}if(!m&&!this.beamLayer?.contactParticles)for(let t=0;t<12&&i<2048;t++){let r=(t/12+e.elapsed*.5)%1;n.setXYZ(i++,d.x-ne*30+T*Math.sin(t*7)*3,4+r*12,d.z-T*30-ne*Math.sin(t*7)*3)}if(m)for(let n=0;n<32&&r<2048;n++){let i=(n/32+e.elapsed*.7)%1,o=n*2.399+e.elapsed*2,s=2+(1-i)*15*(1-a.charge*.4);t.setXYZ(r++,d.x+Math.cos(o)*s,d.y+Math.sin(o*.7)*s*.7,d.z+Math.sin(o)*s)}if(this.detailBatches){let e=this.detailBatches;e.orb.add(u.orb),u.contact.visible&&e.contact.add(u.contact);for(let t of u.rings)e.rings.add(t);u.wave.visible&&e.wave.add(u.wave),u.group.visible=!1}}),this.detailBatches)for(let e of Object.values(this.detailBatches))e.flush();return this.arcGlow.count=this.arcs.count,this.arcs.instanceMatrix.needsUpdate=!0,this.arcGlow.instanceMatrix.needsUpdate=!0,s.needsUpdate=!0,this.halo.geometry.setDrawRange(0,c),this.halo.material.opacity=.12*Math.min(1,Math.max(0,...u.map(e=>e.charge>=0?.5+e.charge*.5:e.life/.65))),this.steam.material.opacity=.22*Math.min(1,Math.max(0,...e.beams.map(e=>e.life/.5))),t.needsUpdate=!0,n.needsUpdate=!0,this.particles.geometry.setDrawRange(0,r),this.steam.geometry.setDrawRange(0,i),a}dispose(){if(this.detailBatches)for(let e of Object.values(this.detailBatches))e.dispose();this.beamLayer?.dispose(),this.map.dispose();for(let e of[this.particles,this.steam,this.halo])e.geometry.dispose(),e.material.dispose(),e.removeFromParent()}},Vt=class{history=new Map;positions=new Float32Array(12288);geometry=new W;mesh;constructor(){this.geometry.setAttribute(`position`,new Ie(this.positions,3).setUsage(I)),this.geometry.setDrawRange(0,0),this.mesh=new rt(this.geometry,new B({color:`#ffd999`,transparent:!0,opacity:.65,blending:2,depthWrite:!1})),this.mesh.frustumCulled=!1,this.mesh.userData.excludeReflection=!0}update(e,t){let n=new Set,r=0;for(let i of e){if(i.kind===`torpedo`)continue;n.add(i.id);let e=this.history.get(i.id);e||(e=[],this.history.set(i.id,e)),t>0&&(e.unshift(new Y(i.x,i.y??3,i.z)),e.length>7&&e.pop());for(let t=1;t<e.length&&r<this.positions.length;t++)e[t-1].toArray(this.positions,r),e[t].toArray(this.positions,r+3),r+=6}for(let e of this.history.keys())n.has(e)||this.history.delete(e);if(this.geometry.setDrawRange(0,r/3),this.mesh.visible=r>0,r){let e=this.geometry.attributes.position;e.clearUpdateRanges(),e.addUpdateRange(0,r),e.needsUpdate=!0}}dispose(){this.geometry.dispose(),this.mesh.material.dispose(),this.mesh.removeFromParent()}},Ht=class{group=new L;signature=``;constructor(){this.group.name=`Weapon_ranges`,this.group.position.y=2,this.group.userData.excludeReflection=!0}update(e,t){if(this.group.visible=t,!t)return;this.group.position.set(e.x,2,e.z),this.group.rotation.y=e.heading;let n=[...new Set(e.battery.map(e=>e.weapon.range))].sort((e,t)=>e-t),r=e.secondaryGun?.range??0,i=JSON.stringify([n,r,a(e),e.secondaryBattery?.map(e=>[e.x,e.z,e.caliber])]);if(i===this.signature)return;this.signature=i,this.clear();let o=(e,t,n,r=!1)=>{let i=[];for(let t=0;t<256;t++){if(r&&t%4>=2)continue;let a=t/256*Math.PI*2,o=(t+1)/256*Math.PI*2;n((a+o)/2)&&i.push(Math.sin(a)*e,0,Math.cos(a)*e,Math.sin(o)*e,0,Math.cos(o)*e)}let a=new W;a.setAttribute(`position`,new M(i,3));let o=new rt(a,new B({color:t,transparent:!0,opacity:.7,depthWrite:!1,fog:!1}));o.renderOrder=10,this.group.add(o)};for(let t of n)o(t,`#8af4df`,()=>!0,t!==S(e));a(e)&&o(m.range+22,`#df9fff`,()=>!0,!0),r&&e.secondaryBattery?.length&&(o(r,`#ffbd72`,()=>!0,!0),o(r,`#ffbd72`,t=>e.secondaryBattery.some(e=>ee({x:0,z:0,heading:0},e,{x:Math.sin(t)*r,z:Math.cos(t)*r}))))}clear(){for(let e of[...this.group.children]){let t=e;t.geometry.dispose(),t.material.dispose(),this.group.remove(t)}}dispose(){this.clear(),this.group.removeFromParent()}},Ut=class{mesh;speed=0;previousSpeed=0;heading;turn=0;acceleration=0;constructor(e,t,n){let r=new W,i=[],a=[],o=[];for(let e=0;e<2;e++){let t=i.length/3;for(let[t,n]of[[-1,0],[1,0],[-1,1],[1,1]])i.push(t,0,n),a.push(e);o.push(t,t+2,t+1,t+1,t+2,t+3)}r.setAttribute(`position`,new M(i,3)),r.setAttribute(`washKind`,new M(a,1)),r.setIndex(o);let s=new H({transparent:!0,depthWrite:!1,side:2,uniforms:{wakeRoughness:{value:.1},foamMap:{value:n},time:{value:0},speed:{value:0},turn:{value:0},thrust:{value:0},width:{value:e},length:{value:t}},vertexShader:E,fragmentShader:ne});this.mesh=new J(r,s),this.mesh.name=`bow-and-propeller-wash`,this.mesh.frustumCulled=!1,this.mesh.visible=!1}update(e,t,n,r,i,a){let o=this.mesh.material.uniforms;if(!a){this.speed=0,this.turn=0,this.acceleration=0,this.heading=void 0,this.previousSpeed=i,this.mesh.visible=!1;return}if(e>0){let t=1-Math.exp(-e*5),n=this.heading===void 0?0:Math.atan2(Math.sin(r-this.heading),Math.cos(r-this.heading));this.turn+=(Re.clamp(n/e*4,-1,1)-this.turn)*t,this.acceleration+=(Re.clamp((Math.abs(i)-Math.abs(this.previousSpeed))/e/3,0,1)-this.acceleration)*t,this.speed+=(Math.min(1.6,Math.abs(i)/18)-this.speed)*t,this.heading=r,this.previousSpeed=i,o.time.value+=e}o.speed.value=this.speed,o.turn.value=this.turn,o.thrust.value=this.acceleration,this.mesh.position.set(t,0,n),this.mesh.rotation.y=r+(i<0?Math.PI:0),this.mesh.visible=this.speed>.025}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Wt,Gt=0;function Kt(){return Gt++,Wt??=Nt()}var qt=class{width;length;mesh;history=new T;indices=new Uint16Array(762);positions=new Float32Array(768);data=new Float32Array(768);normals=new Float32Array(512);disposed=!1;wash;constructor(e,t){this.width=e,this.length=t;let n=new W;n.setAttribute(`position`,new Ie(this.positions,3).setUsage(I)),n.setAttribute(`wakeData`,new Ie(this.data,3).setUsage(I)),n.setAttribute(`wakeNormal`,new Ie(this.normals,2).setUsage(I));let r=[];for(let e=0;e<127;e++){let t=e*2;r.push(t,t+2,t+1,t+1,t+2,t+3)}n.setIndex(r),n.setDrawRange(0,0);let i=new H({transparent:!0,depthWrite:!1,side:2,uniforms:{wakeRoughness:{value:w.clear.wakeRoughness},surge:{value:0},wakeTime:{value:0},wakeWidth:{value:e},foamMap:{value:Kt()}},vertexShader:`attribute vec3 wakeData;attribute vec2 wakeNormal;uniform float wakeTime,wakeRoughness;uniform float wakeWidth;varying vec3 vWake;varying vec2 vWorld;
   void main(){float age=max(0.,wakeTime-wakeData.y);vec3 p=position;
   p.xz+=wakeNormal*wakeWidth*age*mix(.12,.24,wakeRoughness)*wakeData.x;
   vWake=vec3(wakeData.x,age,wakeData.z*pow(max(0.,1.-age/mix(12.,7.,wakeRoughness)),1.7));
   vWorld=p.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float surge,wakeRoughness;uniform sampler2D foamMap;varying vec3 vWake;varying vec2 vWorld;
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
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
   }`});this.mesh=new J(n,i),this.mesh.name=`world-space-wake`,this.mesh.frustumCulled=!1,this.wash=new Ut(e,t,i.uniforms.foamMap.value),this.mesh.add(this.wash.mesh)}update(e,t,n,r,i,a,o=0,s=`clear`){let c=this.mesh.material.uniforms.wakeRoughness;c.value+=(w[s].wakeRoughness-c.value)*te(e),this.wash.mesh.material.uniforms.wakeRoughness.value=c.value,this.wash.update(e,t,n,r,i,a),this.mesh.material.uniforms.surge.value+=(o-this.mesh.material.uniforms.surge.value)*(1-Math.exp(-e*8));let l=this.history.update(e,t,n,r,i,a,this.length),u=this.history.samples;if(this.mesh.material.uniforms.wakeTime.value=this.history.time,l)for(let e=0;e<u.length;e++){let t=u[e],n=this.width*.35;for(let r=0;r<2;r++){let i=e*2+r,a=i*3,o=r?1:-1;this.positions[a]=t.x+t.nx*n*o,this.positions[a+1]=.22,this.positions[a+2]=t.z+t.nz*n*o,this.data[a]=o,this.data[a+1]=t.born,this.data[a+2]=t.strength,this.normals[i*2]=t.nx,this.normals[i*2+1]=t.nz}}if(this.mesh.visible=u.length>1||this.wash.mesh.visible,l&&u.length>1)for(let e of[`position`,`wakeData`,`wakeNormal`]){let t=this.mesh.geometry.attributes[e];t.clearUpdateRanges(),t.addUpdateRange(0,u.length*2*t.itemSize),t.needsUpdate=!0}if(l){let e=this.history.writeIndices(this.indices);this.mesh.geometry.index.array.set(this.indices),this.mesh.geometry.index.needsUpdate=!0,this.mesh.geometry.setDrawRange(0,e)}}dispose(){this.disposed||(this.disposed=!0,this.wash.dispose(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),--Gt===0&&(Wt?.dispose(),Wt=void 0))}};function Jt(e,t){let n=[];for(let r of e.children){if(!r.visible||r===t||r instanceof je)continue;let e=t.parent,i=!1;for(;e;){if(e===r){i=!0;break}e=e.parent}i||(n.push(r),r.visible=!1)}return()=>{for(let e of n)e.visible=!0}}var Yt=class{renderer;water;scale=.5;target=new Qe(1,1,{minFilter:q,magFilter:q,depthBuffer:!0});scene=new he;camera=new Ze;quad;size=new Je;constructor(e,t){this.renderer=e,this.water=t,this.scene.name=`water-composite`,this.target.depthTexture=new De(1,1,Fe),t.layers.enable(2);let n=new ge({glslVersion:pe,depthTest:!0,depthFunc:1,depthWrite:!0,uniforms:{colorMap:{value:this.target.texture},depthMap:{value:this.target.depthTexture}},vertexShader:`precision highp float;in vec3 position;out vec2 uv;void main(){uv=position.xy*.5+.5;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`precision highp float;uniform sampler2D colorMap;uniform sampler2D depthMap;in vec2 uv;out vec4 color;void main(){float d=texture(depthMap,uv).r;if(d>=1.)discard;color=texture(colorMap,uv);gl_FragDepth=d;}`});this.quad=new J(new z(2,2),n),this.quad.frustumCulled=!1,this.scene.add(this.quad)}render(e,t){for(let t of e.children)t instanceof je&&t.layers.enable(2);let n=this.renderer;n.getDrawingBufferSize(this.size);let r=Math.max(1,Math.round(this.size.x*this.scale)),i=Math.max(1,Math.round(this.size.y*this.scale));(this.target.width!==r||this.target.height!==i)&&this.target.setSize(r,i);let a=n.getRenderTarget(),o=n.autoClear,s=t.layers.mask,c=n.shadowMap.needsUpdate,l=this.water.visible;try{n.shadowMap.needsUpdate=!1,t.layers.set(2),n.setRenderTarget(this.target),n.autoClear=!0;let r=Jt(e,this.water);try{n.render(e,t)}finally{r()}t.layers.mask=s,n.setRenderTarget(a),n.clear(),n.autoClear=!1,n.render(this.scene,this.camera),this.water.visible=!1,n.shadowMap.needsUpdate=c,n.render(e,t)}finally{this.water.visible=l,t.layers.mask=s,n.setRenderTarget(a),n.autoClear=o}}dispose(){this.target.dispose(),this.quad.geometry.dispose(),this.quad.material.dispose(),this.water.layers.disable(2)}},Xt={name:`FXAAShader`,uniforms:{tDiffuse:{value:null},resolution:{value:new Je(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Zt=class{texture=new xe(1,1);scene=new he;camera=new Ze;size=new Je;material=new H({...Xt,uniforms:Xe.clone(Xt.uniforms),depthTest:!1,depthWrite:!1,toneMapped:!1});quad=new J(new z(2,2),this.material);constructor(){this.scene.name=`fxaa`,this.quad.frustumCulled=!1,this.scene.add(this.quad),this.camera.position.z=1}render(e){e.getDrawingBufferSize(this.size),(this.texture.image.width!==this.size.x||this.texture.image.height!==this.size.y)&&(this.texture.dispose(),this.texture=new xe(this.size.x,this.size.y),this.texture.minFilter=q,this.texture.magFilter=q),e.copyFramebufferToTexture(this.texture),this.material.uniforms.tDiffuse.value=this.texture,this.material.uniforms.resolution.value.set(1/this.size.x,1/this.size.y);let t=e.autoClear;e.autoClear=!1;try{e.render(this.scene,this.camera)}finally{e.autoClear=t}}dispose(){this.texture.dispose(),this.material.dispose(),this.quad.geometry.dispose()}};function Qt(e,t,n,{resolution:r=128,hz:i=30}={}){if(!e.extensions.has(`EXT_color_buffer_float`))throw Error(`ABYSSAL needs float render targets`);let a=r,o=Math.round(Math.log2(a)),s=[768,121,19],c=[2*Math.PI*6/121,2*Math.PI*6/19],l=[1e-4,c[0],c[1]],u=[c[0],c[1],9999],d=1.5,f=[],p=[],m=`
precision highp float;
precision highp int;
#define PI 3.141592653589793
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
float sat(float x){ return clamp(x, 0.0, 1.0); }
vec3  sat3(vec3 x){ return clamp(x, 0.0, 1.0); }
`,h=`
uniform vec3  uSunDir;
uniform vec3  uBetaR;
uniform vec3  uBetaM;
uniform float uSunE;
uniform float uMieG;
uniform float uSkyGain;
const float RAY_ZENITH = 8.4e3;
const float MIE_ZENITH = 1.25e3;
const float SUN_COS    = 0.9999566769464484;

float rayleighPhase(float c){ return (3.0/(16.0*PI))*(1.0 + c*c); }
float hgPhase(float c, float g){
  float g2 = g*g;
  return (1.0/(4.0*PI))*((1.0-g2)/pow(max(1.0 - 2.0*g*c + g2, 1e-4), 1.5));
}
vec3 skyRadiance(vec3 dir){
  vec3 up = vec3(0.0,1.0,0.0);
  float zen = acos(max(0.0, dot(up, dir)));
  float inv = 1.0/(cos(zen) + 0.15*pow(max(93.885 - degrees(zen), 1e-3), -1.253));
  vec3 Fex = exp(-(uBetaR*(RAY_ZENITH*inv) + uBetaM*(MIE_ZENITH*inv)));
  float ct = dot(dir, uSunDir);
  vec3 bR = uBetaR * rayleighPhase(ct*0.5 + 0.5);
  vec3 bM = uBetaM * hgPhase(ct, uMieG);
  vec3 tot = max(uBetaR + uBetaM, vec3(1e-9));
  vec3 Lin = pow(uSunE*((bR+bM)/tot)*(1.0 - Fex), vec3(1.5));
  Lin *= mix(vec3(1.0),
             pow(uSunE*((bR+bM)/tot)*Fex, vec3(0.5)),
             sat(pow(1.0 - dot(up, uSunDir), 5.0)));
  vec3 L0 = 0.1*Fex;
  L0 += (uSunE*19000.0*Fex) * smoothstep(SUN_COS, SUN_COS + 0.000018, ct);
  return min(((Lin + L0)*0.04 + vec3(0.0, 0.0003, 0.00075))*uSkyGain, vec3(600.0));
}
// horizon-band average, used as a cheap "blurred" reflection for rough water
vec3 skyRough(vec3 dir, float r){
  vec3 a = skyRadiance(normalize(mix(dir, vec3(dir.x, abs(dir.y)+0.55, dir.z), sat(r*2.2))));
  return mix(skyRadiance(dir), a, sat(r*3.0));
}
`,g=`
float vhash(vec2 p){
  p = fract(p*vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x*p.y);
}
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f*f*(3.0 - 2.0*f);
  return mix(mix(vhash(i), vhash(i+vec2(1,0)), u.x),
             mix(vhash(i+vec2(0,1)), vhash(i+vec2(1,1)), u.x), u.y);
}
float fbm(vec2 p, int oct){
  float s = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++){
    if (i >= oct) break;
    s += a*vnoise(p); p = p*2.03 + 17.1; a *= 0.5;
  }
  return s;
}
`,_=`${m}
in vec3 position;
out vec2 vUv;
void main(){ vUv = position.xy*0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,v=new z(2,2),y=new Ze;function b(t,n,r){r||={};let i=new ge({glslVersion:pe,vertexShader:_,fragmentShader:t,uniforms:n,depthTest:!!r.depthTest,depthWrite:!!r.depthWrite});r.depthFunc&&(i.depthFunc=r.depthFunc),p.push(i);let a=new J(v,i);a.frustumCulled=!1;let o=new he;return o.add(a),{mat:i,u:n,to(t){e.setRenderTarget(t),e.render(o,y)}}}function x(e,t,n){let r=new Qe(e,t,{type:We,format:me,minFilter:st,magFilter:st,depthBuffer:!1,stencilBuffer:!1,count:n||1,generateMipmaps:!1});return r.textures.forEach(e=>{e.generateMipmaps=!1,e.minFilter=st,e.magFilter=st}),f.push(r),r}function S(e,t,n){let r=new Qe(e,t,{type:ye,format:me,minFilter:q,magFilter:q,wrapS:Z,wrapT:Z,depthBuffer:!1,stencilBuffer:!1,count:n||1,generateMipmaps:!1});return r.textures.forEach(e=>{e.generateMipmaps=!1,e.minFilter=q,e.magFilter=q,e.wrapS=Z,e.wrapT=Z}),f.push(r),r}let C={windSpeed:11,windDir:38,fetch:210,depth:420,swell:.72,spread:.62,shortWaves:.0075,amplitude:1,choppiness:1.3,timeScale:1,foamThreshold:.62,foamStrength:1.05,foamDecay:.42,foamAmount:.9,shoreWidth:2.6,sunElev:17,sunAzim:128,turbidity:2.7,rayleigh:1.9,mie:.0075,mieG:.8,sunPower:2.6,skyGain:1,clarity:1,absorbR:.34,absorbG:.085,absorbB:.048,scatter:`#0f5f6b`,sss:`#2fbfa2`,sssStrength:1.5,refract:.55,exposure:1.05,bloom:.42,ssr:!0,glitter:1,scale:1.5,wire:!1,showFoam:!0};function ee(e){let t=Math.round(Math.log2(e)),n=new Int32Array(e);for(let r=0;r<e;r++){let e=r,i=0;for(let n=0;n<t;n++)i=i<<1|e&1,e>>=1;n[r]=i}let r=new Float32Array(t*e*4);for(let i=0;i<t;i++)for(let a=0;a<e;a++){let o=a*(e>>i+1)%e,s=2*Math.PI*o/e,c=1<<i,l=a%(1<<i+1)<c,u,d;i===0?l?(u=n[a],d=n[a+1]):(u=n[a-1],d=n[a]):l?(u=a,d=a+c):(u=a-c,d=a);let f=(a*t+i)*4;r[f]=Math.cos(s),r[f+1]=Math.sin(s),r[f+2]=u,r[f+3]=d}let i=new at(r,t,e,me,We);return i.minFilter=i.magFilter=st,i.wrapS=i.wrapT=it,i.needsUpdate=!0,i}let te=ee(a),w=x(a,a,2),ne=x(a,a,2),T=[],E=[],D=[];for(let e=0;e<3;e++)T.push(x(a,a,1)),E.push(S(a,a,2)),D.push([S(a,a,1),S(a,a,1)]);let O=0,re=b(`${m}
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
}`,{uN:{value:a},uL:{value:1},uWind:{value:1},uFetch:{value:1},uDepth:{value:1},uSwell:{value:0},uSpread:{value:0},uShort:{value:0},uCutLo:{value:0},uCutHi:{value:0},uAmp:{value:1},uWindDir:{value:new Je(1,0)},uSeed:{value:1337}}),ie=b(`${m}
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
}`,{uH0:{value:null},uN:{value:a},uL:{value:1},uTime:{value:0},uDepth:{value:1}}),k=b(`${m}
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
}`,{uSrc0:{value:null},uSrc1:{value:null},uBf:{value:te},uStage:{value:0},uDir:{value:0}}),ae=b(`${m}
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
}`,{uSrc0:{value:null},uSrc1:{value:null},uN:{value:a},uChop:{value:1}}),A=b(`${m}
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
}`,{uDisp:{value:null},uPrev:{value:null},uN:{value:a},uThresh:{value:.6},uStrength:{value:1},uDecay:{value:.4},uDt:{value:.016}}),oe=new Qe(1,1,{type:tt,format:me,minFilter:st,magFilter:st,depthBuffer:!1,stencilBuffer:!1});b(`${m}
uniform sampler2D uD0, uD1, uD2;
uniform vec2  uPos;
uniform float uL0, uL1, uL2;
layout(location=0) out vec4 oC;
vec3 D(vec2 p){
  return texture(uD0, p/uL0).xyz + texture(uD1, p/uL1).xyz + texture(uD2, p/uL2).xyz;
}
void main(){
  vec2 p = uPos;
  for (int i = 0; i < 4; i++) p = uPos - D(p).xz;   // invert horizontal displacement
  float h = D(p).y;
  float v = sat((h + 40.0)/80.0)*65535.0;
  float hi = floor(v/256.0);
  oC = vec4(hi/255.0, (v - hi*256.0)/255.0, 0.0, 1.0);
}`,{uD0:{value:null},uD1:{value:null},uD2:{value:null},uPos:{value:new Je},uL0:{value:s[0]},uL1:{value:s[1]},uL2:{value:s[2]}});let j=!0;function se(){let e=C.windDir*Math.PI/180;for(let t=0;t<3;t++){let n=re.u;n.uL.value=s[t],n.uWind.value=C.windSpeed,n.uFetch.value=C.fetch*1e3,n.uDepth.value=C.depth,n.uSwell.value=C.swell,n.uSpread.value=C.spread,n.uShort.value=C.shortWaves,n.uCutLo.value=l[t],n.uCutHi.value=u[t],n.uAmp.value=C.amplitude,n.uWindDir.value.set(Math.cos(e),Math.sin(e)),re.to(T[t])}j=!1}function ce(e,t){j&&se();for(let n=0;n<3;n++){ie.u.uH0.value=T[n].texture,ie.u.uL.value=s[n],ie.u.uTime.value=e,ie.u.uDepth.value=C.depth,ie.to(w);let r=w,i=ne;for(let e=0;e<2;e++)for(let t=0;t<o;t++){k.u.uSrc0.value=r.textures[0],k.u.uSrc1.value=r.textures[1],k.u.uStage.value=t,k.u.uDir.value=e,k.to(i);let n=r;r=i,i=n}ae.u.uSrc0.value=r.textures[0],ae.u.uSrc1.value=r.textures[1],ae.u.uChop.value=C.choppiness,ae.to(E[n]),A.u.uDisp.value=E[n].textures[0],A.u.uPrev.value=D[n][O].texture,A.u.uThresh.value=C.foamThreshold,A.u.uStrength.value=C.foamStrength,A.u.uDecay.value=C.foamDecay,A.u.uDt.value=t,A.to(D[n][1-O])}O=1-O}let M={dir:new Y(0,1,0),betaR:new Y,betaM:new Y,E:1e3,color:new Y(1,1,1)},le=[.686,.678,.666],N=[5e-4/94,5e-4/40,5e-4/18];function P(){let e=C.sunElev*Math.PI/180,t=C.sunAzim*Math.PI/180;M.dir.set(Math.cos(e)*Math.cos(t),Math.sin(e),Math.cos(e)*Math.sin(t)).normalize();let n=1-Math.min(1,Math.max(0,1-Math.exp(M.dir.y))),r=C.rayleigh-(1-n);M.betaR.set(N[0]*r,N[1]*r,N[2]*r);let i=.434*(.2*C.turbidity*1e-17)*183999185144339.78*C.mie;M.betaM.set(i*le[0],i*le[1],i*le[2]);let a=Math.PI/1.95,o=Math.min(1,Math.max(-1,M.dir.y));M.E=1e3*Math.max(0,1-Math.exp(-((a-Math.acos(o))/1.5)));let s=Math.acos(Math.max(0,o)),c=1/(Math.cos(s)+.15*Math.max(93.885-s*180/Math.PI,.001)**-1.253),l=[M.betaR.x,M.betaR.y,M.betaR.z],u=[M.betaM.x,M.betaM.y,M.betaM.z],d=l.map((e,t)=>Math.exp(-(e*8400+u[t]*1250)*c)),f=Math.max(0,Math.min(1,(M.dir.y+.035)*14));M.color.set(d[0],d[1],d[2]).multiplyScalar(C.sunPower*f)}C.sunElev=26.3,C.sunAzim=-122,P();function F(){return{uSunDir:{value:M.dir},uBetaR:{value:M.betaR},uBetaM:{value:M.betaM},uSunE:{value:M.E},uMieG:{value:C.mieG},uSkyGain:{value:C.skyGain}}}let I=F(),ue=(...e)=>Object.assign({},...e),de=new Qe(1024,512,{type:ye,depthBuffer:!1,stencilBuffer:!1,minFilter:q,magFilter:q,wrapS:Z});f.push(de);let fe=b(m+h+`out vec4 skyColor;void main(){vec2 uv=gl_FragCoord.xy/vec2(1024.,512.);float az=(uv.x-.5)*2.*PI,el=uv.y*PI;vec3 d=vec3(sin(el)*cos(az),cos(el),sin(el)*sin(az));skyColor=vec4(skyRadiance(d),1.);}`,I),L=h.replaceAll(`skyRadiance`,`analyticSkyRadiance`).replaceAll(`skyRough`,`analyticSkyRough`)+`
uniform sampler2D uSkyLUT;uniform float uSkyCached;
vec3 skyRadiance(vec3 d){if(uSkyCached<.5)return analyticSkyRadiance(d);vec2 uv=vec2(atan(d.z,d.x)/(2.*PI)+.5,acos(clamp(d.y,-1.,1.))/PI);return texture(uSkyLUT,uv).rgb;}
vec3 skyRough(vec3 d,float r){vec3 a=skyRadiance(normalize(mix(d,vec3(d.x,abs(d.y)+.55,d.z),sat(r*2.2))));return mix(skyRadiance(d),a,sat(r*3.));}`,_e=new at(new Float32Array([-400,0,0,1]),1,1,me,We);_e.needsUpdate=!0;let ve=new Qe(512,512,{depthBuffer:!1,stencilBuffer:!1,wrapS:Z,wrapT:Z,minFilter:et,magFilter:q,generateMipmaps:!0});f.push(ve);let be=b(m+g+`out vec4 noiseColor;
float periodicNoise(vec2 p,int n){vec2 w=smoothstep(vec2(0.),vec2(32.),p);return mix(mix(fbm(p,n),fbm(p-vec2(32.,0.),n),w.x),mix(fbm(p-vec2(0.,32.),n),fbm(p-vec2(32.),n),w.x),w.y);}
void main(){vec2 p=gl_FragCoord.xy/512.*32.;noiseColor=vec4(periodicNoise(p,4),periodicNoise(p,3),0.,1.);}`,{}),xe=new W;{let e=(6e3/d)**(1/128),t=new Float32Array(74307),n=3;for(let r=0;r<=128;r++){let i=d*e**+r;for(let e=0;e<192;e++){let r=e/192*Math.PI*2;t[n++]=Math.cos(r)*i,t[n++]=0,t[n++]=Math.sin(r)*i}}let r=new Uint32Array(148032),i=0;for(let e=0;e<192;e++)r[i++]=0,r[i++]=1+(e+1)%192,r[i++]=1+e;for(let e=0;e<128;e++){let t=1+e*192,n=1+(e+1)*192;for(let e=0;e<192;e++){let a=(e+1)%192;r[i++]=t+e,r[i++]=n+a,r[i++]=n+e,r[i++]=t+e,r[i++]=t+a,r[i++]=n+a}}xe.setAttribute(`position`,new Ie(t,3)),xe.setIndex(new Ie(r,1))}let R=ue(I,{uNoise:{value:ve.texture},uNoiseCached:{value:1},uSkyLUT:{value:de.texture},uSkyCached:{value:1},toneMappingExposure:{value:.85},uCamPos:{value:new Y},uSunColor:{value:M.color},uD0:{value:null},uD1:{value:null},uD2:{value:null},uV0:{value:null},uV1:{value:null},uV2:{value:null},uF0:{value:null},uF1:{value:null},uF2:{value:null},uL0:{value:s[0]},uL1:{value:s[1]},uL2:{value:s[2]},uTerrain:{value:_e},uTerrainSize:{value:2400},uSceneColor:{value:null},uSceneDepth:{value:null},uResolution:{value:new Je(1,1)},uNear:{value:t.near},uFar:{value:t.far},uTime:{value:0},uAbsorb:{value:new Y(.34,.085,.048)},uScatter:{value:new Y(.025,.13,.18)},uSSSColor:{value:new Y(.18,.75,.63)},uFoamColor:{value:new Y(.92,.96,.98)},uSSSStrength:{value:1.5},uFoamAmount:{value:.9},uShoreWidth:{value:2.6},uRefract:{value:.55},uSSR:{value:1},uUnderwater:{value:0},uFogDensity:{value:85e-6},uVisibility:{value:2e3},uWeatherFogColor:{value:new X(`#a3b5bc`)},uGlitter:{value:1}}),Se=new ge({glslVersion:pe,side:2,uniforms:R,vertexShader:`${m}
in vec3 position;
uniform mat4 viewMatrix, projectionMatrix;
uniform vec3 uCamPos;
uniform sampler2D uD0, uD1, uD2, uTerrain;
uniform float uL0, uL1, uL2, uTerrainSize;
out vec3 vW; out vec3 vDisp; out float vDist; out float vShoal; out float vViewZ;
float bedAt(vec2 p){
  vec2 uv = p/uTerrainSize + 0.5;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return -400.0;
  return textureLod(uTerrain, uv, 0.0).r;
}
void main(){
  vec3 p = vec3(position.x + uCamPos.x, 0.0, position.z + uCamPos.z);
  float d = length(position.xz);
  float w0 = 1.0 - smoothstep(6000.0, 15000.0, d);
  float w1 = 1.0 - smoothstep(3000.0, 11000.0, d);
  float w2 = 1.0 - smoothstep( 300.0,  1600.0, d);
  vec3 disp = textureLod(uD0, p.xz/uL0, 0.0).xyz*w0
            + textureLod(uD1, p.xz/uL1, 0.0).xyz*w1
            + textureLod(uD2, p.xz/uL2, 0.0).xyz*w2;
  float bed   = bedAt(p.xz);
  float shoal = smoothstep(0.0, 9.0, -bed);
  disp.xz *= mix(0.12, 1.0, shoal);
  disp.y  *= mix(0.20, 1.0, shoal);
  p += disp;
  vW = p; vDisp = disp; vShoal = shoal; vDist = d;
  vec4 mv = viewMatrix*vec4(p, 1.0);
  vViewZ = -mv.z;
  gl_Position = projectionMatrix*mv;
}`,fragmentShader:`${m}${L}${g}
uniform float uNear;
uniform float uFar;
float linearZ(float d){
  float z = d*2.0 - 1.0;
  return (2.0*uNear*uFar)/(uFar + uNear - z*(uFar - uNear));
}

in vec3 vW; in vec3 vDisp; in float vDist; in float vShoal; in float vViewZ;
uniform mat4 viewMatrix, projectionMatrix;
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>
uniform sampler2D uPlanar;
uniform mat4 uPlanarMatrix;
uniform float uPlanarReady;
uniform sampler2D uNoise;
uniform float uNoiseCached;
uniform vec3 uCamPos, uSunColor, uAbsorb, uScatter, uSSSColor, uFoamColor;
uniform float uVisibility;
uniform vec3 uWeatherFogColor;
uniform sampler2D uV0,uV1,uV2,uF0,uF1,uF2,uSceneColor,uSceneDepth,uTerrain;
uniform float uL0,uL1,uL2,uTerrainSize,uTime,uFoamAmount,uShoreWidth,
              uSSSStrength,uRefract,uSSR,uUnderwater,uFogDensity,uGlitter;
uniform vec2 uResolution;
layout(location=0) out vec4 oC;

float bedAt(vec2 p){
  vec2 uv = p/uTerrainSize + 0.5;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return -400.0;
  return texture(uTerrain, uv).r;
}

void main(){
  vec3  toEye = uCamPos - vW;
  float dist  = length(toEye);
  vec3  V     = toEye/max(dist, 1e-4);

  /* ---- surface normal from the cascade slope fields ------------------ */
  float n1 = 1.0 - smoothstep(2500.0, 9000.0, dist);
  float n2 = 1.0 - smoothstep( 260.0, 1500.0, dist);
  vec4 dv = texture(uV0, vW.xz/uL0)
          + texture(uV1, vW.xz/uL1)*n1
          + texture(uV2, vW.xz/uL2)*n2;
  float sn = mix(0.22, 1.0, vShoal);
  vec3 N = normalize(vec3(-dv.x*sn/(1.0 + dv.z), 1.0, -dv.y*sn/(1.0 + dv.w)));
  float facing = dot(V, N);

  /* microfacet roughness rises as we lose cascades to distance --------- */
  float rough = clamp(0.008 + 0.115*(1.0 - n2) + 0.075*(1.0 - n1), 0.006, 0.32);

  /* ---- foam: whitecaps (Jacobian) + ambient breakup + shoreline ------ */
  float foam = texture(uF0, vW.xz/uL0).r*0.7
             + texture(uF1, vW.xz/uL1).r*n1
             + texture(uF2, vW.xz/uL2).r*n2*0.85;
  vec2 noisePos=vW.xz*0.85 + vec2(uTime*0.04, -uTime*0.03);
  float fn = uNoiseCached>0.5?texture(uNoise,noisePos/32.).r:fbm(noisePos,4);
  foam = sat(foam*uFoamAmount*(0.45 + 1.05*fn));
  float bed = -400.0;
  if (bed > -200.0){
    float wd = max(0.0, vW.y - bed);
    float shore = 1.0 - smoothstep(0.0, uShoreWidth, wd);
    shore *= 0.5 + 0.5*sin(wd*2.7 - uTime*1.7 + (uNoiseCached>0.5?texture(uNoise,vW.xz*.22/32.).g:fbm(vW.xz*.22,3))*7.0);
    foam = sat(foam + shore*1.25);
  }

  /* ---- refraction, absorption, in-scattering ------------------------- */
  vec3 inScat = uScatter*(uSunColor*0.30 + skyRadiance(vec3(0.,1.,0.))*0.75);
  vec3 behind=inScat;vec3 refracted=inScat;
  /* ---- subsurface scattering through wave crests --------------------- */
  vec3 rd = refract(-uSunDir, N, 1.0/1.333);
  float sss = pow(sat(dot(V, -rd)), 4.0);
  sss *= sat(vDisp.y*0.5 + 0.30);
  sss *= sat(1.0 - dot(N, uSunDir))*sat(uSunDir.y*4.0);
  vec3 sssCol = uSSSColor*uSunColor*sss*uSSSStrength;

  /* ---- reflection: sky + screen-space ray march ---------------------- */
  vec3 R = reflect(-V, N);
  if (R.y < 0.0) R = normalize(vec3(R.x, -R.y*0.5, R.z));
  vec3 refl = skyRough(R, rough);
  vec4 reflectionPos=uPlanarMatrix*vec4(vW.x,0.,vW.z,1.);
  vec2 reflectionUV=reflectionPos.xy/max(reflectionPos.w,.0001);
  reflectionUV+=N.xz*.012;
  float edge=min(min(reflectionUV.x,reflectionUV.y),min(1.-reflectionUV.x,1.-reflectionUV.y));
  float coverage=uPlanarReady*step(0.,reflectionPos.w)*smoothstep(0.,.03,edge);
  if(coverage>0.)refl=mix(refl,textureLod(uPlanar,reflectionUV,1.+rough*5.).rgb,coverage*.9);

  /* ---- sun specular (GGX, widened by solar disc) --------------------- */
  float a  = max(rough, 0.013) + 0.0047; a *= a;
  vec3  H  = normalize(uSunDir + V);
  float nh = sat(dot(N, H)), nv = max(dot(N, V), 1e-3), nl = sat(dot(N, uSunDir));
  float D  = a*a/(PI*pow(nh*nh*(a*a - 1.0) + 1.0, 2.0));
  float kk = a*0.5;
  float G  = (nv/(nv*(1.0-kk)+kk))*(nl/(nl*(1.0-kk)+kk));
  float Fs = 0.02 + 0.98*pow(1.0 - sat(dot(H, V)), 5.0);
  vec3  spec = min(uSunColor*(D*G*Fs)/(4.0*nv)*uGlitter, vec3(600.0));

  /* ---- composite ----------------------------------------------------- */
  float ct = sat(nv);
  float F  = 0.02 + 0.98*pow(1.0 - ct, 5.0);
  F *= (1.0 - foam*0.85);
  vec3 col = mix(refracted + sssCol, refl, F) + spec*(1.0 - foam*0.7);

  vec3 foamLit = uFoamColor*(uSunColor*(0.30 + 0.70*sat(dot(N, uSunDir)))
               + skyRadiance(vec3(0.0,1.0,0.0))*1.25);
  col = mix(col, foamLit, foam);

  /* ---- seen from below: Snell's window + total internal reflection --- */


  /* ---- horizon fog blends water into the sky ------------------------- */
  if (uUnderwater < 0.5){
    // Camera altitude must not turn the entire tactical view into haze.
    // Preserve nearby wave shading; only the distant sea blends into mist.
    float horizontalDistance = length(toEye.xz);
    float f = smoothstep(uVisibility*0.45, uVisibility, horizontalDistance);
    col = mix(col, uWeatherFogColor, f*0.92);
  }
  oC=sRGBTransferOETF(vec4(ACESFilmicToneMapping(max(col,vec3(0.))),1.));
}`}),B=new J(xe,Se);B.frustumCulled=!1,n.add(B),C.windSpeed=8,C.amplitude=.48,C.choppiness=1.05;for(let e=0;e<3;e++)R[`uD`+e].value=E[e].textures[0],R[`uV`+e].value=E[e].textures[1];let Ce=0,we=1/i,Te=!1,Ee=!1;return{mesh:B,update(n,r=!0){if(Te||(Ce+=n,we+=n,R.uCamPos.value.copy(t.position),R.uTime.value=Ce,Ee&&(!r||we<1/i)))return!1;let a=e.getRenderTarget(),o=e.autoClear,s=e.shadowMap.autoUpdate;e.autoClear=!0,e.shadowMap.autoUpdate=!1;try{if(!Ee){be.to(ve),fe.to(de);for(let t of D)for(let n of t)e.setRenderTarget(n),e.clearColor();Ee=!0}ce(Ce,Math.min(we,.1)),we=0;for(let e=0;e<3;e++)R[`uF`+e].value=D[e][O].texture}finally{e.setRenderTarget(a),e.autoClear=o,e.shadowMap.autoUpdate=s}return!0},dispose(){Te||(Te=!0,B.removeFromParent(),xe.dispose(),Se.dispose(),f.forEach(e=>e.dispose()),oe.dispose(),te.dispose(),_e.dispose(),v.dispose(),p.forEach(e=>e.dispose()))}}}function $t(e,t){let n=[],r=i=>{if(i.visible){if(i.userData.excludeReflection||i===t||i instanceof J&&(e.userData.detailedReflection!==!0&&i.layers.isEnabled(1)||(Array.isArray(i.material)?i.material:[i.material]).some(e=>e.transparent))){n.push(i),i.visible=!1;return}for(let e of i.children)r(e)}};for(let t of e.children)r(t);return()=>{for(let e of n)e.visible=!0}}var en=class e extends J{constructor(t,n={}){super(t),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let r=this,i=n.color===void 0?new X(8355711):new X(n.color),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,c=n.shader||e.ReflectorShader,l=n.multisample===void 0?4:n.multisample,u=new ue,d=new Y,f=new Y,p=new Y,m=new ze,h=new Y(0,0,-1),g=new Le,_=new Y,v=new Y,y=new Le,b=new ze,x=new Qe(a,o,{samples:l,type:ye}),S=new H({name:c.name===void 0?`unspecified`:c.name,uniforms:Xe.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});S.uniforms.tDiffuse.value=x.texture,S.uniforms.color.value=i,S.uniforms.textureMatrix.value=b,this.material=S,this.onBeforeRender=function(e,t,n){let i=this.getReflectionCamera(n);if(f.setFromMatrixPosition(r.matrixWorld),p.setFromMatrixPosition(n.matrixWorld),m.extractRotation(r.matrixWorld),d.set(0,0,1),d.applyMatrix4(m),_.subVectors(f,p),_.dot(d)>0&&this.forceUpdate===!1)return;_.reflect(d).negate(),_.add(f),m.extractRotation(n.matrixWorld),h.set(0,0,-1),h.applyMatrix4(m),h.add(p),v.subVectors(f,h),v.reflect(d).negate(),v.add(f),i.position.copy(_),i.up.set(0,1,0),i.up.applyMatrix4(m),i.up.reflect(d),i.lookAt(v),i.far=n.far,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(i.projectionMatrix),b.multiply(i.matrixWorldInverse),b.multiply(r.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(i.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let a=i.projectionMatrix;i.isOrthographicCamera?(y.x=(Math.sign(g.x)+a.elements[8])/a.elements[0],y.y=(Math.sign(g.y)+a.elements[9])/a.elements[5],y.z=-n.far,y.w=1):(y.x=(Math.sign(g.x)+a.elements[8])/a.elements[0],y.y=(Math.sign(g.y)+a.elements[9])/a.elements[5],y.z=-1,y.w=(1+a.elements[10])/a.elements[14]),g.multiplyScalar(2/g.dot(y)),a.elements[2]=g.x,a.elements[6]=g.y,i.isOrthographicCamera?(a.elements[10]=g.z-s,a.elements[14]=g.w-1):(a.elements[10]=g.z+1-s,a.elements[14]=g.w),r.visible=!1;let o=e.getRenderTarget(),c=e.xr.enabled,l=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(x),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,i),e.xr.enabled=c,e.shadowMap.autoUpdate=l,e.setRenderTarget(o);let S=n.viewport;S!==void 0&&e.state.viewport(S),r.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return x},this.dispose=function(){x.dispose(),r.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};en.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function tn(e,t,n,r){let i=new z(1,1),a=new en(i,{textureWidth:512,textureHeight:512,multisample:0,clipBias:.003});a.rotation.x=-Math.PI/2,a.updateMatrixWorld(!0),a.getRenderTarget().texture.generateMipmaps=!0,a.getRenderTarget().texture.minFilter=et;let o=r.material,s=a.material,c=new ze,l=new ze().copy(a.matrixWorld).invert();o.uniforms.uPlanar={value:a.getRenderTarget().texture},o.uniforms.uPlanarMatrix={value:c},o.uniforms.uPlanarReady={value:0};let u=1,d=!1;return{get due(){return e.userData.reflectionRate!==0&&u>=1/(e.userData.reflectionRate??12)},update(f,p=!0){let m=e.userData.reflectionRate??12;if(m===0)return o.uniforms.uPlanarReady.value=0,!1;let h=m>=30?1024:512;if(a.getRenderTarget().width!==h&&(a.getRenderTarget().setSize(h,h),o.uniforms.uPlanarReady.value=0,u=1),t.shadowMap.enabled&&e.children.some(e=>e instanceof de&&e.castShadow&&!e.shadow.map))return;if(u+=f,d||!p||u<1/m)return!1;u=0;let g=e.children.map(e=>e.visible?e.userData.shipLOD?.beginLowDetailPass():void 0),_=$t(e,r);try{e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),a.onBeforeRender(t,e,n,i,s,null),c.copy(s.uniforms.textureMatrix.value).multiply(l),o.uniforms.uPlanarReady.value=1}finally{_(),g.forEach(e=>e?.())}return!0},dispose(){d=!0,a.dispose(),i.dispose()}}}var nn=class e extends J{constructor(){let t=e.SkyShader,n=new H({name:t.name,uniforms:Xe.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new qe(1,1,1),n),this.isSky=!0}};nn.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new Y},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function rn(e,t){let n=t.material,r=t.parent,i=new he,a=new $e(512,{type:ye,generateMipmaps:!1,minFilter:q,magFilter:q}),o=new Ee(.1,6e3,a),s=e.getRenderTarget();try{i.add(t),o.update(e,i)}finally{r?.add(t),e.setRenderTarget(s)}let c=new H({depthWrite:!1,side:1,uniforms:{skyMap:{value:a.texture}},vertexShader:`varying vec3 direction;void main(){direction=position;vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.0);gl_Position=p.xyww;}`,fragmentShader:`uniform samplerCube skyMap;varying vec3 direction;void main(){gl_FragColor=textureCube(skyMap,normalize(direction));
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`});return{set(e){t.material=e?c:n},dispose(){t.material=n,c.dispose(),a.dispose()}}}var Q=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},an=e=>e*e*(3-2*e);function on(e,t){let n=Math.floor(e),r=Math.floor(t),i=an(e-n),a=an(t-r);return Re.lerp(Re.lerp(Q(n,r),Q(n+1,r),i),Re.lerp(Q(n,r+1),Q(n+1,r+1),i),a)}function sn(e,t){return on(e,t)*.55+on(e*2.13,t*2.13)*.27+on(e*4.37,t*4.37)*.12+on(e*9.1,t*9.1)*.06}function cn(e,t,n){let r=new nn;r.scale.setScalar(4500),r.material.depthWrite=!1,r.renderOrder=1e3;let i=r.material.uniforms;i.turbidity.value=3.2,i.rayleigh.value=1.5,i.mieCoefficient.value=.004,i.mieDirectionalG.value=.82;let a=new Y(-.45,.42,-.72).normalize();i.sunPosition.value.copy(a),i.cloudCoverage&&(i.cloudCoverage.value=.38,i.cloudDensity.value=.45),e.add(r);let o=new he;o.add(r);let s=new nt(t),c=s.fromScene(o,.06,.1,6e3);e.add(r),e.environment=c.texture,e.environmentIntensity=.65,s.dispose();let l=Qt(t,n,e),u=rn(t,r),d=tn(e,t,n,l.mesh),f=new de(`#fff0d9`,2.7);return f.position.copy(a).multiplyScalar(250),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-90,right:90,top:90,bottom:-90,near:1,far:600}),f.shadow.bias=-2e-4,f.shadow.normalBias=.06,e.add(f),e.add(f.target),e.add(new we(`#d5e2e8`,`#303b3c`,.45)),{sky:r,cachedSky:u,light:f,sun:a,mesh:l.mesh,update:t=>{let n=e.userData.staggerSea!==!1,r=l.update(t,!n||!d.due);return d.update(t,!n||!r)},dispose:()=>{u.dispose(),d.dispose(),l.dispose(),c.dispose(),f.shadow.dispose()}}}function ln(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`),r=n.createImageData(256,256);for(let e=0;e<256;e++)for(let t=0;t<256;t++){let n=sn(t*.12,e*.12),i=Q(t,e),a=Math.abs(Math.sin(t*.035+e*.065+n*7))**12,o=115+n*75+i*25-a*35,s=(e*256+t)*4;r.data[s]=o,r.data[s+1]=o*.98,r.data[s+2]=o*.91,r.data[s+3]=255}n.putImageData(r,0,0);let i=new Ye(t);i.wrapS=i.wrapT=Z,i.colorSpace=ke,i.anisotropy=4,e.userData.terrainTextures=[i];let a=new U({vertexColors:!0,map:i,bumpMap:i,bumpScale:.38,roughness:.96,metalness:0}),o=new G({color:`#c1d8d2`,transparent:!0,opacity:.18,depthWrite:!1,side:2});for(let[t,n]of u.entries()){let{x:r,z:i,r:s}=n,c=[],l=[],u=[],f=[],p=(e,n,r)=>d(e,n,s,t,r);for(let e=0;e<=28;e++)for(let n=0;n<=80;n++){let r=n/80*Math.PI*2,i=e/28,a=1+Math.sin(r*3+t)*.055+Math.sin(r*7-t)*.025,o=Math.cos(r)*i*s*a,d=Math.sin(r)*i*s*a,m=p(o,d,i);c.push(o,m,d),f.push(o*.12,d*.12);let h=sn(o*.7+t*12,d*.7),g=new X;if(m<1.3?g.set(`#a39e88`).multiplyScalar(.8+h*.3):h>.51&&m>4?g.set(`#555d4a`).multiplyScalar(.65+h*.6):g.set(`#777b74`).multiplyScalar(.64+h*.58),l.push(g.r,g.g,g.b),e<28&&n<80){let t=e*81+n,r=t+80+1;u.push(t,t+1,r,r,t+1,r+1)}}let m=new W;m.setAttribute(`position`,new M(c,3)),m.setAttribute(`color`,new M(l,3)),m.setAttribute(`uv`,new M(f,2)),m.setIndex(u),m.computeVertexNormals();let h=new J(m,a);h.position.set(r,0,i),h.castShadow=!0,h.receiveShadow=!0,h.userData.terrainBase=new Float32Array(c),e.add(h);let g=new N(s*.99,s*1.08,80),_=g.attributes.position;for(let e=0;e<_.count;e++){let n=Math.atan2(_.getY(e),_.getX(e)),r=1+Math.sin(n*3+t)*.055+Math.sin(n*7-t)*.025;_.setXY(e,_.getX(e)*r,_.getY(e)*r)}let v=new J(g,o);v.rotation.x=-Math.PI/2,v.position.set(r,.13,i),e.add(v);let y=new V(new ct(1,1),new U({color:`#354437`,roughness:1}),45),b=new F;for(let e=0;e<45;e++){let n=Q(e,t)*Math.PI*2,r=.25+Q(e+9,t)*.48,i=Math.cos(n)*s*r,a=Math.sin(n)*s*r;b.position.set(i,p(i,a,r)+.3,a),b.scale.set(1+Q(e,3)*1.2,.5+Q(e,8),1+Q(e,12)),b.rotation.y=n,b.updateMatrix(),y.setMatrixAt(e,b.matrix)}y.position.set(r,0,i),y.userData.terrainShrub=!0,y.userData.baseMatrices=y.instanceMatrix.array.slice(),y.castShadow=!0,y.receiveShadow=!0,e.add(y)}}function un(e,t){return new J(new z(e*2.4,t*2.5),new H({uniforms:{time:{value:0},strength:{value:0}},transparent:!0,side:2,depthWrite:!1,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;uniform float time;uniform float strength;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
 void main(){float y=1.-vUv.y,x=abs(vUv.x-.5)*2.;float n=noise(vec2(vUv.x*25.,vUv.y*60.+time*5.));float trail=exp(-x*x/(.012+y*.16));float arms=exp(-pow((x-y*.7)*20.,2.));float fade=smoothstep(0.,.12,y)*(1.-y);float alpha=(trail*.65+arms*.45)*fade*(.2+n*.8)*strength;gl_FragColor=vec4(.81,.88,.85,alpha);}`}))}function dn(){let e=document.createElement(`canvas`);e.width=2048,e.height=256;let t=e.getContext(`2d`);t.strokeStyle=`#ffffff`,t.lineJoin=`miter`,t.lineCap=`square`,t.shadowColor=`#ffffff`,t.shadowBlur=14,[[[0,155],[180,155],[260,80],[440,80],[530,190],[710,190],[850,52],[1020,52],[1130,142],[1270,142],[1390,210],[1560,210],[1660,105],[1890,105],[2048,30]],[[0,215],[210,215],[340,130],[440,130],[520,225],[760,225],[880,90],[1010,90],[1100,185],[1320,185],[1430,235],[1580,235],[1730,145],[1900,145],[2048,82]],[[80,35],[240,35],[325,80],[520,80],[630,135],[740,135]],[[1060,22],[1200,22],[1320,90],[1500,90],[1580,45],[1750,45]]].forEach((e,n)=>{t.lineWidth=n===0?32:n===1?11:13,t.beginPath(),e.forEach(([e,n],r)=>r?t.lineTo(e,n):t.moveTo(e,n)),t.stroke()});for(let[e,n]of[[360,80],[850,52],[1270,142],[1660,105]])t.lineWidth=3,t.beginPath(),t.arc(e,n,19,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(e,n,9,0,Math.PI*2),t.stroke();t.save(),t.translate(1860,183),t.rotate(Math.PI/4),t.lineWidth=5,t.strokeRect(-35,-35,70,70),t.lineWidth=2,t.strokeRect(-23,-23,46,46),t.fillStyle=`white`,t.fillRect(-8,-8,16,16),t.restore();let n=new Ye(e);return n.colorSpace=ke,n.anisotropy=4,n}function fn(e,t,n,r){let i=new L,a=e.getPoints(100),o=[];for(let e of a){if(e.x<-.001)break;o.push(e)}let s=new G({color:new X(n).multiplyScalar(1.65),map:r,transparent:!0,depthWrite:!1,side:2,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1});for(let e of[-1,1]){let n=[],r=[],a=[];o.forEach((i,s)=>{for(let a of[.32,2.92])n.push(e*(i.x+.16),a,i.y),r.push((i.y+t*.5)/(t*1.02),(a-.32)/2.6);if(s<o.length-1){let e=s*2;a.push(e,e+1,e+2,e+1,e+3,e+2)}});let c=new W;c.setAttribute(`position`,new M(n,3)),c.setAttribute(`uv`,new M(r,2)),c.setIndex(a),c.computeVertexNormals(),i.add(new J(c,s))}return i.userData.glowMaterial=s,i}function pn(e,t,n,r){let i=+!!t;e.amount=Re.damp(e.amount,i,t?3:4,n),Math.abs(e.amount-i)<.001&&(e.amount=i),e.upper.position.y=e.amount*5.5,e.core.visible=e.amount>.01,e.fins.forEach((t,n)=>{t.position.x=(n===0?-1:1)*e.amount*2.1,t.rotation.z=(n===0?1:-1)*e.amount*.28}),e.rings.forEach((e,t)=>e.rotation.z=r*(t%2?-.7:.7)),e.braces.forEach(t=>{t.scale.y=e.amount,t.position.y=.5+e.amount*2.5}),e.glow.opacity=.78+e.amount*.22}var mn=new Y;function $(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;mn.copy(t),mn[r]=0,mn.normalize();let l=.5*o/(o+s),u=1-mn.angleTo(e)/c;return Math.sign(mn[n])===1?u*l:s/(o+s)+l+l*(1-u)}var hn=class e extends qe{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new Y,c=new Y,l=new Y(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new Y,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=$(m,c,`z`,`y`,i,n),f[a+1]=1-$(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-$(m,c,`z`,`y`,i,n),f[a+1]=1-$(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-$(m,c,`x`,`z`,i,e),f[a+1]=$(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-$(m,c,`x`,`z`,i,e),f[a+1]=1-$(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-$(m,c,`x`,`y`,i,e),f[a+1]=1-$(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=$(m,c,`x`,`y`,i,e),f[a+1]=1-$(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function gn(e,t,n,r=1){let i=e.getPoints(96),a=[],o=[],s=[],c=i.length;for(let e=0;e<=18;e++){let l=e/18,u=t<1?.32+.68*Math.sin(l*Math.PI/2):.86+.14*Math.sin(l*Math.PI/2);i.forEach((i,d)=>{let f=t>1?.25*Math.max(0,i.y/22)**4*l:0;if(a.push(i.x*r*u,n+(t-n)*l+f,i.y*r),o.push(d/(c-1)*6,l),e<18&&d<c-1){let t=e*c+d,n=t+c;s.push(t,n,t+1,n,n+1,t+1)}})}let l=new W;l.setAttribute(`position`,new M(a,3)),l.setAttribute(`uv`,new M(o,2)),l.setIndex(s),l.computeVertexNormals();let u=l.getAttribute(`normal`),d=l.getAttribute(`position`),f=0;for(let e=0;e<u.count;e++)f+=u.getX(e)*d.getX(e);if(f<0){for(let e=0;e<s.length;e+=3)[s[e+1],s[e+2]]=[s[e+2],s[e+1]];l.setIndex(s),l.computeVertexNormals()}return l}function _n(){let e=123,t=()=>(e=e*1664525+1013904223>>>0,e/4294967296),n=()=>{let e=document.createElement(`canvas`);return e.width=2048,e.height=1024,e},r=n(),i=n(),a=n(),o=n(),s=r.getContext(`2d`),c=i.getContext(`2d`),l=a.getContext(`2d`),u=o.getContext(`2d`);s.fillStyle=`#b4b8bb`,s.fillRect(0,0,2048,1024),c.fillStyle=`#808080`,c.fillRect(0,0,2048,1024),l.fillStyle=`#b0b0b0`,l.fillRect(0,0,2048,1024);for(let e=0;e<8;e++)for(let n=-1;n<8;n++){let r=n*288+e%2*144,i=e*128,a=177+Math.floor(t()*5);s.fillStyle=`rgb(${a},${a+3},${a+5})`,s.fillRect(r+2,i+2,284,124),c.strokeStyle=`#686868`,c.lineWidth=2,c.strokeRect(r,i,288,128),l.fillStyle=`rgb(${160+e*5},${160+e*5},${160+e*5})`,l.fillRect(r,i,288,128);for(let e=r+12;e<r+288;e+=24)for(let t of[i+7,i+121])c.fillStyle=`#b0b0b0`,c.beginPath(),c.arc(e,t,2,0,Math.PI*2),c.fill(),s.fillStyle=`#858d92`,s.fillRect(e,t,2,2);for(let e=0;e<4;e++){let e=r+t()*288,n=i+t()*100,a=s.createLinearGradient(e,n,e,n+32);a.addColorStop(0,`#76604b32`),a.addColorStop(1,`#76604b00`),s.fillStyle=a,s.fillRect(e,n,2+t()*3,32)}}for(let e=0;e<45e3;e++){let e=t()*2048,n=t()*1024;s.fillStyle=t()>.5?`#ffffff0a`:`#0000000a`,s.fillRect(e,n,t()*4+1,1)}u.fillStyle=`#766951`,u.fillRect(0,0,2048,1024);for(let e=0;e<96;e++){let n=e*22,r=90+Math.floor(t()*40);u.fillStyle=`rgb(${r+26},${r+16},${r})`,u.fillRect(n+1,0,20,1024);for(let e=0;e<8;e++)u.fillStyle=`#241d1830`,u.fillRect(n+t()*20,0,.6,1024);for(let t=e%3*85;t<1024;t+=256)u.fillStyle=`#302b25`,u.fillRect(n,t,22,1)}let d=(e,t=!1)=>{let n=new Ye(e);return n.wrapS=n.wrapT=Z,n.anisotropy=8,t&&(n.colorSpace=ke),n};return{paint:d(r,!0),bump:d(i),rough:d(a),wood:d(o,!0)}}function vn(e){let t=new Ae;t.moveTo(-e*.78,-e*.9),t.lineTo(e*.78,-e*.9),t.lineTo(e,-e*.25),t.lineTo(e*.82,e*.65),t.lineTo(e*.55,e),t.lineTo(-e*.55,e),t.lineTo(-e*.82,e*.65),t.lineTo(-e,-e*.25),t.closePath();let n=new R(t,{depth:1.05,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.12,bevelThickness:.1});n.rotateX(Math.PI/2),n.translate(0,.85,0);let r=n.getAttribute(`position`);for(let e=0;e<r.count;e++){let t=r.getY(e),n=1-.14*Math.max(0,t);r.setX(e,r.getX(e)*n)}return n.computeVertexNormals(),n}function yn(e){let t=new Map;for(let n of[...e.children])if(n instanceof J&&!Array.isArray(n.material)){let e=t.get(n.material)||[];e.push(n),t.set(n.material,e)}for(let[n,r]of t){if(r.length<2)continue;let t=r.map(e=>(e.updateMatrix(),(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrix))),i=lt(t);if(t.forEach(e=>e.dispose()),!i)continue;let a=new J(i,n);a.castShadow=!0,a.receiveShadow=!0,e.add(a),r.forEach(t=>{e.remove(t),t.geometry.dispose()})}}function bn(e,t){let n=new L,r=new L,i=[];r.name=`upper-armored-hull`,n.add(r);let a=t?{mio:`#368bff`,rin:`#ff8a35`,haru:`#a438ff`}[e]:`#fa5435`,o=e===`haru`,s=o?42:e===`mio`?37:29,c=o?8.4:e===`mio`?7:5,l=_n(),u=l.paint,d=dn(),f=new U({color:o?`#65707a`:e===`mio`?`#536577`:`#5b6965`,map:u,bumpMap:l.bump,bumpScale:.028,roughnessMap:l.rough,metalness:.48,roughness:.8}),p=new U({color:`#899398`,map:u,bumpMap:l.bump,bumpScale:.018,metalness:.65,roughness:.43}),m=new U({color:`#1e2630`,metalness:.6,roughness:.5}),h=new U({color:`#b2a58c`,map:l.wood,metalness:0,roughness:.88}),g=new U({color:`#222631`,metalness:.45,roughness:.7}),_=new U({color:`#192d40`,metalness:.8,roughness:.15}),v=new U({color:`#b89b63`,metalness:.7,roughness:.35}),y=new G({color:new X(a).multiplyScalar(2),toneMapped:!1}),b=(e,t,n,i,a,o=r)=>{let s=new J(e,t);return s.position.set(n,i,a),s.castShadow=!0,s.receiveShadow=!0,o.add(s),s},x=(e,t,n,i,a,o,s=f,c=r)=>b(Math.min(i,a,o)>.12?new hn(i,a,o,2,Math.min(.07,Math.min(i,a,o)*.15)):new qe(i,a,o),s,e,t,n,c),S=(e,t,n,i,a,o=f,s=r)=>b(new P(i,i,a,32),o,e,t,n,s),C=new Ae;C.moveTo(0,s*.53),C.bezierCurveTo(c*.12,s*.49,c*.48,s*.28,c*.5,s*.1),C.lineTo(c*.46,-s*.37),C.quadraticCurveTo(c*.4,-s*.48,c*.25,-s*.5),C.lineTo(-c*.25,-s*.5),C.quadraticCurveTo(-c*.4,-s*.48,-c*.46,-s*.37),C.lineTo(-c*.5,s*.1),C.bezierCurveTo(-c*.48,s*.28,-c*.12,s*.49,0,s*.53),b(gn(C,.2,-1.8,.94),g,0,0,0,n),b(gn(C,3.08,.2),f,0,0,0);let ee=new R(C,{depth:.12,curveSegments:96,bevelEnabled:!0,bevelThickness:.035,bevelSize:.035,bevelSegments:3}),te=b(ee,h,0,3.1,0);te.rotation.x=Math.PI/2,te.scale.set(.985,.985,1);let w=ee.getAttribute(`uv`);for(let e=0;e<w.count;e++)w.setXY(e,w.getX(e)/c,w.getY(e)/s);let ne=fn(C,s,a,d);r.add(ne),x(0,3.7,-.9,c*.62,1.2,s*.42,f),x(0,4.31,-.9,c*.62,.08,s*.42,h);let T=s*.035,E=o?7:e===`mio`?6:4;x(0,5.1,T,c*.42,2.2,4.7);for(let e=0;e<E;e++){let t=6+e*.95,n=c*(.48-e*.025)*(e%2==0?1.1:.92),r=3.5-e*.2;x(0,t,T,n*.77,.78,r*.83),x(0,t+.48,T,n,.14,r,p),x(0,t+.13,T+r*.41,n*.65,.23,.08,_);for(let e of[-1,1])x(e*n*.46,t+.13,T,.06,.2,r*.6,_),x(e*n*.37,t+.7,T+r*.43,.04,.4,.04,p);if(e===E-2){x(0,t+.3,T,n*1.6,.28,.5,p);for(let e of[-1,1])S(e*n*.8,t+.35,T,.3,.5,m)}}let D=6+E*.95;S(0,D+1,T,.085,2.4,p),x(0,D+1.8,T,4.6,.08,.12,p),x(0,D+2.1,T,.04,1,.04,p);for(let e of[-1,1]){let t=b(new z(1.9,.65,6,2),new U({color:`#999789`,metalness:.7,roughness:.4,wireframe:!0,side:2}),e*1.55,D+1.6,T);t.rotation.y=e*.15;let n=b(new _e(.23,10,8),y,e*.6,D+.3,T+.8);n.scale.y=.4}for(let e of[-s*.1,-s*.21]){let t=b(new P(.75,1.05,3.7,12),f,0,6,e);t.scale.z=1.4,S(0,7.9,e,.78,.35,m).scale.z=1.4;for(let t=0;t<4;t++)x(1,5.5+t*.35,e,.07,.13,1.3,m)}let O=-s*.28;S(0,8.1,O,.08,8.5,p),x(0,10.8,O,4,.09,.1,p),x(0,9.2,O,2.6,.08,.1,p);let re=[new Y(0,D+1.7,T),new Y(0,11,O),new Y(0,11,O),new Y(0,3.5,-s*.46),new Y(0,D+1.7,T),new Y(0,3.5,s*.47)];r.add(new rt(new W().setFromPoints(re),new B({color:`#839098`,transparent:!0,opacity:.6})));let ie=o?[{z:.34,y:3.8},{z:.21,y:4.6},{z:-.33,y:4.2},{z:-.44,y:3.65}]:e===`mio`?[{z:.34,y:3.8},{z:.21,y:4.5},{z:-.35,y:3.8}]:[{z:.32,y:3.6},{z:-.35,y:3.6}];for(let e of ie){let t=s*e.z,n=c*(o?.235:.23);S(0,e.y-.35,t,n,.7,m);let a=new L;a.position.set(0,e.y,t),a.userData.restAngle=t<0?Math.PI:0,r.add(a),b(vn(n),f,0,.2,0,a),S(0,.1,0,n*1.02,.12,p,a);let l=o?3:2,u=o?5.2:4.1;for(let e=0;e<l;e++){let t=(e-(l-1)/2)*.66,n=b(new P(.14,.23,u,32),p,t,.5,u*.5+.55,a);n.rotation.x=Math.PI/2;let r=b(new P(.29,.32,1.5,12),m,t,.5,.9,a);r.rotation.x=Math.PI/2;let i=b(new P(.16,.16,.18,12),v,t,.5,u+.5,a);i.rotation.x=Math.PI/2;let o=b(new Pe(.12,10),m,t,.5,u+.6,a);o.rotation.y=0}x(0,.6,n*.98,n*1.3,.055,.055,y,a),x(0,1.1,-.2,.55,.2,.55,m,a),i.push(a);for(let e of[-1,1]){x(e*n*.72,1.03,-.55,.36,.1,.55,p,a);let t=S(e*n*.45,1.3,-.2,.075,.45,p,a);t.name=`turret-sighting-optic`;for(let t=0;t<4;t++)x(e*(n*.85+.03),.35+t*.14,-.3,.04,.045,.65,m,a);for(let t=0;t<8;t++){let r=b(new _e(.037,8,6),p,e*n*.66,1.05,-.6+t*.15,a);r.scale.y=.4}}}for(let e of[-1,1]){for(let t of[-s*.22,-s*.12,0,s*.12]){let n=e*c*.37;S(n,3.4,t,.55,.7),x(n,3.85,t,.75,.45,.9);let r=b(new P(.09,.13,1.6,8),p,n+e*.65,3.85,t);r.rotation.z=Math.PI/2}let t=b(new Ve(.35,1.6,4,8),new U({color:`#a29476`,roughness:.9}),e*c*.32,4.15,-s*.07);t.rotation.x=Math.PI/2;for(let t of[s*.43,-s*.46])for(let n=0;n<2;n++)S(e*(c*.2+n*.2),3.32,t,.12,.35,m);x(e*c*.2,3.28,s*.42,.16,.1,1.5,v)}let k=[],ae=C.getPoints(75),A=new B({color:`#8e999e`}),oe=(e,t=.025,n=p,i=r)=>b(new Ue(new Be(e),24,t,6,!1),n,0,0,0,i);for(let e of[-1,1]){for(let t=0;t<24;t++){let n=-s*.32+t*s*.018,r=e*(c*(n>0?.5:.46)+.035),i=b(new K(.095,.018,6,16),p,r,2.76,n);i.rotation.y=Math.PI/2;let a=b(new Pe(.077,16),_,r+e*.005,2.76,n);a.rotation.y=e*Math.PI/2}for(let t of[-s*.18,-s*.03,s*.12]){let n=e*c*.29;x(n,4.25,t,.52,.13,.85,p),x(n,4.46,t,.38,.32,.64,m);for(let e=0;e<6;e++)x(n,4.32+e*.046,t,.43,.022,.67,p)}for(let t of[-4,1]){let n=e*c*.315;x(n,3.85,t,.07,.88,.5,p),x(n+e*.045,3.85,t,.035,.71,.37,f);let r=b(new K(.075,.014,6,16),v,n+e*.07,3.87,t);r.rotation.y=Math.PI/2;for(let r of[3.59,4.08])x(n+e*.06,r,t-.22,.045,.12,.08,m)}let t=e*c*.225,n=T-1.8;for(let e of[n-.21,n+.21])S(t,6.1,e,.026,4.4,p);for(let e=0;e<17;e++)x(t,4+e*.25,n,.045,.03,.44,p);for(let t of[-s*.39,-s*.29]){let n=e*c*.28,r=S(n,3.5,t,.28,.56,m);r.rotation.z=Math.PI/2;for(let e of[-.3,.3]){let r=S(n+e,3.5,t,.36,.055,p);r.rotation.z=Math.PI/2}for(let e=0;e<7;e++){let r=b(new K(.285,.016,5,16),v,n-.25+e*.08,3.5,t);r.rotation.y=Math.PI/2}}let i=e*c*.32,a=-s*.06;for(let t of[a-.8,a+.8])oe([new Y(i-e*.45,3.2,t),new Y(i-e*.45,5.1,t),new Y(i,5.35,t),new Y(i+e*.2,4.6,t)],.045);for(let e=0;e<4;e++)x(i,4.52,a-.65+e*.43,.58,.06,.13,h);for(let t of[-s*.25,s*.14]){let n=e*c*.3;S(n,4.02,t,.65,.25,f),S(n,4.25,t,.19,.45,m),x(n,4.5,t,.6,.55,.25,p);for(let e of[-.14,.14]){let r=S(n+e,4.78,t+.38,.042,1.05,m);r.rotation.x=Math.PI/2-.32}}let o=s*.395,l=e*c*.21,u=b(new K(.28,.06,8,20,Math.PI),m,l,2.5,o);u.rotation.y=e*Math.PI/2,x(l,2.72,o,.08,.62,.08,m);for(let t=0;t<22;t++){let n=b(new K(.062,.018,5,10),m,e*c*.14,3.22,s*.34+t*.095);n.rotation.x=t%2?Math.PI/2:0}for(let t=0;t<E;t++){let n=6+t*.95,i=c*(.48-t*.025)*(t%2==0?1.1:.92),a=3.5-t*.2,o=[new Y(e*i*.48,n+.94,T-a*.46),new Y(e*i*.48,n+.94,T+a*.46)];r.add(new rt(new W().setFromPoints(o),A));for(let t=0;t<5;t++)x(e*i*.48,n+.73,T-a*.46+t*a*.23,.025,.42,.025,p);for(let e=0;e<5;e++)x(-i*.29+e*i*.145,n+.13,T+a*.42,.035,.25,.07,p)}}for(let e of[-s*.1,-s*.21]){for(let t of[4.6,5.6,6.6,7.55]){let n=b(new K(.9,.045,8,40),p,0,t,e);n.rotation.x=Math.PI/2,n.scale.y=1.4}for(let t=-4;t<=4;t++)x(t*.15,8.1,e,.055,.055,1.8,m)}for(let e=1;e<ae.length;e++){let t=ae[e-1],n=ae[e];for(let e of[3.42,3.7])k.push(t.x*.95,e,t.y*.98,n.x*.95,e,n.y*.98);e%3==0&&k.push(t.x*.95,3.13,t.y*.98,t.x*.95,3.75,t.y*.98)}r.add(new rt(new W().setAttribute(`position`,new M(k,3)),new B({color:`#9ea5a7`,transparent:!0,opacity:.7}))),i.forEach(yn),yn(r),yn(n);let j=new L;j.name=`gravity-reactor`,j.visible=!1,n.add(j);let se=b(new P(1.15,1.15,s*.55,24),m,0,1.1,-1,j);se.rotation.x=Math.PI/2;let ce=[],le=[],N=[];for(let e of[-s*.22,-s*.08,s*.08,s*.22]){let t=b(new K(1.75,.16,8,32),v,0,1.1,e,j);ce.push(t),b(new K(1.4,.065,8,32),y,0,1.1,e+.2,j);for(let t of[-1,1])le.push(x(t*c*.24,2,e,.3,5,.4,p,j))}for(let e of[-1,1]){let t=new L;t.name=e<0?`port-lower-panel`:`starboard-lower-panel`,n.add(t),x(e*c*.24,.12,-1,c*.43,.32,s*.63,g,t),x(e*c*.35,.32,-1,.12,.12,s*.6,y,t),yn(t),N.push(t)}let F=x(0,1.1,0,.26,.26,s*.75,y,j);F.name=`axial-conduit`,n.userData.deployment={upper:r,core:j,fins:N,rings:ce,braces:le,amount:0,glow:ne.userData.glowMaterial};let I=new J(new _e(17,32,16,0,Math.PI),new G({color:a,wireframe:!0,transparent:!0,opacity:.17}));I.scale.y=.65,I.visible=!1,n.add(I);let ue=un(c,s);return ue.rotation.x=-Math.PI/2,ue.position.set(0,.18,-s*1.35),n.add(ue),n.userData.textures=[...Object.values(l),d],{g:n,ts:i,shield:I,wake:ue}}var xn=e=>new U({color:e,metalness:.3,roughness:.5}),Sn=class{host;sim;backend;fleetInstances=new yt;viewportWidth=1;viewportHeight=1;screenPoint=new Y;shipMaterials=new At;shipGeometries=new kt;defenseVisuals=new Dt;wreckVisuals=new Ft;energyVisuals;energyWater;terrainStamp=``;graphics=se();showcase=!1;applyGraphics(e){this.backend?.applyGraphics(e),this.graphics={...e},this.resolution.reset(),this.resolution.scale=e.resolution||1,this.oceanComposite.scale=e.water,this.scene.userData.reflectionRate=e.reflection,this.renderer.shadowMap.enabled=e.shadows,this.renderer.shadowMap.needsUpdate=!0,this.renderer.toneMappingExposure=e.exposure,this.resize()}oceanComposite;edgeAA=new Zt;resolution=new k;shadowElapsed=1;recordFrame(e){this.graphics.resolution===0&&this.resolution.sample(e)&&this.resize()}cameraRig=new A;recenter(){this.cameraRig.recenter(this.sim.player.x,this.sim.player.z)}pointerLeave(){this.cameraRig.leave()}fireVisuals=new bt;deploymentVisuals=new Ct;tacticalVisuals=new Et;passiveVisuals=new Tt;shipAsset;shipAssets={};disposed=!1;modelsLoaded=!1;impacts;escortVisuals;captureMarkers=[];vfxShips;firing=new Map;gunLight=new Ke(`#ffbc69`,0,65,2);gunLightLife=0;fireShip(e,t){let n=this.firing.get(e)??new Set;t.forEach(e=>n.add(e)),this.firing.set(e,n)}renderer;scene=new he;camera=new fe(46,1,.5,6500);wakeTrails=[];groups=[];turrets=[];shields=[];wakes=[];dynamic=new L;projectiles=new Mt;effectPool=[];pickups;zoom=175;target=new Y;ray=new Te;mouse=new Je(0,0);plane=new ue(new Y(0,1,0),0);sea;aim=new L;weaponRanges=new Ht;shellTrails=new Vt;time=0;reduced=!1;shake=0;previewDeployment=!1;constructor(e,t,n){if(this.host=e,this.sim=t,this.backend=n?.(e),this.backend)this.renderer=this.backend.renderer;else{this.renderer=new He({antialias:!1,alpha:!1,powerPreference:`high-performance`});let e=this.renderer.getContext(),t=e.getExtension(`WEBGL_debug_renderer_info`),n=String(e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER));this.host.dataset.gpuName=n.replace(/^ANGLE\s*\([^,]+,\s*/,``).replace(/\s+\(0x.*$/,``).replace(/ Direct3D.*$/,``),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.outputColorSpace=ke,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=.85,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.shadowMap.autoUpdate=!1,this.scene.add(this.fleetInstances.group);let r=this.renderer.render.bind(this.renderer);this.renderer.render=(e,t)=>{let n=e===this.scene&&t===this.camera&&t.layers.mask!==4;n&&this.fleetInstances.begin(this.groups,t);try{r(e,t)}finally{n&&this.fleetInstances.end()}};let i=this.renderer.shadowMap,a=i.render.bind(i);i.render=(...e)=>{if(!i.enabled||!i.autoUpdate&&!i.needsUpdate){a(...e);return}let t=this.fleetInstances.suspend(),n=this.groups.map(e=>e.visible?e.userData.shipLOD?.beginLowDetailPass():void 0);try{a(...e)}finally{n.forEach(e=>e?.()),t()}}}e.appendChild(this.renderer.domElement),this.scene.fog=new be(`#a3b5bc`,1200,2e3),this.sea=this.backend?this.backend.createSea(this.scene):cn(this.scene,this.renderer,this.camera),ln(this.scene),this.energyWater=new Pt(this.sea.mesh.material),this.energyVisuals=new Bt(this.backend?.createEnergyBeams?.()),this.oceanComposite=this.backend?{scale:1,render:(e,t)=>this.backend.render(e,t,()=>{let e=this.groups.map(e=>e.visible?e.userData.shipLOD?.beginSubmissionPass():void 0).filter(Boolean);return e.length?()=>e.forEach(e=>e()):void 0}),dispose:()=>{}}:new Yt(this.renderer,this.sea.mesh),this.scene.matrixWorldAutoUpdate=!1;for(let e of p){let t=new J(new N(178,180,120),new G({color:`#a1ecd4`,transparent:!0,opacity:.5,side:2}));t.rotation.x=-Math.PI/2,t.position.set(e.x,1,e.z),this.scene.add(t);let n=new J(new ot(3.5),xn(`#b8ffe2`));n.position.set(e.x,7,e.z),this.scene.add(n),this.captureMarkers.push(t,n)}let r=new J(new N(s*1.39,s*1.39+1,4),new G({color:`#d6ae70`,side:2,transparent:!0,opacity:.5}));r.rotation.set(-Math.PI/2,0,Math.PI/4),r.position.y=.6,this.scene.add(r),this.pickups=new V(new ot(1.8),new G({color:`#b4f8d1`}),80),this.scene.add(this.pickups),this.scene.add(this.fireVisuals.group),this.scene.add(this.deploymentVisuals.group),this.scene.add(this.tacticalVisuals.group),this.scene.add(this.passiveVisuals.group),this.scene.add(this.defenseVisuals.mesh),this.scene.add(this.wreckVisuals.group),this.scene.add(this.energyVisuals.group),this.scene.add(this.dynamic),this.dynamic.add(this.projectiles.mesh,this.projectiles.wakes.mesh);for(let e=0;e<100;e++){let e=new J(new N(.65,1,20),new G({color:`#a9ffed`,transparent:!0,side:2}));e.rotation.x=-Math.PI/2,e.visible=!1,this.effectPool.push(e),this.dynamic.add(e)}let i=new J(new N(4.4,4.7,48),new G({color:`#c9ffe8`,side:2}));i.rotation.x=-Math.PI/2,this.aim.add(i);for(let e=0;e<4;e++){let t=new J(new qe(.3,.1,2.5),new G({color:`#c9ffe8`}));t.position.set(Math.sin(e*Math.PI/2)*6,0,Math.cos(e*Math.PI/2)*6),t.rotation.y=e*Math.PI/2,this.aim.add(t)}this.scene.add(this.aim),this.scene.add(this.weaponRanges.group),this.scene.add(this.shellTrails.mesh),this.impacts=this.backend?this.backend.createImpacts(this.scene):new mt(this.scene),this.scene.add(this.gunLight),this.rebuild(),this.applyGraphics(this.graphics);let a=this.sim.player;this.camera.position.set(a.x+42,28,a.z+53),this.target.set(a.x-15,1,a.z),this.camera.lookAt(this.target),Promise.all([`rin`,`mio`,`haru`,`nagato`,`yamato`].map(async e=>{try{let t=await dt(e===`nagato`||e===`yamato`?`haru`:e,e===`nagato`||e===`yamato`?e:`kongo`);if(this.disposed){ft(t);return}this.shipAssets[e]=t,e===`mio`&&(this.shipAsset=t)}catch(t){console.error(`${e} 艦艇模型載入失敗，不顯示備用模型`,t)}})).then(()=>{this.disposed||(this.rebuild(),this.modelsLoaded=!0,this.host.dataset.shipModel=Object.keys(this.shipAssets).join(`,`))})}makeShip(e,t,n){let r=bn(e,t),i=this.shipAssets[n&&n!==`kongo`?n:e];for(let e of[...r.g.children])e!==r.shield&&e!==r.wake&&(r.g.remove(e),e.traverse(e=>{e instanceof J&&(this.shipGeometries.owns(e.geometry)||e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>e.dispose()))}));if(delete r.g.userData.deployment,r.ts=[],r.g.userData.modelReady=!!i,r.g.visible=!1,!i)return r;let a=e===`rin`?new Map:this.shipMaterials.copies,o=ut(i,e,a,this.shipGeometries);if(e===`rin`){for(let[e,t]of a)_t(t,this.shipMaterials.get(e));r.g.userData.stealthFade=new wt(a.values())}return r.g.add(o.model),r.ts=o.turrets,r.g.userData.battery=o.battery,r.g.userData.shipLOD=o.lod,r.g.userData.energyDeployment=o.deployment,r}rebuild(){this.fleetInstances.reset();let e=e=>{let t=this.groups[e];t&&(this.scene.remove(t),t.userData.energyDeployment?.dispose(),this.wakeTrails[e]?.dispose(),t.userData.textures?.forEach(e=>e.dispose()),t.traverse(e=>{e instanceof J&&(this.shipGeometries.owns(e.geometry)||e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{this.shipMaterials.owns(e)||e.dispose()}))}))};this.sim.ships.forEach((t,n)=>{let r=this.shipAssets[t.vessel&&t.vessel!==`kongo`?t.vessel:t.type],i=t.type+`:`+(t.vessel??``)+`:`+(r?.uuid??`fallback`);if(this.groups[n]?.userData.visualKey!==i){e(n);let r=this.makeShip(t.type,n===0,t.vessel);r.g.userData.visualKey=i,r.g.userData.batteryTemplate=r.g.userData.battery?structuredClone(r.g.userData.battery):void 0,this.groups[n]=r.g,this.turrets[n]=r.ts,this.shields[n]=r.shield,this.wakes[n]=r.wake,r.wake.visible=!1;let a=r.wake.geometry.parameters,o=new qt(a.width/2.4,a.height/2.5);this.wakeTrails[n]=o,this.scene.add(o.mesh,r.g)}let a=this.groups[n];a.userData.batteryTemplate&&(a.userData.battery=structuredClone(a.userData.batteryTemplate)),this.wakeTrails[n].update(0,t.x,t.z,t.heading,0,!1)});for(let t=this.sim.ships.length;t<this.groups.length;t++)e(t);for(let e of[this.groups,this.turrets,this.shields,this.wakes,this.wakeTrails])e.length=this.sim.ships.length;this.firing.clear()}resize(){let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.viewportWidth=e,this.viewportHeight=t,this.renderer.setPixelRatio(j(e,t,devicePixelRatio,this.resolution.scale,this.graphics.renderHeight)),this.renderer.setSize(e,t),this.host.dataset.renderScale=String(Math.round(this.resolution.scale*100)),this.host.dataset.renderSize=`${this.renderer.domElement.width}×${this.renderer.domElement.height}`,this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}screenSegment(e,t,n,r,i=1){let a=(e,t)=>re(re({x:e,y:i,z:t,w:1},this.camera.matrixWorldInverse.elements),this.camera.projectionMatrix.elements);return oe(a(e,t),a(n,r),this.viewportWidth,this.viewportHeight)}screenPolygon(e,t=1){return ae(e.map(e=>re(re({x:e.x,y:t,z:e.z,w:1},this.camera.matrixWorldInverse.elements),this.camera.projectionMatrix.elements)),this.viewportWidth,this.viewportHeight)}screen(e,t,n=14){let r=this.screenPoint.set(e,n,t).project(this.camera);return{x:(r.x+1)*this.viewportWidth/2,y:(1-r.y)*this.viewportHeight/2,visible:r.z<1&&Math.abs(r.x)<.9&&Math.abs(r.y)<.8}}pointer(e,t){let n=this.renderer.domElement.getBoundingClientRect();if(e<n.left||e>n.right||t<n.top||t>n.bottom){this.pointerLeave();return}this.mouse.set((e-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),this.cameraRig.pointer(this.mouse.x,this.mouse.y)}render(e){if(this.sim.mode===`result`)return;this.sim.gameMode===`escort`&&!this.escortVisuals&&(this.escortVisuals=new ht,this.scene.add(this.escortVisuals.root)),this.escortVisuals?.update(this.sim),this.time+=e,this.captureMarkers.forEach(e=>e.visible=this.sim.gameMode===`capture`);let t=JSON.stringify(this.sim.craters);t!==this.terrainStamp&&(It(this.scene,this.sim.craters),this.terrainStamp=t),y(this.sim,e),this.shake=Math.max(this.shake,this.energyVisuals.update(this.sim)),this.wreckVisuals.update(this.sim,this.groups,this.shields,this.wakes),this.sea.sky.material.uniforms.time&&(this.sea.sky.material.uniforms.time.value=this.time),this.sea.light.position.copy(this.sea.sun).multiplyScalar(250).add(new Y(this.sim.player.x,0,this.sim.player.z)),this.sea.light.target.position.set(this.sim.player.x,0,this.sim.player.z);let r=this.sim.player,a=this.sim.mode===`port`;this.deploymentVisuals.update(this.sim),this.tacticalVisuals.update(this.sim),this.passiveVisuals.update(this.sim),this.weaponRanges.update(r,this.sim.mode===`battle`&&r.respawn<=0);let o=f[this.sim.weather],c=this.scene.fog;c.color.set(this.sim.cycle.weatherAuto?this.sim.cycle.color:o.color),c.near=this.sim.visibility*.55,c.far=this.sim.visibility;let l=this.sea.mesh.material.uniforms,u=w[this.sim.weather],d=te(e);for(let[e,t]of[[`seaHeight`,u.height],[`seaSpeed`,u.speed],[`seaSun`,u.sun],[`seaCloud`,u.cloud]]){let n=l[e];n&&(n.value+=(t-n.value)*d)}l.uVisibility.value=this.sim.visibility,l.uWeatherFogColor.value.set(this.sim.cycle.weatherAuto?this.sim.cycle.color:o.color),this.sea.cachedSky.set(a),this.groups.forEach((e,t)=>{if(e.userData.battery){let n=this.sim.ships[t].battery;this.sim.ships[t].battery=e.userData.battery,t===0&&x(this.sim.ships[t].battery,this.sim.ships[t].type);for(let e of this.sim.ships[t].battery){let t=n.find(t=>t.id===e.id);t&&(e.damage=t.damage,e.reload=t.reload,e.yaw=t.yaw)}delete e.userData.battery}}),this.groups.forEach((t,n)=>{let o=this.sim.ships[n],s=a?void 0:this.sim.intel.reportedModel(this.sim,r,o),c=a||!!s||this.sim.canSeeDirect(r,o),l=t.userData.stealthFade,u=l?l.update(e,!a&&o.respawn<=0&&(o.tacticalChoice??`default`)==="default"&&(o.tacticalTime??0)>0,c,o.team===r.team,a?1:s?.65:this.sim.intel.visualOpacity(this.sim,r,o)):c;t.visible=t.userData.modelReady===!0&&o.respawn<=0&&(!a||n===0)&&u,t.position.set(s?.x??o.x,Math.sin(this.time*1.5+n)*.35,s?.z??o.z),t.rotation.set(Math.sin(this.time+n)*.015+(o.recoilPitch??0),s?.heading??o.heading,Math.cos(this.time*1.2+n)*.018+Math.max(-.055,Math.min(.055,o.yawRate*o.speed*.008))+(o.recoilRoll??0),`YXZ`),this.turrets[n].forEach((e,t)=>{let n=o.battery.find(t=>t.id===e.name.replace(`Game_aim_`,``))??o.battery[t];e.rotation.y=a?e.userData.restAngle||0:n?.yaw??o.aim-o.heading}),this.shields[n].visible=!a&&(o.shield>0||o.invulnerable>0),this.shields[n].rotation.y=o.aim-o.heading-Math.PI/2,this.wakes[n].scale.y=.5+Math.abs(o.speed)/35,t.userData.energyDeployment?.update(o,this.sim.mode===`battle`?e:0,this.time,a);let d=t.userData.deployment;d&&pn(d,o.type===`haru`&&(a?this.previewDeployment:this.sim.fields.some(e=>e.owner===o.id)),e,this.time),this.wakeTrails[n].update(this.sim.mode===`battle`?e:0,o.x,o.z,o.heading,o.speed,!a&&o.respawn<=0&&this.sim.canSeeDirect(r,o),(i(o,this.sim.elapsed)-1)/.24,this.sim.weather)});let p=this.cameraRig.observeRespawn(r);(a||this.vfxShips!==this.sim.ships)&&this.recenter(),this.cameraRig.update(e,r,this.zoom,s,this.sim.mode===`battle`);let m=this.cameraRig,h=a?this.showcase?new Y(r.x+30,18,r.z+40):new Y(r.x+46,29,r.z+60):new Y(m.x,this.zoom*.82,m.z+this.zoom*.74),g=a?new Y(r.x+(this.showcase?0:-16),3,r.z):new Y(m.x,0,m.z-12);p?(this.camera.position.copy(h),this.target.copy(g),this.shake=0):(this.camera.position.lerp(h,1-Math.exp(-e*4)),this.target.lerp(g,1-Math.exp(-e*5))),this.shake=Math.max(0,this.shake-e*8),this.reduced||(this.camera.position.x+=Math.sin(this.time*33)*this.shake*.7,this.camera.position.y+=Math.cos(this.time*39)*this.shake*.5),this.camera.lookAt(this.target),this.camera.updateMatrixWorld(),this.ray.setFromCamera(this.mouse,this.camera);let _=new Y;if(this.ray.ray.intersectPlane(this.plane,_)){this.sim.input.aimX=_.x,this.sim.input.aimZ=_.z;let e=Math.max(12,Math.min(S(r),Math.hypot(_.x-r.x,_.z-r.z)));this.aim.position.set(r.x+Math.sin(r.aim)*e,1.2,r.z+Math.cos(r.aim)*e)}this.aim.visible=this.sim.mode===`battle`&&r.respawn<=0;let v=new F;if(this.pickups.visible=!a,this.pickups.count=this.sim.pickups.length,this.sim.pickups.forEach((e,t)=>{v.position.set(e.x,2.5+Math.sin(this.time*2+t)*.8,e.z),v.rotation.set(0,this.time,Math.PI/6),v.updateMatrix(),this.pickups.setMatrixAt(t,v.matrix)}),this.pickups.count&&(this.pickups.instanceMatrix.clearUpdateRanges(),this.pickups.instanceMatrix.addUpdateRange(0,this.pickups.count*16),this.pickups.instanceMatrix.needsUpdate=!0),this.shellTrails.update(this.sim.mode===`port`?[]:this.sim.shots,this.sim.mode===`battle`?e:0),this.projectiles.update(a?[]:this.sim.shots.filter(e=>this.sim.canSeeShot(r,e)),a?3:this.sim.mode===`battle`?e:0),this.defenseVisuals.update(a?[]:this.sim.defenseTraces.filter(e=>this.sim.canSeeDirect(r,this.sim.ships[e.owner])&&Math.hypot(e.tx-r.x,e.tz-r.z)<=n(this.sim.visibility))),this.effectPool.forEach((e,t)=>{let n=this.sim.effects[t],r=this.sim.fields[t-this.sim.effects.length];if(e.visible=!!r||!!n&&(n.kind===`cast`||n.kind===`splash`),n&&e.visible){let t=1-n.life/n.max;e.position.set(n.x,.65,n.z),e.scale.setScalar(10*t+2),e.material.opacity=(1-t)*(n.kind===`splash`?.22:.7),e.material.color.set(n.kind===`splash`?`#deeff4`:`#7dffe7`)}else r&&(e.position.set(r.x,1,r.z),e.scale.setScalar(36),e.material.opacity=.3,e.material.color.set(`#c3a7ff`))}),this.vfxShips!==this.sim.ships&&(this.impacts.reset(),this.vfxShips=this.sim.ships),a&&(this.firing.clear(),this.gunLightLife=0),this.sim.mode===`battle`){this.gunLightLife=Math.max(0,this.gunLightLife-e);for(let[e,t]of this.firing){let n=this.sim.ships[e];if(!n||!this.groups[e])continue;let r=!1;for(let i of this.turrets[e])t.has(i.name.replace(`Game_aim_`,``))&&i.traverse(e=>{e.name===`muzzle`&&(this.impacts.muzzle(Ot(e,new Y),n.heading+i.rotation.y,n.battery.find(e=>e.id===i.name.replace(`Game_aim_`,``))?.weapon.caliber),r=!0)});r||this.impacts.muzzle(new Y(n.x+Math.sin(n.aim)*10,3,n.z+Math.cos(n.aim)*10),n.aim),e===0&&(this.gunLight.position.set(n.x,5,n.z),this.gunLightLife=.12)}this.firing.clear()}this.gunLight.intensity=this.gunLightLife*5e3,a?this.impacts.reset():this.impacts.update(this.sim.effects,this.sim.mode===`battle`?e:0);for(let e of this.groups)e.userData.shipLOD?.update(this.camera,this.renderer.domElement.height,a,this.graphics.detail);this.sea.sky.position.copy(this.camera.position),this.scene.updateMatrixWorld(),this.fireVisuals.update(this.sim,this.groups,this.camera),this.energyWater.update(this.sim,this.camera),this.sea.update(e),this.shadowElapsed+=e,this.shadowElapsed>=1/30&&(this.renderer.shadowMap.needsUpdate=!0,this.shadowElapsed=0),this.host.dataset.ocean=this.backend?`babylon-v1`:`abyssal`,this.sea.mesh.material.uniforms.toneMappingExposure.value=this.renderer.toneMappingExposure,this.oceanComposite.render(this.scene,this.camera),this.graphics.aa&&!this.backend&&this.edgeAA.render(this.renderer)}dispose(){this.fleetInstances.dispose(),this.groups.forEach(e=>e.userData.energyDeployment?.dispose()),this.fireVisuals.dispose(),this.tacticalVisuals.dispose(),this.passiveVisuals.dispose(),this.deploymentVisuals.dispose(),this.defenseVisuals.dispose(),this.projectiles.dispose(),this.energyWater.dispose(),this.energyVisuals.dispose(),this.wreckVisuals.dispose(),this.shellTrails.dispose(),this.weaponRanges.dispose(),this.disposed=!0,this.edgeAA.dispose(),this.oceanComposite.dispose(),this.impacts.dispose(),this.sea.dispose(),this.scene.userData.terrainTextures?.forEach(e=>e.dispose()),this.groups.forEach(e=>e.userData.textures?.forEach(e=>e.dispose())),this.scene.traverse(e=>{(e instanceof J||e instanceof rt)&&(this.shipGeometries.owns(e.geometry)||e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{this.shipMaterials.owns(e)||e.dispose()}))}),Object.values(this.shipAssets).forEach(ft),this.shipGeometries.dispose(),this.shipMaterials.dispose(),this.backend?this.backend.dispose():this.renderer.dispose(),this.renderer.domElement.remove()}};export{Sn as World};