"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[20],{5338:(n,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(1534);const e=(0,s.uE)('<h2 id="教室调度问题" tabindex="-1"><a class="header-anchor" href="#教室调度问题" aria-hidden="true">#</a> 教室调度问题</h2><table><thead><tr><th>课程</th><th>开始时间</th><th>结束时间</th></tr></thead><tbody><tr><td>美术</td><td>9AM</td><td>10AM</td></tr><tr><td>英语</td><td>9:30AM</td><td>10:30AM</td></tr><tr><td>数学</td><td>10AM</td><td>11AM</td></tr><tr><td>计算机</td><td>10:30AM</td><td>11:30AM</td></tr><tr><td>音乐</td><td>11AM</td><td>12PM</td></tr></tbody></table><p>(1) 选出结束最早的课，它就是要在这间教室上的第一堂课。</p><p>(2) 接下来，必须选择第一堂课结束后才开始的课。同样，你选择结束最早的课，这将是要 在这间教室上的第二堂课。</p><table><thead><tr><th>课程</th><th>开始时间</th><th>结束时间</th><th></th></tr></thead><tbody><tr><td>美术</td><td>9AM</td><td>10AM</td><td>✅</td></tr><tr><td>英语</td><td>9:30AM</td><td>10:30AM</td><td>❌</td></tr><tr><td>数学</td><td>10AM</td><td>11AM</td><td>✅</td></tr><tr><td>计算机</td><td>10:30AM</td><td>11:30AM</td><td>❌</td></tr><tr><td>音乐</td><td>11AM</td><td>12PM</td><td>✅</td></tr></tbody></table><h2 id="跳跃游戏" tabindex="-1"><a class="header-anchor" href="#跳跃游戏" aria-hidden="true">#</a> 跳跃游戏</h2>',6),o={href:"https://leetcode.cn/problems/jump-game-ii/description/",target:"_blank",rel:"noopener noreferrer"},p=(0,s.uE)('<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>给你一个非负整数数组 nums ，你最初位于数组的第一个位置。\n数组中的每个元素代表你在该位置可以跳跃的最大长度。\n你的目标是使用最少的跳跃次数到达数组的最后一个位置。\n假设你总是可以到达数组的最后一个位置。\n\n输入: nums = [2,3,1,1,4]\n输出: 2\n解释: 跳到最后一个位置的最小跳跃数是 2。\n从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),i={href:"https://leetcode.cn/problems/jump-game-ii/solutions/230241/tiao-yue-you-xi-ii-by-leetcode-solution/",target:"_blank",rel:"noopener noreferrer"},l=(0,s.uE)('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">jump</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> length <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n  <span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> maxPosition <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> steps <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//每次在上次能跳到的范围（end）内选择一个能跳的最远的位置</span>\n    maxPosition <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxPosition<span class="token punctuation">,</span> i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      end <span class="token operator">=</span> maxPosition<span class="token punctuation">;</span>\n      steps<span class="token operator">++</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> steps<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),d={},r=(0,a(1935).Z)(d,[["render",function(n,t){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[e,(0,s._)("p",null,[(0,s.Uk)("来源："),(0,s._)("a",o,[(0,s.Uk)("https://leetcode.cn/problems/jump-game-ii/description/"),(0,s.Wm)(a)])]),p,(0,s._)("p",null,[(0,s.Uk)("来源："),(0,s._)("a",i,[(0,s.Uk)("https://leetcode.cn/problems/jump-game-ii/solutions/230241/tiao-yue-you-xi-ii-by-leetcode-solution/"),(0,s.Wm)(a)])]),l])}]])},1935:(n,t)=>{t.Z=(n,t)=>{const a=n.__vccOpts||n;for(const[n,s]of t)a[n]=s;return a}},7869:(n,t,a)=>{a.r(t),a.d(t,{data:()=>s});const s=JSON.parse('{"key":"v-0e5da064","path":"/algorithm/greedy-alogrithm.html","title":"贪婪算法","lang":"zh-CN","frontmatter":{"title":"贪婪算法","date":"2022-10-02T00:00:00.000Z","category":["算法"],"tag":["算法图解"],"summary":"教室调度问题 课程 开始时间 结束时间 ------ -------- -------- 美术 9AM 10AM 英语 9:30AM 10:30AM 数学 10AM 11AM 计算机 10:30AM 11:30AM 音乐 11AM 12PM (1) 选出结束最早的课，它就是要在这间教室上的第一堂课。 (2) 接下来，必须选择第一堂课结束后才开始的课。同样，你","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/algorithm/greedy-alogrithm.html"}],["meta",{"property":"og:title","content":"贪婪算法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-01T08:27:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"算法图解"}],["meta",{"property":"article:published_time","content":"2022-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-01T08:27:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"教室调度问题","slug":"教室调度问题","link":"#教室调度问题","children":[]},{"level":2,"title":"跳跃游戏","slug":"跳跃游戏","link":"#跳跃游戏","children":[]}],"git":{"createdTime":1665068249000,"updatedTime":1669883260000,"contributors":[{"name":"luxiang","email":"luxiag@qq.com","commits":1},{"name":"卢祥","email":"example@qq.com","commits":1}]},"readingTime":{"minutes":1.36,"words":407},"filePathRelative":"algorithm/greedy-alogrithm.md","localizedDate":"2022年10月2日"}')}}]);