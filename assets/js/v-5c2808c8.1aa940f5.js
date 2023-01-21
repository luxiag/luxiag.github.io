"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9465],{2830:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var e=a(1534);const t=a.p+"assets/img/threejs-structure.885a185e.svg",p=a.p+"assets/img/threejs-1cube-no-light-scene.707d4a78.svg",o=a.p+"assets/img/frustum-3d.da8ac934.svg";var c=a(6171),l=a(2049);const i={href:"https://threejs.org/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.uE)('<h2 id="three-js-和-webgl" tabindex="-1"><a class="header-anchor" href="#three-js-和-webgl" aria-hidden="true">#</a> Three.js 和 WebGL</h2><p>Three.js 经常会和 WebGL 混淆， 但也并不总是，three.js 其实是使用 WebGL 来绘制三维效果的。 WebGL 是一个只能画点、线和三角形的非常底层的系统. <br> 想要用 WebGL 来做一些实用的东西通常需要大量的代码， 这就是 Three.js 的用武之地。它封装了诸如场景、灯光、阴影、材质、贴图、空间运算等一系列功能，让你不必要再从底层 WebGL 开始写起。</p><h2 id="基础的-three-js-应用结构" tabindex="-1"><a class="header-anchor" href="#基础的-three-js-应用结构" aria-hidden="true">#</a> 基础的 three.js 应用结构</h2><p><img src="'+t+'" alt=""></p><ul><li><p>首先有一个渲染器(Renderer)。这可以说是 three.js 的主要对象。你传入一个场景(Scene)和一个摄像机(Camera)到渲染器(Renderer)中，然后它会将摄像机视椎体中的三维场景渲染成一个二维图片显示在画布上。</p></li><li><p>其次有一个场景图 它是一个树状结构，由很多对象组成，比如图中包含了一个场景(Scene)对象 ，多个网格(Mesh)对象，光源(Light)对象，群组(Group)，三维物体(Object3D)，和摄像机(Camera)对象。一个场景(Scene)对象定义了场景图最基本的要素，并包了含背景色和雾等属性。这些对象通过一个层级关系明确的树状结构来展示出各自的位置和方向。子对象的位置和方向总是相对于父对象而言的。比如说汽车的轮子是汽车的子对象，这样移动和定位汽车时就会自动移动轮子。你可以在场景图的这篇文章中了解更多内容。</p></li><li><p>注意图中摄像机(Camera)是一半在场景图中，一半在场景图外的。这表示在 three.js 中，摄像机(Camera)和其他对象不同的是，它不一定要在场景图中才能起作用。相同的是，摄像机(Camera)作为其他对象的子对象，同样会继承它父对象的位置和朝向。在场景图这篇文章的结尾部分有放置多个摄像机(Camera)在一个场景中的例子。</p></li><li><p>网格(Mesh)对象可以理解为用一种特定的材质(Material)来绘制的一个特定的几何体(Geometry)。材质(Material)和几何体(Geometry)可以被多个网格(Mesh)对象使用。比如在不同的位置画两个蓝色立方体，我们会需要两个网格(Mesh)对象来代表每一个立方体的位置和方向。但只需一个几何体(Geometry)来存放立方体的顶点数据，和一种材质(Material)来定义立方体的颜色为蓝色就可以了。两个网格(Mesh)对象都引用了相同的几何体(Geometry)和材质(Material)。</p></li><li><p>几何体(Geometry)对象顾名思义代表一些几何体，如球体、立方体、平面、狗、猫、人、树、建筑等物体的顶点信息。Three.js 内置了许多基本几何体 。你也可以创建自定义几何体或从文件中加载几何体。</p></li><li><p>材质(Material)对象代表绘制几何体的表面属性，包括使用的颜色，和光亮程度。一个材质(Material)可以引用一个或多个纹理(Texture)，这些纹理可以用来，打个比方，将图像包裹到几何体的表面。</p></li><li><p>纹理(Texture)对象通常表示一幅要么从文件中加载，要么在画布上生成，要么由另一个场景渲染出的图像。</p></li><li><p>光源(Light)对象代表不同种类的光。</p></li></ul><h2 id="使用-three-js" tabindex="-1"><a class="header-anchor" href="#使用-three-js" aria-hidden="true">#</a> 使用 three.js</h2><p><img src="'+p+'" alt=""></p><p>1.首先是加载 three.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.创建一个 WebGL 渲染器(WebGLRenderer)。</p><p>渲染器负责将你提供的所有数据渲染绘制到 canvas 上。之前还有其他渲染器，比如 CSS 渲染器(CSSRenderer)、Canvas 渲染器(CanvasRenderer)。将来也可能会有 WebGL2 渲染器(WebGL2Renderer)或 WebGPU 渲染器(WebGPURenderer)。目前的话是 WebGL 渲染器(WebGLRenderer)，它通过 WebGL 将三维空间渲染到 canvas 上。</p><p><strong>注意这里有一些细节。如果你没有给 three.js 传 canvas，three.js 会自己创建一个 ，但是你必须手动把它添加到文档中。</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.需要一个透视摄像机(PerspectiveCamera)。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fov <span class="token operator">=</span> <span class="token number">75</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> aspect <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 相机默认值</span>\n<span class="token keyword">const</span> near <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> far <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span>fov<span class="token punctuation">,</span> aspect<span class="token punctuation">,</span> near<span class="token punctuation">,</span> far<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>fov 是视野范围(field of view)的缩写。上述代码中是指垂直方向为 75 度。 注意 three.js 中大多数的角用弧度表示，但是因为某些原因透视摄像机使用角度表示。</p></li><li><p>aspect 指画布的宽高比。我们将在别的文章详细讨论，在默认情况下 画布是 300x150 像素，所以宽高比为 300/150 或者说 2。</p></li><li><p>near 和 far 代表近平面和远平面，它们限制了摄像机面朝方向的可绘区域。 任何距离小于或超过这个范围的物体都将被裁剪掉(不绘制)。</p></li></ul><p>这四个参数定义了一个 &quot;视椎(frustum)&quot;。 视椎(frustum)是指一个像被削去顶部的金字塔形状。换句话说，可以把&quot;视椎(frustum)&quot;想象成其他三维形状如球体、立方体、棱柱体、截椎体。</p><p><img src="'+o+'" alt=""></p><p>4.一个场景(Scene)。场景(Scene)是 three.js 的基本的组成部分。需要 three.js 绘制的东西都需要加入到 scene 中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.一个包含盒子信息的立方几何体(BoxGeometry)。几乎所有希望在 three.js 中显示的物体都需要一个包含了组成三维物体的顶点信息的几何体。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> boxWidth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> boxHeight <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> boxDepth <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span>boxWidth<span class="token punctuation">,</span> boxHeight<span class="token punctuation">,</span> boxDepth<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.一个基本的材质并设置它的颜色. 颜色的值可以用 css 方式和十六进制来表示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0x44aa88</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.一个网格(Mesh)对象</p><ul><li>几何体(Geometry)(物体的形状)</li><li>材质(Material)(如何绘制物体，光滑还是平整，什么颜色，什么贴图等等)</li><li>对象在场景中相对于他父对象的位置、朝向、和缩放。下面的代码中父对象即为场景对象。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 将网格添加到场景中。</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 之后将场景和摄像机传递给渲染器来渲染出整个场景。</span>\nrenderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.添加些光照效果</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token number">0xffffff</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> intensity <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> light <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>DirectionalLight</span><span class="token punctuation">(</span>color<span class="token punctuation">,</span> intensity<span class="token punctuation">)</span><span class="token punctuation">;</span>\nlight<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nscene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>light<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="'+p+'" alt=""></p><p>9.让立方体旋转起来</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  time <span class="token operator">*=</span> <span class="token number">0.001</span><span class="token punctuation">;</span> <span class="token comment">// 将时间单位变为秒</span>\n  cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">=</span> time<span class="token punctuation">;</span>\n  cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">=</span> time<span class="token punctuation">;</span>\n  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>render<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',32),u={__name:"hello-cube.html",setup(n){const s=(0,l.iH)();return(0,e.bv)((()=>{(()=>{const n=new c.xsS,a=new c.DvJ(1,1,1),e=new c.vBJ({color:4500104}),t=new c.Kj0(a,e);n.add(t);const p=new c.cPb(75,2,.1,10);p.position.set(0,0,2),n.add(p);const o=new c.CP7;o.setPixelRatio(window.devicePixelRatio),o.setSize(s.value.offsetWidth,s.value.offsetWidth/2),s.value.appendChild(o.domElement),o.render(n,p);const l=new c.Ox3(16777215,1);l.position.set(-1,2,4),n.add(l),function s(a){a*=.001,t.rotation.x=a,t.rotation.y=a,o.render(n,p),requestAnimationFrame(s)}()})()})),(n,a)=>{const t=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("p",null,[(0,e._)("strong",null,[(0,e.Uk)("参考："),(0,e._)("a",i,[(0,e.Uk)("https://threejs.org/"),(0,e.Wm)(t)])])]),r,(0,e._)("div",{ref_key:"helloCube",ref:s},null,512)])}}}},8729:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-5c2808c8","path":"/threejs/hello-cube.html","title":"hello cube","lang":"zh-CN","frontmatter":{"title":"hello cube","date":"2022-11-01T00:00:00.000Z","category":["Threejs"],"summary":"参考：https://threejs.org/ Three.js 和 WebGL Three.js 经常会和 WebGL 混淆， 但也并不总是，three.js 其实是使用 WebGL 来绘制三维效果的。 WebGL 是一个只能画点、线和三角形的非常底层的系统. 想要用 WebGL 来做一些实用的东西通常需要大量的代码， 这就是 Three.js 的用武之地","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/threejs/hello-cube.html"}],["meta",{"property":"og:title","content":"hello cube"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luxiag.github.io/"}],["meta",{"property":"og:updated_time","content":"2022-12-30T06:28:03.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"hello cube"}],["meta",{"property":"article:published_time","content":"2022-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-30T06:28:03.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Three.js 和 WebGL","slug":"three-js-和-webgl","link":"#three-js-和-webgl","children":[]},{"level":2,"title":"基础的 three.js 应用结构","slug":"基础的-three-js-应用结构","link":"#基础的-three-js-应用结构","children":[]},{"level":2,"title":"使用 three.js","slug":"使用-three-js","link":"#使用-three-js","children":[]}],"git":{"createdTime":1672298675000,"updatedTime":1672381683000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":3}]},"readingTime":{"minutes":6.04,"words":1811},"filePathRelative":"threejs/hello-cube.md","localizedDate":"2022年11月1日"}')}}]);