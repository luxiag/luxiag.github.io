import{createNodeFromType}from"../core/Node.js";import{nodeObject}from"../shadernode/ShaderNode.js";import{FileLoader,Loader}from"three";class NodeLoader extends Loader{constructor(e){super(e),this.textures={}}load(e,t,r,s){const o=new FileLoader(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,(r=>{try{t(this.parse(JSON.parse(r)))}catch(t){s?s(t):console.error(t),this.manager.itemError(e)}}),r,s)}parseNodes(e){const t={};if(void 0!==e){for(const r of e){const{uuid:e,type:s}=r;t[e]=nodeObject(createNodeFromType(s)),t[e].uuid=e}const r={nodes:t,textures:this.textures};for(const s of e)s.meta=r,t[s.uuid].deserialize(s),delete s.meta}return t}parse(e){const t=nodeObject(createNodeFromType(e.type));t.uuid=e.uuid;const r={nodes:this.parseNodes(e.nodes),textures:this.textures};return e.meta=r,t.deserialize(e),delete e.meta,t}setTextures(e){return this.textures=e,this}}export default NodeLoader;