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

