# TypeScript

> `TypeScript`是`JavaScript`的超集
>
> 文档地址:[点击访问](https://www.typescriptlang.org/)
>
> ![](https://fastly.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg)
>
> **优点**:
>
> 1. 规范开发
> 2. 可以有预警提示

## 安装

```bash
npm install -g typescript
```

## Hello World

```typescript
// 定义变量
// path: helloworld.ts
let str: string = "Hello World!";
console.log(str);
```

```bash
# 编译
tsc helloworld.ts
```

## 初始化

1. 创建`web`目录

	```text
	|--web
	  |-- dist
	  |-- src
	  |---- index.ts
	  |--tsconfig.json
	```

2. 初始化

	```bash
	tsc --init
	```

	配置`tsconfig.json`

	```json
	{
	   "compilerOptions": {
	     "module": "system",
	     "noImplicitAny": true,
	     "removeComments": true,
	     "preserveConstEnums": true,
	     "outFile": "./dist/main.js",
	     "outDir": "dist",
	     "sourceMap": true
	  
	  },
	   "include": [ 
	     "src/*.*"
	  
	  ],
	   "exclude": [
	     "node_modules", 
	     "**/*.spec.ts"
	  
	  ]
	}
	```

3. 编译ts文件

	> 在终端执行
	>
	> ```bash
	> tsc index.ts #直接生成index.js文件
	> tsc --watch # 监视src目录下的所有ts文件,输出在dist目录的main.js中
	> ```
	>
	> 

## ts变量类型

1. **`any`**:任意类型,可以赋予任意类型的值

2. **`number`**:双精度64位浮点值,可以用来存储整数和分数

3. **`string`**:一个字符系列,使用单引号`''`和双引号`""`来表示

4. **`boolean`**:布尔类型,表示逻辑值`true`或者`false`

5. **`Array`**:声明是数组的时候,无需指定声明,只需要**在元素类型的后面加上`[]`就行,或者使用数组泛型`Array<xxx>`**

6. **`Tuple`**:元组,用来表示已知元素数量和类型的数组,各元素的类型不必相同,对应位置的类型需要相同

	```typescript
	let x:[string,number];
	x = ['Robot',1] // true
	x = [1,'Robot'] // Error
	console.log(x[0]); // 输出Robot
	```

7. `enum`:枚举,用于定义数值的集合

	```typescript
	enum Color {red,green,blue};
	let c: Color = Color.blue;
	console.log(c); // output: 2
	```

8. `void`:用于标识方法返回值的类型,表示该方法没有返回值

9. `null`:表示对象值缺失

10. `undefined`:用于初始化一个未定义的值

11. `never`:`never`是其他的类型(包括`null`和`undefined`的子类,代表从不会出现的值)

> 注意:**`Typescript`和`JavaScript`没有整数类型**

## ts变量声明

> 与`JavaScript`差不多,有三个规则
>
> 1. 变量名可以是数字和字母,下划线,`$`符号
> 2. 除了`_`和`$`符号外,不可以包含其他空格,包括空格
> 3. 变量名不可以是数字开头
>
> 变量使用需要声明,使用`var`
>
> 声明变量的类型及初始值：
>
> ```typescript
> var [变量名] : [类型] = 值;
> ```
>
> 例如：
>
> ```typescript
> var uname:string = "Runoob";
> ```
>
> 声明变量的类型，但没有初始值，变量值会设置为 undefined：
>
> ```typescript
> var [变量名] : [类型];
> ```
>
> 例如：
>
> ```typescript
> var uname:string;
> ```
>
> 声明变量并初始值，但不设置类型，该变量可以是任意类型：
>
> ```typescript
> var [变量名] = 值;
> ```
>
> 例如：
>
> ```typescript
> var uname = "Runoob";
> ```
>
> 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
>
> ```typescript
> var [变量名];
> ```
>
> 例如：
>
> ```typescript
> var uname;
> ```
>
> **注意：**变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。

### 类型断言(ts assertion)

> 类型断言可以用来指定一个值的类型
>
> 允许变量从一种类型转变成另外一个类型
>
> 语法格式
>
> ```typescript
> <type>value
> ```
>
> 或是
>
> ```typescript
> value as type
> ```
>
> 示例
>
> ```typescript
> var str = '1';
> var str2:number = <number><any> str // str和str2是string类型
> console.log(str2)
> ```
>
> > 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T。这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 any。
> >
> > 它之所以不被称为**类型转换**，是因为转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法。
> >
> > 编译后，以上代码会生成如下 JavaScript 代码：
> >
> > ```javascript
> > var str = '1';
> > var str2 = str;  //str、str2 是 string 类型
> > console.log(str2);
> > ```

### 类型推断

> 跟`JavaScript`一样,当我们没有声明类型的时候,`typescript`会根据词法上下文去推断类型
>
> 示例
>
> ```typescript
> var num = 2; // 没有声明类型,但是当我们赋值2的时候,类型推断为number
> console.log(num)
> num = '12' // 报错
> // 因为上面赋值的时候已经给了类型,所以赋值字符串会出错
> ```

### 变量作用域(词法环境)

> `typescript`有三种作用域
>
> - 全局作用域:*可以在全文中使用*
> - 类作用域:*这个变量称为字段,类变量声明在一个类中,但是在类外面,这个变量可以通过类的对象来访问*
> - 局部作用域:*只能在声明的代码块中去使用*

## ts运算符

`TypeScript` 主要包含以下几种运算：

- 算术运算符
- 逻辑运算符
- 关系运算符
- 按位运算符
- 赋值运算符
- 三元/条件运算符
- 字符串运算符
- 类型运算符

### 算术运算符

| 运算符 | 描述         | 例子  | x 运算结果 | y 运算结果 |
| :----- | :----------- | :---- | :--------- | :--------- |
| +      | 加法         | x=y+2 | 7          | 5          |
| -      | 减法         | x=y-2 | 3          | 5          |
| *      | 乘法         | x=y*2 | 10         | 5          |
| /      | 除法         | x=y/2 | 2.5        | 5          |
| %      | 取模（余数） | x=y%2 | 1          | 5          |
| ++     | 自增         | x=++y | 6          | 6          |
 |          |            | x=y++  | 5            | 6     | 
| --     | 自减         | x=--y | 4          | 4          |
|           |            | x=y--  | 5            | 4     | 

### 关系运算符

| 运算符 | 描述       | 比较 | 返回值  |
| :----- | :--------- | :--- | :------ |
| ==     | 等于       | x==8 | *false* |
|        |            | x==5 | *true*  |
| !=     | 不等于     | x!=8 | *true*  |
| >      | 大于       | x>8  | *false* |
| <      | 小于       | x<8  | *true*  |
| >=     | 大于或等于 | x>=8 | *false* |
| <=     | 小于或等于 | x<=8 | *true*  |

### 逻辑运算符

| 运算符 | 描述 | 例子                      |
| :----- | :--- | :------------------------ |
| &&     | and  | (x < 10 && y > 1) 为 true |
| \|\|   | or   | (x==5 \|\| y==5) 为 false |
| !      | not  | !(x==y) 为 true           |

### 位运算符

| 运算符 | 描述                                                         | 例子        | 类似于       | 结果 | 十进制 |
| :----- | :----------------------------------------------------------- | :---------- | :----------- | :--- | :----- |
| &      | AND，按位与处理两个长度相同的二进制数，两个相应的二进位都为 1，该位的结果值才为 1，否则为 0。 | x = 5 & 1   | 0101 & 0001  | 0001 | 1      |
| \|     | OR，按位或处理两个长度相同的二进制数，两个相应的二进位中只要有一个为 1，该位的结果值为 1。 | x = 5 \| 1  | 0101 \| 0001 | 0101 | 5      |
| ~      | 取反，取反是一元运算符，对一个二进制数的每一位执行逻辑反操作。使数字 1 成为 0，0 成为 1。 | x = ~ 5     | ~0101        | 1010 | -6     |
| ^      | 异或，按位异或运算，对等长二进制模式按位或二进制数的每一位执行逻辑异按位或操作。操作的结果是如果某位不同则该位为 1，否则该位为 0。 | x = 5 ^ 1   | 0101 ^ 0001  | 0100 | 4      |
| <<     | 左移，把 << 左边的运算数的各二进位全部左移若干位，由 << 右边的数指定移动的位数，高位丢弃，低位补 0。 | x = 5 << 1  | 0101 << 1    | 1010 | 10     |
| >>     | 右移，把 >> 左边的运算数的各二进位全部右移若干位，>> 右边的数指定移动的位数。 | x = 5 >> 1  | 0101 >> 1    | 0010 | 2      |
| >>>    | 无符号右移，与有符号右移位类似，除了左边一律使用0 补位。     | x = 2 >>> 1 | 0010 >>> 1   | 0001 | 1      |

### 赋值运算符

| 运算符                  | 例子   | 实例      | x 值   |
| :---------------------- | :----- | :-------- | :----- |
| = (赋值)                | x = y  | x = y     | x = 5  |
| += (先进行加运算后赋值) | x += y | x = x + y | x = 15 |
| -= (先进行减运算后赋值) | x -= y | x = x - y | x = 5  |
| *= (先进行乘运算后赋值) | x *= y | x = x * y | x = 50 |
| /= (先进行除运算后赋值) | x /= y | x = x / y | x = 2  |

------

### 三元运算符 (?)

```typescript
Test ? expr1 : expr2
```

### 类型运算符

### typeof 运算符

typeof 是一元运算符，返回操作数的数据类型。

查看以下实例:

```typescript
var num = 12  console.log(typeof num);   //输出结果: number
```



使用 tsc 命令编译以上代码得到如下 `JavaScript`代码：

```typescript
var num = 12; console.log(typeof num); //输出结果: number
```



以上实例输出结果如下：

```
number
```

### instanceof

`instanceof` 运算符用于判断对象是否为指定的类型，后面章节我们会具体介绍它。

### 负号运算符(-)

> 更改操作数的符号

## ts条件语句

在 `TypeScript` 中，我们可使用以下条件语句：

- **if 语句** - 只有当指定条件为 true 时，使用该语句来执行代码
- **if...else 语句** - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
- **if...else if....else 语句**- 使用该语句来选择多个代码块之一来执行
- **switch 语句** - 使用该语句来选择多个代码块之一来执行

### if语句

![Perl 中的 if 语句](https://www.runoob.com/wp-content/uploads/2014/09/if_statement.jpg)

### if...else语句

![img](https://www.runoob.com/wp-content/uploads/2014/09/if_else_statement.jpg)

### if...else if....else 语句

### switch…case 语句

![C 中的 switch 语句](https://www.runoob.com/wp-content/uploads/2014/09/switch_statement.jpg)

## ts循环

> `for循环`,`for...in循环(用于一组集合或者列表的迭代输出)`,`for…of` 、`forEach`、`every` 和 `some` 循环

## ts Number对象

> 与`JavaScript`类似
>
> 语法
>
> ```typescript
> var num = new Number(value);
> ```
>
> 注意,如果一个参数不能转换为一个数字,`return NaN;`

### Number 对象属性

下表列出了 Number 对象支持的属性：

| 序号 |                         属性 & 描述                          |
| :--: | :----------------------------------------------------------: |
|  1.  | **MAX_VALUE**可表示的最大的数，MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。 |
|  2.  | **MIN_VALUE**可表示的最小的数，即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE，MIN_VALUE 的值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。 |
|  3.  |              **NaN**非数字值（Not-A-Number）。               |
|  4.  | **NEGATIVE_INFINITY**负无穷大，溢出时返回该值。该值小于 MIN_VALUE。 |
|  5.  | **POSITIVE_INFINITY**正无穷大，溢出时返回该值。该值大于 MAX_VALUE。 |
|  6.  | **prototype**Number 对象的静态属性。使您有能力向对象添加属性和方法。 |
|  7.  |    **constructor**返回对创建此对象的 Number 函数的引用。     |

```typescript
console.log("TypeScript Number 属性: "); 
console.log("最大值为: " + Number.MAX_VALUE); 
console.log("最小值为: " + Number.MIN_VALUE); 
console.log("负无穷大: " + Number.NEGATIVE_INFINITY); 
console.log("正无穷大:" + Number.POSITIVE_INFINITY);
```

```text
输出结果
TypeScript Number 属性:
最大值为: 1.7976931348623157e+308
最小值为: 5e-324
负无穷大: -Infinity
正无穷大:Infinity
```

### Number 对象方法

Number对象 支持以下方法：

| 序号 |                         方法 & 描述                          |                             实例                             |
| :--: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  1.  |         toExponential()把对象的值转换为指数计数法。          | `//toExponential()  var num1 = 1225.30  var val = num1.toExponential();  console.log(val) // 输出： 1.2253e+3` |
|  2.  |      toFixed()把数字转换为字符串，并对小数点指定位数。       | `var num3 = 177.234  console.log("num3.toFixed() 为 "+num3.toFixed())    // 输出：177 console.log("num3.toFixed(2) 为 "+num3.toFixed(2))  // 输出：177.23 console.log("num3.toFixed(6) 为 "+num3.toFixed(6))  // 输出：177.234000` |
|  3.  |  toLocaleString()把数字转换为字符串，使用本地数字格式顺序。  | `var num = new Number(177.1234);  console.log( num.toLocaleString());  // 输出：177.1234` |
|  4.  |           toPrecision()把数字格式化为指定的长度。            | `var num = new Number(7.123456);  console.log(num.toPrecision());  // 输出：7.123456  console.log(num.toPrecision(1)); // 输出：7 console.log(num.toPrecision(2)); // 输出：7.1` |
|  5.  | toString()把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。 | `var num = new Number(10);  console.log(num.toString());  // 输出10进制：10 console.log(num.toString(2)); // 输出2进制：1010 console.log(num.toString(8)); // 输出8进制：12` |
|  6.  |         valueOf()返回一个 Number 对象的原始数字值。          | `var num = new Number(10);  console.log(num.valueOf()); // 输出：10` |

## ts String(字符串)

> String 对象用于处理文本（字符串）。
>
> ### 语法
>
> ```typescript
> var txt = new String("string");
> 或者更简单方式：
> var txt = "string";
> ```

### String 对象属性

下表列出了 String 对象支持的属性：

| 序号 |              属性 & 描述              |                             实例                             |
| :--: | :-----------------------------------: | :----------------------------------------------------------: |
|  1.  | constructor对创建该对象的函数的引用。 | `var str = new String( "This is string" );  console.log("str.constructor is:" + str.constructor)`输出结果：`str.constructor is:function String() { [native code] }` |
|  2.  |       length返回字符串的长度。        | `var uname = new String("Hello World")  console.log("Length "+uname.length)  // 输出 11` |
|  3.  | prototype允许您向对象添加属性和方法。 | `function employee(id:number,name:string) {     this.id = id     this.name = name  }  var emp = new employee(123,"admin")  employee.prototype.email="admin@runoob.com" // 添加属性 email console.log("员工号: "+emp.id)  console.log("员工姓名: "+emp.name)  console.log("员工邮箱: "+emp.email)` |

### String 方法

下表列出了 String 对象支持的方法：

| 序号 |                         方法 & 描述                          |                             实例                             |
| :--: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  1.  |                charAt()返回在指定位置的字符。                | `var str = new String("RUNOOB");  console.log("str.charAt(0) 为:" + str.charAt(0)); // R console.log("str.charAt(1) 为:" + str.charAt(1)); // U  console.log("str.charAt(2) 为:" + str.charAt(2)); // N  console.log("str.charAt(3) 为:" + str.charAt(3)); // O  console.log("str.charAt(4) 为:" + str.charAt(4)); // O  console.log("str.charAt(5) 为:" + str.charAt(5)); // B` |
|  2.  |     charCodeAt()返回在指定的位置的字符的 Unicode 编码。      | `var str = new String("RUNOOB");  console.log("str.charCodeAt(0) 为:" + str.charCodeAt(0)); // 82 console.log("str.charCodeAt(1) 为:" + str.charCodeAt(1)); // 85  console.log("str.charCodeAt(2) 为:" + str.charCodeAt(2)); // 78  console.log("str.charCodeAt(3) 为:" + str.charCodeAt(3)); // 79  console.log("str.charCodeAt(4) 为:" + str.charCodeAt(4)); // 79 console.log("str.charCodeAt(5) 为:" + str.charCodeAt(5)); // 66` |
|  3.  |       concat()连接两个或更多字符串，并返回新的字符串。       | `var str1 = new String( "RUNOOB" );  var str2 = new String( "GOOGLE" );  var str3 = str1.concat( str2 );  console.log("str1 + str2 : "+str3) // RUNOOBGOOGLE` |
|  4.  |  indexOf()返回某个指定的字符串值在字符串中首次出现的位置。   | `var str1 = new String( "RUNOOB" );  var index = str1.indexOf( "OO" );  console.log("查找的字符串位置 :" + index );  // 3` |
|  5.  | lastIndexOf()从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。 | `var str1 = new String( "This is string one and again string" );  var index = str1.lastIndexOf( "string" ); console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 29     index = str1.lastIndexOf( "one" );  console.log("lastIndexOf 查找到的最后字符串位置 :" + index ); // 15` |
|  6.  |      localeCompare()用本地特定的顺序来比较两个字符串。       | `var str1 = new String( "This is beautiful string" );   var index = str1.localeCompare( "This is beautiful string");   console.log("localeCompare first :" + index );  // 0` |
|  7.  |       **match()**查找找到一个或多个正则表达式的匹配。        | `var str="The rain in SPAIN stays mainly in the plain";  var n=str.match(/ain/g);  // ain,ain,ain` |
|  8.  |             replace()替换与正则表达式匹配的子串              | `var re = /(\w+)\s(\w+)/;  var str = "zara ali";  var newstr = str.replace(re, "$2, $1");  console.log(newstr); // ali, zara` |
|  9.  |              search()检索与正则表达式相匹配的值              | `var re = /apples/gi;  var str = "Apples are round, and apples are juicy."; if (str.search(re) == -1 ) {    console.log("Does not contain Apples" );  } else {    console.log("Contains Apples" );  } ` |
| 10.  | slice()提取字符串的片断，并在新的字符串中返回被提取的部分。  |                                                              |
| 11.  |             split()把字符串分割为子字符串数组。              | `var str = "Apples are round, and apples are juicy.";  var splitted = str.split(" ", 3);  console.log(splitted)  // [ 'Apples', 'are', 'round,' ]` |
| 12.  |       substr()从起始索引号提取字符串中指定数目的字符。       |                                                              |
| 13.  |     substring()提取字符串中两个指定的索引号之间的字符。      | `var str = "RUNOOB GOOGLE TAOBAO FACEBOOK";  console.log("(1,2): "    + str.substring(1,2));   // U console.log("(0,10): "   + str.substring(0, 10)); // RUNOOB GOO console.log("(5): "      + str.substring(5));     // B GOOGLE TAOBAO FACEBOOK` |
| 14.  | toLocaleLowerCase()根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射。 | `var str = "Runoob Google";  console.log(str.toLocaleLowerCase( ));  // runoob google` |
| 15.  | toLocaleUpperCase()据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射。 | `var str = "Runoob Google";  console.log(str.toLocaleUpperCase( ));  // RUNOOB GOOGLE` |
| 16.  |              toLowerCase()把字符串转换为小写。               | `var str = "Runoob Google";  console.log(str.toLowerCase( ));  // runoob google` |
| 17.  |                    toString()返回字符串。                    | `var str = "Runoob";  console.log(str.toString( )); // Runoob` |
| 18.  |              toUpperCase()把字符串转换为大写。               | `var str = "Runoob Google";  console.log(str.toUpperCase( ));  // RUNOOB GOOGLE` |
| 19.  |            valueOf()返回指定字符串对象的原始值。             | `var str = new String("Runoob");  console.log(str.valueOf( ));  // Runoob` |

## ts Array(数组)

> 语法
>
> ```typescript
> var array_name [:datatype] = [val1,val2,...]; // 直接在声明中初始化
> var array_name[:datatype]; // 声明
> array_name = [val1,val2,...];
> ```
>
> **如果数组声明时未设置类型，则会被认为是 any 类型，在初始化时根据第一个元素的类型来推断数组的类型。**

### 解构赋值

ts一样支持解构

```typescript
var numberarr:number[] = [1,2,3];
var [x,y,z] = numberarr;
console.log(x,y,z)
```

### 数组迭代

```typescript
var j:any
var nums:number[] = [val1,val2,...]
for(j in nums){
    console.log(nums[j])
}
```

### 多维数组（Multi-dimensional Array）

```typescript
var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
```

### 数组方法

下表列出了一些常用的数组方法：

| 序号 |                         方法 & 描述                          |                             实例                             |
| :--: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  1.  |          concat()连接两个或更多的数组，并返回结果。          | `var alpha = ["a", "b", "c"];  var numeric = [1, 2, 3]; var alphaNumeric = alpha.concat(numeric);  console.log("alphaNumeric : " + alphaNumeric );    // a,b,c,1,2,3   ` |
|  2.  |        every()检测数值元素的每个元素是否都符合条件。         | `function isBigEnough(element, index, array) {         return (element >= 10);  }          var passed = [12, 5, 8, 130, 44].every(isBigEnough);  console.log("Test Value : " + passed ); // false` |
|  3.  |     filter()检测数值元素，并返回符合条件所有元素的数组。     | `function isBigEnough(element, index, array) {    return (element >= 10);  }            var passed = [12, 5, 8, 130, 44].filter(isBigEnough);  console.log("Test Value : " + passed ); // 12,130,44` |
|  4.  |          forEach()数组每个元素都执行一次回调函数。           | `let num = [7, 8, 9]; num.forEach(function (value) {    console.log(value); }); `编译成 JavaScript 代码：`var num = [7, 8, 9]; num.forEach(function (value) {    console.log(value);  // 7   8   9 });` |
|  5.  | indexOf()搜索数组中的元素，并返回它所在的位置。如果搜索不到，返回值 -1，代表没有此项。 | `var index = [12, 5, 8, 130, 44].indexOf(8);  console.log("index is : " + index );  // 2` |
|  6.  |            join()把数组的所有元素放入一个字符串。            | `var arr = new Array("Google","Runoob","Taobao");            var str = arr.join();  console.log("str : " + str );  // Google,Runoob,Taobao           var str = arr.join(", ");  console.log("str : " + str );  // Google, Runoob, Taobao           var str = arr.join(" + ");  console.log("str : " + str );  // Google + Runoob + Taobao` |
|  7.  | lastIndexOf()返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。 | `var index = [12, 5, 8, 130, 44].lastIndexOf(8);  console.log("index is : " + index );  // 2` |
|  8.  |  map()通过指定函数处理数组的每个元素，并返回处理后的数组。   | `var numbers = [1, 4, 9];  var roots = numbers.map(Math.sqrt);  console.log("roots is : " + roots );  // 1,2,3` |
|  9.  |        pop()删除数组的最后一个元素并返回删除的元素。         | `var numbers = [1, 4, 9];            var element = numbers.pop();  console.log("element is : " + element );  // 9           var element = numbers.pop();  console.log("element is : " + element );  // 4` |
| 10.  |    push()向数组的末尾添加一个或更多元素，并返回新的长度。    | `var numbers = new Array(1, 4, 9);  var length = numbers.push(10);  console.log("new numbers is : " + numbers );  // 1,4,9,10  length = numbers.push(20);  console.log("new numbers is : " + numbers );  // 1,4,9,10,20` |
| 11.  |         reduce()将数组元素计算为一个值（从左到右）。         | `var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; });  console.log("total is : " + total );  // 6` |
| 12.  |      reduceRight()将数组元素计算为一个值（从右到左）。       | `var total = [0, 1, 2, 3].reduceRight(function(a, b){ return a + b; });  console.log("total is : " + total );  // 6` |
| 13.  |                reverse()反转数组的元素顺序。                 | `var arr = [0, 1, 2, 3].reverse();  console.log("Reversed array is : " + arr );  // 3,2,1,0` |
| 14.  |             shift()删除并返回数组的第一个元素。              | `var arr = [10, 1, 2, 3].shift();  console.log("Shifted value is : " + arr );  // 10` |
| 15.  |        slice()选取数组的的一部分，并返回一个新数组。         | `var arr = ["orange", "mango", "banana", "sugar", "tea"];  console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  // mango console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );  // mango,banana` |
| 16.  |         some()检测数组元素中是否有元素符合指定条件。         | `function isBigEnough(element, index, array) {    return (element >= 10);            }            var retval = [2, 5, 8, 1, 4].some(isBigEnough); console.log("Returned value is : " + retval );  // false           var retval = [12, 5, 8, 1, 4].some(isBigEnough);  console.log("Returned value is : " + retval );  // true` |
| 17.  |                 sort()对数组的元素进行排序。                 | `var arr = new Array("orange", "mango", "banana", "sugar");  var sorted = arr.sort();  console.log("Returned string is : " + sorted );  // banana,mango,orange,sugar` |
| 18.  |               splice()从数组中添加或删除元素。               | `var arr = ["orange", "mango", "banana", "sugar", "tea"];   var removed = arr.splice(2, 0, "water");   console.log("After adding 1: " + arr );    // orange,mango,water,banana,sugar,tea  console.log("removed is: " + removed);            removed = arr.splice(3, 1);   console.log("After removing 1: " + arr );  // orange,mango,water,sugar,tea  console.log("removed is: " + removed);  // banana` |
| 19.  |          toString()把数组转换为字符串，并返回结果。          | `var arr = new Array("orange", "mango", "banana", "sugar");          var str = arr.toString();  console.log("Returned string is : " + str );  // orange,mango,banana,sugar` |
| 20.  |  unshift()向数组的开头添加一个或更多元素，并返回新的长度。   | `var arr = new Array("orange", "mango", "banana", "sugar");  var length = arr.unshift("water");  console.log("Returned array is : " + arr );  // water,orange,mango,banana,sugar  console.log("Length of the array is : " + length ); // 5` |

## ts Map对象

> Map 对象保存键值对，并且能够记住键的原始插入顺序。
>
> 任何值(对象或者原始值) 都可以作为一个键或一个值。
>
> Map 是 ES6 中引入的一种新的数据结构，可以参考 [ES6 Map 与 Set](https://www.runoob.com/w3cnote/es6-map-set.html)。
>
> ### 创建Map
>
> ts用`Map`类型和`new`关键字来创建
>
> ```typescript
> let map = new Map();
> //也可以直接一数组的格式来传入键值对
> let mymap = new Map([
>     ["key":"val"],
>     ["key2":"val2"]
> ])
> ```
>
> Map 相关的函数与属性：
>
> - **map.clear()** – 移除 Map 对象的所有键/值对 。
> - **map.set()** – 设置键值对，返回该 Map 对象。
> - **map.get()** – 返回键对应的值，如果不存在，则返回 undefined。
> - **map.has()** – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
> - **map.delete()** – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
> - **map.size** – 返回 Map 对象键/值对的数量。
> - **map.keys()** - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
> - **map.values()** – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。
> - **map.entries()** – 返回一个包含 Map 中所有键值对的迭代器 。
>
> ### 常用函数
>
> **set(key: K, value: V): this** - 向 Map 中添加或更新键值对。
>
> ```
> map.set('key1', 'value1');
> ```
>
> **get(key: K): V | undefined** - 根据键获取值，如果键不存在则返回 undefined。
>
> ```
> const value = map.get('key1');
> ```
>
> **has(key: K): boolean** - 检查 Map 中是否存在指定的键。
>
> ```
> const exists = map.has('key1');
> ```
>
> **delete(key: K): boolean** - 删除指定键的键值对，成功删除返回 true，否则返回 false。
>
> ```
> const removed = map.delete('key1');
> ```
>
> **clear(): void** - 清空 Map 中的所有键值对。
>
> ```
> map.clear();
> ```
>
> **size: number** - 返回 Map 中键值对的数量。
>
> ```
> const size = map.size;
> ```
>
> ### 迭代方法
>
> keys(): IterableIterator<K> - 返回一个包含 Map 中所有键的迭代器。
>
> ```
> for (const key of map.keys()) {
>   console.log(key);
> }
> ```
>
> **values(): IterableIterator<V>** - 返回一个包含 Map 中所有值的迭代器。
>
> ```
> for (const value of map.values()) {
>   console.log(value);
> }
> ```
>
> **entries(): IterableIterator<[K, V]>** - 返回一个包含 Map 中所有键值对的迭代器，每个元素是一个 [key, value] 数组。
>
> ```
> for (const [key, value] of map.entries()) {
>   console.log(key, value);
> }
> ```
>
> **forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void** - 对 Map 中的每个键值对执行一次提供的回调函数。
>
> ```
> map.forEach((value, key) => {
>   console.log(key, value);
> });
> ```

## ts元组

> 我们知道数组中元素的数据类型都一般是相同的（any[] 类型的数组可以不同），如果存储的元素数据类型不同，则需要使用元组。
>
> TypeScript 中的元组（Tuple）是一种特殊类型的数组，它允许在数组中存储不同类型的元素，与普通数组不同，元组中的每个元素都有明确的类型和位置。元组可以在很多场景下用于表示固定长度、且各元素类型已知的数据结构。
>
> ### 语法
>
> ```typescript
> let tuple:[type1,type2,...];
> ```
>
> 示例
>
> ```typescript
> let mytuple: [number, string, boolean] = [42, "Runoob", true];
>  
> // 访问元组中的元素
> let num = mytuple[0]; // 访问第一个元素，值为 42，类型为 number
> let str = mytuple[1]; // 访问第二个元素，值为 "Runoob"，类型为 string
> let bool = mytuple[2]; // 访问第三个元素，值为 true，类型为 boolean
>  
> console.log(num);  // 输出: 42
> console.log(str);  // 输出: Runoob
> console.log(bool); // 输出: true
> ```
>
> ### 元组运算
>
> 我们可以使用以下两个函数向元组添加新元素或者删除元素：
>
> - `push()`向元组添加元素，添加在最后面。
> - `pop()` 从元组中移除元素（最后一个），并返回移除的元素。
>
> ### 使用标签元组
>
> ```typescript
> let tuple :[id:number,name:string]=[1,"john"];
> // id和name是元组的标签
> ```
>
> **TypeScript 可以根据数组的元素自动推断出元组的类型**

## ts联合类型

> 联合类型（Union Types）可以通过管道(|)将变量设置多种类型，赋值时可以根据设置的类型来赋值。
>
> **注意**：只能赋值指定的类型，如果赋值其它类型就会报错。
>
> ```typescript
> type1|type2|type3
> ```
>
> 

## ts函数

> 支持`ES6`语法

```typescript
// 基础语法
function func_name(){
    
}
```

*ts函数的特点就是对传递进来的参数进行类型约束*

```typescript
const func = (username:string) => {
    console.log("你好",username)
}
func("GitHub")
```

示例:

```typescript
const getRandomNumber = (min:number,max:number):number =>{
    // 如果是:void,就代表没有返回值
    return Math.floor(Math.random()*(max-min)+min)
}
console.log(getRandomNumber(1,100));
```





## ts接口

> 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

TypeScript 接口定义如下：

```typescript
interface interface_name { 
}
```

示例

```typescript
interface User {
    username: string;
    age?: number; // ?代表可选择
    password: string;
}

let szy: User = {
    username: 'szy',
    password: '123456',
    // address: '香港' // 会报错,字面量没有address属性
    // age:18 可选

}

// 定义函数
const szyinfo = (user: User): void => {
    console.log(user, user.username, user.password);
}

console.log(szy);

szyinfo({
    username: 'szy111',
    password: '123456'
});
```

## ts命名空间

> 命名空间一个最明确的目的就是解决重名问题。
>
> 假设这样一种情况，当一个班上有两个名叫小明的学生时，为了明确区分它们，我们在使用名字之外，不得不使用一些额外的信息，比如他们的姓（王小明，李小明），或者他们父母的名字等等。
>
> 命名空间定义了标识符的可见范围，一个标识符可在多个命名空间中定义，它在不同命名空间中的含义是互不相干的。这样，在一个新的命名空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他命名空间中。

## ts声明文件

> TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。
>
> 例如我们要在ts中引入`jQuery`文件

## ts枚举

> 枚举就是**定义常量**
>
> ```typescript
> enum Direction{
>     Up = 38,
>     Down = 40,
>     left = 37,
>     right = 39
> }
> 
> // 后续使用
> console.log(Direction.Down)
> 
> enum Api{
>     search: `/api/search`,
>     ...
> }
> ```

## ts泛型

> 在未定义这个数据的类型前,可以使用泛型做替代
>
> ```typescript
> // 定义函数 传递什么数据进来就返回什么类型的数据
> function foo<T>(a:T):T{
>     return a.replace(/\s/g,'')
> }
> // 使用
> foo<string>('hhh hhh');
> ```
>
> 

## ts类

> 类:一种抽象的对象
>
> 因为`Typescript`也是一种面向对象的编程语言
>
> 一般通过接口`interface`来规范这个类
>
> ```typescript
> interface Opt {
>     name: string,
>     age: number
> }
> 
> class Person implements Opt {
>     name: string;
>     age: number;
> 
>     constructor(name: string, age: number) {
>         this.name = name;
>         this.age = age;
>     }
> 
>     sayHello() {
>         console.log("打印:", this.name, this.age);
>     }
> }
> 
> const p1 = new Person("张三", 18);
> p1.sayHello();
> ```
>
> ### 修饰符
>
> - `public` 公共的(可以在类的内部,外部,子类等使用)
> - `private` 私有的(可以在类内部使用)
> - `protected` 受保护的(可以在类的内部或者子类使用)
>
> ### 抽象类
>
> ```typescript
> // 在class关键字之前,添加了abstract关键字修饰
> // ◈抽象类不能用于实例化(重点)
> abstract class User{
>     account:string;
>     password:string;
> }
> 
> 但是,抽象类可以被继承
> class Student extends User{
>     
> }
> class Teather = extends User{
>     
> }
> // 下面可以new了
> const s1 = new Student();
> ```
>
> 
