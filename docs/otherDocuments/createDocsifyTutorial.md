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



# 封面

通过设置 `coverpage` 参数，可以开启渲染封面的功能。具体用法见[配置项#coverpage](configuration.md#coverpage)。

## 基本用法

封面的生成同样是从 markdown 文件渲染来的。开启渲染封面功能后在文档根目录创建 `_coverpage.md` 文件。渲染效果如本文档。

_index.html_

```html
<!-- index.html -->

<script>
  window.$docsify = {
    coverpage: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

```markdown
<!-- _coverpage.md -->

![logo](_media/icon.svg)

# docsify <small>3.5</small>

> 一个神奇的文档网站生成器。

- 简单、轻便 (压缩后 ~21kB)
- 无需生成 html 文件
- 众多主题

[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#docsify)
```

## 自定义背景

目前的背景是随机生成的渐变色，我们自定义背景色或者背景图。在文档末尾用添加图片的 Markdown 语法设置背景。

`_coverpage.md`

```markdown
<!-- _coverpage.md -->

# docsify <small>3.5</small>

[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#quick-start)

<!-- 背景图片 -->

![](_media/bg.png)

<!-- 背景色 -->

![color](#f0f0f0)
```

## 封面作为首页

通常封面和首页是同时出现的，当然你也是当封面独立出来通过设置[onlyCover 选项](zh-cn/configuration.md#onlycover)。

## 多个封面

如果你的文档网站是多语言的，或许你需要设置多个封面。

例如你的文档目录结构如下

```text
.
└── docs
    ├── README.md
    ├── guide.md
    ├── _coverpage.md
    └── zh-cn
        ├── README.md
        └── guide.md
        └── _coverpage.md
```

那么你可以这么配置

```js
window.$docsify = {
  coverpage: ['/', '/zh-cn/']
};
```

或者指定具体的文件名

```js
window.$docsify = {
  coverpage: {
    '/': 'cover.md',
    '/zh-cn/': 'cover.md'
  }
};
```



# 自定义导航栏

## HTML
如果你需要定制导航栏，可以用 HTML 创建一个导航栏。

!> 注意：文档的链接都要以 `#/` 开头。

```html
<!-- index.html -->

<body>
  <nav>
    <a href="#/">EN</a>
    <a href="#/zh-cn/">中文</a>
  </nav>
  <div id="app"></div>
</body>
```

## 配置文件

那我们可以通过 Markdown 文件来配置导航。首先配置 `loadNavbar`，默认加载的文件为 `_navbar.md`。具体配置规则见[配置项#loadNavbar](configuration.md#loadnavbar)。


```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadNavbar: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

```markdown
<!-- _navbar.md -->

* [En](/)
* [简体中文](/zh-cn/)
```

!> 你需要在 `./docs` 目录下创建一个 `.nojekyll` 文件，以防止 GitHub Pages 忽略下划线开头的文件。

`_navbar.md` 加载逻辑和 `sidebar` 文件一致，从每层目录下获取。例如当前路由为 `/zh-cn/custom-navbar` 那么是从 `/zh-cn/_navbar.md` 获取导航栏。

## 嵌套

如果导航内容过多，可以写成嵌套的列表，会被渲染成下拉列表的形式。


```markdown

<!-- _navbar.md -->

* 入门

  * [快速开始](zh-cn/quickstart.md)
  * [多页文档](zh-cn/more-pages.md)
  * [定制导航栏](zh-cn/custom-navbar.md)
  * [封面](zh-cn/cover.md)


* 配置
  * [配置项](zh-cn/configuration.md)
  * [主题](zh-cn/themes.md)
  * [使用插件](zh-cn/plugins.md)
  * [Markdown 配置](zh-cn/markdown.md)
  * [代码高亮](zh-cn/language-highlight.md)
```

效果图

![嵌套导航栏](../_images/zh-cn/nested-navbar.png '嵌套导航栏')

## 整合自定义导航栏与 emoji 插件

如果你使用 [emoji 插件](plugins#emoji):

```html
<!-- index.html -->

<script>
  window.$docsify = {
    // ...
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
```

例如，你可以在自定义导航栏 Markdown 文件中使用旗帜表情：

```markdown
<!-- _navbar.md -->

* [:us:, :uk:](/)
* [:cn:](/zh-cn/)
```



# CDN

推荐使用 [jsDelivr](//cdn.jsdelivr.net)，能及时获取到最新版。你也可以在[cdn.jsdelivr.net/npm/docsify/](cdn.jsdelivr.net/npm/docsify/)中浏览npm包的源代码。

## 获取最新版本

不指定特定版本号时将引入最新版。

```html
<!-- 引入 css -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css">

<!-- 引入 script -->
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.js"></script>
```

也可以使用 [压缩版文件](#compressed-file).

## 获取指定版本

如果担心频繁地版本更新又可能引入未知 Bug，我们也可以使用具体的版本。规则是 `//cdn.jsdelivr.net/npm/docsify@VERSION/`

```html
<!-- 引入 css -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4.10.2/themes/vue.css">

<!-- 引入 script -->
<script src="//cdn.jsdelivr.net/npm/docsify@4.10.2/lib/docsify.js"></script>
```

!> 指定 *VERSION* 为 `latest` 可以强制每次都请求最新版本。

## 压缩版

CSS 的压缩文件位于 `/lib/themes/` 目录下，JS 的压缩文件是原有文件路径的基础上加 `.min` 后缀。

```html
<!-- 引入 css -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css">

<!-- 引入 script -->
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

```html
<!-- 引入 css -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4.10.2/lib/themes/vue.css">

<!-- 引入 script -->
<script src="//cdn.jsdelivr.net/npm/docsify@4.10.2/lib/docsify.min.js"></script>
```

## 其他 CDN

- https://www.bootcdn.cn/docsify/ (支持国内)
- https://cdn.jsdelivr.net/npm/docsify/ (国内外都支持)
- https://cdnjs.com/libraries/docsify
- https://unpkg.com/browse/docsify/





# 文件嵌入

docsify 4.6 开始支持嵌入任何类型的文件到文档里。你可以将文件当成 `iframe`、`video`、`audio` 或者 `code block`，如果是 Markdown 文件，甚至可以直接插入到当前文档里。

这是一个嵌入 Markdown 文件的例子。

```markdown
[filename](../_media/example.md ':include')
```

`example.md` 文件的内容将会直接显示在这里

[filename](../_media/example.md ':include')

你可以查看 [example.md](../_media/example.md ':ignore') 原始内容对比效果。

通常情况下，这样的语法将会被当作链接处理。但是在 docsify 里，如果你添加一个 `:include` 选项，它就会被当作文件嵌入。

## 嵌入的类型

当前，嵌入的类型是通过文件后缀自动识别的，这是目前支持的类型：

* **iframe** `.html`, `.htm`
* **markdown** `.markdown`, `.md`
* **audio** `.mp3`
* **video** `.mp4`, `.ogg`
* **code** other file extension

当然，你也可以强制设置嵌入类型。例如你想将 Markdown 文件当作一个 `code block` 嵌入。
```markdown
[filename](../_media/example.md ':include :type=code')
```

你会看到：

[filename](../_media/example.md ':include :type=code')

## 嵌入代码片段
有时候你并不想嵌入整个文件，可能你只想要其中的几行代码，但你还要在 CI 系统中编译和测试该文件。

```markdown
[filename](../_media/example.js ':include :type=code :fragment=demo')
```

在你的代码文件中，你需要用斜线 `/// [demo]` 包裹该片段（片段的前后都要有）。
你也可以使用 `### [demo]` 来包裹。

示例：

[filename](../_media/example.js ':include :type=code :fragment=demo')

## 标签属性

如果你嵌入文件是一个 `iframe`、`audio` 或者 `video`，你可以给这些标签设置属性。

```markdown
[cinwell website](https://cinwell.com ':include :type=iframe width=100% height=400px')
```

[cinwell website](https://cinwell.com ':include :type=iframe width=100% height=400px')

看见没？你只需要直接写属性就好了，每个标签有哪些属性建议你查看 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)。

## 代码块高亮

如果是嵌入一个代码块，你可以设置高亮的语言，或者让它自动识别。这里是手动设置高亮语言

```markdown
[](../_media/example.html ':include :type=code text')
```

⬇️

[](../_media/example.html ':include :type=code text')

?> 如何高亮代码？你可以查看[这份文档](zh-cn/language-highlight.md)。

## 嵌入Gist

你可以将 Gist 作为 Markdown 内容或代码块嵌入。这是基于[嵌入文件](#embed-files)部分开头的方法，不过是嵌入一个原始的 Gist URL。

?> 这里**不需要**插件或修改配置来使其工作。事实上，即使你使用插件或修改配置来允许加载外部脚本，从 Gist 复制的 "Embed" `script`标签也无法加载。

### 确定Gist的元数据

从查看`gist.github.com`上的 Gist 开始。在本指南中，我们使用这个 Gist：

- https://gist.github.com/anikethsaha/f88893bb563bb7229d6e575db53a8c15

从 Gist 中找出以下内容：

| 字段         | 示例                               | 说明                                                         |
| ------------ | ---------------------------------- | ------------------------------------------------------------ |
| **Username** | `anikethsaha`                      | Gist 的作者                                                  |
| **Gist ID**  | `c2bece08f27c4277001f123898d16a7c` | Gist 的标识符。该标识在 Gist 的有效期内是固定的              |
| **Filename** | `content.md`                       | 在 Gist 中选择一个文件名。即使是单文件的 Gist，也需要这样做才能嵌入 |

你将需要这些来为目标文件建立 _raw gist URL_ 。它的格式如下：

- `https://gist.githubusercontent.com/USERNAME/GIST_ID/raw/FILENAME`

下面是根据示例 Gist 举出的两个例子：

- https://gist.githubusercontent.com/anikethsaha/f88893bb563bb7229d6e575db53a8c15/raw/content.md
- https://gist.githubusercontent.com/anikethsaha/f88893bb563bb7229d6e575db53a8c15/raw/script.js

?> 另外你也可以直接点击 Gist 文件上的 _Raw_ 按钮来获取原始 URL。但是如果你使用这种方法，请确保**删除**`raw/`和文件名之间的修订号，这样 URL 就会与上面的模式一致。否则当更新 Gist 时，你嵌入的 Gist 将**不会**显示最新的内容。

继续下面的一个部分，将 Gist 嵌入到 Docsify 页面上。

### 渲染 Gist 中的 Markdown 内容

这是一个很好的方法，可以将内容**无缝**地嵌入到你的文档中，而不需要将别人发送到外部链接。这种方法很适合在多个仓库的文档网站上重复使用一个 Gist，比如安装说明。这种方法同样适用于您的账户或其他用户拥有的 Gist。

格式：

```markdown
[LABEL](https://gist.githubusercontent.com/USERNAME/GIST_ID/raw/FILENAME ':include')
```

例如：

```markdown
[gist: content.md](https://gist.githubusercontent.com/anikethsaha/f88893bb563bb7229d6e575db53a8c15/raw/content.md ':include')
```

你会看到：

[gist: content.md](https://gist.githubusercontent.com/anikethsaha/f88893bb563bb7229d6e575db53a8c15/raw/content.md ':include')

`LABEL`可以是任何你想要的文本。如果链接被破坏，它可以作为一个 _fallback_ 信息。所以在这里重复文件名是很有用的，万一你需要修复一个破坏的链接。它还可以使嵌入的元素一目了然。

### 渲染 Gist 中的代码块

格式与上一节相同，但是在alt文本中添加了`:type=code`。与[嵌入的类型](#embedded-file-type)部分一样，语法高亮将从扩展名(如`.js`或`.py`)中**推断**，所以你可以将`type`设置为`code`。

格式：

```markdown
[LABEL](https://gist.githubusercontent.com/USERNAME/GIST_ID/raw/FILENAME ':include :type=code')
```

例如：

```markdown
[gist: script.js](https://gist.githubusercontent.com/anikethsaha/f88893bb563bb7229d6e575db53a8c15/raw/script.js ':include :type=code')
```

你会看到：

[gist: script.js](https://gist.githubusercontent.com/anikethsaha/f88893bb563bb7229d6e575db53a8c15/raw/script.js ':include :type=code')



# 文档助手

docsify 扩展了一些 Markdown 语法，可以让文档更易读。

## 强调内容

适合显示重要的提示信息，语法为 `!> 内容`。

```markdown
!> 一段重要的内容，可以和其他 **Markdown** 语法混用。
```

!> 一段重要的内容，可以和其他 **Markdown** 语法混用。

## 普通提示

普通的提示信息，比如写 TODO 或者参考内容等。

```markdown
?> _TODO_ 完善示例
```

?> _TODO_ 完善示例

## 忽略编译链接

有时候我们会把其他一些相对路径放到链接上，你必须告诉 docsify 你不需要编译这个链接。 例如：

```md
[link](/demo/)
```

它将被编译为 `<a href="/#/demo/">link</a>` 并将加载 `/demo/README.md`. 可能你想跳转到 `/demo/index.html`。

现在你可以做到这一点

```md
[link](/demo/ ':ignore')
```

即将会得到 `<a href="/demo/">link</a>` html 代码。不要担心，你仍然可以为链接设置标题。

```md
[link](/demo/ ':ignore title')

<a href="/demo/" title="title">link</a>
```

## 设置链接的 target 属性

```md
[link](/demo ':target=_blank')
[link](/demo2 ':target=_self')
```

## 禁用链接

```md
[link](/demo ':disabled')
```

## 跨域链接

只有当你同时设置了 `routerMode: 'history'` 和 `externalLinkTarget: '_self'` 时，你需要为这些跨域链接添加这个配置。

```md
[example.com](https://example.com/ ':crossorgin')
```

## Github 任务列表

```md
- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim
```

- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim

## 图片处理

### 缩放

```md
![logo](https://docsify.js.org/_media/icon.svg ':size=WIDTHxHEIGHT')
![logo](https://docsify.js.org/_media/icon.svg ':size=50x100')
![logo](https://docsify.js.org/_media/icon.svg ':size=100')

<!-- 支持按百分比缩放 -->

![logo](https://docsify.js.org/_media/icon.svg ':size=10%')
```

![logo](https://docsify.js.org/_media/icon.svg ':size=50x100')
![logo](https://docsify.js.org/_media/icon.svg ':size=100')
![logo](https://docsify.js.org/_media/icon.svg ':size=10%')

### 设置图片的 Class

```md
![logo](https://docsify.js.org/_media/icon.svg ':class=someCssClass')
```

### 设置图片的 ID

```md
![logo](https://docsify.js.org/_media/icon.svg ':id=someCssId')
```

## 设置标题的 id 属性

```md
### 你好，世界！ :id=hello-world
```



# 代码高亮

**docsify**内置的代码高亮工具是 [Prism](https://github.com/PrismJS/prism)。Prism 默认支持的语言如下：

* Markup - `markup`, `html`, `xml`, `svg`, `mathml`, `ssml`, `atom`, `rss`
* CSS - `css`
* C-like - `clike`
* JavaScript - `javascript`, `js`

[添加额外的语法支持](https://prismjs.com/#supported-languages)需要通过CDN添加相应的[语法文件](https://cdn.jsdelivr.net/npm/prismjs@1/components/) :

```html
<script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-bash.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/prismjs@1/components/prism-php.min.js"></script>
```

要使用语法高亮，需要在代码块第一行添加对应的[语言声明](https://prismjs.com/#supported-languages)，示例如下:

````
```html
<p>This is a paragraph</p>
<a href="//docsify.js.org/">Docsify</a>
```

```bash
echo "hello"
```

```php
function getAdder(int $x): int 
{
    return 123;
}
```
````

上面代码的渲染结果:

```html
<p>This is a paragraph</p>
<a href="//docsify.js.org/">Docsify</a>
```

```bash
echo "hello"
```

```php
function getAdder(int $x): int 
{
    return 123;
}
```



# Markdown 配置

内置的 Markdown 解析器是 [marked](https://github.com/markedjs/marked)，可以修改它的配置。同时可以直接配置 `renderer`。

```js
window.$docsify = {
  markdown: {
    smartypants: true,
    renderer: {
      link: function() {
        // ...
      }
    }
  }
}
```

?> 完整配置参数参考 [marked 文档](https://github.com/markedjs/marked#options-1)

当然也可以完全定制 Markdown 解析规则。

```js
window.$docsify = {
  markdown: function(marked, renderer) {
    // ...

    return marked
  }
}
```


## 支持 mermaid

```js
// Import mermaid
//  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.css">
//  <script src="//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>

var num = 0;
mermaid.initialize({ startOnLoad: false });

window.$docsify = {
  markdown: {
    renderer: {
      code: function(code, lang) {
        if (lang === "mermaid") {
          return (
            '<div class="mermaid">' + mermaid.render('mermaid-svg-' + num++, code) + "</div>"
          );
        }
        return this.origin.code.apply(this, arguments);
      }
    }
  }
}
```



# 多页文档

如果需要创建多个页面，或者需要多级路由的网站，在 docsify 里也能很容易的实现。例如创建一个 `guide.md` 文件，那么对应的路由就是 `/#/guide`。

假设你的目录结构如下：

```text
.
└── docs
    ├── README.md
    ├── guide.md
    └── zh-cn
        ├── README.md
        └── guide.md
```

那么对应的访问页面将是

```text
docs/README.md        => http://domain.com
docs/guide.md         => http://domain.com/guide
docs/zh-cn/README.md  => http://domain.com/zh-cn/
docs/zh-cn/guide.md   => http://domain.com/zh-cn/guide
```

## 定制侧边栏

为了获得侧边栏，您需要创建自己的_sidebar.md，你也可以自定义加载的文件名。默认情况下侧边栏会通过 Markdown 文件自动生成，效果如当前的文档的侧边栏。

首先配置 `loadSidebar` 选项，具体配置规则见[配置项#loadSidebar](zh-cn/configuration#loadsidebar)。

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

接着创建 `_sidebar.md` 文件，内容如下

```markdown
<!-- docs/_sidebar.md -->

* [首页](zh-cn/)
* [指南](zh-cn/guide)
```

需要在 `./docs` 目录创建 `.nojekyll` 命名的空文件，阻止 GitHub Pages 忽略命名是下划线开头的文件。

## 嵌套的侧边栏

你可能想要浏览到一个目录时，只显示这个目录自己的侧边栏，这可以通过在每个文件夹中添加一个 `_sidebar.md` 文件来实现。


`_sidebar.md` 的加载逻辑是从每层目录下获取文件，如果当前目录不存在该文件则回退到上一级目录。例如当前路径为 `/zh-cn/more-pages` 则从 `/zh-cn/_sidebar.md` 获取文件，如果不存在则从 `/_sidebar.md` 获取。

当然你也可以配置 `alias` 避免不必要的回退过程。

```html
<script>
  window.$docsify = {
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    }
  }
</script>
```

!> 你可以在一个子目录中创建一个 `README.md` 文件来作为路由的默认网页。

## 用侧边栏中选定的条目名称作为页面标题

一个页面的 `title` 标签是由侧边栏中选中条目的名称所生成的。为了更好的 SEO ，你可以在文件名后面指定页面标题。

```markdown
<!-- docs/_sidebar.md -->
* [Home](/)
* [Guide](guide.md "The greatest guide in the world")
```

## 显示目录

自定义侧边栏同时也可以开启目录功能。设置 `subMaxLevel` 配置项，具体介绍见 [配置项#subMaxLevel](zh-cn/configuration#submaxlevel)。

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true,
    subMaxLevel: 2
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

## 忽略副标题

当设置了 `subMaxLevel` 时，默认情况下每个标题都会自动添加到目录中。如果你想忽略特定的标题，可以给它添加 `<!-- {docsify-ignore} -->` 。

```markdown
# Getting Started

## Header <!-- {docsify-ignore} -->

该标题不会出现在侧边栏的目录中。
```

要忽略特定页面上的所有标题，你可以在页面的第一个标题上使用 `<!-- {docsify-ignore-all} -->` 。

```markdown
# Getting Started <!-- {docsify-ignore-all} -->

## Header

该标题不会出现在侧边栏的目录中。
```

在使用时， `<!-- {docsify-ignore} -->` 和 `<!-- {docsify-ignore-all} -->` 都不会在页面上呈现。



# 插件列表

## 全文搜索 - Search

全文搜索插件会根据当前页面上的超链接获取文档内容，在 `localStorage` 内建立文档索引。默认过期时间为一天，当然我们可以自己指定需要缓存的文件列表或者配置过期时间。

```html
<script>
  window.$docsify = {
    search: 'auto', // 默认值

    search : [
      '/',            // => /README.md
      '/guide',       // => /guide.md
      '/get-started', // => /get-started.md
      '/zh-cn/',      // => /zh-cn/README.md
    ],

    // 完整配置参数
    search: {
      maxAge: 86400000, // 过期时间，单位毫秒，默认一天
      paths: [], // or 'auto'
      placeholder: 'Type to search',

      // 支持本地化
      placeholder: {
        '/zh-cn/': '搜索',
        '/': 'Type to search'
      },

      noData: 'No Results!',

      // 支持本地化
      noData: {
        '/zh-cn/': '找不到结果',
        '/': 'No Results'
      },

      // 搜索标题的最大层级, 1 - 6
      depth: 2,

      hideOtherSidebarContent: false, // 是否隐藏其他侧边栏内容

      // 避免搜索索引冲突
      // 同一域下的多个网站之间
      namespace: 'website-1',

      // 使用不同的索引作为路径前缀（namespaces）
      // 注意：仅适用于 paths: 'auto' 模式
      //
      // 初始化索引时，我们从侧边栏查找第一个路径
      // 如果它与列表中的前缀匹配，我们将切换到相应的索引
      pathNamespaces: ['/zh-cn', '/ru-ru', '/ru-ru/v1'],

      // 您可以提供一个正则表达式来匹配前缀。在这种情况下，
      // 匹配到的字符串将被用来识别索引
      pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/
    }
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/search.min.js"></script>
```

当执行全文搜索时，该插件会忽略双音符（例如，"cafe" 也会匹配 "café"）。像 IE11 这样的旧版浏览器需要使用以下 [String.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) polyfill 来忽略双音符：

```html
<script src="//polyfill.io/v3/polyfill.min.js?features=String.prototype.normalize"></script>
```

## 谷歌统计 - Google Analytics

需要配置 track id 才能使用。

```html
<script>
  window.$docsify = {
    ga: 'UA-XXXXX-Y'
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```

也可以通过 `data-ga` 配置 id。

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js" data-ga="UA-XXXXX-Y"></script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/ga.min.js"></script>
```

## emoji

默认是提供 emoji 解析的，能将类似 `:100:` 解析成 :100:。但是它不是精准的，因为没有处理非 emoji 的字符串。如果你需要正确解析 emoji 字符串，你可以引入这个插件。

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>
```

?> 如果你不想解析成表情符号，可以使用__colon_<span>_</span>或`&#58;`。如果你需要在标题中使用，我们建议使用`&#58;`。例如，`&#58;100:`。

## 外链脚本 - External Script

如果文档里的 script 是内联脚本，可以直接执行；而如果是外链脚本（即 js 文件内容由 `src` 属性引入），则需要使用此插件。

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/external-script.min.js"></script>
```

## 图片缩放 - Zoom image

Medium's 风格的图片缩放插件. 基于 [medium-zoom](https://github.com/francoischalifour/medium-zoom)。

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
```

忽略某张图片

```markdown
![](image.png ":no-zoom")
```

## 在 Github 上编辑

在每一页上添加 `Edit on github` 按钮. 由第三方库提供, 查看 [document](https://github.com/njleonzhang/docsify-edit-on-github)

## 代码即时预览和 jsfiddle 集成

通过这个插件，示例代码可以在页面上即时呈现，让读者可以立即看到预览。当读者展开演示框时，源码和说明就会显示在那里，如果点击`Try in Jsfiddle`按钮，`jsfiddle.net`就会打开这个例子的代码，让读者自己修改代码和测试。

docsify同时支持[Vue](https://njleonzhang.github.io/docsify-demo-box-vue/)和[React](https://njleonzhang.github.io/docsify-demo-box-react/)版本的插件。

## 复制到剪贴板

在所有的代码块上添加一个简单的`Click to copy`按钮来允许用户从你的文档中轻易地复制代码。由[@jperasmus](https://github.com/jperasmus)提供。

```html
<script src="//cdn.jsdelivr.net/npm/docsify-copy-code/dist/docsify-copy-code.min.js"></script>
```

详情可参考 [README.md](https://github.com/jperasmus/docsify-copy-code/blob/master/README.md) 。

## Disqus

Disqus评论系统支持。 https://disqus.com/

```html
<script>
  window.$docsify = {
    disqus: 'shortname'
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/disqus.min.js"></script>
```

## Gitalk

[Gitalk](https://github.com/gitalk/gitalk)，一个现代化的，基于Preact和Github Issue的评论系统。

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.css">

<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/gitalk.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/gitalk/dist/gitalk.min.js"></script>
<script>
  const gitalk = new Gitalk({
    clientID: 'Github Application Client ID',
    clientSecret: 'Github Application Client Secret',
    repo: 'Github repo',
    owner: 'Github repo owner',
    admin: ['Github repo collaborators, only these guys can initialize github issues'],
    // facebook-like distraction free mode
    distractionFreeMode: false
  })
</script>
```

## Pagination

docsify的分页导航插件，由[@imyelo](https://github.com/imyelo)提供。

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-pagination/dist/docsify-pagination.min.js"></script>
```

从[这里](https://github.com/imyelo/docsify-pagination#readme)获取更多信息。

## 字数统计

这是一款为docsify提供文字统计的插件. [@827652549](https://github.com/827652549)提供

它提供了统计中文汉字和英文单词的功能，并且排除了一些markdown语法的特殊字符例如*、-等

**Add JS**

```html
<script src="//unpkg.com/docsify-count/dist/countable.js"></script>
```

**Add settings**

```js
window.$docsify = {
  count:{
    countable:true,
    fontsize:'0.9em',
    color:'rgb(90,90,90)',
    language:'chinese'
  }
}
```

check [document](https://github.com/827652549/docsify-count)

## Tabs

这个插件用来在 Markdown 中显示选项卡。

- [文档和示例](https://jhildenbiddle.github.io/docsify-tabs)

开发：[@jhildenbiddle](https://github.com/jhildenbiddle/docsify-tabs).

## 更多插件

参考 [awesome-docsify](awesome?id=plugins)



# 离线模式

[Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)(PWA) 是一项融合 Web 和 Native 应用各项优点的解决方案。我们可以利用其支持离线功能的特点，让我们的网站可以在信号差或者离线状态下正常运行。
要使用它也非常容易。

## 创建 serviceWorker
这里已经整理好了一份代码，你只需要在网站根目录下创建一个 `sw.js` 文件，并粘贴下面的代码。

*sw.js*

```js
/* ===========================================================
 * docsify sw.js
 * ===========================================================
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0
 * Register service worker.
 * ========================================================== */

const RUNTIME = 'docsify'
const HOSTNAME_WHITELIST = [
  self.location.hostname,
  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net'
]

// The Util Function to hack URLs of intercepted requests
const getFixedUrl = (req) => {
  var now = Date.now()
  var url = new URL(req.url)

  // 1. fixed http URL
  // Just keep syncing with location.protocol
  // fetch(httpURL) belongs to active mixed content.
  // And fetch(httpRequest) is not supported yet.
  url.protocol = self.location.protocol

  // 2. add query for caching-busting.
  // Github Pages served with Cache-Control: max-age=600
  // max-age on mutable content is error-prone, with SW life of bugs can even extend.
  // Until cache mode of Fetch API landed, we have to workaround cache-busting with query string.
  // Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
  if (url.hostname === self.location.hostname) {
    url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
  }
  return url.href
}

/**
 *  @Lifecycle Activate
 *  New one activated when old isnt being used.
 *
 *  waitUntil(): activating ====> activated
 */
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

/**
 *  @Functional Fetch
 *  All network requests are being intercepted here.
 *
 *  void respondWith(Promise<Response> r)
 */
self.addEventListener('fetch', event => {
  // Skip some of cross-origin requests, like those for Google Analytics.
  if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
    // Stale-while-revalidate
    // similar to HTTP's stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale
    // Upgrade from Jake's to Surma's: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
    const cached = caches.match(event.request)
    const fixedUrl = getFixedUrl(event.request)
    const fetched = fetch(fixedUrl, { cache: 'no-store' })
    const fetchedCopy = fetched.then(resp => resp.clone())

    // Call respondWith() with whatever we get first.
    // If the fetch fails (e.g disconnected), wait for the cache.
    // If there’s nothing in cache, wait for the fetch.
    // If neither yields a response, return offline pages.
    event.respondWith(
      Promise.race([fetched.catch(_ => cached), cached])
        .then(resp => resp || fetched)
        .catch(_ => { /* eat any errors */ })
    )

    // Update the cache with the version we fetched (only for ok status)
    event.waitUntil(
      Promise.all([fetchedCopy, caches.open(RUNTIME)])
        .then(([response, cache]) => response.ok && cache.put(event.request, response))
        .catch(_ => { /* eat any errors */ })
    )
  }
})
```

## 注册

现在，到 `index.html` 里注册它。这个功能只能工作在一些现代浏览器上，所以我们需要加个判断。

*index.html*

```html
<script>
  if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js')
  }
</script>
```

## 体验一下

发布你的网站，并开始享受离线模式的魔力吧！:ghost: 当然你现在看到的 docsify 的文档网站已经支持离线模式了，你可以关掉 Wi-Fi 体验一下。







🎉🎉🎉后续再更新吧



