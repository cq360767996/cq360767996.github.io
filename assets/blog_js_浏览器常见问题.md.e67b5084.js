import{o as l,c as i,e}from"./app.7aeaea67.js";const r='{"title":"浏览器常见问题","description":"","frontmatter":{"title":"浏览器常见问题","date":"2020-08-17T00:00:00.000Z","sidebar":"auto","categories":["JavaScript"],"tags":["JavaScript"]},"headers":[{"level":2,"title":"CSS 加载会造成阻塞吗","slug":"css-加载会造成阻塞吗"},{"level":2,"title":"为什么 JS 会阻塞页面加载","slug":"为什么-js-会阻塞页面加载"},{"level":2,"title":"defer 和 async 的区别","slug":"defer-和-async-的区别"},{"level":2,"title":"防抖节流","slug":"防抖节流"},{"level":2,"title":"requestAnimationFrame","slug":"requestanimationframe"},{"level":2,"title":"图片懒加载","slug":"图片懒加载"},{"level":2,"title":"cookie","slug":"cookie"},{"level":2,"title":"localStorage & sesstionStorage","slug":"localstorage-sesstionstorage"},{"level":2,"title":"浏览器缓存","slug":"浏览器缓存"},{"level":2,"title":"从输入 URL 到页面呈现发生了什么","slug":"从输入-url-到页面呈现发生了什么"},{"level":2,"title":"重排 & 重绘 & 合成","slug":"重排-重绘-合成"},{"level":2,"title":"谈一谈跨域，同源策略，以及跨域解决方案","slug":"谈一谈跨域，同源策略，以及跨域解决方案"},{"level":2,"title":"xss(Cross Site Scripting)攻击","slug":"xss-cross-site-scripting-攻击"},{"level":2,"title":"跨站请求伪造 csrf(Cross Site Request Forgery)","slug":"跨站请求伪造-csrf-cross-site-request-forgery"}],"relativePath":"blog/js/浏览器常见问题.md","lastUpdated":1629443465963}',s={},a=[e('<h2 id="css-加载会造成阻塞吗"><a class="header-anchor" href="#css-加载会造成阻塞吗" aria-hidden="true">#</a> CSS 加载会造成阻塞吗</h2><ul><li>CSS 不会阻塞 DOM 解析，但会阻塞 DOM 渲染。</li><li>CSS 会阻塞 JS 执行，并不会阻塞 JS 文件下载</li></ul><h2 id="为什么-js-会阻塞页面加载"><a class="header-anchor" href="#为什么-js-会阻塞页面加载" aria-hidden="true">#</a> 为什么 JS 会阻塞页面加载</h2><p>JS 阻塞 DOM 解析，也就会阻塞页面 原因：GUI 渲染线程与 JavaScript 引擎为互斥的关系</p><h2 id="defer-和-async-的区别"><a class="header-anchor" href="#defer-和-async-的区别" aria-hidden="true">#</a> defer 和 async 的区别</h2><p>同：</p><ul><li>都是异步加载外部 js</li><li>都不会阻塞 dom 解析</li><li>没有 src 的话无效</li></ul><p>异：</p><ul><li>async 在 load 事件前，dom 什么的都准备好了</li><li>defer 在 DOMContentLoaded 事件前</li></ul><h2 id="防抖节流"><a class="header-anchor" href="#防抖节流" aria-hidden="true">#</a> 防抖节流</h2><ul><li>防抖是在等待时间之后再触发事件，一直点击会重置定时器</li><li>节流是在等待时间内只触发一次，点击完立即触发，在等待时候之后再次触发 使用场景：</li><li>scroll、resize 事件</li><li>点击请求接口</li></ul><h2 id="requestanimationframe"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> requestAnimationFrame</h2><ul><li>高性能动画实现，调用交给 系统绘制来决定</li><li>每一帧调用一次，一般屏幕刷新频率是 60hz，所以大约为 1000/60 = 16.7ms 调用一次</li><li>接收一个回调函数</li></ul><h2 id="图片懒加载"><a class="header-anchor" href="#图片懒加载" aria-hidden="true">#</a> 图片懒加载</h2><ul><li>将图片 url 放到 img 的 data-src 里面</li><li>判断 img 是否出现在可视域，offsetTop &lt; scrollTop + clientHeight</li><li>出现的话就将 data-src 给到 src</li></ul><h2 id="cookie"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2><ul><li>由服务端加在响应头上的 Set-Cookie 字段上</li><li>随请求携带</li><li>Expired：过期时间，指的是服务器时间，其实是和客户端时间有出入的</li><li>Max-age：请求返回后的固定秒数有效</li><li>优先级 Max-age 大于 Expired</li><li>Domain：指定主域名，缺省值是当前的主域名（不包含子域名）</li><li>Path：指定可访问 cookie 的路径</li><li>Secure：表示仅适用于 https</li><li>HTTPOnly：禁止使用 document.cookie 拿，防止 xss（Cross Site Script）</li><li>SameSite：跨站时无法发送，防止 CSRF(Cross Site Request Forgery)</li></ul><p>作用：</p><ul><li>维持一个会话的状态</li></ul><p>缺点：</p><ul><li>4k 的限制</li><li>性能差，增加请求的体积</li><li>安全缺陷，文本格式传输</li></ul><h2 id="localstorage-sesstionstorage"><a class="header-anchor" href="#localstorage-sesstionstorage" aria-hidden="true">#</a> localStorage &amp; sesstionStorage</h2><ul><li>local 永久存储</li><li>sesstion 仅对当前 session 有效</li></ul><h2 id="浏览器缓存"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h2><ul><li>强缓存</li><li>协商缓存</li></ul><p>强缓存：</p><ul><li>Expires：过期时间，指的是相对于服务器的时间，与客户端有出入</li><li>Cache-Control：max-age，请求接受之后的过期时长，http1.1 采用</li><li>优先级 Cache-Control &gt; Expires</li></ul><p>协商缓存：</p><ul><li>LastModified： <ul><li>最后修改时间</li><li>下一次请求的时候在请求头加上 if-modified-since，就是上一次最后修改时间，后端会对比这两个时间，还在有效期间，就直接返回 304，如果过期了就走正常的请求</li></ul></li><li>ETag： <ul><li>服务器会对根据当前文件的内容生成一个唯一标识，比如 md5，在这个文件内容变化时，标识也会变化</li><li>下一次请求的时候会在请求头上带上 If-None-Match 字段，也就是这个文件的唯一标识，后端对比标识，一样的话直接 304，不一样走正常请求</li></ul></li></ul><p>二者对比：</p><ul><li>LastModified 性能优于 ETag</li><li>精度的话 ETag 优于 LastModified</li><li>LastModified 精度是 1s，如果 1s 改动多次文件，缓存会失效</li><li>LastModified 修改了文件，但是内容未修改，会导致失效</li></ul><p>缓存位置（由高到低）：</p><ul><li>Service Worker： 借鉴 web worker 思路，不能操作 dom，可以完成离线缓存、消息推送和网络代理</li><li>Memory Cache：效率最高，存在内存中，但是存活时间短</li><li>Disk Cache：存在磁盘中，效率低，但是容量大，1.比较大的 js、css 会直接存入 2.使用频率高的也会存入</li><li>Push Cache： <ul><li>最后一种缓存方式，只存在于当前 session，</li><li>缓存时间短，只有 5 分钟，</li><li>且只能被使用一次，断开连接失效</li></ul></li></ul><h2 id="从输入-url-到页面呈现发生了什么"><a class="header-anchor" href="#从输入-url-到页面呈现发生了什么" aria-hidden="true">#</a> 从输入 URL 到页面呈现发生了什么</h2><ul><li>浏览器构建请求行，格式为<code>GET / HTTP1.1</code></li><li>查找缓存，命中的话直接走缓存</li><li>DNS 解析：根据域名解析拿到服务器的 ip 地址，依赖“DNS 域名解析服务系统”，解析过程如下： <ul><li>先查看有没有缓存，有缓存直接走缓存</li><li>没有缓存就都 hosts 的配置</li><li>没有配置 hosts 就直接发到配置的“本地 dns 服务器”</li><li>“本地 dns 服务器”有记录发回记录</li><li>直接发送到根服务器，全球只有 13 组，举例：<a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">https://www.baidu.com</a>.</li><li><a href="http://xn--rcr68b02y6leqpx.com" target="_blank" rel="noopener noreferrer">找到最后的.com</a> .cn .org 顶级服务器</li><li>找到二级域服务器 <a href="http://baidu.com" target="_blank" rel="noopener noreferrer">baidu.com</a>，以此类推，最终找人域名所在的服务器的 ip</li></ul></li><li>建立 TCP 连接 <ul><li>三次握手连接 <ul><li>客户端发送 SYN 报文给服务端</li><li>服务端接受 SYN 报文，并返回一个 SYN 报文和一个 ACK 报文</li><li>客户端接收服务端的 SYN 报文和 ACK 报文，再发一个 ACK 报文</li></ul></li><li>传输数据</li><li>四次握手断开连接 <ul><li>客户端发送 FIN 报文给服务端</li><li>服务端接受 FIN 报文，并返回一个 ACK 包表示收到</li><li>等服务端确认自己做好准备，再发一个 FIN 报文</li><li>客户端收到 FIN 报文，再发一个 ACK 报文</li></ul></li></ul></li><li>发送 http 请求，需要携带 请求行、请求头、请求体 <ul><li>请求行：表明请求类型、路径、协议</li><li>请求头：包含 cookie、Accept、Cache-Control 等字段</li><li>请求体：指的是 post 的中所携带的参数，后端可以通过 request.body 拿到</li></ul></li><li>服务器响应，也就是常说的 response，也包括响应行、响应头、响应体 <ul><li>响应行：表示使用的协议、和响应的状态</li><li>响应头：里面有一个 Connection 可以用来表示连接状态，一般是 close，如果是 Keep-Alive 的话，其他请求也可以复用这个连接</li><li>响应体：就是返回的数据，就是你请求最终拿到的东西</li></ul></li><li>浏览器拿到所有资源来进行解析 <ul><li>先解析 html 中的 DOM，生成 DOM 树</li><li>再解析 css 并生成 CSSOM 树</li><li>合并 dom 和 CSSOM 生成一个渲染树</li><li>根据渲染树来进行布局，计算每个节点的位置</li><li>调用 GPU 线程来进行绘制，显示到屏幕上</li><li>js 引擎解析 script 标签</li></ul></li></ul><h2 id="重排-重绘-合成"><a class="header-anchor" href="#重排-重绘-合成" aria-hidden="true">#</a> 重排 &amp; 重绘 &amp; 合成</h2><ul><li>重排指的是对 DOM 结构的修改引起了 DOM 的几何尺寸发生变化，才会发生重排，比如 width、height、margin 等</li><li>重绘指的是节点的 color、background-color、visiblity 发生变化，会发生重绘</li><li>合成指的是修改的部分不能够引起重排和重绘，会直接交给合成线程来处理，这也就是为什么利用 tranform 来实现的动画效率高，因为不会触发重排和重绘</li></ul><h2 id="谈一谈跨域，同源策略，以及跨域解决方案"><a class="header-anchor" href="#谈一谈跨域，同源策略，以及跨域解决方案" aria-hidden="true">#</a> 谈一谈跨域，同源策略，以及跨域解决方案</h2><ul><li>跨域是由浏览器的同源策略造成，是浏览器对 js 做出的安全限制</li><li>同源策略指的是协议、域名、端口相同的请求称之为同源。 <ul><li>无法读取 cookie、localStorage、IndexedDB</li><li>DOM 和 js 对象无法读取</li><li>无法发送 ajax 请求</li></ul></li></ul><p>解决方案：</p><ul><li>jsonp：请求 js 文件是不会跨域，服务端可以返回一个 js 文件，然后拿到之后动态拼接到 html 里面，再利用回调函数拿到 js 里面的数据</li><li>cors：服务端设置 Access-Control-Allow-Origin，设置为通配符就是所有接口都可以跨域</li><li>iframe 之间的跨域可以用 postMessage 来解决</li><li>子域名与主域名直接的跨域，可以通过修改 window.domain</li><li>设置 withCredentials 为 true，可以在请求的时候允许携带跨域的 cookie</li></ul><h2 id="xss-cross-site-scripting-攻击"><a class="header-anchor" href="#xss-cross-site-scripting-攻击" aria-hidden="true">#</a> xss(Cross Site Scripting)攻击</h2><p>可以完成这些事：</p><ul><li>窃取 Cookie</li><li>监听用户行为，比如输入账号密码后之间发给黑客服务器</li><li>在网页中生成浮窗广告</li><li>修改 DOM 伪造登入表单</li></ul><p>实现方式有三种：</p><ul><li>存储型 XSS 攻击：注入未知的 js 脚本到数据库，下次访问的时候没做好处理，就会直接执行这段代码</li><li>反射型 XSS 攻击：在请求上添加带 script 标签的恶意脚本，处理不当，就会直接执行恶意代码</li><li>基于 DOM 的 XSS 攻击：不涉及 web 服务器，主要是通过各种手段将恶意脚本注入到用户的页面中，在进行数据传输的时候劫持数据包，常用手段： <ul><li>WIFI 路由器劫持</li><li>本地恶意软件</li></ul></li></ul><p>处理方案：</p><ul><li><p>对用户输入的信息过滤或者是转码，比如<code>&lt;script&gt;</code>转码为&lt;script&gt;</p></li><li><p>利用 CSP(Content-Security-Policy)，是浏览器的内容安全策略，由服务端来决定加载哪些资源，好处是：</p><ul><li>限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的；</li><li>禁止向第三方域提交数据，这样用户数据也不会外泄；</li><li>提供上报机制，能帮助我们及时发现 XSS 攻击。</li><li>禁止执行内联脚本和未授权的脚本；</li></ul></li><li><p>HTTPOnly，禁止 js 通过 document.cookie 来访问 cookie</p></li></ul><h2 id="跨站请求伪造-csrf-cross-site-request-forgery"><a class="header-anchor" href="#跨站请求伪造-csrf-cross-site-request-forgery" aria-hidden="true">#</a> 跨站请求伪造 csrf(Cross Site Request Forgery)</h2><p>CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。 常用手段：</p><ul><li>img 标签发送 get 请求</li><li>隐藏表单发送 post 请求</li><li>引诱点击 a 标签发送 get 请求</li></ul><p>与 xss 比较：</p><ul><li>不需要注入到 html 中，而是跳转一个新的页面</li><li>利用服务器验证漏洞和用户之前的登录状态来模拟操作</li></ul><p>应对策略：</p><ul><li>对于某些关键接口使用验证码机制，来确定该请求是用户主动发送的</li><li>验证来源网站，通过请求头的 Origin 和 Referer 来验证，安全性较差，一定情况也可以伪造</li><li>利用 cookie 的 SameSite 属性，来限制第三方网站的 cookie，有三个值 <ul><li>Strict：都不允许发送 cookie</li><li>Lax：只允许 a、link 和 get 类型的表单</li><li>None：不限制</li></ul></li><li>使用 CSRF Token 来鉴权，csrf 不能获取 cookie，只能通过用户的 cookie 信息来伪造身份，所以换成 token 的方式，就可以避免这个问题，前提是没有被 xss</li></ul>',55)];s.render=function(e,r,s,t,o,c){return l(),i("div",null,a)};export{r as __pageData,s as default};
