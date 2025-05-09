## 认识jQuery

**介绍**：在学习jQuery之前我们需要知道的重要一点是，jQuery只是一个JavaScript库。jQuery的所有功能都是通过JavaScript访问的，因此，对JavaScript的深刻理解对于理解、构建和调试代码是至关重要的。

> 学习jQuery本质： 就是学习调用这些函DOM数（方法）

## jQuery安装

**概念**：若想要在你的项目中jQuery库，首先必须下载jQuery库并将他添加到你的项目中

- 下载jQuery，在同一个版本下jQuery为开发者提供了两种模式的文件：

	1. 产品模式（Production version）用于实际的网站中，已被精简和压缩，文件以`.min.js`结尾。[下载地址](https://code.jquery.com/jquery-3.5.1.min.js)
	2. 开发模式（Development version） 用于测试和开发代码未压缩、可读，文件以`.js`结尾。[下载地址](https://code.jquery.com/jquery-3.5.1.js)

- 导入到HTML中，因为jQuery是一个JavaScript库，所以你可以使用HTML的`<script>`标签将其引入到页面中。

	1. 使用本地jQuery文件

	```
	<body>
	  <!-- 引入本地 jQuery 文件 -->
	  <script src="./js/jquery.min.js"></script>
	</body>
	```

	

	

	1. 使用jQuery CDN,如果您不希望下载并存放 jQuery，那么也可以通过 CDN（内容分发网络） 引用它。[各个版本CDN地址](https://www.bootcdn.cn/jquery/) ：

	> jQuery CDN支持子资源完整性(SRI)，允许浏览器验证提交的文件没有被修改。该规范目前正在由浏览器实现。
	>
	> 添加新的完整性（integrity）属性将确保您的应用程序获得这种安全性改进。

```
<body>
    <!-- 引入 jQuery CDN  -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
</body>
```





## jQuery基础

**介绍**：当jQuery库被引入到HTML页面后，jQuery库会向 window 对象添加 `jQuery` 和 `$` 的两个属性来公开jQuery库提供的方法和属性。
**注意**：`$` 只是 `jQuery` 的别名，在开发中我们经常使用 `$` 符号，因为它编写起来更简短、更快。

```
<body>
    <!-- 引入 jQuery CDN  -->
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <script>
        console.log(jQuery)
        console.log($)
        console.log(jQuery === $) // true
    </script>
</body>
```





### jQuery的入口函数

**介绍**：我们知道 JavaScript 中的函数方法需要在 HTML 文档渲染完成后才可以使用，如果没有渲染完成，此时的 DOM 树是不完整的，这样在调用一些 JavaScript 代码时就可能报出"undefined"错误。

**概念**：JQuery提供用来检测文档“准备好”之后这种状态的API `$(document).ready()`，从而保证安全地操作页面。

1. ready方法中接受一个函数，函数只有在页面文档对象模型(DOM)准备好，允许JavaScript代码执行时才会运行。
2. window.onload将在整个页面(图像或iframes)，而不仅仅是DOM就绪时运行。

**语法**：

1. 写法一：

```
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});
```





1. 写法二:简写方法（推荐）

```
$(function() {
    console.log( "ready!" );
});
```





### 选择器

**介绍**：jQuery的最基本概念是“选择一些元素并对其进行处理”。jQuery支持大多数CSS3选择器以及一些非标准选择器。
**语法**：`jQuery(selector)` 或 `$(selector)`

- 标签选择器

```
$("div")
```





- 通配符选择器

```
$("*")
```





- ID选择器

```
$("#banner")
```





- 类选择器

```
$(".class")
```





- 关系选择器

```
$(".banner ul.pic li")

$("ul>li") // 子代选择器
```





- 复合选择器

```
$("div,.banner li,.class");
```





- 属性选择器

```
$('[type=email]')
$('input[checked]') // 获取有checked属性的input元素
$('input[name="first_name"]') // name属性为first_name 的 input元素
$('input[name!="first_name"]') // name属性不等于first_name的元素
$('input[name^="first"]') // name属性以first开头的元素
$('input[name$="name"]') // name属性以name结尾的元素
$('input[name*="name"]') // name属性包含name的元素
```





- 表单选择器
	- `:input` ：匹配所有 input, textarea, select 和 button 元素
	- `:text` ：匹配所有的单行文本框
	- `:password`：匹配所有密码框
	- `:radio`：匹配所有单选按钮
	- `:checkbox`：匹配所有复选按钮
	- `:submit`：匹配所有提交按钮
	- `:reset`：匹配所有重置按钮
	- `:button`：匹配所有按钮

```
$(':input')
```





- 可见性选择器
	- `:hidden`： 匹配所有不可见元素
	- `:visible`：匹配所有可见元素

**注意**：

1. 可以将元素视为隐藏的原因有几个：它们的CSSdisplay值为none、它们是的构成元素type=“hidden”、祖先元素被隐藏，因此该元素未显示在页面上。。
2. 带有visibility: hidden或的元素opacity: 0被认为是可见的，因为它们仍然占用布局中的空间。

> 有关完整的选择器参考，请访问api.jquery.com上的选择器文档。

- 上下文选择：()方法可以接受第二个参数作为当前𝑗𝑄𝑢𝑒𝑟𝑦选择器的上下文环境原则指定元素∗∗语法∗∗：‘()方法可以接受第二个参数作为当前*j**Q**u**e**r**y*选择器的上下文环境原则指定元素∗∗语法∗∗：‘( selector, context )`

```
var banner = $('.banner')
$('p',banner) // 获取banner元素内部的所有p元素
```





## jQuery对象属性方法

**概念**：所有通过jquery选择器返回对象都是一个类数组，而不是一个原生的DOM元素，我们称其为jQuery对象。这个对象有自身的属性与方法提供给开发人员便捷开发。

### jQuery对象的属性

- length: 选择器返回jQuery对象中元素的个数

> 确定是否存在元素的最佳方法是测试选择项的.length属性，它会告诉您有多少个元素被选中

```
if ( $( "div.foo" ).length ) {
    // ...
}
```



### jQuery对象方法

#### .css()

**概念**：获取匹配元素集合中的第一个元素的样式属性的值 或 设置每个匹配元素的一个或多个CSS属性。
**取值**：

- .css(‘propertyName’) 获取第一个元素的某个css样式值

```
// 获取第一个元素的background-color样式属性值
$('div').css("background-color");
```





- .css([‘propertyName1’, ‘propertyName2’, …]) 获取第一个元素的多个css样式值

```
// 获取第一个元素的多个样式属性值
$('div').css( ["width", "height", "color", "background-color"] );
```





**赋值**：

- .css( propertyName, value ) 设置每个被选中元素的一个样式属性

```
$('p').css("color","red");
// 支持自加自减运算，自身增加200像素
$( 'div' ).css( "width","+=200" );
```





- .css( propertyName, function(index, style) ) 可以分别设置每个被选中元素的一个样式属性,不同的样式

> 注意:
>
> 1. 参数二函数的返回值会修改当前元素指定样式的值。函数中的 this 是当前原生DOM元素。index 参数表示元素在匹配集合中的索引位置, style 参数表示元素指定样式上原来的样式值。
> 2. 如果设置函数没有返回任何东西(例如. function(index, style){})，或者如果返回undefined，当前的值不会改变。

```
$('div.example').css('width', function(index) {
  return index * 50;
});

$('.test').css('color',function (index,value) {
  console.log(index, value, this)
  return index % 2 ? 'red': 'green'
})
```





- .css( properties ) 传入一个 CSS属性-CSS值 配对的对象，设置每个被选中元素的多个样式属性

```
var cssObj = {
      'background-color' : '#ddd',
      'font-weight' : '',
      'color' : 'rgb(0,40,244)'
    };
$('span').css(cssObj);
```



## 「课堂练习」

**根据所学jQuery知识设置下文css样式**
![练习jQuerycss方法.png](http://edu.yueqian.com.cn/group1/M00/02/DB/wKgA3WAbsemAMN_8AABn1G2n00k856.png)

> 要求：
> 1.让所有文字居中
> 2.把作者毛泽东设灰色底白字(#999,#fff)
> 3.将所有的div和p，统一显示10像素间距
> 4.让id为mp的元素文字大小变成30px,红色加粗字体
> 5.将前四行文字用1px的灰色边框(#ddd)括起来
> 6.将紧跟着div的p标签文字加下划线
> 7.把class为blue的div元素变蓝色字体

代码：

```
    <h1>沁园春·雪</h1>
    <h2>毛泽东</h2>
    <div class="content">
        <div><span>北国风光，千里冰封，万里雪飘。</span>
            <div>望长城内外，惟余莽莽；大河上下，顿失滔滔。</div>
            <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
            <p>须晴日，看红装素裹，分外妖娆。</p>
        </div>
        <p id="mp">江山如此多娇，引无数英雄竞折腰。</p>
    </div>
    <p class="blue">惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
    <div class="blue">一代天骄，成吉思汗，只识弯弓射大雕。</div>
    <p>俱往矣，数风流人物，还看今朝。</p>
```





------

### .prop

**概念**：获取匹配的元素集中第一个元素的属性（property）值或设置每一个匹配元素的一个或多个属性。
**获取**：

- .prop( propertyName ) 获取匹配的元素集中第一个元素的属性（property）值

> 注意：
>
> 1. .prop()方法只获得第一个匹配元素的属性值 。如果元素上没有该属性，或者如果没有匹配的元素。那么该方法会返回undefined值。
> 2. 试图改变通过HTML创建的，或已经在HTML文档中的input元素的type属性（property），在Internet Explorer 6, 7, or 8下将会抛出一个错误。

```
$('input[type=checkbox]').prop('checked') // 返回布尔值表示第一个复选框是否被勾选
```





**赋值**：

- .prop( propertyName, value ) 为匹配的元素设置一个属性（properties）。

```
$("input").prop("disabled", false);
$("input").prop("checked", true);
//  .val() 方法应该用于存取表单 value 值。
$("input").val("someValue");
```





- .prop( properties ) 用 属性 - 值 的对象为匹配的元素来设置元素的多个属性（properties）。

```
$('input').prop({
  disabled: false,
  checked: true
})
```





- .prop( propertyName, function(index, oldPropertyValue) ) 使用函数返回值分别设置每个被选中元素的一个属性，index 参数表示集合中元素的索引位置。oldPropertyValue 参数表示原有的属性值。

```
$("input[type='checkbox']").prop("checked", function( i, val ) {
  return !val;
});
```





#### .text()

**概念**： 得到匹配元素集合中每个元素的文本内容结合，包括他们的后代，或设置匹配元素集合中每个元素的文本内容为指定的文本内容。
**取值**：

- .text() 得到匹配元素集合中每个元素的合并文本，包括他们的后代

> 注意：
>
> 1. .text() 和 .html() 方法不同， .text() 在XML 和 HTML 文档中都能使用。.text() 方法返回一个字符串，包含所有匹配元素的合并文本。
> 2. .text() 方法不能使用在 input 元素或scripts元素上。 input 或 textarea 需要使用 .val() 方法获取或设置文本值。得到scripts元素的值，使用.html()方法

```
<div class="demo-container">
  <div class="demo-box">Demonstration Box</div>
  <ul>
    <li>list item 1</li>
    <li>list <strong>item</strong> 2</li>
  </ul>
</div>
<script>
$('div.demo-container').text() // Demonstration Box list item 1 list item 2
</script>
```





**赋值**：

- .text( textString ) 设置匹配元素集合中每个元素的文本内容为指定的文本内容。

```
$('div.demo-container').text('<p>This is a test.</p>');
/*
代码语句将输出以下 DOM 
<div class="demo-container">
&lt;p&gt;This is a test.&lt;/p&gt;
</div>
*/
```





- .text( function(index, text) ) 用来返回设置文本内容的一个函数。接收元素的索引位置和文本值作为参数。

```
$('ul li').text(function(index) {
  return 'item number ' + (index + 1);
});
```





#### .html()

**概念**： 获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容。（与原生js中的innerHTML类似）
**取值**：

- .html() 取得第一个匹配元素的html内容

```
$('div.demo-container').html();
```



**赋值**：

- .html( htmlString ) 用来设置每个匹配元素的一个HTML 字符串。

```
$('div.demo-container')
  .html('<p>All new content. <em>You bet!</em></p>');
```



- .html( function(index, oldhtml) ) 用来返回设置HTML内容的一个函数。接收元素的索引位置和元素原先的HTML作为参数。

```
$('div.demo-container').html(function() {
  var emph = '<em>' + $('p').length + ' paragraphs!</em>';
  return '<p>All new content for ' + emph + '</p>';
});
```





> 注意：使用 .html() 设置元素的内容，这些元素中的任何内容会完全被新的内容取代。并且，用新的内容替换这些元素前，jQuery会删除子元素其他结构，如数据和事件处理程序。（这样可以防止内存溢出。）

#### .val(v)

**概念**：获取匹配的元素集合中第一个元素的当前值或设置匹配的元素集合中每个元素的值。
**取值**：

- .val() 方法主要用于获取表单元素的值，比如 input, select 和 textarea。对于 `<select multiple="multiple">` 元素, .val()方法返回一个包含每个选择项的数组，如果没有选择性被选中，它返回[]。

```
$('select.foo option:selected').val();    // 获取下拉选择框的值
$('select.foo').val();                    // 获取下拉选择框的值
$('input:checkbox:checked').val();        // 获取复选框的值
$('input:radio[name=bar]:checked').val(); // 获取一组单选框的值
```





**赋值**：
.val( value ) 传入字符串或数组（一般用于复选框）来设定每个匹配元素的值。

```
  <select id="single">
    <option>Single</option>
    <option>Single2</option>
  </select>
 
  <select id="multiple" multiple="multiple">
    <option selected="selected">Multiple</option>
    <option>Multiple2</option>
    <option selected="selected">Multiple3</option>
  </select><br/>
  <input type="checkbox" name="checkboxname" value="check1"/> check1
  <input type="checkbox" name="checkboxname" value="check2"/> check2
  <input type="radio"  name="r" value="radio1"/> radio1
  <input type="radio"  name="r" value="radio2"/> radio2
  <script>
 
    $("#single").val("Single2");
    $("#multiple").val(["Multiple2", "Multiple3"]);
    $("input").val(["check1","check2", "radio1" ]);
 
  </script>
```





.val( function(index, value) ) 一个用返回值来设置value值的函数。函数中 this 指向当前DOM元素。index 参数表示元素在匹配集合中的索引位置, value 参数表示元素上原来的value值。

```
$('input').val(function( i, val ) {
      return val.toUpperCase();
});
```





> jquery大部分方法的无参数时为取值，带参数时为赋值, 绝大多数取值为获取第一个匹配元素的值，而赋值为设置所有匹配元素的值

## 「课堂练习」

> **获取下拉列表的值**
> ![单选多选练习.gif](http://edu.yueqian.com.cn/group1/M00/02/DB/wKgA3WAbtbeAT1e_AABLeslbJBQ484.gif)
> 要求：
>
> 1. 分别创建一个下拉单选框，一个下拉多选框
> 2. 当选择框的值发生改变时将选择框选中的内容渲染到页面上
> 3. 获取选择框的值和结果渲染必须使用jQuery
> 	部分代码：

```
<p></p>

<select id="single">
    <option>单选项1</option>
    <option>单选项2</option>
</select>

<select id="multiple" multiple="multiple">
    <option selected="selected">多选项1</option>
    <option>多选项2</option>
    <option selected="selected">多选项3</option>
</select>
```





------

### 查询获取jQuery元素

**.eq()** 减少匹配元素的集合为指定的索引的哪一个元素。

- eq(n) 一个整数，指示元素的位置，以0为基数。并且n支持负数（表示从后面查找）

```
<ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
    <li>list item 4</li>
    <li>list item 5</li>
</ul>
<script>
$('li').eq(2).css('background-color', 'red');
$('li').eq(-2).css('background-color', 'red');
</script>
```





**.index()**： 从匹配的元素中搜索给定元素的索引值，从0开始计数。

- .index() 获取jQuery对象中第一个元素在同辈元素中的索引值

```
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>

<script>
alert('Index: ' + $('#bar').index());
</script>
```





- .index( selector ) 如果参数是一个选择器， .index() 返回值就是原先元素相对于选择器匹配元素的位置。如果找不到匹配的元素，则 .index() 返回 -1.

```
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>

<script>
alert('Index: ' + $('li').index('#baz'));
</script>
```





- .index( element ) 如果在一组元素上调用 .index() ，并且参数是一个DOM元素或jQuery对象， .index() 返回值就是传入的元素相对于原先集合的位置。

```
<ul>
  <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>
</ul>

<script>
var listItem = document.getElementById('bar');
alert('Index: ' + $('li').index(listItem));
</script>
```





## .show()/.hide()

**概念**：显示/隐藏匹配的元素

```
$('.target').hide();

$('.target').show()
```





### 隐式迭代

**介绍**：对于原生 JS 来说，给某类元素设置样式需要使用循环逐个设置，而在 jQuery 中无需考虑这点，简单示例如下

```
// 原生 JS
var primary = document.querySelectorAll('.list-item');
for(var i = 0, len = primary.length; i < len; i++) {
    primary[i].style.color = 'green';
}
 
// jQuery
$('.list-item').css('color', 'green');
```





**概念**：因为大部分的jQuery方法都支持隐式迭代，隐士迭代的原理是方法的内部存在看不见的遍历，它会对匹配到的所有元素进行循环遍历，执行相应的方法，而无需我们再手动地进行循，方便我们使用。

### 链式操作

**介绍**：使用JavaScript时要对某个元素进行一系列操作，只能一次一次的操作，然而 jQuery 提供了链式操作方式，可以通过`.语法`对同一对象多次设置其属性或方法

```
// 未使用链式操作
$('div').css({color: 'red'}) // 设置所有div元素字体为红色
$('div').text('new content'); // 设置所有div元素内的文本
$('div').addClass("updatedContent"); //在所有的div元素上添加值为updatedContent的class属性
$('div').hide() // 隐藏div元素
// 使用链式操作
$('div').css({color: 'red'}).text('new content').addClass("updatedContent").hide() 
```





**概念**：jQuery实现链式调用的原理是每个方法执行完成后都返回了 this 对象，我们使用JavaScript简单的实现链式操作

```
// 定义类
function jQuery(select) {
    this.el = document.querySelector(select)
}
 
// 定义 css 方法
jQuery.prototype.css = function(style,value) {
   this.el.style[style] = name 
   return this; // 返回 this 对象
}

// 定义 addClass 方法
jQuery.prototype.addClass = function(className) {
    this.el.className += ' ' + className
    return this; // 返回 this 对象
}

// 定义 hidden 方法
jQuery.prototype.hidden = function() {
    this.el.style.display = 'none'
    return this; // 返回 this 对象
}
 
// 新建一个叫 next 的 Person 类
var $demo = new jQuery("#demo")
 
// 链式调用 getName 和 sayHello 方法
$demo.css('color','red').addClass('test').hide()
```





### jquery对象与原生对象的转换

**介绍**：jQuery对象与原生DOM对象是两种不同的对象，DOM对象才能使用DOM方法，jQuery对象只能使用jQuery方法，两者不能混淆使用。

1. jQuery对象转成DOM对象：
	- 方法一：可以通过[index]方法获得相应的DOM对象。
	- 方法而：使用.get(index)方法得到相应的DOM对象

```
  var o=$('.box')[0] // 返回jQuery对象集合中下标为0的单个原生DOM对象
  var a=$('.box').get(0); // 返回jQuery对象集合中下标为0的单个原生DOM对象
  var b=$('.box').get(); // 返回一个数组包含jQuery对象集合中所有原生DOM对象
```





1. DOM对象对象转成jQuery对象:
	- 方法：$(DOM对象) / jQuery(DOM对象)

```
  var box = document.getElementsByClassName('box')[0]
  var $box = $(box ) // DOM转jQuery对象
```