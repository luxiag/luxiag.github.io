"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[580],{2089:(e,s,i)=>{i.r(s),i.d(s,{default:()=>r});var l=i(71534);const t=[(0,l.uE)('<p>Browserslist 是一个在不同的前端工具之间，共享目标浏览器和 Node.js 版本的配置：</p><ul><li>Autoprefixer</li><li>Babel</li><li>postcss-preset-env</li><li>eslint-plugin-compat</li><li>stylelint-no-unsupported-browser-features</li><li>postcss-normalize</li><li>obsolete-webpack-plugin</li></ul><h2 id="浏览器兼容" tabindex="-1"><a class="header-anchor" href="#浏览器兼容" aria-hidden="true">#</a> <strong>浏览器兼容</strong></h2><ul><li>针对不同的浏览器支持的特性：比如 css 特性、js 语法，之间的兼容性；</li><li>Chrome、Safari、IE、Edge、Chrome for Android、UC Browser、QQ Browser 等等；</li></ul><h2 id="浏览器市场占有率" tabindex="-1"><a class="header-anchor" href="#浏览器市场占有率" aria-hidden="true">#</a> <strong>浏览器市场占有率</strong></h2><p>caniuse</p><h2 id="浏览器查询过程" tabindex="-1"><a class="header-anchor" href="#浏览器查询过程" aria-hidden="true">#</a> <strong>浏览器查询过程</strong></h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &gt; 1% #css要兼容市场占有率大于1%的浏览器，js也要兼容市场占有率大于1%的浏览器；\n last 2 versions # 每个浏览器最新2个版本\n not dead #还在更新的浏览器\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工具会根据我们的配置来获取相关的浏览器信息，以方便决定是否需要进行兼容性的支持：</p><ul><li>条件查询使用的是 caniuse-lite 的工具，这个工具的数据来自于 caniuse 的网站上；</li></ul><h2 id="编写规则" tabindex="-1"><a class="header-anchor" href="#编写规则" aria-hidden="true">#</a> <strong>编写规则</strong></h2><ul><li><strong>defaults：Browserslist 的默认浏览器（&gt; 0.5%, last 2 versions, Firefox ESR, not dead）。</strong></li><li><strong>5%：通过全局使用情况统计信息选择的浏览器版本。 &gt;=，&lt;和&lt;=工作过。</strong><ul><li>5% in US：使用美国使用情况统计信息。它接受两个字母的国家/地区代码。</li><li><code>&gt; 5% in alt-AS</code>：使用亚洲地区使用情况统计信息。有关所有区域代码的列表，请参见 caniuse-lite/data/regions</li><li><code>&gt; 5% in my stats</code>：使用自定义用法数据。</li><li><code>&gt; 5% in browserslist-config-mycompany stats</code>：使用 来自的自定义使用情况数据 browserslist-config-mycompany/browserslist-stats.json。</li><li>cover 99.5%：提供覆盖率的最受欢迎的浏览器。</li><li>cover 99.5% in US：与上述相同，但国家/地区代码由两个字母组成。</li><li>cover 99.5% in my stats：使用自定义用法数据。</li></ul></li><li><strong>dead：24 个月内没有官方支持或更新的浏览器。现在是 IE 10，IE_Mob 11，BlackBerry 10</strong>，BlackBerry 7， Samsung 4 和 OperaMobile 12.1。</li><li><strong>last 2 versions：每个浏览器的最后 2 个版本。</strong><ul><li>last 2 Chrome versions：最近 2 个版本的 Chrome 浏览器。</li><li>last 2 major versions 或 last 2 iOS major versions：最近 2 个主要版本的所有次要/补丁版本。</li></ul></li><li>node 10 和 node 10.4：选择最新的 Node.js10.x.x 或 10.4.x 版本。 <ul><li>current node：Browserslist 现在使用的 Node.js 版本。</li><li>maintained node versions：所有 Node.js 版本，仍由 Node.js Foundation 维护。</li></ul></li><li>iOS 7：直接使用 iOS 浏览器版本 7。 <ul><li>Firefox &gt; 20：Firefox 的版本高于 20 &gt;=，&lt;并且&lt;=也可以使用。它也可以与 Node.js 一起使用。</li><li>ie 6-8：选择一个包含范围的版本。</li><li>Firefox ESR：最新的[Firefox ESR]版本。</li><li>PhantomJS 2.1 和 PhantomJS 1.9：选择类似于 PhantomJS 运行时的 Safari 版本。</li></ul></li><li>extends browserslist-config-mycompany：从 browserslist-config-mycompanynpm 包中查询 。</li><li>supports es6-module：支持特定功能的浏览器。 es6-module 这是“我可以使用” 页面 feat 的 URL 上的参数。有关所有可用功能的列表，请参见 。caniuse￾lite/data/features</li><li>browserslist config：在 Browserslist 配置中定义的浏览器。在差异服务中很有用，可用于修改用户的配置，例如 browserslist config and supports es6-module。</li><li>since 2015 或 last 2 years：自 2015 年以来发布的所有版本（since 2015-03 以及 since 2015-03-10）。</li><li>unreleased versions 或 unreleased Chrome versions：Alpha 和 Beta 版本。</li><li><strong>not ie &lt;= 8：排除先前查询选择的浏览器</strong>。</li></ul><h2 id="命令行使用-browserslist" tabindex="-1"><a class="header-anchor" href="#命令行使用-browserslist" aria-hidden="true">#</a> <strong>命令行使用 browserslist</strong></h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code> npx browserslist <span class="token string">&quot;&gt;1%, last 2 version, not dead&quot;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置-browserslist" tabindex="-1"><a class="header-anchor" href="#配置-browserslist" aria-hidden="true">#</a> <strong>配置 browserslist</strong></h2><ul><li>在<code>package.json</code>配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>\n     <span class="token string">&quot;last 2 version&quot;</span><span class="token punctuation">,</span>\n     <span class="token string">&quot;not dead&quot;</span><span class="token punctuation">,</span>\n     <span class="token string">&quot;&gt;0.2%&quot;</span>\n <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>.browserslistrc</code>文件</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> &gt; <span class="token number">0.5</span>%\n last <span class="token number">2</span> version\n not dead\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',19)],n={},r=(0,i(61935).Z)(n,[["render",function(e,s){return(0,l.wg)(),(0,l.iD)("div",null,t)}]])},61935:(e,s)=>{s.Z=(e,s)=>{const i=e.__vccOpts||e;for(const[e,l]of s)i[e]=l;return i}},68086:(e,s,i)=>{i.r(s),i.d(s,{data:()=>l});const l=JSON.parse('{"key":"v-03765a15","path":"/webpack/browserslist.html","title":"Browserslist","lang":"zh-CN","frontmatter":{"title":"Browserslist","date":"2020-10-15T00:00:00.000Z","category":["Webpack"],"summary":"Browserslist 是一个在不同的前端工具之间，共享目标浏览器和 Node.js 版本的配置： Autoprefixer; Babel; postcss-preset-env; eslint-plugin-compat; stylelint-no-unsupported-browser-features; postcss-normalize; obso","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/webpack/browserslist.html"}],["meta",{"property":"og:title","content":"Browserslist"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-30T06:58:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-10-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-30T06:58:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"浏览器兼容","slug":"浏览器兼容","link":"#浏览器兼容","children":[]},{"level":2,"title":"浏览器市场占有率","slug":"浏览器市场占有率","link":"#浏览器市场占有率","children":[]},{"level":2,"title":"浏览器查询过程","slug":"浏览器查询过程","link":"#浏览器查询过程","children":[]},{"level":2,"title":"编写规则","slug":"编写规则","link":"#编写规则","children":[]},{"level":2,"title":"命令行使用 browserslist","slug":"命令行使用-browserslist","link":"#命令行使用-browserslist","children":[]},{"level":2,"title":"配置 browserslist","slug":"配置-browserslist","link":"#配置-browserslist","children":[]}],"git":{"createdTime":1667133388000,"updatedTime":1672383502000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":1},{"name":"luxiang","email":"luxiag@qq.com","commits":1},{"name":"卢祥","email":"example@gmail.com","commits":1}]},"readingTime":{"minutes":2.83,"words":849},"filePathRelative":"webpack/browserslist.md","localizedDate":"2020年10月15日"}')}}]);