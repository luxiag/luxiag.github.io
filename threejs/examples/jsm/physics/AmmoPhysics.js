async function AmmoPhysics(){if("Ammo"in window==0)return void console.error("AmmoPhysics: Couldn't find Ammo.js");const t=await Ammo(),e=new t.btDefaultCollisionConfiguration,n=new t.btCollisionDispatcher(e),o=new t.btDbvtBroadphase,i=new t.btSequentialImpulseConstraintSolver,s=new t.btDiscreteDynamicsWorld(n,o,i,e);s.setGravity(new t.btVector3(0,-9.8,0));const r=new t.btTransform,a=[],c=new WeakMap;let d=0;return setInterval((function(){const t=performance.now();if(d>0){const e=(t-d)/1e3;s.stepSimulation(e,10)}d=t;for(let t=0,e=a.length;t<e;t++){const e=a[t];if(e.isInstancedMesh){const t=e.instanceMatrix.array,n=c.get(e);for(let e=0;e<n.length;e++)n[e].getMotionState().getWorldTransform(r),compose(r.getOrigin(),r.getRotation(),t,16*e);e.instanceMatrix.needsUpdate=!0,e.computeBoundingSphere()}else if(e.isMesh){c.get(e).getMotionState().getWorldTransform(r);const t=r.getOrigin(),n=r.getRotation();e.position.set(t.x(),t.y(),t.z()),e.quaternion.set(n.x(),n.y(),n.z(),n.w())}}}),1e3/60),{addMesh:function(e,n=0){const o=function(e){const n=e.parameters;if("BoxGeometry"===e.type){const e=void 0!==n.width?n.width/2:.5,o=void 0!==n.height?n.height/2:.5,i=void 0!==n.depth?n.depth/2:.5,s=new t.btBoxShape(new t.btVector3(e,o,i));return s.setMargin(.05),s}if("SphereGeometry"===e.type||"IcosahedronGeometry"===e.type){const e=void 0!==n.radius?n.radius:1,o=new t.btSphereShape(e);return o.setMargin(.05),o}return null}(e.geometry);null!==o&&(e.isInstancedMesh?function(e,n,o){const i=e.instanceMatrix.array,r=[];for(let a=0;a<e.count;a++){const e=16*a,c=new t.btTransform;c.setFromOpenGLMatrix(i.slice(e,e+16));const d=new t.btDefaultMotionState(c),l=new t.btVector3(0,0,0);o.calculateLocalInertia(n,l);const u=new t.btRigidBodyConstructionInfo(n,d,o,l),w=new t.btRigidBody(u);s.addRigidBody(w),r.push(w)}n>0&&(a.push(e),c.set(e,r))}(e,n,o):e.isMesh&&function(e,n,o){const i=e.position,r=e.quaternion,d=new t.btTransform;d.setIdentity(),d.setOrigin(new t.btVector3(i.x,i.y,i.z)),d.setRotation(new t.btQuaternion(r.x,r.y,r.z,r.w));const l=new t.btDefaultMotionState(d),u=new t.btVector3(0,0,0);o.calculateLocalInertia(n,u);const w=new t.btRigidBodyConstructionInfo(n,l,o,u),y=new t.btRigidBody(w);s.addRigidBody(y),n>0&&(a.push(e),c.set(e,y))}(e,n,o))},setMeshPosition:function(e,n,o=0){if(e.isInstancedMesh){const i=c.get(e)[o];i.setAngularVelocity(new t.btVector3(0,0,0)),i.setLinearVelocity(new t.btVector3(0,0,0)),r.setIdentity(),r.setOrigin(new t.btVector3(n.x,n.y,n.z)),i.setWorldTransform(r)}else if(e.isMesh){const o=c.get(e);o.setAngularVelocity(new t.btVector3(0,0,0)),o.setLinearVelocity(new t.btVector3(0,0,0)),r.setIdentity(),r.setOrigin(new t.btVector3(n.x,n.y,n.z)),o.setWorldTransform(r)}}}}function compose(t,e,n,o){const i=e.x(),s=e.y(),r=e.z(),a=e.w(),c=i+i,d=s+s,l=r+r,u=i*c,w=i*d,y=i*l,f=s*d,g=s*l,h=r*l,m=a*c,b=a*d,p=a*l;n[o+0]=1-(f+h),n[o+1]=w+p,n[o+2]=y-b,n[o+3]=0,n[o+4]=w-p,n[o+5]=1-(u+h),n[o+6]=g+m,n[o+7]=0,n[o+8]=y+b,n[o+9]=g-m,n[o+10]=1-(u+f),n[o+11]=0,n[o+12]=t.x(),n[o+13]=t.y(),n[o+14]=t.z(),n[o+15]=1}export{AmmoPhysics};