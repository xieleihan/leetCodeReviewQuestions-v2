# Github镜像站搭建教程

> 为什么要专门做这一期教程呢,因为在China mainland,访问GitHub其实偶尔会抽风,导致我们在fork别人项目或者找开源项目都造成一定的困扰.还有就是发现很多同学其实很少机会可以认识到这个网站的优点或者说跑到Gitee上去公开自己的项目,但是Gitee的体量实在太小了,我也是今天才注册了我的Gitee账号,比起我Github的账号晚了3年多时间.OK,我们就说到这,开始教程.
>
> *注意*:本次教程有一个地方需要自己去付费的地方,就是**<font color="red">购买域名</font>**,剩下的基本0成本,你可以自己去试试,建网站对一个开发者来说还是有好处的

## 内容

1. **需要一个自己的域名**

	**这里推荐一个购买域名的网站**:`https://wanwang.aliyun.com/domain`(阿里万国域名注册),我们首先注册一下自己的阿里云账号

	![阿里云万国域名注册官网](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/1.webp)

	我们点击右上角的立即注册,这一步我就不演示了

	然后,我们在这里输入你想创建的一个域名名

	![这里输入](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/2.webp)

	**可以选择自己想要的顶级域名,这里推荐`.top`的顶级域,首年17,再续费也不贵**

	我这里就选择的是*.com*演示,因为我自己已经注册了*.cn和.top*

	![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/3.webp)

	我们找一个添加进清单

	![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/4.webp)

	点击立即购买,我就不演示了,😂老师应该不会给我报销的,如果有后续的同学愿意加入自己的图片也行,允许直接修改添加

	反正下续步骤就是购买,然后进行实名认证,**<font color="red">注意:这里的认证不用去ICP备案,我们不用到国内的服务器,不用去做.只需要你备案域名就行</font>**

	上面步骤做完之后,你可以在这个控制台看到你的注册的域名

	![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/5.webp)

	然后我们,点击右边这个*解析*,我们要把这个暂时保存在本地

	就在这里

	![解析](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/6.webp)

	![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/7.webp)

	把右边两行内容保存下,以便你以后能搞其他内容.

	**这里的话,我们是把域名已经购买到了,你有了专属自己的域名(记得每年付费就行)**

	2. 我们接下来去这个网站`https://www.cloudflare.com/zh-cn/`

		![Cloudflare](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/8.webp)

		有账号就登录,没有自己去注册一个吧

		![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/9.webp)

		接下来:*进入控制台,新添你的域名*

		![这里](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/10.webp)

		![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/11.webp)

		这里我们要选择:**免费计划**(如果你跟我一样,访问量比较大,建议买Pro计划,*需要万事达卡或者Visa刷美刀*)

		第二步我们直接不用管,眺到第三步

		![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/12.webp)

		保存下面的那个`Cloudflare域名服务器`,两行,很重要

		然后,直接下一步,完成,**稍后完成**

		3. 然后我们回到第一步的万国域名网的控制台,

			![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/13.webp)

			点击图上的修改dns,将域名解析给`Cloudflare`托管

			填入好后,可能要等个24h,不确定有多快,但最慢不超过24H.**一般15min就行**

			然后你到`CloudFlare`控制台,可以看到你的域名已经Active了

			继续下一步

			4. 专门搞了个新域名,看图

				![Success的图](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/14.webp)

				找到红框框的位置点他呀

				![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/15.webp)

				然后是这个管理work实例

				![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/16.webp)

				创建一个实例

				![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/17.webp)

				点击这个`Works`下的创建新**Works**

				![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/18.webp)

				`name`任意,然后确定

				看到这个

				![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/19.webp)

				好了,下一步

				5. 点击这里

					![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/20.webp)

					![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/21.webp)

					到点这里,输入你的Code

					我已经将脚本写好,直接拿去用,

					用的是*JavaScript*

					```JavaScript
					// 定义一个Github网站,用最终变量.
					const upstream = 'www.github.com'
					
					// 镜像网站的目录，比如你想镜像某个网站的二级目录则填写二级目录的目录名，镜像 GitHub 用不到，默认即可.
					const upstream_path = '/'
					
					// 镜像站是否有手机访问专用网址，没有则填一样的.
					const upstream_mobile = 'www.github.com'
					
					// 屏蔽国家和地区,这里要防止触发其他国家的风控.
					// 请遵守当地国家的法律法规,我的数字身份是Hong Kong,所以相对来说不用担心触发风控,这里一定要填写的国家是朝鲜,剩下的你去填
					const blocked_region = ['KP', 'SY', 'PK', 'CU']
					
					// 屏蔽 IP 地址.
					// 防止全局触发和本地回环
					const blocked_ip_address = ['0.0.0.0', '127.0.0.1']
					
					// 镜像站是否开启 HTTPS.
					// 一定开https,所以不要动
					const https = true
					
					// 文本替换.
					const replace_dict = {
					    '$upstream': '$custom_domain',
					    '//github.com': ''
					}
					
					// 以下保持默认，不要动
					addEventListener('fetch', event => {
					    event.respondWith(fetchAndApply(event.request));
					})
					
					async function fetchAndApply(request) {
					
					    const region = request.headers.get('cf-ipcountry').toUpperCase();
					    const ip_address = request.headers.get('cf-connecting-ip');
					    const user_agent = request.headers.get('user-agent');
					
					    let response = null;
					    let url = new URL(request.url);
					    let url_hostname = url.hostname;
					
					    if (https == true) {
					        url.protocol = 'https:';
					    } else {
					        url.protocol = 'http:';
					    }
					
					    if (await device_status(user_agent)) {
					        var upstream_domain = upstream;
					    } else {
					        var upstream_domain = upstream_mobile;
					    }
					
					    url.host = upstream_domain;
					    if (url.pathname == '/') {
					        url.pathname = upstream_path;
					    } else {
					        url.pathname = upstream_path + url.pathname;
					    }
					
					    if (blocked_region.includes(region)) {
					        response = new Response('Access denied: WorkersProxy is not available in your region yet.', {
					            status: 403
					        });
					    } else if (blocked_ip_address.includes(ip_address)) {
					        response = new Response('Access denied: Your IP address is blocked by WorkersProxy.', {
					            status: 403
					        });
					    } else {
					        let method = request.method;
					        let request_headers = request.headers;
					        let new_request_headers = new Headers(request_headers);
					
					        new_request_headers.set('Host', url.hostname);
					        new_request_headers.set('Referer', url.hostname);
					
					        let original_response = await fetch(url.href, {
					            method: method,
					            headers: new_request_headers
					        })
					
					        let original_response_clone = original_response.clone();
					        let original_text = null;
					        let response_headers = original_response.headers;
					        let new_response_headers = new Headers(response_headers);
					        let status = original_response.status;
					
					        new_response_headers.set('access-control-allow-origin', '*');
					        new_response_headers.set('access-control-allow-credentials', true);
					        new_response_headers.delete('content-security-policy');
					        new_response_headers.delete('content-security-policy-report-only');
					        new_response_headers.delete('clear-site-data');
					
					        const content_type = new_response_headers.get('content-type');
					        if (content_type.includes('text/html') && content_type.includes('UTF-8')) {
					            original_text = await replace_response_text(original_response_clone, upstream_domain, url_hostname);
					        } else {
					            original_text = original_response_clone.body
					        }
					
					        response = new Response(original_text, {
					            status,
					            headers: new_response_headers
					        })
					    }
					    return response;
					}
					
					async function replace_response_text(response, upstream_domain, host_name) {
					    let text = await response.text()
					
					    var i, j;
					    for (i in replace_dict) {
					        j = replace_dict[i]
					        if (i == '$upstream') {
					            i = upstream_domain
					        } else if (i == '$custom_domain') {
					            i = host_name
					        }
					
					        if (j == '$upstream') {
					            j = upstream_domain
					        } else if (j == '$custom_domain') {
					            j = host_name
					        }
					
					        let re = new RegExp(i, 'g')
					        text = text.replace(re, j);
					    }
					    return text;
					}
					
					
					async function device_status(user_agent_info) {
					    var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
					    var flag = true;
					    for (var v = 0; v < agents.length; v++) {
					        if (user_agent_info.indexOf(agents[v]) > 0) {
					            flag = false;
					            break;
					        }
					    }
					    return flag;
					}
					```

					如果你觉得上面的内容,不符合你的,请自己修改

					![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/22.webp)

					然后点击**部署就行**

					很抱歉,我图片打码,因为我有一些修改和其他用,你根据上面用就行

					搞定后,你就可以在这个页面`yourDepoyName.pages.dev`看到成果(需要科学上网)

					6. 这里就体现一个域名好处

						![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/23.webp)

						点击`Custom Domain`,记得你需要写入二级域名

						注意

						**域名(Domain)**:*最后面的那一个`.cn`是顶级域,,然后你的`example.cn`中的example是一级域名,`xxx.example.cn`中的xxx是二级域名*

						![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/24.webp)

						将这一行的内容导入到cloudflare里,**一般会自动导入**

						好了,我们去到自己的域名

						`xxx.example.xx`

						成功截图是这样的

						![](https://raw.githubusercontent.com/xieleihan/pic_bed1/main/img/25.webp)

						然后你可以在开源的星辰大海遨游哦

					# 项目结尾

					> 注意,这种方式部署的镜像不能登录自己的账号,GitHub更新了相应的规则,不能用这个登录,但是拉取请求啊或者是clone都是OK的
					>
					> 后续有人能解决也可以帮我修改,我已经不用这个方法很久了,可能过时但是可以用

					> 谢谢看到这里,希望能为开源项目做出一份力量🎉🎉🎉
					>
					> **让我们前往开源的星辰大海,每一个人一定是最闪亮的星星✨**