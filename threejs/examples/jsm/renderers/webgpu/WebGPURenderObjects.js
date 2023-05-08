import WebGPUWeakMap from"./WebGPUWeakMap.js";import WebGPURenderObject from"./WebGPURenderObject.js";class WebGPURenderObjects{constructor(e,t,s,r){this.renderer=e,this.nodes=t,this.geometries=s,this.info=r,this.cache=new WebGPUWeakMap}get(e,t,s,r,a){const c=[e,t,s,r,a];let i=this.cache.get(c);return void 0===i&&(i=new WebGPURenderObject(this.renderer,this.nodes,e,t,s,r,a),this.cache.set(c,i)),i}remove(e,t,s,r,a){this.cache.delete([e,t,s,r,a])}dispose(){this.cache=new WebGPUWeakMap,this.updateMap=new WeakMap}}export default WebGPURenderObjects;