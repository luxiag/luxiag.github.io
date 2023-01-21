"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2524],{8015:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});var e=a(1534);const t=[(0,e.uE)('<ul><li>PostCSS是一个通过JavaScript来转换样式的工具；</li><li>这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置；</li><li>但是实现这些工具，我们需要借助于PostCSS对应的插件；</li></ul><h1 id="命令行使用postcss" tabindex="-1"><a class="header-anchor" href="#命令行使用postcss" aria-hidden="true">#</a> <strong>命令行使用postcss</strong></h1><p><code>postcss-cli</code>: <code>cli</code>command line interface 命令行接口</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> npm install postcss postcss<span class="token operator">-</span>cli <span class="token operator">-</span><span class="token constant">D</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>通过postcss使用autoprefixer</strong></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> npx postcss <span class="token operator">--</span>use autoprefixer <span class="token operator">-</span>o end<span class="token punctuation">.</span>css <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>css<span class="token operator">/</span>style<span class="token punctuation">.</span>css\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="webpack中使用" tabindex="-1"><a class="header-anchor" href="#webpack中使用" aria-hidden="true">#</a> webpack中使用</h1><h2 id="postcss-loader" tabindex="-1"><a class="header-anchor" href="#postcss-loader" aria-hidden="true">#</a> <strong>postcss-loader</strong></h2><p>在webpack中使用postcss</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> npm install postcss postcss-loader -D\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>在postcss里使用autoprefixer</strong></p><p><code>webpack.config.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n     module<span class="token operator">:</span> <span class="token punctuation">{</span>\n         rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n             <span class="token punctuation">{</span>\n                 test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                 use<span class="token operator">:</span> <span class="token punctuation">[</span>\n                     <span class="token comment">//loader的执行顺序是从右向左（或者说从下到上，或者说从后到前的），</span>\n                     <span class="token comment">//{ loader: &#39;style-loader&#39;} 的简写</span>\n                     <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>\n                     <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>\n                     <span class="token punctuation">{</span>\n                         loader<span class="token operator">:</span><span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>\n                         options<span class="token operator">:</span><span class="token punctuation">{</span>\n                             postcssOptions<span class="token operator">:</span><span class="token punctuation">{</span>\n                                 plugins<span class="token operator">:</span><span class="token punctuation">[</span>\n                                     <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;autoprefixer&quot;</span><span class="token punctuation">)</span>\n                                 <span class="token punctuation">]</span>\n                             <span class="token punctuation">}</span>\n                         <span class="token punctuation">}</span>\n                     <span class="token punctuation">}</span>\n                 <span class="token punctuation">]</span><span class="token punctuation">,</span>\n             <span class="token punctuation">}</span><span class="token punctuation">,</span>\n         <span class="token punctuation">]</span><span class="token punctuation">,</span>\n     <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在postcss使用postcss-preset-env</strong></p><ul><li>将一些现代的CSS特性，转成大多数浏览器认识的CSS，并且会根据目标浏览器或者运行时环境添加所需的polyfill；</li><li>也包括会自动添加autoprefixer（所以相当于已经内置了autoprefixer）；</li></ul><p><code>webpack.config.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n     module<span class="token operator">:</span> <span class="token punctuation">{</span>\n         rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n             <span class="token punctuation">{</span>\n                 test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n                 use<span class="token operator">:</span> <span class="token punctuation">[</span>\n                     <span class="token comment">//loader的执行顺序是从右向左（或者说从下到上，或者说从后到前的），</span>\n                     <span class="token comment">//{ loader: &#39;style-loader&#39;} 的简写</span>\n                     <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>\n                     <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>\n                     <span class="token punctuation">{</span>\n                         loader<span class="token operator">:</span><span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>\n                         options<span class="token operator">:</span><span class="token punctuation">{</span>\n                             postcssOptions<span class="token operator">:</span><span class="token punctuation">{</span>\n                                 plugins<span class="token operator">:</span><span class="token punctuation">[</span>\n                                     <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">)</span>\n                                 <span class="token punctuation">]</span>\n                             <span class="token punctuation">}</span>\n                         <span class="token punctuation">}</span>\n                     <span class="token punctuation">}</span>\n                 <span class="token punctuation">]</span><span class="token punctuation">,</span>\n             <span class="token punctuation">}</span><span class="token punctuation">,</span>\n         <span class="token punctuation">]</span><span class="token punctuation">,</span>\n     <span class="token punctuation">}</span><span class="token punctuation">,</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="单独的postcss配置文件" tabindex="-1"><a class="header-anchor" href="#单独的postcss配置文件" aria-hidden="true">#</a> <strong>单独的postcss配置文件</strong></h1><p>当<code>.css</code>、<code>.less</code>都需要使用postcss插件时，可以将postcss单独抽离处理减少代码重复率</p><p><code>不抽离webpack.config.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> <span class="token comment">//.....</span>\n rules<span class="token operator">:</span> <span class="token punctuation">[</span>\n     <span class="token punctuation">{</span>\n         test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n         use<span class="token operator">:</span> <span class="token punctuation">[</span>\n             <span class="token comment">//loader的执行顺序是从右向左（或者说从下到上，或者说从后到前的），</span>\n             <span class="token comment">//{ loader: &#39;style-loader&#39;} 的简写</span>\n             <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token punctuation">{</span>\n                 loader<span class="token operator">:</span><span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>\n                 options<span class="token operator">:</span><span class="token punctuation">{</span>\n                     postcssOptions<span class="token operator">:</span><span class="token punctuation">{</span>\n                         plugins<span class="token operator">:</span><span class="token punctuation">[</span>\n                             <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">)</span>\n                         <span class="token punctuation">]</span>\n                     <span class="token punctuation">}</span>\n                 <span class="token punctuation">}</span>\n             <span class="token punctuation">}</span>\n         <span class="token punctuation">]</span><span class="token punctuation">,</span>\n     <span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span>\n         test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n         use<span class="token operator">:</span><span class="token punctuation">[</span>\n             <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token punctuation">{</span>\n                 loader<span class="token operator">:</span><span class="token string">&quot;postcss-loader&quot;</span><span class="token punctuation">,</span>\n                 options<span class="token operator">:</span><span class="token punctuation">{</span>\n                     postcssOptions<span class="token operator">:</span><span class="token punctuation">{</span>\n                         plugins<span class="token operator">:</span><span class="token punctuation">[</span>\n                             <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;postcss-preset-env&quot;</span><span class="token punctuation">)</span>\n                         <span class="token punctuation">]</span>\n                     <span class="token punctuation">}</span>\n                 <span class="token punctuation">}</span>\n             <span class="token punctuation">}</span>\n         <span class="token punctuation">]</span>\n     <span class="token punctuation">}</span>\n <span class="token punctuation">]</span><span class="token punctuation">,</span>\n \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>抽离postcss配置</strong></p><p><code>postcss.config.js</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n     plugins<span class="token operator">:</span><span class="token punctuation">[</span>\n         <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;autoprefixer&#39;</span><span class="token punctuation">)</span>\n     <span class="token punctuation">]</span>\n <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> rules<span class="token operator">:</span><span class="token punctuation">[</span>\n     <span class="token punctuation">{</span>\n         test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n         use<span class="token operator">:</span><span class="token punctuation">[</span>\n             <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token string">&quot;postcss-loader&quot;</span>\n         <span class="token punctuation">]</span>\n     <span class="token punctuation">}</span><span class="token punctuation">,</span>\n     <span class="token punctuation">{</span>\n         test<span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>\n         use<span class="token operator">:</span><span class="token punctuation">[</span>\n             <span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>\n             <span class="token string">&quot;postcss-loader&quot;</span>\n         <span class="token punctuation">]</span>\n     <span class="token punctuation">}</span>\n <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',26)],p={},o=(0,a(1935).Z)(p,[["render",function(s,n){return(0,e.wg)(),(0,e.iD)("div",null,t)}]])},1935:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},4989:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e=JSON.parse('{"key":"v-a648759e","path":"/webpack/postcss.html","title":"PostCss","lang":"zh-CN","frontmatter":{"title":"PostCss","date":"2020-10-12T00:00:00.000Z","summary":"PostCSS是一个通过JavaScript来转换样式的工具；; 这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置；; 但是实现这些工具，我们需要借助于PostCSS对应的插件；; 命令行使用postcss postcss-cli: clicommand line interface 命令行接口 通过postcss使用","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/webpack/postcss.html"}],["meta",{"property":"og:title","content":"PostCss"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-30T12:36:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-30T12:36:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"postcss-loader","slug":"postcss-loader","link":"#postcss-loader","children":[]}],"git":{"createdTime":1667133388000,"updatedTime":1667133388000,"contributors":[{"name":"luxiang","email":"luxiag@qq.com","commits":1}]},"readingTime":{"minutes":1.67,"words":501},"filePathRelative":"webpack/postcss.md","localizedDate":"2020年10月12日"}')}}]);