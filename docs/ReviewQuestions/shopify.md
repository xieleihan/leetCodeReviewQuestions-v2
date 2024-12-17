# shopify学习

> 作者: `@SouthAki`

## shopify介绍

Shopify官方文档[点击访问](https://shopify.dev/docs)

Liquid语言官方文档[点击访问](https://shopify.github.io/liquid/)

## Shopify初始化

```bash
shopify theme init
```

```bash
shopify theme dev --store {your_store_name}
```

*以上的命令,基于电脑环境已经安装Nodejs*

## shopify目录功能

1. `assets`目录

   > 作用: 存放所有与主题相关的静态资源,如CSS,JavaScript,图片字体等

2. `config`目录

   > 作用: 存放shopify主题的配置文件,控制主题设置
   >
   > 常见文件:
   >
   > - `settings_schema.json`:这个文件定义了主题设置页面上可供修改的选项,可以在shopify管理后台主题设置中看到这些选项
   > - `settings_data.json`:存储实际设置的主题数据,包括颜色网站标志等

3. `layout`目录

   > 作用: 存放主题的主要布局模版文件,这些文件定义了页面的结构和基础框架
   >
   > 常见文件:
   >
   > - `theme.liquid`:这是最主要的布局文件,包含主要的`html`,头部信息,导航栏,页脚,通常会引入其他文件

4. `locales`目录

   > 作用: 存放多语言支持的相关本地化文件,文件内的JSON数据包括了页面中显示的文字,可以根据需要进行翻译

5. `sections`目录

   > 作用:存放页面的区块或模块,每个文件表示一个独立的页面部分,通常会做为`theme.liquid`文件中的一个部分进行渲染

6. `snippets`目录

   > 作用: 存放可重用的,较小的代码片段,可以在模版中使用`{% includes 'snippet_name' %}`

7. `template`目录

   > 作用: 存放主题的模版文件,每个模版对应一个特定的类型

## 技术栈

1.[Liquid](https://shopify.github.io/liquid/?shpxid=d2579710-C35F-42CA-6D30-11B64F8262FF)

2.[Ruby](https://www.ruby-lang.org/en/)

3.[三大技术栈]()

## Liquid

> [Liquid 是Shopify](https://www.shopify.com/)创建的一种开源模板语言，用 Ruby 编写。它是 Shopify 主题的骨干，用于在店面上加载动态内容。

### 运算符

- 基本的basic运算符
- 包含`contains`(用于测试字符串中的子字符串显示),也可以测试字符串阵列中的字符串显示
- `startwith`和`endwith`:检测字符串是否以特定的子字符串开头或结束

### 类型

- String
- Number
- Boolean
- Array
- Dict
- Datetime
- Null

### 真假

在`Liquid`中,只有`false`和`nil`会判定为false



