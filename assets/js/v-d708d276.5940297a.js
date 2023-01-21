"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4928],{3206:(e,n,s)=>{s.r(n),s.d(n,{default:()=>r});var a=s(1534);const t=(0,a.uE)('<h2 id="文本类型" tabindex="-1"><a class="header-anchor" href="#文本类型" aria-hidden="true">#</a> 文本类型</h2><ul><li><code>&lt;custom-ident&gt;</code></li><li>作为  <code>&lt;ident&gt;</code>  预定义的关键字</li><li><code>&lt;string&gt;</code></li><li><code>&lt;url&gt;</code></li></ul><h3 id="custom-ident" tabindex="-1"><a class="header-anchor" href="#custom-ident" aria-hidden="true">#</a> custom-ident</h3><p>用户自定义字符串标识符</p><p><code>&lt;custom-ident&gt;</code>  语法同 CSS 属性名相似，但它是区分大小写的。可以由以下字符组成：</p>',5),i=(0,a.uE)("<li>字母 (<code>A</code> - <code>Z</code>, <code>a</code> - <code>z</code>),</li><li>十进制数 (<code>0</code> - <code>9</code>),</li><li>连字符 (``),</li><li>下划线 (<code>_</code>),</li><li>转义字符 ( <code>\\</code>),</li>",5),l={href:"http://en.wikipedia.org/wiki/Unicode",target:"_blank",rel:"noopener noreferrer"},c=(0,a._)("code",null,"\\",-1),d=(0,a.uE)('<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* validIdent*/</span>\n<span class="token atrule"><span class="token rule">@keyframe</span> validIdent</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* keyframes go here */</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@keyframe</span> <span class="token string">&#39;validString&#39;</span></span> <span class="token punctuation">{</span>\n  <span class="token comment">/* keyframes go here */</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.item</span> <span class="token punctuation">{</span>\n  <span class="token comment">/*content*/</span>\n  <span class="token property">grid-area</span><span class="token punctuation">:</span> content<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预定义的关键值" tabindex="-1"><a class="header-anchor" href="#预定义的关键值" aria-hidden="true">#</a> 预定义的关键值</h3><p>预定义的关键值是由 CSS 标准为属性定义的文本值</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token comment">/*left*/</span>\n  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> <code>&lt;string&gt;</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;This is my content.&quot;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> <code>&lt;url&gt;</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;images/my-background.png&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数值数据类型" tabindex="-1"><a class="header-anchor" href="#数值数据类型" aria-hidden="true">#</a> 数值数据类型</h2><ul><li><code>&lt;integer&gt;</code></li><li><code>&lt;number&gt;</code></li><li><code>&lt;dimension&gt;</code></li><li><code>&lt;percentage&gt;</code></li></ul><h3 id="integer" tabindex="-1"><a class="header-anchor" href="#integer" aria-hidden="true">#</a> integer</h3><p>一个整数包含  0  到  9 的一个或多个十进制数字，例如  1024  或  -55。一个整数可能额外包含  +  或  -  前缀，在正负号和数值之间没有任何空格。</p><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h3><p>表示一个真正的数，有可能又或者没有小数点和小数部分。例如 0.255，128 或 -1.2。数值也可能包含前缀 + 或 - 标识正负。</p><h3 id="dimension" tabindex="-1"><a class="header-anchor" href="#dimension" aria-hidden="true">#</a> dimension</h3><p>是一个包含单位的 <code>number</code>，例如 45deg，100ms，或者 10px。</p><h3 id="percentage" tabindex="-1"><a class="header-anchor" href="#percentage" aria-hidden="true">#</a> percentage</h3><p>百分比</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',19),o={},r=(0,s(1935).Z)(o,[["render",function(e,n){const s=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a._)("ul",null,[i,(0,a._)("li",null,[(0,a._)("a",l,[(0,a.Uk)("Unicode"),(0,a.Wm)(s)]),(0,a.Uk)("  编码（格式：转义字符（"),c,(0,a.Uk)("）后跟 1 到 6 位十六进制数）")])]),d])}]])},1935:(e,n)=>{n.Z=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},867:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-d708d276","path":"/css/date-type.html","title":"CSS中的数据类型","lang":"zh-CN","frontmatter":{"title":"CSS中的数据类型","date":"2021-10-15T00:00:00.000Z","category":["CSS"],"summary":"文本类型 ``; 作为  ``  预定义的关键字; ``; ``; custom-ident 用户自定义字符串标识符 ``  语法同 CSS 属性名相似，但它是区分大小写的。可以由以下字符组成： 字母 (A - Z, a - z),; 十进制数 (0 - 9),; 连字符 (``),; 下划线 (_),; 转义字符 ( \\\\),; Unicode  编码（格式","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/css/date-type.html"}],["meta",{"property":"og:title","content":"CSS中的数据类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-30T06:58:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2021-10-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-30T06:58:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"文本类型","slug":"文本类型","link":"#文本类型","children":[{"level":3,"title":"custom-ident","slug":"custom-ident","link":"#custom-ident","children":[]},{"level":3,"title":"预定义的关键值","slug":"预定义的关键值","link":"#预定义的关键值","children":[]},{"level":3,"title":"<string>","slug":"string","link":"#string","children":[]},{"level":3,"title":"<url>","slug":"url","link":"#url","children":[]}]},{"level":2,"title":"数值数据类型","slug":"数值数据类型","link":"#数值数据类型","children":[{"level":3,"title":"integer","slug":"integer","link":"#integer","children":[]},{"level":3,"title":"number","slug":"number","link":"#number","children":[]},{"level":3,"title":"dimension","slug":"dimension","link":"#dimension","children":[]},{"level":3,"title":"percentage","slug":"percentage","link":"#percentage","children":[]}]}],"git":{"createdTime":1665145185000,"updatedTime":1672383502000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":1},{"name":"luxiang","email":"luxiag@qq.com","commits":1}]},"readingTime":{"minutes":1.1,"words":329},"filePathRelative":"css/date-type.md","localizedDate":"2021年10月15日"}')}}]);