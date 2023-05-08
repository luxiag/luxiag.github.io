"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6324],{95375:(n,a,s)=>{s.r(a),s.d(a,{default:()=>l});var e=s(71534);const t=s.p+"assets/img/image-20210903153052331.6016cf50.png",p=s.p+"assets/img/image-20210903154607867.a541bdd0.png",i=[(0,e.uE)('<h2 id="打包时间分析" tabindex="-1"><a class="header-anchor" href="#打包时间分析" aria-hidden="true">#</a> 打包时间分析</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> speed-measure-webpack-plugin <span class="token parameter variable">-D</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> SpeedMeasurePlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;speed-measure-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> smp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpeedMeasurePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">//........</span>\n    <span class="token comment">// webpack的配置</span>\n<span class="token punctuation">}</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> smp<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="'+t+'" alt="image-20210903153052331"></p><h2 id="打包后文件分析" tabindex="-1"><a class="header-anchor" href="#打包后文件分析" aria-hidden="true">#</a> 打包后文件分析</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> webpack-bundle-analyzer <span class="token parameter variable">-D</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>webpack.config.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> BundleAnalyzerPlugin <span class="token operator">=</span>\n  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack-bundle-analyzer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>BundleAnalyzerPlugin<span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">//....</span>\n    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="'+p+'" alt="image-20210903154607867"></p>',10)],c={},l=(0,s(61935).Z)(c,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)("div",null,i)}]])},61935:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},34576:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e=JSON.parse('{"key":"v-10a101b2","path":"/webpack/packaged-analytics.html","title":"打包分析","lang":"zh-CN","frontmatter":{"title":"打包分析","category":["Webpack"],"summary":"打包时间分析 webpack.config.js 打包后文件分析 webpack.config.js","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/webpack/packaged-analytics.html"}],["meta",{"property":"og:title","content":"打包分析"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luxiag.github.io/"}],["meta",{"property":"og:updated_time","content":"2022-12-30T06:58:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"打包分析"}],["meta",{"property":"article:modified_time","content":"2022-12-30T06:58:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"打包时间分析","slug":"打包时间分析","link":"#打包时间分析","children":[]},{"level":2,"title":"打包后文件分析","slug":"打包后文件分析","link":"#打包后文件分析","children":[]}],"git":{"createdTime":1667133388000,"updatedTime":1672383502000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":1},{"name":"luxiang","email":"luxiag@qq.com","commits":1}]},"readingTime":{"minutes":0.28,"words":84},"filePathRelative":"webpack/packaged-analytics.md","localizedDate":"2022年10月30日"}')}}]);