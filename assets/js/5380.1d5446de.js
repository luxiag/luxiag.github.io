"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5380],{61935:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},76690:(e,t,n)=>{n.d(t,{$:()=>a});var o=n(86171);const i={type:"change"},r={type:"start"},s={type:"end"};class a extends o.pBf{constructor(e,t){super();const n=this,a=-1;this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:o.RsA.ROTATE,MIDDLE:o.RsA.DOLLY,RIGHT:o.RsA.PAN},this.target=new o.Pa4;const c=1e-6,u=new o.Pa4;let l=1,d=a,h=a,p=0,f=0,m=0;const y=new o.Pa4,g=new o.FM8,_=new o.FM8,b=new o.Pa4,w=new o.FM8,v=new o.FM8,E=new o.FM8,k=new o.FM8,I=[],C={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const e=n.domElement.getBoundingClientRect(),t=n.domElement.ownerDocument.documentElement;n.screen.left=e.left+window.pageXOffset-t.clientLeft,n.screen.top=e.top+window.pageYOffset-t.clientTop,n.screen.width=e.width,n.screen.height=e.height};const T=function(){const e=new o.FM8;return function(t,o){return e.set((t-n.screen.left)/n.screen.width,(o-n.screen.top)/n.screen.height),e}}(),j=function(){const e=new o.FM8;return function(t,o){return e.set((t-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-o))/n.screen.width),e}}();function P(e){!1!==n.enabled&&(0===I.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",D),n.domElement.addEventListener("pointerup",L)),function(e){I.push(e)}(e),"touch"===e.pointerType?function(e){if(1===(F(e),I.length))d=3,_.copy(j(I[0].pageX,I[0].pageY)),g.copy(_);else{d=4;const e=I[0].pageX-I[1].pageX,t=I[0].pageY-I[1].pageY;f=p=Math.sqrt(e*e+t*t);const n=(I[0].pageX+I[1].pageX)/2,o=(I[0].pageY+I[1].pageY)/2;E.copy(T(n,o)),k.copy(E)}n.dispatchEvent(r)}(e):function(e){if(d===a)switch(e.button){case n.mouseButtons.LEFT:d=0;break;case n.mouseButtons.MIDDLE:d=1;break;case n.mouseButtons.RIGHT:d=2}const t=h!==a?h:d;0!==t||n.noRotate?1!==t||n.noZoom?2!==t||n.noPan||(E.copy(T(e.pageX,e.pageY)),k.copy(E)):(w.copy(T(e.pageX,e.pageY)),v.copy(w)):(_.copy(j(e.pageX,e.pageY)),g.copy(_)),n.dispatchEvent(r)}(e))}function D(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){if(1===(F(e),I.length))g.copy(_),_.copy(j(e.pageX,e.pageY));else{const t=function(e){const t=e.pointerId===I[0].pointerId?I[1]:I[0];return C[t.pointerId]}(e),n=e.pageX-t.x,o=e.pageY-t.y;f=Math.sqrt(n*n+o*o);const i=(e.pageX+t.x)/2,r=(e.pageY+t.y)/2;k.copy(T(i,r))}}(e):function(e){const t=h!==a?h:d;0!==t||n.noRotate?1!==t||n.noZoom?2!==t||n.noPan||k.copy(T(e.pageX,e.pageY)):v.copy(T(e.pageX,e.pageY)):(g.copy(_),_.copy(j(e.pageX,e.pageY)))}(e))}function L(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(I.length){case 0:d=a;break;case 1:d=3,_.copy(j(e.pageX,e.pageY)),g.copy(_);break;case 2:d=4;for(let t=0;t<I.length;t++)if(I[t].pointerId!==e.pointerId){const e=C[I[t].pointerId];_.copy(j(e.x,e.y)),g.copy(_);break}}n.dispatchEvent(s)}(e):(d=a,n.dispatchEvent(s)),R(e),0===I.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",L)))}function M(e){R(e)}function S(e){!1!==n.enabled&&(window.removeEventListener("keydown",S),h===a&&(e.code!==n.keys[0]||n.noRotate?e.code!==n.keys[1]||n.noZoom?e.code!==n.keys[2]||n.noPan||(h=2):h=1:h=0))}function A(){!1!==n.enabled&&(h=a,window.addEventListener("keydown",S))}function x(e){if(!1!==n.enabled&&!0!==n.noZoom){switch(e.preventDefault(),e.deltaMode){case 2:w.y-=.025*e.deltaY;break;case 1:w.y-=.01*e.deltaY;break;default:w.y-=25e-5*e.deltaY}n.dispatchEvent(r),n.dispatchEvent(s)}}function O(e){!1!==n.enabled&&e.preventDefault()}function R(e){delete C[e.pointerId];for(let t=0;t<I.length;t++)if(I[t].pointerId==e.pointerId)return void I.splice(t,1)}function F(e){let t=C[e.pointerId];void 0===t&&(t=new o.FM8,C[e.pointerId]=t),t.set(e.pageX,e.pageY)}this.rotateCamera=function(){const e=new o.Pa4,t=new o._fP,i=new o.Pa4,r=new o.Pa4,s=new o.Pa4,a=new o.Pa4;return function(){a.set(_.x-g.x,_.y-g.y,0);let o=a.length();o?(y.copy(n.object.position).sub(n.target),i.copy(y).normalize(),r.copy(n.object.up).normalize(),s.crossVectors(r,i).normalize(),r.setLength(_.y-g.y),s.setLength(_.x-g.x),a.copy(r.add(s)),e.crossVectors(a,y).normalize(),o*=n.rotateSpeed,t.setFromAxisAngle(e,o),y.applyQuaternion(t),n.object.up.applyQuaternion(t),b.copy(e),m=o):!n.staticMoving&&m&&(m*=Math.sqrt(1-n.dynamicDampingFactor),y.copy(n.object.position).sub(n.target),t.setFromAxisAngle(b,m),y.applyQuaternion(t),n.object.up.applyQuaternion(t)),g.copy(_)}}(),this.zoomCamera=function(){let e;4===d?(e=p/f,p=f,n.object.isPerspectiveCamera?y.multiplyScalar(e):n.object.isOrthographicCamera?(n.object.zoom/=e,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(v.y-w.y)*n.zoomSpeed,1!==e&&e>0&&(n.object.isPerspectiveCamera?y.multiplyScalar(e):n.object.isOrthographicCamera?(n.object.zoom/=e,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?w.copy(v):w.y+=(v.y-w.y)*this.dynamicDampingFactor)},this.panCamera=function(){const e=new o.FM8,t=new o.Pa4,i=new o.Pa4;return function(){if(e.copy(k).sub(E),e.lengthSq()){if(n.object.isOrthographicCamera){const t=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,o=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;e.x*=t,e.y*=o}e.multiplyScalar(y.length()*n.panSpeed),i.copy(y).cross(n.object.up).setLength(e.x),i.add(t.copy(n.object.up).setLength(e.y)),n.object.position.add(i),n.target.add(i),n.staticMoving?E.copy(k):E.add(e.subVectors(k,E).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){n.noZoom&&n.noPan||(y.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,y.setLength(n.maxDistance)),w.copy(v)),y.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,y.setLength(n.minDistance)),w.copy(v)))},this.update=function(){y.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,y),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),u.distanceToSquared(n.object.position)>c&&(n.dispatchEvent(i),u.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(u.distanceToSquared(n.object.position)>c||l!==n.object.zoom)&&(n.dispatchEvent(i),u.copy(n.object.position),l=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){d=a,h=a,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),y.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(i),u.copy(n.object.position),l=n.object.zoom},this.dispose=function(){n.domElement.removeEventListener("contextmenu",O),n.domElement.removeEventListener("pointerdown",P),n.domElement.removeEventListener("pointercancel",M),n.domElement.removeEventListener("wheel",x),n.domElement.removeEventListener("pointermove",D),n.domElement.removeEventListener("pointerup",L),window.removeEventListener("keydown",S),window.removeEventListener("keyup",A)},this.domElement.addEventListener("contextmenu",O),this.domElement.addEventListener("pointerdown",P),this.domElement.addEventListener("pointercancel",M),this.domElement.addEventListener("wheel",x,{passive:!1}),window.addEventListener("keydown",S),window.addEventListener("keyup",A),this.handleResize(),this.update()}}},24935:(e,t,n)=>{n.d(t,{w:()=>r});var o=function(){this._tweens={},this._tweensAddedDuringUpdate={}};o.prototype={getAll:function(){return Object.keys(this._tweens).map(function(e){return this._tweens[e]}.bind(this))},removeAll:function(){this._tweens={}},add:function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},remove:function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},update:function(e,t){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(e=void 0!==e?e:r.now();0<n.length;){this._tweensAddedDuringUpdate={};for(var o=0;o<n.length;o++){var i=this._tweens[n[o]];i&&!1===i.update(e)&&(i._isPlaying=!1,t||delete this._tweens[n[o]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var i,r=new o;r.Group=o,r._nextId=0,r.nextId=function(){return r._nextId++},"undefined"==typeof self&&"undefined"!=typeof process&&process.hrtime?r.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?r.now=self.performance.now.bind(self.performance):void 0!==Date.now?r.now=Date.now:r.now=function(){return(new Date).getTime()},r.Tween=function(e,t){this._object=e,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=r.Easing.Linear.None,this._interpolationFunction=r.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||r,this._id=r.nextId()},r.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(e,t){return this._valuesEnd=Object.create(e),void 0!==t&&(this._duration=t),this},duration:function(e){return this._duration=e,this},start:function(e){for(var t in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==e?"string"==typeof e?r.now()+parseFloat(e):e:r.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(0===this._valuesEnd[t].length)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}void 0!==this._object[t]&&(this._valuesStart[t]=this._object[t],this._valuesStart[t]instanceof Array==0&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop()},group:function(e){return this._group=e,this},delay:function(e){return this._delayTime=e,this},repeat:function(e){return this._repeat=e,this},repeatDelay:function(e){return this._repeatDelayTime=e,this},yoyo:function(e){return this._yoyo=e,this},easing:function(e){return this._easingFunction=e,this},interpolation:function(e){return this._interpolationFunction=e,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(e){return this._onStartCallback=e,this},onUpdate:function(e){return this._onUpdateCallback=e,this},onComplete:function(e){return this._onCompleteCallback=e,this},onStop:function(e){return this._onStopCallback=e,this},update:function(e){var t,n,o;if(e<this._startTime)return!0;for(t in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=0===this._duration||1<n?1:n,o=this._easingFunction(n),this._valuesEnd)if(void 0!==this._valuesStart[t]){var i=this._valuesStart[t]||0,r=this._valuesEnd[t];r instanceof Array?this._object[t]=this._interpolationFunction(r,o):("string"==typeof r&&(r="+"===r.charAt(0)||"-"===r.charAt(0)?i+parseFloat(r):parseFloat(r)),"number"==typeof r&&(this._object[t]=i+(r-i)*o))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1!==n)return!0;if(0<this._repeat){for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[t]&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var s=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=s}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration);return!1}},r.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return 0===e?0:1===e?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){return e*e*(2.70158*e-1.70158)},Out:function(e){return--e*e*(2.70158*e+1.70158)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((1+t)*e-t)*.5:.5*((e-=2)*e*((1+t)*e+t)+2)}},Bounce:{In:function(e){return 1-r.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*r.Easing.Bounce.In(2*e):.5*r.Easing.Bounce.Out(2*e-1)+.5}}},r.Interpolation={Linear:function(e,t){var n=e.length-1,o=n*t,i=Math.floor(o),s=r.Interpolation.Utils.Linear;return t<0?s(e[0],e[1],o):1<t?s(e[n],e[n-1],n-o):s(e[i],e[n<i+1?n:i+1],o-i)},Bezier:function(e,t){for(var n=0,o=e.length-1,i=Math.pow,s=r.Interpolation.Utils.Bernstein,a=0;a<=o;a++)n+=i(1-t,o-a)*i(t,a)*e[a]*s(o,a);return n},CatmullRom:function(e,t){var n=e.length-1,o=n*t,i=Math.floor(o),s=r.Interpolation.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(i=Math.floor(o=n*(1+t))),s(e[(i-1+n)%n],e[i],e[(i+1)%n],e[(i+2)%n],o-i)):t<0?e[0]-(s(e[0],e[0],e[1],e[1],-o)-e[0]):1<t?e[n]-(s(e[n],e[n],e[n-1],e[n-1],o-n)-e[n]):s(e[i?i-1:0],e[i],e[n<i+1?n:i+1],e[n<i+2?n:i+2],o-i)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=r.Interpolation.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:(i=[1],function(e){var t=1;if(i[e])return i[e];for(var n=e;1<n;n--)t*=n;return i[e]=t}),CatmullRom:function(e,t,n,o,i){var r=.5*(n-e),s=.5*(o-t),a=i*i;return(2*t-2*n+r+s)*(i*a)+(-3*t+3*n-2*r-s)*a+r*i+t}}},"function"==typeof define&&define.amd?define([],(function(){return r})):"undefined"!=typeof module&&"object"==typeof exports&&(module.exports=r)},75306:(e,t,n)=>{n.d(t,{_:()=>r});var o=n(86171);const i=new WeakMap;class r extends o.aNw{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new o.hH6(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,(e=>{this.decodeDracoFile(e,t).catch(i)}),n,i)}decodeDracoFile(e,t,n,o){const i={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:o||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,i).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(i.has(e)){const t=i.get(e);if(t.key===n)return t.promise;if(0===e.byteLength)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let o;const r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then((n=>(o=n,new Promise(((n,i)=>{o._callbacks[r]={resolve:n,reject:i},o.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))))).then((e=>this._createGeometry(e.geometry)));return a.catch((()=>!0)).then((()=>{o&&r&&this._releaseTask(o,r)})),i.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new o.u9r;e.index&&t.setIndex(new o.TlE(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,a=i.itemSize;t.setAttribute(r,new o.TlE(s,a))}return t}_loadLibrary(e,t){const n=new o.hH6(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise(((t,o)=>{n.load(e,t,void 0,o)}))}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then((t=>{const n=t[0];e||(this.decoderConfig.wasmBinary=t[1]);const o=s.toString(),i=["/* draco decoder */",n,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([i]))})),this.decoderPending}_getWorker(e,t){return this._initDecoder().then((()=>{if(this.workerPool.length<this.workerLimit){const e=new Worker(this.workerSourceURL);e._callbacks={},e._taskCosts={},e._taskLoad=0,e.postMessage({type:"init",decoderConfig:this.decoderConfig}),e.onmessage=function(t){const n=t.data;switch(n.type){case"decode":e._callbacks[n.id].resolve(n);break;case"error":e._callbacks[n.id].reject(n);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+n.type+'"')}},this.workerPool.push(e)}else this.workerPool.sort((function(e,t){return e._taskLoad>t._taskLoad?-1:1}));const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n}))}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map((e=>e._taskLoad)))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function s(){let e,t;function n(e,t,n,o,i,r){const s=r.num_components(),a=n.num_points()*s,c=a*i.BYTES_PER_ELEMENT,u=function(e,t){switch(t){case Float32Array:return e.DT_FLOAT32;case Int8Array:return e.DT_INT8;case Int16Array:return e.DT_INT16;case Int32Array:return e.DT_INT32;case Uint8Array:return e.DT_UINT8;case Uint16Array:return e.DT_UINT16;case Uint32Array:return e.DT_UINT32}}(e,i),l=e._malloc(c);t.GetAttributeDataArrayForAllPoints(n,r,u,c,l);const d=new i(e.HEAPF32.buffer,l,a).slice();return e._free(l),{name:o,array:d,itemSize:s}}onmessage=function(o){const i=o.data;switch(i.type){case"init":e=i.decoderConfig,t=new Promise((function(t){e.onModuleLoaded=function(e){t({draco:e})},DracoDecoderModule(e)}));break;case"decode":const o=i.buffer,r=i.taskConfig;t.then((e=>{const t=e.draco,s=new t.Decoder,a=new t.DecoderBuffer;a.Init(new Int8Array(o),o.byteLength);try{const e=function(e,t,o,i){const r=i.attributeIDs,s=i.attributeTypes;let a,c;const u=t.GetEncodedGeometryType(o);if(u===e.TRIANGULAR_MESH)a=new e.Mesh,c=t.DecodeBufferToMesh(o,a);else{if(u!==e.POINT_CLOUD)throw new Error("THREE.DRACOLoader: Unexpected geometry type.");a=new e.PointCloud,c=t.DecodeBufferToPointCloud(o,a)}if(!c.ok()||0===a.ptr)throw new Error("THREE.DRACOLoader: Decoding failed: "+c.error_msg());const l={index:null,attributes:[]};for(const o in r){const c=self[s[o]];let u,d;if(i.useUniqueIDs)d=r[o],u=t.GetAttributeByUniqueId(a,d);else{if(d=t.GetAttributeId(a,e[r[o]]),-1===d)continue;u=t.GetAttribute(a,d)}l.attributes.push(n(e,t,a,o,c,u))}return u===e.TRIANGULAR_MESH&&(l.index=function(e,t,n){const o=3*n.num_faces(),i=4*o,r=e._malloc(i);t.GetTrianglesUInt32Array(n,i,r);const s=new Uint32Array(e.HEAPF32.buffer,r,o).slice();return e._free(r),{array:s,itemSize:1}}(e,t,a)),e.destroy(a),l}(t,s,a,r),o=e.attributes.map((e=>e.array.buffer));e.index&&o.push(e.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:e},o)}catch(e){console.error(e),self.postMessage({type:"error",id:i.id,error:e.message})}finally{t.destroy(a),t.destroy(s)}}))}}}},62030:(e,t,n)=>{n.d(t,{cp:()=>a,lX:()=>l});var o=n(86171);const i=new o.Pa4,r=new o._fP,s=new o.Pa4;class a extends o.Tme{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",(function(){this.traverse((function(e){e.element instanceof Element&&null!==e.element.parentNode&&e.element.parentNode.removeChild(e.element)}))}))}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const c=new o.yGw,u=new o.yGw;class l{constructor(e={}){const t=this;let n,o,a,l;const d={camera:{fov:0,style:""},objects:new WeakMap},h=void 0!==e.element?e.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h;const p=document.createElement("div");function f(e){return Math.abs(e)<1e-10?0:e}function m(e){const t=e.elements;return"matrix3d("+f(t[0])+","+f(-t[1])+","+f(t[2])+","+f(t[3])+","+f(t[4])+","+f(-t[5])+","+f(t[6])+","+f(t[7])+","+f(t[8])+","+f(-t[9])+","+f(t[10])+","+f(t[11])+","+f(t[12])+","+f(-t[13])+","+f(t[14])+","+f(t[15])+")"}function y(e){const t=e.elements;return"translate(-50%,-50%)matrix3d("+f(t[0])+","+f(t[1])+","+f(t[2])+","+f(t[3])+","+f(-t[4])+","+f(-t[5])+","+f(-t[6])+","+f(-t[7])+","+f(t[8])+","+f(t[9])+","+f(t[10])+","+f(t[11])+","+f(t[12])+","+f(t[13])+","+f(t[14])+","+f(t[15])+")"}function g(e,n,o,a){if(e.isCSS3DObject){const a=!0===e.visible&&!0===e.layers.test(o.layers);if(e.element.style.display=!0===a?"":"none",!0===a){let a;e.onBeforeRender(t,n,o),e.isCSS3DSprite?(c.copy(o.matrixWorldInverse),c.transpose(),0!==e.rotation2D&&c.multiply(u.makeRotationZ(e.rotation2D)),e.matrixWorld.decompose(i,r,s),c.setPosition(i),c.scale(s),c.elements[3]=0,c.elements[7]=0,c.elements[11]=0,c.elements[15]=1,a=y(c)):a=y(e.matrixWorld);const l=e.element,h=d.objects.get(e);if(void 0===h||h.style!==a){l.style.transform=a;const t={style:a};d.objects.set(e,t)}l.parentNode!==p&&p.appendChild(l),e.onAfterRender(t,n,o)}}for(let t=0,i=e.children.length;t<i;t++)g(e.children[t],n,o,a)}p.style.transformStyle="preserve-3d",p.style.pointerEvents="none",h.appendChild(p),this.getSize=function(){return{width:n,height:o}},this.render=function(e,t){const n=t.projectionMatrix.elements[5]*l;let o,i;d.camera.fov!==n&&(h.style.perspective=t.isPerspectiveCamera?n+"px":"",d.camera.fov=n),!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),null===t.parent&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),t.isOrthographicCamera&&(o=-(t.right+t.left)/2,i=(t.top+t.bottom)/2);const r=t.isOrthographicCamera?"scale("+n+")translate("+f(o)+"px,"+f(i)+"px)"+m(t.matrixWorldInverse):"translateZ("+n+"px)"+m(t.matrixWorldInverse),s=r+"translate("+a+"px,"+l+"px)";d.camera.style!==s&&(p.style.transform=s,d.camera.style=s),g(e,e,t,r)},this.setSize=function(e,t){n=e,o=t,a=n/2,l=o/2,h.style.width=e+"px",h.style.height=t+"px",p.style.width=e+"px",p.style.height=t+"px"}}}}}]);