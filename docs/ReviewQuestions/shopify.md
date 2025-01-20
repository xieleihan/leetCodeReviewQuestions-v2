# shopify学习

> 作者: `@SouthAki`
>
> 文档开源协议:`GPL-3.0`
>
> desc:*这应该是你能找到的最好的shopify文档,我自己的学习之路就是这篇自己写的文档*

## shopify介绍

![](https://cdn.shopify.com/shopifycloud/shopify_dev/bundles/f6d7f01bee9b232192abf7565b7a823b135476d559f061c7c516af88eaaecc0c.png)

Shopify官方文档[点击访问](https://shopify.dev/docs)

Liquid语言官方文档[点击访问](https://shopify.github.io/liquid/)

或者这个官方文档[点击访问](https://shopify.dev/docs/api/liquid#liquid_basics)

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

![](https://cdn.shopify.com/shopifycloud/shopify_dev/bundles/4c5cdf3e234762937e7dca218acc844ff21897af44404ac418596aadbb01a1bc.png)

> [Liquid 是Shopify](https://www.shopify.com/)创建的一种开源模板语言，用 Ruby 编写。它是 Shopify 主题的骨干，用于在店面上加载动态内容。

### 对象句柄

> 表示商店资源（例如产品、系列、文章和博客）的对象具有用于标识单个资源的句柄。句柄用于构建资源的 URL，或返回资源的属性。
>
> 其他对象如`linklists`、`links`和`settings`也有句柄。
>
> > 根据资源标题自动生成句柄。它们遵循一组规则：
> >
> > - 句柄始终为小写
> > - 空格和特殊字符将被替换为连字符`-`。
> > - 如果有多个连续的空格或特殊字符，则它们将被替换为一个连字符。
> > - 开头的空格或特殊字符将被删除。
> >
> > 名称必须是唯一的，因此如果使用了重复的标题，名称会自动增加一。例如，如果您有两个名为 的产品`Potion`，那么它们的名称将是`potion`和`potion-1`。
> >
> > 创建资源后，更改资源标题不会更新句柄。
> >
> > 您可以在 Shopify 管理中心内修改资源的句柄。这可以在句柄或编辑网站 SEO 部分中完成，具体取决于资源。如果您通过句柄引用资源，则请确保在修改句柄时更新这些引用。
>
> 示例: 
>
> ```liquid
> {{ product.title | handle }}
> ```
>
> 数据:
>
> ```json
> {
>   "product": {
>     "title": "Health potion"
>   }
> }
> ```
>
> output:
>
> ```text
> health-potion
> ```

### 引用句柄

> 所有具有句柄的对象都具有`handle`属性。例如，您可以使用 输出产品的句柄`product.handle`。您可以通过两种方式在对象的父对象中通过其句柄引用对象：
>
> - 方括号表示法`[ ]`：接受用引号括起来的句柄`'`、Liquid 变量或对象引用。
> - 点符号`.`：接受不带引号的句柄。
>
> 笔记
>
> 通过句柄引用对象类似于[通过索引引用数组元素](https://shopify.dev/docs/api/liquid/basics#array)。
>
> > 示例:
> >
> > ```liquid
> > 'About us' page URL: {{ pages['about-us'].url }}
> > Enable product suggestions: {{ settings.predictive_search_enabled }}
> > ```
> >
> > 数据: 
> >
> > ```json
> > {
> >   "settings": {
> >     "predictive_search_enabled": true
> >   }
> > }
> > ```
> >
> > output:
> >
> > ```text
> > 'About us' page URL: /pages/about-us
> > Enable product suggestions: true
> > ```
> >
> > 

### 运算符

- 基本的basic运算符

- 包含`contains`(用于测试字符串中的子字符串显示),也可以测试字符串阵列中的字符串显示

- `startwith`和`endwith`:检测字符串是否以特定的子字符串开头或结束

- 当在标签中使用多个运算符时，运算符将从右到左进行评估，并且您不能更改此顺序。

- 括号`()`不是 Liquid 标签中的有效字符。如果您尝试将它们添加到组运算符中，则您的标签将无法呈现。

  > 示例:
  >
  > ```liquid
  > {% unless true and false and false or true %}
  >   This evaluates to false, since Liquid checks tags like this:
  > 
  >   true and (false and (false or true))
  >   true and (false and true)
  >   true and false
  >   false
  > {% endunless %}
  > ```
  >
  > output:
  >
  > ```text
  > This evaluates to false, since Liquid checks tags like this:
  > 
  >   true and (false and (false or true))
  >   true and (false and true)
  >   true and false
  >   false
  > ```
  >
  > 

### 类型

- String
- Number
- Boolean
- Array
- Dict
- Datetime
- Null

*你可以通过assign 或capture 标记来初始化Liquid 变量*

### 真假

在`Liquid`中,只有`false`和`nil`会判定为false

| Value        | Truthy | Falsy |
| ------------ | :----: | :---: |
| true         |   ✓    |       |
| false        |        |   ✓   |
| nil          |        |   ✓   |
| empty string |   ✓    |       |
| 0            |   ✓    |       |
| integer      |   ✓    |       |
| float        |   ✓    |       |
| array        |   ✓    |       |
| empty array  |   ✓    |       |
| page         |   ✓    |       |
| empty object |   ✓    |       |

> 例子:
>
> 因为`nil`和`false`是唯一的假值，所以你需要小心检查 Liquid 中的值。值可能不是你期望的格式，但仍然是真值。
>
> 例如，空字符串是真值，因此您需要用 检查它们是否为空`blank`。对象也是真值，因此您需要检查您引用的对象是否为。`EmptyDrop``empty`

### 空格控制

> 即使不输出文本，Liquid 的任何一行都会在渲染内容中输出一行。通过在 Liquid 标签中包含连字符，您可以删除 Liquid 在渲染时生成的任何空格。
>
> 如果您只想删除 Liquid 标签一侧的空格，那么您可以在开始或结束标签中包含连字符。
>
> > ```liquid
> > {%- if collection.products.size > 0 -%}
> > The '{{ collection.title }}' collection contains the following types of products:
> > 
> > {% for type in collection.all_types -%}
> >   {% unless type == blank -%}
> >     - {{ type }}
> >   {%- endunless -%}
> > {%- endfor %}
> > {%- endif -%}
> > ```
> >
> > 数据:
> >
> > ```json
> > {
> >   "collection": {
> >     "all_types": [
> >       "Health",
> >       "Health & Beauty",
> >       "Invisibility",
> >       "Water"
> >     ],
> >     "products": [],
> >     "title": "Sale potions"
> >   }
> > }
> > ```
> >
> > output:
> >
> > ```text
> > The 'Sale potions' collection contains the following types of products:
> > 
> > - Health
> > - Health & Beauty
> > - Invisibility
> > - Water
> > ```

## 标签

![](https://cdn.shopify.com/shopifycloud/shopify_dev/bundles/dfe17c5a1e28c295d5d4e61d3cf9cd2829d1e5c7073d799d01fde26d8995382f.png)

### 用法

> 标签用花括号百分比分隔符包裹`{% %}`。分隔符内的文本在呈现时不会产生可见的输出。
>
> 在下面的例子中，`if`标签定义了要满足的条件。如果`product.available`返回`true`，则显示价格。否则，显示“售罄”消息。
>
> > ```liquid
> > {% if product.available %}
> >   Price: $99.99
> > {% else %}
> >   Sorry, this product is sold out.
> > {% endif %}
> > ```
> >
> > ```json
> > {
> >   "product": {
> >     "available": true
> >   }
> > }
> > ```

### 带参数的标签

> 某些标签可以接受参数。有些标签有必需参数，有些则是可选参数。例如，标签`for`可以接受`limit`在特定索引处退出循环之类的参数。
>
> ```liquid
> {% assign numbers = '1,2,3,4,5' | split: ',' %}
> 
> {% for item in numbers limit:2 -%}
>   {{ item }}
> {%- endfor %}
> ```
>
> output:
>
> ```text
> 1
> 2
> ```

### 条件标签

确定liquid是否执行

#### `if`

```liquid
{% if condition %}
  expression
{% endif %}
```

#### `elsif`

```liquid
您可以使用elsif标签来检查多种条件。
```

### 控制流

#### if/unless

> 等同`if/else`

#### case/when

> 跟switch差不多,只是从`switch/case`->`case/when`

## HTML标签

HTML 标签使用 Shopify 特定的属性呈现 HTML 元素。

### 形式

> 生成 HTML`<form>`标签，包括`<input>`将表单提交到特定端点所需的任何标签。
>
> 由于 Shopify 模板中有许多不同的表单类型，因此`form`标签需要指定类型。根据表单类型，可能需要附加参数。您可以指定以下表单类型：
>
> - [`activate_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-activate_customer_password)
> - [`cart`](https://shopify.dev/docs/api/liquid/tags/form#form-cart)
> - [`contact`](https://shopify.dev/docs/api/liquid/tags/form#form-contact)
> - [`create_customer`](https://shopify.dev/docs/api/liquid/tags/form#form-create_customer)
> - [`currency`](https://shopify.dev/docs/api/liquid/tags/form#form-currency)
> - [`customer`](https://shopify.dev/docs/api/liquid/tags/form#form-customer)
> - [`customer_address`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_address)
> - [`customer_login`](https://shopify.dev/docs/api/liquid/tags/form#form-customer_login)
> - [`guest_login`](https://shopify.dev/docs/api/liquid/tags/form#form-guest_login)
> - [`localization`](https://shopify.dev/docs/api/liquid/tags/form#form-localization)
> - [`new_comment`](https://shopify.dev/docs/api/liquid/tags/form#form-new_comment)
> - [`product`](https://shopify.dev/docs/api/liquid/tags/form#form-product)
> - [`recover_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-recover_customer_password)
> - [`reset_customer_password`](https://shopify.dev/docs/api/liquid/tags/form#form-reset_customer_password)
> - [`storefront_password`](https://shopify.dev/docs/api/liquid/tags/form#form-storefront_password)

```liquid
{% form 'form_type' %}
  content
{% endform %}
```

> 'form_type': 所需表单类型的名称
>
> 'content': 表单内容

### 风格

> `<style>`生成具有属性的HTML标签`data-shopify`
>
> 语法:
>
> ```liquid
> {% style %}
>   CSS_rules
> {% endstyle %}
> ```
>
> 示例
>
> ```liquid
> {% style %}
>   .h1 {
>     color: {{ settings.colors_accent_1 }};
>   }
> {% endstyle %}
> ```
>
> ```json
> {
>   "settings": {
>     "colors_accent_1": "#121212"
>   }
> }
> ```
>
> output:
>
> ```text
> <style data-shopify>
>   .h1 {
>     color: #121212;
>   }
> </style>
> ```

### 迭代标签

#### for

> 循环最多可进行 50 次迭代`for`。如果您需要迭代超过 50 个项目，请使用 [`paginate`标签](https://shopify.dev/docs/api/liquid/tags/paginate)将项目拆分到多个页面上。
>
> 语法:
>
> ```liquid
> {% for variable in array %}
>   expression
> {% endfor %}
> ```
>
> `variable`:变量
>
> 示例:
>
> ```liquid
> {% for product in collection.products -%}
>   {{ product.title }}
> {%- endfor %}
> ```
>
> ```json
> {
>   "collection": {
>     "products": [
>       {
>         "title": "Draught of Immortality"
>       },
>       {
>         "title": "Glacier ice"
>       },
>       {
>         "title": "Health potion"
>       },
>       {
>         "title": "Invisibility potion"
>       }
>     ]
>   }
> }
> ```
>
> output:
>
> ```text
> Draught of Immortality
> Glacier ice
> Health potion
> Invisibility potion
> ```
>
> **用于标签参数**
>
> ```liquid
> {% for product in collection.products limit: 2 -%}
>   {{ product.title }}
> {%- endfor %}
> ```
>
> ```json
> {
>   "collection": {
>     "products": [
>       {
>         "title": "Draught of Immortality"
>       },
>       {
>         "title": "Glacier ice"
>       },
>       {
>         "title": "Health potion"
>       },
>       {
>         "title": "Invisibility potion"
>       }
>     ]
>   }
> }
> ```
>
> 
>
> 使用参数限制迭代次数`limit`。
>
> output:
>
> ```text
> Draught of Immortality
> Glacier ice
> ```
>
> **抵消(指根据指定的索引开始)**
>
> 语法:
>
> ```liquid
> {% for variable in array offset: number %}
>   expression
> {% endfor %}
> ```
>
> 示例:
>
> ```liquid
> {% for product in collection.products offset: 2 -%}
>   {{ product.title }}
> {%- endfor %}
> ```
>
> ```json
> {
>   "collection": {
>     "products": [
>       {
>         "title": "Draught of Immortality"
>       },
>       {
>         "title": "Glacier ice"
>       },
>       {
>         "title": "Health potion"
>       },
>       {
>         "title": "Invisibility potion"
>       }
>     ]
>   }
> }
> ```
>
> output:
>
> ```text
> Health potion
> Invisibility potion
> ```
>
> **范围**
>
> 语法
>
> ```liquid
> {% for variable in (number..number) %}
>   expression
> {% endfor %}
> ```
>
> 您可以指定要迭代的数字范围，而不必迭代数组中的特定项目。
>
> 示例:
>
> ```liquid
> {% for i in (1..3) -%}
>   {{ i }}
> {%- endfor %}
> 
> {%- assign lower_limit = 2 -%}
> {%- assign upper_limit = 4 -%}
> 
> {% for i in (lower_limit..upper_limit) -%}
>   {{ i }}
> {%- endfor %}
> ```
>
> output:
>
> ```text
> 1
> 2
> 3
> 
> 2
> 3
> 4
> ```
>
> **反转**
>
> 语法:
>
> ```liquid
> {% for variable in array reversed %}
>   expression
> {% endfor %}
> ```
>
> 您可以使用参数以相反的顺序进行迭代`reversed`。
>
> 示例:
>
> ```liquid
> {% for product in collection.products reversed -%}
>   {{ product.title }}
> {%- endfor %}
> ```
>
> ```json
> {
>   "collection": {
>     "products": [
>       {
>         "title": "Draught of Immortality"
>       },
>       {
>         "title": "Glacier ice"
>       },
>       {
>         "title": "Health potion"
>       },
>       {
>         "title": "Invisibility potion"
>       }
>     ]
>   }
> }
> ```
>
> output:
>
> ```text
> Invisibility potion
> Health potion
> Glacier ice
> Draught of Immortality
> ```

### forloop

### else

> 语法:
>
> ```liquid
> {% for variable in array %}
>   first_expression
> {% else %}
>   second_expression
> {% endfor %}
> ```
>
> 允许您指定在[`for`循环](https://shopify.dev/docs/api/liquid/tags/for)长度为零时执行的默认表达式。
>
> 示例:
>
> ```liquid
> {% for product in collection.products %}
>   {{ product.title }}<br>
> {% else %}
>   There are no products in this collection.
> {% endfor %}
> ```
>
> ```json
> {
>   "collection": {
>     "products": []
>   }
> }
> ```
>
> output:
>
> ```text
> There are no products in this collection.
> ```

### break

停止`for`循环迭代

语法

```liquid
{% break %}
```

示例:

```liquid
{% for i in (1..5) -%}
  {%- if i == 4 -%}
    {% break %}
  {%- else -%}
    {{ i }}
  {%- endif -%}
{%- endfor %}
```

output:

```text
1
2
3
```

### continue

> 导致for循环跳到下一个迭代
>
> ```liquid
> {% continue %}
> ```
>
> 示例:
>
> ```liquid
> {% for i in (1..5) -%}
>   {%- if i == 4 -%}
>     {% continue %}
>   {%- else -%}
>     {{ i }}
>   {%- endif -%}
> {%- endfor %}
> ```
>
> output:
>
> ```text
> 1
> 2
> 3
> 5
> ```

### cycle

> [`for`循环遍历一组字符串，并在循环](https://shopify.dev/docs/api/liquid/tags/for)的每次迭代中一次输出一个。
>
> 该`cycle`标签必须在循环内使用`for`。
>
> *使用`cycle`标签以可预测的模式输出文本。例如，将奇数/偶数类别应用于表中的行。*
>
> 语法:
>
> ```liquid
> {% cycle string, string, ... %}
> ```
>
> 示例:
>
> ```liquid
> {% for i in (1..4) -%}
>   {% cycle 'one', 'two', 'three' %}
> {%- endfor %}
> ```
>
> output:
>
> ```text
> one
> two
> three
> one
> ```

### 语法标签

#### 注释

防止表达式被呈现或输出。

标签内的任何文本都`comment`不会被输出，并且任何 Liquid 代码都将被解析，但不会执行。

语法:

```liquid
{% comment %}
  content
{% endcomment %}
```

内联注释可防止标签内的表达式`{% %}`被呈现或输出。

您可以使用内联注释标签来注释您的代码，或者暂时阻止代码中的逻辑执行。

您可以创建多行内联注释。但是，标记中的每一行都必须以`#`, 开头，否则会出现语法错误。

```liquid
{% # content %}
```

### echo

输出一个表达式

使用标签与将表达式括在花括号（和）`echo`中相同。但是，与花括号方法不同，您可以在[标签](https://shopify.dev/docs/api/liquid/tags/liquid)内使用标签。`{{``}}``echo`[`liquid`](https://shopify.dev/docs/api/liquid/tags/liquid)

语法:

```liquid
{% echo product.title %}

{% liquid
  echo product.price | money
%}
```

output:

```text
Health potion

$10.00
```

### liquid

允许你拥有一个Liquid块,每个标签上没有分隔符

因为标签没有分隔符,所以每个标签需要占用自己的行

使用echo标签输出liquid标签内的表达式

```liquid
{% liquid
  # Show a message that's customized to the product type

  assign product_type = product.type | downcase
  assign message = ''

  case product_type
    when 'health'
      assign message = 'This is a health potion!'
    when 'love'
      assign message = 'This is a love potion!'
    else
      assign message = 'This is a potion!'
  endcase

  echo message
%}
```

```json
{
  "product": {
    "type": null
  }
}
```

output:

```text
This is a health potion!
```

### Raw

将任何Liquid代码输出为文本,而不是渲染它

语法:

```liquid
{% raw %}
  expression
{% endraw %}
```

### 渲染标签参数

```liquid
{% render 'filename' for array as item %}
```



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

注意,在`Snippets`中,不用`schema`

## shopify内部视频播放

```liquid
 {% assign shopify_video = section.settings.video.sources | where: 'format', 'mp4' | first %}
          {{ shopify_video }}
          <video controls src="{{ shopify_video.url }}"></video>
```

有效,唯一



