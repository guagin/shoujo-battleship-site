const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./shadowMap.fragment-DUFTmQJ_.js","./shaderStore-D-XQlhUT.js","./clipPlaneFragment-Ct2VqHzk.js","./packingFunctions-CINwVZs6.js","./shadowMap.vertex-Cg7Krozr.js","./instancesVertex-DlpJul6S.js","./helperFunctions-BH8P-eyq.js","./meshUboDeclaration-BATNZvmb.js","./sceneUboDeclaration-B96Tfx7b.js","./bonesVertex-D9u7574l.js","./clipPlaneVertex-DKhVm1NW.js","./morphTargetsVertex-OlIh-Lzh.js","./depthBoxBlur.fragment-D2KJPEQv.js","./shadowMapFragmentSoftTransparentShadow-B6k0i9Au.js","./shadowMap.fragment-DOzErFEq.js","./clipPlaneFragment-B_IgbgTE.js","./clipPlaneFragmentDeclaration-LJdlhFDo.js","./packingFunctions-DpGwbupU.js","./shadowMap.vertex-CKm01Ksx.js","./instancesVertex-C-FoRQR1.js","./helperFunctions-gEnZbjN3.js","./clipPlaneVertex-6IHcna3I.js","./bakedVertexAnimation-e--Ra-by.js","./clipPlaneVertexDeclaration-Be-obVGF.js","./sceneUboDeclaration-B5VhSG0v.js","./meshUboDeclaration-BmNu2KU_.js","./morphTargetsVertex-6N5r7oF1.js","./sceneVertexDeclaration-CluTp-RC.js","./depthBoxBlur.fragment-CLEAG5DG.js","./shadowMapFragmentSoftTransparentShadow-R_iOKnyx.js","./sprites.vertex-Bw2sXijT.js","./fogVertexDeclaration-CiHbVcSR.js","./logDepthDeclaration-DYYUVTrx.js","./logDepthVertex-DSD5XdGw.js","./sprites.fragment-BODwQAOn.js","./fogFragment-EikOP4pH.js","./logDepthFragment-CxtJswLx.js","./sprites.vertex-BUp-tXX_.js","./logDepthDeclaration-3gXGtHbI.js","./fogVertexDeclaration-Bb9kDbrL.js","./logDepthVertex-D5IUM6qd.js","./sprites.fragment-D6gd3953.js","./fogFragment-CISE_m3s.js","./logDepthFragment-C5lxT4l1.js"])))=>i.map(i=>d[i]);
import{t as e}from"./observable.pure-B5E8yEYx.js";import{t}from"./engineStore-e38OvQA7.js";import{t as n}from"./logger-CuBYPcDK.js";import{t as r}from"./shaderStore-D-XQlhUT.js";import{S as i}from"./tools.functions-CGAPgMh0.js";import{_ as a,g as o,t as s,y as c}from"./mesh.pure-DhirsM6E.js";import{i as l,n as u,o as d,p as f,s as p}from"./scene.pure-t3CtMfeD.js";import{a as m,i as h,o as g,s as _,t as v}from"./babylon-runtime-gStt1xEm.js";import{n as y,t as b}from"./buffer.pure-BhATvJtW.js";import{a as x,f as S,i as C,o as w,t as T,u as ee}from"./math.vector.pure-BzvwHg0o.js";import{n as te}from"./typeStore-Cu_sj2zM.js";import{n as E,t as ne}from"./math.color.pure-DBUb_tz1.js";import{t as re}from"./math.plane-CSpNQuAH.js";import{t as D}from"./preload-helper-uBIymjUX.js";import{n as O,t as ie}from"./renderTargetTexture.pure-B9PJOujk.js";import{t as ae}from"./webRequest-dqz0dHXK.js";import{r as oe}from"./tools.pure-Q_DELm5w.js";import{t as k}from"./constants-DfNKfgSv.js";import{n as se}from"./lightConstants-BoCE0AhI.js";import{a as ce,i as A,r as j,t as M}from"./sceneComponent-oGyMbNUr.js";import{n as le}from"./shadowLight-BOR-C_yw.js";import{n as N}from"./texture.pure-hfNyzrEQ.js";import{t as P}from"./drawWrapper-Bi8tMbbZ.js";import{t as ue}from"./postProcess.pure-CPdQ3vET.js";import{m as de}from"./imageProcessing-ZdMQZ_Gq.js";import{I as fe,L as pe,P as me,R as he,a as ge,f as _e,m as ve,p as ye,s as be,x as xe}from"./material.pure-Dpk-H6aH.js";import{n as Se,t as Ce}from"./pointLight.pure-HAucGfwh.js";import{t as F}from"./energy-output-C_KvI0Sr.js";import{n as we}from"./energy-profile-BEdwGAE0.js";import{t as Te}from"./computeShader.pure-DhTXWJZ3.js";import{t as Ee}from"./impact-canvas-iCh-1PFF.js";import"./instancesDeclaration-CJBvtBV5.js";import"./instancesVertex-C-FoRQR1.js";import{n as De,t as Oe}from"./imageProcessingFunctions-G8WWRV14.js";import{t as I}from"./logDepthDeclaration-3gXGtHbI.js";import{t as ke}from"./helperFunctions-gEnZbjN3.js";import{n as Ae,t as je}from"./fogFragment-CISE_m3s.js";import{t as Me}from"./clipPlaneFragment-B_IgbgTE.js";import{t as Ne}from"./logDepthFragment-C5lxT4l1.js";import{t as Pe}from"./fogVertexDeclaration-Bb9kDbrL.js";import{t as Fe}from"./clipPlaneVertex-6IHcna3I.js";import{t as Ie}from"./fogVertex-B90wzaBe.js";import{t as Le}from"./logDepthVertex-D5IUM6qd.js";var Re=class{constructor(e){this.name=M.NAME_SHADOWGENERATOR,this.scene=e}register(){this.scene._gatherRenderTargetsStage.registerStep(M.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR,this,this._gatherRenderTargets)}rebuild(){}serialize(e){e.shadowGenerators=[];let t=this.scene.lights;for(let n of t){if(n.doNotSerialize)continue;let t=n.getShadowGenerators();if(t){let n=t.values();for(let t=n.next();t.done!==!0;t=n.next()){let n=t.value;n.doNotSerialize||e.shadowGenerators.push(n.serialize())}}}}addFromContainer(e){}removeFromContainer(e,t){}dispose(){}_gatherRenderTargets(e){let t=this.scene;if(this.scene.shadowsEnabled)for(let n=0;n<t.lights.length;n++){let r=t.lights[n],i=r.getShadowGenerators();if(r.isEnabled()&&r.shadowEnabled&&i){let n=i.values();for(let r=n.next();r.done!==!0;r=n.next()){let n=r.value.getShadowMap();t.textures.indexOf(n)!==-1&&e.push(n)}}}}},ze=!1;function Be(e){ze||(ze=!0,g(M.NAME_SHADOWGENERATOR,(t,n)=>{if(t.shadowGenerators!==void 0&&t.shadowGenerators!==null)for(let r=0,i=t.shadowGenerators.length;r<i;r++){let i=t.shadowGenerators[r];e._CascadedShadowGeneratorParser&&i.className===`CascadedShadowGenerator`?e._CascadedShadowGeneratorParser(i,n):e.Parse(i,n)}}),e._SceneComponentInitialization=e=>{let t=e._getComponent(M.NAME_SHADOWGENERATOR);t||(t=new Re(e),e._addComponent(t))})}var L=class t{get bias(){return this._bias}set bias(e){this._bias=e}get normalBias(){return this._normalBias}set normalBias(e){this._normalBias=e}get blurBoxOffset(){return this._blurBoxOffset}set blurBoxOffset(e){this._blurBoxOffset!==e&&(this._blurBoxOffset=e,this._disposeBlurPostProcesses())}get blurScale(){return this._blurScale}set blurScale(e){this._blurScale!==e&&(this._blurScale=e,this._disposeBlurPostProcesses())}get blurKernel(){return this._blurKernel}set blurKernel(e){this._blurKernel!==e&&(this._blurKernel=e,this._disposeBlurPostProcesses())}get useKernelBlur(){return this._useKernelBlur}set useKernelBlur(e){this._useKernelBlur!==e&&(this._useKernelBlur=e,this._disposeBlurPostProcesses())}get depthScale(){return this._depthScale===void 0?this._light.getDepthScale():this._depthScale}set depthScale(e){this._depthScale=e}_validateFilter(e){return e}get filter(){return this._filter}set filter(e){if(e=this._validateFilter(e),this._light.needCube()){if(e===t.FILTER_BLUREXPONENTIALSHADOWMAP){this.useExponentialShadowMap=!0;return}if(e===t.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP){this.useCloseExponentialShadowMap=!0;return}if(e===t.FILTER_PCF||e===t.FILTER_PCSS){this.usePoissonSampling=!0;return}}if((e===t.FILTER_PCF||e===t.FILTER_PCSS)&&!this._scene.getEngine()._features.supportShadowSamplers){this.usePoissonSampling=!0;return}this._filter!==e&&(this._filter=e,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get usePoissonSampling(){return this.filter===t.FILTER_POISSONSAMPLING}set usePoissonSampling(e){let n=this._validateFilter(t.FILTER_POISSONSAMPLING);(e||this.filter===t.FILTER_POISSONSAMPLING)&&(this.filter=e?n:t.FILTER_NONE)}get useExponentialShadowMap(){return this.filter===t.FILTER_EXPONENTIALSHADOWMAP}set useExponentialShadowMap(e){let n=this._validateFilter(t.FILTER_EXPONENTIALSHADOWMAP);(e||this.filter===t.FILTER_EXPONENTIALSHADOWMAP)&&(this.filter=e?n:t.FILTER_NONE)}get useBlurExponentialShadowMap(){return this.filter===t.FILTER_BLUREXPONENTIALSHADOWMAP}set useBlurExponentialShadowMap(e){let n=this._validateFilter(t.FILTER_BLUREXPONENTIALSHADOWMAP);(e||this.filter===t.FILTER_BLUREXPONENTIALSHADOWMAP)&&(this.filter=e?n:t.FILTER_NONE)}get useCloseExponentialShadowMap(){return this.filter===t.FILTER_CLOSEEXPONENTIALSHADOWMAP}set useCloseExponentialShadowMap(e){let n=this._validateFilter(t.FILTER_CLOSEEXPONENTIALSHADOWMAP);(e||this.filter===t.FILTER_CLOSEEXPONENTIALSHADOWMAP)&&(this.filter=e?n:t.FILTER_NONE)}get useBlurCloseExponentialShadowMap(){return this.filter===t.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP}set useBlurCloseExponentialShadowMap(e){let n=this._validateFilter(t.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP);(e||this.filter===t.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP)&&(this.filter=e?n:t.FILTER_NONE)}get usePercentageCloserFiltering(){return this.filter===t.FILTER_PCF}set usePercentageCloserFiltering(e){let n=this._validateFilter(t.FILTER_PCF);(e||this.filter===t.FILTER_PCF)&&(this.filter=e?n:t.FILTER_NONE)}get filteringQuality(){return this._filteringQuality}set filteringQuality(e){this._filteringQuality!==e&&(this._filteringQuality=e,this._disposeBlurPostProcesses(),this._applyFilterValues(),this._light._markMeshesAsLightDirty())}get useContactHardeningShadow(){return this.filter===t.FILTER_PCSS}set useContactHardeningShadow(e){let n=this._validateFilter(t.FILTER_PCSS);(e||this.filter===t.FILTER_PCSS)&&(this.filter=e?n:t.FILTER_NONE)}get contactHardeningLightSizeUVRatio(){return this._contactHardeningLightSizeUVRatio}set contactHardeningLightSizeUVRatio(e){this._contactHardeningLightSizeUVRatio=e}get darkness(){return this._darkness}set darkness(e){this.setDarkness(e)}getDarkness(){return this._darkness}setDarkness(e){return this._darkness=e>=1?1:e<=0?0:e,this}get transparencyShadow(){return this._transparencyShadow}set transparencyShadow(e){this.setTransparencyShadow(e)}setTransparencyShadow(e){return this._transparencyShadow=e,this}getShadowMap(){return this._shadowMap}getShadowMapForRendering(){return this._shadowMap2?this._shadowMap2:this._shadowMap}getClassName(){return t.CLASSNAME}addShadowCaster(e,t=!0){if(!this._shadowMap)return this;if(this._shadowMap.renderList||(this._shadowMap.renderList=[]),this._shadowMap.renderList.indexOf(e)===-1&&this._shadowMap.renderList.push(e),t)for(let t of e.getChildMeshes())this._shadowMap.renderList.indexOf(t)===-1&&this._shadowMap.renderList.push(t);return this}removeShadowCaster(e,t=!0){if(!this._shadowMap||!this._shadowMap.renderList)return this;let n=this._shadowMap.renderList.indexOf(e);if(n!==-1&&this._shadowMap.renderList.splice(n,1),t)for(let t of e.getChildren())this.removeShadowCaster(t);return this}getLight(){return this._light}get shaderLanguage(){return this._shaderLanguage}_getCamera(){return this._camera??this._scene.activeCamera}get mapSize(){return this._mapSize}set mapSize(e){this._mapSize=e,this._light._markMeshesAsLightDirty(),this.recreateShadowMap()}get light(){return this._light}set light(e){this._light!==e&&(this.dispose(!1),this._light=e,this._createInstance())}get useFloat32TextureType(){return this._usefullFloatFirst}set useFloat32TextureType(e){this._usefullFloatFirst!==e&&(this.dispose(!1),this._usefullFloatFirst=e,this._createInstance())}get camera(){return this._camera}set camera(e){this._camera!==e&&(this.dispose(!1),this._camera=e,this._createInstance())}get useRedTextureFormat(){return this._useRedTextureType}set useRedTextureFormat(e){this._useRedTextureType!==e&&(this.dispose(!1),this._useRedTextureType=e,this._createInstance())}constructor(n,r,i,a,o,s=!1){this.onBeforeShadowMapRenderObservable=new e,this.onAfterShadowMapRenderObservable=new e,this.onBeforeShadowMapRenderMeshObservable=new e,this.onAfterShadowMapRenderMeshObservable=new e,this.doNotSerialize=!1,this._bias=5e-5,this._normalBias=0,this._blurBoxOffset=1,this._blurScale=2,this._blurKernel=1,this._useKernelBlur=!1,this._filter=t.FILTER_NONE,this._filteringQuality=t.QUALITY_HIGH,this._contactHardeningLightSizeUVRatio=.1,this._darkness=0,this._transparencyShadow=!1,this.enableSoftTransparentShadow=!1,this.useOpacityTextureForTransparentShadow=!1,this.frustumEdgeFalloff=0,this._shaderLanguage=0,this.forceBackFacesOnly=!1,this._lightDirection=w.Zero(),this._viewMatrix=T.Zero(),this._projectionMatrix=T.Zero(),this._transformMatrix=T.Zero(),this._cachedPosition=new w(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._cachedDirection=new w(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._currentFaceIndex=0,this._currentFaceIndexCache=0,this._defaultTextureMatrix=T.Identity(),this._shadersLoaded=!1,this._mapSize=n,this._light=r,this._usefullFloatFirst=!!i,this._scene=r.getScene(),this._camera=a??null,this._useRedTextureType=!!o,this._forceGLSL=s,this._createInstance()}_createInstance(){this._initShaderSourceAsync(this._forceGLSL);let e=this._light._shadowGenerators;e||=this._light._shadowGenerators=new Map,e.set(this._camera,this),this.id=this._light.id,this._useUBO=this._scene.getEngine().supportsUniformBuffers,this._useUBO&&(this._sceneUBOs=[this._scene.createSceneUniformBuffer(`Scene for Shadow Generator (light "${this._light.name}")`,{forceMono:!0})]),Be(t),t._SceneComponentInitialization(this._scene),ie();let n=this._scene.getEngine().getCaps();this._textureType=this._usefullFloatFirst?n.textureFloatRender&&n.textureFloatLinearFiltering?1:n.textureHalfFloatRender&&n.textureHalfFloatLinearFiltering?2:0:n.textureHalfFloatRender&&n.textureHalfFloatLinearFiltering?2:n.textureFloatRender&&n.textureFloatLinearFiltering?1:0,this._initializeGenerator(),this._applyFilterValues()}_initializeGenerator(){this._light._markMeshesAsLightDirty(),this._initializeShadowMap()}_createTargetRenderTexture(){let e=this._scene.getEngine();this._shadowMap?.dispose(),e._features.supportDepthStencilTexture?(this._shadowMap=new O(this._light.name+`_shadowMap`,this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube(),void 0,!1,!1,void 0,this._useRedTextureType?6:5),this._shadowMap.createDepthStencilTexture(e.useReverseDepthBuffer?516:513,!0,void 0,void 0,void 0,`DepthStencilForShadowGenerator-${this._light.name}`)):this._shadowMap=new O(this._light.name+`_shadowMap`,this._mapSize,this._scene,!1,!0,this._textureType,this._light.needCube()),this._shadowMap.noPrePassRenderer=!0}_initializeShadowMap(){if(this._createTargetRenderTexture(),this._shadowMap===null)return;this._shadowMap.wrapU=N.CLAMP_ADDRESSMODE,this._shadowMap.wrapV=N.CLAMP_ADDRESSMODE,this._shadowMap.anisotropicFilteringLevel=1,this._shadowMap.updateSamplingMode(N.BILINEAR_SAMPLINGMODE),this._shadowMap.renderParticles=!1,this._shadowMap.ignoreCameraViewport=!0,this._storedUniqueId&&(this._shadowMap.uniqueId=this._storedUniqueId),this._shadowMap.customRenderFunction=(e,t,n,r)=>this._renderForShadowMap(e,t,n,r),this._shadowMap.customIsReadyFunction=(e,t,n)=>{if(!n||!e.subMeshes)return!0;let r=!0;for(let t of e.subMeshes){let e=t.getRenderingMesh(),n=this._scene.getEngine(),i=t.getMaterial();if(!i||t.verticesCount===0||this.customAllowRendering&&!this.customAllowRendering(t))continue;let a=e._getInstancesRenderList(t._id,!!t.getReplacementMesh());if(a.mustReturn)continue;let o=n.getCaps().instancedArrays&&(a.visibleInstances[t._id]!==null&&a.visibleInstances[t._id]!==void 0||e.hasThinInstances),s=i.needAlphaBlendingForMesh(e);r=this.isReady(t,o,s)&&r}return r};let e=this._scene.getEngine();this._shadowMap.onBeforeBindObservable.add(()=>{this._currentSceneUBO=this._scene.getSceneUniformBuffer(),e._enableGPUDebugMarkers&&e._debugPushGroup?.(`Shadow map generation for pass id ${e.currentRenderPassId}`)}),this._shadowMap.onBeforeRenderObservable.add(n=>{this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._sceneUBOs[0]),this._currentFaceIndex=n,this._filter===t.FILTER_PCF&&e.setColorWrite(!1),this.getTransformMatrix(),A.eyeAtCamera=!1,this._scene.setTransformMatrix(this._viewMatrix,this._projectionMatrix),this._sceneUBOs&&(this._scene.getSceneUniformBuffer().unbindEffect(),this._scene.finalizeSceneUbo())}),this._shadowMap.onAfterUnbindObservable.add(()=>{if(this._sceneUBOs&&this._scene.setSceneUniformBuffer(this._currentSceneUBO),A.eyeAtCamera=!0,this._scene.updateTransformMatrix(),this._filter===t.FILTER_PCF&&e.setColorWrite(!0),!this.useBlurExponentialShadowMap&&!this.useBlurCloseExponentialShadowMap){e._debugPopGroup?.();return}let n=this.getShadowMapForRendering();n&&(this._scene.postProcessManager.directRender(this._blurPostProcesses,n.renderTarget,!0),e.unBindFramebuffer(n.renderTarget,!0)),e._enableGPUDebugMarkers&&e._debugPopGroup?.()});let n=new E(0,0,0,0),r=new E(1,1,1,1);this._shadowMap.onClearObservable.add(e=>{this._filter===t.FILTER_PCF?e.clear(r,!1,!0,!1):this.useExponentialShadowMap||this.useBlurExponentialShadowMap?e.clear(n,!0,!0,!1):e.clear(r,!0,!0,!1)}),this._shadowMap.onResizeObservable.add(e=>{this._storedUniqueId=this._shadowMap.uniqueId,this._mapSize=e.getRenderSize(),this._light._markMeshesAsLightDirty(),this.recreateShadowMap()});for(let e=j.MIN_RENDERINGGROUPS;e<j.MAX_RENDERINGGROUPS;e++)this._shadowMap.setRenderingAutoClearDepthStencil(e,!1)}async _initShaderSourceAsync(e=!1){this._scene.getEngine().isWebGPU&&!e&&!t.ForceGLSL?(this._shaderLanguage=1,await Promise.all([D(()=>import(`./shadowMap.fragment-DUFTmQJ_.js`),__vite__mapDeps([0,1,2,3]),import.meta.url),D(()=>import(`./shadowMap.vertex-Cg7Krozr.js`),__vite__mapDeps([4,1,5,6,7,8,9,10,11]),import.meta.url),D(()=>import(`./depthBoxBlur.fragment-D2KJPEQv.js`),__vite__mapDeps([12,1]),import.meta.url),D(()=>import(`./shadowMapFragmentSoftTransparentShadow-B6k0i9Au.js`),__vite__mapDeps([13,1]),import.meta.url)])):await Promise.all([D(()=>import(`./shadowMap.fragment-DOzErFEq.js`),__vite__mapDeps([14,1,15,16,17]),import.meta.url),D(()=>import(`./shadowMap.vertex-CKm01Ksx.js`),__vite__mapDeps([18,1,19,20,21,22,23,24,25,26,27]),import.meta.url),D(()=>import(`./depthBoxBlur.fragment-CLEAG5DG.js`),__vite__mapDeps([28,1]),import.meta.url),D(()=>import(`./shadowMapFragmentSoftTransparentShadow-R_iOKnyx.js`),__vite__mapDeps([29,1]),import.meta.url)]),this._shadersLoaded=!0}_initializeBlurRTTAndPostProcesses(){let e=this._scene.getEngine(),t=this._mapSize/this.blurScale;(!this.useKernelBlur||this.blurScale!==1)&&(this._shadowMap2=new O(this._light.name+`_shadowMap2`,t,this._scene,!1,!0,this._textureType,void 0,void 0,!1),this._shadowMap2.wrapU=N.CLAMP_ADDRESSMODE,this._shadowMap2.wrapV=N.CLAMP_ADDRESSMODE,this._shadowMap2.updateSamplingMode(N.BILINEAR_SAMPLINGMODE)),this.useKernelBlur?(this._kernelBlurXPostprocess=new _(this._light.name+`KernelBlurX`,new x(1,0),this.blurKernel,1,null,N.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.width=t,this._kernelBlurXPostprocess.height=t,this._kernelBlurXPostprocess.externalTextureSamplerBinding=!0,this._kernelBlurXPostprocess.onApplyObservable.add(e=>{e.setTexture(`textureSampler`,this._shadowMap)}),this._kernelBlurYPostprocess=new _(this._light.name+`KernelBlurY`,new x(0,1),this.blurKernel,1,null,N.BILINEAR_SAMPLINGMODE,e,!1,this._textureType),this._kernelBlurXPostprocess.autoClear=!1,this._kernelBlurYPostprocess.autoClear=!1,this._textureType===0&&(this._kernelBlurXPostprocess.packedFloat=!0,this._kernelBlurYPostprocess.packedFloat=!0),this._blurPostProcesses=[this._kernelBlurXPostprocess,this._kernelBlurYPostprocess]):(this._boxBlurPostprocess=new ue(this._light.name+`DepthBoxBlur`,`depthBoxBlur`,[`screenSize`,`boxOffset`],[],1,null,N.BILINEAR_SAMPLINGMODE,e,!1,`#define OFFSET `+this._blurBoxOffset,this._textureType,void 0,void 0,void 0,void 0,this._shaderLanguage),this._boxBlurPostprocess.externalTextureSamplerBinding=!0,this._boxBlurPostprocess.onApplyObservable.add(e=>{e.setFloat2(`screenSize`,t,t),e.setTexture(`textureSampler`,this._shadowMap)}),this._boxBlurPostprocess.autoClear=!1,this._blurPostProcesses=[this._boxBlurPostprocess])}_renderForShadowMap(e,t,n,r){let i;if(r.length)for(i=0;i<r.length;i++)this._renderSubMeshForShadowMap(r.data[i]);for(i=0;i<e.length;i++)this._renderSubMeshForShadowMap(e.data[i]);for(i=0;i<t.length;i++)this._renderSubMeshForShadowMap(t.data[i]);if(this._transparencyShadow)for(i=0;i<n.length;i++)this._renderSubMeshForShadowMap(n.data[i],!0);else for(i=0;i<n.length;i++)n.data[i].getEffectiveMesh()._internalAbstractMeshDataInfo._isActiveIntermediate=!1}_bindCustomEffectForRenderSubMeshForShadowMap(e,t,n){t.setMatrix(`viewProjection`,this.getTransformMatrix())}_renderSubMeshForShadowMap(e,t=!1){let n=e.getRenderingMesh(),r=e.getEffectiveMesh(),i=this._scene,a=i.getEngine(),o=e.getMaterial();if(r._internalAbstractMeshDataInfo._isActiveIntermediate=!1,!o||e.verticesCount===0||e._renderId===i.getRenderId())return;let s=i.useRightHandedSystem,c=r._getWorldMatrixDeterminant()<0,l=o._getEffectiveOrientation(n);(c&&!s||!c&&s)&&(l=+(l===0));let u=l===0;a.setState(o.backFaceCulling,void 0,void 0,u,o.cullBackFaces);let d=n._getInstancesRenderList(e._id,!!e.getReplacementMesh());if(d.mustReturn)return;let f=a.getCaps().instancedArrays&&(d.visibleInstances[e._id]!==null&&d.visibleInstances[e._id]!==void 0||n.hasThinInstances);if(!this.customAllowRendering||this.customAllowRendering(e)){if(this.isReady(e,f,t)){e._renderId=i.getRenderId();let s=o.shadowDepthWrapper,c=s?.getEffect(e,this,a.currentRenderPassId)??e._getDrawWrapper(),l=P.GetEffect(c);a.enableEffect(c),f||n._bind(e,l,o.fillMode),this.getTransformMatrix(),l.setFloat3(`biasAndScaleSM`,this.bias,this.normalBias,this.depthScale),this.getLight().getTypeID()===le.LIGHTTYPEID_DIRECTIONALLIGHT?l.setVector3(`lightDataSM`,this._cachedDirection):l.setVector3(`lightDataSM`,this._cachedPosition.subtractToRef(this._scene.floatingOriginOffset,C.Vector3[0]));let u=this._getCamera();if(l.setFloat2(`depthValuesSM`,this.getLight().getDepthMinZ(u),this.getLight().getDepthMinZ(u)+this.getLight().getDepthMaxZ(u)),t&&this.enableSoftTransparentShadow&&l.setFloat2(`softTransparentShadowSM`,r.visibility*o.alpha,+!!this._opacityTexture?.getAlphaFromRGB),s)e._setMainDrawWrapperOverride(c),s.standalone?s.baseMaterial.bindForSubMesh(r.getWorldMatrix(),n,e):o.bindForSubMesh(r.getWorldMatrix(),n,e),e._setMainDrawWrapperOverride(null);else{this._opacityTexture&&(l.setTexture(`diffuseSampler`,this._opacityTexture),l.setMatrix(`diffuseMatrix`,this._opacityTexture.getTextureMatrix()||this._defaultTextureMatrix)),be(n,l),ye(n,l),n.morphTargetManager&&n.morphTargetManager.isUsingTextureForTargets&&n.morphTargetManager._bind(l);let t=e.getMesh().bakedVertexAnimationManager;t&&t.isEnabled&&t.bind(l,f),pe(l,o,i)}!this._useUBO&&!s&&this._bindCustomEffectForRenderSubMeshForShadowMap(e,l,r),ve(l,this._scene.getSceneUniformBuffer()),this._scene.getSceneUniformBuffer().bindUniformBuffer();let p=r.getWorldMatrix();f&&(r.getMeshUniformBuffer().bindToEffect(l,`Mesh`),r.transferToEffect(p)),this.forceBackFacesOnly&&a.setState(!0,0,!1,!0,o.cullBackFaces),this.onBeforeShadowMapRenderMeshObservable.notifyObservers(n),this.onBeforeShadowMapRenderObservable.notifyObservers(l),n._processRendering(r,e,l,o.fillMode,d,f,(e,t)=>{r!==n&&!e?(n.getMeshUniformBuffer().bindToEffect(l,`Mesh`),n.transferToEffect(t)):(r.getMeshUniformBuffer().bindToEffect(l,`Mesh`),r.transferToEffect(e?t:p))}),this.forceBackFacesOnly&&a.setState(!0,0,!1,!1,o.cullBackFaces),this.onAfterShadowMapRenderObservable.notifyObservers(l),this.onAfterShadowMapRenderMeshObservable.notifyObservers(n)}else this._shadowMap&&this._shadowMap.resetRefreshCounter()}}_applyFilterValues(){this._shadowMap&&(this.filter===t.FILTER_NONE||this.filter===t.FILTER_PCSS?this._shadowMap.updateSamplingMode(N.NEAREST_SAMPLINGMODE):this._shadowMap.updateSamplingMode(N.BILINEAR_SAMPLINGMODE))}forceCompilation(e,t){let n={useInstances:!1,...t},r=this.getShadowMap();if(!r){e&&e(this);return}let i=r.renderList;if(!i){e&&e(this);return}let a=[];for(let e of i)a.push(...e.subMeshes);if(a.length===0){e&&e(this);return}let o=0,s=()=>{if(this._scene&&this._scene.getEngine()){for(;this.isReady(a[o],n.useInstances,a[o].getMaterial()?.needAlphaBlendingForMesh(a[o].getMesh())??!1);)if(o++,o>=a.length){e&&e(this);return}setTimeout(s,16)}};s()}async forceCompilationAsync(e){return await new Promise(t=>{this.forceCompilation(()=>{t()},e)})}_isReadyCustomDefines(e,t,n){}_prepareShadowDefines(e,t,n,r){n.push(`#define SM_LIGHTTYPE_`+this._light.getClassName().toUpperCase()),n.push(`#define SM_FLOAT `+(this._textureType===0?`0`:`1`)),n.push(`#define SM_ESM `+(this.useExponentialShadowMap||this.useBlurExponentialShadowMap?`1`:`0`)),n.push(`#define SM_DEPTHTEXTURE `+(this.usePercentageCloserFiltering||this.useContactHardeningShadow?`1`:`0`));let i=e.getMesh();return n.push(`#define SM_NORMALBIAS `+(this.normalBias&&i.isVerticesDataPresent(y.NormalKind)?`1`:`0`)),n.push(`#define SM_DIRECTIONINLIGHTDATA `+(this.getLight().getTypeID()===le.LIGHTTYPEID_DIRECTIONALLIGHT?`1`:`0`)),n.push(`#define SM_USEDISTANCE `+(this._light.needCube()?`1`:`0`)),n.push(`#define SM_SOFTTRANSPARENTSHADOW `+(this.enableSoftTransparentShadow&&r?`1`:`0`)),this._isReadyCustomDefines(n,e,t),n}isReady(e,n,r){if(!this._shadersLoaded)return!1;let i=e.getMaterial(),a=i?.shadowDepthWrapper;if(this._opacityTexture=null,!i)return!1;let o=[];if(this._prepareShadowDefines(e,n,o,r),a){if(!a.isReadyForSubMesh(e,o,this,n,this._scene.getEngine().currentRenderPassId))return!1}else{let r=e._getDrawWrapper(void 0,!0),a=r.effect,s=r.defines,c=[y.PositionKind],l=e.getMesh(),u=!1,d=!1,f=!1;this.normalBias&&l.isVerticesDataPresent(y.NormalKind)&&(c.push(y.NormalKind),o.push(`#define NORMAL`),u=!0,l.nonUniformScaling&&o.push(`#define NONUNIFORMSCALING`));let p=i.needAlphaTestingForMesh(l);if((p||i.needAlphaBlendingForMesh(l))&&(this._opacityTexture=this.useOpacityTextureForTransparentShadow?i.opacityTexture:i.getAlphaTestTexture(),this._opacityTexture)){if(!this._opacityTexture.isReady())return!1;let e=i.alphaCutOff??t.DEFAULT_ALPHA_CUTOFF;o.push(`#define ALPHATEXTURE`),p&&o.push(`#define ALPHATESTVALUE ${e}${e%1==0?`.`:``}`),l.isVerticesDataPresent(y.UVKind)&&(c.push(y.UVKind),o.push(`#define UV1`),d=!0),l.isVerticesDataPresent(y.UV2Kind)&&this._opacityTexture.coordinatesIndex===1&&(c.push(y.UV2Kind),o.push(`#define UV2`),f=!0)}let m=new de;if(l.useBones&&l.computeBonesUsingShaders&&l.skeleton){c.push(y.MatricesIndicesKind),c.push(y.MatricesWeightsKind),l.numBoneInfluencers>4&&(c.push(y.MatricesIndicesExtraKind),c.push(y.MatricesWeightsExtraKind));let e=l.skeleton;o.push(`#define NUM_BONE_INFLUENCERS `+l.numBoneInfluencers),l.numBoneInfluencers>0&&m.addCPUSkinningFallback(0,l),e.isUsingTextureForMatrices?o.push(`#define BONETEXTURE`):o.push(`#define BonesPerMesh `+(e.bones.length+1))}else o.push(`#define NUM_BONE_INFLUENCERS 0`);let h=l.morphTargetManager?xe(l.morphTargetManager,o,c,l,!0,u,!1,d,f,!1):0;if(he(i,this._scene,o),n&&(o.push(`#define INSTANCES`),me(c),e.getRenderingMesh().hasThinInstances&&o.push(`#define THIN_INSTANCES`)),this.customShaderOptions&&this.customShaderOptions.defines)for(let e of this.customShaderOptions.defines)o.indexOf(e)===-1&&o.push(e);let g=l.bakedVertexAnimationManager;g&&g.isEnabled&&(o.push(`#define BAKED_VERTEX_ANIMATION_TEXTURE`),n&&c.push(`bakedVertexAnimationSettingsInstanced`));let _=o.join(`
`);if(s!==_){s=_;let e=`shadowMap`,t=[`world`,`mBones`,`viewProjection`,`diffuseMatrix`,`lightDataSM`,`depthValuesSM`,`biasAndScaleSM`,`morphTargetInfluences`,`morphTargetCount`,`boneTextureInfo`,`softTransparentShadowSM`,`morphTargetTextureInfo`,`morphTargetTextureIndices`,`bakedVertexAnimationSettings`,`bakedVertexAnimationTextureSizeInverted`,`bakedVertexAnimationTime`,`bakedVertexAnimationTexture`],n=[`diffuseSampler`,`boneSampler`,`morphTargets`,`bakedVertexAnimationTexture`],i=[`Scene`,`Mesh`];if(fe(t),this.customShaderOptions){if(e=this.customShaderOptions.shaderName,this.customShaderOptions.attributes)for(let e of this.customShaderOptions.attributes)c.indexOf(e)===-1&&c.push(e);if(this.customShaderOptions.uniforms)for(let e of this.customShaderOptions.uniforms)t.indexOf(e)===-1&&t.push(e);if(this.customShaderOptions.samplers)for(let e of this.customShaderOptions.samplers)n.indexOf(e)===-1&&n.push(e)}let o=this._scene.getEngine();a=o.createEffect(e,{attributes:c,uniformsNames:t,uniformBuffersNames:i,samplers:n,defines:_,fallbacks:m,onCompiled:null,onError:null,indexParameters:{maxSimultaneousMorphTargets:h},shaderLanguage:this._shaderLanguage},o),r.setEffect(a,s)}if(!a.isReady())return!1}return(this.useBlurExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(!this._blurPostProcesses||!this._blurPostProcesses.length)&&this._initializeBlurRTTAndPostProcesses(),!(this._kernelBlurXPostprocess&&!this._kernelBlurXPostprocess.isReady()||this._kernelBlurYPostprocess&&!this._kernelBlurYPostprocess.isReady()||this._boxBlurPostprocess&&!this._boxBlurPostprocess.isReady())}prepareDefines(e,n){let r=this._scene,i=this._light;r.shadowsEnabled&&i.shadowEnabled&&(e[`SHADOW`+n]=!0,this.useContactHardeningShadow?(e[`SHADOWPCSS`+n]=!0,this._filteringQuality===t.QUALITY_LOW?e[`SHADOWLOWQUALITY`+n]=!0:this._filteringQuality===t.QUALITY_MEDIUM&&(e[`SHADOWMEDIUMQUALITY`+n]=!0)):this.usePercentageCloserFiltering?(e[`SHADOWPCF`+n]=!0,this._filteringQuality===t.QUALITY_LOW?e[`SHADOWLOWQUALITY`+n]=!0:this._filteringQuality===t.QUALITY_MEDIUM&&(e[`SHADOWMEDIUMQUALITY`+n]=!0)):this.usePoissonSampling?e[`SHADOWPOISSON`+n]=!0:this.useExponentialShadowMap||this.useBlurExponentialShadowMap?e[`SHADOWESM`+n]=!0:(this.useCloseExponentialShadowMap||this.useBlurCloseExponentialShadowMap)&&(e[`SHADOWCLOSEESM`+n]=!0),i.needCube()&&(e[`SHADOWCUBE`+n]=!0))}bindShadowLight(e,n){let r=this._light,i=this._scene;if(!i.shadowsEnabled||!r.shadowEnabled)return;let a=this._getCamera(),o=this.getShadowMap();if(!o)return;if(!r.needCube()){let t=i.floatingOriginOffset,r=this.getTransformMatrix(),a=i.floatingOriginMode?ce(t,this._viewMatrix,this._projectionMatrix,C.Matrix[0]):r;n.setMatrix(`lightMatrix`+e,a)}let s=this.getShadowMapForRendering();this._filter===t.FILTER_PCF?(n.setDepthStencilTexture(`shadowTexture`+e,s),r._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),o.getSize().width,1/o.getSize().width,this.frustumEdgeFalloff,e)):this._filter===t.FILTER_PCSS?(n.setDepthStencilTexture(`shadowTexture`+e,s),n.setTexture(`depthTexture`+e,s),r._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),1/o.getSize().width,this._contactHardeningLightSizeUVRatio*o.getSize().width,this.frustumEdgeFalloff,e)):(n.setTexture(`shadowTexture`+e,s),r._uniformBuffer.updateFloat4(`shadowsInfo`,this.getDarkness(),this.blurScale/o.getSize().width,this.depthScale,this.frustumEdgeFalloff,e)),r._uniformBuffer.updateFloat2(`depthValues`,this.getLight().getDepthMinZ(a),this.getLight().getDepthMinZ(a)+this.getLight().getDepthMaxZ(a),e)}get viewMatrix(){return this._viewMatrix}get projectionMatrix(){return this._projectionMatrix}getTransformMatrix(){let e=this._scene;if(this._currentRenderId===e.getRenderId()&&this._currentFaceIndexCache===this._currentFaceIndex)return this._transformMatrix;this._currentRenderId=e.getRenderId(),this._currentFaceIndexCache=this._currentFaceIndex;let t=this._light.position;if(this._light.computeTransformedInformation()&&(t=this._light.transformedPosition),w.NormalizeToRef(this._light.getShadowDirection(this._currentFaceIndex),this._lightDirection),Math.abs(w.Dot(this._lightDirection,w.Up()))===1&&(this._lightDirection.z=1e-13),this._light.needProjectionMatrixCompute()||!this._cachedPosition||!this._cachedDirection||!t.equals(this._cachedPosition)||!this._lightDirection.equals(this._cachedDirection)){this._cachedPosition.copyFrom(t),this._cachedDirection.copyFrom(this._lightDirection),T.LookAtLHToRef(t,t.add(this._lightDirection),w.Up(),this._viewMatrix);let e=this.getShadowMap();if(e){let t=e.renderList;t&&this._light.setShadowProjectionMatrix(this._projectionMatrix,this._viewMatrix,t)}this._viewMatrix.multiplyToRef(this._projectionMatrix,this._transformMatrix)}return this._transformMatrix}recreateShadowMap(){let e=this._shadowMap;if(!e)return;let t=e.renderList;if(this._disposeRTTandPostProcesses(),this._initializeGenerator(),this.filter=this._filter,this._applyFilterValues(),t){this._shadowMap.renderList||(this._shadowMap.renderList=[]);for(let e of t)this._shadowMap.renderList.push(e)}else this._shadowMap.renderList=null}_disposeBlurPostProcesses(){this._shadowMap2&&=(this._shadowMap2.dispose(),null),this._boxBlurPostprocess&&=(this._boxBlurPostprocess.dispose(),null),this._kernelBlurXPostprocess&&=(this._kernelBlurXPostprocess.dispose(),null),this._kernelBlurYPostprocess&&=(this._kernelBlurYPostprocess.dispose(),null),this._blurPostProcesses=[]}_disposeRTTandPostProcesses(){this._shadowMap&&=(this._shadowMap.dispose(),null),this._disposeBlurPostProcesses()}_disposeSceneUBOs(){if(this._sceneUBOs){for(let e of this._sceneUBOs)e.dispose();this._sceneUBOs=[]}}dispose(e=!0){if(this._disposeRTTandPostProcesses(),this._disposeSceneUBOs(),this._light){if(this._light._shadowGenerators){let e=this._light._shadowGenerators.entries();for(let t=e.next();t.done!==!0;t=e.next()){let[e,n]=t.value;n===this&&this._light._shadowGenerators.delete(e)}this._light._shadowGenerators.size===0&&(this._light._shadowGenerators=null)}this._light._markMeshesAsLightDirty()}e&&(this.onBeforeShadowMapRenderMeshObservable.clear(),this.onBeforeShadowMapRenderObservable.clear(),this.onAfterShadowMapRenderMeshObservable.clear(),this.onAfterShadowMapRenderObservable.clear())}serialize(){let e={},t=this.getShadowMap();if(!t)return e;if(e.className=this.getClassName(),e.lightId=this._light.id,e.cameraId=this._camera?.id,e.id=this.id,e.mapSize=t.getRenderSize(),e.forceBackFacesOnly=this.forceBackFacesOnly,e.darkness=this.getDarkness(),e.transparencyShadow=this._transparencyShadow,e.frustumEdgeFalloff=this.frustumEdgeFalloff,e.bias=this.bias,e.normalBias=this.normalBias,e.usePercentageCloserFiltering=this.usePercentageCloserFiltering,e.useContactHardeningShadow=this.useContactHardeningShadow,e.contactHardeningLightSizeUVRatio=this.contactHardeningLightSizeUVRatio,e.filteringQuality=this.filteringQuality,e.useExponentialShadowMap=this.useExponentialShadowMap,e.useBlurExponentialShadowMap=this.useBlurExponentialShadowMap,e.useCloseExponentialShadowMap=this.useCloseExponentialShadowMap,e.useBlurCloseExponentialShadowMap=this.useBlurCloseExponentialShadowMap,e.usePoissonSampling=this.usePoissonSampling,e.depthScale=this.depthScale,e.blurBoxOffset=this.blurBoxOffset,e.blurKernel=this.blurKernel,e.blurScale=this.blurScale,e.useKernelBlur=this.useKernelBlur,e.renderList=[],t.renderList)for(let n=0;n<t.renderList.length;n++){let r=t.renderList[n];e.renderList.push(r.id)}return e}static Parse(e,n,r){let i=n.getLightById(e.lightId),a=e.cameraId===void 0?null:n.getCameraById(e.cameraId),o=r?r(e.mapSize,i,a):new t(e.mapSize,i,void 0,a),s=o.getShadowMap();if(e.renderList.length&&s){let t=new Set(e.renderList),r=s.renderList;r||=s.renderList=[];let i=n.meshes;for(let e of i)t.has(e.id)&&r.push(e)}return e.id!==void 0&&(o.id=e.id),o.forceBackFacesOnly=!!e.forceBackFacesOnly,e.darkness!==void 0&&o.setDarkness(e.darkness),e.transparencyShadow&&o.setTransparencyShadow(!0),e.frustumEdgeFalloff!==void 0&&(o.frustumEdgeFalloff=e.frustumEdgeFalloff),e.bias!==void 0&&(o.bias=e.bias),e.normalBias!==void 0&&(o.normalBias=e.normalBias),e.usePercentageCloserFiltering?o.usePercentageCloserFiltering=!0:e.useContactHardeningShadow?o.useContactHardeningShadow=!0:e.usePoissonSampling?o.usePoissonSampling=!0:e.useExponentialShadowMap?o.useExponentialShadowMap=!0:e.useBlurExponentialShadowMap?o.useBlurExponentialShadowMap=!0:e.useCloseExponentialShadowMap?o.useCloseExponentialShadowMap=!0:e.useBlurCloseExponentialShadowMap?o.useBlurCloseExponentialShadowMap=!0:e.useVarianceShadowMap?o.useExponentialShadowMap=!0:e.useBlurVarianceShadowMap&&(o.useBlurExponentialShadowMap=!0),e.contactHardeningLightSizeUVRatio!==void 0&&(o.contactHardeningLightSizeUVRatio=e.contactHardeningLightSizeUVRatio),e.filteringQuality!==void 0&&(o.filteringQuality=e.filteringQuality),e.depthScale&&(o.depthScale=e.depthScale),e.blurScale&&(o.blurScale=e.blurScale),e.blurBoxOffset&&(o.blurBoxOffset=e.blurBoxOffset),e.useKernelBlur&&(o.useKernelBlur=e.useKernelBlur),e.blurKernel&&(o.blurKernel=e.blurKernel),o}};L.CLASSNAME=`ShadowGenerator`,L.ForceGLSL=!1,L.FILTER_NONE=0,L.FILTER_EXPONENTIALSHADOWMAP=1,L.FILTER_POISSONSAMPLING=2,L.FILTER_BLUREXPONENTIALSHADOWMAP=3,L.FILTER_CLOSEEXPONENTIALSHADOWMAP=4,L.FILTER_BLURCLOSEEXPONENTIALSHADOWMAP=5,L.FILTER_PCF=6,L.FILTER_PCSS=7,L.QUALITY_HIGH=0,L.QUALITY_MEDIUM=1,L.QUALITY_LOW=2,L.DEFAULT_ALPHA_CUTOFF=.5,L._SceneComponentInitialization=e=>{throw i(`ShadowGeneratorSceneComponent`)},L._CascadedShadowGeneratorParser=null;var Ve={internalPickerForMesh:void 0},R=class e{constructor(e,t,n=Number.MAX_VALUE,r=S){this.origin=e,this.direction=t,this.length=n,this.epsilon=r}clone(){return new e(this.origin.clone(),this.direction.clone(),this.length)}intersectsBoxMinMax(t,n,r=0){let i=e._TmpVector3[0].copyFromFloats(t.x-r,t.y-r,t.z-r),a=e._TmpVector3[1].copyFromFloats(n.x+r,n.y+r,n.z+r),o=0,s=Number.MAX_VALUE,c,l,u,d;if(Math.abs(this.direction.x)<1e-7){if(this.origin.x<i.x||this.origin.x>a.x)return!1}else if(c=1/this.direction.x,l=(i.x-this.origin.x)*c,u=(a.x-this.origin.x)*c,u===-1/0&&(u=1/0),l>u&&(d=l,l=u,u=d),o=Math.max(l,o),s=Math.min(u,s),o>s)return!1;if(Math.abs(this.direction.y)<1e-7){if(this.origin.y<i.y||this.origin.y>a.y)return!1}else if(c=1/this.direction.y,l=(i.y-this.origin.y)*c,u=(a.y-this.origin.y)*c,u===-1/0&&(u=1/0),l>u&&(d=l,l=u,u=d),o=Math.max(l,o),s=Math.min(u,s),o>s)return!1;if(Math.abs(this.direction.z)<1e-7){if(this.origin.z<i.z||this.origin.z>a.z)return!1}else if(c=1/this.direction.z,l=(i.z-this.origin.z)*c,u=(a.z-this.origin.z)*c,u===-1/0&&(u=1/0),l>u&&(d=l,l=u,u=d),o=Math.max(l,o),s=Math.min(u,s),o>s)return!1;return!0}intersectsBox(e,t=0){return this.intersectsBoxMinMax(e.minimum,e.maximum,t)}intersectsSphere(e,t=0){let n=e.center.x-this.origin.x,r=e.center.y-this.origin.y,i=e.center.z-this.origin.z,a=n*n+r*r+i*i,o=e.radius+t,s=o*o;if(a<=s)return!0;let c=n*this.direction.x+r*this.direction.y+i*this.direction.z;return c<0?!1:a-c*c<=s}intersectsTriangle(t,n,r){let i=e._TmpVector3[0],a=e._TmpVector3[1],o=e._TmpVector3[2],s=e._TmpVector3[3],c=e._TmpVector3[4];n.subtractToRef(t,i),r.subtractToRef(t,a),w.CrossToRef(this.direction,a,o);let l=w.Dot(i,o);if(l===0)return null;let u=1/l;this.origin.subtractToRef(t,s);let d=w.Dot(s,o)*u;if(d<-this.epsilon||d>1+this.epsilon)return null;w.CrossToRef(s,i,c);let f=w.Dot(this.direction,c)*u;if(f<-this.epsilon||d+f>1+this.epsilon)return null;let p=w.Dot(a,c)*u;return p>this.length||p<0?null:new ge(1-d-f,d,p)}intersectsPlane(e){let t,n=w.Dot(e.normal,this.direction);if(Math.abs(n)<9.99999997475243e-7)return null;{let r=w.Dot(e.normal,this.origin);return t=(-e.d-r)/n,t<0?t<-9.99999997475243e-7?null:0:t}}intersectsAxis(e,t=0){switch(e){case`y`:{let e=(this.origin.y-t)/this.direction.y;return e>0?null:new w(this.origin.x+this.direction.x*-e,t,this.origin.z+this.direction.z*-e)}case`x`:{let e=(this.origin.x-t)/this.direction.x;return e>0?null:new w(t,this.origin.y+this.direction.y*-e,this.origin.z+this.direction.z*-e)}case`z`:{let e=(this.origin.z-t)/this.direction.z;return e>0?null:new w(this.origin.x+this.direction.x*-e,this.origin.y+this.direction.y*-e,t)}default:return null}}intersectsMesh(t,n,r,i=!1,a,o=!1){let s=C.Matrix[0];return t.getWorldMatrix().invertToRef(s),this._tmpRay?e.TransformToRef(this,s,this._tmpRay):this._tmpRay=e.Transform(this,s),t.intersects(this._tmpRay,n,r,i,a,o)}intersectsMeshes(e,t,n){n?n.length=0:n=[];for(let r=0;r<e.length;r++){let i=this.intersectsMesh(e[r],t);i.hit&&n.push(i)}return n.sort(this._comparePickingInfo),n}_comparePickingInfo(e,t){return e.distance<t.distance?-1:+(e.distance>t.distance)}intersectionSegment(t,n,r){let i=this.origin,a=C.Vector3[0],o=C.Vector3[1],s=C.Vector3[2],c=C.Vector3[3];n.subtractToRef(t,a),this.direction.scaleToRef(e._Rayl,s),i.addToRef(s,o),t.subtractToRef(i,c);let l=w.Dot(a,a),u=w.Dot(a,s),d=w.Dot(s,s),f=w.Dot(a,c),p=w.Dot(s,c),m=l*d-u*u,h,g=m,_,v=m;m<e._Smallnum?(h=0,g=1,_=p,v=d):(h=u*p-d*f,_=l*p-u*f,h<0?(h=0,_=p,v=d):h>g&&(h=g,_=p+u,v=d)),_<0?(_=0,-f<0?h=0:-f>l?h=g:(h=-f,g=l)):_>v&&(_=v,-f+u<0?h=0:-f+u>l?h=g:(h=-f+u,g=l));let y=Math.abs(h)<e._Smallnum?0:h/g,b=Math.abs(_)<e._Smallnum?0:_/v,x=C.Vector3[4];s.scaleToRef(b,x);let S=C.Vector3[5];a.scaleToRef(y,S),S.addInPlace(c);let T=C.Vector3[6];return S.subtractToRef(x,T),b>0&&b<=this.length&&T.lengthSquared()<r*r?S.length():-1}update(t,n,r,i,a,o,s,c=!1){if(c){e._RayDistant||=e.Zero(),e._RayDistant.unprojectRayToRef(t,n,r,i,T.IdentityReadOnly,o,s);let c=C.Matrix[0];a.invertToRef(c),e.TransformToRef(e._RayDistant,c,this)}else this.unprojectRayToRef(t,n,r,i,a,o,s);return this}static Zero(){return new e(w.Zero(),w.Zero())}static CreateNew(t,n,r,i,a,o,s){return e.Zero().update(t,n,r,i,a,o,s)}static CreateNewFromTo(t,n,r=T.IdentityReadOnly){let i=new e(new w(0,0,0),new w(0,0,0));return e.CreateFromToToRef(t,n,i,r)}static CreateFromToToRef(t,n,r,i=T.IdentityReadOnly){r.origin.copyFrom(t);let a=n.subtractToRef(t,r.direction);return r.length=Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z),r.direction.normalize(),e.TransformToRef(r,i,r)}static Transform(t,n){let r=new e(new w(0,0,0),new w(0,0,0));return e.TransformToRef(t,n,r),r}static TransformToRef(e,t,n){w.TransformCoordinatesToRef(e.origin,t,n.origin),w.TransformNormalToRef(e.direction,t,n.direction),n.length=e.length,n.epsilon=e.epsilon;let r=n.direction,i=r.length();if(i!==0&&i!==1){let e=1/i;r.x*=e,r.y*=e,r.z*=e,n.length*=i}return n}unprojectRayToRef(e,n,r,i,a,o,s){let c=C.Matrix[0];a.multiplyToRef(o,c),c.multiplyToRef(s,c),c.invert();let l=t.LastCreatedEngine,u=C.Vector3[0];u.x=e/r*2-1,u.y=-(n/i*2-1),u.z=l?.useReverseDepthBuffer?1:l?.isNDCHalfZRange?0:-1;let d=C.Vector3[1].copyFromFloats(u.x,u.y,1-1e-8),f=C.Vector3[2],p=C.Vector3[3];w.TransformCoordinatesToRef(u,c,f),w.TransformCoordinatesToRef(d,c,p),this.origin.copyFrom(f),p.subtractToRef(f,this.direction),this.direction.normalize()}};R._TmpVector3=ee(6,w.Zero),R._RayDistant=R.Zero(),R._Smallnum=1e-8,R._Rayl=1e9;function z(e,t,n,r,i,a=!1){let o=R.Zero();return B(e,t,n,r,o,i,a),o}function B(e,t,n,r,i,a,o=!1,s=!1){let c=e.getEngine();if(!a&&!(a=e.activeCamera)&&!(a=e.cameraToUseForPointers))return e;let l=a.viewport,u=c.getRenderHeight(),{x:d,y:f,width:p,height:m}=l.toGlobal(c.getRenderWidth(),u),h=1/c.getHardwareScalingLevel();return t=t*h-d,n=n*h-(u-f-m),i.update(t,n,p,m,r||T.IdentityReadOnly,o?T.IdentityReadOnly:a.getViewMatrix(),a.getProjectionMatrix(),s),e}function He(e,t,n,r){let i=R.Zero();return V(e,t,n,i,r),i}function V(e,t,n,r,i){if(!p)return e;let a=e.getEngine();if(!i&&!(i=e.activeCamera)&&!(i=e.cameraToUseForPointers))throw Error(`Active camera not set`);let o=i.viewport,s=a.getRenderHeight(),{x:c,y:l,width:u,height:d}=o.toGlobal(a.getRenderWidth(),s),f=T.Identity(),m=1/a.getHardwareScalingLevel();return t=t*m-c,n=n*m-(s-l-d),r.update(t,n,u,d,f,f,i.getProjectionMatrix()),e}function H(e,t,n,r,i,a,o,s){return U(e,n,r,t(r,n.enableDistantPicking),i,a,o,s)}function U(e,t,n,r,i,a,o,s){let c=t.intersects(r,i,o,a,n,s);return!c||!c.hit||!i&&e!=null&&c.distance>=e.distance?null:c}function Ue(e,t){return e===`InstancedLinesMesh`||e===`LinesMesh`?t.intersectionThreshold:0}function We(e){let t=e.getClassName();if(t===`GreasedLineMesh`)return{rawBoundingInfo:null,intersectionThreshold:0};let n=e.rawBoundingInfo;return{rawBoundingInfo:n,intersectionThreshold:n?Ue(t,e):0}}function Ge(e,t,n,r,i){let a=e(n,t.enableDistantPicking);return!a.intersectsSphere(r.boundingSphere,i)||!a.intersectsBox(r.boundingBox,i)?null:a}function W(e,t,n,r,i,a){let o=null,s=!!(e.activeCameras&&e.activeCameras.length>1&&e.cameraToUseForPointers!==e.activeCamera),c=e.cameraToUseForPointers||e.activeCamera,l=Ve.internalPickerForMesh||H,u=l===H;for(let d=0;d<e.meshes.length;d++){let f=e.meshes[d];if(n){if(!n(f,-1))continue}else if(!f.isEnabled()||!f.isVisible||!f.isPickable)continue;let p=s&&f.isWorldMatrixCameraDependent(),m=f.computeWorldMatrix(p,c);if(f.hasThinInstances&&f.thinInstanceEnablePicking){let e=l(o,t,f,m,!0,!0,a);if(e){if(i)return e;let{rawBoundingInfo:s,intersectionThreshold:c}=We(f),d=f._thinInstanceDataStorage.matrixData;if(d){let e=C.Matrix[0],p=C.Matrix[1],h=Math.min(f.thinInstanceCount,d.length>>4);for(let g=0;g<h;g++){if(n&&!n(f,g))continue;T.FromArrayToRef(d,g<<4,e),e.multiplyToRef(m,p);let h=u&&s?Ge(t,f,p,s,c):null;if(u&&s&&!h)continue;let _=u&&h?U(o,f,p,h,r,i,a,!0):l(o,t,f,p,r,i,a,!0);if(_&&(o=_,o.thinInstanceIndex=g,r))return o}}}}else{let e=l(o,t,f,m,r,i,a);if(e&&(o=e,r))return o}}return o||new p}function Ke(e,t,n,r){if(!p)return null;let i=[],a=!!(e.activeCameras&&e.activeCameras.length>1&&e.cameraToUseForPointers!==e.activeCamera),o=e.cameraToUseForPointers||e.activeCamera,s=Ve.internalPickerForMesh||H,c=s===H;for(let l=0;l<e.meshes.length;l++){let u=e.meshes[l];if(n){if(!n(u,-1))continue}else if(!u.isEnabled()||!u.isVisible||!u.isPickable)continue;let d=a&&u.isWorldMatrixCameraDependent(),f=u.computeWorldMatrix(d,o);if(u.hasThinInstances&&u.thinInstanceEnablePicking){if(s(null,t,u,f,!0,!0,r)){let{rawBoundingInfo:e,intersectionThreshold:a}=We(u),o=u._thinInstanceDataStorage.matrixData;if(o){let l=C.Matrix[0],d=C.Matrix[1],p=Math.min(u.thinInstanceCount,o.length>>4);for(let m=0;m<p;m++){if(n&&!n(u,m))continue;T.FromArrayToRef(o,m<<4,l),l.multiplyToRef(f,d);let p=c&&e?Ge(t,u,d,e,a):null;if(c&&e&&!p)continue;let h=c&&p?U(null,u,d,p,!1,!1,r,!0):s(null,t,u,d,!1,!1,r,!0);h&&(h.thinInstanceIndex=m,i.push(h))}}}}else{let e=s(null,t,u,f,!1,!1,r);e&&i.push(e)}}return i}function qe(e,t,n,r,i,a){if(!p)return null;let o=W(e,r=>(e._tempPickingRay||=R.Zero(),B(e,t,n,r,e._tempPickingRay,a||null),e._tempPickingRay),r,i,!0);return o&&(o.ray=z(e,t,n,T.Identity(),a||null)),o}function Je(e,t,n,r,i,a,o,s=!1){let c=W(e,(r,i)=>(e._tempPickingRay||=R.Zero(),B(e,t,n,r,e._tempPickingRay,a||null,!1,i),e._tempPickingRay),r,i,!1,o);return c&&(c.ray=z(e,t,n,T.Identity(),a||null)),c}function Ye(e,t,n,r,i){let a=W(e,n=>(e._pickWithRayInverseMatrix||=T.Identity(),n.invertToRef(e._pickWithRayInverseMatrix),e._cachedRayForTransform||=R.Zero(),R.TransformToRef(t,e._pickWithRayInverseMatrix,e._cachedRayForTransform),e._cachedRayForTransform),n,r,!1,i);return a&&(a.ray=t),a}function Xe(e,t,n,r,i,a){return Ke(e,r=>z(e,t,n,r,i||null),r,a)}function Ze(e,t,n,r){return Ke(e,n=>(e._pickWithRayInverseMatrix||=T.Identity(),n.invertToRef(e._pickWithRayInverseMatrix),e._cachedRayForTransform||=R.Zero(),R.TransformToRef(t,e._pickWithRayInverseMatrix,e._cachedRayForTransform),e._cachedRayForTransform),n,r)}function Qe(e,t,n=100,r,i){r||=e.getWorldMatrix(),t.length=n,i?t.origin.copyFrom(i):t.origin.copyFrom(e.position);let a=C.Vector3[2];a.set(0,0,e._scene.useRightHandedSystem?-1:1);let o=C.Vector3[3];return w.TransformNormalToRef(a,r,o),w.NormalizeToRef(o,t.direction),t}function $e(e,t){t&&(t.prototype.getForwardRay=function(e=100,t,n){return Qe(this,new R(w.Zero(),w.Zero(),e),e,t,n)},t.prototype.getForwardRayToRef=function(e,t=100,n,r){return Qe(this,e,t,n,r)}),e&&(l._IsPickingAvailable=!0,e.prototype.createPickingRay=function(e,t,n,r,i=!1){return z(this,e,t,n,r,i)})}var et=`
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
}`,tt=`
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
}`;Se();var nt=class{surface=Array(8).fill(0);slots;constructor(e){this.slots=Array.from({length:2},(t,n)=>{let r=new Ce(`muzzle-light-`+n,w.Zero(),e);return r.diffuse=new ne(1,.48,.12),r.specular=new ne(1,.7,.3),r.range=140,r.intensity=0,{light:r,age:1,strength:0}})}emit(e,t,n,r){let i=this.slots.reduce((e,t)=>e.age>=t.age?e:t);i.light.position.set(e,Math.max(8,t),n),i.age=0,i.strength=Math.min(2.3,r)}update(e){this.slots.forEach((t,n)=>{t.age+=e;let r=Math.max(0,1-t.age/.38)**2;t.light.intensity=r*t.strength*60;let i=t.light.position,a=n*4;this.surface[a]=i.x,this.surface[a+1]=i.y,this.surface[a+2]=i.z,this.surface[a+3]=r*t.strength})}reset(){for(let e of this.slots)e.age=1;this.update(0)}dispose(){for(let e of this.slots)e.light.dispose()}},rt=`uniform vec4 uMuzzleLights[2];
vec3 muzzleSurfaceLight(vec3 p,vec3 N,vec3 V){
 vec3 result=vec3(0.);
 for(int i=0;i<2;i++){
  vec4 light=uMuzzleLights[i];if(light.w<=0.)continue;
  vec3 delta=light.xyz-p;float d2=dot(delta,delta);
  vec3 L=normalize(delta);vec3 H=normalize(L+V);
  float attenuation=pow(max(0.,1.-d2/19600.),2.);
  float spec=pow(max(0.,dot(N,H)),24.);
  result+=vec3(1.,.32,.045)*light.w*attenuation*(spec*.7+max(0.,dot(N,L))*.025);
 }
 return result;
}`,it=class{capacity;tint=[1,.8,.45];colors;origins;motions;cursor=0;count=0;expires=0;dirty=!1;constructor(e){this.capacity=e,this.colors=new Float32Array(e*3),this.origins=new Float32Array(e*4),this.motions=new Float32Array(e*4),this.clear()}add(e,t,n,r,i,a,o,s,c=!1){this.colors.set(this.tint,this.cursor*3);let l=this.cursor*4;this.origins[l]=e,this.origins[l+1]=t,this.origins[l+2]=n,this.origins[l+3]=r,this.motions[l]=i,this.motions[l+1]=a,this.motions[l+2]=o,this.motions[l+3]=c?-s:s,this.cursor=(this.cursor+1)%this.capacity,this.count=Math.min(this.capacity,this.count+1),this.expires=Math.max(this.expires,r+s),this.dirty=!0}clear(){this.origins.fill(0);for(let e=3;e<this.origins.length;e+=4)this.origins[e]=-1e6;this.cursor=this.count=this.expires=0,this.dirty=!0}};function at(){let e=new Uint8Array(262144),t=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},n=(e,n)=>{let r=Math.floor(e),i=Math.floor(n),a=e-r,o=n-i,s=a*a*(3-2*a),c=o*o*(3-2*o);return(t(r,i)*(1-s)+t(r+1,i)*s)*(1-c)+(t(r,i+1)*(1-s)+t(r+1,i+1)*s)*c};for(let t=0;t<16;t++)for(let r=0;r<64;r++)for(let i=0;i<64;i++){let a=(i-31.5)/29,o=(r-31.5)/29,s=t*.19,c=n(i/12+s,r/12-s)*.7+n(i/5-s,r/5+s)*.3,l=Math.max(0,Math.min(1,(1-Math.hypot(a,o)+(c-.5)*.6)*2)),u=(((t>>2)*64+r)*256+t%4*64+i)*4;e[u]=e[u+1]=e[u+2]=180+c*65,e[u+3]=l*l*190}return e}var ot=class{scene;atlas;steam;sparks;next=0;rotation=0;ships;right=new w(1,0,0);up=new w(0,1,0);point=w.Zero();planes=Array.from({length:6},()=>new re(0,0,0,0));beforeRender=()=>{let e=this.scene.activeCamera;if(!e)return;let t=e.getWorldMatrix().m;this.right.set(t[0],t[1],t[2]),this.up.set(t[4],t[5],t[6]);for(let e of[this.steam,this.sparks])e.material.setVector3(`cameraRight`,this.right),e.material.setVector3(`cameraUp`,this.up)};constructor(e){this.scene=e,this.atlas=a.CreateRGBATexture(at(),256,256,e,!1,!1,N.BILINEAR_SAMPLINGMODE),this.atlas.hasAlpha=!0,this.atlas.wrapU=this.atlas.wrapV=N.CLAMP_ADDRESSMODE,this.steam=this.layer(`energy-steam-gpu`,1024,!1),this.sparks=this.layer(`energy-contact-sparks-gpu`,512,!0),e.onBeforeRenderObservable.add(this.beforeRender)}layer(e,t,n){let r=new it(t),i=new s(e,this.scene);i.setVerticesData(`position`,[-1,-1,0,1,-1,0,-1,1,0,1,1,0]),i.setIndices([0,1,2,2,1,3]),i.alwaysSelectAsActiveMesh=!0,i.isPickable=!1;let a=new o(e,this.scene,{vertexSource:`precision highp float;
attribute vec3 position;
attribute vec4 birth;
attribute vec4 motion;
attribute vec3 particleTint;
varying vec3 tint;
uniform float clock;
uniform mat4 viewProjection;
uniform vec3 cameraRight;
uniform vec3 cameraUp;
varying vec2 uv;
varying float ageRatio;
varying float visibility;
varying float hullFlow;
#include<instancesDeclaration>
void main(){
#include<instancesVertex>
 tint=particleTint;float age=clock-birth.w;
 float life=max(abs(motion.w),.001);
 hullFlow=step(motion.w,0.);
 float t=clamp(age/life,0.,1.);
 ageRatio=t;visibility=step(0.,age)*(1.-step(life,age));
 vec3 center=birth.xyz+motion.xyz*max(age,0.);
 center.y+=${n?`mix(-7.,0.,hullFlow)`:`1.`}*age*age;
 float seed=fract(sin(birth.x*12.1+birth.z*7.3+birth.w*5.7)*43758.54);
 float angle=seed*6.283+age*.22;
 vec2 p=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*position.xy;
 float size=${n?`(.35+.2*seed)*(1.-t*.8)`:`(2.8+seed*2.)*(.6+t*1.5)`};
 uv=position.xy*.5+.5;
 gl_Position=viewProjection*vec4(center+(cameraRight*p.x+cameraUp*p.y)*size*visibility,1.);
}`,fragmentSource:`precision highp float;
uniform sampler2D atlas;
varying vec3 tint;
varying vec2 uv;
varying float ageRatio;
varying float visibility;
varying float hullFlow;
void main(){
 ${n?`float a=exp(-dot(uv-.5,uv-.5)*18.)*(1.-ageRatio)*visibility;
 gl_FragColor=vec4(mix(tint,vec3(1.),.25),a);`:`float frame=ageRatio*15.;float first=floor(frame),second=min(first+1.,15.);
 vec2 local=(uv*61.+1.5)/64.;
 vec2 cellA=vec2(mod(first,4.),floor(first/4.));
 vec2 cellB=vec2(mod(second,4.),floor(second/4.));
 vec4 tex=mix(texture2D(atlas,(cellA+local)/4.),texture2D(atlas,(cellB+local)/4.),fract(frame));
 float envelope=smoothstep(0.,.12,ageRatio)*(1.-smoothstep(.35,1.,ageRatio));
 gl_FragColor=vec4(tex.rgb*vec3(.83,.94,1.),tex.a*envelope*.22*visibility);`}
}`},{attributes:[`position`,`birth`,`motion`,`particleTint`],uniforms:[`world`,`viewProjection`,`clock`,`cameraRight`,`cameraUp`],samplers:[`atlas`],needAlphaBlending:!0});a.setFloat(`clock`,0),a.setVector3(`cameraRight`,this.right),a.setVector3(`cameraUp`,this.up),a.setTexture(`atlas`,this.atlas),a.backFaceCulling=!1,a.disableDepthWrite=!0,a.alphaMode=n?k.ALPHA_ADD:k.ALPHA_COMBINE,i.material=a;let c=new Float32Array(t*16);for(let e=0;e<t;e++)for(let t of[0,5,10,15])c[e*16+t]=1;return i.thinInstanceSetBuffer(`matrix`,c,16,!0),i.thinInstanceSetBuffer(`birth`,r.origins,4,!1),i.thinInstanceSetBuffer(`particleTint`,r.colors,3,!1),i.thinInstanceSetBuffer(`motion`,r.motions,4,!1),i.setEnabled(!1),{births:r,mesh:i,material:a}}visible(e,t){this.point.set(e,5,t);for(let e of this.planes)if(e.dotCoordinate(this.point)<-80)return!1;return!0}update(e){if(e.ships!==this.ships||e.mode===`port`){this.ships=e.ships,this.next=e.elapsed;for(let e of[this.steam,this.sparks])e.births.clear(),e.mesh.setEnabled(!1);if(e.mode===`port`)return}let t=e.elapsed,n=this.scene.activeCamera;if(e.mode===`battle`&&t>=this.next&&n){this.next=t+.16,f.GetPlanesToRef(this.scene.getTransformMatrix(),this.planes);let r=80,i=48;for(let a=0;a<e.beams.length;a++){let o=e.beams[(a+this.rotation)%e.beams.length];if(!o.active)continue;let s=e.ships[o.owner],c=s?.heading??Math.atan2(o.endX-o.x,o.endZ-o.z),l=Math.sin(c),u=Math.cos(c);this.sparks.births.tint=F(s?.vessel);let d=o.x-l*35,f=o.z-u*35;if((d-n.position.x)**2+(f-n.position.z)**2<2200**2&&this.visible(d,f)){r>0&&(this.steam.births.add(d,4,f,t,u*.5,4,-l*.5,1.6),r--);for(let e of[-1,1])i>0&&(this.sparks.births.add(d-l*5+u*e*3,3,f-u*5-l*e*3,t,l*14,1,u*14,1.2,!0),i--)}let p=o.endX-o.x,m=o.endZ-o.z,h=Math.min(18,Math.max(1,Math.ceil(Math.hypot(p,m)/45)));for(let e=0;e<h&&r>0;e++){let i=(e+.25+(Math.sin(e*19+t*3)+1)*.25)/h,a=o.x+p*i,s=o.z+m*i,c=(a-n.position.x)**2+(s-n.position.z)**2;c>2200**2||!this.visible(a,s)||c>900**2&&e%3!=0||(this.steam.births.add(a,1,s,t,Math.sin(e*7+o.owner)*2,2+Math.cos(e*4),Math.cos(e*7)*2,1.6),r--)}let g=(o.endX-n.position.x)**2+(o.endZ-n.position.z)**2;if(o.contact&&g<2200**2&&this.visible(o.endX,o.endZ)){for(let e=0;e<(g<900**2?4:1)&&i>0;e++){let n=e*2.399+t*5;this.sparks.births.add(o.endX,3,o.endZ,t,Math.cos(n)*9,8+e,Math.sin(n)*9,.8),i--}r>0&&(this.steam.births.add(o.endX,3,o.endZ,t,Math.sin(t)*2,5,Math.cos(t)*2,1.6),r--)}}this.rotation++}for(let e of[this.steam,this.sparks])e.material.setFloat(`clock`,t),e.mesh.setEnabled(e.births.count>0&&t<e.births.expires),e.mesh.thinInstanceCount=e.births.count,e.births.dirty&&(e.mesh.thinInstanceBufferUpdated(`birth`),e.mesh.thinInstanceBufferUpdated(`motion`),e.mesh.thinInstanceBufferUpdated(`particleTint`),e.births.dirty=!1)}dispose(){this.scene.onBeforeRenderObservable.removeCallback(this.beforeRender);for(let e of[this.steam,this.sparks])e.mesh.dispose(),e.material.dispose();this.atlas.dispose()}},st=class{scene;contactParticles;mesh;material;starts=new Float32Array(192);ends=new Float32Array(192);colors=new Float32Array(144);widths=new Float32Array(48);cameraPosition=w.Zero();particles;beforeRender=()=>{this.scene.activeCamera&&(this.cameraPosition.copyFrom(this.scene.activeCamera.position),this.material.setVector3(`eye`,this.cameraPosition))};constructor(e,t=!1){this.scene=e,this.contactParticles=t,t&&(this.particles=new ot(e)),this.mesh=new s(`native-energy-ribbons`,e),this.mesh.setVerticesData(`position`,[0,-1,0,1,-1,0,0,1,0,1,1,0]),this.mesh.setIndices([0,1,2,2,1,3]),this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.isPickable=!1,this.material=new o(`energy-ribbon`,e,{vertexSource:`precision highp float;
attribute vec3 position;
attribute vec4 beamStart;
attribute vec4 beamEnd;
attribute float beamWidth;
attribute vec3 beamColor;
varying vec3 tint;
uniform mat4 viewProjection;
uniform vec3 eye;
varying vec2 ribbon;
varying float opacity;
varying float beamLength;
varying float phase;
#include<instancesDeclaration>
void main(){
#include<instancesVertex>
 vec3 delta=beamEnd.xyz-beamStart.xyz;
 float len=max(length(delta),.001);
 vec3 axis=delta/len;
 vec3 center=mix(beamStart.xyz,beamEnd.xyz,position.x);
 vec3 crossAxis=cross(axis,eye-center);
 vec3 side=length(crossAxis)>.001?normalize(crossAxis):vec3(1.,0.,0.);
 tint=beamColor;ribbon=position.xy;opacity=beamStart.w;beamLength=len;phase=beamEnd.w;
 gl_Position=viewProjection*vec4(center+side*position.y*beamWidth,1.);
}`,fragmentSource:`precision highp float;
varying vec2 ribbon;
varying float opacity;
varying float beamLength;
varying float phase;
varying vec3 tint;
float hash(float x){return fract(sin(x*127.1)*43758.5453);}
float noise(float x){float i=floor(x),f=fract(x);return mix(hash(i),hash(i+1.),f*f*(3.-2.*f));}
void main(){
 float y=abs(ribbon.y);
 float core=exp(-y*y*100.);
 float glow=exp(-y*y*9.);
 float x=ribbon.x*beamLength/12.;
 float tick=phase*16.;
 float t=floor(tick),blend=smoothstep(0.,1.,fract(tick));
 float bolts=0.;
 for(int i=0;i<3;i++){
  float seed=float(i)*17.;
  float a=mix(noise(x*2.+seed+t*11.),noise(x*2.+seed+(t+1.)*11.),blend);
  float b=noise(x*.7+seed+phase*3.);
  float path=(a-.5)*.65+(b-.5)*.3;
  float width=max(fwidth(ribbon.y)*.85,.009);
  bolts+=1.-smoothstep(width,width*2.,abs(ribbon.y-path));
 }
 float endFade=smoothstep(0.,.012,ribbon.x)*(1.-smoothstep(.988,1.,ribbon.x));
 float pulse=.94+.06*sin(phase*24.);
 vec3 color=tint*glow*.7+mix(tint,vec3(1.),.45)*bolts*.55+mix(tint,vec3(1.),.85)*core;
 float alpha=clamp(glow*.18+core+bolts*.65,0.,1.)*opacity*endFade*pulse;
 gl_FragColor=vec4(color,alpha);
}`},{attributes:[`position`,`beamStart`,`beamEnd`,`beamWidth`,`beamColor`],uniforms:[`world`,`viewProjection`,`eye`],needAlphaBlending:!0}),this.material.backFaceCulling=!1,this.material.disableDepthWrite=!0,this.material.alphaMode=k.ALPHA_ADD,this.material.setVector3(`eye`,this.cameraPosition),this.mesh.material=this.material;let n=new Float32Array(768);for(let e=0;e<48;e++)for(let t of[0,5,10,15])n[e*16+t]=1;this.mesh.thinInstanceSetBuffer(`matrix`,n,16,!0),this.mesh.thinInstanceSetBuffer(`beamStart`,this.starts,4,!1),this.mesh.thinInstanceSetBuffer(`beamEnd`,this.ends,4,!1),this.mesh.setEnabled(!1),e.onBeforeRenderObservable.add(this.beforeRender),this.mesh.thinInstanceSetBuffer(`beamColor`,this.colors,3,!1),this.mesh.thinInstanceSetBuffer(`beamWidth`,this.widths,1,!1)}update(e){this.particles?.update(e);let t=0;if(e.mode!==`port`)for(let n of e.beams){if(t===48)break;if(Math.hypot(n.endX-n.x,n.endZ-n.z)<.01)continue;this.colors.set(F(e.ships?.[n.owner]?.vessel),t*3),this.widths[t]=we(e.ships?.[n.owner]??{}).width*(.2+.8*Math.sqrt(n.power??1));let r=t++*4;this.starts[r]=n.x,this.starts[r+1]=3,this.starts[r+2]=n.z,this.starts[r+3]=n.active?n.power??1:Math.min(1,Math.max(0,n.life)/.65)**2*(n.power??1),this.ends[r]=n.endX,this.ends[r+1]=3,this.ends[r+2]=n.endZ,this.ends[r+3]=e.elapsed}this.mesh.setEnabled(t>0),this.mesh.thinInstanceCount=t,t&&(this.mesh.thinInstanceBufferUpdated(`beamStart`),this.mesh.thinInstanceBufferUpdated(`beamEnd`),this.mesh.thinInstanceBufferUpdated(`beamWidth`),this.mesh.thinInstanceBufferUpdated(`beamColor`))}dispose(){this.particles?.dispose(),this.scene.onBeforeRenderObservable.removeCallback(this.beforeRender),this.mesh.dispose(),this.material.dispose()}};function G(e=127,t=0){let n=((Number.isFinite(e)?Math.max(20,Math.min(510,e)):127)/127)**.8,r=Math.abs(Math.trunc(t))%3;return{variant:r,height:16*n*[1.15,.8,1][r],width:8*n*[.75,1.35,1][r],duration:1.6+.45*n,scale:n}}function K(e=65,t=0,n=`torpedo`){let r=Math.max(.45,((Number.isFinite(e)?Math.max(0,Math.min(400,e)):65)/65)**.45),i=Math.abs(Math.trunc(t))%3;return{variant:3+i,height:27*r*[1,.9,1.1][i],width:(n===`mine`?23:18)*r,duration:2+.7*r,scale:r}}var q=12,J=4,Y=65,ct=class{scene;mesh;material;origins=new Float32Array(16640);profiles=new Float32Array(16640);ends=new Float64Array(64);cursor=0;dirty=!1;constructor(e,t){this.scene=e,this.mesh=new s(`shell-water-columns`,e);let n=[],r=[];for(let e=0;e<64;e++){let t=e*Y;for(let e=0;e<=J;e++)for(let t=0;t<=q;t++)n.push(t/q,e/J,0);for(let e=0;e<J;e++)for(let n=0;n<q;n++){let i=t+e*13+n;r.push(i,i+1,i+q+1,i+1,i+q+2,i+q+1)}}this.mesh.setVerticesData(`position`,n),this.mesh.setIndices(r),this.mesh.setVerticesData(`birth`,this.origins,!0,4),this.mesh.setVerticesData(`profile`,this.profiles,!0,4),this.material=new o(`shell-water-column-material`,e,{vertexSource:`precision highp float;
attribute vec3 position;attribute vec4 birth;attribute vec4 profile;
uniform mat4 viewProjection;uniform vec3 eye;uniform float clock;
varying vec2 uv;varying float age;varying float style;varying float seed;
void main(){
 age=(clock-birth.w)/max(.001,profile.z);style=profile.w;seed=fract(birth.x*.173+birth.z*.137);
 uv=position.xy;
 if(profile.z<=0.||age<0.||age>=1.){gl_Position=vec4(2.,2.,2.,1.);return;}
 float angle=position.x*6.283185+seed*6.283185;
 float rise=smoothstep(0.,.22,age)*(1.-smoothstep(.32,1.,age));
 float h=position.y;
 float underwater=step(2.5,style);
 float taper=mix(.25+.1*sin(h*3.141593),.32+.12*sin(h*3.141593),underwater);
 float irregular=1.+.13*sin(angle*3.+h*7.+seed*9.)+.09*sin(angle*5.-h*11.);
 float radius=profile.y*taper*irregular*(.65+age);
 vec3 p=birth.xyz+vec3(cos(angle)*radius,0.,sin(angle)*radius);
 p.y+=h*profile.x*(.08+.92*rise)*(1.+.06*sin(angle*3.+seed*4.));
 gl_Position=viewProjection*vec4(p,1.);

}`,fragmentSource:`precision highp float;
uniform sampler2D foam;varying vec2 uv;varying float age;varying float style;varying float seed;
void main(){
 float y=uv.y;
 vec2 flow=vec2(uv.x*3.+seed,uv.y*1.3-age*.16);
 float cloud=texture2D(foam,fract(flow)).a;
 float detail=texture2D(foam,fract(flow*3.1+seed)).a;
 float top=1.-smoothstep(.78,1.,y);
 float fade=smoothstep(0.,.06,age)*(1.-smoothstep(.45,1.,age));
 float alpha=top*fade*smoothstep(0.,.06,y)*(.2+cloud*.65+detail*.35);
 gl_FragColor=vec4(mix(vec3(.43,.66,.73),vec3(.91,.98,1.),clamp(cloud+y*.45,0.,1.)),alpha*.9);
}`},{attributes:[`position`,`birth`,`profile`],uniforms:[`viewProjection`,`eye`,`clock`],samplers:[`foam`],needAlphaBlending:!0}),this.material.setTexture(`foam`,t),this.material.backFaceCulling=!0,this.material.disableDepthWrite=!0,this.mesh.material=this.material,this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setEnabled(!1)}emit(e,t,n,r,i,a,o=`torpedo`){let s=this.cursor++%64,c=a===void 0?G(n,r):K(a,r,o);for(let n=0;n<Y;n++){let r=s*Y*4+n*4;this.origins.set([e,.35,t,i],r),this.profiles.set([c.height,c.width,c.duration,c.variant],r)}this.ends[s]=i+c.duration,this.dirty=!0}update(e){let t=this.ends.some(t=>t>e);this.mesh.setEnabled(t),t&&(this.dirty&&=(this.mesh.updateVerticesData(`birth`,this.origins),this.mesh.updateVerticesData(`profile`,this.profiles),!1),this.material.setFloat(`clock`,e),this.material.setVector3(`eye`,this.scene.activeCamera.position))}reset(){this.ends.fill(0),this.profiles.fill(0),this.dirty=!0,this.mesh.setEnabled(!1)}dispose(){this.mesh.dispose(),this.material.dispose()}},X=`clipPlaneFragmentDeclaration2`,lt=`#ifdef CLIPPLANE
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
`;r.IncludesShadersStore[X]||(r.IncludesShadersStore[X]=lt);var ut={name:X,shader:lt},dt=`gpuRenderParticlesPixelShader`,ft=`precision highp float;
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
`;r.ShadersStore[dt]||(r.ShadersStore[dt]=ft);var pt=[ut,De,I,ke,Oe,Ae,Me,Ne,je];for(let e of pt)r.IncludesShadersStore[e.name]||(r.IncludesShadersStore[e.name]=e.shader);var Z=`clipPlaneVertexDeclaration2`,mt=`#ifdef CLIPPLANE
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
`;r.IncludesShadersStore[Z]||(r.IncludesShadersStore[Z]=mt);var ht={name:Z,shader:mt},gt=`gpuRenderParticlesVertexShader`,_t=`precision highp float;uniform mat4 view;uniform mat4 projection;uniform vec2 translationPivot;uniform vec3 worldOffset;
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
}`;r.ShadersStore[gt]||(r.ShadersStore[gt]=_t);var vt=[ht,Pe,I,Fe,Ie,Le];for(let e of vt)r.IncludesShadersStore[e.name]||(r.IncludesShadersStore[e.name]=e.shader);var yt=class{constructor(e,t,n=3,r){this._engine=e,this._label=r,this._engine._storageBuffers.push(this),this._create(t,n)}_create(e,t){this._bufferSize=e,this._creationFlags=t,this._buffer=this._engine.createStorageBuffer(e,t,this._label)}_rebuild(){this._create(this._bufferSize,this._creationFlags)}getBuffer(){return this._buffer}clear(e,t){this._engine.clearStorageBuffer(this._buffer,e,t)}update(e,t,n){this._buffer&&this._engine.updateStorageBuffer(this._buffer,e,t,n)}async read(e,t,n,r){return await this._engine.readFromStorageBuffer(this._buffer,e,t,n,r)}dispose(){let e=this._engine._storageBuffers,t=e.indexOf(this);t!==-1&&(e[t]=e[e.length-1],e.pop()),this._engine._releaseBuffer(this._buffer),this._buffer=null}},bt=class{_isUbo(e){return e.addUniform!==void 0}constructor(e){this._isUbo(e)?(this.setMatrix3x3=e.updateMatrix3x3.bind(e),this.setMatrix2x2=e.updateMatrix2x2.bind(e),this.setFloat=e.updateFloat.bind(e),this.setFloat2=e.updateFloat2.bind(e),this.setFloat3=e.updateFloat3.bind(e),this.setFloat4=e.updateFloat4.bind(e),this.setFloatArray=e.updateFloatArray.bind(e),this.setArray=e.updateArray.bind(e),this.setIntArray=e.updateIntArray.bind(e),this.setMatrix=e.updateMatrix.bind(e),this.setMatrices=e.updateMatrices.bind(e),this.setVector3=e.updateVector3.bind(e),this.setVector4=e.updateVector4.bind(e),this.setColor3=e.updateColor3.bind(e),this.setColor4=e.updateColor4.bind(e),this.setDirectColor4=e.updateDirectColor4.bind(e),this.setInt=e.updateInt.bind(e),this.setInt2=e.updateInt2.bind(e),this.setInt3=e.updateInt3.bind(e),this.setInt4=e.updateInt4.bind(e)):(this.setMatrix3x3=e.setMatrix3x3.bind(e),this.setMatrix2x2=e.setMatrix2x2.bind(e),this.setFloat=e.setFloat.bind(e),this.setFloat2=e.setFloat2.bind(e),this.setFloat3=e.setFloat3.bind(e),this.setFloat4=e.setFloat4.bind(e),this.setFloatArray=e.setFloatArray.bind(e),this.setArray=e.setArray.bind(e),this.setIntArray=e.setIntArray.bind(e),this.setMatrix=e.setMatrix.bind(e),this.setMatrices=e.setMatrices.bind(e),this.setVector3=e.setVector3.bind(e),this.setVector4=e.setVector4.bind(e),this.setColor3=e.setColor3.bind(e),this.setColor4=e.setColor4.bind(e),this.setDirectColor4=e.setDirectColor4.bind(e),this.setInt=e.setInt.bind(e),this.setInt2=e.setInt2.bind(e),this.setInt3=e.setInt3.bind(e),this.setInt4=e.setInt4.bind(e))}},xt=class{constructor(e,t){this._bufferComputeShader=[],this._renderVertexBuffers=[],this.alignDataInBuffer=!0,this._parent=e,this._engine=t}contextLost(){this._updateComputeShader=void 0,this._bufferComputeShader.length=0,this._renderVertexBuffers.length=0}isUpdateBufferCreated(){return!!this._updateComputeShader}isUpdateBufferReady(){return this._updateComputeShader?.isReady()??!1}createUpdateBuffer(e){let t={params:{group:0,binding:0},particlesIn:{group:0,binding:1},particlesOut:{group:0,binding:2},randomTexture:{group:0,binding:3},randomTexture2:{group:0,binding:4}};if(this._parent._sizeGradientsTexture&&(t.sizeGradientTexture={group:1,binding:1}),this._parent._angularSpeedGradientsTexture&&(t.angularSpeedGradientTexture={group:1,binding:3}),this._parent._velocityGradientsTexture&&(t.velocityGradientTexture={group:1,binding:5}),this._parent._limitVelocityGradientsTexture&&(t.limitVelocityGradientTexture={group:1,binding:7}),this._parent._dragGradientsTexture&&(t.dragGradientTexture={group:1,binding:9}),this._parent.noiseTexture&&(t.noiseTexture={group:1,binding:11}),this._parent.flowMap&&(t.flowMapTexture={group:1,binding:13}),this._parent._meshPositionTexture&&(t.meshPositionTexture={group:1,binding:14}),this._parent._meshNormalTexture&&(t.meshNormalTexture={group:1,binding:15}),this._updateComputeShader=new Te(`updateParticles`,this._engine,`gpuUpdateParticles`,{bindingsMapping:t,defines:e.split(`
`),useExplicitComputePipelineLayout:!0}),this._simParamsComputeShader?.dispose(),this._simParamsComputeShader=new se(this._engine,void 0,void 0,`ComputeShaderParticleSystemUBO`),this._simParamsComputeShader.addUniform(`currentCount`,1),this._simParamsComputeShader.addUniform(`timeDelta`,1),this._simParamsComputeShader.addUniform(`stopFactor`,1),this._simParamsComputeShader.addUniform(`randomTextureSize`,1),this._simParamsComputeShader.addUniform(`lifeTime`,2),this._simParamsComputeShader.addUniform(`emitPower`,2),this._simParamsComputeShader.addUniform(`emitIndex`,1),this._simParamsComputeShader.addUniform(`emitCount`,1),this._parent._colorGradientsTexture||(this._simParamsComputeShader.addUniform(`color1`,4),this._simParamsComputeShader.addUniform(`color2`,4)),this._simParamsComputeShader.addUniform(`sizeRange`,2),this._simParamsComputeShader.addUniform(`scaleRange`,4),this._simParamsComputeShader.addUniform(`angleRange`,4),this._simParamsComputeShader.addUniform(`gravity`,3),this._parent._limitVelocityGradientsTexture&&this._simParamsComputeShader.addUniform(`limitVelocityDamping`,1),this._parent.isAnimationSheetEnabled&&this._simParamsComputeShader.addUniform(`cellInfos`,4),this._parent.noiseTexture&&this._simParamsComputeShader.addUniform(`noiseStrength`,3),this._parent.flowMap&&(this._simParamsComputeShader.addUniform(`flowMapProjection`,16),this._simParamsComputeShader.addUniform(`flowMapStrength`,1)),this._parent.isLocal||this._simParamsComputeShader.addUniform(`emitterWM`,16),this._parent.attractors.length>0){this._simParamsComputeShader.addUniform(`attractorCount`,1);for(let e=0;e<this._parent.maxAttractors;e++)this._simParamsComputeShader.addUniform(`attractorPositionAndStrength[`+e+`]`,4)}return this._parent._startSizeGradients&&this._parent._startSizeGradients.length>0&&this._simParamsComputeShader.addUniform(`startSizeGradientFactor`,1),this._parent._lifeTimeGradients&&this._parent._lifeTimeGradients.length>0&&this._simParamsComputeShader.addUniform(`lifeTimeGradientRange`,2),this._parent._meshPositionTexture&&(this._simParamsComputeShader.addUniform(`meshTriangleCount`,1),this._simParamsComputeShader.addUniform(`meshTextureWidth`,1)),this._parent.particleEmitterType&&this._parent.particleEmitterType.buildUniformLayout(this._simParamsComputeShader),this._updateComputeShader.setUniformBuffer(`params`,this._simParamsComputeShader),new bt(this._simParamsComputeShader)}createVertexBuffers(e,t){this._renderVertexBuffers.push(t)}createParticleBuffer(e){let t=new yt(this._engine,e.length*4,11,`ComputeShaderParticleSystemBuffer`);return t.update(e),this._bufferComputeShader.push(t),t.getBuffer()}bindDrawBuffers(e,t,n){this._engine.bindBuffers(this._renderVertexBuffers[e],n,t)}preUpdateParticleBuffer(){}updateParticleBuffer(e,t,n){this._simParamsComputeShader.update(),this._updateComputeShader.setTexture(`randomTexture`,this._parent._randomTexture,!1),this._updateComputeShader.setTexture(`randomTexture2`,this._parent._randomTexture2,!1),this._parent._sizeGradientsTexture&&this._updateComputeShader.setTexture(`sizeGradientTexture`,this._parent._sizeGradientsTexture),this._parent._angularSpeedGradientsTexture&&this._updateComputeShader.setTexture(`angularSpeedGradientTexture`,this._parent._angularSpeedGradientsTexture),this._parent._velocityGradientsTexture&&this._updateComputeShader.setTexture(`velocityGradientTexture`,this._parent._velocityGradientsTexture),this._parent._limitVelocityGradientsTexture&&this._updateComputeShader.setTexture(`limitVelocityGradientTexture`,this._parent._limitVelocityGradientsTexture),this._parent._dragGradientsTexture&&this._updateComputeShader.setTexture(`dragGradientTexture`,this._parent._dragGradientsTexture),this._parent.noiseTexture&&this._updateComputeShader.setTexture(`noiseTexture`,this._parent.noiseTexture),this._parent.flowMap&&this._updateComputeShader.setTexture(`flowMapTexture`,this._parent.flowMap),this._parent._meshPositionTexture&&this._updateComputeShader.setTexture(`meshPositionTexture`,this._parent._meshPositionTexture,!1),this._parent._meshNormalTexture&&this._updateComputeShader.setTexture(`meshNormalTexture`,this._parent._meshNormalTexture,!1),this._updateComputeShader.setStorageBuffer(`particlesIn`,this._bufferComputeShader[e]),this._updateComputeShader.setStorageBuffer(`particlesOut`,this._bufferComputeShader[e^1]),this._updateComputeShader.dispatch(Math.ceil(n/64))}releaseBuffers(){for(let e=0;e<this._bufferComputeShader.length;++e)this._bufferComputeShader[e].dispose();this._bufferComputeShader.length=0,this._simParamsComputeShader?.dispose(),this._simParamsComputeShader=null,this._updateComputeShader=null}releaseVertexBuffers(){this._renderVertexBuffers.length=0}},St=!1;function Ct(){St||(St=!0,te(`BABYLON.ComputeShaderParticleSystem`,xt))}var wt=`gpuUpdateParticlesComputeShader`,Tt=`struct Particle {position : vec3<f32>,
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
`;r.ShadersStoreWGSL[wt]||(r.ShadersStoreWGSL[wt]=Tt),Ct();var Et=!1;function Dt(){Et||(Et=!0,c.prototype.createTransformFeedback=function(){let e=this._gl.createTransformFeedback();if(!e)throw Error(`Unable to create Transform Feedback`);return e},c.prototype.deleteTransformFeedback=function(e){this._gl.deleteTransformFeedback(e)},c.prototype.bindTransformFeedback=function(e){this._gl.bindTransformFeedback(this._gl.TRANSFORM_FEEDBACK,e)},c.prototype.beginTransformFeedback=function(e=!0){this._gl.beginTransformFeedback(e?this._gl.POINTS:this._gl.TRIANGLES)},c.prototype.endTransformFeedback=function(){this._gl.endTransformFeedback()},c.prototype.setTranformFeedbackVaryings=function(e,t){this._gl.transformFeedbackVaryings(e,t,this._gl.INTERLEAVED_ATTRIBS)},c.prototype.bindTransformFeedbackBuffer=function(e){this._gl.bindBufferBase(this._gl.TRANSFORM_FEEDBACK_BUFFER,0,e?e.underlyingResource:null)},c.prototype.readTransformFeedbackBuffer=function(e){this._gl.getBufferSubData(this._gl.TRANSFORM_FEEDBACK_BUFFER,0,e)})}var Ot=class{constructor(e,t){this._renderVAO=[],this._updateVAO=[],this.alignDataInBuffer=!1,Dt(),this._parent=e,this._engine=t,this._updateEffectOptions={attributes:[`position`,`initialPosition`,`age`,`life`,`seed`,`size`,`color`,`direction`,`initialDirection`,`angle`,`cellIndex`,`cellStartOffset`,`noiseCoordinates1`,`noiseCoordinates2`],uniformsNames:`currentCount.timeDelta.emitterWM.lifeTime.color1.color2.sizeRange.scaleRange.gravity.emitPower.direction1.direction2.minEmitBox.maxEmitBox.radius.directionRandomizer.height.coneAngle.stopFactor.emitIndex.emitCount.angleRange.radiusRange.cellInfos.noiseStrength.limitVelocityDamping.flowMapProjection.flowMapStrength`.split(`.`),uniformBuffersNames:[],samplers:[`randomSampler`,`randomSampler2`,`sizeGradientSampler`,`angularSpeedGradientSampler`,`velocityGradientSampler`,`limitVelocityGradientSampler`,`noiseSampler`,`dragGradientSampler`,`flowMapSampler`,`meshPositionSampler`,`meshNormalSampler`],defines:``,fallbacks:null,onCompiled:null,onError:null,indexParameters:null,maxSimultaneousLights:0,transformFeedbackVaryings:[]},this._baseUniformsNamesLength=this._updateEffectOptions.uniformsNames.length}contextLost(){this._updateEffect=void 0,this._renderVAO.length=0,this._updateVAO.length=0}isUpdateBufferCreated(){return!!this._updateEffect}isUpdateBufferReady(){return this._updateEffect?.isReady()??!1}createUpdateBuffer(e){if(this._updateEffectOptions.uniformsNames.length=this._baseUniformsNamesLength,this._updateEffectOptions.transformFeedbackVaryings=[`outPosition`],this._updateEffectOptions.transformFeedbackVaryings.push(`outAge`),this._updateEffectOptions.transformFeedbackVaryings.push(`outSize`),this._updateEffectOptions.transformFeedbackVaryings.push(`outLife`),this._updateEffectOptions.transformFeedbackVaryings.push(`outSeed`),this._updateEffectOptions.transformFeedbackVaryings.push(`outDirection`),this._parent.particleEmitterType instanceof m&&this._updateEffectOptions.transformFeedbackVaryings.push(`outInitialPosition`),this._parent._colorGradientsTexture||this._updateEffectOptions.transformFeedbackVaryings.push(`outColor`),this._parent._needsInitialDirection&&this._updateEffectOptions.transformFeedbackVaryings.push(`outInitialDirection`),this._parent.noiseTexture&&(this._updateEffectOptions.transformFeedbackVaryings.push(`outNoiseCoordinates1`),this._updateEffectOptions.transformFeedbackVaryings.push(`outNoiseCoordinates2`)),this._updateEffectOptions.transformFeedbackVaryings.push(`outAngle`),this._parent.isAnimationSheetEnabled&&(this._updateEffectOptions.transformFeedbackVaryings.push(`outCellIndex`),this._parent.spriteRandomStartCell&&this._updateEffectOptions.transformFeedbackVaryings.push(`outCellStartOffset`)),this._updateEffectOptions.defines=e,e.indexOf(`ATTRACTORS`)!==-1){this._updateEffectOptions.uniformsNames.push(`attractorCount`);for(let e=0;e<this._parent.maxAttractors;e++)this._updateEffectOptions.uniformsNames.push(`attractorPositionAndStrength[`+e+`]`)}return e.indexOf(`STARTSIZEGRADIENTS`)!==-1&&this._updateEffectOptions.uniformsNames.push(`startSizeGradientFactor`),e.indexOf(`LIFETIMEGRADIENTS`)!==-1&&this._updateEffectOptions.uniformsNames.push(`lifeTimeGradientRange`),e.indexOf(`MESHEMITTER`)!==-1&&(this._updateEffectOptions.uniformsNames.push(`meshTriangleCount`),this._updateEffectOptions.uniformsNames.push(`meshTextureWidth`)),this._updateEffect=this._engine.createEffect(`gpuUpdateParticles`,this._updateEffectOptions,this._engine),new bt(this._updateEffect)}createVertexBuffers(e,t){this._updateVAO.push(this._createUpdateVAO(e)),this._renderVAO.push(this._engine.recordVertexArrayObject(t,null,this._parent._getWrapper(this._parent.blendMode).effect)),this._engine.bindArrayBuffer(null),this._renderVertexBuffers=t}createParticleBuffer(e){return e}bindDrawBuffers(e,t,n){n?this._engine.bindBuffers(this._renderVertexBuffers,n,t):this._engine.bindVertexArrayObject(this._renderVAO[e],null)}preUpdateParticleBuffer(){let e=this._engine;if(this._engine.enableEffect(this._updateEffect),!e.setState)throw Error(`GPU particles cannot work without a full Engine. ThinEngine is not supported`)}updateParticleBuffer(e,t,n){this._updateEffect.setTexture(`randomSampler`,this._parent._randomTexture),this._updateEffect.setTexture(`randomSampler2`,this._parent._randomTexture2),this._parent._flowMap&&this._updateEffect.setTexture(`flowMapSampler`,this._parent._flowMap),this._parent._sizeGradientsTexture&&this._updateEffect.setTexture(`sizeGradientSampler`,this._parent._sizeGradientsTexture),this._parent._angularSpeedGradientsTexture&&this._updateEffect.setTexture(`angularSpeedGradientSampler`,this._parent._angularSpeedGradientsTexture),this._parent._velocityGradientsTexture&&this._updateEffect.setTexture(`velocityGradientSampler`,this._parent._velocityGradientsTexture),this._parent._limitVelocityGradientsTexture&&this._updateEffect.setTexture(`limitVelocityGradientSampler`,this._parent._limitVelocityGradientsTexture),this._parent._dragGradientsTexture&&this._updateEffect.setTexture(`dragGradientSampler`,this._parent._dragGradientsTexture),this._parent.noiseTexture&&this._updateEffect.setTexture(`noiseSampler`,this._parent.noiseTexture),this._parent._meshPositionTexture&&this._updateEffect.setTexture(`meshPositionSampler`,this._parent._meshPositionTexture),this._parent._meshNormalTexture&&this._updateEffect.setTexture(`meshNormalSampler`,this._parent._meshNormalTexture),this._engine.bindVertexArrayObject(this._updateVAO[e],null);let r=this._engine;r.bindTransformFeedbackBuffer(t.getBuffer()),r.setRasterizerState(!1),r.beginTransformFeedback(!0),r.drawArraysType(3,0,n),r.endTransformFeedback(),r.setRasterizerState(!0),r.bindTransformFeedbackBuffer(null)}releaseBuffers(){}releaseVertexBuffers(){for(let e=0;e<this._updateVAO.length;e++)this._engine.releaseVertexArrayObject(this._updateVAO[e]);this._updateVAO.length=0;for(let e=0;e<this._renderVAO.length;e++)this._engine.releaseVertexArrayObject(this._renderVAO[e]);this._renderVAO.length=0}_createUpdateVAO(e){let t={};t.position=e.createVertexBuffer(`position`,0,3);let n=3;t.age=e.createVertexBuffer(`age`,n,1),n+=1,t.size=e.createVertexBuffer(`size`,n,3),n+=3,t.life=e.createVertexBuffer(`life`,n,1),n+=1,t.seed=e.createVertexBuffer(`seed`,n,4),n+=4,t.direction=e.createVertexBuffer(`direction`,n,3),n+=3,this._parent.particleEmitterType instanceof m&&(t.initialPosition=e.createVertexBuffer(`initialPosition`,n,3),n+=3),this._parent._colorGradientsTexture||(t.color=e.createVertexBuffer(`color`,n,4),n+=4),this._parent._needsInitialDirection&&(t.initialDirection=e.createVertexBuffer(`initialDirection`,n,3),n+=3),this._parent.noiseTexture&&(t.noiseCoordinates1=e.createVertexBuffer(`noiseCoordinates1`,n,3),n+=3,t.noiseCoordinates2=e.createVertexBuffer(`noiseCoordinates2`,n,3),n+=3),this._parent._angularSpeedGradientsTexture?(t.angle=e.createVertexBuffer(`angle`,n,1),n+=1):(t.angle=e.createVertexBuffer(`angle`,n,2),n+=2),this._parent._isAnimationSheetEnabled&&(t.cellIndex=e.createVertexBuffer(`cellIndex`,n,1),n+=1,this._parent.spriteRandomStartCell&&(t.cellStartOffset=e.createVertexBuffer(`cellStartOffset`,n,1)));let r=this._engine.recordVertexArrayObject(t,null,this._updateEffect);return this._engine.bindArrayBuffer(null),r}},kt=!1;function At(){kt||(kt=!0,te(`BABYLON.WebGL2ParticleSystem`,Ot))}var jt=`gpuUpdateParticlesPixelShader`,Mt=`#version 300 es
void main() {discard;}
`;r.ShadersStore[jt]||(r.ShadersStore[jt]=Mt);var Nt=`gpuUpdateParticlesVertexShader`,Pt=`#version 300 es
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
}}`;r.ShadersStore[Nt]||(r.ShadersStore[Nt]=Pt),At();var Ft=class{get animationStarted(){return this._animationStarted}get fromIndex(){return this._fromIndex}get toIndex(){return this._toIndex}get loopAnimation(){return this._loopAnimation}get delay(){return Math.max(this._delay,1)}constructor(){this.width=1,this.height=1,this.angle=0,this.invertU=!1,this.invertV=!1,this.isVisible=!0,this._animationStarted=!1,this._loopAnimation=!1,this._fromIndex=0,this._toIndex=0,this._delay=0,this._direction=1,this._time=0,this._onBaseAnimationEnd=null,this.position={x:1,y:1,z:1},this.color={r:1,g:1,b:1,a:1}}playAnimation(e,t,n,r,i){this._fromIndex=e,this._toIndex=t,this._loopAnimation=n,this._delay=r||1,this._animationStarted=!0,this._onBaseAnimationEnd=i,e<t?this._direction=1:(this._direction=-1,this._toIndex=e,this._fromIndex=t),this.cellIndex=e,this._time=0}stopAnimation(){this._animationStarted=!1}_animate(e){this._animationStarted&&(this._time+=e,this._time>this._delay&&(this._time%=this._delay,this.cellIndex+=this._direction,(this._direction>0&&this.cellIndex>this._toIndex||this._direction<0&&this.cellIndex<this._fromIndex)&&(this._loopAnimation?this.cellIndex=this._direction>0?this._fromIndex:this._toIndex:(this.cellIndex=this._direction>0?this._toIndex:this._fromIndex,this._animationStarted=!1,this._onBaseAnimationEnd&&this._onBaseAnimationEnd()))))}},It=class t extends Ft{get size(){return this.width}set size(e){this.width=e,this.height=e}get manager(){return this._manager}constructor(t,n){super(),this.name=t,this.animations=[],this.isPickable=!1,this.useAlphaForPicking=!1,this.onDisposeObservable=new e,this._onAnimationEnd=null,this._endAnimation=()=>{this._onAnimationEnd&&this._onAnimationEnd(),this.disposeWhenFinishedAnimating&&this.dispose()},this.color=new E(1,1,1,1),this.position=w.Zero(),this._manager=n,this._manager.sprites.push(this),this.uniqueId=this._manager.scene.getUniqueId()}getClassName(){return`Sprite`}get fromIndex(){return this._fromIndex}set fromIndex(e){this.playAnimation(e,this._toIndex,this._loopAnimation,this._delay,this._onAnimationEnd)}get toIndex(){return this._toIndex}set toIndex(e){this.playAnimation(this._fromIndex,e,this._loopAnimation,this._delay,this._onAnimationEnd)}get loopAnimation(){return this._loopAnimation}set loopAnimation(e){this.playAnimation(this._fromIndex,this._toIndex,e,this._delay,this._onAnimationEnd)}get delay(){return Math.max(this._delay,1)}set delay(e){this.playAnimation(this._fromIndex,this._toIndex,this._loopAnimation,e,this._onAnimationEnd)}playAnimation(e,t,n,r,i=null){this._onAnimationEnd=i,super.playAnimation(e,t,n,r,this._endAnimation)}dispose(){for(let e=0;e<this._manager.sprites.length;e++)this._manager.sprites[e]==this&&this._manager.sprites.splice(e,1);this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear()}serialize(){let e={};return e.name=this.name,e.position=this.position.asArray(),e.color=this.color.asArray(),e.width=this.width,e.height=this.height,e.angle=this.angle,e.cellIndex=this.cellIndex,e.cellRef=this.cellRef,e.invertU=this.invertU,e.invertV=this.invertV,e.disposeWhenFinishedAnimating=this.disposeWhenFinishedAnimating,e.isPickable=this.isPickable,e.isVisible=this.isVisible,e.useAlphaForPicking=this.useAlphaForPicking,e.animationStarted=this.animationStarted,e.fromIndex=this.fromIndex,e.toIndex=this.toIndex,e.loopAnimation=this.loopAnimation,e.delay=this.delay,e}static Parse(e,n){let r=new t(e.name,n);return r.position=w.FromArray(e.position),r.color=E.FromArray(e.color),r.width=e.width,r.height=e.height,r.angle=e.angle,r.cellIndex=e.cellIndex,r.cellRef=e.cellRef,r.invertU=e.invertU,r.invertV=e.invertV,r.disposeWhenFinishedAnimating=e.disposeWhenFinishedAnimating,r.isPickable=e.isPickable,r.isVisible=e.isVisible,r.useAlphaForPicking=e.useAlphaForPicking,r._fromIndex=e.fromIndex,r._toIndex=e.toIndex,r._loopAnimation=e.loopAnimation,r._delay=e.delay,e.animationStarted&&r.playAnimation(r.fromIndex,r.toIndex,r.loopAnimation,r.delay),r}},Lt=class{constructor(t){this.name=M.NAME_SPRITE,this.scene=t,this.scene.spriteManagers=[],this.scene._tempSpritePickingRay=R?R.Zero():null,this.scene.onBeforeSpritesRenderingObservable=new e,this.scene.onAfterSpritesRenderingObservable=new e,this._spritePredicate=e=>e.actionManager?e.isPickable&&e.actionManager.hasPointerTriggers:!1}register(){this.scene._pointerMoveStage.registerStep(M.STEP_POINTERMOVE_SPRITE,this,this._pointerMove),this.scene._pointerDownStage.registerStep(M.STEP_POINTERDOWN_SPRITE,this,this._pointerDown),this.scene._pointerUpStage.registerStep(M.STEP_POINTERUP_SPRITE,this,this._pointerUp)}rebuild(){}dispose(){this.scene.onBeforeSpritesRenderingObservable.clear(),this.scene.onAfterSpritesRenderingObservable.clear();let e=this.scene.spriteManagers;if(e)for(;e.length;)e[0].dispose()}_pickSpriteButKeepRay(e,t,n,r,i){let a=this.scene.pickSprite(t,n,this._spritePredicate,r,i);return a&&(a.ray=e?e.ray:null),a}_pointerMove(e,t,n,r,i){let a=this.scene;return r?a.setPointerOverSprite(null):(n=this._pickSpriteButKeepRay(n,e,t,!1,a.cameraToUseForPointers||void 0),n&&n.hit&&n.pickedSprite?(a.setPointerOverSprite(n.pickedSprite),!a.doNotHandleCursors&&i&&(a._pointerOverSprite&&a._pointerOverSprite.actionManager&&a._pointerOverSprite.actionManager.hoverCursor?i.style.cursor=a._pointerOverSprite.actionManager.hoverCursor:i.style.cursor=a.hoverCursor)):a.setPointerOverSprite(null)),n}_pointerDown(e,t,n,r){let i=this.scene;if(i._pickedDownSprite=null,i.spriteManagers&&i.spriteManagers.length>0&&(n=i.pickSprite(e,t,this._spritePredicate,!1,i.cameraToUseForPointers||void 0),n&&n.hit&&n.pickedSprite&&n.pickedSprite.actionManager)){switch(i._pickedDownSprite=n.pickedSprite,r.button){case 0:n.pickedSprite.actionManager.processTrigger(2,d.CreateNewFromSprite(n.pickedSprite,i,r));break;case 1:n.pickedSprite.actionManager.processTrigger(4,d.CreateNewFromSprite(n.pickedSprite,i,r));break;case 2:n.pickedSprite.actionManager.processTrigger(3,d.CreateNewFromSprite(n.pickedSprite,i,r))}n.pickedSprite.actionManager&&n.pickedSprite.actionManager.processTrigger(5,d.CreateNewFromSprite(n.pickedSprite,i,r))}return n}_pointerUp(e,t,n,r,i){let a=this.scene;if(a.spriteManagers&&a.spriteManagers.length>0){let n=a.pickSprite(e,t,this._spritePredicate,!1,a.cameraToUseForPointers||void 0);n&&(n.hit&&n.pickedSprite&&n.pickedSprite.actionManager&&(n.pickedSprite.actionManager.processTrigger(7,d.CreateNewFromSprite(n.pickedSprite,a,r)),n.pickedSprite.actionManager&&(this.scene._inputManager._isPointerSwiping()||n.pickedSprite.actionManager.processTrigger(1,d.CreateNewFromSprite(n.pickedSprite,a,r)),i&&n.pickedSprite.actionManager.processTrigger(6,d.CreateNewFromSprite(n.pickedSprite,a,r)))),a._pickedDownSprite&&a._pickedDownSprite.actionManager&&a._pickedDownSprite!==n.pickedSprite&&a._pickedDownSprite.actionManager.processTrigger(16,d.CreateNewFromSprite(a._pickedDownSprite,a,r)))}return n}},Rt=!1;function zt(){Rt||(Rt=!0,Object.defineProperty(u.prototype,"onNewSpriteManagerAddedObservable",{get:function(){if(!this.isDisposed&&!this._onNewSpriteManagerAddedObservable){let t=this._onNewSpriteManagerAddedObservable=new e;this.onDisposeObservable.addOnce(()=>t.clear())}return this._onNewSpriteManagerAddedObservable},enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,"onSpriteManagerRemovedObservable",{get:function(){if(!this.isDisposed&&!this._onSpriteManagerRemovedObservable){let t=this._onSpriteManagerRemovedObservable=new e;this.onDisposeObservable.addOnce(()=>t.clear())}return this._onSpriteManagerRemovedObservable},enumerable:!0,configurable:!0}),u.prototype._internalPickSprites=function(e,t,n,r){if(!p)return null;let i=null;if(!r){if(!this.activeCamera)return null;r=this.activeCamera}if(this.spriteManagers&&this.spriteManagers.length>0)for(let a=0;a<this.spriteManagers.length;a++){let o=this.spriteManagers[a];if(!o.isPickable)continue;let s=o.intersects(e,r,t,n);if(s&&s.hit&&!(!n&&i!=null&&s.distance>=i.distance)&&(i=s,n))break}return i||new p},u.prototype._internalMultiPickSprites=function(e,t,n){if(!p)return null;let r=[];if(!n){if(!this.activeCamera)return null;n=this.activeCamera}if(this.spriteManagers&&this.spriteManagers.length>0)for(let i=0;i<this.spriteManagers.length;i++){let a=this.spriteManagers[i];if(!a.isPickable)continue;let o=a.multiIntersects(e,n,t);o!==null&&(r=r.concat(o))}return r},u.prototype.pickSprite=function(e,t,n,r,i){if(!this._tempSpritePickingRay)return null;V(this,e,t,this._tempSpritePickingRay,i);let a=this._internalPickSprites(this._tempSpritePickingRay,n,r,i);return a&&(a.ray=He(this,e,t,i)),a},u.prototype.pickSpriteWithRay=function(e,t,n,r){if(!this._tempSpritePickingRay)return null;if(!r){if(!this.activeCamera)return null;r=this.activeCamera}R.TransformToRef(e,r.getViewMatrix(),this._tempSpritePickingRay);let i=this._internalPickSprites(this._tempSpritePickingRay,t,n,r);return i&&(i.ray=e),i},u.prototype.multiPickSprite=function(e,t,n,r){return V(this,e,t,this._tempSpritePickingRay,r),this._internalMultiPickSprites(this._tempSpritePickingRay,n,r)},u.prototype.multiPickSpriteWithRay=function(e,t,n){if(!this._tempSpritePickingRay)return null;if(!n){if(!this.activeCamera)return null;n=this.activeCamera}return R.TransformToRef(e,n.getViewMatrix(),this._tempSpritePickingRay),this._internalMultiPickSprites(this._tempSpritePickingRay,t,n)},u.prototype.setPointerOverSprite=function(e){this._pointerOverSprite!==e&&(this._pointerOverSprite&&this._pointerOverSprite.actionManager&&this._pointerOverSprite.actionManager.processTrigger(10,d.CreateNewFromSprite(this._pointerOverSprite,this)),this._pointerOverSprite=e,this._pointerOverSprite&&this._pointerOverSprite.actionManager&&this._pointerOverSprite.actionManager.processTrigger(9,d.CreateNewFromSprite(this._pointerOverSprite,this)))},u.prototype.getPointerOverSprite=function(){return this._pointerOverSprite})}var Bt=class e{get fogEnabled(){return this._fogEnabled}set fogEnabled(e){this._fogEnabled!==e&&(this._fogEnabled=e,this._createEffects())}get useLogarithmicDepth(){return this._useLogarithmicDepth}set useLogarithmicDepth(e){let t=!!this._scene?.getEngine().getCaps().fragmentDepthSupported;e&&!t&&n.Warn(`Logarithmic depth has been requested for a sprite renderer on a device that doesn't support it.`),this._useLogarithmicDepth=e&&t,this._createEffects()}get capacity(){return this._capacity}get pixelPerfect(){return this._pixelPerfect}set pixelPerfect(e){this._pixelPerfect!==e&&(this._pixelPerfect=e,this._createEffects())}get shaderLanguage(){return this._shaderLanguage}constructor(e,t,n=.01,r=null,i){this.blendMode=2,this.autoResetAlpha=!0,this.disableDepthWrite=!1,this._fogEnabled=!0,this._pixelPerfect=!1,this._shaderLanguage=0,this._useVAO=!1,this._useInstancing=!1,this._vertexBuffers={},this._isDisposed=!1,this._shadersLoaded=!1,this._pixelPerfect=i?.pixelPerfect??!1,this._capacity=t,this._epsilon=n,this._engine=e,this._useInstancing=e.getCaps().instancedArrays&&e._features.supportSpriteInstancing,this._useVAO=e.getCaps().vertexArrayObject&&!e.disableVertexArrayObjects,this._scene=r,this._useInstancing||this._buildIndexBuffer(),this._vertexBufferSize=this._useInstancing?16:18,this._vertexData=new Float32Array(t*this._vertexBufferSize*(this._useInstancing?1:4)),this._buffer=new b(e,this._vertexData,!0,this._vertexBufferSize);let a=this._buffer.createVertexBuffer(y.PositionKind,0,4,this._vertexBufferSize,this._useInstancing),o=this._buffer.createVertexBuffer(`options`,4,2,this._vertexBufferSize,this._useInstancing),s=6,c;if(this._useInstancing){let t=new Float32Array([this._epsilon,this._epsilon,1-this._epsilon,this._epsilon,this._epsilon,1-this._epsilon,1-this._epsilon,1-this._epsilon]);this._spriteBuffer=new b(e,t,!1,2),c=this._spriteBuffer.createVertexBuffer(`offsets`,0,2)}else c=this._buffer.createVertexBuffer(`offsets`,s,2,this._vertexBufferSize,this._useInstancing),s+=2;let l=this._buffer.createVertexBuffer(`inverts`,s,2,this._vertexBufferSize,this._useInstancing),u=this._buffer.createVertexBuffer(`cellInfo`,s+2,4,this._vertexBufferSize,this._useInstancing),d=this._buffer.createVertexBuffer(y.ColorKind,s+6,4,this._vertexBufferSize,this._useInstancing);this._vertexBuffers[y.PositionKind]=a,this._vertexBuffers.options=o,this._vertexBuffers.offsets=c,this._vertexBuffers.inverts=l,this._vertexBuffers.cellInfo=u,this._vertexBuffers[y.ColorKind]=d,this._initShaderSourceAsync()}async _initShaderSourceAsync(){this._engine.isWebGPU&&!e.ForceGLSL?(this._shaderLanguage=1,await Promise.all([D(()=>import(`./sprites.vertex-Bw2sXijT.js`),__vite__mapDeps([30,1,31,32,33]),import.meta.url),D(()=>import(`./sprites.fragment-BODwQAOn.js`),__vite__mapDeps([34,1,35,32,36]),import.meta.url)])):await Promise.all([D(()=>import(`./sprites.vertex-BUp-tXX_.js`),__vite__mapDeps([37,1,38,39,40]),import.meta.url),D(()=>import(`./sprites.fragment-D6gd3953.js`),__vite__mapDeps([41,1,38,42,43]),import.meta.url)]),this._shadersLoaded=!0,this._createEffects()}_createEffects(){if(this._isDisposed||!this._shadersLoaded)return;this._drawWrapperBase?.dispose(),this._drawWrapperDepth?.dispose(),this._drawWrapperBase=new P(this._engine),this._drawWrapperDepth=new P(this._engine,!1),this._drawWrapperBase.drawContext&&(this._drawWrapperBase.drawContext.useInstancing=this._useInstancing),this._drawWrapperDepth.drawContext&&(this._drawWrapperDepth.drawContext.useInstancing=this._useInstancing);let e=``;this._pixelPerfect&&(e+=`#define PIXEL_PERFECT
`),this._scene&&this._scene.fogEnabled&&this._scene.fogMode!==0&&this._fogEnabled&&(e+=`#define FOG
`),this._useLogarithmicDepth&&(e+=`#define LOGARITHMICDEPTH
`),this._drawWrapperBase.effect=this._engine.createEffect(`sprites`,[y.PositionKind,`options`,`offsets`,`inverts`,`cellInfo`,y.ColorKind],[`view`,`projection`,`textureInfos`,`alphaTest`,`vFogInfos`,`vFogColor`,`logarithmicDepthConstant`],[`diffuseSampler`],e,void 0,void 0,void 0,void 0,this._shaderLanguage),this._drawWrapperDepth.effect=this._drawWrapperBase.effect,this._drawWrapperBase.effect._refCount++,this._drawWrapperDepth.materialContext=this._drawWrapperBase.materialContext}render(e,t,n,r,i=null){if(!this._shadersLoaded||!this.texture||!this.texture.isReady()||!e.length)return;let a=this._drawWrapperBase,o=this._drawWrapperDepth,s=this.fogEnabled&&this._scene&&this._scene.fogEnabled&&this._scene.fogMode!==0,c=a.effect;if(!c.isReady())return;let l=this._engine,u=!!(this._scene&&this._scene.useRightHandedSystem),d=Math.min(this._capacity,e.length),f=0,p=!0,m=this._scene?.floatingOriginOffset||w.ZeroReadOnly;for(let n=0;n<d;n++){let r=e[n];if(!r||!r.isVisible)continue;p=!1,r._animate(t);let a=this.texture.getBaseSize();this._appendSpriteVertex(f++,r,0,0,a,u,i,m),this._useInstancing||(this._appendSpriteVertex(f++,r,1,0,a,u,i,m),this._appendSpriteVertex(f++,r,1,1,a,u,i,m),this._appendSpriteVertex(f++,r,0,1,a,u,i,m))}if(p)return;this._buffer.update(this._vertexData);let h=!!l.depthCullingState.cull,g=l.depthCullingState.zOffset,_=l.depthCullingState.zOffsetUnits;if(l.setState(h,g,!1,!1,void 0,void 0,_),l.enableEffect(a),c.setTexture(`diffuseSampler`,this.texture),c.setMatrix(`view`,n),c.setMatrix(`projection`,r),s){let e=this._scene;c.setFloat4(`vFogInfos`,e.fogMode,e.fogStart,e.fogEnd,e.fogDensity),c.setColor3(`vFogColor`,e.fogColor)}this.useLogarithmicDepth&&this._scene&&_e(a.defines,c,this._scene),this._useVAO?(this._vertexArrayObject||=l.recordVertexArrayObject(this._vertexBuffers,this._indexBuffer,c),l.bindVertexArrayObject(this._vertexArrayObject,this._indexBuffer)):l.bindBuffers(this._vertexBuffers,this._indexBuffer,c),l.depthCullingState.depthFunc=l.useReverseDepthBuffer?518:515,this.disableDepthWrite||(c.setBool(`alphaTest`,!0),l.setColorWrite(!1),l.enableEffect(o),this._useInstancing?l.drawArraysType(7,0,4,f):l.drawElementsType(0,0,f/4*6),l.enableEffect(a),l.setColorWrite(!0),c.setBool(`alphaTest`,!1)),l.setAlphaMode(this.blendMode),this._useInstancing?l.drawArraysType(7,0,4,f):l.drawElementsType(0,0,f/4*6),this.autoResetAlpha&&l.setAlphaMode(0),u&&this._scene.getEngine().setState(h,g,!1,!0,void 0,void 0,_),l.unbindInstanceAttributes()}_appendSpriteVertex(e,t,n,r,i,a,o,s){let c=e*this._vertexBufferSize;if(n===0?n=this._epsilon:n===1&&(n=1-this._epsilon),r===0?r=this._epsilon:r===1&&(r=1-this._epsilon),o)o(t,i);else{t.cellIndex||=0;let e=i.width/this.cellWidth,n=t.cellIndex/e>>0;t._xOffset=(t.cellIndex-n*e)*this.cellWidth/i.width,t._yOffset=n*this.cellHeight/i.height,t._xSize=this.cellWidth,t._ySize=this.cellHeight}this._vertexData[c]=t.position.x-s.x,this._vertexData[c+1]=t.position.y-s.y,this._vertexData[c+2]=t.position.z-s.z,this._vertexData[c+3]=t.angle,this._vertexData[c+4]=t.width,this._vertexData[c+5]=t.height,this._useInstancing?c-=2:(this._vertexData[c+6]=n,this._vertexData[c+7]=r),a?this._vertexData[c+8]=+!t.invertU:this._vertexData[c+8]=+!!t.invertU,this._vertexData[c+9]=+!!t.invertV,this._vertexData[c+10]=t._xOffset,this._vertexData[c+11]=t._yOffset,this._vertexData[c+12]=t._xSize/i.width,this._vertexData[c+13]=t._ySize/i.height,this._vertexData[c+14]=t.color.r,this._vertexData[c+15]=t.color.g,this._vertexData[c+16]=t.color.b,this._vertexData[c+17]=t.color.a}_buildIndexBuffer(){let e=[],t=0;for(let n=0;n<this._capacity;n++)e.push(t),e.push(t+1),e.push(t+2),e.push(t),e.push(t+2),e.push(t+3),t+=4;this._indexBuffer=this._engine.createIndexBuffer(e)}rebuild(){this._indexBuffer&&this._buildIndexBuffer(),this._useVAO&&(this._vertexArrayObject=void 0),this._buffer._rebuild();for(let e in this._vertexBuffers)this._vertexBuffers[e]._rebuild();this._spriteBuffer?._rebuild()}dispose(){this._buffer&&=(this._buffer.dispose(),null),this._spriteBuffer&&=(this._spriteBuffer.dispose(),null),this._indexBuffer&&=(this._engine._releaseBuffer(this._indexBuffer),null),this._vertexArrayObject&&=(this._engine.releaseVertexArrayObject(this._vertexArrayObject),null),this.texture&&=(this.texture.dispose(),null),this._drawWrapperBase?.dispose(),this._drawWrapperDepth?.dispose(),this._isDisposed=!0}};Bt.ForceGLSL=!1;var Q=class r{set onDispose(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)}get children(){return this.sprites}get scene(){return this._scene}get capacity(){return this._spriteRenderer.capacity}get texture(){return this._spriteRenderer.texture}set texture(e){e.wrapU=N.CLAMP_ADDRESSMODE,e.wrapV=N.CLAMP_ADDRESSMODE,this._spriteRenderer.texture=e,this._textureContent=null}get cellWidth(){return this._spriteRenderer.cellWidth}set cellWidth(e){this._spriteRenderer.cellWidth=e}get cellHeight(){return this._spriteRenderer.cellHeight}set cellHeight(e){this._spriteRenderer.cellHeight=e}get fogEnabled(){return this._spriteRenderer.fogEnabled}set fogEnabled(e){this._spriteRenderer.fogEnabled=e}get useLogarithmicDepth(){return this._spriteRenderer.useLogarithmicDepth}set useLogarithmicDepth(e){this._spriteRenderer.useLogarithmicDepth=e}get blendMode(){return this._spriteRenderer.blendMode}set blendMode(e){this._spriteRenderer.blendMode=e}get disableDepthWrite(){return this._disableDepthWrite}set disableDepthWrite(e){this._disableDepthWrite=e,this._spriteRenderer.disableDepthWrite=e}get pixelPerfect(){return this._spriteRenderer.pixelPerfect}set pixelPerfect(e){this._spriteRenderer.pixelPerfect=e,e&&this.texture.samplingMode!==3&&this.texture.updateSamplingMode(3)}get spriteRenderer(){return this._spriteRenderer}constructor(n,r,i,a,o,s=.01,c=N.TRILINEAR_SAMPLINGMODE,l=!1,u=null,d){this.name=n,this._parentContainer=null,this.sprites=[],this.renderingGroupId=0,this.layerMask=268435455,this.isPickable=!1,this.metadata=null,this._wasDispatched=!1,this.onDisposeObservable=new e,this.doNotSerialize=!1,this._disableDepthWrite=!1,this._packedAndReady=!1,this._customUpdate=(e,t)=>{e.cellRef||(e.cellIndex=0);let n=e.cellIndex;typeof n==`number`&&isFinite(n)&&Math.floor(n)===n&&(e.cellRef=this._spriteMap[e.cellIndex]),e._xOffset=this._cellData[e.cellRef].frame.x/t.width,e._yOffset=this._cellData[e.cellRef].frame.y/t.height,e._xSize=this._cellData[e.cellRef].frame.w,e._ySize=this._cellData[e.cellRef].frame.h},o||=t.LastCreatedScene,this.layerMask=o.defaultRenderableLayerMask,zt(),o._getComponent(M.NAME_SPRITE)||o._addComponent(new Lt(o)),this._fromPacked=l,this._scene=o;let f=this._scene.getEngine();if(this._spriteRenderer=new Bt(f,i,s,o,d?.spriteRendererOptions),a.width&&a.height)this.cellWidth=a.width,this.cellHeight=a.height;else if(a!==void 0)this.cellWidth=a,this.cellHeight=a;else{this._spriteRenderer=null;return}this._scene.spriteManagers&&this._scene.spriteManagers.push(this),this.uniqueId=this.scene.getUniqueId(),r&&(this.texture=new N(r,o,!0,!1,c)),this._fromPacked&&this._makePacked(r,u),this._scene._onNewSpriteManagerAddedObservable?.notifyObservers(this)}getClassName(){return`SpriteManager`}_makePacked(e,t){if(t!==null)try{let e;if(e=typeof t==`string`?JSON.parse(t):t,e.frames.length){let t={};for(let n=0;n<e.frames.length;n++){let r=e.frames[n];if(typeof Object.keys(r)[0]!=`string`)throw Error(`Invalid JSON Format.  Check the frame values and make sure the name is the first parameter.`);let i=r[Object.keys(r)[0]];t[i]=r}e.frames=t}let n=Reflect.ownKeys(e.frames);this._spriteMap=n,this._packedAndReady=!0,this._cellData=e.frames}catch(e){throw this._fromPacked=!1,this._packedAndReady=!1,Error(`Invalid JSON from string. Spritesheet managed with constant cell size.`,{cause:e})}else{let t=/\./g,r;do r=t.lastIndex,t.test(e);while(t.lastIndex>0);let i=e.substring(0,r-1)+`.json`;oe.LoadFile(i,e=>{try{let t=JSON.parse(e),n=Reflect.ownKeys(t.frames);this._spriteMap=n,this._packedAndReady=!0,this._cellData=t.frames}catch(e){throw this._fromPacked=!1,this._packedAndReady=!1,Error(`Invalid JSON format. Please check documentation for format specifications.`,{cause:e})}},void 0,void 0,!1,()=>{n.Error(`JSON ERROR: Unable to load JSON file.`),this._fromPacked=!1,this._packedAndReady=!1})}}_checkTextureAlpha(e,t,n,r,i){if(!e.useAlphaForPicking||!this.texture?.isReady())return!0;let a=this.texture.getSize();this._textureContent||(this._textureContent=new Uint8Array(a.width*a.height*4),this.texture.readPixels(0,0,this._textureContent));let o=C.Vector3[0];o.copyFrom(t.direction),o.normalize(),o.scaleInPlace(n),o.addInPlace(t.origin);let s=(o.x-r.x)/(i.x-r.x),c=1-(o.y-r.y)/(i.y-r.y),l=e._xOffset*a.width+s*e._xSize|0,u=e._yOffset*a.height+c*e._ySize|0;return this._textureContent[(l+u*a.width)*4+3]>.5}intersects(e,t,n,r){let i=Math.min(this.capacity,this.sprites.length),a=w.Zero(),o=w.Zero(),s=Number.MAX_VALUE,c=null,l=C.Vector3[0],u=C.Vector3[1],d=t.getViewMatrix(),f,m;for(let t=0;t<i;t++){let i=this.sprites[t];if(i){if(n){if(!n(i))continue}else if(!i.isPickable)continue;if(w.TransformCoordinatesToRef(i.position,d,u),i.angle?(T.TranslationToRef(-u.x,-u.y,0,C.Matrix[1]),T.TranslationToRef(u.x,u.y,0,C.Matrix[2]),T.RotationZToRef(-i.angle,C.Matrix[3]),C.Matrix[1].multiplyToRef(C.Matrix[3],C.Matrix[4]),C.Matrix[4].multiplyToRef(C.Matrix[2],C.Matrix[0]),f=e.clone(),w.TransformCoordinatesToRef(e.origin,C.Matrix[0],f.origin),w.TransformNormalToRef(e.direction,C.Matrix[0],f.direction)):f=e,a.copyFromFloats(u.x-i.width/2,u.y-i.height/2,u.z),o.copyFromFloats(u.x+i.width/2,u.y+i.height/2,u.z),f.intersectsBoxMinMax(a,o)){let e=w.Distance(u,f.origin);if(s>e){if(!this._checkTextureAlpha(i,f,e,a,o))continue;if(m=f,s=e,c=i,r)break}}}}if(c){let e=new p;d.invertToRef(C.Matrix[0]),e.hit=!0,e.pickedSprite=c,e.distance=s;let t=C.Vector3[2];return t.copyFrom(m.direction),t.normalize(),t.scaleInPlace(s),m.origin.addToRef(t,l),e.pickedPoint=w.TransformCoordinates(l,C.Matrix[0]),e}return null}multiIntersects(e,t,n){let r=Math.min(this.capacity,this.sprites.length),i=w.Zero(),a=w.Zero(),o,s=[],c=C.Vector3[0].copyFromFloats(0,0,0),l=C.Vector3[1].copyFromFloats(0,0,0),u=t.getViewMatrix();for(let t=0;t<r;t++){let r=this.sprites[t];if(r){if(n){if(!n(r))continue}else if(!r.isPickable)continue;if(w.TransformCoordinatesToRef(r.position,u,l),i.copyFromFloats(l.x-r.width/2,l.y-r.height/2,l.z),a.copyFromFloats(l.x+r.width/2,l.y+r.height/2,l.z),e.intersectsBoxMinMax(i,a)){if(o=w.Distance(l,e.origin),!this._checkTextureAlpha(r,e,o,i,a))continue;let t=new p;s.push(t),u.invertToRef(C.Matrix[0]),t.hit=!0,t.pickedSprite=r,t.distance=o;let n=C.Vector3[2];n.copyFrom(e.direction),n.normalize(),n.scaleInPlace(o),e.origin.addToRef(n,c),t.pickedPoint=w.TransformCoordinates(c,C.Matrix[0])}}}return s}render(){if(this._fromPacked&&(!this._packedAndReady||!this._spriteMap||!this._cellData))return;let e=this._scene.getEngine().getDeltaTime();this._packedAndReady?this._spriteRenderer.render(this.sprites,e,this._scene.getViewMatrix(),this._scene.getProjectionMatrix(),this._customUpdate):this._spriteRenderer.render(this.sprites,e,this._scene.getViewMatrix(),this._scene.getProjectionMatrix())}rebuild(){this._spriteRenderer?.rebuild()}dispose(){if(this._spriteRenderer&&=(this._spriteRenderer.dispose(),null),this._textureContent=null,this._scene.spriteManagers){let e=this._scene.spriteManagers.indexOf(this);this._scene.spriteManagers.splice(e,1),this._scene._onSpriteManagerRemovedObservable?.notifyObservers(this)}if(this._parentContainer&&this._parentContainer.spriteManagers){let e=this._parentContainer.spriteManagers.indexOf(this);e>-1&&this._parentContainer.spriteManagers.splice(e,1),this._parentContainer=null}this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.metadata=null}serialize(e=!1){let t={};t.name=this.name,t.capacity=this.capacity,t.cellWidth=this.cellWidth,t.cellHeight=this.cellHeight,t.fogEnabled=this.fogEnabled,t.blendMode=this.blendMode,t.disableDepthWrite=this.disableDepthWrite,t.pixelPerfect=this.pixelPerfect,t.useLogarithmicDepth=this.useLogarithmicDepth,this.texture&&(e?t.texture=this.texture.serialize():(t.textureUrl=this.texture.name,t.invertY=this.texture._invertY)),t.sprites=[];for(let e of this.sprites)t.sprites.push(e.serialize());return t.metadata=this.metadata,t}static Parse(e,t,n){let i=new r(e.name,``,e.capacity,{width:e.cellWidth,height:e.cellHeight},t);e.fogEnabled!==void 0&&(i.fogEnabled=e.fogEnabled),e.blendMode!==void 0&&(i.blendMode=e.blendMode),e.disableDepthWrite!==void 0&&(i.disableDepthWrite=e.disableDepthWrite),e.pixelPerfect!==void 0&&(i.pixelPerfect=e.pixelPerfect),e.useLogarithmicDepth!==void 0&&(i.useLogarithmicDepth=e.useLogarithmicDepth),e.metadata!==void 0&&(i.metadata=e.metadata),e.texture?i.texture=N.Parse(e.texture,t,n):e.textureName&&(i.texture=new N(n+e.textureUrl,t,!1,e.invertY===void 0||e.invertY));for(let t of e.sprites)It.Parse(t,i);return i}static async ParseFromFileAsync(e,n,i,a=``){return await new Promise((o,s)=>{let c=new ae;c.addEventListener(`readystatechange`,()=>{if(c.readyState==4){if(c.status==200){let n=JSON.parse(c.responseText),s=r.Parse(n,i||t.LastCreatedScene,a);e&&(s.name=e),o(s)}else s(`Unable to load the sprite manager`)}}),c.open(`GET`,n),c.send()})}static ParseFromSnippetAsync(e,n,i=``){return e===`_BLANK`?Promise.resolve(new r(`Default sprite manager`,`//playground.babylonjs.com/textures/player.png`,500,64,n)):new Promise((a,o)=>{let s=new ae;s.addEventListener(`readystatechange`,()=>{if(s.readyState==4){if(s.status==200){let o=JSON.parse(JSON.parse(s.responseText).jsonPayload),c=JSON.parse(o.spriteManager),l=r.Parse(c,n||t.LastCreatedScene,i);l.snippetId=e,a(l)}else o(`Unable to load the snippet `+e)}}),s.open(`GET`,this.SnippetUrl+`/`+e.replace(/#/g,`/`)),s.send()})}};Q.SnippetUrl=`https://snippet.babylonjs.com`,Q.CreateFromSnippetAsync=Q.ParseFromSnippetAsync,zt();var Vt=class{kind;perSlot;birth;velocity;traits;color;dirty=!1;constructor(e,t,n=12){this.kind=e,this.perSlot=t;let r=n*t*4*4;this.birth=new Float32Array(r),this.velocity=new Float32Array(r),this.traits=new Float32Array(r),this.color=new Float32Array(r)}clearSlot(e){this.traits.fill(0,e*this.perSlot*16,(e+1)*this.perSlot*16),this.dirty=!0}emit(e,t,n,r,i,a,o,s,c,l=Math.random){this.clearSlot(e);let u=this.kind===`smoke`,d=t===`splash`||t===`underwater`,f=t===`muzzle`,p=u?c>900**2?3:8:d?40:f?16:32,m=f?(u?2.5:24)*a:0,h=(u?2:d?7:18)*a,g=d?u?2:18:u?2:3,_=d?u?5:32:u?5:16,v=d?[.8,.93,1,u?.14:.7]:u?[.48,.46,.42,.23]:[1,.82,.32,1],y=d?[.55,.75,.85,u?.1:.6]:u?[.22,.25,.28,.12]:[1,.28,.04,.8];for(let t=0;t<Math.min(p,this.perSlot);t++){let c=[n+(l()-.5),r+(l()-.5),i+(l()-.5),s],p=[Math.sin(o)*m+(l()*2-1)*h,g+l()*(_-g),Math.cos(o)*m+(l()*2-1)*h,u?f?.08:.6:d?-24:-15],b=u?f?4+l()*1.5:1.1+l()*1.3:.2+l()*.9,x=u&&f?1+Math.min(1,Math.max(0,a-1))*1.8:1,S=[b,((u?2:d?.4:.12)+l()*(u?2:d?.5:.18))*a*x,0,u?(l()*2-1)*.35:0],C=l(),w=v.map((e,t)=>e+(y[t]-e)*C);u&&f&&(w[3]=.65+C*.15);for(let n=0;n<4;n++){let r=(e*this.perSlot+t)*16+n*4;this.birth.set(c,r),this.velocity.set(p,r),this.traits.set(S,r),this.color.set(w,r)}}}reset(){this.traits.fill(0),this.dirty=!0}},Ht=`precision highp float;
attribute vec3 position;
attribute vec4 birth;
attribute vec4 velocity;
attribute vec4 traits;
attribute vec4 tint;
uniform mat4 viewProjection;
uniform vec3 cameraRight;
uniform vec3 cameraUp;
uniform float clock;
uniform float smoke;
uniform float sparkAtlas;
varying vec2 uv;
varying vec4 color;
varying float frame;
void main(){
 float age=clock-birth.w,life=traits.x;
 float t=clamp(age/max(life,.0001),0.,1.);
 frame=t*35.;
 float alive=step(0.,age)*(1.-step(life,age))*step(.001,life);
 float size=traits.y*mix(mix(1.,.12,t),mix(.55,1.8,t),smoke)*alive*mix(1.,2.,sparkAtlas);
 // Stable per-particle variation, shared by all four corners; no CPU updates.
 float seed=fract(sin(dot(velocity.xyz,vec3(12.9898,78.233,37.719)))*43758.5453);
 float angle=traits.z+traits.w*max(age,0.)+sparkAtlas*seed*6.283185;
 vec2 corner=mat2(cos(angle),sin(angle),-sin(angle),cos(angle))*position.xy;
 vec3 gravity=vec3(.5*smoke,velocity.w,.2*smoke);
 vec3 center=birth.xyz+velocity.xyz*max(age,0.)+.5*gravity*max(age,0.)*max(age,0.);
 uv=position.xy+.5;
 float cell=floor(seed*4.);
 uv=mix(uv,(vec2(cell,0.)+mix(vec2(.5/128.),vec2(127.5/128.),uv))/vec2(4.,1.),sparkAtlas);
 color=mix(tint,vec4(.16,.19,.21,0.),t);color.a*=alive;
 if(smoke>.5)color.a=tint.a*alive*(1.-smoothstep(.45,1.,t));
 gl_Position=viewProjection*vec4(center+(cameraRight*corner.x+cameraUp*corner.y)*size,1.);
}`,Ut=`precision highp float;
uniform sampler2D particleMap;
uniform float smokeAtlas;
varying vec2 uv;
varying vec4 color;
varying float frame;
${et}
void main(){vec4 tex=smokeAtlas>.5?lazyFlipbook(uv,frame):texture2D(particleMap,uv);gl_FragColor=tex*color;if(gl_FragColor.a<.001)discard;}`,Wt=class{scene;sparkTexture;smokeTexture;disposed=!1;batches=[];right=w.Right();up=w.Up();inverse=T.Identity();beforeRender=()=>{let e=this.scene.activeCamera;if(!e)return;e.getViewMatrix().invertToRef(this.inverse);let t=this.inverse.m;this.right.set(t[0],t[1],t[2]),this.up.set(t[4],t[5],t[6]);for(let e of this.batches)e.material.setVector3(`cameraRight`,this.right),e.material.setVector3(`cameraUp`,this.up)};constructor(e,t){this.scene=e;for(let[n,r]of[[`spark`,32],[`water`,40],[`smoke`,8]]){let i=n===`smoke`?32:12,a=new Vt(n,r,i),c=new s(`native-impact-batch-`+n,e),l=[],u=[];for(let e=0;e<i*r;e++){l.push(-.5,-.5,0,.5,-.5,0,-.5,.5,0,.5,.5,0);let t=e*4;u.push(t,t+1,t+2,t+2,t+1,t+3)}c.setVerticesData(`position`,l),c.setIndices(u);for(let[e,t]of[[`birth`,a.birth],[`velocity`,a.velocity],[`traits`,a.traits],[`tint`,a.color]])c.setVerticesData(e,t,!0,4);let d=new o(c.name,e,{vertexSource:Ht,fragmentSource:Ut},{attributes:[`position`,`birth`,`velocity`,`traits`,`tint`],uniforms:[`viewProjection`,`cameraRight`,`cameraUp`,`clock`,`smoke`,`sparkAtlas`,`smokeAtlas`],samplers:[`particleMap`],needAlphaBlending:!0});d.backFaceCulling=!1,d.disableDepthWrite=!0,d.alphaMode=n===`spark`?k.ALPHA_ADD:k.ALPHA_COMBINE,d.setTexture(`particleMap`,t[+(n===`smoke`)]),d.setFloat(`smoke`,+(n===`smoke`)),d.setFloat(`clock`,0),d.setVector3(`cameraRight`,this.right),d.setVector3(`cameraUp`,this.up),d.setFloat(`sparkAtlas`,0),d.setFloat(`smokeAtlas`,0),n===`smoke`&&new URLSearchParams(location.search).get(`lazyVfx`)!==`0`&&(this.smokeTexture=new N(`./vfx/lazy/smoke-atlas.png`,e,!1,!1,N.TRILINEAR_SAMPLINGMODE,()=>{this.disposed||(d.setTexture(`particleMap`,this.smokeTexture),d.setFloat(`smokeAtlas`,1))}),this.smokeTexture.hasAlpha=!0,this.smokeTexture.gammaSpace=!1,this.smokeTexture.wrapU=this.smokeTexture.wrapV=N.CLAMP_ADDRESSMODE),n===`spark`&&new URLSearchParams(location.search).get(`impactSparks`)!==`0`&&(this.sparkTexture=new N(`./vfx/omega/sparks-atlas.png`,e,!1,!1,N.TRILINEAR_SAMPLINGMODE,()=>{this.disposed||(d.setTexture(`particleMap`,this.sparkTexture),d.setFloat(`sparkAtlas`,1))}),this.sparkTexture.hasAlpha=!0,this.sparkTexture.gammaSpace=!1,this.sparkTexture.wrapU=this.sparkTexture.wrapV=N.CLAMP_ADDRESSMODE),c.material=d,c.isPickable=!1,c.alwaysSelectAsActiveMesh=!0,c.setEnabled(!1),this.batches.push({data:a,mesh:c,material:d,expires:new Float64Array(i)})}e.onBeforeRenderObservable.add(this.beforeRender)}isReady(){return this.batches.every(e=>e.material.isReady(e.mesh))}burst(e,t,n,r,i,a,o,s){let c=e===`splash`||e===`underwater`,l=!1;for(let u of this.batches){if(u.data.kind!==`smoke`&&u.data.kind!==(c?`water`:`spark`))continue;let d=u.expires.findIndex(e=>e<=o);d<0||(u.expires[d]=o+(u.data.kind===`smoke`?e===`muzzle`?5.6:2.6:1.2),u.data.emit(d,e,t,n,r,i,a,o,s),l=!0)}return l}update(e){for(let t of this.batches){if(t.data.dirty){for(let[e,n]of[[`birth`,t.data.birth],[`velocity`,t.data.velocity],[`traits`,t.data.traits],[`tint`,t.data.color]])t.mesh.updateVerticesData(e,n);t.data.dirty=!1}t.material.setFloat(`clock`,e),t.mesh.setEnabled(t.expires.some(t=>t>e))}}reset(){for(let e of this.batches)e.expires.fill(0),e.data.reset(),e.mesh.setEnabled(!1)}dispose(){this.disposed=!0,this.scene.onBeforeRenderObservable.removeCallback(this.beforeRender),this.sparkTexture?.dispose(),this.smokeTexture?.dispose();for(let e of this.batches)e.mesh.dispose(),e.material.dispose();this.batches.length=0}};function $(e,t){let n=Math.max(.65,Math.min(2.3,e/203)),r=Math.max(0,Math.min(1,(e-203)/203));return{size:(12+(t<81e4?10:5)*r)*n,duration:.26+.2*r,forward:(12+14*r)*n,pressure:(20+10*r)*n}}var Gt=class{scene;mesh;material;texture;origins=new Float32Array(384);axes=new Float32Array(384);ends=new Float64Array(24);cursor=0;dirty=!1;constructor(e){this.scene=e,this.mesh=new s(`directional-muzzle-flames`,e);let t=[],n=[];for(let e=0;e<24;e++){t.push(0,-.5,0,1,-.5,0,0,.5,0,1,.5,0);let r=e*4;n.push(r,r+1,r+2,r+2,r+1,r+3)}this.mesh.setVerticesData(`position`,t),this.mesh.setIndices(n),this.mesh.setVerticesData(`origin`,this.origins,!0,4),this.mesh.setVerticesData(`axis`,this.axes,!0,4),this.material=new o(`directional-muzzle`,e,{vertexSource:`precision highp float;
attribute vec3 position;
attribute vec4 origin;
attribute vec4 axis;
uniform mat4 viewProjection;
uniform vec3 eye;
uniform float clock;
varying vec2 uv;
varying float age;
varying float opacity;
void main(){
 age=clamp((clock-origin.w)/max(.001,axis.w),0.,1.);
 opacity=step(.001,axis.w)*(1.-step(1.,age));
 uv=position.xy+vec2(0.,.5);
 if(opacity<.5){gl_Position=vec4(2.,2.,2.,1.);return;}
 vec3 forward=vec3(axis.x,0.,axis.y);
 vec3 lateral=cross(forward,normalize(eye-origin.xyz));
 if(dot(lateral,lateral)<.001)lateral=vec3(axis.y,0.,-axis.x);
 lateral=normalize(lateral);
 float expansion=.35+.65*(1.-exp(-age*12.));
 float length=axis.z*expansion;
 vec3 p=origin.xyz+forward*(position.x*length);
 p+=lateral*position.y*length*.68;
 p.y=max(2.5,p.y);
 uv=position.xy+vec2(0.,.5);
 gl_Position=viewProjection*vec4(p,1.);
}`,fragmentSource:`precision highp float;
uniform sampler2D flame;
varying vec2 uv;
varying float age;
varying float opacity;
void main(){
 float frame=min(31.,floor(age*32.));
 // Narrow root and widening gas plume, fixed to the muzzle at u=0.
 float width=mix(.12,1.,smoothstep(0.,.55,uv.x));
 vec2 local=vec2(uv.x,(uv.y-.5)/width+.5);
 float mask=step(0.,local.y)*step(local.y,1.);
 vec2 cell=vec2(mod(frame,8.),floor(frame/8.));
 vec4 tex=texture2D(flame,(cell+clamp(local,vec2(.002),vec2(.998)))/vec2(8.,4.));
 tex.rgb=mix(tex.rgb,vec3(1.,.87,.55),.12*(1.-age));
 tex.a*=mask*opacity*(1.-smoothstep(.6,1.,age));
 float core=exp(-pow((uv.y-.5)/(.018+.13*uv.x),2.))*(1.-smoothstep(.12,.55,uv.x))*opacity*(1.-smoothstep(.35,.8,age));
 tex.rgb=mix(tex.rgb,vec3(1.,.94,.72),core);
 tex.a=max(tex.a,core*.95);
 gl_FragColor=tex;
}`},{attributes:[`position`,`origin`,`axis`],uniforms:[`viewProjection`,`eye`,`clock`],samplers:[`flame`],needAlphaBlending:!0}),this.texture=new N(`./vfx/lazy/muzzle-atlas.png`,e,!1,!1),this.texture.hasAlpha=!0,this.material.setTexture(`flame`,this.texture),this.material.backFaceCulling=!1,this.material.disableDepthWrite=!0,this.mesh.material=this.material,this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setEnabled(!1)}emit(e,t,n,r,i,a,o){let s=this.cursor++%24,c=$(i*203,o),l=Math.sin(r),u=Math.cos(r),d=c.size*.72;for(let r=0;r<4;r++){let i=s*16+r*4;this.origins[i]=e,this.origins[i+1]=t,this.origins[i+2]=n,this.origins[i+3]=a,this.axes[i]=l,this.axes[i+1]=u,this.axes[i+2]=d,this.axes[i+3]=c.duration}this.ends[s]=a+c.duration,this.dirty=!0}update(e){let t=this.ends.some(t=>t>e);this.mesh.setEnabled(t),t&&(this.dirty&&=(this.mesh.updateVerticesData(`origin`,this.origins),this.mesh.updateVerticesData(`axis`,this.axes),!1),this.material.setFloat(`clock`,e),this.material.setVector3(`eye`,this.scene.activeCamera.position))}reset(){this.ends.fill(0),this.axes.fill(0),this.dirty=!0,this.mesh.setEnabled(!1)}dispose(){this.mesh.dispose(),this.material.dispose(),this.texture.dispose()}},Kt=12,qt=class{scene;lighting;directional;columns;texturedWater=!1;seen=new WeakSet;slots=[];batches;atlas;sprites=[];maps=[];ring;ringMaterial;waves=Array.from({length:48},()=>({x:0,z:0,life:0,size:0,heading:0,muzzle:!1}));waveCursor=0;matrices=new Float32Array(768);alphas=new Float32Array(48);clock=0;lastMuzzle={x:1/0,z:1/0,time:-1};warmup=()=>{let e=this.batches?.isReady()??!0;for(let t of this.slots)for(let n of[t.spray,t.smoke])e=n.isReady()&&e;e&&this.scene.onBeforeRenderObservable.removeCallback(this.warmup)};gpu;constructor(e){this.scene=e,this.lighting=new nt(e),this.directional=new Gt(e),this.gpu=e.getEngine().getCaps().supportComputeShaders||e.getEngine().getCaps().supportTransformFeedbacks,this.maps=[!1,!0].map(t=>{let n=Ee(t),r=n.getContext(`2d`).getImageData(0,0,n.width,n.height).data,i=a.CreateRGBATexture(r,n.width,n.height,e,!0,!1,N.TRILINEAR_SAMPLINGMODE);return i.hasAlpha=!0,i.gammaSpace=!0,i}),this.columns=new ct(e,this.maps[1]),this.atlas=new Q(`impact-flipbooks`,`./vfx/blender/explosion-atlas.png`,48,256,e),this.atlas.isPickable=!1;for(let e=0;e<48;e++){let t=new It(`impact-`+e,this.atlas);t.isVisible=!1,this.sprites.push({sprite:t,age:10,duration:1,size:1,forward:w.Zero(),muzzle:!1,muzzleOnly:!1})}if(new URLSearchParams(location.search).get(`impactBatches`)!==`0`)this.batches=new Wt(e,this.maps);else for(let e=0;e<Kt;e++){let t=this.makeLayer(`spray-`+e,96,!1),n=this.makeLayer(`smoke-`+e,24,!0);this.slots.push({spray:t,smoke:n,life:0}),this.detach(t),this.detach(n)}this.ring=new s(`native-pressure-waves`,e);let t=[],n=[];for(let e=0;e<=48;e++){let r=e/48*Math.PI*2;for(let e of[.4,1])t.push(Math.cos(r)*e,0,Math.sin(r)*e);if(e<48){let t=e*2;n.push(t,t+1,t+2,t+1,t+3,t+2)}}this.ring.setVerticesData(`position`,t),this.ring.setIndices(n),this.ring.alwaysSelectAsActiveMesh=!0,this.ring.isPickable=!1,this.ringMaterial=new o(`pressure-fade`,e,{vertexSource:`precision highp float;
attribute vec3 position;
attribute float waveAlpha;
uniform mat4 viewProjection;
varying float opacity;
varying float radialEdge;
varying vec2 mistUV;
#include<instancesDeclaration>
void main(){
#include<instancesVertex>
opacity=waveAlpha;mistUV=position.xz*.5+.5;radialEdge=(length(position.xz)-.4)/.6;gl_Position=viewProjection*finalWorld*vec4(position,1.);
}`,fragmentSource:`precision highp float;
varying float opacity;
varying float radialEdge;
varying vec2 mistUV;
uniform sampler2D mistMap;
void main(){float cloud=texture2D(mistMap,mistUV).a;float breakup=texture2D(mistMap,mistUV*3.7).a;float softEdge=smoothstep(0.,.3,radialEdge)*(1.-smoothstep(.6,1.,radialEdge));gl_FragColor=vec4(.85,.91,.94,opacity*softEdge*cloud*(.35+breakup)*2.);}`},{attributes:[`position`,`waveAlpha`],uniforms:[`world`,`viewProjection`],samplers:[`mistMap`],needAlphaBlending:!0}),this.ringMaterial.setTexture(`mistMap`,this.maps[1]),this.ringMaterial.backFaceCulling=!1,this.ringMaterial.disableDepthWrite=!0,this.ring.material=this.ringMaterial,this.ring.thinInstanceSetBuffer(`matrix`,this.matrices,16,!1),this.ring.thinInstanceSetBuffer(`waveAlpha`,this.alphas,1,!1),this.ring.setEnabled(!1),this.scene.onBeforeRenderObservable.add(this.warmup)}detach(e){let t=this.scene.particleSystems.indexOf(e);t>=0&&this.scene.particleSystems.splice(t,1)}attach(e){this.scene.particleSystems.includes(e)||this.scene.particleSystems.push(e)}makeLayer(e,t,n){let r=this.gpu?new v(e,{capacity:t,randomTextureSize:128},this.scene):new h(e,t,this.scene);return r instanceof v&&(r.emitRateControl=!0),r.particleTexture=this.maps[+!!n],r.emitter=w.Zero(),r.emitRate=0,r.manualEmitCount=0,r.updateSpeed=1/60,r.minLifeTime=n?1.1:.2,r.maxLifeTime=n?2.4:1.1,r.blendMode=n?h.BLENDMODE_STANDARD:h.BLENDMODE_ADD,r.minAngularSpeed=n?-.35:0,r.maxAngularSpeed=n?.35:0,r.addSizeGradient(0,n?.55:1),r.addSizeGradient(1,n?1.8:.12),r.colorDead=new E(.16,.19,.21,0),r}burst(e,t,n,r,i,a=0){let o=e===`splash`||e===`underwater`,s=e===`muzzle`,c=w.DistanceSquared(this.scene.activeCamera?.position??w.Zero(),new w(t,n,r));if(c>625e4)return;if(s&&this.lighting.emit(t,n,r,i),s&&this.directional.emit(t,n,r,a,i,this.clock,c),!o&&!s){let o=this.sprites.find(e=>e.muzzleOnly===s&&e.age>=e.duration);if(!o)for(let e of this.sprites)e.muzzleOnly===s&&(!o||e.age/e.duration>o.age/o.duration)&&(o=e);if(!o)return;let l=$(i*203,c);o.muzzle=s,o.age=0,o.duration=s?l.duration:e===`boom`?1.65:.85,o.size=s?l.size:(e===`boom`?32:15)*i;let u=s?o.size*.22:0;o.sprite.position.set(t+Math.sin(a)*u,n+o.size*(s?.12:.22),r+Math.cos(a)*u),o.forward.set(s?Math.sin(a)*l.forward:0,1.5,s?Math.cos(a)*l.forward:0),o.sprite.cellIndex=0,o.sprite.size=o.size,o.sprite.color.a=1,o.sprite.isVisible=!0}if(o&&!this.texturedWater||s){let e=this.waves[this.waveCursor++%48],n=$(i*203,c).pressure;Object.assign(e,{x:t+(s?Math.sin(a)*n*.18:0),z:r+(s?Math.cos(a)*n*.18:0),life:.7,size:o?13*i:n,heading:a,muzzle:s})}if(this.batches){this.batches.burst(e,t,n,r,i,a,this.clock,c);return}let l=this.slots.find(e=>e.life<=0);if(l){l.life=s?5.6:2.6;for(let[e,u]of[[l.spray,!1],[l.smoke,!0]]){e.minLifeTime=u?s?4:1.1:.2,e.maxLifeTime=u?s?5.5:2.4:1.1,e.emitter instanceof w&&e.emitter.set(t,n,r),e.minEmitPower=1,e.maxEmitPower=1;let l=s?(u?6:24)*i:0,d=(u?2:o?7:18)*i;e.direction1.set(Math.sin(a)*l-d,o?u?2:18:u?2:3,Math.cos(a)*l-d),e.direction2.set(Math.sin(a)*l+d,o?u?5:32:u?5:16,Math.cos(a)*l+d),e.gravity.set(u?.5:0,u?.6:o?-24:-15,u?.2:0),e.minSize=(u?2:o?.4:.12)*i,e.maxSize=(u?4:o?.9:.3)*i,e.color1=o?new E(.8,.93,1,u?.14:.7):u?new E(.48,.46,.42,.23):new E(1,.82,.32,1),u&&s&&(e.color1.a=.8),e.color2=o?new E(.55,.75,.85,u?.1:.6):u?new E(.22,.25,.28,.12):new E(1,.28,.04,.8),u&&s&&(e.color2.a=.65),e.blendMode=o||u?h.BLENDMODE_STANDARD:h.BLENDMODE_ADD,e.manualEmitCount=u?c>81e4?3:8:o?40:s?16:32,this.attach(e),e.start()}}}muzzle(e,t,n=203){let r=this.lastMuzzle;this.clock-r.time<.04&&(e.x-r.x)**2+(e.z-r.z)**2<9||(Object.assign(r,{x:e.x,z:e.z,time:this.clock}),this.burst(`muzzle`,e.x,e.y,e.z,Math.max(.65,Math.min(2.3,n/203)),t))}update(e,t){this.clock+=t,this.lighting.update(t),this.directional.update(this.clock);for(let t of e)this.seen.has(t)||(this.seen.add(t),(t.kind===`splash`&&t.caliber!==void 0||t.kind===`underwater`)&&w.DistanceSquared(this.scene.activeCamera.position,new w(t.x,0,t.z))<625e4&&this.columns.emit(t.x,t.z,t.caliber??127,t.id,this.clock,t.kind===`underwater`?t.damage??65:void 0,t.waterKind),t.kind!==`cast`&&this.burst(t.kind,t.x,t.kind===`splash`||t.kind===`underwater`?.6:3,t.z,t.kind===`boom`?1.6:t.kind===`underwater`?K(t.damage,t.id,t.waterKind).scale:t.caliber?G(t.caliber,t.id).scale:1));this.columns.update(this.clock),this.batches?.update(this.clock);for(let e of this.slots)if(!(e.life<=0)){e.life-=t;for(let n of[e.spray,e.smoke])n.updateSpeed=t>0?1/60:0;if(e.life<=0)for(let t of[e.spray,e.smoke])t.stop(),this.detach(t)}let n=Math.abs(this.scene.activeCamera?.getViewMatrix().m[5]??1);for(let e of this.sprites){if(e.age>=e.duration)continue;if(e.age+=t,e.age>=e.duration){e.sprite.isVisible=!1;continue}let r=e.age/e.duration;e.sprite.cellIndex=Math.min(31,Math.floor(r*32)),e.sprite.color.a=Math.min(1,(1-r)*5),e.sprite.position.addInPlaceFromFloats(e.forward.x*t,e.forward.y*t,e.forward.z*t),e.sprite.size=e.size*(e.muzzle?.28+.9*(1-Math.exp(-r*8)):.8+.2*Math.sqrt(r)),e.muzzle&&(e.sprite.position.y=Math.max(e.sprite.position.y,2.5+e.sprite.size*.5*n))}let r=0;for(let e of this.waves){if(e.life=Math.max(0,e.life-t),e.life<=0)continue;let n=1-e.life/.7,i=2+e.size*(1-(1-n)**2),a=r*16,o=Math.cos(e.heading),s=Math.sin(e.heading),c=i*(e.muzzle?.65:1),l=i*(e.muzzle?1.25:1);this.matrices.fill(0,a,a+16),this.matrices[a]=o*c,this.matrices[a+2]=-s*c,this.matrices[a+5]=1,this.matrices[a+8]=s*l,this.matrices[a+10]=o*l,this.matrices[a+12]=e.x,this.matrices[a+13]=.8,this.matrices[a+14]=e.z,this.matrices[a+15]=1,this.alphas[r]=(e.muzzle?.48:.32)*(1-n)**2,r++}this.ring.setEnabled(r>0),this.ring.thinInstanceCount=r,r&&(this.ring.thinInstanceBufferUpdated(`matrix`),this.ring.thinInstanceBufferUpdated(`waveAlpha`))}reset(){this.columns.reset(),this.directional.reset(),this.lighting.reset(),this.seen=new WeakSet,this.batches?.reset();for(let e of this.slots){e.life=0;for(let t of[e.spray,e.smoke])t.stop(),t.reset(),this.detach(t)}for(let e of this.sprites)e.age=e.duration,e.sprite.isVisible=!1;for(let e of this.waves)e.life=0;this.ring.setEnabled(!1),this.lastMuzzle.time=-1}dispose(){this.columns.dispose(),this.directional.dispose(),this.lighting.dispose(),this.scene.onBeforeRenderObservable.removeCallback(this.warmup),this.batches?.dispose();for(let e of this.slots)e.spray.dispose(!1),e.smoke.dispose(!1);this.atlas.dispose();for(let e of this.maps)e.dispose();this.ring.dispose(),this.ringMaterial.dispose()}};export{L as _,rt as a,$e as c,B as d,Xe as f,Ye as g,qe as h,st as i,He as l,Je as m,G as n,tt as o,Ze as p,K as r,et as s,qt as t,V as u};