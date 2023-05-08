"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6396],{91690:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(71534);const t=(0,e.uE)('<h2 id="viewer" tabindex="-1"><a class="header-anchor" href="#viewer" aria-hidden="true">#</a> Viewer</h2><p>当进行 Cesium 开发时，Viewer 组件是一个必不可少的组件，它是一个包含了场景、相机、渲染器以及其他各种 Cesium 组件的容器，也是开发者和用户可以看到和交互的主要界面。以下是一些 Viewer 组件中常见的 API 和元素控制：</p><ol><li>场景控制：Viewer 组件中包含的场景对象可以通过以下 API 进行控制：</li></ol><ul><li><code>viewer.scene.globe</code>: 可以控制三维球形地球的相关属性，例如地形、图像、水面等。</li><li><code>viewer.scene.skyBox</code>: 可以控制场景中的天空盒子。</li><li><code>viewer.scene.sun</code>: 可以控制场景中的太阳位置。</li></ul><ol start="2"><li>相机控制：Viewer 组件中包含的相机对象可以通过以下 API 进行控制：</li></ol><ul><li><code>viewer.camera.flyTo</code>: 可以飞到指定的位置和方向。</li><li><code>viewer.camera.setView</code>: 可以设置相机的位置和方向。</li><li><code>viewer.camera.lookAt</code>: 可以设置相机的焦点和方向。</li><li><code>viewer.camera.zoomIn</code>: 可以将相机拉近。</li></ul><ol start="3"><li>图层控制：Viewer 组件中可以添加和控制多个图层。以下是一些相关的 API：</li></ol><ul><li><code>viewer.imageryLayers.addImageryProvider</code>: 可以添加地图图层。</li><li><code>viewer.dataSources.add</code>: 可以添加数据源。</li></ul><ol start="4"><li>实体控制：Viewer 组件中可以添加和控制多个实体。以下是一些相关的 API：</li></ol><ul><li><code>viewer.entities.add</code>: 可以添加实体。</li><li><code>viewer.entities.getById</code>: 可以根据 ID 获取实体。</li><li><code>viewer.entities.remove</code>: 可以移除指定的实体。</li></ul><ol start="5"><li>事件控制：Viewer 组件中可以通过以下 API 来控制事件：</li></ol><ul><li><code>viewer.screenSpaceEventHandler</code>: 可以监听鼠标或触摸屏事件。</li><li><code>viewer.clock.onTick</code>: 可以监听时间变化事件。</li></ul><ol start="6"><li>控件：Viewer组件中提供了一些常见的控件，例如，导航控件（Navigation widget）、时间轴控件（Timeline widget）和全屏控件（Fullscreen widget）。这些控件都有对应的API可以在代码中进行操作。</li></ol><ul><li>Navigation widget: 这个控件提供了一些基本的导航功能，例如缩放、平移、旋转和倾斜视图。它可以通过Viewer的实例调用实现，如下：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>viewer<span class="token punctuation">.</span>navigationHelpButton<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nviewer<span class="token punctuation">.</span>navigationInstructionsInitiallyVisible <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\nviewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>screenSpaceCameraController<span class="token punctuation">.</span>minimumZoomDistance <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nviewer<span class="token punctuation">.</span>scene<span class="token punctuation">.</span>screenSpaceCameraController<span class="token punctuation">.</span>maximumZoomDistance <span class="token operator">=</span> <span class="token number">10000000</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Timeline widget: 这个控件提供了一个时间轴，可以查看和比较不同时间的数据。它也可以通过Viewer的实例进行控制，如下：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>viewer<span class="token punctuation">.</span>timeline<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\nviewer<span class="token punctuation">.</span>timeline<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;settime&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>currentTime <span class="token operator">=</span> e<span class="token punctuation">.</span>timeJulian<span class="token punctuation">;</span>\n    viewer<span class="token punctuation">.</span>timeline<span class="token punctuation">.</span><span class="token function">zoomTo</span><span class="token punctuation">(</span>viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> viewer<span class="token punctuation">.</span>clock<span class="token punctuation">.</span>stopTime<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fullscreen widget: 这个控件提供了全屏显示Cesium Viewer的功能，可以通过Viewer的实例进行控制，如下：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>viewer<span class="token punctuation">.</span>fullscreenButton<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> navigation <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>NavigationControl</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">camera</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>camera<span class="token punctuation">,</span>\n  <span class="token literal-property property">canvas</span><span class="token operator">:</span> viewer<span class="token punctuation">.</span>canvas\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nviewer<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>navigation<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;100px&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;10px&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n   <span class="token literal-property property">terrainProvider</span><span class="token operator">:</span> Cesium<span class="token punctuation">.</span><span class="token function">createWorldTerrain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="/cesium/examples/hello-cesium.html"></iframe>',22),p={id:"constructoroptionswidgets",tabindex:"-1"},o=(0,e._)("a",{class:"header-anchor",href:"#constructoroptionswidgets","aria-hidden":"true"},"#",-1),i={href:"https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html#.ConstructorOptions",target:"_blank",rel:"noopener noreferrer"},l=(0,e.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>Viewer</span><span class="token punctuation">(</span><span class="token string">&quot;cesiumContainer&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>\n    <span class="token comment">// 是否显示信息窗口</span>\n    <span class="token literal-property property">infoBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 是否显示查询按钮</span>\n    <span class="token literal-property property">geocoder</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 不显示home按钮</span>\n    <span class="token literal-property property">homeButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 控制查看器的显示模式</span>\n    <span class="token literal-property property">sceneModePicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 是否显示图层选择</span>\n    <span class="token literal-property property">baseLayerPicker</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 是否显示帮助按钮</span>\n    <span class="token literal-property property">navigationHelpButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 是否播放动画</span>\n    <span class="token literal-property property">animation</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 是否显示时间轴</span>\n    <span class="token literal-property property">timeline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 是否显示全屏按钮</span>\n    <span class="token literal-property property">fullscreenButton</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token comment">// 设置天空盒</span>\n    <span class="token literal-property property">skyBox</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>SkyBox</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">positiveX</span><span class="token operator">:</span> <span class="token string">&quot;/Cesium/texture/sky/px.jpg&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">negativeX</span><span class="token operator">:</span> <span class="token string">&quot;/Cesium/texture/sky/nx.jpg&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">positiveY</span><span class="token operator">:</span> <span class="token string">&quot;/Cesium/texture/sky/ny.jpg&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">negativeY</span><span class="token operator">:</span> <span class="token string">&quot;/Cesium/texture/sky/py.jpg&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">positiveZ</span><span class="token operator">:</span> <span class="token string">&quot;/Cesium/texture/sky/pz.jpg&quot;</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">negativeZ</span><span class="token operator">:</span> <span class="token string">&quot;/Cesium/texture/sky/nz.jpg&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n     <span class="token comment">// Show Columbus View map with Web Mercator projection</span>\n   <span class="token literal-property property">mapProjection</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Cesium<span class="token punctuation">.</span>WebMercatorProjection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="/cesium/examples/hello-cesium-constructorOptionswidgets.html"></iframe>',2),c={},r=(0,a(61935).Z)(c,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)("div",null,[t,(0,e._)("h2",p,[o,(0,e.Uk)(),(0,e._)("a",i,[(0,e.Uk)("ConstructorOptionswidgets"),(0,e.Wm)(a)])]),l])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},93595:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-3f674a08","path":"/cesium/hello-cesium.html","title":"hello cesium","lang":"zh-CN","frontmatter":{"title":"hello cesium","category":["Cesium"],"date":"2023-03-18T00:00:00.000Z","summary":"Viewer 当进行 Cesium 开发时，Viewer 组件是一个必不可少的组件，它是一个包含了场景、相机、渲染器以及其他各种 Cesium 组件的容器，也是开发者和用户可以看到和交互的主要界面。以下是一些 Viewer 组件中常见的 API 和元素控制： 1. 场景控制：Viewer 组件中包含的场景对象可以通过以下 API 进行控制： viewer.s","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/cesium/hello-cesium.html"}],["meta",{"property":"og:title","content":"hello cesium"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-06T03:44:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2023-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-06T03:44:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Viewer","slug":"viewer","link":"#viewer","children":[]},{"level":2,"title":"ConstructorOptionswidgets","slug":"constructoroptionswidgets","link":"#constructoroptionswidgets","children":[]}],"git":{"createdTime":1683344662000,"updatedTime":1683344662000,"contributors":[{"name":"卢祥","email":"example@qq.com","commits":1}]},"readingTime":{"minutes":2.7,"words":811},"filePathRelative":"cesium/hello-cesium.md","localizedDate":"2023年3月18日"}')}}]);