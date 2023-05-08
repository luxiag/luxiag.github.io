import{Box3,InstancedInterleavedBuffer,InterleavedBufferAttribute,Line3,MathUtils,Matrix4,Mesh,Sphere,Vector3,Vector4}from"three";import{LineSegmentsGeometry}from"../lines/LineSegmentsGeometry.js";import{LineMaterial}from"../lines/LineMaterial.js";const _start=new Vector3,_end=new Vector3,_start4=new Vector4,_end4=new Vector4,_ssOrigin=new Vector4,_ssOrigin3=new Vector3,_mvMatrix=new Matrix4,_line=new Line3,_closestPoint=new Vector3,_box=new Box3,_sphere=new Sphere,_clipToWorldVector=new Vector4;let _ray,_lineWidth;function getWorldSpaceHalfWidth(t,e,r){return _clipToWorldVector.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),_clipToWorldVector.multiplyScalar(1/_clipToWorldVector.w),_clipToWorldVector.x=_lineWidth/r.width,_clipToWorldVector.y=_lineWidth/r.height,_clipToWorldVector.applyMatrix4(t.projectionMatrixInverse),_clipToWorldVector.multiplyScalar(1/_clipToWorldVector.w),Math.abs(Math.max(_clipToWorldVector.x,_clipToWorldVector.y))}function raycastWorldUnits(t,e){const r=t.matrixWorld,n=t.geometry,i=n.attributes.instanceStart,a=n.attributes.instanceEnd;for(let o=0,s=Math.min(n.instanceCount,i.count);o<s;o++){_line.start.fromBufferAttribute(i,o),_line.end.fromBufferAttribute(a,o),_line.applyMatrix4(r);const n=new Vector3,s=new Vector3;_ray.distanceSqToSegment(_line.start,_line.end,s,n),s.distanceTo(n)<.5*_lineWidth&&e.push({point:s,pointOnLine:n,distance:_ray.origin.distanceTo(s),object:t,face:null,faceIndex:o,uv:null,uv2:null})}}function raycastScreenSpace(t,e,r){const n=e.projectionMatrix,i=t.material.resolution,a=t.matrixWorld,o=t.geometry,s=o.attributes.instanceStart,l=o.attributes.instanceEnd,c=Math.min(o.instanceCount,s.count),_=-e.near;_ray.at(1,_ssOrigin),_ssOrigin.w=1,_ssOrigin.applyMatrix4(e.matrixWorldInverse),_ssOrigin.applyMatrix4(n),_ssOrigin.multiplyScalar(1/_ssOrigin.w),_ssOrigin.x*=i.x/2,_ssOrigin.y*=i.y/2,_ssOrigin.z=0,_ssOrigin3.copy(_ssOrigin),_mvMatrix.multiplyMatrices(e.matrixWorldInverse,a);for(let e=0,o=c;e<o;e++){if(_start4.fromBufferAttribute(s,e),_end4.fromBufferAttribute(l,e),_start4.w=1,_end4.w=1,_start4.applyMatrix4(_mvMatrix),_end4.applyMatrix4(_mvMatrix),_start4.z>_&&_end4.z>_)continue;if(_start4.z>_){const t=_start4.z-_end4.z,e=(_start4.z-_)/t;_start4.lerp(_end4,e)}else if(_end4.z>_){const t=_end4.z-_start4.z,e=(_end4.z-_)/t;_end4.lerp(_start4,e)}_start4.applyMatrix4(n),_end4.applyMatrix4(n),_start4.multiplyScalar(1/_start4.w),_end4.multiplyScalar(1/_end4.w),_start4.x*=i.x/2,_start4.y*=i.y/2,_end4.x*=i.x/2,_end4.y*=i.y/2,_line.start.copy(_start4),_line.start.z=0,_line.end.copy(_end4),_line.end.z=0;const o=_line.closestPointToPointParameter(_ssOrigin3,!0);_line.at(o,_closestPoint);const c=MathUtils.lerp(_start4.z,_end4.z,o),d=c>=-1&&c<=1,p=_ssOrigin3.distanceTo(_closestPoint)<.5*_lineWidth;if(d&&p){_line.start.fromBufferAttribute(s,e),_line.end.fromBufferAttribute(l,e),_line.start.applyMatrix4(a),_line.end.applyMatrix4(a);const n=new Vector3,i=new Vector3;_ray.distanceSqToSegment(_line.start,_line.end,i,n),r.push({point:i,pointOnLine:n,distance:_ray.origin.distanceTo(i),object:t,face:null,faceIndex:e,uv:null,uv2:null})}}}class LineSegments2 extends Mesh{constructor(t=new LineSegmentsGeometry,e=new LineMaterial({color:16777215*Math.random()})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,r=t.attributes.instanceEnd,n=new Float32Array(2*e.count);for(let t=0,i=0,a=e.count;t<a;t++,i+=2)_start.fromBufferAttribute(e,t),_end.fromBufferAttribute(r,t),n[i]=0===i?0:n[i-1],n[i+1]=n[i]+_start.distanceTo(_end);const i=new InstancedInterleavedBuffer(n,2,1);return t.setAttribute("instanceDistanceStart",new InterleavedBufferAttribute(i,1,0)),t.setAttribute("instanceDistanceEnd",new InterleavedBufferAttribute(i,1,1)),this}raycast(t,e){const r=this.material.worldUnits,n=t.camera;null!==n||r||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=void 0!==t.params.Line2&&t.params.Line2.threshold||0;_ray=t.ray;const a=this.matrixWorld,o=this.geometry,s=this.material;let l,c;_lineWidth=s.linewidth+i,null===o.boundingSphere&&o.computeBoundingSphere(),_sphere.copy(o.boundingSphere).applyMatrix4(a),l=r?.5*_lineWidth:getWorldSpaceHalfWidth(n,Math.max(n.near,_sphere.distanceToPoint(_ray.origin)),s.resolution),_sphere.radius+=l,!1!==_ray.intersectsSphere(_sphere)&&(null===o.boundingBox&&o.computeBoundingBox(),_box.copy(o.boundingBox).applyMatrix4(a),c=r?.5*_lineWidth:getWorldSpaceHalfWidth(n,Math.max(n.near,_box.distanceToPoint(_ray.origin)),s.resolution),_box.expandByScalar(c),!1!==_ray.intersectsBox(_box)&&(r?raycastWorldUnits(this,e):raycastScreenSpace(this,n,e)))}}export{LineSegments2};