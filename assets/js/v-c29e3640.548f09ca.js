"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3014],{3750:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var n=t(1534);const s=t.p+"assets/img/231001604122942222.737afb90.png",i=t.p+"assets/img/886001704122942222.643805c3.png",l=t.p+"assets/img/495002104122942222.07719b89.png",r=t.p+"assets/img/322001504122942222.0d666f4c.png",c=t.p+"assets/img/348005703122942222.2010b167.png",p=t.p+"assets/img/705005803122942222.75d07a5d.png",o=t.p+"assets/img/612005903122942222.650ea57a.png",d=t.p+"assets/img/900005903122942222.a1370d07.png",h=t.p+"assets/img/013000804122942222.97c64a47.png",u=[(0,n.uE)('<p><img src="'+s+'" alt=""></p><h2 id="performance" tabindex="-1"><a class="header-anchor" href="#performance" aria-hidden="true">#</a> Performance</h2><p><img src="'+i+'" alt=""><img src="'+l+'" alt=""></p><h2 id="diff-算法的优化" tabindex="-1"><a class="header-anchor" href="#diff-算法的优化" aria-hidden="true">#</a> diff 算法的优化</h2><p>vue2 中的虚拟 dom 是全量的对比（每个节点不论写死的还是动态的都会一层一层比较，这就浪费了大部分事件在对比静态节点上）</p><p>vue3 新增了静态标记（patchflag）与上次虚拟节点对比时，只对比带有 patch flag 的节点（动态数据所在的节点）；可通过 flag 信息得知当前节点要对比的具体内容。</p><h2 id="hoiststatic-静态提升" tabindex="-1"><a class="header-anchor" href="#hoiststatic-静态提升" aria-hidden="true">#</a> hoistStatic 静态提升</h2><p>vue2无论元素是否参与更新，每次都会重新创建然后再渲染。 vue3对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用即可。</p><h2 id="更高效的组件初始化" tabindex="-1"><a class="header-anchor" href="#更高效的组件初始化" aria-hidden="true">#</a> 更高效的组件初始化</h2><p>Vue2组件必须有一个跟节点</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cachehandlers-事件侦听器缓存" tabindex="-1"><a class="header-anchor" href="#cachehandlers-事件侦听器缓存" aria-hidden="true">#</a> cacheHandlers 事件侦听器缓存</h3><p>vue2.x中，绑定事件每次触发都要重新生成全新的function去更新，cacheHandlers 是Vue3中提供的事件缓存对象，当 cacheHandlers 开启，会自动生成一个内联函数，同时生成一个静态节点。当事件再次触发时，只需从缓存中调用即可，无需再次更新。 默认情况下onClick会被视为动态绑定，所以每次都会追踪它的变化，但是同一个函数没必要追踪变化，直接缓存起来复用即可。</p><h2 id="three-shaking" tabindex="-1"><a class="header-anchor" href="#three-shaking" aria-hidden="true">#</a> Three Shaking</h2><p><img src="'+r+'" alt=""> Vue 3.0 中没有被用到的模块可以不被打包到编译后的文件中，被 TreeShake 掉。当只有一个HelloWorld的时候 Vue3打包后 13.5kb。所有的组件全部加载进来时是 22.5kb</p><h2 id="更好的ts支持" tabindex="-1"><a class="header-anchor" href="#更好的ts支持" aria-hidden="true">#</a> 更好的ts支持</h2><p><img src="'+c+'" alt=""></p><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><p><img src="'+p+'" alt=""><img src="'+o+'" alt=""></p><h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> Fragment</h2><p><img src="'+d+'" alt=""> 类似于react的&lt;&gt;&lt;/&gt;</p><h2 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h2><p><img src="'+h+'" alt=""> 类似react的 portal <strong>但因为Chrome有个提案，会增加一个名为Portal的原生element，为避免命名冲突，改为Teleport</strong></p>',23)],g={},m=(0,t(1935).Z)(g,[["render",function(e,a){return(0,n.wg)(),(0,n.iD)("div",null,u)}]])},1935:(e,a)=>{a.Z=(e,a)=>{const t=e.__vccOpts||e;for(const[e,n]of a)t[e]=n;return t}},5200:(e,a,t)=>{t.r(a),t.d(a,{data:()=>n});const n=JSON.parse('{"key":"v-c29e3640","path":"/vue3/vue3-and-vue2.html","title":"Vue3 对比 Vue2","lang":"zh-CN","frontmatter":{"title":"Vue3 对比 Vue2","date":"2022-12-01T00:00:00.000Z","category":["Vue"],"tag":["vue3"],"summary":"Performance diff 算法的优化 vue2 中的虚拟 dom 是全量的对比（每个节点不论写死的还是动态的都会一层一层比较，这就浪费了大部分事件在对比静态节点上） vue3 新增了静态标记（patchflag）与上次虚拟节点对比时，只对比带有 patch flag 的节点（动态数据所在的节点）；可通过 flag 信息得知当前节点要对比的具体内容。 ","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/vue3/vue3-and-vue2.html"}],["meta",{"property":"og:title","content":"Vue3 对比 Vue2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luxiag.github.io/"}],["meta",{"property":"og:updated_time","content":"2022-12-30T06:28:03.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vue3 对比 Vue2"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:published_time","content":"2022-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-30T06:28:03.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Performance","slug":"performance","link":"#performance","children":[]},{"level":2,"title":"diff 算法的优化","slug":"diff-算法的优化","link":"#diff-算法的优化","children":[]},{"level":2,"title":"hoistStatic 静态提升","slug":"hoiststatic-静态提升","link":"#hoiststatic-静态提升","children":[]},{"level":2,"title":"更高效的组件初始化","slug":"更高效的组件初始化","link":"#更高效的组件初始化","children":[{"level":3,"title":"cacheHandlers 事件侦听器缓存","slug":"cachehandlers-事件侦听器缓存","link":"#cachehandlers-事件侦听器缓存","children":[]}]},{"level":2,"title":"Three Shaking","slug":"three-shaking","link":"#three-shaking","children":[]},{"level":2,"title":"更好的ts支持","slug":"更好的ts支持","link":"#更好的ts支持","children":[]},{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[]},{"level":2,"title":"Fragment","slug":"fragment","link":"#fragment","children":[]},{"level":2,"title":"Teleport","slug":"teleport","link":"#teleport","children":[]}],"git":{"createdTime":1672307601000,"updatedTime":1672381683000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":2}]},"readingTime":{"minutes":1.67,"words":500},"filePathRelative":"vue3/vue3-and-vue2.md","localizedDate":"2022年12月1日"}')}}]);