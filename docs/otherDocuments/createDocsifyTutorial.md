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





🎉🎉🎉后续再更新吧



