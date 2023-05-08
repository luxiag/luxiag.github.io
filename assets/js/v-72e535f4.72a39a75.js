"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2169],{1919:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var l=a(71534);const i=a.p+"assets/img/Untitled.e4871b20.png",r=a.p+"assets/img/Untitled-1.fc0dea71.png",n=a.p+"assets/img/Untitled-2.1ea9f629.png",p=a.p+"assets/img/Untitled-3.68c8a7dd.png",s=a.p+"assets/img/Untitled-4.b2833d44.png",d=a.p+"assets/img/Untitled-5.7e92c923.png",h=a.p+"assets/img/Untitled-6.e7d38d4a.png",c=a.p+"assets/img/Untitled-7.0f42f57b.png",o=a.p+"assets/img/Untitled-8.34a06ffb.png",g=a.p+"assets/img/Untitled-9.0593be15.png",m=a.p+"assets/img/Untitled-10.313e1a4a.png",u=a.p+"assets/img/Untitled-11.bd43793a.png",b=a.p+"assets/img/Untitled-12.9467e3ca.png",k=a.p+"assets/img/Untitled-13.686824fb.png",U=a.p+"assets/img/Untitled-14.bcddea97.png",w=a.p+"assets/img/Untitled-15.811a2e14.png",f=a.p+"assets/img/Untitled-16.6f65a642.png",P=a.p+"assets/img/Untitled-17.925fa974.png",S=a.p+"assets/img/Untitled-18.b7175c08.png",T=a.p+"assets/img/Untitled-19.6e2b9cbe.png",N=(0,l.uE)('<table><thead><tr><th>参考</th><th>《网络是怎样连接的》</th></tr></thead></table><p>浏览器、Web服务器、网址（URL）、HTTP、HTML、协议、URI、请求消息、解析器、 Socket库、DNS服务器、域名</p><p><img src="'+i+'" alt="Untitled"></p><h2 id="生成http请求信息" tabindex="-1"><a class="header-anchor" href="#生成http请求信息" aria-hidden="true">#</a> 生成HTTP请求信息</h2><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url" aria-hidden="true">#</a> URL</h3><p><img src="'+r+'" alt="Untitled"></p><h3 id="解析url" tabindex="-1"><a class="header-anchor" href="#解析url" aria-hidden="true">#</a> 解析URL</h3><p><strong>URL 以“/”来结尾表示访问的默认文件名</strong></p><p><img src="'+n+'" alt="Untitled"></p><p><img src="'+p+'" alt="Untitled"></p><h3 id="省略文件名" tabindex="-1"><a class="header-anchor" href="#省略文件名" aria-hidden="true">#</a> 省略文件名</h3>',11),D={href:"http://www.lab.glasscom.com/dir/",target:"_blank",rel:"noopener noreferrer"},I=(0,l._)("p",null,"像前面这样省略文件名时，服务器就会访问/dir/index.html者/dir/default.htm。",-1),x={href:"http://www.lab.glasscom.com/",target:"_blank",rel:"noopener noreferrer"},_=(0,l._)("p",null,"由于省略了文件名，所以结果就是访问/index.html 或者default.htm 这样的文件",-1),v={href:"http://www.lab.glasscom.com/",target:"_blank",rel:"noopener noreferrer"},R=(0,l._)("p",null,"当没路径名时，就代表访问根目录下事先设置的默认文，也就是/index.tml 或者/default.htm 这些文",-1),H={href:"http://www.lab.glasscom.com/whatisthis",target:"_blank",rel:"noopener noreferrer"},y=(0,l.uE)('<p>如果eb 服务器上存在名为whatisthis 的文件，则将whatisthis 作为文件名来处；如果存在名为whatisthis 的目录，则将whatisthis 作为目录名来处理</p><h3 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h3><p>HTTP 协议定义了客户端和服务器之间交互的消息内容和步骤</p><p>客户端会向服务器发送请求消息。请求息中包含的内容是“对什么”和“进行怎样的操作”两个部分</p><p><img src="'+s+'" alt="Untitled"></p><p><strong>“对什么”的部分称为UR</strong>。一般来说，URI 的内容是一个存放网页据的文件名或者是一个CGI 程序B 的文件名，例如“/dir1/file1.html”/dir1/program1.cgi”</p><p><strong>“进行怎样的操作”的部分称为方法</strong>。方法表示需要让Web 服务器完成怎样的工作，其中典型的例子包括读取URI 表示的数据、客户端输入的数据发送给URI 表示的程序等。</p><p>HTTP主要方法：</p><p><img src="'+d+'" alt="Untitled"></p><h3 id="生成http请求信息-1" tabindex="-1"><a class="header-anchor" href="#生成http请求信息-1" aria-hidden="true">#</a> 生成HTTP请求信息</h3><p>对URL 进行解析之后，浏览器确定了Web 服务器和文件名，接下来就是根据这些信息来生成HTTP 请求消息</p><p><img src="'+h+'" alt="Untitled"></p><p><img src="'+c+'" alt="Untitled"></p><p><img src="'+o+'" alt="Untitled"></p><h3 id="发送请求收到响应" tabindex="-1"><a class="header-anchor" href="#发送请求收到响应" aria-hidden="true">#</a> 发送请求收到响应</h3><p><strong>1 条请求消息中只能写1 个URI。如果需要获取多个文件，必须每个文件单独发送1 条请求。</strong></p><p><img src="'+g+'" alt="Untitled"></p><h2 id="向dns服务查询ip" tabindex="-1"><a class="header-anchor" href="#向dns服务查询ip" aria-hidden="true">#</a> 向DNS服务查询IP</h2><h3 id="ip地址" tabindex="-1"><a class="header-anchor" href="#ip地址" aria-hidden="true">#</a> IP地址</h3><p>生成HTTP 消息之后，接下来我们需要委托操作系统将消息发送给Web 服务器。</p><p><strong>在委托操作系统发送消息时，必须要提供通信对象IP 地址</strong></p><p><img src="'+m+'" alt="Untitled"></p><p><img src="'+u+'" alt="Untitled"></p><p><img src="'+b+'" alt="Untitled"></p><blockquote><p>IP 地址的主机号 全0：表示整个子网 全1：表示向子网上所有设备发送包，即“广播”</p></blockquote><h3 id="域名和ip地址并用理由" tabindex="-1"><a class="header-anchor" href="#域名和ip地址并用理由" aria-hidden="true">#</a> 域名和IP地址并用理由</h3><p><strong>让人来使用名称，让路由器来使用IP 地址</strong></p><h3 id="socket库提供查询ip地址" tabindex="-1"><a class="header-anchor" href="#socket库提供查询ip地址" aria-hidden="true">#</a> socket库提供查询IP地址</h3>',28),L={href:"http://lab.glasscom.com/",target:"_blank",rel:"noopener noreferrer"},W=(0,l.uE)('<p>向DNS 服务器发出查询，也就是向DNS 服务器发送查询消息，并接收服务器返回的响应消息</p><p>通过DNS 查询IP 地址的操作称为域名解析，因此负责执行解析（resolution）这一操作的就叫解析器（resolver）</p><p>解析器实际上是一段程序，它包含在操作系统的Socket 库中</p><p>Socket 库也是一种库，其中包含的程序组件可以让其他的应用程序调用操作系统的网络功能，而解析器就是这个库中 的其中一种程序组件。</p><h3 id="通过解析器向dns查询" tabindex="-1"><a class="header-anchor" href="#通过解析器向dns查询" aria-hidden="true">#</a> 通过解析器向DNS查询</h3><p><strong>根据域名查询IP 地址时，浏览器会使用Socket 库中的解析器。</strong></p><p><img src="'+k+'" alt="Untitled"></p><p>调用解析器后，解析器会向DNS 服务器发送查询消息，然后DNS 服务器会返回响应消息。响应消息中包含查询到的IP 地址，解析器会取出IP地址，并将其写入浏览器指定的内存地址中</p><h3 id="解析器的内部原理" tabindex="-1"><a class="header-anchor" href="#解析器的内部原理" aria-hidden="true">#</a> 解析器的内部原理</h3><p>应用程序编写的操作内容是从上往下按顺序执行的，当到达需要调用解析器的部分时，对应的那一行程序就会被执行，应用程序本身的工作就会暂停</p>',10),C={href:"http://glasscom.com/",target:"_blank",rel:"noopener noreferrer"},Z=(0,l.uE)('<p>发送消息这个操作并不是由解析器自身来执行，而是要委托给操作系统内部的协议栈来执行</p><p>解析器调用协议栈后，控制流程会再次转移，协议栈会执行发送消息的操作，然后通过网卡将消息发送给DNS 服务器</p><p>当DNS 服务器收到查询消息后，它会根据消息中的查询内容进行查询。</p><p>如果要访问的Web 服务器已经在DNS 服务器上注册，那么这条记录就能够被找到，然后其IP 地址会被写入响应消息并返回给客户端</p><p>消息经过网络到达客户端，再经过协议栈被传递给解析器</p><p>然后解析器读取出消息取出IP 地址，并将IP 地址传递给应用程序</p><p>向DNS 服务器发送消息时，我们当然也需要知道DNS 服务器的IP 地址。只不过这个IP 地址是作为TCP/IP 的一个设置项目事先设置好的，不需要再去查询了。</p><p><img src="'+U+'" alt="Untitled"></p><h2 id="dns服务器" tabindex="-1"><a class="header-anchor" href="#dns服务器" aria-hidden="true">#</a> DNS服务器</h2><h3 id="dns基本工作" tabindex="-1"><a class="header-anchor" href="#dns基本工作" aria-hidden="true">#</a> DNS基本工作</h3><p>DNS 服务器的基本工作就是接收来自客户端的查询消息，然后根据消息的内容返回响应</p><p>（a） 域名 服务器、邮件服务器（邮件地址中@ 后面的部分）的名称 （b） Class 在最早设计DNS 方案时，DNS 在互联网以外的其他网络中的应用</p><p>（c） 记录类型 表示域名对应何种类型的记录。</p><p><strong>DNS 服务器会从域名与IP 地址的对照表中查找相应的记录，并返回IP 地址</strong></p><p><img src="'+w+'" alt="Untitled"></p><h3 id="域名的层次结构" tabindex="-1"><a class="header-anchor" href="#域名的层次结构" aria-hidden="true">#</a> 域名的层次结构</h3><p><img src="'+f+'" alt="Untitled"></p><p><img src="'+P+'" alt="Untitled"></p><h3 id="通过缓存加快dns服务器的响应" tabindex="-1"><a class="header-anchor" href="#通过缓存加快dns服务器的响应" aria-hidden="true">#</a> 通过缓存加快DNS服务器的响应</h3><p>在真实的互联网中，一台DNS 服务器可以管理多个域的信息</p><p>现实中上级域和下级域有可能共享同一台DNS 服务器。</p><p>有时候并不需要从最上级的根域开始查找，因为DNS 服务器有一个缓存A功能，可以记住之前查询过的域名。如果要查询的域名和相关信息已经在缓存中，那么就可以直接返回响应，接下来的查询可以从缓存的位置开始向下进行。相比每次都从根域找起来说，缓存可以减少查询所需的时间。</p><h2 id="委托协议栈发送消息" tabindex="-1"><a class="header-anchor" href="#委托协议栈发送消息" aria-hidden="true">#</a> 委托协议栈发送消息</h2><h3 id="数据收发操作概览" tabindex="-1"><a class="header-anchor" href="#数据收发操作概览" aria-hidden="true">#</a> 数据收发操作概览</h3><p>这一操作的过程也不仅适用于Web，而是适用于任何网络应用程序</p><p>向操作系统内部的协议栈发出委托时，需要按照指定的顺序来调用Socket 库中的程序组件。</p><p>收发数据的两台计算机之间连接了一条数据通道，数据沿着这条通道流动，最终到达目的地。</p><p><img src="'+S+'" alt="Untitled"></p><p>（1）创建套接字（创建套接字阶段） （2）将管道连接到服务器端的套接字上（连接阶段） （3）收发数据（通信阶段） （4）断开管道并删除套接字（断开阶段）</p><h3 id="创建套接字阶段" tabindex="-1"><a class="header-anchor" href="#创建套接字阶段" aria-hidden="true">#</a> 创建套接字阶段</h3><p>客户端创建套接字的操作非常简单，只要调用Socket 库中的socket 程序组件</p><p>应用程序是通过“描述符”这一类似号码牌的东西来识别套接字的</p><p><img src="'+T+'" alt="Untitled"></p>',33),E={},q=(0,a(61935).Z)(E,[["render",function(e,t){const a=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)("div",null,[N,(0,l._)("p",null,[(0,l.Uk)("（a）"),(0,l._)("a",D,[(0,l.Uk)("http://www.lab.glasscom.com/dir/"),(0,l.Wm)(a)])]),I,(0,l._)("p",null,[(0,l.Uk)("（b）"),(0,l._)("a",x,[(0,l.Uk)("http://www.lab.glasscom.com/"),(0,l.Wm)(a)])]),_,(0,l._)("p",null,[(0,l.Uk)("（c）"),(0,l._)("a",v,[(0,l.Uk)("http://www.lab.glasscom.com"),(0,l.Wm)(a)])]),R,(0,l._)("p",null,[(0,l.Uk)("（d）"),(0,l._)("a",H,[(0,l.Uk)("http://www.lab.glasscom.com/whatisthis"),(0,l.Wm)(a)])]),y,(0,l._)("p",null,[(0,l.Uk)("查询IP 地址的方法非常简单，只要询问最近的DNS 服务器“www."),(0,l._)("a",L,[(0,l.Uk)("lab.glasscom.com"),(0,l.Wm)(a)]),(0,l.Uk)(" 的IP 地址是什么”就可以了")]),W,(0,l._)("p",null,[(0,l.Uk)("当控制流程转移到解析器后，解析器会生成要发送给DNS 服务器的查询消息。这个过程与浏览器生成要发送给Web 服务器的HTTP 请求消息的过程类似，解析器会根据DNS 的规格，生成一条表示“请告诉我www.lab."),(0,l._)("a",C,[(0,l.Uk)("glasscom.com"),(0,l.Wm)(a)]),(0,l.Uk)(" 的IP 地址”B 的数据，并将它发送给DNS 服务器。")]),Z])}]])},61935:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,l]of t)a[e]=l;return a}},67814:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l=JSON.parse('{"key":"v-72e535f4","path":"/network/how-networks-work-part1.html","title":"浏览器生成信息","lang":"zh-CN","frontmatter":{"title":"浏览器生成信息","category":["Network"],"tag":["网络是怎样连接的"],"date":"2021-11-09T00:00:00.000Z","summary":"参考 《网络是怎样连接的》 ---- -------------------- 浏览器、Web服务器、网址（URL）、HTTP、HTML、协议、URI、请求消息、解析器、 Socket库、DNS服务器、域名 生成HTTP请求信息 URL 解析URL URL 以“/”来结尾表示访问的默认文件名 省略文件名 （a）http://www.lab.glasscom.","head":[["meta",{"property":"og:url","content":"https://luxiag.github.io/network/how-networks-work-part1.html"}],["meta",{"property":"og:title","content":"浏览器生成信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://luxiag.github.io/"}],["meta",{"property":"og:updated_time","content":"2023-01-08T13:32:53.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"浏览器生成信息"}],["meta",{"property":"article:tag","content":"网络是怎样连接的"}],["meta",{"property":"article:published_time","content":"2021-11-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-08T13:32:53.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"生成HTTP请求信息","slug":"生成http请求信息","link":"#生成http请求信息","children":[{"level":3,"title":"URL","slug":"url","link":"#url","children":[]},{"level":3,"title":"解析URL","slug":"解析url","link":"#解析url","children":[]},{"level":3,"title":"省略文件名","slug":"省略文件名","link":"#省略文件名","children":[]},{"level":3,"title":"HTTP","slug":"http","link":"#http","children":[]},{"level":3,"title":"生成HTTP请求信息","slug":"生成http请求信息-1","link":"#生成http请求信息-1","children":[]},{"level":3,"title":"发送请求收到响应","slug":"发送请求收到响应","link":"#发送请求收到响应","children":[]}]},{"level":2,"title":"向DNS服务查询IP","slug":"向dns服务查询ip","link":"#向dns服务查询ip","children":[{"level":3,"title":"IP地址","slug":"ip地址","link":"#ip地址","children":[]},{"level":3,"title":"域名和IP地址并用理由","slug":"域名和ip地址并用理由","link":"#域名和ip地址并用理由","children":[]},{"level":3,"title":"socket库提供查询IP地址","slug":"socket库提供查询ip地址","link":"#socket库提供查询ip地址","children":[]},{"level":3,"title":"通过解析器向DNS查询","slug":"通过解析器向dns查询","link":"#通过解析器向dns查询","children":[]},{"level":3,"title":"解析器的内部原理","slug":"解析器的内部原理","link":"#解析器的内部原理","children":[]}]},{"level":2,"title":"DNS服务器","slug":"dns服务器","link":"#dns服务器","children":[{"level":3,"title":"DNS基本工作","slug":"dns基本工作","link":"#dns基本工作","children":[]},{"level":3,"title":"域名的层次结构","slug":"域名的层次结构","link":"#域名的层次结构","children":[]},{"level":3,"title":"通过缓存加快DNS服务器的响应","slug":"通过缓存加快dns服务器的响应","link":"#通过缓存加快dns服务器的响应","children":[]}]},{"level":2,"title":"委托协议栈发送消息","slug":"委托协议栈发送消息","link":"#委托协议栈发送消息","children":[{"level":3,"title":"数据收发操作概览","slug":"数据收发操作概览","link":"#数据收发操作概览","children":[]},{"level":3,"title":"创建套接字阶段","slug":"创建套接字阶段","link":"#创建套接字阶段","children":[]}]}],"git":{"createdTime":1673184773000,"updatedTime":1673184773000,"contributors":[{"name":"luxiag","email":"luxiag@qq.com","commits":1}]},"readingTime":{"minutes":6.89,"words":2067},"filePathRelative":"network/how-networks-work-part1.md","localizedDate":"2021年11月9日"}')}}]);