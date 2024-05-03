# Docsify搭建教程

> 这是一篇专门为我一个朋友写的一个教程,以便她更快的能学习到前端的各种能力,祝愿她能够在以后找到适合自己的工作. -2024.05.03

## 1.官网

- 简介

	官网地址是`https://docsify.js.org/`,在mainland可能无法正确访问到

	这里的话,可以转到**GitHub**去看官方写的Markdown文件

	`https://github.com/docsifyjs/docsify`,在`docs`里,就是官方写的教程,就不用去考虑这个网络的问题.

- 部署

	这里的话,我需要解释清楚

	- 第一步

		电脑上必须先下载两个东西.

		下载:`https://nodejs.org/en/download/current`,自动包含我们需要的两个,**一个是`nodejs`,另一个是`npm`**,我们下载好后,去到`Windows的命令执行cmd里`,输入这两行命令,检查是否安装成功.

		```bash
		node -v
		```

		还有一个

		```bash
		npm -v
		```

		如果有版本号,说明安装成功.

	- 第二步

		我们在`Windows命令执行cmd`里,继续敲下我们的bash命令

		```bash
		npm i docsify-cli -g
		```

		*npm（“Node 包管理器”）是 JavaScript 运行时 Node.js 的默认程序包管理器,npm 由两个主要部分组成:用于发布和下载程序包的 CLI（命令行界面）工具,托管 JavaScript 程序包的在线存储库*

		然后我们需要初始化项目

		```bash
		# 进入指定文件目录 如下：F:\ideWork\githubWork\test_docs 
		docsify init ./docs
		```

		初始化成功后，可以看到 `./docs` 目录下创建的几个文件

		```stylus
		index.html 入口文件
		README.md 会做为主页内容渲染
		.nojekyll 用于阻止 GitHub Pages 会忽略掉下划线开头的文件
		```

		然后我们让它跑起来

		```bash
		docsify serve docs
		```

		运行一个本地服务器通过 docsify serve 可以方便的预览效果，而且提供 LiveReload 功能，可以让实时的预览。默认访问http://localhost:3000/#/

- 配置

	docsify还可以自定义导航栏，自定义侧边栏以及背景图和一些开发插件等等

	这里我把我的一些配置项写出来,可以拿去参考

	```javascript
	<!-- 代码高亮 -->
	    <script src="https://fastly.jsdelivr.net/npm/prismjs@1.22.0/components/prism-java.min.js"></script>
	    <!-- 字数统计 -->
	    <script src="//unpkg.com/docsify-count/dist/countable.js"></script>
	    <!-- docsify的js依赖 -->
	    <script src="//fastly.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
	    <!-- emoji表情支持 -->
	    <script src="//fastly.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
	    <!-- 图片放大缩小支持 -->
	    <script src="//fastly.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
	    <!-- 搜索功能支持 -->
	    <script src="//fastly.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
	    <!--在所有的代码块上添加一个简单的Click to copy按钮来允许用户从你的文档中轻易地复制代码-->
	    <script src="//fastly.jsdelivr.net/npm/docsify-copy-code/dist/docsify-copy-code.min.js"></script>
	    <!-- 卜算子:显示访问量 -->
	    <script src="https://unpkg.com/docsify-busuanzi@1.0.1/dist/docsify-busuanzi.min.js"></script>
	    <!-- 分页导航 -->
	    <script src="//unpkg.com/docsify-pagination/dist/docsify-pagination.min.js"></script>
	    <!-- 最后更新时间 -->
	    <script src="https://fastly.jsdelivr.net/npm/docsify-updated/src/time-updater.min.js"></script>
	    <!-- 进度条 -->
	    <script src="https://fastly.jsdelivr.net/npm/docsify-progress@latest/dist/progress.min.js"></script>
	    <!-- 右边导航栏 -->
	    <script src="https://unpkg.com/docsify-plugin-toc@1.3.1/dist/docsify-plugin-toc.min.js"></script>
	    <!-- 前端预览页面 -->
	    <script src="//fastly.jsdelivr.net/npm/docsify-demo@latest/dist/index.min.js"></script>
	    <!-- 页脚支持 -->
	    <script src="//unpkg.com/docsify-footer-enh/dist/docsify-footer-enh.min.js"></script>
	    <!-- 回到顶部 -->
	    <script src="//unpkg.com/docsify-scroll-to-top/dist/docsify-scroll-to-top.min.js"></script>
	    <!-- 启用 giscus -->
	    <!-- <script src="https://giscus.app/client.js" data-repo="xieleihan/leetCodeReviewQuestions-v2"
	        data-repo-id="R_kgDOL0mt4Q" data-category="Q&A" data-category-id="DIC_kwDOL0mt4c4CfENI" data-mapping="url"
	        data-strict="1" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="light"
	        data-lang="zh-CN" data-loading="lazy" crossorigin="anonymous" async>
	        </script> -->
	    <script src="https://unpkg.com/docsify-giscus@1.0.2/dist/docsify-giscus.min.js"></script>
	    <!-- 建站时间 -->
	    <script language=javascript>
	        function siteTime() {
	            window.setTimeout("siteTime()", 1000);
	            var seconds = 1000;
	            var minutes = seconds * 60;
	            var hours = minutes * 60;
	            var days = hours * 24;
	            var years = days * 365;
	            var today = new Date();
	            var todayYear = today.getFullYear();
	            var todayMonth = today.getMonth() + 1;
	            var todayDate = today.getDate();
	            var todayHour = today.getHours();
	            var todayMinute = today.getMinutes();
	            var todaySecond = today.getSeconds();
	            /* Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
	            year - 作为date对象的年份，为4位年份值
	            month - 0-11之间的整数，做为date对象的月份
	            day - 1-31之间的整数，做为date对象的天数
	            hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
	            minutes - 0-59之间的整数，做为date对象的分钟数
	            seconds - 0-59之间的整数，做为date对象的秒数
	            microseconds - 0-999之间的整数，做为date对象的毫秒数 */
	
	            /* 建站时间 */
	            var t1 = Date.UTC(2024,04, 26,00,00,00);
	            var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
	            var diff = t2 - t1;
	            var diffYears = Math.floor(diff / years);
	            var diffDays = Math.floor((diff / days) - diffYears * 365);
	            var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
	            var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
	            var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
	            document.getElementById("sitetime").innerHTML = " 本站已安全运行 " + diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分 " + diffSeconds + " 秒 ";
	        }
	        siteTime();
	    </script>
	    <!-- 离线模式 -->
	    <script>
	        if (typeof navigator.serviceWorker !== 'undefined') {
	            navigator.serviceWorker.register('sw.js')
	        }
	    </script>
	    <!-- 分享按钮 -->
	    <script src="//unpkg.com/docsify-share/build/index.min.js"></script>
	```

	*上面的内容需要根据自己需要去进行修改*

## 2.部署到Github Pages

GitHub Pages 支持从三个地方读取文件

```stylus
- docs/ 目录
- master 分支
- gh-pages 分支
```



上传文件至Github仓库  官方推荐直接将文档放在 docs/ 目录下，在设置页面开启 GitHub Pages 功能并选择 master branch /docs folder 选项。

等待几分钟就行了



> 以下来自官方文档

# 部署

和 GitBook 生成的文档一样，我们可以直接把文档网站部署到 GitHub Pages 或者 VPS 上。

## GitHub Pages

GitHub Pages 支持从三个地方读取文件

- `docs/` 目录
- master 分支
- gh-pages 分支

我们推荐直接将文档放在 `docs/` 目录下，在设置页面开启 **GitHub Pages** 功能并选择 `master branch /docs folder` 选项。

![github pages](../_images/deploy-github-pages.png)

!> 可以将文档放在根目录下，然后选择 **master 分支** 作为文档目录。你需要在部署位置下放一个 `.nojekyll` 文件（比如 `/docs` 目录或者 gh-pages 分支）

## GitLab Pages

如果你正在部署你的主分支, 在 `.gitlab-ci.yml` 中包含以下脚本：

?> `.public` 的解决方法是这样的，`cp` 不会无限循环的将 `public/` 复制到自身。

```YAML
pages:
  stage: deploy
  script:
  - mkdir .public
  - cp -r * .public
  - mv .public public
  artifacts:
    paths:
    - public
  only:
  - master
```

!> 你可以用 `- cp -r docs/. public` 替换脚本, 如果 `./docs` 是你的 docsify 子文件夹。

## Gitee Pages

在对应的 Gitee 仓库服务中选择 `Gitee Pages`，选择您要部署的分支，填写您要部署的分支上的目录，例如`docs`，填写完成之后点击启动即可。

## Firebase 主机

!> 你需要先使用谷歌账号登陆 [Firebase 控制台](https://console.firebase.google.com) ，然后使用 `npm i -g firebase-tools` 命令安装 Firebase CLI 。

使用命令行浏览到你的 Firebase 项目目录，大致是 `~/Projects/Docs` 等等。在这里执行 `firebase init` 命令，从菜单中选择 `Hosting` （使用 **空格键** 选择， **方向键** 切换选项， **回车键** 确认。遵照安装说明。

然后你会有个 `firebase.json` 文件，内容大致如下（我把部署目录从 `public` 改为 `site` 了）：

```json
{
  "hosting": {
    "public": "site",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```

完成后，执行 `docsify init ./site` 构建起始模板（将`site`替换为你在运行`firebase init`时确定的部署目录 - 默认情况下为`public`）。 添加/编辑文档，然后在项目根目录执行 `firebase deploy`。

## VPS

和部署所有静态网站一样，只需将服务器的访问根目录设定为 `index.html` 文件。

例如 nginx 的配置

```nginx
server {
  listen 80;
  server_name  your.domain.com;

  location / {
    alias /path/to/dir/of/docs/;
    index index.html;
  }
}
```

## Netlify

1.  登陆你的[Netlify](https://www.netlify.com/)账号
2.  在[dashboard](https://app.netlify.com/)页上点击 **New site from Git**
3.  选择那个你用来存储文档的git仓库，将 **Build Command** 留空, 将 **Publish directory** 区域填入你的`index.html`所在的目录，例如：填入`docs`(如果你的`index.html`的相对路径是`docs/index.html`的话)

### HTML5 路由

当使用HTML5路由时，你需要设置一条将所有请求重定向到你的`index.html`的重定向规则。当你使用Netlify时这相当简单，在你的**Publish Directory**下创建一个`_redirects`文件，写进以下内容就可以了 :tada:

```sh
/* /index.html 200
```

## Vercel

1. 安装 [Vercel CLI](https://vercel.com/download) ： `npm i -g vercel`
2. 切换到你的 docsify 网站的文档目录，例如 `cd docs`
3. 用一个指令来部署： `vercel`

## AWS Amplify

1. 在 Docsify 项目的 `index.html` 中设置 routerMode 为 *history* 模式：

```html
<script>
    window.$docsify = {
      loadSidebar: true,
      routerMode: 'history'
    }
</script>
```

2. 登录到你的 [AWS 控制台](https://aws.amazon.com)。
3. 到 [AWS Amplify 仪表盘](https://aws.amazon.com/amplify)。
4. 选择 **Deploy** 路线来设置你的项目。
5. 若有提示，如果你希望在项目根目录下保存你的文档，保持构建设置为空；如果你想保存文档到其它目录，修改`amplify.yml`:

```yml
version: 0.1
frontend:
  phases:
    build:
      commands:
        - echo "Nothing to build"
  artifacts:
    baseDirectory: /docs
    files:
      - '**/*'
  cache:
    paths: []
```

6. 依次添加如下跳转规则。注意第二条的 PNG 是图片格式，如果你要使用其它图片格式，可以相应修改。

| Source address | Target address | Type          |
| -------------- | -------------- | ------------- |
| /<*>.md        | /<*>.md        | 200 (Rewrite) |
| /<*>.png       | /<*>.png       | 200 (Rewrite) |
| /<*>           | /index.html    | 200 (Rewrite) |

## Docker

- 创建 docsify 的文件

你需要准备好初始文件，而不是在容器中制作。
请参阅 [快速开始](https://docsify.js.org/#/zh-cn/quickstart) 部分，了解如何手动或使用 [docsify-cli](https://github.com/docsifyjs/docsify-cli) 创建这些文件。

```sh
index.html
README.md
```

- 创建 Dockerfile

```Dockerfile
FROM node:latest
LABEL description="A demo Dockerfile for build Docsify."
WORKDIR /docs
RUN npm install -g docsify-cli@latest
EXPOSE 3000/tcp
ENTRYPOINT docsify serve .
```

创建成功后当前的目录结构应该是这样的：

```sh
index.html
README.md
Dockerfile
```

- 构建 docker 镜像

```sh
docker build -f Dockerfile -t docsify/demo .
```

- 运行 docker 镜像

```sh
docker run -itp 3000:3000 --name=docsify -v $(pwd):/docs docsify/demo
```





🎉🎉🎉后续再更新吧



