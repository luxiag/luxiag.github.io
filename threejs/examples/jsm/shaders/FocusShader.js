const FocusShader={uniforms:{tDiffuse:{value:null},screenWidth:{value:1024},screenHeight:{value:1024},sampleDistance:{value:.94},waveFactor:{value:.00125}},vertexShader:"\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvUv = uv;\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t}",fragmentShader:"\n\n\t\tuniform float screenWidth;\n\t\tuniform float screenHeight;\n\t\tuniform float sampleDistance;\n\t\tuniform float waveFactor;\n\n\t\tuniform sampler2D tDiffuse;\n\n\t\tvarying vec2 vUv;\n\n\t\tvoid main() {\n\n\t\t\tvec4 color, org, tmp, add;\n\t\t\tfloat sample_dist, f;\n\t\t\tvec2 vin;\n\t\t\tvec2 uv = vUv;\n\n\t\t\tadd = color = org = texture2D( tDiffuse, uv );\n\n\t\t\tvin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );\n\t\t\tsample_dist = dot( vin, vin ) * 2.0;\n\n\t\t\tf = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;\n\n\t\t\tvec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );\n\n\t\t\tadd += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );\n\t\t\tif( tmp.b < color.b ) color = tmp;\n\n\t\t\tadd += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );\n\t\t\tif( tmp.b < color.b ) color = tmp;\n\n\t\t\tadd += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );\n\t\t\tif( tmp.b < color.b ) color = tmp;\n\n\t\t\tadd += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );\n\t\t\tif( tmp.b < color.b ) color = tmp;\n\n\t\t\tadd += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );\n\t\t\tif( tmp.b < color.b ) color = tmp;\n\n\t\t\tadd += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );\n\t\t\tif( tmp.b < color.b ) color = tmp;\n\n\t\t\tadd += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );\n\t\t\tif( tmp.b < color.b ) color = tmp;\n\n\t\t\tcolor = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );\n\t\t\tcolor = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );\n\n\t\t\tgl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );\n\n\t\t}"};export{FocusShader};