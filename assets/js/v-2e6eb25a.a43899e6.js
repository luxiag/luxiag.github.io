"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6800],{66073:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var t=a(71534);const p={href:"https://socket.io/zh-CN/",target:"_blank",rel:"noopener noreferrer"},e=(0,t._)("h2",{id:"特点",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#特点","aria-hidden":"true"},"#"),(0,t.Uk)(" 特点")],-1),o={href:"http://socket.io",target:"_blank",rel:"noopener noreferrer"},c={href:"http://socket.io",target:"_blank",rel:"noopener noreferrer"},u=(0,t._)("li",null,"自适应：它会自动根据浏览器从 WebSocket、AJAX 长轮询、Iframe 流等等各种方式中选择最佳的方式来实现网络实时应用，非常方便和人性化，而且支持的浏览器最低达 IE5.5。",-1),i=(0,t.uE)('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><details class="custom-container details"><summary>服务器</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> io <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;socket.io&quot;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nio<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;connection&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//向客户端发送消息</span>\n  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;欢迎光临&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//接收到客户端发过来的消息时触发</span>\n  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>客户端</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> socket <span class="token operator">=</span> io<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//监听与服务器端的连接成功事件</span>\n  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;connect&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;连接成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//客户端收到服务器发过来的消息后触发</span>\n  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//监听与服务器端断开连接事件</span>\n  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;disconnect&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;断开连接&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>',3),l={},k=(0,a(61935).Z)(l,[["render",function(n,s){const a=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",null,[(0,t._)("a",p,[(0,t.Uk)("Socket.IO"),(0,t.Wm)(a)]),(0,t.Uk)(" 是一个 WebSocket 库，包括了客户端的 js 和服务器端的 nodejs，它的目标是构建可以在不同浏览器和移动设备上使用的实时应用。")]),e,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("易用性："),(0,t._)("a",o,[(0,t.Uk)("socket.io"),(0,t.Wm)(a)]),(0,t.Uk)(" 封装了服务端和客户端，使用起来非常简单方便。")]),(0,t._)("li",null,[(0,t.Uk)("跨平台："),(0,t._)("a",c,[(0,t.Uk)("socket.io"),(0,t.Wm)(a)]),(0,t.Uk)(" 支持跨平台，这就意味着你有了更多的选择，可以在自己喜欢的平台下开发实时应用。")]),u]),i])}]])},61935:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,t]of s)a[n]=t;return a}},21855:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-2e6eb25a","path":"/websocket/socket-io.html","title":"Socket.IO","lang":"zh-CN","frontmatter":{"title":"Socket.IO","category":["WebSocket"],"date":"2021-04-02T00:00:00.000Z","summary":"Socket.IO 是一个 WebSocket 库，包括了客户端的 js 和服务器端的 nodejs，它的目标是构建可以在不同浏览器和移动设备上使用的实时应用。 特点 易用性：socket.io 封装了服务端和客户端，使用起来非常简单方便。; 跨平台：socket.io 支持跨平台，这就意味着你有了更多的选择，可以在自己喜欢的平台下开发实时应用。; 自适应：","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/websocket/socket-io.html"}],["meta",{"property":"og:title","content":"Socket.IO"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-15T10:46:26.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2021-04-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-15T10:46:26.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1673514916000,"updatedTime":1673779586000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":2}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"websocket/socket-io.md","localizedDate":"2021年4月2日"}')}}]);