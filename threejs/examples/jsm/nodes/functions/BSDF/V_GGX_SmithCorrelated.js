import{div}from"../../math/OperatorNode.js";import{EPSILON}from"../../math/MathNode.js";import{ShaderNode}from"../../shadernode/ShaderNode.js";const V_GGX_SmithCorrelated=new ShaderNode((o=>{const{alpha:d,dotNL:e,dotNV:r}=o,t=d.pow2(),a=e.mul(t.add(t.oneMinus().mul(r.pow2())).sqrt()),m=r.mul(t.add(t.oneMinus().mul(e.pow2())).sqrt());return div(.5,a.add(m).max(EPSILON))}));export default V_GGX_SmithCorrelated;