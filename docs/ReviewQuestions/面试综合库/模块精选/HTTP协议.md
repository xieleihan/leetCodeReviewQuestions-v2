# HTTP协议

## (https://interview.html5.wiki/section/14-HTTP协议.html#_1-http-报文的组成部分)1 HTTP 报文的组成部分

------

**请求报文**

- 请求行 ( http 方法 + 页面地址 + http 协议 + 版本)
- 请求头( key + value 值)
- 空行(服务端通过空行来判断下一部分不再是请求头，而当做请求体来解析)
- 请求体(数据部分)

**响应报文**

- 状态行 + 响应头 + 空行 + 响应体

## (https://interview.html5.wiki/section/14-HTTP协议.html#_2-常见状态码)2 常见状态码

------

- `1xx`: 接受，继续处理
- `200`: 成功，并返回数据
- `201`: 已创建
- `202`: 已接受
- `203`: 成为，但未授权
- `204`: 成功，无内容
- `205`: 成功，重置内容
- `206`: 成功，部分内容
- `301`: 永久移动，重定向
- `302`: 临时移动，可使用原有URI
- `304`: 资源未修改，可使用缓存
- `305`: 需代理访问
- `400`: 请求语法错误
- `401`: 要求身份认证
- `403`: 拒绝请求
- `404`: 资源不存在
- `500`: 服务器错误

## (https://interview.html5.wiki/section/14-HTTP协议.html#_3-从输入url到呈现页面过程)3 从输入URL到呈现页面过程

------

### (https://interview.html5.wiki/section/14-HTTP协议.html#_3-1-简洁)3.1 简洁

- 浏览器的地址栏输入URL并按下回车；
- DNS 解析：将域名解析成 IP 地址；
- TCP 连接：TCP 三次握手；（三次握手的目的：为了防止已经失效的连接请求报文段突然又传送到了服务器端，从而产生错误）
- 发送 HTTP 请求；
- 服务器处理请求并返回 HTTP 报文；
- 浏览器解析渲染页面；
- 断开连接：TCP 四次挥手

### (https://interview.html5.wiki/section/14-HTTP协议.html#_3-2-详细)3.2 详细

**HTTP请求示意图**

![img](https://interview.html5.wiki/image/20210629/125604.png)

> 浏览器中的HTTP请求从发起到结束一共经历了如下八个阶段：构建请求、查找缓存、准备IP和端口、等待TCP队列、建立TCP连接、发起HTTP请求、服务器处理请求、服务器返回请求和断开连接

- 用户输入url并回车

- 浏览器进程检查url，组装协议，构成完整的url

- 浏览器进程通过进程间通信（IPC）把url请求发送给网络进程

- 网络进程接收到url请求后检查本地缓存是否缓存了该请求资源，如果有则将该资源返回给浏览器进程

- 如果没有，网络进程向web服务器发起http请求（网络请求），请求流程如下

	：

	- 进行DNS解析，获取服务器`ip`地址，端口
	- 利用`ip`地址和服务器建立`tcp`连接
	- 构建请求头信息
	- 发送请求头信息服务器响应后，网络进程接收响应头和响应信息，并解析响应内容

- 网络进程解析响应流程

	:

	- 检查状态码，如果是301/302，则需要重定向，从Location自动中读取地址，重新进行第4步，如果是200，则继续处理请求
	- 200响应处理：检查响应类型Content-Type，如果是字节流类型，则将该请求提交给下载管理器，该导航流程结束，不再进行后续的渲染，如果是html则通知浏览器进程准备渲染进程准备进行染

- 准备渲染进程

	- 浏览器进程检查当前url是否和之前打开的渲染进程根域名是否相同，如果相同，则复用原来的进程，如果不同，则开启新的渲染进程

- 传输数据、更新状态

	- 渲染进程准备好后，浏览器向渲染进程发起“提交文档”的消息，渲染进程接收到消息和网络进程建立传输数据的“管道”
	- 渲染进程接收完数据后，向浏览器发送“确认提交”
	- 浏览器进程接收到确认消息后更新浏览器界面状态：安全、地址栏url、前进后退的历史状态、更新web页面

## (https://interview.html5.wiki/section/14-HTTP协议.html#_4-tcp、udp相关)4 TCP、UDP相关

------

### (https://interview.html5.wiki/section/14-HTTP协议.html#_4-1-udp-和-tcp有什么区别)4.1 UDP 和 TCP有什么区别

> UDP协议是面向无连接的，不需要在正式传递数据之前先连接起双方，具有不可靠性：不保证有序且不丢失的将数据传递到对端，并且没有任何控制流量的算法。优点是：相比TCP更轻便高效

TCP建立连接和断开连接都需要进行握手，并在数据传输过程中，通过算法来保证数据的可靠性

### (https://interview.html5.wiki/section/14-HTTP协议.html#_4-2-tcp为什么要三次握手)4.2 TCP为什么要三次握手

> 客户端和服务端都需要直到各自可收发，因此需要三次握手

![img](https://interview.html5.wiki/image/20210629/125615.png)

> TCP有6种标示:SYN(建立联机) ACK(确认) PSH(传送) FIN(结束) RST(重置) URG(紧急)

**举例：已失效的连接请求报文段**

- `client`发送了第一个连接的请求报文，但是由于网络不好，这个请求没有立即到达服务端，而是在某个网络节点中滞留了，直到某个时间才到达`server`
- 本来这已经是一个失效的报文，但是`server`端接收到这个请求报文后，还是会想`client`发出确认的报文，表示同意连接。
- 假如不采用三次握手，那么只要`server`发出确认，新的建立就连接了，但其实这个请求是失效的请求，`client`是不会理睬`server`的确认信息，也不会向服务端发送确认的请求
- 但是`server`认为新的连接已经建立起来了，并一直等待`client`发来数据，这样，server的很多资源就没白白浪费掉了
- 采用三次握手就是为了防止这种情况的发生，server会因为收不到确认的报文，就知道`client`并没有建立连接。这就是三次握手的作用

### (https://interview.html5.wiki/section/14-HTTP协议.html#_4-3-三次握手过程中可以携带数据吗)4.3 三次握手过程中可以携带数据吗

- 第一次、第二次握手不可以携带数据，因为一握二握时还没有建立连接，会让服务器容易受到攻击
- 而第三次握手，此时客户端已经处于 `ESTABLISHED (已建立连接状态)` ，对于客户端来说，已经建立起连接了，并且也已经知道服务器的接收、发送能力是正常的了，所以能携带数据也是没问题的。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_4-4-tcp的四次挥手)4.4 TCP的四次挥手

> 为了确保数据能够完成传输

- 关闭连接时，当收到对方的FIN报文通知时，它仅仅表示对方没有数据发送给你了；但未必你所有的数据都全部发送给对方了
- 所以你未必会马上关闭`SOCKET`,也即你可能还需要发送一些数据给对方之后，再发送FIN报文给对方来表示你同意现在可以关闭连接了，所以它这里的`ACK`报文和FIN报文多数情况下都是分开发送的。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_4-5-tcp-和-udp-的区别)4.5 TCP 和 UDP 的区别

- TCP 是面向连接的，udp 是无连接的即发送数据前不需要先建立链接
- TCP 提供可靠的服务。也就是说，通过 TCP 连接传送的数据，无差错，不丢失， 不重复，且按序到达;UDP 尽最大努力交付，即不保证可靠交付。 并且因为 tcp 可靠， 面向连接，不会丢失数据因此适合大数据量的交换
- TCP 是面向字节流，UDP 面向报文，并且网络出现拥塞不会使得发送速率降低(因 此会出现丢包，对实时的应用比如 IP 电话和视频会议等)
- TCP 只能是 1 对 1 的，UDP 支持 1 对 1,1 对多
- TCP 的首部较大为 20 字节，而 UDP 只有 8 字节
- TCP 是面向连接的可靠性传输，而 UDP 是不可靠的

### (https://interview.html5.wiki/section/14-HTTP协议.html#_4-6-http和tcp的不同)4.6 HTTP和TCP的不同

- HTTP的责任是去定义数据，在两台计算机相互传递信息时，HTTP规定了每段数据以什么形式表达才是能够被另外一台计算机理解。
- 而TCP所要规定的是数据应该怎么传输才能稳定且高效的传递与计算机之间。

## (https://interview.html5.wiki/section/14-HTTP协议.html#_5-http2相关)5 HTTP2相关

------

### (https://interview.html5.wiki/section/14-HTTP协议.html#_5-1-说一下-http2-0)5.1 说一下 http2.0

> 首先补充一下，http 和 https 的区别，相比于 http,https 是基于 ssl 加密的 http 协议

简要概括:http2.0 是基于 1999 年发布的 http1.0 之后的首次更新

- **提升访问速度**(可以对于，请求资源所需时间更少，访问速度更快，相比 http1.0)
- **允许多路复用**:多路复用允许同时通过单一的 HTTP/2 连接发送多重请求-响应信息。改 善了:在 http1.1 中，浏览器客户端在同一时间，针对同一域名下的请求有一定数量限 制(连接数量)，超过限制会被阻塞
- **二进制分帧**:HTTP2.0 会将所有的传输信息分割为更小的信息或者帧，并对他们进行二 进制编码
- **首部压缩**
- **服务器端推送**

### (https://interview.html5.wiki/section/14-HTTP协议.html#_5-2-http2和http1有什么区别)5.2 HTTP2和HTTP1有什么区别

**相对于HTTP1.0，HTTP1.1的优化**

- 缓存处理：多了`Entity tag`，`If-Unmodified-Since`, `If-Match`, `If-None-Match`等缓存信息（`HTTTP1.0 If-Modified-Since`,`Expires`）
- 带宽优化及网络连接的使用
- 错误通知的管理
- `Host`头处理
- 长连接： `HTTP1.1`中默认开启`Connection`： `keep-alive`，一定程度上弥补了`HTTP1.0`每次请求都要创建连接的缺点

**相对于HTTP1.1，HTTP2的优化**

- `HTTP2`支持二进制传送（实现方便且健壮），`HTTP1.x`是字符串传送
- `HTTP2`支持多路复用
- `HTTP2`采用`HPACK`压缩算法压缩头部，减小了传输的体积
- `HTTP2`支持服务端推送

### (https://interview.html5.wiki/section/14-HTTP协议.html#_5-3-http-2为什么要做头部压缩-实现原理是什么)5.3 http/2为什么要做头部压缩，实现原理是什么？

> http请求都是由状态行、请求/响应头部、消息主体三部分组成，一般而言，消息主体都会经过gzip压缩，或者本身传输的就是压缩后的二进制文件（例如图片、音频），但是状态行和头部却没有经过任何压缩，直接以文本传输。对于一个请求而言，其headers所占的字节数也不少，尤其cookie，有些时候headers甚至超过了主体的大小。

头部压缩使用了HPACK算法。会在支持http/2的浏览器和服务端之间：

- 维护一份相同的静态字典，包含常见的头部名称以及特别常见的头部名称和值的组合。这样对完全匹配的头部键值对，例如：method：GET，就可以使用一个字符表示。对于头部名称可以匹配的，例如cookie： xxx，可以将名称使用一个字符表示
- 维护一份相同的动态字典，可以动态的添加内容
- 支持基于静态哈夫曼码表的哈夫曼编码（Huffman Coding）

### (https://interview.html5.wiki/section/14-HTTP协议.html#_5-4-http-2的server-push有什么优点)5.4 http/2的Server Push有什么优点

- 支持服务端推送，意味着服务端可以在发送页面`HTML`时主动推送其它资源，而不用等到浏览器解析到相应位置再发起请求
- 另外，服务端可以主动推送，客户端也有权选择是否接收。如果服务端推送的资源已经被浏览器缓存过，浏览器可以通过发送`RST_STREAM`帧来拒收

### (https://interview.html5.wiki/section/14-HTTP协议.html#_5-5-谈谈你对多路复用的理解)5.5 谈谈你对多路复用的理解

> - `HTTP2`采用二进制格式传输，取代了`HTTP1.x`的文本格式，二进制格式解析更高效。
> - 多路复用代替了`HTTP1.x`的序列和阻塞机制，所有的相同域名请求都通过同一个`TCP`连接并发完成。在`HTTP1.x`中，并发多个请求需要多个`TCP`连接，浏览器为了控制资源会有`6-8`个`TCP`连接都限制。

**HTTP2中**

- 同域名下所有通信都在单个连接上完成，消除了因多个 `TCP` 连接而带来的延时和内存消耗。
- 单个连接上可以并行交错的请求和响应，之间互不干扰

> - `http/1` 的请求和响应报文，都是由起始行、首部和实体正文（可选）组成，各部分之间以文本换行符分隔。而`http/2`将请求和响应数据分隔成为更小的帧，并对他们采用二进制编码
> - `http/2` 中，同域名下的所有请求都在一个连接上完成，这个连接可以承载任意数量的双向数据流。每个数据流都以消息的形式发送，消息由一个或多个帧组成。多个帧之间可以乱序发送，然后根据帧首部的流标识可以重新组装

## (https://interview.html5.wiki/section/14-HTTP协议.html#_6-https相关)6 https相关

------

想要真正的了解https，需要了解很多相关知识，比如SSL，对称加密，非对称加密，CA证书等知识。

> https协议本身并不是一种新的协议，在HTTP跟TCP中间加多了一层加密层TLS/SSL。通常HTTP直接和TCP通信，而HTTPS要先将数据给到TLS/SSL，数据经加密后，再给到 TCP 进行传输。

> HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种是确认网站的真实性

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-1-https加的一层ssl在七层中哪个位置)6.1 HTTPS加的一层SSL在七层中哪个位置

> 从 HTTP 协议栈层面来看，我们可以在 TCP 和 HTTP 之间插入一个安全层，所有经过安全层的数据都会被加密或者解密，你可以参考下图

![img](https://interview.html5.wiki/image/20210629/125626.png)

- 从图中我们可以看出 HTTPS 并非是一个新的协议，通常 HTTP 直接和 TCP 通信，HTTPS 则先和安全层通信，然后安全层再和 TCP 层通信。也就是说 HTTPS 所有的安全核心都在安全层，它不会影响到上面的 HTTP 协议，也不会影响到下面的 TCP/IP，因此要搞清楚 HTTPS 是如何工作的，就要弄清楚安全层是怎么工作的。
- 总的来说，安全层有两个主要的职责：对发起 HTTP 请求的数据进行加密操作和对接收到 HTTP 的内容进行解密操作
- 我们知道了安全层最重要的就是加解密，那么接下来我们就利用这个安全层，一步一步实现一个从简单到复杂的 HTTPS 协议

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-2-https-协议的优点)6.2 https 协议的优点

- 使用 HTTPS 协议可认证用户和服务器，确保数据发送到正确的客户机和服务器
- HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，要比 http 协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性
- HTTPS 是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻 击的成本

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-3-https-协议的缺点)6.3 https 协议的缺点

- `https`握手阶段比较费时，会使页面加载时间延长 `50%`，增加 `10%~20%` 的耗电
- `https` 缓存不如 `http` 高效，会增加数据开销
- `SSL` 证书也需要钱，功能越强大的证书费用越高
- `SSL` 证书需要绑定 `IP`，不能再同一个 ip 上绑定多个域名，`ipv4` 资源支持不了这种消耗

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-4-http与https区别)6.4 http与https区别

> 在回答这个问题之前，我们先看下http请求存在哪些不足：

- 通信使用明文（不加密），内容可能会被窃听
- 不会验证通信方的身份，因此可能会遭遇伪装
- 无法保证报文的完整性，请求或响应的内容被篡改也无法知道

> https就是对上面三点不足的解决，可以认为

**https == http + 加密 + 身份验证 + 数据完整性保护**

**他们的区别就明显了**

- http使用明文传输，https则是具有安全性的ssl加密传输协议
- http不会验证通信放的身份，https会通过数字证书来验证身份
- https可以保证数据的完整性，防止传输内容被中间人冒充或篡改
- HTTP 页面响应速度比 HTTPS 快，主要是因为 HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而 HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所共12 个包。
- 除以上外，http和https使用的端口也不同，前者使用80端口，后者使用443端口

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-5-https传输的具体过程)6.5 https传输的具体过程

> HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种是确认网站的真实性

> TLS 的完整过程需要三个算法（协议），密钥交互算法，对称加密算法，和消息认证算法

**TLS 中的加密**

- 对称加密 —— 两边拥有相同的秘钥，两边都知道如何将密文加密解密。
- 非对称加密 —— 有公钥私钥之分，公钥所有人都可以知道，可以将数据用公钥加密，但是将数据解密必须使用私钥解密，私钥只有分发公钥的一方才知道

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-6-https的整体过程分为证书验证和数据传输阶段)6.6 HTTPS的整体过程分为证书验证和数据传输阶段

**1. 证书验证阶段：**

- 浏览器发起 HTTPS 请求。（ TLS 握手请求）
- 服务端返回 证书(包含服务器公钥S_PuKey)、对称加密算法种类及其他相关信息。
- 客户端验证证书是否合法，如果不合法则提示告警。

**2. 数据传输阶段：**

- 当证书验证合法后，在本地生成随机数。
- 通过公钥加密随机数，并把加密后的随机数传输到服务端。
- 服务端通过私钥对随机数进行解密。 服务端通过客户端传入的随机数构造对称加密算法，之后的数据交互通过对称加密算法进行加解密。（对称加密(也叫私钥加密)指加密和解密使用相同密钥的加密算法）
- 服务器利用自己唯一的私钥对客户端发来的对称秘钥进行解密，在此过程中，中间方无法对其解密（即使是客户端也无法解密，因为只有服务器端拥有唯一的私钥），保证了对称秘钥在收发过程中的安全，此时，服务器端和客户端拥有了一套完全相同的对称秘钥。

> 服务器利用自己唯一的私钥对客户端发来的对称秘钥进行解密，在此过程中，中间方无法对其解密（即使是客户端也无法解密，因为只有服务器端拥有唯一的私钥），保证了对称秘钥在收发过程中的安全，此时，服务器端和客户端拥有了一套完全相同的对称秘钥。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-7-介绍一下https的握手过程)6.7 介绍一下https的握手过程

- 第一步，客户端给出协议版本号、一个客户端生成的随机数（Client random），以及客户端支持的加密方法
- 第二步，服务端确认双方使用的加密方法，并给出数字证书、以及一个服务器生成的随机数
- 第三步，客户端确认数字证书有效，然后生成一个新的随机数（Premaster secret），并使用数字证书中的公钥，加密这个随机数，发给服务端
- 第四步，服务端使用自己的私钥，获取客户端发来的随机数（即Premaster secret）。
- 第五步，客户端和服务端根据约定的加密方法，使用前面的三个随机数，生成"对话密钥"（session key），用来加密接下来的整个对话过程

**总结**

- 客户端发起 HTTPS 请求，服务端返回证书，客户端对证书进行验证，验证通过后本地生成用于构造对称加密算法的随机数
- 通过证书中的公钥对随机数进行加密传输到服务端（随机对称密钥），服务端接收后通过私钥解密得到随机对称密钥，之后的数据交互通过对称加密算法进行加解密。（既有对称加密，也有非对称加密）

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-8-为什么https数据传输使用对称加密)6.8 为什么https数据传输使用对称加密

- 对称加密： 对称加密指的就是加密和解密使用同一个秘钥，所以叫做对称加密。对称加密只有一个秘钥。
- 非对称加密: 加密和解密使用不同的秘钥，一把作为公开的公钥，另一把作为私钥。公钥加密的信息，只有私钥才能解密。

> 通过上面的握手过程可知，https在证书验证阶段，使用非对称加密来传输共享秘钥，之后的传输中都使用对称加密方式。原因是，非对称加密的加解密效率是非常低的，而http场景中通常端与端之间的交互量很大，对非对称加密的效率是无法忍受的。另外， HTTPS场景中只有服务端保存了私钥，一对公私钥只能实现单向加解密过程。因此 HTTPS 中的内容传输采用对称加密

**对称密钥加密和非对称密钥加密它们有什么区别**

- 对称密钥加密是最简单的一种加密方式，它的加解密用的都是相同的密钥，这样带来的好处就是加解密效率很快，但是并不安全，如果有人拿到了这把密钥那谁都可以进行解密了。
- 而非对称密钥会有两把密钥，一把是私钥，只有自己才有；一把是公钥，可以发布给任何人。并且加密的内容只有相匹配的密钥才能解。这样带来的一个好处就是能保证传输的内容是安全的，因为例如如果是公钥加密的数据，就算是第三方截取了这个数据但是没有对应的私钥也破解不了。不过它也有缺点，一是公钥因为是公开的，谁都可以过去，如果内容是通过私钥加密的话，那拥有对应公钥的黑客就可以用这个公钥来进行解密得到里面的信息；二来公钥里并没有包含服务器的信息，也就是并不能确保服务器身份的合法性；并且非对称加密的时候要消耗一定的时间，减低了数据的传输效率。

**混合加密机制的好处是什么**

- 对称密钥加密和非对称密钥加密都有它们各种的优缺点，而混合加密机制就是将两者结合利用它们各自的优点来进行加密传输。
- 比如既然对称密钥的优点是加解密效率快，那么在客户端与服务端确定了连接之后就可以用它来进行加密传输。不过前提是得解决双方都能安全的拿到这把对称密钥。这时候就可以里用非对称密钥加密来传输这把对称密钥，因为我们知道非对称密钥加密的优点就是能保证传输的内容是安全的。
- 所以它的好处是即保证了对称密钥能在双方之间安全的传输，又能使用对称加密方式进行通信，这比单纯的使用非对称加密通信快了很多。以此来解决了HTTP中内容可能被窃听的问题。

**混合加密的缺点**

> 混合加密主要是为了解决`HTTP`中内容可能被窃听的问题。但是它并不能保证数据的完整性，也就是说在传输的时候数据是有可能被第三方篡改的，比如完全替换掉，所以说它并不能校验数据的完整性。如果需要做到这一点就需要使用到数字签名。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-9-介绍下https中间人攻击的过程)6.9 介绍下https中间人攻击的过程

这个问题也可以问成 为什么需要CA认证机构颁发证书？ 我们假设如果不存在认证机构，则人人都可以制造证书，这就带来了"中间人攻击"问题。

**中间人攻击的过程如下**

- 客户端请求被劫持，将所有的请求发送到中间人的服务器
- 中间人服务器返回自己的证书
- 客户端创建随机数，使用中间人证书中的公钥进行加密发送给中间人服务器，中间人使用私钥对随机数解密并构造对称加密，对之后传输的内容进行加密传输
- 中间人通过客户端的随机数对客户端的数据进行解密
- 中间人与服务端建立合法的https连接（https握手过程），与服务端之间使用对称加密进行数据传输，拿到服务端的响应数据，并通过与服务端建立的对称加密的秘钥进行解密
- 中间人再通过与客户端建立的对称加密对响应数据进行加密后传输给客户端
- 客户端通过与中间人建立的对称加密的秘钥对数据进行解密

> 简单来说，中间人攻击中，中间人首先伪装成服务端和客户端通信，然后又伪装成客户端和服务端进行通信（如图）。 整个过程中，由于缺少了证书的验证过程，虽然使用了https，但是传输的数据已经被监听，客户端却无法得知

![img](https://interview.html5.wiki/image/20210629/125632.png)

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-10-https-握手过程中-客户端如何验证证书的合法性)6.10 HTTPS 握手过程中，客户端如何验证证书的合法性

> CA证书中会包含颁发机构信息、公钥、公司信息、域名、有效期等信息，浏览器验证证书：

- 首先就是要验证域名、有效期等信息是否正确
- 然后判断证书来源的合法性。每份签发证书都可以根据验证链查找到对应的根证书，操作系统、浏览器会在本地存储权威机构的根证书，利用本地根证书可以对对应机构签发证书完成来源验证
- 判断证书是否被篡改。需要与 CA 服务器进行校验
- 判断证书是否已吊销

> 以上任意一步都满足的情况下浏览器才认为证书是合法的

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-11-问题)6.11 问题

**1. 为什么数据传输是用对称加密**

> HTTP的应用场景中通常端与端之间存在大量的交互，非对称加密的加解密效率非常低。另外，在 HTTPS的场景中只有服务端保存了私钥，一对公私钥只能实现单向的加解密，所以 HTTPS 中内容传输加密采取的是对称加密

**2. 为什么需要证书?**

> 防止“中间人”攻击，同时可以为网站提供身份证明。

**3. 使用 HTTPS 会被抓包吗?**

> 会被抓包，HTTPS 只防止用户在不知情的情况下通信被监听，如果用户主动授信，是可以构建“中间人”网络，代理软件可以对传输内容进行解密。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-12-数字签名-它是什么)6.12 数字签名？它是什么

> 数字签名的产生主要就是为了解决HTTP中内容可能被篡改的问题，即校验数据的完整性。它能确定消息是发送方发送过来的，因为这里会有一个验证数字签名的过程，别人是假冒不了发送方的签名的。

数字签名它是什么呢？它的产生过程其实就是两步，第一步将原文用Hash函数生成一个叫消息摘要的东西，第二步就是用发送方的私钥对这个消息摘要进行进行加密。这个产生的东西就叫做数字签名，它一般会与原文一起发送给接收者。

**而验证它的过程其实也并不复杂。**

- 首先发送方会将原文与数字签名(也就是加密后的摘要)一起发送给接收方
- 接收方会接收到这两样东西，即原文和数字签名
- 接收方用Hash函数处理原文会得到一份消息摘要
- 同时用发送方的公钥解密数字签名也会得到一份消息摘要
- 只要比较这两份消息摘要是否相等就可以验证出数据有没有被篡改了

当然这里关键的一步就是要保证发送方传递过来的公钥是可信赖的，这时候就得用到数字证书了。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-13-谈谈对数字证书的理解)6.13 谈谈对数字证书的理解

数字证书也叫公钥证书，或者简称证书。它主要是为了解决通信方身份遭伪装的问题，也就是验证通信方的身份。

因为我们知道在HTTPS中虽然有了混合加密机制保证数据不被监听，有了数字签名校验数据的完整性，但是数字签名校验的前提是能拿到发送方的公钥，并且保证这个公钥是可信赖的，所以就需要数字证书。

它简单来说其实是由一些权威的数字认证机构颁发给服务器的一个文件。数字认证机构简称CA，它是客户端和服务端都信任的第三方机构，我知道比较有名的一个就是威瑞信(VeriSign)。至于颁发证书的流程，主要是为：

- 服务器的运营人员会向认证机构提交自己的公钥、组织信息、个人信息等并申请认证
- 而认证机构在拿到这些信息后会通过线上、线下各种途径验证申请者提交信息的真实性
- 在确认其真实性后，认证机构给这些信息(申请者的公钥，组织信息，个人信息以及认证机构自己的信息等)，我们简称为明文信息，进行数字签名，过程也就是签名提到的数字签名的步骤：1.通过Hash函数处理明文信息生成一个信息摘要；2.再用认证机构自己的私钥对信息摘要进行加密处理。通过这两个步骤生成的文件就叫数字签名。
- 之后会将明文信息和数字签名组合而成的证书颁发给申请者，也就是服务器。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-14-为什么说数字证书就能对通信方的身份进行验证呢)6.14 为什么说数字证书就能对通信方的身份进行验证呢

> 那是因为在客户端第一次给服务端发送HTTPS请求的时候，服务端会将它自己的证书随着其它的信息(例如`server_random、 server_params`、需要使用的加密套件等东西)一起返给客户端。

客户端在收到之后首先会验证这个证书，只有验证通过之后才会有后续操作。而验证的过程其实也就是数字签名的验证过程(题5)：

- 前面说过了，证书其实是由明文信息(申请者的公钥，组织信息，个人信息以及认证机构自己的信息等)和这个明文信息的数字签名组成的。(对应着题5也就是原文和数字签名)
- 客户端会用Hash函数处理明文信息生成一个信息摘要
- 然后再用内置在浏览器上的**CA的公钥**来解密证书里的数字签名，得到一个信息摘要。因为我们知道证书实际是由CA颁发给服务器的，并且里面的数字签名也是用的CA的私钥加密的，所以只有CA的公钥才能解。
- 最后再将两个信息摘要进行对比，若是一样则能保证通信方的身份是正确的。

其实验证证书的过程不仅仅是数字签名的验证，客户端还会验证证书相关的域名信息，有效时间，是不是在CRL吊销列表里，以及它的上一级是否有效等等。

（一般答到这里就可以了，如果面试官继续问你上一级是否有效这样验证，你就回答：这是一个递归的过程，直到验证到根证书也就是操作系统内置的Root证书或者浏览器内置的Root证书为止）

> 就像前面说的，只有能用**CA的公钥**解密的数字签名并且通过了认证的证书才是有效的，因为证书是CA颁布的。这也就保证了客户端收到的服务器发来的公钥是真实可用的(因为公钥在证书的明文信息里)。

（想想其实很好理解，因为浏览器它自己没有辨别证书是否合法的能力，它就把这事交给CA去做，CA是信任的过的机构，它只要把自己的公钥内嵌到浏览器里，浏览器再用这个CA公钥来解证书里的签名就可以了。而证书的签名也是经过CA的私钥加密生成的，只有CA的公钥能解，但它的公钥又不是随便人能拿到的，只有各大浏览器厂商才有，所以这就是数字证书的验证过程）

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-15-请详细的说一下https它的加密传输过程-涉及到哪些算法呢)6.15 请详细的说一下HTTPS它的加密传输过程，涉及到哪些算法呢？

难度：🌟🌟🌟🌟

> 在HTTPS加密传输中，实际上涉及到 SSL/TLS 协议，这里是有一个TSL握手的过程。对于传统的TLS握手也就是RSA握手我就不描述了，主要是说一下现在主流的TLS1.2版本的握手，也就是ECDHE握手。

它的过程大致来说是这样的：

1. 客户端在第一次发送HTTPS请求的时候，会把 `client_random`、TSL版本号、加密套件列表发送给服务器
2. 服务器在接收到之后确认TSL的版本号，同时发送 `server_random、server_params`、需要使用的加密套件、以及自己的证书给客户端
3. 客户端在收到这些信息之后，首先是会对服务器的证书进行验证(也就是题目7)，若是验证成功则会传递一个 `client_params` 给服务器
4. 与此同时客户端会通过**ECDHE算法**计算出一个`pre_random`，其中是传入了两个参数，一个是 `client_params`，还一个是 server_params。(也就是说：`ECDHE(client_params, server_params) = per_random`)
5. 这时候客户端就同时拥有了 `client_random、server_random、pre_random`，它会将这三个参数通过一个**伪随机函数**计算得出最终的`secret`，这个`secret`就是它们后续通信所要用的对称密钥。
6. 而在客户端生成完`secret`之后，会给服务器发送一个收尾消息，告诉服务器之后都要用对称加密，且对称加密的算法是用第一次约定好的。
7. 服务器它在接收到刚刚传递过来的`client_params`之后，也会使用和客户端一样的方式生成`secret`，并且也会发送一个收尾消息给客户端。
8. 当双方都收到收尾消息并验证成功之后，握手就结束了。后面开始用这个secret对称密钥加密报文进行传输。

（ECDHE基于**椭圆曲线离散对数**，传入的两个参数也被叫做**椭圆曲线的公钥**）

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-16-描述一下rsa握手)6.16 描述一下RSA握手

难度：🌟🌟🌟

1. 客户端首先向服务端发送一个HTTPS请求
2. 服务端会把事先配置好的公钥证书随着其它的信息返回给客户端
3. 客户端在收到服务端发来的证书之后进行验证，验证的过程参考数字证书验证，会得到服务端的信息以及它的公钥
4. 验证成功之后会用**伪随机函数**计算出一个加密所需要的对称密钥(secret)，并且用服务端的公钥加密这个对称密钥发送给服务端
5. 服务端再用自己的私钥解密刚刚的消息，得到里面的对称密钥。此时服务端和客户端都有了对称密钥。
6. 后面的传输都会用这个 secret 进行对称密钥加解密传输

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-17-ecdhe握手和rsa握手又有什么区别呢)6.17 ECDHE握手和RSA握手又有什么区别呢

难度：🌟🌟🌟

它们的区别主要是：

1. 生成secret(对称密钥)的过程不同。RSA中是使用RSA算法生成一个pre_random并用服务器的公钥加pre_random发送给服务器，然后各自用伪随机函数生成相同的secret对称密钥；而在ECDHE握手中，它没有用到RSA算法，而是用ECDHE算法生成的pre_random，且这个过程中比RSA多了client_params和server_params两个参数。
2. 在生成完secret之后，ECDHE握手在客户端发送完收尾消息后可以提前`抢跑`，直接发送 HTTP 报文，节省了一个 RTT，不必等到收尾消息到达服务器，然后等服务器返回收尾消息给自己，直接开始发请求。这也叫`TLS False Start`。
3. 最主要的：RSA不具备向前安全性，ECDHE有

（向前安全性：一次破解并不影响历史信息的性质就是向前安全性）

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-18-你知道tsl1-3版本吗-它较tsl1-2做了哪些改进呢)6.18 你知道TSL1.3版本吗？它较TSL1.2做了哪些改进呢？

> `TSL1.3`版本是2018年推出的。它较TSL1.2主要是做了以下改进：

1. 强化安全

> 废除了很多的加密算法，只保留了5个加密套件。其中最主要的是废弃了RSA，因为在2015年发现了PRAEK攻击，即已经有人发现了RSA的漏洞能进行破解；而且RSA不具备向前安全性。

1. 提高性能

同时利用会话复用节省了重新生成密钥的时间，利用 PSK 做到了`0-RTT`连接。

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-19-介绍下-https-中间人攻击)6.19 介绍下 HTTPS 中间人攻击

**中间人攻击过程如下：**

- 服务器向客户端发送公钥。
- 攻击者截获公钥，保留在自己手上。
- 然后攻击者自己生成一个【伪造的】公钥，发给客户端。
- 客户端收到伪造的公钥后，生成加密hash值发给服务器。
- 攻击者获得加密hash值，用自己的私钥解密获得真秘钥。
- 同时生成假的加密hash值，发给服务器。
- 服务器用私钥解密获得假秘钥。
- 服务器用加秘钥加密传输信息

**防范方法：**

> 服务端在发送浏览器的公钥中加入`CA证书`，浏览器可以验证`CA证书`的有效性

### (https://interview.html5.wiki/section/14-HTTP协议.html#_6-20-http-https-协议总结)6.20 http/https 协议总结

**1.0 协议缺陷:**

- 无法复用链接，完成即断开，重新慢启动和 `TCP 3`次握手
- `head of line blocking`: 线头阻塞，导致请求之间互相影响

**1.1 改进:**

- 长连接(默认 `keep-alive`)，复用

- `host` 字段指定对应的虚拟站点

- 新增功能:

	- 断点续传

	- 身份认证

	- 状态管理

	- ```
		cache
		```

		 

		缓存

		- `Cache-Control`
		- `Expires`
		- `Last-Modified`
		- `Etag`

**2.0:**

- 多路复用
- 二进制分帧层: 应用层和传输层之间
- 首部压缩
- 服务端推送

**https: 较为安全的网络传输协议**

- 证书(公钥)
- `SSL` 加密
- 端口 `443`

**TCP:**

- 三次握手
- 四次挥手
- 滑动窗口: 流量控制
- 拥塞处理
	- 慢开始
	- 拥塞避免
	- 快速重传
	- 快速恢复

**缓存策略: 可分为 强缓存 和 协商缓存**

- `Cache-Control/Expires`: 浏览器判断缓存是否过期，未过期时，直接使用强缓存，`Cache-Control`的 `max-age` 优先级高于 `Expires`

- 当缓存已经过期时，使用协商缓存

	- 唯一标识方案: `Etag`(`response` 携带) & `If-None-Match`(`request`携带，上一次返回的 `Etag`): 服务器判断资源是否被修改

	- 最后一次修改时间:

		 

		```
		Last-Modified(response) & If-Modified-Since
		```

		(

		```
		request
		```

		，上一次返回的

		```
		Last-Modified
		```

		)

		- 如果一致，则直接返回 304 通知浏览器使用缓存
		- 如不一致，则服务端返回新的资源

- ```
	Last-Modified
	```

	 

	缺点：

	- 周期性修改，但内容未变时，会导致缓存失效
	- 最小粒度只到 `s`， `s` 以内的改动无法检测到

- `Etag` 的优先级高于`Last-Modified`

## (https://interview.html5.wiki/section/14-HTTP协议.html#_7-websocket的实现和应用)7 WebSocket的实现和应用

------

> ```
> Websocket` 是一个 持久化的协议， 基于 `http` ， 服务端可以 主动 `push
> ```

**兼容：**

> - `FLASH Socket`
> - 长轮询： 定时发送 `ajax`
> - `long poll`： 发送 --> 有消息时再 `response`

- `new WebSocket(url)`
- `ws.onerror = fn`
- `ws.onclose = fn`
- `ws.onopen = fn`
- `ws.onmessage = fn`
- `ws.send()`

### (https://interview.html5.wiki/section/14-HTTP协议.html#_7-1-什么是-websocket)7.1 什么是 WebSocket

> WebSocket 是 HTML5 中的协议，支持持久连续，http 协议不支持持久性连接。Http1.0 和 HTTP1.1 都不支持持久性的链接，HTTP1.1 中的 keep-alive，将多个 http 请求合并为 1个

### (https://interview.html5.wiki/section/14-HTTP协议.html#_7-2-websocket-是什么样的协议-具体有什么优点)7.2 WebSocket 是什么样的协议，具体有什么优点

- HTTP 的生命周期通过 Request 来界定，也就是 Request 一个 Response，那么在 Http1.0 协议中，这次 Http 请求就结束了。在 Http1.1 中进行了改进，是的有一个 connection: Keep-alive，也就是说，在一个 Http 连接中，可以发送多个 Request，接收多个 Response。 但是必须记住，在 Http 中一个 Request 只能对应有一个 Response，而且这个 Response 是被动的，不能主动发起。
- WebSocket 是基于 Http 协议的，或者说借用了 Http 协议来完成一部分握手，在握手阶段 与 Http 是相同的。我们来看一个 websocket 握手协议的实现，基本是 2 个属性，upgrade， connection。

基本请求如下:

```text
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw== Sec-WebSocket-Protocol: chat, superchat Sec-WebSocket-Version: 13
Origin: http://example.com 
```

多了下面 2 个属性:

```text
Upgrade:webSocket 
Connection:Upgrade 
```

告诉服务器发送的是 `websocket`

### (https://interview.html5.wiki/section/14-HTTP协议.html#_7-3-理解websocket协议的底层原理、与http的区别)7.3 理解WebSocket协议的底层原理、与HTTP的区别

> WebSocket 是一个持久化的网络通信协议，可以在单个 TCP 连接上进行 **全双工通讯** ，没有了 **Request** 和 **Response** 的概念，两者地位完全平等，连接一旦建立，客户端和服务端之间可以实时进行双向数据传输。

1. HTTP 是非持久协议，客户端想知道服务端的处理进度只能通过长轮询或者是 long poll 的方式，但是前者对服务器压力大，后者则会因为一直等待响应造成阻塞。

![img](https://interview.html5.wiki/image/20210629/125642.png)

1. 虽然 http1.1 默认开启了 keep-alive 长连接保持了这个 TCP 通道使得在一个 HTTP 连接中可以发送多个请求，接受多个响应，但是一个请求只能有一个响应，而且这个响应也是被动的，不能主动发起
2. WebSocket 虽然是独立于 HTTP 的一种协议，但是 WebSocket 必须依赖 HTTP 协议进行一次握手（在握手阶段是一样的），我手成功后，数据就直接从 TCP 通道传输，与 HTTP 无关了，可以用一张图理解两者有交集，但并不是全部。

![img](https://interview.html5.wiki/image/20210629/125648.png)

**socket**

1. socket 也被称为套接字，与 HTTP 和 WebSocket 不一样，socket 不是协议，它是在程序层面上对传输层协议（可以主要理解为 TCP / IP）的接口封装。可以理解为一个能够提供端对端的通信的调用接口（API）。
2. 对于程序员而言，其需要在 A 端创建一个 socket 实例，并为这个实例提供其所要连接的 B 端的 IP 地址和端口号，而在 B 端创建另一个 socket 实例，并且绑定本地端口号来进行监听。当 A 和 B 建立连接后，双方就建立了一个端对端的 TCP

**应用场景**

> WebSocket 可以做弹幕、消息订阅、多玩家游戏、协同编辑、股票基金实时报价、视频会议、在线教育、聊天室等应用实时监听服务端变化。

**WebCocket 握手**

- WebSocket 握手请求报文

```text
 GET /chat HTTP/1.1
  Host: server.example.com
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
  Sec-WebSocket-Protocol: chat, superchat
  Sec-WebSocket-Version: 13
  Origin: http://example.com 
```

> 下面是与传统 HTTP 报文不同的地方：

```text
 Upgrade: websocket
  Connection: Upgrade 
```

表示发起的是 WebSocket 协议

```text
 Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
  Sec-WebSocket-Protocol: chat, superchat
  Sec-WebSocket-Version: 13 
```

- `Sec-WebSocket-Key` 是由浏览器随机生成的，验证是否可以进行 WebSocket 通信，防止恶意或者无意的连接；
- `Sec-WebSocket-Protocol` 是用户自定义的字符串，用来标识服务所以需要的协议；
- `Sec-WebSocket-Version` 表示支持的 WebSocket 版本。
- 服务端响应

```text
 HTTP/1.1 101 
  Switching Protocols
  Upgrade: websocket
  Connection: Upgrade
  Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
  Sec-WebSocket-Protocol: chat 
```

- 101 响应码 表示要转换协议。
- `Connection: Upgrade` 表示升级新协议请求。
- Upgrade: websocket` 表示升级为 WebSocket 协议。
- `Sec-WebSocket-Accept` 是经过服务器确认，并加密过后的 `Sec-WebSocket-Key` ，用来证明客户端和服务端之间能够进行通信了。
- `Sec-WebSocket-Protocol` 表示最终使用的协议。

> 至此，客户端和服务器握手成功建立了 WebSocket 连接，HTTP 已经完成了他所有工作，接下来就是完全按照 WebSocket 协议进行通信。

**WebSocket 心跳**

可能会有某些未知情况导致 socket 断开，而客户端和服务端却不知道，需要客户端定时发送一个 **心跳 ping** 让服务端知道自己在线，服务端也需要回复一个 **心跳 pong** 告诉客户端自己可用，否则视为断开。

**WebSocket 状态**

> WebSocket 对象中的 readyState 属性有四种状态：

- 0：表示正在连接
- 1：表示连接成功，可以通信了
- 2：表示连接正在关闭
- 3：表示连接已经关闭，或者打开连接失败

**websocket和HTTP有什么不一样小结**

- 双向通信
- 数据格式比较轻量，性能开销小，通信高效
	- 协议控制的数据包头部较小，而`HTTP`协议每次通信都需要携带完整的头部
- 更好的二进制支持
- 没有同源限制，客户端可以与任意服务器通信
- 与 `HTTP` 协议有着良好的兼容性。默认端口也是`80`和`443`，并且握手阶段采用 `HTTP` 协议，因此握手时不容易屏蔽，能通过各种 `HTTP` 代理服务器

## (https://interview.html5.wiki/section/14-HTTP协议.html#_8-token、cookie、session区别)8 Token、cookie、Session区别

------

### (https://interview.html5.wiki/section/14-HTTP协议.html#_8-1-cookie-和-session-的区别)8.1 Cookie 和 session 的区别

> HTTP 是一个无状态协议，因此 Cookie 的最大的作用就是存储 sessionId 用来唯一标识用 户。

- `cookie` 数据存放在客户的浏览器上，session 数据放在服务器上
- `cookie` 不是很安全，别人可以分析存放在本地的 COOKIE 并进行 COOKIE 欺骗 考虑到安全应当使用 session
- `session` 会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能 考虑到减轻服务器性能方面，应当使用 `COOKIE`
- 单个 `cookie` 保存的数据不能超过 `4K`，很多浏览器都限制一个站点最多保存 20 个 `cookie`

### (https://interview.html5.wiki/section/14-HTTP协议.html#_8-2-cookie-和-token-都存放在-header-中-为什么不会劫持-token)8.2 cookie 和 token 都存放在 header 中，为什么不会劫持 token？

- 攻击者通过 xss 拿到用户的 cookie 然后就可以伪造 cookie 了
- 或者通过 csrf 在同个浏览器下面通过浏览器会自动带上 cookie 的特性在通过 用户网站-攻击者网站-攻击者请求用户网站的方式 浏览器会自动带上cookie
- 但是 token。不会被浏览器带上 问题 2 解决
- token 是放在 jwt 里面下发给客户端的 而且不一定存储在哪里 不能通过document.cookie 直接拿到，通过 jwt+ip 的方式 可以防止 被劫持 即使被劫持也是无效的 jwt

### (https://interview.html5.wiki/section/14-HTTP协议.html#_8-3-介绍下如何实现-token-加密)8.3 介绍下如何实现 token 加密

- jwt 举例：
	- 1. 需要一个 secret（随机数）
	- 1. 后端利用 secret 和加密算法(如：HMAC-SHA256)对 payload(如账号密码) 生成一个字符串(token)，返回前端
	- 1. 前端每次 request 在 header 中带上 token
	- 1. 后端用同样的算法解密

## (https://interview.html5.wiki/section/14-HTTP协议.html#_9-一个图片-url-访问后直接下载怎样实现)9 一个图片 url 访问后直接下载怎样实现

------

> 请求的返回头里面，用于浏览器解析的重要参数就是 OSS 的 API 文档里面的返回 http 头，决定用户下载行为的参数

下载的情况下:

1. `x-oss-object-type: Normal`
2. `x-oss-request-id: 598D5ED34F29D01FE2925F41`
3. `x-oss-storage-class: Standard`

## (https://interview.html5.wiki/section/14-HTTP协议.html#_10-fetch-发送-2-次请求的原因)10 fetch 发送 2 次请求的原因

------

> `fetch` 发送 `post` 请求的时候，总是发送 2 次，第一次状态码是 204，第二次才成功? 原因很简单，因为你用 fetch 的 post 请求的时候，导致 `fetch` 第一次发送了一个 `Options` 请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二次中发送真正的 请求。

## (https://interview.html5.wiki/section/14-HTTP协议.html#_11-get-和-post-的区别)11 GET 和 POST 的区别

------

- GET在浏览器回退时是无害的，而POST会再次提交请求
- GET请求会被浏览器主动缓存，而POST不会，除非手动设置
- GET请求参数会被完整保留在浏览器的历史记录里，而POST中的参数不会被保留
- GET请求在URL中传送的参数是有长度限制的，而POST没有限制
- GET参数通过URL传递，POST放在Request body中
- GET请求只能进行 url 编码，而POST支持多种编码方式
- GET产生的URL地址可以被收藏，而POST不可以
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息

**总结**

- ```
	get
	```

	: 缓存、请求长度受限、会被历史保存记录

	- 无副作用(不修改资源)，幂等(请求次数与资源无关)的场景

- `post`: 安全、大数据、更多编码类型

![img](https://interview.html5.wiki/image/20210629/125655.png)

## (https://interview.html5.wiki/section/14-HTTP协议.html#_12-301-和-302-的区别)12 301 和 302 的区别

------

- `301 Moved Permanently` 被请求的资源已永久移动到新位置，并且将来任何对此资源的引 用都应该使用本响应返回的若干个 URI 之一。如果可能，拥有链接编辑功能的客户端应 当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也 是可缓存的
- `302 Found` 请求的资源现在临时从不同的 URI 响应请求。由于这样的重定向是临时的， 客户端应当继续向原有地址发送以后的请求。只有在 `Cache-Control` 或 `Expires` 中进行了 指定的情况下，这个响应才是可缓存的
- 字面上的区别就是 301 是永久重定向，而 302 是临时重定向
- `301` 比较常用的场景是使用域名跳转。`302` 用来做临时跳转 比如未登陆的用户访问用户 中心重定向到登录页面

## (https://interview.html5.wiki/section/14-HTTP协议.html#_13-dns的作用、dns解析的详细过程-dns优化原理)13 DNS的作用、DNS解析的详细过程，DNS优化原理

------

**DNS查询过程：**

- 检查浏览器中是否缓存过该域名对应的 IP 地址
- 如果浏览器缓存中没有命中，将继续查找本级（操作系统）是否缓存过该 IP
- 向本地域名解析服务系统发起域名解析的请求（一般是本地运营商的机房）
- 向根域名解析服务器发起域名解析服务请求
- 根域名服务器返回 gTLD 域名解析服务器地址
- 向 gTLD 服务器发起解析请求
- gTLD 服务器接收请求并返回 Name Server 服务器（通常情况下就是你注册的域名服务器）
- Name Server 服务器返回 IP 地址给本地服务器
- 本地服务器缓存解析结果
- 返回解析结果给用户

## (https://interview.html5.wiki/section/14-HTTP协议.html#_14-简单请求和复杂请求)14 简单请求和复杂请求

------

1. **简单请求**

只要同时满足以下两大条件，就属于简单请求：

使用下列方法之一：

- GET
- HEAD
- POST

Content-Type 的值仅限于以下三者之一：

- text / plain
- multipart / form-data
- application / x-www-form-urlencoded

请求中的任意 XMLHttpRequestUpload 对象均没有注册任何事件监听器；

`XMLHttpRequestUpload` 对象可以使用 XMLHttpRequest.upload 属性访问。

1. **复杂请求**

> 不符合以上条件的就是复杂请求。复杂请求的 CORS 请求，会在正式通信之前，增加一次 HTTP 查询请求，称为 *预检请求* ，该请求的方法是 Option，通过该请求来查询服务端是否允许跨域请求。

## (https://interview.html5.wiki/section/14-HTTP协议.html#_15-http请求中的keep-alive有了解吗)15 Http请求中的keep-alive有了解吗

------

- 在`http`早期，每个`http`请求都要求打开一个`tpc socket`连接，并且使用一次之后就断开这个tcp连接- 使用`keep-alive`可以改善这种状态，即在一次TCP连接中可以持续发送多份数据而不会断开连接。通过使用`keep-alive`机制，可以减少tcp连接建立次数，也意味着可以减少`TIME_WAIT`状态连接，以此提高性能和提高`httpd`服务器的吞吐率(更少的tcp连接意味着更少的系统内核调用,`socket`的`accept()`和`close()`调用)。
- 但是，`keep-alive`并不是免费的午餐,长时间的tcp连接容易导致系统资源无效占用。配置不当的`keep-alive`，有时比重复利用连接带来的损失还更大。所以，正确地设置`keep-alive timeout`时间非常重要

## (https://interview.html5.wiki/section/14-HTTP协议.html#_16-管道机制的作用是什么)16 管道机制的作用是什么

------

- 如果浏览器要向一个域名发送多个请求，需要在本地维护一个FIFO队列，完成了一个再发送下一个，这样就存在一个问题，服务端从完成一个请求开始回传，到收到下一个请求的这段时间内是处于空闲状态的。
- 于是提出了管道机制，试图将浏览器的请求一股脑的打包发给服务器，服务器就可以在出开完一个请求后，马上处理下一个，不会在之前说的空闲时间。

**管道机制存在哪些问题？**

- 服务端收到多个管道请求后，需要按照接收顺序逐个响应。如果第一个请求处理特别慢，后续的响应的都会被阻塞着，这种情况称为「队首阻塞」。
- 服务端为了保证按顺序回传，通常需要缓存多个响应，从而占用更多的服务端资源，也更容易被攻击
- 浏览器连续发送多个请求后，等待响应的这段时间，如果遇到网络异常导致连接断开，无法得知服务器处理情况，如果全部重试，可能会在服务端重复处理。
- 服务端和浏览器中间的代理设备不一定支持http管道，这给管道技术的普及带来了更多复杂性

## (https://interview.html5.wiki/section/14-HTTP协议.html#_17-什么情况下会触发option请求)17 什么情况下会触发option请求

------

> options 通常用于，在跨域请求前发起预检请求，以检测请求是否被服务器接受。

> 跨域请求中分为简单请求和预检请求两种，符合以下条件可视为简单请求

- 使用的 `HTTP method` 是 `GET` `POST` `HEAD`
- `content-type` 是 `text/plain mutipart/form-data application/x-www-form-urlencode` 三种之一
- 请求头只能包含这些

```text
- Accept
- Accept-Language
- Content-Language
- Content-Type （需要注意额外的限制）
- DPR
- Downlink
- Save-Data
- Viewport-Width
- Width 
```

除去简单请求外，其他请求就会先触发预检请求。

常见的，比如使用

- `content-Type` 为 `application/xml` 或 `text/xml` 的 `POST` 请求
- 设置自定义头，比如 `X-JSON`、`X-MENGXIANHUI` 等

**预检请求返回的头部报文中有**

- `Access-Control-Allow-Origin`： 服务器可接受的请求来源
- `Access-Control-Request-Method`： 服务器实际请求所使用的 HTTP 方法
- `Access-Control-Request-Headers`： 服务器实际请求所携带的自定义首部字段

## (https://interview.html5.wiki/section/14-HTTP协议.html#_18-get可以上传图片吗)18 GET可以上传图片吗

------

> GET 请求是可以传图片的。图片的base64编码想必大家都见过：base64 的本质是字符串，而 GET 请求的参数在 url 里面，所以直接把图的 base64 数据放到 url 里面，就可以实现 GET 请求传图片

![img](https://interview.html5.wiki/image/20210629/125702.png)

## (https://interview.html5.wiki/section/14-HTTP协议.html#_19-cdn的作用和原理)19 CDN的作用和原理

------

> CDN的基本原理是广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对集中的地区或者网络中，在用户访问网站的时候，将其指向距离最近的工作正常的缓存服务器上，由缓存服务器直接响应用户请求。

**主要特点：**

1. 本地Cache加速：提高了企业站点（尤其含有大量图片和静态页面站点）的访问速度，并大大提高以上性质站点的稳定性。
2. 镜像服务：消除了不同运营商之间互联的瓶颈造成的影响，实现了跨运营商的网络加速，保证不同网络中的用户都能得到良好的访问质量。
3. 远程加速：[远程访问 (opens new window) (opens new window)](https://baike.baidu.com/item/远程访问)用户根据DNS[负载均衡 (opens new window) (opens new window)](https://baike.baidu.com/item/负载均衡)技术智能自动选择Cache[服务器 (opens new window) (opens new window)](https://baike.baidu.com/item/服务器)，选择最快的Cache服务器，加快远程访问的速度。
4. 带宽优化：自动生成[服务器 (opens new window) (opens new window)](https://baike.baidu.com/item/服务器)的远程Mirror（[镜像 (opens new window) (opens new window)](https://baike.baidu.com/item/镜像)）cache服务器，[远程用户 (opens new window) (opens new window)](https://baike.baidu.com/item/远程用户)访问时从cache服务器上读取数据，减少[远程访问 (opens new window) (opens new window)](https://baike.baidu.com/item/远程访问)的带宽、分担网络流量、减轻原站点[WEB服务器 (opens new window) (opens new window)](https://baike.baidu.com/item/WEB服务器)负载等功能。
5. 集群抗攻击：广泛分布的CDN节点加上节点之间的智能[冗余 (opens new window) (opens new window)](https://baike.baidu.com/item/冗余)机制，可以有效地预防[黑客 (opens new window) (opens new window)](https://baike.baidu.com/item/黑客)入侵以及降低各种D.D.o.S攻击对网站的影响，同时保证较好的服务质量 。

**CDN作用**

> 使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率

**CDN原理**

最简单的`CDN`网络由一个DNS服务器和几台缓存服务器组成。而工作的核心就是缓存服务器，它记录了用户所需内容，而且离用户较近，负载较小，因此提高了服务器响应速度。

> 实际上`CDN`的工作过程要更复杂，为了便于理解，上面只是简述。我们从用户访问一个`URL`地址说起：`访问URL` => `CNAME指向的CDN专用DNS服务器对URL解析` => `负载均衡设备根据解析的ip地址和内容选择一台缓存服务器` => `返回缓存服务器ip地址给用户`

### (https://interview.html5.wiki/section/14-HTTP协议.html#如何捕获cdn上的js运行时导致的详细错误信息)如何捕获CDN上的js运行时导致的详细错误信息？

> 当 CDN 设置了 `Access-Control-Allow-Origin` 响应头允许跨域时，我们可以给script标签添加crossOrigin属性，从而可以使用 window.onerror 捕获 CDN 上的 js 运行时导致的详细错误信息，包括堆栈等。

- 如果不设置`crossOrigin`属性，则可能只会捕获到script error，无法获取额外的堆栈信息。
- `crossOrigin`属性的值默认为`anonymous`，即不携带 cookie，如果设置为use-credentials，则会携带 cookie 和客户端证书等票据。

例如：

```text
<script src="https://qq.com/a.js" crossOrigin="anonymous"></script> 
```

## (https://interview.html5.wiki/section/14-HTTP协议.html#_20-强缓存命中发生了什么)20 强缓存命中发生了什么？

------

当浏览器要向服务器获取某个资源的时候，是会先构建一个请求行，然后进行强缓存的查找。如果强缓存命中了此次实际上是没有发送请求的，浏览器直接使用了强缓存，在浏览器控制台中虽然会看到一个请求，但是这个请求的`Request Headers`中有`Provisional headers are shown`表示实际未发送请求，且状态码为`200 OK (from memory cache)`或者`from disk cache`等等。

如下图：

![img](https://interview.html5.wiki/image/20210629/125712.png)

### (https://interview.html5.wiki/section/14-HTTP协议.html#默认的强制缓存时间是多少)默认的强制缓存时间是多少？

首先要明确两个响应头代表的含义：

1. `Date`: 指源服务器响应报文生成的时间，差不多与发请求的时间等价
2. `Last-Modified`: 指静态资源上次修改的时间，取决于 `mtime`

`LM factor` 算法认为当请求服务器时，如果没有设置 `Cache-Control`，如果距离上次的 `Last-Modified` 越远，则生成的强制缓存时间越长。

用公式表示如下，其中 `factor` 介于 0 与 1 之间：

```text
MaxAge = (Date - LastModified) * factor 
```

## (https://interview.html5.wiki/section/14-HTTP协议.html#_21-cors跨域的原理)21 CORS跨域的原理

------

> 跨域资源共享(`CORS`)是一种机制，是W3C标准。它允许浏览器向跨源服务器，发出`XMLHttpRequest`或`Fetch`请求。并且整个`CORS`通信过程都是浏览器自动完成的，不需要用户参与。

而使用这种`跨域资源共享`的前提是，浏览器必须支持这个功能，并且服务器端也必须同意这种`"跨域"`请求。因此实现`CORS`的关键是服务器需要服务器。通常是有以下几个配置：

- **Access-Control-Allow-Origin**
- **Access-Control-Allow-Methods**
- **Access-Control-Allow-Headers**
- **Access-Control-Allow-Credentials**
- **Access-Control-Max-Age**

具体可看：https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS#Preflighted_requests

过程分析：

**简单回答**：

- 当我们发起跨域请求时，**如果是非简单请求**，浏览器会帮我们自动触发预检请求，也就是 OPTIONS 请求，用于确认目标资源是否支持跨域。**如果是简单请求，则不会触发预检，直接发出正常请求。**
- 浏览器会根据服务端响应的 header 自动处理剩余的请求，如果响应支持跨域，则继续发出正常请求，如果不支持，则在控制台显示错误。

**详细回答**：

- 浏览器先根据同源策略对前端页面和后台交互地址做匹配，若同源，则直接发送数据请求；若不同源，则发送跨域请求。
- 服务器收到浏览器跨域请求后，根据自身配置返回对应文件头。若未配置过任何允许跨域，则文件头里不包含 `Access-Control-Allow-origin` 字段，若配置过域名，则返回 `Access-Control-Allow-origin + 对应配置规则里的域名的方式`。
- 浏览器根据接受到的 响应头里的 `Access-Control-Allow-origin` 字段做匹配，若无该字段，说明不允许跨域，从而抛出一个错误；若有该字段，则对字段内容和当前域名做比对，如果同源，则说明可以跨域，浏览器接受该响应；若不同源，则说明该域名不可跨域，浏览器不接受该响应，并抛出一个错误。

在`CORS`中有`简单请求`和`非简单请求`，简单请求是不会触发`CORS`的预检请求的，而非简单请求会。

`“需预检的请求”`要求必须首先使用 [`OPTIONS` (opens new window) (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS)方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

### (https://interview.html5.wiki/section/14-HTTP协议.html#cors的哪些是简单请求)CORS的哪些是简单请求？

> 简单请求不会触发`CORS`的预检请求，若请求满足所有下述条件，则该请求可视为“简单请求”：

**简单回答**：

- 只能使用`GET`、`HEAD`、`POST`方法。使用`POST`方法向服务器发送数据时，`Content-Type`只能使用`application/x-www-form-urlencoded`、`multipart/form-data`或`text/plain`编码格式。
- 请求时不能使用自定义的`HTTP Headers`

**详细回答**：

- (一) 使用下列方法之一
	- `GET`
	- `HEAD`
	- `POST`
- (二) 只能设置以下集合中的请求头
	- `Accept`
	- `Accept-Language`
	- `Content-Language`
	- `Content-Type`(但是有限制)
	- `DPR`
	- `Downlink`
	- `Save-Data`
	- `Viewport-Width`
	- `Width`
- (三) `Content-Type`的值仅限于下面的三者之一
	- `text/plain`
	- `multipart/form-data`
	- `application/x-www-form-urlencoded`
- 请求中的任意[`XMLHttpRequestUpload` (opens new window) (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestUpload)对象均没有注册任何事件监听器；[`XMLHttpRequestUpload` (opens new window) (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestUpload)对象可以使用 [`XMLHttpRequest.upload` (opens new window) (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/upload)属性访问。
- 请求中没有使用 [`ReadableStream` (opens new window) (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream)对象。

除了上面这些请求外，都是非简单请求。

### (https://interview.html5.wiki/section/14-HTTP协议.html#cors的预检请求具体是怎样的)CORS的预检请求具体是怎样的？

若是跨域的非简单请求的话，浏览器会首先向服务器发送一个预检请求，以获知服务器是否允许该实际请求。

整个过程大概是：

- 浏览器给服务器发送一个

	```
	OPTIONS
	```

	方法的请求，该请求会携带下面两个首部字段：

	- `Access-Control-Request-Method`: 实际请求要用到的方法
	- `Access-Control-Request-Headers`: 实际请求会携带哪些首部字段

- 若是服务器接受后续请求，则这次预请求的响应体中会携带下面的一些字段：

	- `Access-Control-Allow-Methods`: 服务器允许使用的方法
	- `Access-Control-Allow-Origin`: 服务器允许访问的域名
	- `Access-Control-Allow-Headers`: 服务器允许的首部字段
	- `Access-Control-Max-Age`: 该响应的有效时间(s),在有效时间内浏览器无需再为同一个请求发送预检请求

- 预检请求完毕之后，再发送实际请求

这里有两点要注意：

- `Access-Control-Request-Method`没有`s`
- `Access-Control-Allow-Methods`有`s`
- 关于`Access-Control-Max-Age`，浏览器自身也有维护一个最大有效时间，如果该首部字段的值超过了最大有效时间，将不会生效，而是以最大有效时间为主。

### (https://interview.html5.wiki/section/14-HTTP协议.html#为什么简单请求不需要预检)为什么简单请求不需要预检？

因为简单请求虽然是一种定义，不过它定义是有一定理由的，浏览器可能觉得这类请求预检的安全性没有那么大必要，不预检带来性能方面收益更大。

### (https://interview.html5.wiki/section/14-HTTP协议.html#复杂请求预检检查什么东西)复杂请求预检检查什么东西？

> 预检请求的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。例如，我某个请求只支持 `headers ,cc`，你发送了一个 `dd 的headers`， 那么 `options` 可以有效拦截，不会发出实体的请求，避免了一些安全问题。

### (https://interview.html5.wiki/section/14-HTTP协议.html#如果cors附带身份凭证要怎样做)如果CORS附带身份凭证要怎样做？

对于跨域 [`XMLHttpRequest` (opens new window) (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)或 [Fetch (opens new window) (opens new window)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)请求，浏览器**不会**发送身份凭证信息。如果要发送凭证信息，需要设置 `XMLHttpRequest`的某个特殊标志位。

例如我们想要在跨域请求中带上`cookie`，需要满足3个条件：

- web（浏览器）请求设置`withCredentials`为`true`
- 服务器设置首部字段`Access-Control-Allow-Credentials`为`true`
- 服务器的`Access-Control-Allow-Origin`不能为`*`

### (https://interview.html5.wiki/section/14-HTTP协议.html#如何减少cors预请求的次数)如何减少CORS预请求的次数？

> 服务端设置`Access-Control-Max-Age`字段，在有效时间内浏览器无需再为同一个请求发送预检请求。但是它有局限性：只能为同一个请求缓存，无法针对整个域或者模糊匹配 URL 做缓存。

## (https://interview.html5.wiki/section/14-HTTP协议.html#_22-在深圳的网页上输入百度-是怎么把这个请求发到北京的)22 在深圳的网页上输入百度，是怎么把这个请求发到北京的

------

> 中间会经过很多的站点，比如会经过湖南，或者其它城市，由各个城市的这些站点一层一层分发下去。通过CDN层层分发

## (https://interview.html5.wiki/section/14-HTTP协议.html#_23-为什么使用多域名部署)23 为什么使用多域名部署？

------

主要是因为`http1`和浏览器的原因，同一时间同一个域名最多进行6个`tcp`连接。

## (https://interview.html5.wiki/section/14-HTTP协议.html#_24-页面10张img-http1是怎样的加载表现-怎样解决的)24 页面10张img，http1是怎样的加载表现？怎样解决的？

------

- `http1`下，浏览器对一个域名的最大`tcp`连接数为6，所以10张图片表现为`6 + 4`。
- 可以使用多域名部署解决。比如`5个a域名`和`5个b域名`，或者`6个a域名`和`4个b域名`，就可以实现一瞬间全部出来了。

## (https://interview.html5.wiki/section/14-HTTP协议.html#_25-说一说sso单点登录)25 说一说SSO单点登录

------

**概念：**

当用户在身份认证服务器上登录过一次之后，即可获取访问单点登录系统中的其它关联系统和应用软件的权限。

**实现机制**：

> 当用户第一次访问应用系统1的时候，因为还没有登录，会被引导到认证系统中进行登录；根据用户提供的登录信息，认证系统进行身份校验，如果通过校验，应该返回给用户一个认证的凭据－－ticket；用户再访问别的应用的时候就会将这个ticket带上，作为自己认证的凭据，应用系统接受到请求之后会把ticket送到认证系统进行校验，检查ticket的合法性。如果通过校验，用户就可以在不用再次登录的情况下访问应用系统2和应用系统3了。

需要注意两点：

- 系统共享，统一的认证系统
- 信息识别，让应用系统能够识别已经登录过的用户(其实要把ticket发送到认证系统进行校验)

**优点：**

- 单点登录：用户只需登录一次，即可通过单点登录系统（eTrueSSO）访问后台的多个 应用系统，二次登陆时无需重新输入用户名和密码
- 基于角色访问控制：根据用户的角色和URL实现访问控制功能
- 集群：通过集群功能，实现多台服务器之间的动态负载均衡
- 传输加密：支持多种对称和非对称加密算法，保证用户信息在传输过程中不被窃取和篡改

**缺点：**

- 不利于重构， 因为涉及到的系统很多，要重构必须要兼容所有的系统，可能很耗时
- 无人看守桌面，因为只需要登录一次，所有的授权的应用系统都可以访问，可能导致一些很重要的信息泄露

## (https://interview.html5.wiki/section/14-HTTP协议.html#_26-说一说oauth)26 说一说OAuth

------

> OAUTH协议为用户资源的授权提供了一个安全的、开放而又简易的标准。与以往的授权方式不同之处是OAUTH的授权不会使第三方触及到用户的帐号信息（如用户名与密码），即第三方无需使用用户的用户名与密码就可以申请获得该用户资源的授权，因此OAUTH是安全的。oAuth是Open Authorization的简写。

**产生背景：**

典型案例：如果一个用户需要两项服务：一项服务是图片在线存储服务A，另一个是图片在线打印服务B。

由于服务A与服务B是由两家不同的服务提供商提供的，所以用户在这两家服务提供商的网站上各自注册了两个用户，假设这两个用户名各不相同，密码也各不相同。当用户

要使用服务B打印存储在服务A上的图片时，用户该如何处理？法一：用户可能先将待打印的图片从服务A上下载下来并上传到服务B上打印，这种方式安全但处理比较繁琐，效率低下；法二：用户将在服务A上注册的用户名与密码提供给服务B，服务B使用用户的[帐号 (opens new window) (opens new window)](https://baike.baidu.com/item/帐号)再去服务A处下载待打印的图片，这种方式效率是提高了，但是安全性大大降低了，服务B可以使用用户的用户名与密码去服务A上查看甚至篡改用户的资源。

**授权流程**

简单的来说，

OAUTH认证授权就三个步骤，三句话可以概括：

1. 获取未授权的Request Token
2. 获取用户授权的Request Token
3. 用授权的Request Token换取Access Token

当应用拿到Access Token后，就可以有权访问用户授权的资源了。大家可能看出来了，这三个步骤不就是对应OAUTH的三个URL服务地址嘛。一点没错，上面的三个步骤中，每个步骤分别请求一个URL，并且收到相关信息，并且拿到上步的相关信息去请求接下来的URL直到拿到Access Token。

## (https://interview.html5.wiki/section/14-HTTP协议.html#_27-http-中的-301、302、303、307、308-响应状态码)27 HTTP 中的 301、302、303、307、308 响应状态码

------

- ```
	301
	```

	 

	Moved Permanently

	- 301 状态码表明目标资源被永久的移动到了一个新的 URI，任何未来对这个资源的引用都应该使用新的 URI

- ```
	302
	```

	 

	Found

	- 302 状态码表示目标资源临时移动到了另一个 URI 上。由于重定向是临时发生的，所以客户端在之后的请求中还应该使用原本的 URI。
	- 服务器会在响应 Header 的 Location 字段中放上这个不同的 URI。浏览器可以使用 Location 中的 URI 进行自动重定向。
	- **注意**：由于历史原因，用户代理可能会在重定向后的请求中把 `POST 方法改为 GET 方法`。如果`不想这样，应该使用 307`（Temporary Redirect） 状态码

- ```
	303
	```

	 

	See Other

	- 303 状态码表示服务器要将浏览器重定向到另一个资源，这个资源的 URI 会被写在响应 Header 的 Location 字段。从语义上讲，重定向到的资源并不是你所请求的资源，而是对你所请求资源的一些描述。
	- 303 常用于将 POST 请求重定向到 GET 请求，比如你上传了一份个人信息，服务器发回一个 303 响应，将你导向一个“上传成功”页面。
	- 不管原请求是什么方法，重定向请求的方法都是 GET（或 HEAD，不常用）。
	- 303 和 302 的作用很类似，除去语义差别，似乎是 302 包含了 303 的情况。确实，这是由历史原因导致的

- ```
	307
	```

	 

	Temporary Redirect

	- 307 的定义实际上`和 302 是一致的`，唯一的区别在于，`307 状态码不允许浏览器将原本为 POST 的请求重定向到 GET 请求上`。

- ```
	308
	```

	 

	Permanent Redirect

	- `308` 的定义实际上和 301 是一致的，唯一的区别在于，308 状态码不允许浏览器将原本为 POST 的请求重定向到 GET 请求上

**302 与 303、307 的关系**

- `302` 允许各种各样的重定向，一般情况下都会实现为到 `GET` 的重定向，但是不能确保 `POST` 会重定向为 `POST`
- `303` 只允许任意请求到 `GET` 的重定向
- `307` 和 `302` 一样，除了不允许 `POST` 到 `GET` 的重定向

**简要历史原因**

> 那为什么有了 307 和 303 还需要 302呢？把总结放在最前面。302 在最初的定义中，内容和现在的 307 是一样的，不允许重定向方法的改写（从 POST 到 GET，由于 GET 不应该有 body，实际上 body 也被改了）。但是早期浏览器在实现的时候有的实现成 303 的效果，有的实现成 307 的效果。于是在之后的标准，302 在某些浏览器中错误的实现被写进规范，成为 303，而 302 原本的效果被复制了到了 307。在最近的一次标准修订中，302 标准被修改成不再强制需要维持原请求的方法。所以就产生了现在的 302、303 和 307

**301 与 308 的历史**

> 和 302 一样，301 在浏览器中的实现和标准是不同的，这个时间一直延续到 2014 年的 RFC 7231，301 定义中的 Note 还是提到了这个问题。直到 2015 年 4 月，RFC 7538 提出了 308 的标准，类似 307 Temporary Redirect 之于 302 Found 的存在，308 成为了 301 的补充。