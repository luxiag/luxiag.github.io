import Node,{addNodeClass}from"../core/Node.js";import{NodeUpdateType}from"../core/constants.js";import{addNodeElement,nodeObject}from"../shadernode/ShaderNode.js";class ComputeNode extends Node{constructor(e,o,t=[64]){super("void"),this.isComputeNode=!0,this.computeNode=e,this.count=o,this.workgroupSize=t,this.dispatchCount=0,this.updateType=NodeUpdateType.OBJECT,this.updateDispatchCount()}updateDispatchCount(){const{count:e,workgroupSize:o}=this;let t=o[0];for(let e=1;e<o.length;e++)t*=o[e];this.dispatchCount=Math.ceil(e/t)}onInit(){}update({renderer:e}){e.compute(this)}generate(e){const{shaderStage:o}=e;if("compute"===o){const o=this.computeNode.build(e,"void");""!==o&&e.addLineFlowCode(o)}}}export default ComputeNode;export const compute=(e,o,t)=>nodeObject(new ComputeNode(nodeObject(e),o,t));addNodeElement("compute",compute),addNodeClass(ComputeNode);