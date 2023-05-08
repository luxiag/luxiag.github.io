import{InstancedInterleavedBuffer,InterleavedBufferAttribute,Mesh,Vector3}from"three";import{LineSegmentsGeometry}from"../lines/LineSegmentsGeometry.js";import{LineMaterial}from"../lines/LineMaterial.js";const _start=new Vector3,_end=new Vector3;class Wireframe extends Mesh{constructor(e=new LineSegmentsGeometry,t=new LineMaterial({color:16777215*Math.random()})){super(e,t),this.isWireframe=!0,this.type="Wireframe"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,r=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,i=0,s=t.count;e<s;e++,i+=2)_start.fromBufferAttribute(t,e),_end.fromBufferAttribute(r,e),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+_start.distanceTo(_end);const i=new InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new InterleavedBufferAttribute(i,1,0)),e.setAttribute("instanceDistanceEnd",new InterleavedBufferAttribute(i,1,1)),this}}export{Wireframe};