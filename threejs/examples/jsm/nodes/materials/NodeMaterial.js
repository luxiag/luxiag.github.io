import{Material,ShaderMaterial}from"three";import{getNodeChildren,getCacheKey}from"../core/NodeUtils.js";import{attribute}from"../core/AttributeNode.js";import{diffuseColor}from"../core/PropertyNode.js";import{materialNormal}from"../accessors/ExtendedMaterialNode.js";import{materialAlphaTest,materialColor,materialOpacity,materialEmissive}from"../accessors/MaterialNode.js";import{modelViewProjection}from"../accessors/ModelViewProjectionNode.js";import{transformedNormalView}from"../accessors/NormalNode.js";import{instance}from"../accessors/InstanceNode.js";import{positionLocal}from"../accessors/PositionNode.js";import{skinning}from"../accessors/SkinningNode.js";import{texture}from"../accessors/TextureNode.js";import{lightsWithoutWrap}from"../lighting/LightsNode.js";import AONode from"../lighting/AONode.js";import EnvironmentNode from"../lighting/EnvironmentNode.js";import{float,vec3,vec4}from"../shadernode/ShaderNode.js";const NodeMaterials=new Map;class NodeMaterial extends ShaderMaterial{constructor(){super(),this.isNodeMaterial=!0,this.type=this.constructor.name,this.lights=!0,this.normals=!0,this.lightsNode=null}customProgramCacheKey(){return getCacheKey(this)}build(t){this.construct(t)}construct(t){t.addStack(),t.stack.outputNode=this.constructPosition(t),t.addFlow("vertex",t.removeStack()),t.addStack(),!0===this.normals&&this.constructNormal(t),this.constructDiffuseColor(t),this.constructVariants(t);const e=this.constructLighting(t);t.stack.outputNode=this.constructOutput(t,e,diffuseColor.a),t.addFlow("fragment",t.removeStack())}constructPosition(t){const e=t.object;let o=positionLocal;return null!==this.positionNode&&(o=o.bypass(positionLocal.assign(this.positionNode))),e.instanceMatrix&&!0===e.instanceMatrix.isInstancedBufferAttribute&&!0===t.isAvailable("instance")&&(o=o.bypass(instance(e))),!0===e.isSkinnedMesh&&(o=o.bypass(skinning(e))),t.context.vertex=o,modelViewProjection()}constructDiffuseColor({stack:t,geometry:e}){let o=this.colorNode?vec4(this.colorNode):materialColor;!0===this.vertexColors&&e.hasAttribute("color")&&(o=vec4(o.xyz.mul(attribute("color")),o.a)),t.assign(diffuseColor,o);const s=this.opacityNode?float(this.opacityNode):materialOpacity;if(t.assign(diffuseColor.a,diffuseColor.a.mul(s)),this.alphaTestNode||this.alphaTest>0){const e=this.alphaTestNode?float(this.alphaTestNode):materialAlphaTest;t.add(diffuseColor.a.lessThanEqual(e).discard())}}constructVariants(){}constructNormal({stack:t}){const e=this.normalNode?vec3(this.normalNode):materialNormal;return t.assign(transformedNormalView,e),e}constructLights(t){const e=this.envNode||t.environmentNode,o=[];e&&o.push(new EnvironmentNode(e)),t.material.aoMap&&o.push(new AONode(texture(t.material.aoMap)));let s=this.lightsNode||t.lightsNode;return o.length>0&&(s=lightsWithoutWrap([...s.lightNodes,...o])),s}constructLightingModel(){}constructLighting(t){const{material:e}=t,o=!0===this.lights||null!==this.lightsNode?this.constructLights(t):null,s=o?this.constructLightingModel(t):null;let i=diffuseColor.rgb;return o&&!1!==o.hasLight&&(i=o.lightingContext(s)),(this.emissiveNode&&!0===this.emissiveNode.isNode||e.emissive&&!0===e.emissive.isColor)&&(i=i.add(this.emissiveNode?vec3(this.emissiveNode):materialEmissive)),i}constructOutput(t,e,o){const s=t.renderer,i=t.toneMappingNode;i&&(e=i.context({color:e}));let r=vec4(e,o);r=r.colorSpace(s.outputColorSpace);const a=t.fogNode;return a&&(r=vec4(a.mixAssign(r.rgb),r.a)),r}setDefaultValues(t){for(const e in t){const o=t[e];void 0===this[e]&&(this[e]=o,o&&o.clone&&(this[e]=o.clone()))}Object.assign(this.defines,t.defines);const e=Object.getOwnPropertyDescriptors(t.constructor.prototype);for(const t in e)void 0===Object.getOwnPropertyDescriptor(this.constructor.prototype,t)&&void 0!==e[t].get&&Object.defineProperty(this.constructor.prototype,t,e[t])}toJSON(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{},nodes:{}});const o=Material.prototype.toJSON.call(this,t),s=getNodeChildren(this);o.inputNodes={};for(const{property:e,childNode:i}of s)o.inputNodes[e]=i.toJSON(t).uuid;function i(t){const e=[];for(const o in t){const s=t[o];delete s.metadata,e.push(s)}return e}if(e){const e=i(t.textures),s=i(t.images),r=i(t.nodes);e.length>0&&(o.textures=e),s.length>0&&(o.images=s),r.length>0&&(o.nodes=r)}return o}static fromMaterial(t){if(!0===t.isNodeMaterial)return t;const e=createNodeMaterialFromType(t.type.replace("Material","NodeMaterial"));if(void 0===e)throw new Error(`NodeMaterial: Material "${t.type}" is not compatible.`);for(const o in t)e[o]=t[o];return e}}export default NodeMaterial;export function addNodeMaterial(t){if("function"!=typeof t||!t.name)throw new Error(`Node material ${t.name} is not a class`);if(NodeMaterials.has(t.name))throw new Error(`Redefinition of node material ${t.name}`);NodeMaterials.set(t.name,t)}export function createNodeMaterialFromType(t){const e=NodeMaterials.get(t);if(void 0!==e)return new e}addNodeMaterial(NodeMaterial);