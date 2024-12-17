# shopify学习

> 作者: `@SouthAki`
>
> 文档开源协议:`GPL-3.0`
>
> desc:*这应该是你能找到的最好的shopify文档,我自己的学习之路就是这篇自己写的文档*

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

4.[Tailwind]() 

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

### 控制流

#### if/unless

> 等同`if/else`

#### case/when

> 跟switch差不多,只是从`switch/case`->`case/when`

## Shopify引入Tailwind

```html
{{ 'tailwind.css' | asset_url | stylesheet_tag }}
```

原子化Tailwind列表查询[点击访问](https://xunyidian.com/t/TailwindcssManual)

## VSCODE代码片段

```json
{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	"Print to console": {
		"scope": "liquid",
		"prefix": "liquid",
		"body": [
			"{% schema %}",
			"{",
			"  \"name\": \"Tech Table\",",
			"  \"settings\": [",
			"    {",
			"      \"type\": \"text\",",
			"      \"id\": \"title\",",
			"      \"label\": \"Title\"",
			"    }",
			"  ],",
			"  \"blocks\": [",
			"    {",
			"      \"name\": \"yourBlocksName\",",
			"      \"type\": \"yourType\",",
			"      \"settings\": [",
			"        {",
			"          \"type\": \"text\",",
			"          \"id\": \"context1\",",
			"          \"label\": \"Context\"",
			"        }",
			"      ]",
			"    }",
			"  ],",
			"  \"presets\": [",
			"    {",
			"      \"name\": \"Name\"",
			"    }",
			"  ]",
			"}",
			"{% endschema %}",
			"",
			"<div></div>",
			"",
			"<script></script>",
			"",
			"<style></style>"
		],
		"description": "Liquid template schema with div, script, and style tags"
	}
}
```

## Liquid定义配置数据

> Shopify的Liquid模版引擎提供了一个`Schema`的特殊标签,允许开发人员定义一些设置
>
> **每个`schema`标签必须包含一个`name`字段和一个`settings`数组**
>
> - `name`：该区块的名称。它会在主题编辑器中显示。
>
> - `class`：附加到区块的CSS类。
>
> - `settings`：一个包含该区块所有设置的数组。每个设置都是一个对象，它有以下可能的字段：
>   - `type`：设置的类型。可能的值包括`text`，`textarea`，`richtext`，`image_picker`，`color`，`font_picker`，`url`，`radio`，`checkbox`，`range`，`select`等。
>   - `id`：设置的唯一标识符。它用于在Liquid模板中引用该设置。
>   - `label`：设置的标签。它会在主题编辑器中显示。
>   - `default`：设置的默认值。
>   - `info`：关于此设置的额外信息，这将在主题编辑器中以工具提示的形式显示。
>   - `placeholder`：输入字段的占位符文本。
>   - `options`：一些类型（例如`radio`和`select`）需要一个`options`数组。每个选项都是一个包含`value`和`label`字段的对象。
>   - `min`，`max`，`step`：`range`类型的设置需要这些字段来定义其最小值，最大值和步长。

对于媒体文件,你可以使用Shopify的`image_picker`或`video_url`的类型设置来让用户上传或者选择文件

这里是常见的预定义的`type`值

- `**text**`: 用于简单的文本输入。

- `**textarea**`: 用于多行文本输入。

- `**image_picker**`: 让用户从他们的文件中选择一个图片。

- `**color**`: 提供一个颜色选择器。

- `**checkbox**`: 提供一个复选框。

- `**radio**`: 提供单选按钮。

- `**select**`: 提供一个下拉选择框。

- `**range**`: 提供一个滑动条选择器。

