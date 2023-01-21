"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6112],{2004:(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});var i=a(1534);const t={href:"http://email.sh",target:"_blank",rel:"noopener noreferrer"},s=(0,i.uE)('<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>\n\n<span class="token function">git</span> filter-branch --env-filter <span class="token string">&#39;\n\nOLD_EMAIL=&quot;old@email&quot;\nCORRECT_NAME=&quot;newName&quot;\nCORRECT_EMAIL=&quot;new@email&quot;\n\nif [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]\nthen\n    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;\n    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;\nfi\nif [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]\nthen\n    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;\n    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;\nfi\n&#39;</span> --tag-name-filter <span class="token function">cat</span> -- <span class="token parameter variable">--branches</span> <span class="token parameter variable">--tags</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 git bash 执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./email.sh\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在将文件推到远程仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin <span class="token parameter variable">--force</span> <span class="token parameter variable">--all</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',5),l={},r=(0,a(1935).Z)(l,[["render",function(e,n){const a=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",null,[(0,i.Uk)("在项目根目录创建 "),(0,i._)("a",t,[(0,i.Uk)("email.sh"),(0,i.Wm)(a)])]),s])}]])},1935:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,i]of n)a[e]=i;return a}},5392:(e,n,a)=>{a.r(n),a.d(n,{data:()=>i});const i=JSON.parse('{"key":"v-81846636","path":"/git/edit-commit-user.html","title":"修改已经提交的commit的用户名和邮箱","lang":"zh-CN","frontmatter":{"title":"修改已经提交的commit的用户名和邮箱","date":"2022-10-12T00:00:00.000Z","category":["Git"],"summary":"在项目根目录创建 email.sh 在 git bash 执行 在将文件推到远程仓库","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/git/edit-commit-user.html"}],["meta",{"property":"og:title","content":"修改已经提交的commit的用户名和邮箱"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-30T06:58:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-30T06:58:22.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1665567570000,"updatedTime":1672383502000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":1},{"name":"卢祥","email":"example@gmail.com","commits":1}]},"readingTime":{"minutes":0.33,"words":99},"filePathRelative":"git/edit-commit-user.md","localizedDate":"2022年10月12日"}')}}]);