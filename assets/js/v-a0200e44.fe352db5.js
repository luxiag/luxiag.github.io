"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2651],{61032:(n,s,a)=>{a.r(s),a.d(s,{default:()=>m});var e=a(71534),t=a(86171),o=a(32049),l=a(97630);const p=(0,e.uE)('<p>参考：《The Book of Shaders》</p><h2 id="fragment-shader-片段着色器" tabindex="-1"><a class="header-anchor" href="#fragment-shader-片段着色器" aria-hidden="true">#</a> Fragment Shader(片段着色器)</h2><div class="language-glsl line-numbers-mode" data-ext="glsl"><pre class="language-glsl"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">GL_ES</span></span>\n<span class="token keyword">precision</span> <span class="token keyword">mediump</span> <span class="token keyword">float</span><span class="token punctuation">;</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>\n\n<span class="token keyword">uniform</span> <span class="token keyword">float</span> u_time<span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">1.0</span><span class="token punctuation">,</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),i=(0,e.uE)('<p><strong>Shaders 是一系列的指令，但是这些指令会对屏幕上的每个像素同时下达。</strong></p><ul><li><p>shader 语言 有一个 main 函数，会在最后返回颜色值。这点和 C 语言很像。</p></li><li><p>最终的像素颜色取决于预设的全局变量 gl_FragColor。</p></li><li><p>这个类 C 语言有内建的变量（像 gl_FragColor），函数和数据类型。</p></li><li><p>vec4 类型，可以推测这四个变元分别响应红，绿，蓝和透明度通道。</p></li><li><p>所有的宏都以 # 开头。预编译会在编译前一刻发生，把所有的命令复制到 #defines 里，检查#ifdef 条件句是否已被定义， #ifndef 条件句是否没有被定义。</p></li><li><p>loat 类型在 shaders 中非常重要，所以精度非常重要。更低的精度会有更快的渲染速度，但是会以质量为代价。“低”（precision lowp float;），“高”（precision highp float;）。</p></li><li><p>GLSL 语言规范并不保证变量会被自动转换类别。</p></li></ul><div class="language-glsl line-numbers-mode" data-ext="glsl"><pre class="language-glsl"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 出错</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniform" tabindex="-1"><a class="header-anchor" href="#uniform" aria-hidden="true">#</a> uniform</h2><p>每个线程和其他线程之间不能有数据交换，但我们能从 CPU 给每个线程输入数据。因为显卡的架构，所有线程的输入值必须统一（uniform），而且必须设为只读。 输入值叫做 uniform （统一值），它们的数据类型通常为：float, vec2, vec3, vec4, mat2, mat3, mat4, sampler2D and samplerCube。</p><div class="language-glsl line-numbers-mode" data-ext="glsl"><pre class="language-glsl"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">GL_ES</span></span>\n<span class="token keyword">precision</span> <span class="token keyword">mediump</span> <span class="token keyword">float</span><span class="token punctuation">;</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>\n\n<span class="token keyword">uniform</span> <span class="token keyword">float</span> u_time<span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n gl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token function">sin</span><span class="token punctuation">(</span>u_time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),c=(0,e.uE)('<h2 id="gl-fragcoord" tabindex="-1"><a class="header-anchor" href="#gl-fragcoord" aria-hidden="true">#</a> gl_FragCoord</h2><p>gl_FragCoord存储了活动线程正在处理的像素或屏幕碎片的坐标。 因为每个像素的坐标都不同，所以我们把它叫做 varying <strong>（变化值）</strong>。</p><div class="language-glsl line-numbers-mode" data-ext="glsl"><pre class="language-glsl"><code>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">GL_ES</span></span>\n<span class="token keyword">precision</span> <span class="token keyword">mediump</span> <span class="token keyword">float</span><span class="token punctuation">;</span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>\n\n<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_resolution<span class="token punctuation">;</span>\n<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> u_mouse<span class="token punctuation">;</span>\n<span class="token keyword">uniform</span> <span class="token keyword">float</span> u_time<span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">vec2</span> st <span class="token operator">=</span> gl_FragCoord<span class="token punctuation">.</span>xy<span class="token operator">/</span>u_resolution<span class="token punctuation">;</span>\ngl_FragColor <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span>st<span class="token punctuation">.</span>x<span class="token punctuation">,</span>st<span class="token punctuation">.</span>y<span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">,</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),r=(0,e._)("h2",{id:"glsl",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#glsl","aria-hidden":"true"},"#"),(0,e.Uk)(" GLSL")],-1),d=(0,e._)("p",null,"GLSL 代表 openGL Shading Language，openGL 着色语言",-1),u=(0,e._)("iframe",{src:"https://openglbook.com/chapter-0-preface-what-is-opengl.html",style:{width:"100%"},height:"800px"},null,-1),m={__name:"glsl-hello.html",setup(n){const s=n=>{const s=new t.xsS,a=new t.SUY,e={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new t.FM8}},o=new t.cPb(75,2,.1,1e3);o.position.set(0,0,10),s.add(o);const p=new t.jyz({uniforms:e,fragmentShader:n.fragmentShader,side:t.ehD}),i=new t.Kj0(new t._12(10,10),p);s.add(i);const c=new t.CP7;c.setSize(n.shaderDom.value.offsetWidth,n.shaderDom.value.offsetWidth/2),c.shadowMap.enabled=!0,n.shaderDom.value.appendChild(c.domElement),c.render(s,o);const r=new l.z(o,c.domElement);r.enableDamping=!0,e.u_resolution.value.x=c.domElement.width,e.u_resolution.value.y=c.domElement.height,function n(){e.u_time.value+=a.getDelta(),r.update(),c.render(s,o),requestAnimationFrame(n)}()},a=(0,o.iH)(),m={fragmentShader:"\n        #ifdef GL_ES\n        precision mediump float;\n        #endif\n        void main(){\n        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n        }\n        ",shaderDom:a},k=(0,o.iH)(),v={fragmentShader:"\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    uniform float u_time;\n\n    void main() {\n     gl_FragColor = vec4(abs(sin(u_time)),0.0,0.0,1.0);\n    }\n    ",shaderDom:k},g=(0,o.iH)(),h={fragmentShader:"\n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n\n    uniform vec2 u_resolution;\n    uniform vec2 u_mouse;\n    uniform float u_time;\n\n    void main() {\n     vec2 st = gl_FragCoord.xy/u_resolution;\n     gl_FragColor = vec4(st.x,st.y,0.0,1.0);\n    }",shaderDom:g};return(0,e.bv)((()=>{s(m),s(v),s(h)})),(n,s)=>((0,e.wg)(),(0,e.iD)("div",null,[p,(0,e._)("div",{ref_key:"helloRef",ref:a},null,512),i,(0,e._)("div",{ref_key:"timeRef",ref:k},null,512),c,(0,e._)("div",{ref_key:"fragRef",ref:g},null,512),r,d,u]))}}},87084:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-a0200e44","path":"/glsl/glsl-hello.html","title":"Hello GLSL","lang":"zh-CN","frontmatter":{"title":"Hello GLSL","category":["GLSL"],"date":"2022-10-01T00:00:00.000Z","summary":"参考：《The Book of Shaders》 Fragment Shader(片段着色器) Shaders 是一系列的指令，但是这些指令会对屏幕上的每个像素同时下达。 shader 语言 有一个 main 函数，会在最后返回颜色值。这点和 C 语言很像。; 最终的像素颜色取决于预设的全局变量 gl_FragColor。; 这个类 C 语言有内建的变量（像","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/glsl/glsl-hello.html"}],["meta",{"property":"og:title","content":"Hello GLSL"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-04-18T09:30:35.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-18T09:30:35.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Fragment Shader(片段着色器)","slug":"fragment-shader-片段着色器","link":"#fragment-shader-片段着色器","children":[]},{"level":2,"title":"uniform","slug":"uniform","link":"#uniform","children":[]},{"level":2,"title":"gl_FragCoord","slug":"gl-fragcoord","link":"#gl-fragcoord","children":[]},{"level":2,"title":"GLSL","slug":"glsl","link":"#glsl","children":[]}],"git":{"createdTime":1671694277000,"updatedTime":1681810235000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":3},{"name":"卢祥","email":"example@qq.com","commits":1}]},"readingTime":{"minutes":2.59,"words":776},"filePathRelative":"glsl/glsl-hello.md","localizedDate":"2022年10月1日"}')}}]);