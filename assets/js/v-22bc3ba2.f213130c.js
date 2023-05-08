"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8671],{6559:(a,n,t)=>{t.r(n),t.d(n,{default:()=>r});var s=t(71534);const e=t.p+"assets/img/1680123400919111551.cffb9a94.png",o=t.p+"assets/img/1680123400919164026.3e3ba5f7.png",p=(0,s.uE)('<h1 id="分而治之" tabindex="-1"><a class="header-anchor" href="#分而治之" aria-hidden="true">#</a> 分而治之</h1><p>(1) 找出基线条件，这种条件必须尽可能简单。 (2) 不断将问题分解（或者说缩小规模），直到符合基线条件 将一块 1680 x 640 的图片分成方块，方块要尽可能的大 <img src="'+e+'" alt=""></p><ol><li>1680 x 640=&gt; 640x640 + 640x640 + 640x400</li><li>640x 400 =&gt; 400x 400 + 400x240</li><li>400x240 =&gt; 240x240 + 240x160</li><li>240x160 =&gt; 160x 160 + 160 x80</li><li>160x80 =&gt; 80x80 +80x80 适用的方块为 80x80</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 计算数组的值</span>\n<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arrays<span class="token punctuation">,</span> total <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>arrays<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> arrays<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> total<span class="token punctuation">;</span>\n  total <span class="token operator">+=</span> arrays<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">sum</span><span class="token punctuation">(</span>arrays<span class="token punctuation">,</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序" aria-hidden="true">#</a> 快速排序</h1><p>(1) 选择基准值。 (2) 将数组分成两个子数组：小于基准值的元素和大于基准值的元素。 (3) 对这两个子数组进行快速排序。</p><p>有[2,4,3,9,1,6,5]数组 选 2 作为基准值，挑选比 2 小的数值组成左侧数组，比 2 大的组成右侧数组 对挑选出的 2 个数组，重复上述操作</p>',7),c={href:"https://www.cnblogs.com/MOBIN/p/4681369.html/",target:"_blank",rel:"noopener noreferrer"},l=(0,s._)("img",{src:o,alt:"来源(https://www.cnblogs.com/MOBIN/p/4681369.html)"},null,-1),i={},r=(0,t(61935).Z)(i,[["render",function(a,n){const t=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[p,(0,s._)("p",null,[(0,s._)("a",null,[(0,s._)("a",c,[(0,s.Uk)("https://www.cnblogs.com/MOBIN/p/4681369.html/"),(0,s.Wm)(t)])]),l])])}]])},61935:(a,n)=>{n.Z=(a,n)=>{const t=a.__vccOpts||a;for(const[a,s]of n)t[a]=s;return t}},36231:(a,n,t)=>{t.r(n),t.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-22bc3ba2","path":"/algorithm/quick-sort.html","title":"算法图解笔记-快速排序","lang":"zh-CN","frontmatter":{"title":"算法图解笔记-快速排序","date":"2022-09-19T00:00:00.000Z","reference":"算法图解","noShow":true,"category":["算法"],"tags":["算法图解","D&C算法"],"summary":"分而治之 (1) 找出基线条件，这种条件必须尽可能简单。 (2) 不断将问题分解（或者说缩小规模），直到符合基线条件 将一块 1680 x 640 的图片分成方块，方块要尽可能的大 1. 1680 x 640=> 640x640 + 640x640 + 640x400 2. 640x 400 => 400x 400 + 400x240 3. 400x240 ","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/algorithm/quick-sort.html"}],["meta",{"property":"og:title","content":"算法图解笔记-快速排序"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luxiag.github.io/"}],["meta",{"property":"og:updated_time","content":"2023-01-19T03:28:45.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"算法图解笔记-快速排序"}],["meta",{"property":"article:tag","content":"算法图解"}],["meta",{"property":"article:tag","content":"D&C算法"}],["meta",{"property":"article:published_time","content":"2022-09-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-19T03:28:45.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1663833246000,"updatedTime":1674098925000,"contributors":[{"name":"卢祥","email":"example@gmail.com","commits":3},{"name":"luxiang","email":"luxiag@qq.com","commits":2},{"name":"luxiag","email":"luxiag@qq.com","commits":1},{"name":"卢祥","email":"example@qq.com","commits":1}]},"readingTime":{"minutes":0.93,"words":280},"filePathRelative":"algorithm/quick-sort.md","localizedDate":"2022年9月19日"}')}}]);