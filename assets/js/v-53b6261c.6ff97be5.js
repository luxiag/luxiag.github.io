"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9873],{55377:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var t=a(71534);const p=a.p+"assets/img/168012340-11-22-16-58-00.15dd7320.png",e=(0,t.uE)('<h2 id="狄克斯特拉算法" tabindex="-1"><a class="header-anchor" href="#狄克斯特拉算法" aria-hidden="true">#</a> 狄克斯特拉算法</h2><p><strong>Dijkstra 算法是一种贪心算法</strong></p><ul><li>(1) 找出最便宜的节点，即可在最短时间内前往的节点。</li><li>(2) 对于该节点的邻居，检查是否有前往它们的更短路径，如果有，就更新其开销。</li><li>(3) 重复这个过程，直到对图中的每个节点都这样做了。</li><li>(4) 计算最终路径。</li></ul><p><img src="'+p+'" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//A B C D E F</span>\n<span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//A  A=&gt;B=2 A=&gt;C=4</span>\n  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//B  B=&gt;C=1 B=&gt;D=4 B=&gt;E=2</span>\n  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//C</span>\n  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//D</span>\n  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//E</span>\n  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//F</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// graph 邻接矩阵</span>\n<span class="token comment">// src 起点</span>\n<span class="token keyword">const</span> <span class="token function-variable function">dijkstra</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">graph</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">src</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> dist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 储存当前A顶点到其它各个顶点间的距离</span>\n  <span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//储存ABCDEF顶点是否被访问过，以免重复访问，形成环</span>\n  <span class="token keyword">let</span> length <span class="token operator">=</span> graph<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">//储存所有顶点的数量</span>\n  <span class="token keyword">let</span> <span class="token constant">INF</span> <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">;</span> <span class="token comment">//Number javascript的最大整数  9007199254740991</span>\n  <span class="token comment">//初始化</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    dist<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">INF</span><span class="token punctuation">;</span>\n    visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">//第一个节点</span>\n  dist<span class="token punctuation">[</span>src<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//此时对应节点 已经访问设置 true</span>\n    visited<span class="token punctuation">[</span>src<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token comment">//找到对应节点 的 对应的边集合</span>\n    <span class="token keyword">let</span> currentEdges <span class="token operator">=</span> graph<span class="token punctuation">[</span>src<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">//遍历边,更新路径</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> currentEdges<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentEdges<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//存在边 , 找到最短路径  例如</span>\n        <span class="token comment">//A=&gt;B=&gt;C 最短路径的权</span>\n        <span class="token comment">//为 A=&gt;B 的权(dist[src]) +  B=&gt;C的权(currentEdegs[i]) 和 A=&gt;C(dist[i]) 的权 进行比较</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>dist<span class="token punctuation">[</span>src<span class="token punctuation">]</span> <span class="token operator">+</span> currentEdges<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> dist<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token comment">//符合上面条件 更新dist[i] 保证dist[i]是每次探路的最短路径</span>\n          dist<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> currentEdges<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> dist<span class="token punctuation">[</span>src<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//迪杰斯特拉的核心算法 , 找到最短路径 重新探路.</span>\n    <span class="token comment">//选择最短路径</span>\n    <span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token constant">INF</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> minIndex <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> dist<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> dist<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        min <span class="token operator">=</span> dist<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//进入下一次循环</span>\n    src <span class="token operator">=</span> minIndex<span class="token punctuation">;</span>\n    i<span class="token operator">++</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> dist<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6),o={href:"https://zhuanlan.zhihu.com/p/114203860",target:"_blank",rel:"noopener noreferrer"},c={},l=(0,a(61935).Z)(c,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t._)("p",null,[(0,t.Uk)("参考："),(0,t._)("a",o,[(0,t.Uk)("https://zhuanlan.zhihu.com/p/114203860"),(0,t.Wm)(a)])])])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},69324:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-53b6261c","path":"/algorithm/Dijkstra\'s-algorithm.html","title":"狄克斯特拉算法","lang":"zh-CN","frontmatter":{"title":"狄克斯特拉算法","reference":"算法图解","date":"2022-09-30T00:00:00.000Z","category":["算法"],"tag":["算法图解"],"summary":"狄克斯特拉算法 Dijkstra 算法是一种贪心算法 (1) 找出最便宜的节点，即可在最短时间内前往的节点。; (2) 对于该节点的邻居，检查是否有前往它们的更短路径，如果有，就更新其开销。; (3) 重复这个过程，直到对图中的每个节点都这样做了。; (4) 计算最终路径。; 参考：https://zhuanlan.zhihu.com/p/114203860","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/algorithm/Dijkstra\'s-algorithm.html"}],["meta",{"property":"og:title","content":"狄克斯特拉算法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luxiag.github.io/"}],["meta",{"property":"og:updated_time","content":"2022-12-05T10:02:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"狄克斯特拉算法"}],["meta",{"property":"article:tag","content":"算法图解"}],["meta",{"property":"article:published_time","content":"2022-09-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-05T10:02:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"狄克斯特拉算法","slug":"狄克斯特拉算法","link":"#狄克斯特拉算法","children":[]}],"git":{"createdTime":1664978887000,"updatedTime":1670234538000,"contributors":[{"name":"luxiang","email":"luxiag@qq.com","commits":2},{"name":"卢祥","email":"example@qq.com","commits":2},{"name":"卢祥","email":"example@email.com","commits":1},{"name":"卢祥","email":"example@gmail.com","commits":1}]},"readingTime":{"minutes":1.74,"words":521},"filePathRelative":"algorithm/Dijkstra\'s-algorithm.md","localizedDate":"2022年9月30日"}')}}]);