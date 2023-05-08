import CodeNode from"./CodeNode.js";import{addNodeClass}from"../core/Node.js";import{nodeObject}from"../shadernode/ShaderNode.js";class FunctionNode extends CodeNode{constructor(e="",o=[]){super(e,o),this.keywords={}}getNodeType(e){return this.getNodeFunction(e).type}getInputs(e){return this.getNodeFunction(e).inputs}getNodeFunction(e){const o=e.getDataFromNode(this);let t=o.nodeFunction;return void 0===t&&(t=e.parser.parseFunction(this.code),o.nodeFunction=t),t}generate(e,o){super.generate(e);const t=this.getNodeFunction(e),n=t.name,d=t.type,r=e.getCodeFromNode(this,d);""!==n&&(r.name=n);const s=e.getPropertyName(r);let c=this.getNodeFunction(e).getCode(s);const i=this.keywords,u=Object.keys(i);if(u.length>0)for(const o of u){const t=new RegExp(`\\b${o}\\b`,"g"),n=i[o].build(e,"property");c=c.replace(t,n)}return r.code=c,"property"===o?s:e.format(`${s}()`,d,o)}}export default FunctionNode;export const func=(e,o)=>nodeObject(new FunctionNode(e,o));export const fn=(e,o)=>func(e,o).call;addNodeClass(FunctionNode);