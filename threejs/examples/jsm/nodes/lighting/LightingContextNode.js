import ContextNode from"../core/ContextNode.js";import{temp}from"../core/VarNode.js";import{add}from"../math/OperatorNode.js";import{addNodeClass}from"../core/Node.js";import{addNodeElement,nodeProxy,float,vec3}from"../shadernode/ShaderNode.js";class LightingContextNode extends ContextNode{constructor(e,t=null){super(e),this.lightingModelNode=t}getNodeType(){return"vec3"}construct(e){const{lightingModelNode:t}=this,o=this.context={},i=e.getNodeProperties(this),d=temp(vec3()),n=temp(vec3()),r=temp(vec3()),c=temp(vec3()),l={directDiffuse:d,directSpecular:n,indirectDiffuse:r,indirectSpecular:c,total:add(d,n,r,c)},s={radiance:temp(vec3()),irradiance:temp(vec3()),iblIrradiance:temp(vec3()),ambientOcclusion:temp(float(1))};return Object.assign(i,l,s),Object.assign(o,s),o.reflectedLight=l,o.lightingModelNode=t||o.lightingModelNode,t&&t.indirectDiffuse&&t.indirectDiffuse.call(o),t&&t.indirectSpecular&&t.indirectSpecular.call(o),t&&t.ambientOcclusion&&t.ambientOcclusion.call(o),super.construct(e)}generate(e){const{context:t}=this,o=this.getNodeType(e);return super.generate(e,o),t.reflectedLight.total.build(e,o)}}export default LightingContextNode;export const lightingContext=nodeProxy(LightingContextNode);addNodeElement("lightingContext",lightingContext),addNodeClass(LightingContextNode);