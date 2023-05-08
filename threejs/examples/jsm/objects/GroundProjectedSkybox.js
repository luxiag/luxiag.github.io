import{Mesh,IcosahedronGeometry,ShaderMaterial,DoubleSide}from"three";class GroundProjectedSkybox extends Mesh{constructor(t,n={}){const e=[t.isCubeTexture?"#define ENVMAP_TYPE_CUBE":""].join("\n")+"\n\n\t\t\t\tvarying vec3 vWorldPosition;\n\n\t\t\t\tuniform float radius;\n\t\t\t\tuniform float height;\n\t\t\t\tuniform float angle;\n\n\t\t\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\t\t\tuniform samplerCube map;\n\n\t\t\t\t#else\n\n\t\t\t\t\tuniform sampler2D map;\n\n\t\t\t\t#endif\n\n\t\t\t\t// From: https://www.shadertoy.com/view/4tsBD7\n\t\t\t\tfloat diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) \n\t\t\t\t{\n\n\t\t\t\t\tfloat d = dot ( rd, n );\n\n\t\t\t\t\tif( d > 0.0 ) { return 1e6; }\n\n\t\t\t\t\tvec3 o = ro - c;\n\t\t\t\t\tfloat t = - dot( n, o ) / d;\n\t\t\t\t\tvec3 q = o + rd * t;\n\n\t\t\t\t\treturn ( dot( q, q ) < r * r ) ? t : 1e6;\n\n\t\t\t\t}\n\n\t\t\t\t// From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm\n\t\t\t\tfloat sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) {\n\n\t\t\t\t\tvec3 oc = ro - ce;\n\t\t\t\t\tfloat b = dot( oc, rd );\n\t\t\t\t\tfloat c = dot( oc, oc ) - ra * ra;\n\t\t\t\t\tfloat h = b * b - c;\n\n\t\t\t\t\tif( h < 0.0 ) { return -1.0; }\n\n\t\t\t\t\th = sqrt( h );\n\n\t\t\t\t\treturn - b + h;\n\n\t\t\t\t}\n\n\t\t\t\tvec3 project() {\n\n\t\t\t\t\tvec3 p = normalize( vWorldPosition );\n\t\t\t\t\tvec3 camPos = cameraPosition;\n\t\t\t\t\tcamPos.y -= height;\n\n\t\t\t\t\tfloat intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );\n\t\t\t\t\tif( intersection > 0.0 ) {\n\n\t\t\t\t\t\tvec3 h = vec3( 0.0, - height, 0.0 );\n\t\t\t\t\t\tfloat intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );\n\t\t\t\t\t\tp = ( camPos + min( intersection, intersection2 ) * p ) / radius;\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tp = vec3( 0.0, 1.0, 0.0 );\n\n\t\t\t\t\t}\n\n\t\t\t\t\treturn p;\n\n\t\t\t\t}\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 projectedWorldPosition = project();\n\n\t\t\t\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\t\t\t\tvec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;\n\n\t\t\t\t\t#else\n\n\t\t\t\t\t\tvec3 direction = normalize( projectedWorldPosition );\n\t\t\t\t\t\tvec2 uv = equirectUv( direction );\n\t\t\t\t\t\tvec3 outcolor = texture2D( map, uv ).rgb;\n\n\t\t\t\t\t#endif\n\n\t\t\t\t\tgl_FragColor = vec4( outcolor, 1.0 );\n\n\t\t\t\t\t#include <tonemapping_fragment>\n\t\t\t\t\t#include <encodings_fragment>\n\n\t\t\t\t}\n\t\t\t\t",o={map:{value:t},height:{value:n.height||15},radius:{value:n.radius||100}};super(new IcosahedronGeometry(1,16),new ShaderMaterial({uniforms:o,fragmentShader:e,vertexShader:"\n\t\t\tvarying vec3 vWorldPosition;\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );\n\t\t\t\tvWorldPosition = worldPosition.xyz;\n\n\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t\t}\n\t\t\t",side:DoubleSide}))}set radius(t){this.material.uniforms.radius.value=t}get radius(){return this.material.uniforms.radius.value}set height(t){this.material.uniforms.height.value=t}get height(){return this.material.uniforms.height.value}}export{GroundProjectedSkybox};