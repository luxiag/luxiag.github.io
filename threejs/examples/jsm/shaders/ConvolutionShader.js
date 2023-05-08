import{Vector2}from"three";const ConvolutionShader={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new Vector2(.001953125,0)},cKernel:{value:[]}},vertexShader:"\n\n\t\tuniform vec2 uImageIncrement;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform float cKernel[ KERNEL_SIZE_INT ];\n\n\t\tuniform sampler2D tDiffuse;\n\t\tuniform vec2 uImageIncrement;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec2 imageCoord = vUv;\n\t\t\tvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\n\n\t\t\tfor( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {\n\n\t\t\t\tsum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];\n\t\t\t\timageCoord += uImageIncrement;\n\n\t\t\t}\n\n\t\t\tgl_FragColor = sum;\n\n\t\t}",buildKernel:function(t){let n=2*Math.ceil(3*t)+1;n>25&&(n=25);const e=.5*(n-1),r=new Array(n);let o=0;for(let i=0;i<n;++i)r[i]=gauss(i-e,t),o+=r[i];for(let t=0;t<n;++t)r[t]/=o;return r}};function gauss(t,n){return Math.exp(-t*t/(2*n*n))}export{ConvolutionShader};