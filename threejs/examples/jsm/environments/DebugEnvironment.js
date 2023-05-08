import{BackSide,BoxGeometry,Mesh,MeshLambertMaterial,MeshStandardMaterial,PointLight,Scene}from"three";class DebugEnvironment extends Scene{constructor(){super();const e=new BoxGeometry;e.deleteAttribute("uv");const s=new MeshStandardMaterial({metalness:0,side:BackSide}),t=new Mesh(e,s);t.scale.setScalar(10),this.add(t);const i=new PointLight(16777215,50,0,2);this.add(i);const n=new MeshLambertMaterial({color:16711680,emissive:16777215,emissiveIntensity:10}),a=new Mesh(e,n);a.position.set(-5,2,0),a.scale.set(.1,1,1),this.add(a);const o=new MeshLambertMaterial({color:65280,emissive:16777215,emissiveIntensity:10}),r=new Mesh(e,o);r.position.set(0,5,0),r.scale.set(1,.1,1),this.add(r);const c=new MeshLambertMaterial({color:255,emissive:16777215,emissiveIntensity:10}),d=new Mesh(e,c);d.position.set(2,1,5),d.scale.set(1.5,2,.1),this.add(d)}}export{DebugEnvironment};