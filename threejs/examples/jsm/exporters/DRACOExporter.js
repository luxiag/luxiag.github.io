import{Color}from"three";class DRACOExporter{parse(e,t={}){if(t=Object.assign({decodeSpeed:5,encodeSpeed:5,encoderMethod:DRACOExporter.MESH_EDGEBREAKER_ENCODING,quantization:[16,8,8,8,8],exportUvs:!0,exportNormals:!0,exportColor:!1},t),void 0===DracoEncoderModule)throw new Error("THREE.DRACOExporter: required the draco_encoder to work.");const o=e.geometry,r=DracoEncoderModule(),n=new r.Encoder;let i,d;if(!0===e.isMesh){i=new r.MeshBuilder,d=new r.Mesh;const e=o.getAttribute("position");i.AddFloatAttributeToMesh(d,r.POSITION,e.count,e.itemSize,e.array);const n=o.getIndex();if(null!==n)i.AddFacesToMesh(d,n.count/3,n.array);else{const t=new(e.count>65535?Uint32Array:Uint16Array)(e.count);for(let e=0;e<t.length;e++)t[e]=e;i.AddFacesToMesh(d,e.count,t)}if(!0===t.exportNormals){const e=o.getAttribute("normal");void 0!==e&&i.AddFloatAttributeToMesh(d,r.NORMAL,e.count,e.itemSize,e.array)}if(!0===t.exportUvs){const e=o.getAttribute("uv");void 0!==e&&i.AddFloatAttributeToMesh(d,r.TEX_COORD,e.count,e.itemSize,e.array)}if(!0===t.exportColor){const e=o.getAttribute("color");if(void 0!==e){const t=createVertexColorSRGBArray(e);i.AddFloatAttributeToMesh(d,r.COLOR,e.count,e.itemSize,t)}}}else{if(!0!==e.isPoints)throw new Error("DRACOExporter: Unsupported object type.");{i=new r.PointCloudBuilder,d=new r.PointCloud;const e=o.getAttribute("position");if(i.AddFloatAttribute(d,r.POSITION,e.count,e.itemSize,e.array),!0===t.exportColor){const e=o.getAttribute("color");if(void 0!==e){const t=createVertexColorSRGBArray(e);i.AddFloatAttribute(d,r.COLOR,e.count,e.itemSize,t)}}}}const c=new r.DracoInt8Array,a=void 0!==t.encodeSpeed?t.encodeSpeed:5,A=void 0!==t.decodeSpeed?t.decodeSpeed:5;if(n.SetSpeedOptions(a,A),void 0!==t.encoderMethod&&n.SetEncodingMethod(t.encoderMethod),void 0!==t.quantization)for(let e=0;e<5;e++)void 0!==t.quantization[e]&&n.SetAttributeQuantization(e,t.quantization[e]);let s;if(s=!0===e.isMesh?n.EncodeMeshToDracoBuffer(d,c):n.EncodePointCloudToDracoBuffer(d,!0,c),r.destroy(d),0===s)throw new Error("THREE.DRACOExporter: Draco encoding failed.");const E=new Int8Array(new ArrayBuffer(s));for(let e=0;e<s;e++)E[e]=c.GetValue(e);return r.destroy(c),r.destroy(n),r.destroy(i),E}}function createVertexColorSRGBArray(e){const t=new Color,o=e.count,r=e.itemSize,n=new Float32Array(o*r);for(let i=0,d=o;i<d;i++)t.fromBufferAttribute(e,i).convertLinearToSRGB(),n[i*r]=t.r,n[i*r+1]=t.g,n[i*r+2]=t.b,4===r&&(n[i*r+3]=e.getW(i));return n}DRACOExporter.MESH_EDGEBREAKER_ENCODING=1,DRACOExporter.MESH_SEQUENTIAL_ENCODING=0,DRACOExporter.POINT_CLOUD=0,DRACOExporter.TRIANGULAR_MESH=1,DRACOExporter.INVALID=-1,DRACOExporter.POSITION=0,DRACOExporter.NORMAL=1,DRACOExporter.COLOR=2,DRACOExporter.TEX_COORD=3,DRACOExporter.GENERIC=4;export{DRACOExporter};