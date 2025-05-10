# JavaScript面试题精选

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_1-数据类型基础)1 数据类型基础

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_1-1-js内置类型)1.1 JS内置类型

- `JS` 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象（`Object`）。
- 基本类型有七种： `null`，`undefined`，`boolean`，`number`，`string`，`symbol`, `bigint`。
- 其中 `JS` 的数字类型是浮点类型的，没有整型。并且浮点类型基于 `IEEE 754`标准实现，在使用中会遇到某些 Bug。`NaN` 也属于 `number` 类型，并且 `NaN` 不等于自身。
- 对于基本类型来说，如果使用字面量的方式，那么这个变量只是个字面量，只有在必要的时候才会转换为对应的类型。

**引用数据类型:**

- 对象`Object`（包含普通对象-`Object`，数组对象-`Array`，正则对象-`RegExp`，日期对象-`Date`，数学函数-`Math`，函数对象-`Function`）

```text
let a = 111 // 这只是字面量，不是 number 类型
a.toString() // 使用时候才会转换为对象类型 
```

> 对象（`Object`）是引用类型，在使用过程中会遇到浅拷贝和深拷贝的问题。

```text
let a = { name: 'FE' }
let b = a
b.name = 'EF'
console.log(a.name) // EF 
```

**说出下面运行的结果，解释原因。**

```text
function test(person) {
  person.age = 26
  person = {
    name: 'hzj',
    age: 18
  }
  return person
}
const p1 = {
  name: 'fyq',
  age: 19
}
const p2 = test(p1)
console.log(p1) // -> ?
console.log(p2) // -> ? 
// 结果:
p1：{name: “fyq”, age: 26}
p2：{name: “hzj”, age: 18} 
```

> 原因: 在函数传参的时候传递的是对象在堆中的内存地址值，test函数中的实参person是p1对象的内存地址，通过调用`person.age = 26`确实改变了p1的值，但随后`person`变成了另一块内存空间的地址，并且在最后将这另外一份内存空间的地址返回，赋给了p2。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_1-2-null和undefined区别)1.2 null和undefined区别

> `Undefined`类型只有一个值，即`undefined`。当声明的变量还未被初始化时，变量的默认值为`undefined`。用法

- 变量被声明了，但没有赋值时，就等于`undefined`。
- 调用函数时，应该提供的参数没有提供，该参数等于`undefined`。
- 对象没有赋值的属性，该属性的值为`undefined`。
- 函数没有返回值时，默认返回`undefined`

> `Null`类型也只有一个值，即`null`。`null`用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。用法

- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_1-3-null是对象吗-为什么)1.3 null是对象吗？为什么？

结论: `null`不是对象。

> 解释: 虽然 `typeof null` 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象然而 null 表示为全零，所以将它错误的判断为 object 。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#为什么可以调用)为什么可以调用？

其实在这个语句运行的过程中做了这样几件事情：

```text
var s = new Object('1');
s.toString();
s = null; 
```

- 第一步: 创建Object类实例。注意为什么不是String ？ 由于Symbol和BigInt的出现，对它们调用new都会报错，目前ES6规范也不建议用new来创建基本类型的包装类。
- 第二步: 调用实例方法。
- 第三步: 执行完方法立即销毁这个实例。

> 整个过程体现了`基本包装类型`的性质，而基本包装类型恰恰属于`基本数据类型`，包括Boolean, Number和String。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_1-5-0-1-0-2为什么不等于0-3)1.5 0.1+0.2为什么不等于0.3？

> 0.1和0.2在转换成二进制后会无限循环，由于标准位数的限制后面多余的位数会被截掉，此时就已经出现了精度的损失，相加后因浮点数小数位的限制而截断的二进制数字在转换为十进制就会变成`0.30000000000000004`

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_1-6-如何理解bigint)1.6 如何理解BigInt

**什么是BigInt?**

> `BigInt`是一种新的数据类型，用于当整数值大于Number数据类型支持的范围时。这种数据类型允许我们安全地对大整数执行算术操作，表示高分辨率的时间戳，使用大整数id，等等，而不需要使用库。

**为什么需要BigInt?**

在JS中，所有的数字都以双精度64位浮点格式表示，那这会带来什么问题呢？

> 这导致JS中的Number无法精确表示非常大的整数，它会将非常大的整数四舍五入，确切地说，JS中的`Number`类型只能安全地表示`-9007199254740991(-(2^53-1))和9007199254740991（(2^53-1)）`，任何超出此范围的整数值都可能失去精度。

```text
console.log(999999999999999);  //=>10000000000000000 
```

同时也会有一定的安全性问题:

```text
9007199254740992 === 9007199254740993;    // → true 居然是true! 
```

**如何创建并使用BigInt？**

要创建`BigInt`，只需要在数字末尾追加`n`即可

```text
console.log( 9007199254740995n );    // → 9007199254740995n	
console.log( 9007199254740995 );     // → 9007199254740996 
```

另一种创建`BigInt`的方法是用`BigInt()`构造函数

```text
BigInt("9007199254740995");    // → 9007199254740995n 
```

简单使用如下:

```text
10n + 20n;    // → 30n	
10n - 20n;    // → -10n	
+10n;         // → TypeError: Cannot convert a BigInt value to a number	
-10n;         // → -10n	
10n * 20n;    // → 200n	
20n / 10n;    // → 2n	
23n % 10n;    // → 3n	
10n ** 3n;    // → 1000n	

const x = 10n;	
++x;          // → 11n	
--x;          // → 9n
console.log(typeof x);   //"bigint" 
```

**值得警惕的点**

> `BigInt`不支持一元加号运算符, 这可能是某些程序可能依赖于 + 始终生成 `Number` 的不变量，或者抛出异常。另外，更改 `+` 的行为也会破坏 `asm.js` 代码。

因为隐式类型转换可能丢失信息，所以不允许在`bigint`和 `Number` 之间进行混合操作。当混合使用大整数和浮点数时，结果值可能无法由`BigInt`或`Number`精确表示。

```text
10 + 10n;    // → TypeError 
```

> 不能将`BigInt`传递给`Web api`和内置的 JS 函数，这些函数需要一个 Number 类型的数字。尝试这样做会报TypeError错误。

```text
Math.max(2n, 4n, 6n);    // → TypeError 
```

> 当 `Boolean` 类型与 `BigInt` 类型相遇时，`BigInt` 的处理方式与`Number`类似，换句话说，只要不是`0n`，`BigInt`就被视为`truthy`的值。

```text
if(0n){//条件判断为false

}
if(3n){//条件为true

} 
```

- 元素都为BigInt的数组可以进行sort。
- `BigInt`可以正常地进行位运算，如`|`、`&`、`<<`、`>>`和`^`

**浏览器兼容性**

caniuse的结果:

![img](https://interview.html5.wiki/image/20210629/112222.png)

其实现在的兼容性并不怎么好，只有chrome67、firefox、Opera这些主流实现，要正式成为规范，其实还有很长的路要走。

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_2-数据类型检测)2 数据类型检测

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_2-1-typeof类型判断)2.1 typeof类型判断

> 在写业务逻辑的时候，经常要用到JS数据类型的判断，面试常见的案例深浅拷贝也要用到数据类型的判断。

**typeof**

```text
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof undefined);       // undefined
console.log(typeof []);              // object 
console.log(typeof {});              // object
console.log(typeof function(){});    // function
console.log(typeof null);            // object 
```

> 优点：能够快速区分基本数据类型 缺点：不能将`Object`、`Array`和`Null`区分，都返回`object`

**instanceof**

```text
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true 
```

- 优点：能够区分`Array`、`Object`和`Function`，适合用于判断自定义的类实例对象
- 缺点：`Number`，`Boolean`，`String`基本数据类型不能判断

**Object.prototype.toString.call()**

```text
var toString = Object.prototype.toString;
 
console.log(toString.call(2));                      //[object Number]
console.log(toString.call(true));                   //[object Boolean]
console.log(toString.call('str'));                  //[object String]
console.log(toString.call([]));                     //[object Array]
console.log(toString.call(function(){}));           //[object Function]
console.log(toString.call({}));                     //[object Object]
console.log(toString.call(undefined));              //[object Undefined]
console.log(toString.call(null));                   //[object Null] 
```

- 优点：精准判断数据类型
- 缺点：写法繁琐不容易记，推荐进行封装后使用

**判断是否是promise对象**

```text
function isPromise (val) {
    return (
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
} 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_2-2-typeof-于-instanceof-区别)2.2 typeof 于 instanceof 区别

> `typeof` 对于基本类型，除了 `null`都可以显示正确的类型

```text
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof b // b 没有声明，但是还会显示 undefined 
```

> ```
> typeof` 对于对象，除了函数都会显示 `object
> ```

```text
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function' 
```

> 对于 `null` 来说，虽然它是基本类型，但是会显示 `object`，这是一个存在很久了的 `Bug`

```text
typeof null // 'object' 
```

> ```
> instanceof` 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 `iprototype
> ```

```text
// 我们也可以试着实现一下 instanceof
function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
} 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_2-3-object-is和-的区别)2.3 Object.is和===的区别

> `Object`在严格等于的基础上修复了一些特殊情况下的失误，具体来说就是`+0`和`-0`，`NaN`和`NaN`。 源码如下

```text
function is(x, y) {
  if (x === y) {
    //运行到1/x === 1/y的时候x和y都为0，但是1/+0 = +Infinity， 1/-0 = -Infinity, 是不一样的
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    //NaN===NaN是false,这是不对的，我们在这里做一个拦截，x !== x，那么一定是 NaN, y 同理
    //两个都是NaN的时候返回true
    return x !== x && y !== y;
  }
} 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_2-4-总结)2.4 总结

- ```
	typeof
	```

	- 直接在计算机底层基于数据类型的值（二进制）进行检测
	- `typeof null`为`object` 原因是对象存在在计算机中，都是以`000`开始的二进制存储，所以检测出来的结果是对象
	- `typeof` 普通对象/数组对象/正则对象/日期对象 都是`object`
	- `typeof NaN === 'number'`

- ```
	instanceof
	```

	- 检测当前实例是否属于这个类的
	- 底层机制：只要当前类出现在实例的原型上，结果都是true
	- 不能检测基本数据类型

- ```
	constructor
	```

	- 支持基本类型
	- constructor可以随便改，也不准

- ```
	Object.prototype.toString.call([val])
	```

	- 返回当前实例所属类信息

> 判断 `Target` 的类型，单单用 `typeof` 并无法完全满足，这其实并不是 `bug`，本质原因是 `JS` 的万物皆对象的理论。因此要真正完美判断时，我们需要区分对待:

- 基本类型(`null`): 使用 `String(null)`
- 基本类型(`string / number / boolean / undefined`) + `function`: - 直接使用 `typeof`即可
- 其余引用类型(`Array / Date / RegExp Error`): 调用`toString`后根据`[object XXX]`进行判断

很稳的判断封装:

```text
let class2type = {}
'Array Date RegExp Object Error'.split(' ').forEach(e => class2type[ '[object ' + e + ']' ] = e.toLowerCase()) 

function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
} 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-数据类型转换)3 数据类型转换

------

> 大家都知道 JS 中在使用运算符号或者对比符时，会自带隐式转换，规则如下:

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-1-转化规则)3.1 转化规则

- `-、*、/、%`：一律转换成数值后计算
- +：
	- 数字 + 字符串 = 字符串， 运算顺序是从左到右
	- 数字 + 对象， 优先调用对象的`valueOf -> toString`
	- 数字 + `boolean/null` -> 数字
	- 数字 + `undefined` -> `NaN`
- `[1].toString() === '1'`
- `{}.toString() === '[object object]'`
- `NaN !== NaN` 、+`undefined` 为 `NaN`

> 首先我们要知道，在 `JS` 中类型转换只有三种情况，分别是：

- 转换为布尔值
- 转换为数字
- 转换为字符串

![类型转换](https://interview.html5.wiki/image/20210629/112230.png)

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-2-转boolean)3.2 转Boolean

> 在条件判断时，除了 `undefined`，`null`， `false`， `NaN`， `''`， `0`， `-0`，其他所有值都转为 `true`，包括所有对象

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-3-对象转原始类型是根据什么流程运行的)3.3 对象转原始类型是根据什么流程运行的

> 对象转原始类型，会调用内置的`[ToPrimitive]`函数，对于该函数而言，其逻辑如下：

- 如果有`Symbol.toPrimitive()`方法，优先调用再返回
- 调用`valueOf()`，如果转换为原始类型，则返回
- 调用`toString()`，如果转换为原始类型，则返回
- 如果都没有返回原始类型，会报错

```text
var obj = {
  value: 3,
  valueOf() {
    return 4;
  },
  toString() {
    return '5'
  },
  [Symbol.toPrimitive]() {
    return 6
  }
}
console.log(obj + 1); // 输出7 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#条件成立)条件成立

其实就是上一个问题的应用。

```text
var a = {
  value: 0,
  valueOf: function() {
    this.value++;
    return this.value;
  }
};
console.log(a == 1 && a == 2);//true 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-5-四则运算符)3.5 四则运算符

> 它有以下几个特点：

- 运算中其中一方为字符串，那么就会把另一方也转换为字符串
- 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串

```text
1 + '1' // '11'
true + true // 2
4 + [1,2,3] // "41,2,3" 
```

- 对于第一行代码来说，触发特点一，所以将数字 `1` 转换为字符串，得到结果 `'11'`
- 对于第二行代码来说，触发特点二，所以将 `true` 转为数字 `1`
- 对于第三行代码来说，触发特点二，所以将数组通过 `toString`转为字符串 `1,2,3`，得到结果 `41,2,3`

> 另外对于加法还需要注意这个表达式 `'a' + + 'b'`

```text
'a' + + 'b' // -> "aNaN" 
```

- 因为 `+ 'b'` 等于 `NaN`，所以结果为 `"aNaN"`，你可能也会在一些代码中看到过 `+ '1'`的形式来快速获取 `number` 类型。
- 那么对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字

```text
4 * '3' // 12
4 * [] // 0
4 * [1, 2] // NaN 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-6-比较运算符)3.6 比较运算符

- 如果是对象，就通过 `toPrimitive` 转换对象
- 如果是字符串，就通过 `unicode` 字符索引来比较

```text
let a = {
  valueOf() {
    return 0
  },
  toString() {
    return '1'
  }
}
a > -1 // true 
```

> 在以上代码中，因为 `a` 是对象，所以会通过 `valueOf` 转换为原始类型再比较值。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-7-结果是什么-为什么)3.7 [] == ![]结果是什么？为什么？

- `==` 中，左右两边都需要转换为数字然后进行比较
- `[]`转换为数字为`0`
- `![]` 首先是转换为布尔值，由于`[]`作为一个引用类型转换为布尔值为`true`
- 因此`![]`为`false`，进而在转换成数字，变为`0`
- `0 == 0` ， 结果为`true`

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-8-和-有什么区别)3.8 == 和 ===有什么区别

> ```
> ===`叫做严格相等，是指：左右两边不仅值要相等，类型也要相等，例如`'1'===1`的结果是`false`，因为一边是`string`，另一边是`number
> ```

**==不像===那样严格，对于一般情况，只要值相等，就返回true，但==还涉及一些类型转换，它的转换规则如下**

- 两边的类型是否相同，相同的话就比较值的大小，例如`1==2`，返回`false`
- 判断的是否是`null`和`undefined`，是的话就返回true
- 判断的类型是否是`String`和`Number`，是的话，把`String`类型转换成`Number`，再进行比较
- 判断其中一方是否是`Boolean`，是的话就把`Boolean`转换成`N`umber`，再进行比较
- 如果其中一方为`Object`，且另一方为`String`、`Number`或者`Symbol`，会将`Object`转换成字符串，再进行比较

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_4-闭包)4 闭包

------

> 红宝书(p178)上对于闭包的定义：闭包是指有权访问另外一个函数作用域中的变量的函数，

> MDN 对闭包的定义为：闭包是指那些能够访问自由变量的函数。
>
> - （其中自由变量，指在函数中使用的，但既不是函数参数arguments也不是函数的局部变量的变量，其实就是另外一个函数作用域中的变量。）

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_4-1-闭包产生的原因)4.1 闭包产生的原因

> 首先要明白作用域链的概念，其实很简单，在ES5中只存在两种作用域————`全局作用域`和`函数作用域`，当访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不在父作用域中，这就是作用域链，值得注意的是，每一个子函数都会拷贝上级的作用域，形成一个作用域的链条。 比如:

```text
var a = 1;
function f1() {
  var a = 2
  function f2() {
    var a = 3;
    console.log(a);//3
  }
} 
```

> 在这段代码中，`f1`的作用域指向有全局作用域(`window`)和它本身，而`f2`的作用域指向全局作用域(`window`)、`f1`和它本身。而且作用域是从最底层向上找，直到找到全局作用域`window`为止，如果全局还没有的话就会报错。就这么简单一件事情

**闭包产生的本质就是，当前环境中存在指向父级作用域的引用。还是举上面的例子:**

```text
function f1() {
  var a = 2
  function f2() {
    console.log(a);//2
  }
  return f2;
}
var x = f1();
x(); 
```

> 这里x会拿到父级作用域中的变量，输出2。因为在当前环境中，含有对f2的引用，f2恰恰引用了window、f1和f2的作用域。因此f2可以访问到f1的作用域的变量。

- 那是不是只有返回函数才算是产生了闭包呢？
- 回到闭包的本质，我们只需要让父级作用域的引用存在即可，因此我们还可以这么做：

```text
var f3;
function f1() {
  var a = 2
  f3 = function() {
    console.log(a);
  }
}
f1();
f3(); 
```

- 让`f1`执行，给`f3`赋值后，等于说现在`f3`拥有了`window、f1和f3本身这几个作用域的访问权限`，还是自底向上查找，最近是在`f1`中找到了`a`,因此输出2。
- 在这里是外面的变量`f3`存在着父级作用域的引用，因此产生了闭包，形式变了，本质没有改变

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_4-2-闭包有哪些表现形式)4.2 闭包有哪些表现形式

明白了本质之后，我们就来看看，在真实的场景中，究竟在哪些地方能体现闭包的存在？

1. 返回一个函数。刚刚已经举例。
2. 作为函数参数传递

```text
var a = 1;
function foo(){
  var a = 2;
  function baz(){
    console.log(a);
  }
  bar(baz);
}
function bar(fn){
  // 这就是闭包
  fn();
}
// 输出2，而不是1
foo(); 
```

1. 在定时器、事件监听、Ajax请求、跨窗口通信、`Web Workers`或者任何异步中，只要使用了回调函数，实际上就是在使用闭包

以下的闭包保存的仅仅是window和当前作用域。

```text
// 定时器
setTimeout(function timeHandler(){
  console.log('111');
}，100)

// 事件监听
$('#app').click(function(){
  console.log('DOM Listener');
}) 
```

1. `IIFE`(立即执行函数表达式)创建闭包, 保存了全局作用域`window`和当前函数的作用域，因此可以访问全局的变量

```text
var a = 2;
(function IIFE(){
  // 输出2
  console.log(a);
})(); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_4-3-如何解决下面的循环输出问题)4.3 如何解决下面的循环输出问题

```text
for(var i = 1; i <= 5; i ++){
  setTimeout(function timer(){
    console.log(i)
  }, 0)
} 
```

为什么会全部输出6？如何改进，让它输出1，2，3，4，5？(方法越多越好) 因为setTimeout为宏任务，由于JS中单线程eventLoop机制，在主线程同步任务执行完后才去执行宏任务，因此循环结束后setTimeout中的回调才依次执行，但输出i的时候当前作用域没有，往上一级再找，发现了i,此时循环已经结束，i变成了6。因此会全部输出6。

**解决方法：**

1. 利用IIFE(立即执行函数表达式)当每次for循环时，把此时的i变量传递到定时器中

```text
for(var i = 1;i <= 5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, 0)
  })(i)
} 
```

1. 给定时器传入第三个参数, 作为`timer`函数的第一个函数参数

```text
for(var i=1;i<=5;i++){
  setTimeout(function timer(j){
    console.log(j)
  }, 0, i)
} 
```

1. 使用ES6中的let

```text
for(let i = 1; i <= 5; i++){
  setTimeout(function timer(){
    console.log(i)
  },0)
} 
```

> let使JS发生革命性的变化，让JS有函数作用域变为了块级作用域，用let后作用域链不复存在。代码的作用域以块级为单位，以上面代码为例:

```text
// i = 1
{
  setTimeout(function timer(){
    console.log(1)
  },0)
}
// i = 2
{
  setTimeout(function timer(){
    console.log(2)
  },0)
}
// i = 3
... 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_5-原型链)5 原型链

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_5-1-原型-构造函数-实例)5.1 原型/构造函数/实例

- 原型(`prototype`): 一个简单的对象，用于实现对象的 属性继承。可以简单的理解成对象的爹。在 `Firefox` 和 `Chrome` 中，每个`JavaScript`对象中都包含一个`__proto__`(非标准)的属性指向它爹(该对象的原型)，可`obj.__proto__`进行访问。
- 构造函数: 可以通过`new`来 新建一个对象 的函数。
- 实例: 通过构造函数和`new`创建出来的对象，便是实例。 实例通过`__proto__`指向原型，通过`constructor`指向构造函数。

> 以`Object`为例，我们常用的`Object`便是一个构造函数，因此我们可以通过它构建实例。

```text
// 实例
const instance = new Object() 
```

> 则此时， 实例为`instance`, 构造函数为`Object`，我们知道，构造函数拥有一个`prototype`的属性指向原型，因此原型为:

```text
// 原型
const prototype = Object.prototype 
```

**这里我们可以来看出三者的关系:**

- `实例.__proto__ === 原型`
- `原型.constructor === 构造函数`
- `构造函数.prototype === 原型`

```text
// 这条线其实是是基于原型进行获取的，可以理解成一条基于原型的映射线
// 例如: 
// const o = new Object()
// o.constructor === Object   --> true
// o.__proto__ = null;
// o.constructor === Object   --> false
实例.constructor === 构造函数 
```

![img](https://interview.html5.wiki/image/20210629/112235.png)

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_5-2-原型对象和构造函数有何关系)5.2 原型对象和构造函数有何关系

- 在JavaScript中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个`prototype`属性，这个属性指向函数的原型对象。
- 当函数经过`new`调用时，这个函数就成为了构造函数，返回一个全新的实例对象，这个实例对象有一个`__proto__`属性，指向构造函数的原型对象。

![img](https://interview.html5.wiki/image/20210629/112242.png)

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_5-3-能不能描述一下原型链)5.3 能不能描述一下原型链

> JavaScript对象通过`__proto__` 指向父类对象，直到指向`Object`对象为止，这样就形成了一个原型指向的链条, 即原型链

![img](https://interview.html5.wiki/image/20210629/112246.png)

- 对象的 `hasOwnProperty()` 来检查对象自身中是否含有该属性
- 使用 `in` 检查对象中是否含有某个属性时，如果对象中没有但是原型链中有，也会返回 `true`

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-继承)6 继承

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-1-方式1-借助call)6.1 方式1: 借助call

```text
 function Parent1(){
    this.name = 'parent1';
  }
  function Child1(){
    Parent1.call(this);
    this.type = 'child1'
  }
  console.log(new Child1); 
```

> 这样写的时候子类虽然能够拿到父类的属性值，但是问题是父类原型对象中一旦存在方法那么子类无法继承。那么引出下面的方法。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-2-方式2-借助原型链)6.2 方式2: 借助原型链

```text
 function Parent2() {
    this.name = 'parent2';
    this.play = [1, 2, 3]
  }
  function Child2() {
    this.type = 'child2';
  }
  Child2.prototype = new Parent2();

  console.log(new Child2()); 
```

看似没有问题，父类的方法和属性都能够访问，但实际上有一个潜在的不足。举个例子：

```text
var s1 = new Child2();
var s2 = new Child2();
s1.play.push(4);
console.log(s1.play, s2.play); 
```

可以看到控制台：

![img](https://interview.html5.wiki/image/20210629/112251.png)

> 明明我只改变了s1的play属性，为什么s2也跟着变了呢？很简单，因为两个实例使用的是同一个原型对象。

那么还有更好的方式么？

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-3-方式3-将前两种组合)6.3 方式3：将前两种组合

```text
 function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
  }
  function Child3() {
    Parent3.call(this);
    this.type = 'child3';
  }
  Child3.prototype = new Parent3();
  var s3 = new Child3();
  var s4 = new Child3();
  s3.play.push(4);
  console.log(s3.play, s4.play); 
```

可以看到控制台：

![img](https://interview.html5.wiki/image/20210629/112255.png)

> 之前的问题都得以解决。但是这里又徒增了一个新问题，那就是`Parent3`的构造函数会多执行了一次（`Child3.prototype = new Parent3();`）。这是我们不愿看到的。那么如何解决这个问题？

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-4-方式4-组合继承的优化1)6.4 方式4: 组合继承的优化1

```text
 function Parent4 () {
    this.name = 'parent4';
    this.play = [1, 2, 3];
  }
  function Child4() {
    Parent4.call(this);
    this.type = 'child4';
  }
  Child4.prototype = Parent4.prototype; 
```

这里让将父类原型对象直接给到子类，父类构造函数只执行一次，而且父类属性和方法均能访问，但是我们来测试一下：

```text
var s3 = new Child4();
var s4 = new Child4();
console.log(s3) 
```

![img](https://interview.html5.wiki/image/20210629/112300.png)

> 子类实例的构造函数是Parent4，显然这是不对的，应该是Child4。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#组合继承的优化2): 组合继承的优化2

```text
 function Parent5 () {
    this.name = 'parent5';
    this.play = [1, 2, 3];
  }
  function Child5() {
    Parent5.call(this);
    this.type = 'child5';
  }
  Child5.prototype = Object.create(Parent5.prototype);
  Child5.prototype.constructor = Child5; 
```

这是最推荐的一种方式，接近完美的继承，它的名字也叫做寄生组合继承。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-6-es6的extends被编译后的javascript代码)6.6 ES6的extends被编译后的JavaScript代码

> ES6的代码最后都是要在浏览器上能够跑起来的，这中间就利用了babel这个编译工具，将ES6的代码编译成ES5让一些不支持新语法的浏览器也能运行。

那最后编译成了什么样子呢？

```text
function _possibleConstructorReturn(self, call) {
    // ...
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
    // ...
    //看到没有
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}


var Parent = function Parent() {
    // 验证是否是 Parent 构造出来的 this
    _classCallCheck(this, Parent);
};

var Child = (function (_Parent) {
    _inherits(Child, _Parent);

    function Child() {
        _classCallCheck(this, Child);

        return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
    }

    return Child;
}(Parent)); 
```

> 核心是`_inherits`函数，可以看到它采用的依然也是第五种方式————寄生组合继承方式，同时证明了这种方式的成功。不过这里加了一个`Object.setPrototypeOf(subClass, superClass)`，这是用来干啥的呢？

答案是用来继承父类的静态方法。这也是原来的继承方式疏忽掉的地方。

**追问: 面向对象的设计一定是好的设计吗？**

> 不一定。从继承的角度说，这一设计是存在巨大隐患的。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-7-从设计思想上谈谈继承本身的问题)6.7 从设计思想上谈谈继承本身的问题

假如现在有不同品牌的车，每辆车都有drive、music、addOil这三个方法。

```text
class Car{
  constructor(id) {
    this.id = id;
  }
  drive(){
    console.log("wuwuwu!");
  }
  music(){
    console.log("lalala!")
  }
  addOil(){
    console.log("哦哟！")
  }
}
class otherCar extends Car{} 
```

现在可以实现车的功能，并且以此去扩展不同的车。

但是问题来了，新能源汽车也是车，但是它并不需要addOil(加油)。

如果让新能源汽车的类继承Car的话，也是有问题的，俗称"大猩猩和香蕉"的问题。大猩猩手里有香蕉，但是我现在明明只需要香蕉，却拿到了一只大猩猩。也就是说加油这个方法，我现在是不需要的，但是由于继承的原因，也给到子类了。

> 继承的最大问题在于：无法决定继承哪些属性，所有属性都得继承。

当然你可能会说，可以再创建一个父类啊，把加油的方法给去掉，但是这也是有问题的，一方面父类是无法描述所有子类的细节情况的，为了不同的子类特性去增加不同的父类，代码势必会大量重复，另一方面一旦子类有所变动，父类也要进行相应的更新，代码的耦合性太高，维护性不好。

**那如何来解决继承的诸多问题呢？**

> 用组合，这也是当今编程语法发展的趋势，比如golang完全采用的是面向组合的设计方式。

顾名思义，面向组合就是先设计一系列零件，然后将这些零件进行拼装，来形成不同的实例或者类。

```text
function drive(){
  console.log("wuwuwu!");
}
function music(){
  console.log("lalala!")
}
function addOil(){
  console.log("哦哟！")
}

let car = compose(drive, music, addOil);
let newEnergyCar = compose(drive, music); 
```

> 代码干净，复用性也很好。这就是面向组合的设计方式。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_6-8-继承-简版)6.8 继承-简版

> 在 ES5 中，我们可以使用如下方式解决继承的问题

```text
function Super() {}
Super.prototype.getNumber = function() {
  return 1
}

function Sub() {}
let s = new Sub()
Sub.prototype = Object.create(Super.prototype, {
  constructor: {
    value: Sub,
    enumerable: false,
    writable: true,
    configurable: true
  }
}) 
```

- 以上继承实现思路就是将子类的原型设置为父类的原型
- 在 `ES6` 中，我们可以通过 `class` 语法轻松解决这个问题

```text
class MyDate extends Date {
  test() {
    return this.getTime()
  }
}
let myDate = new MyDate()
myDate.test() 
```

- 但是 `ES6` 不是所有浏览器都兼容，所以我们需要使用 `Babel` 来编译这段代码。
- 如果你使用编译过得代码调用 `myDate.test()`你会惊奇地发现出现了报错

> 因为在 `JS` 底层有限制，如果不是由 `Date`构造出来的实例的话，是不能调用 `Date` 里的函数的。所以这也侧面的说明了：`ES6` 中的 `class` 继承与 `ES5` 中的一般继承写法是不同的。

- 既然底层限制了实例必须由 `Date` 构造出来，那么我们可以改变下思路实现继承

```text
function MyData() {

}
MyData.prototype.test = function () {
  return this.getTime()
}
let d = new Date()
Object.setPrototypeOf(d, MyData.prototype)
Object.setPrototypeOf(MyData.prototype, Date.prototype) 
```

- 以上继承实现思路：先创建父类实例 => 改变实例原先的 `_proto__`转而连接到子类的 `prototype`=> 子类的 `prototype` 的 `__proto__` 改为父类的 `prototype`。
- 通过以上方法实现的继承就可以完美解决 `JS` 底层的这个限制

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_7-this)7 this

------

> 我们先来看几个函数调用的场景

```text
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo() 
```

- 对于直接调用 `foo` 来说，不管 `foo` 函数被放在了什么地方，`this` 一定是`window`
- 对于 `obj.foo()` 来说，我们只需要记住，谁调用了函数，谁就是 `this`，所以在这个场景下 `foo` 函数中的 `this` 就是 `obj` 对象
- 对于 `new` 的方式来说，`this` 被永远绑定在了 `c` 上面，不会被任何方式改变 `this`

> 说完了以上几种情况，其实很多代码中的 `this` 应该就没什么问题了，下面让我们看看箭头函数中的 `this`

```text
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()()) 
```

- 首先箭头函数其实是没有 `this` 的，箭头函数中的 `this` 只取决包裹箭头函数的第一个普通函数的 `this`。在这个例子中，因为包裹箭头函数的第一个普通函数是 `a`，所以此时的 `this` 是 `window`。另外对箭头函数使用 `bind`这类函数是无效的。
- 最后种情况也就是 `bind` 这些改变上下文的 `API` 了，对于这些函数来说，`this` 取决于第一个参数，如果第一个参数为空，那么就是 `window`。
- 那么说到 `bind`，不知道大家是否考虑过，如果对一个函数进行多次 `bind`，那么上下文会是什么呢？

```text
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ? 
```

> 如果你认为输出结果是 `a`，那么你就错了，其实我们可以把上述代码转换成另一种形式

```text
// fn.bind().bind(a) 等于
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a)
}
fn2() 
```

> 可以从上述代码中发现，不管我们给函数 `bind` 几次，`fn` 中的 `this` 永远由第一次 `bind` 决定，所以结果永远是 `window`

```text
let a = { name: 'html5' }
function foo() {
  console.log(this.name)
}
foo.bind(a)() // => 'html5' 
```

> 以上就是 `this` 的规则了，但是可能会发生多个规则同时出现的情况，这时候不同的规则之间会根据优先级最高的来决定 `this` 最终指向哪里。

> 首先，`new` 的方式优先级最高，接下来是 `bind` 这些函数，然后是 `obj.foo()` 这种调用方式，最后是 `foo` 这种调用方式，同时，箭头函数的 `this` 一旦被绑定，就不会再被任何方式所改变。

![image.png](https://interview.html5.wiki/image/20210629/112309.png)

**总结**

> `this`执行主体，谁把它执行的和在哪创建的在哪执行的都没有必然的关系

- 函数执行，看方法前面是否有点，没有点`this`是`window`(严格模式下是`undefined`)，有点，点前面是谁·this·就是谁
- 给当前元素的某个事件行为绑定方法，当事件行为触发，方法中的this是当前元素本身（排除`attachEvent`）
- 构造函数体中`this`是当前类的实例
- 箭头函数中没有执行主体，所用到的this都是所处上下文中的`this`
- 可以基于`Function.prototype`上的`call/apply/bind`改变`this`指向

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_8-内存机制)8 内存机制

------

> 网上的资料基本是这样说的: 基本数据类型用栈存储，引用数据类型用堆存储。

看起来没有错误，但实际上是有问题的。可以考虑一下闭包的情况，如果变量存在栈中，那函数调用完栈顶空间销毁，闭包变量不就没了吗？

其实还是需要补充一句:

> 闭包变量是存在堆内存中的。

**具体而言，以下数据类型存储在栈中:**

- `boolean`
- `null`
- `undefined`
- `number`
- `string`
- `symbol`
- `bigint`

而所有的对象数据类型存放在堆中。

> 值得注意的是，对于赋值操作，原始类型的数据直接完整地复制变量值，对象数据类型的数据则是复制引用地址。

因此会有下面的情况:

```text
let obj = { a: 1 };
let newObj = obj;
newObj.a = 2;
console.log(obj.a);//变成了2 
```

- 之所以会这样，是因为 `obj` 和 `newObj` 是同一份堆空间的地址，改变`newObj`，等于改变了共同的堆内存，这时候通过 obj 来获取这块内存的值当然会改变。 当然，你可能会问: 为什么不全部用栈来保存呢？
- 首先，对于系统栈来说，它的功能除了保存变量之外，还有创建并切换函数执行上下文的功能。举个例子:

当然，你可能会问: 为什么不全部用栈来保存呢？

首先，对于系统栈来说，它的功能除了保存变量之外，还有`创建并切换函数执行上下文的功能`。举个例子:

```text
function f(a) {
  console.log(a);
}

function func(a) {
  f(a);
}

func(1); 
```

- 假设用ESP指针来保存当前的执行状态，在系统栈中会产生如下的过程：
- 调用func, 将 func 函数的上下文压栈，ESP指向栈顶。
- 执行func，又调用f函数，将 f 函数的上下文压栈，ESP 指针上移。
- 执行完 f 函数，将ESP 下移，f函数对应的栈顶空间被回收。
- 执行完 func，ESP 下移，func对应的空间被回收。

图示如下:

![img](https://interview.html5.wiki/image/20210629/112313.png)

- 因此你也看到了，如果采用栈来存储相对基本类型更加复杂的对象数据，那么切换上下文的开销将变得巨大！
- 不过堆内存虽然空间大，能存放大量的数据，但与此同时垃圾内存的回收会带来更大的开销

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_9-执行上下文)9 执行上下文

------

> 当执行 JS 代码时，会产生三种执行上下文

- 全局执行上下文
- 函数执行上下文
- `eval` 执行上下文

> 每个执行上下文中都有三个重要的属性

- 变量对象（`VO`），包含变量、函数声明和函数的形参，该属性只能在全局上下文中访问
- 作用域链（`JS` 采用词法作用域，也就是说变量的作用域是在定义时就决定了）
- `this`

```text
var a = 10
function foo(i) {
  var b = 20
}
foo() 
```

> 对于上述代码，执行栈中有两个上下文：全局上下文和函数 foo 上下文。

```text
stack = [
    globalContext,
    fooContext
] 
```

> 对于全局上下文来说，`VO`大概是这样的

```text
globalContext.VO === globe
globalContext.VO = {
    a: undefined,
	foo: <Function>,
} 
```

> 对于函数 `foo` 来说，`VO` 不能访问，只能访问到活动对象（`AO`）

```text
fooContext.VO === foo.AO
fooContext.AO {
    i: undefined,
	b: undefined,
    arguments: <>
}
// arguments 是函数独有的对象(箭头函数没有)
// 该对象是一个伪数组，有 `length` 属性且可以通过下标访问元素
// 该对象中的 `callee` 属性代表函数本身
// `caller` 属性代表函数的调用者 
```

> 对于作用域链，可以把它理解成包含自身变量对象和上级变量对象的列表，通过 `[[Scope]]`属性查找上级变量

```text
fooContext.[[Scope]] = [
    globalContext.VO
]
fooContext.Scope = fooContext.[[Scope]] + fooContext.VO
fooContext.Scope = [
    fooContext.VO,
    globalContext.VO
] 
```

> 接下来让我们看一个老生常谈的例子，`var`

```text
b() // call b
console.log(a) // undefined

var a = 'Hello world'

function b() {
	console.log('call b')
} 
```

> 想必以上的输出大家肯定都已经明白了，这是因为函数和变量提升的原因。通常提升的解释是说将声明的代码移动到了顶部，这其实没有什么错误，便于大家理解。但是更准确的解释应该是：在生成执行上下文时，会有两个阶段。第一个阶段是创建的阶段（具体步骤是创建 `VO`），`JS` 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 `undefined`，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。

- 在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

```text
b() // call b second

function b() {
	console.log('call b fist')
}
function b() {
	console.log('call b second')
}
var b = 'Hello world' 
```

> `var`会产生很多错误，所以在 `ES6`中引入了 `let`。`let`不能在声明前使用，但是这并不是常说的 `let` 不会提升，`let` 提升了声明但没有赋值，因为临时死区导致了并不能在声明前使用。

- 对于非匿名的立即执行函数需要注意以下一点

```text
var foo = 1
(function foo() {
    foo = 10
    console.log(foo)
}()) // -> ƒ foo() { foo = 10 ; console.log(foo) } 
```

> 因为当 `JS` 解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 `foo`，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。

```text
specialObject = {};

Scope = specialObject + Scope;

foo = new FunctionExpression;
foo.[[Scope]] = Scope;
specialObject.foo = foo; // {DontDelete}, {ReadOnly}

delete Scope[0]; // remove specialObject from the front of scope chain 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#小结)小结

> 执行上下文可以简单理解为一个对象:

**它包含三个部分:**

- 变量对象(`VO`)
- 作用域链(词法作用域)
- `this`指向

**它的类型:**

- 全局执行上下文
- 函数执行上下文
- `eval`执行上下文

**代码执行过程:**

- 创建 全局上下文 (`global EC`)
- 全局执行上下文 (`caller`) 逐行 自上而下 执行。遇到函数时，函数执行上下文 (`callee`) 被`push`到执行栈顶层
- 函数执行上下文被激活，成为 `active EC`, 开始执行函数中的代码，`caller` 被挂起
- 函数执行完后，`callee` 被`pop`移除出执行栈，控制权交还全局上下文 (`caller`)，继续执行

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_10-变量提升)10 变量提升

------

> 当执行 `JS` 代码时，会生成执行环境，只要代码不是写在函数中的，就是在全局执行环境中，函数中的代码会产生函数执行环境，只此两种执行环境。

```text
b() // call b
console.log(a) // undefined

var a = 'Hello world'

function b() {
    console.log('call b')
} 
```

> 想必以上的输出大家肯定都已经明白了，这是因为函数和变量提升的原因。通常提升的解释是说将声明的代码移动到了顶部，这其实没有什么错误，便于大家理解。但是更准确的解释应该是：在生成执行环境时，会有两个阶段。第一个阶段是创建的阶段，`JS` 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 `undefined`，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用

- 在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

```text
b() // call b second

function b() {
    console.log('call b fist')
}
function b() {
    console.log('call b second')
}
var b = 'Hello world' 
```

> `var` 会产生很多错误，所以在 ES6中引入了 `let`。`let`不能在声明前使用，但是这并不是常说的 `let` 不会提升，`let`提升了，在第一阶段内存也已经为他开辟好了空间，但是因为这个声明的特性导致了并不能在声明前使用

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_11-模块化)11 模块化

------

> 模块化开发在现代开发中已是必不可少的一部分，它大大提高了项目的可维护、可拓展和可协作性。通常，我们 在浏览器中使用 `ES6` 的模块化支持，在 `Node` 中使用 `commonjs` 的模块化支持。

**分类:**

- `es6: import / export`
- `commonjs: require / module.exports / exports`
- `amd: require / defined`

**require与import的区别**

- `require`支持 动态导入，`import`不支持，正在提案 (`babel` 下可支持)
- `require`是 同步 导入，`impor`t属于 异步 导入
- `require`是 值拷贝，导出值变化不会影响导入值；`import`指向 内存地址，导入值会随导出值而变化

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_12-settimeout、promise、async-await-的区别)12 setTimeout、Promise、Async / Await 的区别

------

- 首先，我们先来了解一下基本概念：
	- js EventLoop 事件循环机制:
	- JavaScript的事件分两种，宏任务(macro-task)和微任务(micro-task)
- 宏任务：包括整体代码script，setTimeout，setInterval
- 微任务：Promise.then(非new Promise)，process.nextTick(node中)
- 事件的执行顺序，是先执行宏任务，然后执行微任务，这个是基础，任务可以有同步任务和异步任务，同步的进入主线程，异步的进入Event Table并注册函数，异步事件完成后，会将回调函数放入Event Queue中(宏任务和微任务是不同的Event Queue)，同步任务执行完成后，会从Event Queue中读取事件放入主线程执行，回调函数中可能还会包含不同的任务，因此会循环执行上述操作。
- 注意： setTimeOut并不是直接的把你的回掉函数放进上述的异步队列中去，而是在定时器的时间到了之后，把回掉函数放到执行异步队列中去。如果此时这个队列已经有很多任务了，那就排在他们的后面。这也就解释了为什么setTimeOut为什么不能精准的执行的问题了。
- setTimeout执行需要满足两个条件：
	- 主进程必须是空闲的状态，如果到时间了，主进程不空闲也不会执行你的回掉函数
	- 这个回掉函数需要等到插入异步队列时前面的异步函数都执行完了，才会执行
- 上面是比较官方的解释，说一下自己的理解吧：
	- 了解了什么是宏任务和微任务，就好理解多了，首先执行 宏任务 => 微任务的Event Queue => 宏任务的Event Queue
- promise、async/await
	- 首先，new Promise是同步的任务，会被放到主进程中去立即执行。而.then()函数是异步任务会放到异步队列中去，那什么时候放到异步队列中去呢？当你的promise状态结束的时候，就会立即放进异步队列中去了。
	- 带async关键字的函数会返回一个promise对象，如果里面没有await，执行起来等同于普通函数；如果没有await，async函数并没有很厉害是不是
	- await 关键字要在 async 关键字函数的内部，await 写在外面会报错；await如同他的语意，就是在等待，等待右侧的表达式完成。此时的await会让出线程，阻塞async内后续的代码，先去执行async外的代码。等外面的同步代码执行完毕，才会执行里面的后续代码。就算await的不是promise对象，是一个同步函数，也会等这样操作

![img](https://interview.html5.wiki/image/20210629/112320.jpeg)

根据图片显示我们来整理一下流程：

- 执行`console.log('script start')`，输出`script start`；
- 执行`setTimeout`，是一个异步动作，放入宏任务异步队列中；
- 执行`async1()`，输出`async1 start`，继续向下执行；
- 执行`async2()`，输出`async2`，并返回了一个`promise`对象，`await`让出了线程，把返回的promise加入了微任务异步队列，所以`async1()`下面的代码也要等待上面完成后继续执行;
- 执行 `new Promise`，输出`promise1`，然后将`resolve`放入微任务异步队列；
- 执行`console.log('script end')`，输出`script end`；
- 到此同步的代码就都执行完成了，然后去微任务异步队列里去获取任务
- 接下来执行`resolve`（`async2`返回的`promise`返回的），输出了`async1 end`。
- 然后执行`resolve`（`new Promise`的），输出了`promise2`
- 最后执行`setTimeout`，输出了`settimeout`

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_13-async原理)13 async原理

------

> `async/await`语法糖就是使用`Generator`函数+自动执行器来运作的

```text
// 定义了一个promise，用来模拟异步请求，作用是传入参数++
function getNum(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num+1)
        }, 1000)
    })
}

//自动执行器，如果一个Generator函数没有执行完，则递归调用
function asyncFun(func){
  var gen = func();

  function next(data){
    var result = gen.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    });
  }

  next();
}

// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步
var func = function* (){
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  console.log(f2) ;
};
asyncFun(func); 
```

- 在执行的过程中，判断一个函数的`promise`是否完成，如果已经完成，将结果传入下一个函数，继续重复此步骤
- 每一个 `next()` 方法返回值的 `value` 属性为一个 `Promise` 对象，所以我们为其添加 `then` 方法， 在 `then` 方法里面接着运行 `next` 方法挪移遍历器指针，直到 `Generator`函数运行完成

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_14-js-整数是怎么表示的)14 JS 整数是怎么表示的

------

> 通过 Number 类型来表示，遵循 IEEE754 标准，通过 64 位来表示一个数字，（1 + 11 + 52），最大安全数字是 Math.pow(2, 53) - 1，对于 16 位十进制。（符号位 + 指数位 + 小数部分有效位）

### (https://interview.html5.wiki/section/3-JavaScript模块.html#数值的存储空间是多大-如果后台发送了一个超过最大自己的数字怎么办)数值的存储空间是多大？如果后台发送了一个超过最大自己的数字怎么办

------

> Math.pow(2, 53) ，53 为有效数字，会发生截断，等于 JS 能支持的最大数字。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#多久才执行-event-loop)多久才执行，Event Loop

------

> setTimeout 按照顺序放到队列里面，然后等待函数调用栈清空之后才开始执行，而这些操作进入队列的顺序，则由设定的延迟时间来决定

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_17-js脚本加载问题-async、defer问题)17 js脚本加载问题，async、defer问题

------

- 如果依赖其他脚本和 DOM 结果，使用 defer
- 如果与 DOM 和其他脚本依赖不强时，使用 async

**script 引入方式**

- `html` 静态`<script>`引入
- `js` 动态插入`<script>`
- `<script defer>`: 异步加载，元素解析完成后执行
- `<script async>`: 异步加载，但执行时会阻塞元素渲染

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_18-javascript垃圾回收机制的了解)18 JavaScript垃圾回收机制的了解

------

- 对于在JavaScript中的字符串，对象，数组是没有固定大小的，只有当对他们进行动态分配存储时，解释器就会分配内存来存储这些数据，当JavaScript的解释器消耗完系统中所有可用的内存时，就会造成系统崩溃。
- 内存泄漏，在某些情况下，不再使用到的变量所占用内存没有及时释放，导致程序运行中，内存越占越大，极端情况下可以导致系统崩溃，服务器宕机。
- JavaScript有自己的一套垃圾回收机制，JavaScript的解释器可以检测到什么时候程序不再使用这个对象了（数据），就会把它所占用的内存释放掉。
- 针对JavaScript的来及回收机制有以下两种方法（常用）：标记清除，引用计数
- 标记清除

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_19-说说有几种类型的dom节点)19 说说有几种类型的DOM节点

------

- Document节点，整个文档是一个文档节点；
- Element节点，每个HTML标签是一个元素节点；
- Attribute节点，每一个HTML属性是一个属性节点；
- Text节点，包含在HTML元素中的文本是文本节点

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_20-说说javascript对象的几种创建方式)20 说说JavaScript对象的几种创建方式

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#工厂模式-创建方式)工厂模式,创建方式

```text
function createPerson(name,age,job){
    var o = new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName = function(){
        alert(this.name);
    }
}
var person1 = createPerson("da",1,"it");
var person2 = createPerson("dada",2,"it"); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#构造函数模式)构造函数模式

```text
function Person(name,age,ob){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName = function(){
        alert(this.name);
    }
var person1 = new Person("dada",1,"web");
var person2 = new Person("dada",2,"web");
} 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#使用原型模式)使用原型模式

```text
function Person(){
}
Person.prototype.name = "da";
Person.prototype.age = 1;
Person.prototype.job = "web";
Person.prototype.sayName = function(){
    alert(this.name);
}
 
var person1 = new Person();
person1.sayName();    //"dada"
 
var person2 = new Person();
person2.sayName();    //"dada"
 
alert(person1.sayName == person2.sayName);   //true 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#组合使用构造函数模式和原型模式)组合使用构造函数模式和原型模式

```text
function Person(name,age){
    this.name = name;
    this.age = age;
    this.friends = ["da","dada"];
}
Person.prototype = {
    constructor:Person,
    sayName:function(){
        alert(this.name);
    }
}
var person1 = new Person("da1",1);
var person2 = new Person("da2",2);
person1.friends.push("dadada");
console.log(person1.friends);    //["da","dada","dadada"]
console.log(person2.friends);    //["da","dada"]
console.log(person1.friends === person2.friends);    //false
console.log(person1.sayName === person2.sayName);   //true 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#动态原型模式)动态原型模式

```text
function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;

    if(typeof this.sayName!="function"){
        Person.prototype.sayName=function(){
            alert(this.name);
        };
    }
} 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_21-如何转化类数组成数组)21 如何转化类数组成数组

------

> 因为`arguments`本身并不能调用数组方法，它是一个另外一种对象类型，只不过属性从`0`开始排，依次为`0，1，2...`最后还有`callee`和`length`属性。我们也把这样的对象称为类数组

**常见的类数组还有：**

- 用`getElementsByTagName/ClassName()`获得的`HTMLCollection`
- 用`querySelector`获得的`nodeList`

> 那这导致很多数组的方法就不能用了，必要时需要我们将它们转换成数组，有哪些方法呢？

### (https://interview.html5.wiki/section/3-JavaScript模块.html#call)call

```text
function sum(a, b) {
  let args = Array.prototype.slice.call(arguments);
  console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
}
sum(1, 2);//3 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#array-from)Array.from

```text
function sum(a, b) {
  let args = Array.from(arguments);
  console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
}
sum(1, 2);//3 
```

这种方法也可以用来转换`Set`和`Map`哦！

### (https://interview.html5.wiki/section/3-JavaScript模块.html#es6展开运算符)ES6展开运算符

```text
function sum(a, b) {
  let args = [...arguments];
  console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
}
sum(1, 2);//3 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#利用concat-apply)利用concat+apply

```text
function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments);//apply方法会把第二个参数展开
  console.log(args.reduce((sum, cur) => sum + cur));//args可以调用数组原生的方法啦
}
sum(1, 2);//3 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_22-foreach中return有效果吗-如何中断foreach循环)22 forEach中return有效果吗？如何中断forEach循环？

------

> 在`forEach`中用`return`不会返回，函数会继续执行。

```text
let nums = [1, 2, 3];
nums.forEach((item, index) => {
  return;//无效
}) 
```

**中断方法：**

- 使用`try`监视代码块，在需要中断的地方抛出异常。
- 官方推荐方法（替换方法）：用`every`和`some`替代`forEach`函数。`every`在碰到`return false`的时候，中止循环。`some`在碰到`return true`的时候，中止循环

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_23-js判断数组中是否包含某个值)23 JS判断数组中是否包含某个值

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#方法一-array-indexof)方法一：array.indexOf

> 此方法判断数组中是否存在某个值，如果存在，则返回数组元素的下标，否则返回`-1`。

```text
var arr=[1,2,3,4];
var index=arr.indexOf(3);
console.log(index); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#includes)includes

> 此方法判断数组中是否存在某个值，如果存在返回`true`，否则返回`false`

```text
var arr=[1,2,3,4];
if(arr.includes(3))
    console.log("存在");
else
    console.log("不存在"); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#find)find

返回数组中满足条件的第一个元素的值，如果没有，返回`undefined`

```text
var arr=[1,2,3,4];
var result = arr.find(item =>{
    return item > 3
});
console.log(result); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#findindex)findIndex

> 返回数组中满足条件的第一个元素的下标，如果没有找到，返回`-1`

```text
var arr=[1,2,3,4];
var result = arr.findIndex(item =>{
    return item > 3
});
console.log(result); 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_24-js中flat-数组扁平化)24 JS中flat---数组扁平化

------

> 对于前端项目开发过程中，偶尔会出现层叠数据结构的数组，我们需要将多层级数组转化为一级数组（即提取嵌套数组元素最终合并为一个数组），使其内容合并且展开。那么该如何去实现呢？

需求:多维数组=>一维数组

```text
let ary = [1, [2, [3, [4, 5]]], 6];// -> [1, 2, 3, 4, 5, 6]
let str = JSON.stringify(ary); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#调用es6中的flat方法)调用ES6中的flat方法

```text
ary = ary.flat(Infinity); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#replace-split)replace + split

```text
ary = str.replace(/(\[|\])/g, '').split(',') 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#replace-json-parse)replace + JSON.parse

```text
str = str.replace(/(\[|\])/g, '');
str = '[' + str + ']';
ary = JSON.parse(str); 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#普通递归)普通递归

```text
let result = [];
let fn = function(ary) {
  for(let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])){
      fn(item);
    } else {
      result.push(item);
    }
  }
} 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#利用reduce函数迭代)利用reduce函数迭代

```text
function flatten(ary) {
    return ary.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}
let ary = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(ary)) 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#扩展运算符)扩展运算符

```text
//只要有一个元素有数组，那么循环继续
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
} 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_25-js中浅拷贝的手段有哪些)25 JS中浅拷贝的手段有哪些

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#重要-什么是拷贝)重要: 什么是拷贝？

首先来直观的感受一下什么是拷贝

```text
let arr = [1, 2, 3];
let newArr = arr;
newArr[0] = 100;

console.log(arr);//[100, 2, 3] 
```

> 这是直接赋值的情况，不涉及任何拷贝。当改变`newArr`的时候，由于是同一个引用，arr指向的值也跟着改变。

现在进行浅拷贝:

```text
let arr = [1, 2, 3];
let newArr = arr.slice();
newArr[0] = 100;

console.log(arr);//[1, 2, 3] 
```

> 当修改newArr的时候，arr的值并不改变。什么原因?因为这里newArr是arr浅拷贝后的结果，newArr和arr现在引用的已经不是同一块空间啦！

这就是浅拷贝！

但是这又会带来一个潜在的问题:

```text
let arr = [1, 2, {val: 4}];
let newArr = arr.slice();
newArr[2].val = 1000;

console.log(arr);//[ 1, 2, { val: 1000 } ] 
```

不是已经不是同一块空间的引用了吗？为什么改变了newArr改变了第二个元素的val值，arr也跟着变了。

> 这就是浅拷贝的限制所在了。它只能拷贝一层对象。如果有对象的嵌套，那么浅拷贝将无能为力。但幸运的是，深拷贝就是为了解决这个问题而生的，它能

解决无限极的对象嵌套问题，实现彻底的拷贝。当然，这是我们下一篇的重点。 现在先让大家有一个基本的概念。

接下来，我们来研究一下JS中实现浅拷贝到底有多少种方式？

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_1-手动实现)1. 手动实现

```text
const shallowClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? []: {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
          cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
} 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_2-object-assign)2. Object.assign

> 但是需要注意的是，`Object.assgin()` 拷贝的是对象的属性的引用，而不是对象本身。

```text
let obj = { name: 'sy', age: 18 };
const obj2 = Object.assign({}, obj, {name: 'sss'});
console.log(obj2);//{ name: 'sss', age: 18 } 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_3-concat浅拷贝数组)3. concat浅拷贝数组

```text
let arr = [1, 2, 3];
let newArr = arr.concat();
newArr[1] = 100;
console.log(arr);//[ 1, 2, 3 ] 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_4-slice浅拷贝)4. slice浅拷贝

开头的例子

### (https://interview.html5.wiki/section/3-JavaScript模块.html#_5-展开运算符)5. ...展开运算符

```text
let arr = [1, 2, 3];
let newArr = [...arr];//跟arr.slice()是一样的效果 
```

# (https://interview.html5.wiki/section/3-JavaScript模块.html#)

------

- `map`: 遍历数组，返回回调返回值组成的新数组
- `forEach`: 无法`break`，可以用`try/catch`中`throw new Error`来停止
- `filter`: 过滤
- `some`: 有一项返回`true`，则整体为`true`
- `every`: 有一项返回`false`，则整体为`false`
- `join`: 通过指定连接符生成字符串
- `push / pop`: 末尾推入和弹出，改变原数组， 返回推入/弹出项
- `unshift / shift`: 头部推入和弹出，改变原数组，返回操作项
- `sort(fn) / reverse`: 排序与反转，改变原数组
- `concat`: 连接数组，不影响原数组， 浅拷贝
- `slice(start, end)`: 返回截断后的新数组，不改变原数组
- `splice(start, number, value...)`: 返回删除元素组成的数组，`value`为插入项，改变原数组
- `indexOf / lastIndexOf(value, fromIndex)`: 查找数组项，返回对应的下标
- `reduce / reduceRight(fn(prev, cur)`， `defaultPrev)`: 两两执行，`prev` 为上次化简函数的`return`值，`cur`为当前值(从第二项开始)

**数组乱序：**

```text
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
    return Math.random() - 0.5;
}); 
```

**数组拆解: flat: [1,[2,3]] --> [1, 2, 3]**

```text
Array.prototype.flat = function() {
    this.toString().split(',').map(item => +item )
} 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_27-代码的复用)27 代码的复用

------

> 当你发现任何代码开始写第二遍时，就要开始考虑如何复用。一般有以下的方式:

- 函数封装
- 继承
- 复制`extend`
- 混入`mixin`
- 借用`apply/call`

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_28-操作dom节点方法)28 操作DOM节点方法

------

**创建新节点**

```text
createDocumentFragment()    //创建一个DOM片段
createElement()   //创建一个具体的元素
createTextNode()   //创建一个文本节点 
```

**添加、移除、替换、插入**

```text
appendChild()      //添加
removeChild()      //移除
replaceChild()      //替换
insertBefore()      //插入 
```

**查找**

```text
getElementsByTagName()    //通过标签名称
getElementsByName()     //通过元素的Name属性的值
getElementById()        //通过元素Id，唯一性 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_29-ajax总结)29 Ajax总结

------

- `Ajax`的原理简单来说是在用户和服务器之间加了—个中间层(`AJAX`引擎)，通过`XmlHttpRequest`对象来向服务器发异步请求，从服务器获得数据，然后用`javascript`来操作DOM而更新页面。使用户操作与服务器响应异步化。这其中最关键的一步就是从服务器获得请求数据
- `Ajax`的过程只涉及`JavaScript`、`XMLHttpRequest`和`DOM`。`XMLHttpRequest`是`ajax`的核心机制

```text
// 1. 创建连接
var xhr = null;
xhr = new XMLHttpRequest()
// 2. 连接服务器
xhr.open('get', url, true)
// 3. 发送请求
xhr.send(null);
// 4. 接受请求
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            success(xhr.responseText);
        } else { // fail
            fail && fail(xhr.status);
        }
    }
} 
```

**ajax 有那些优缺点?**

**优点：**

- 通过异步模式，提升了用户体验.
- 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用.
- `Ajax`在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。
- `Ajax`可以实现动态不刷新（局部刷新）

**缺点：**

- 安全问题 `AJAX`暴露了与服务器交互的细节。
- 对搜索引擎的支持比较弱。
- 不容易调试。

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_30-谈谈你对for-in-for-of的理解)30 谈谈你对for in/for of的理解

------

> `for in`性能很差，迭代当前对象中可枚举的属性，并且一直查找到原型上去。

- 问题1：遍历顺序数字优先
- 问题2：无法遍历`symbol`属性
- 问题3：可以遍历到原型属性中可枚举的

```text
let obj = {
  name: 'poetry',
  age: 22,
  [Symbol('aa')]: 100,
  0: 200,
  1: 300
} 
```

![img](https://interview.html5.wiki/image/20210629/112333.png) ![img](https://interview.html5.wiki/image/20210629/112347.png)

```text
for(let key in obj) {
  // 不遍历原型上的属性
  if(!obj.hasOwnProperty(key)) {
    break;
  }
} 
```

**遍历obj的私有属性拼接**

```text
let keys = Object.keys(obj)
keys = keys.concat(Object.getOwnPropertySymbols(obj1))
keys.forEach(v=>{
  console.log(v)
}) 
```

**for of**

- 部分数据结构实现了迭代器规范
	- `Symbol.itertor`
	- `数组/set/map`
	- 对象没有实现，`for of`不能遍历对象

```text
// 数组具备迭代器规范，模拟实现
var arr = [1,2,3,4,5]

arr[Symbol.iterator] = function() {
  let self = this, index = 0;

  return {
    next() {
      if(index > self.length - 1) {
        return {
          done: true,
          value: undefined
        }
      }
      return {
        done: false,
        value: self[index++]
      }
    }
  }
} 
// 使对象具备可迭代特性
let obj = {
  0: 100,
  1: 200,
  length: 2
}

obj[Symbol.iterator] = Array.prototype[Symbol.iterator]

for(var val of obj) {
  console.log(val)
} 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_31-数组相关)31 数组相关

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#的区别)的区别？

```text
console.log(Array(3)) // [empty x 3]
console.log(Array(3, 4)) // [3, 4] 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#请创建一个长度为100-值都为1的数组)请创建一个长度为100，值都为1的数组

```text
new Array(100).fill(1) 
```

### (https://interview.html5.wiki/section/3-JavaScript模块.html#请创建一个长度为100-值为对应下标的数组)请创建一个长度为100，值为对应下标的数组

```text
// cool的写法：
[...Array(100).keys()]

// 其他方法：
Array(100).join(",").split(",").map((v, i) => i)
Array(100).fill().map((v, i) => i) 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_32-setinterval存在哪些问题)32 setInterval存在哪些问题？

------

> `JavaScript`中使用 `setInterval` 开启轮询。定时器代码可能在代码再次被添加到队列之前还没有完成执行，结果导致定时器代码连续运行好几次，而之间没有任何停顿。而javascript引擎对这个问题的解决是：当使用`setInterval()`时，仅当没有该定时器的任何其他代码实例时，才将定时器代码添加到队列中。这确保了定时器代码加入到队列中的最小时间间隔为指定间隔。

但是，这样会导致两个问题：

- 某些间隔被跳过；
- 多个定时器的代码执行之间的间隔可能比预期的小

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_33-链式调用settimeout对比setinterval)33 链式调用setTimeout对比setInterval

------

在上一题中也说到了`setInterval`本身是会存在一些问题的。而使用链式调用`setTimeout`这种方式会比它好一些：

```text
setTimeout(function fn(){
    console.log('我是setTimeout');
    setTimeout(fn, 1000);
},1000); 
```

这个模式链式调用了`setTimeout()`，每次函数执行的时候都会创建一个新的定时器。第二个`setTimeout()`调用当前执行的函数，并为其设置另外一个定时器。这样做的好处是：

- 在前一个定时器代码执行完之前，不会向队列插入新的定时器代码，确保不会有任何缺失的间隔。
- 而且，它可以保证在下一次定时器代码执行之前，至少要等待指定的间隔，避免了连续的运行。

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_34-说一下requestanimationframe)34 说一下requestAnimationFrame

------

**简介：**

显示器都有自己固有的刷新频率(60HZ或者75HZ)，也就是说每秒最多重绘60次或者75次。而`requestAnimationFrame`的基本思想就是与这个刷新频率保持同步，利用这个刷新频率进行重绘。

**特点：**

- 使用这个API时，一旦页面不处于浏览器的当前标签，就会自动停止刷新，这样就节省了CPU、GPU、电力。
- 由于它时在主线程上完成的，所以若是主线程非常忙时它的动画也会收到影响
- 它使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。

**使用：**

正常使用：

```text
const requestID = window.requestAnimationFrame(callback); 
```

兼容版本：

```text
// 给 window 下挂载一个兼容版本的 requestAniFrame
window.requestAniFrame = (function () {
  return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
})(); 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_35-requestanimationframe对比settimeout)35 requestAnimationFrame对比setTimeout

------

- **屏幕刷新频率：**屏幕每秒出现图像的次数。普通笔记本为`60Hz`
- **动画原理：**计算机每`16.7ms`刷新一次，由于人眼的视觉停留，所以看起来是流畅的移动。
- **setTimeout：**通过设定间隔时间来不断改变图像位置，达到动画效果。但是容易出现卡顿抖动的现象；原因是：

1. `settimeout`任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
2. `settimeout`的固定时间间隔不一定与屏幕刷新时间相同，会引起丢帧。

> **requestAnimationFrame：**优势：由系统决定回调函数的执行时机。60Hz的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。且由于一旦页面不处于浏览器的当前标签，就会自动停止刷新，这样就节省了CPU、GPU、电力。

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_36-xmlhttprequest)36 XMLHttpRequest

------

### (https://interview.html5.wiki/section/3-JavaScript模块.html#关于http-xmlhttprequest-ajax的关系)关于http,XMLHttpRequest,Ajax的关系

- `http`是浏览器和web服务器交换数据的协议,规范
- `XMLHttpRequest`是一个`JS`对象，是浏览器实现的一组`api`函数，使用这些函数，浏览器再通过`http`协议请求和发送数据。
- `Ajax`是一种技术方案，但并不是一种新技术，它最核心的就是依赖浏览器提供的`XMLHttpRequest`对象。用一句话来概括就是`我们使用XMLHttpRequest对象来发送一个Ajax请求`。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#xmlhttprequest的发展历程是怎样的)XMLHttpRequest的发展历程是怎样的？

它最开始只是微软浏览器提供的一个接口，后来各大浏览器纷纷效仿也提供了这个接口，再后来W3C对它进行了标准化，提出了`XMLHttpRequest`标准。标准又分为`Level 1`和`Level 2`。

`Level 2`相对于`Level 1`做了很大的改进，具体来说是：

- 可以设置HTTP请求的超时时间。
- 可以使用FormData对象管理表单数据。
- 可以上传文件。
- 可以请求不同域名下的数据（跨域请求）。
- 可以获取服务器端的二进制数据。
- 可以获得数据传输的进度信息。

### (https://interview.html5.wiki/section/3-JavaScript模块.html#使用xmlhttprequest封装一个get和post请求)使用XMLHttpRequest封装一个get和post请求

**get请求**：

核心就四步：

1. `var xhr = new XMLHttpRequest()`
2. `xhr.open('GET', 'http://www.example.com/api/getname', true)`
3. `xhr.onreadystatechange = function () {}`
4. `xhr.send()`

让我们来封装一个简易版的：

```text
/*
* xhr的get请求
* @param url: 请求地址
* @param params: 请求参数
* @param onSuccess: 成功回调函数
* @param onError: 失败回调函数
*/
function xhrGet (url, params = {}, onSuccess, onError) {
  // 兼容IE6
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  let paramString = formatParams(params);
  // xhr.open的第三个参数isAsync：是否异步 
  xhr.open('GET', `${url}${paramString}`, true);
  xhr.onreadystatechange = function () {
    // console.log(e);
    console.log(this);
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 300) {
        onSuccess(this.response);
      } else {
        onError(this.response)
      }
    }
  }
  xhr.send();
}
// 处理参数：如将{name: 'lindaidai'}转为'?name=lindaidai'
function formatParams (params) {
  var paramString = Object.keys(params).map(key => {
    return `${key}=${encodeURIComponent(params[key])}`
  }).join('&');
  return paramString ? `?${paramString}` : ''
} 
```

（当然上面的兼容`IE6`估计现在考的不多了，而且我这种写法其实也没啥用，因为如果真是在`IE6`下的话，后面的`Object.keys()`等方法也用不了了）

需要注意的是两种状态，一个是`readyState`，一个是`status`。

> `readyState`请求状态：

- 0（未初始化）：还没有调用 open() 方法。
- 1（载入）：已调用 send() 方法，正在发送请求。
- 2（载入完成）：send() 方法完成，已收到全部响应内容。
- 3（解析）：正在解析响应内容。
- 4（完成）：响应内容解析完成，可以在客户端调用。

> `status`结果状态码：

- 0 ：如果状态是 UNSENT 或 OPENED；或者如果错误标签被设置(例如跨域时)
- 200 成功
- 其它HTTP状态码

**post请求：**

```text
function xhrPost (url, params, onSuccess, onError) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  // ajax的默认请求ContentType:text/plain(纯文本)
  xhr.setRequestHeader("Content-Type", "application-x-www-form-urlencode");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status >= 200 && this.status < 300) {
        onSuccess(this.response);
      } else {
        onError(this.response);
      }
    }
  }
  xhr.send(params);
} 
```

## (https://interview.html5.wiki/section/3-JavaScript模块.html#_37-javascript-实现对上传图片的压缩)37 JavaScript 实现对上传图片的压缩？

------

> 答：读取用户上传的 File 对象，读写到画布（canvas）上，利用 Canvas 的 API 进行压缩，完成压缩之后再转成 `File（Blob）` 对象，上传到远程图片服务器；不过有时候我们也需要将一个 `base64` 字符串压缩之后再变为 `base64` 字符串传入到远程数据库或者再转成 `File（Blob）` 对象。

思路就是 `File + Canvas` 的 `drawImage`

## (https://interview.html5.wiki/section/3-JavaScript模块.html#参考)参考

------

- [JS灵魂之问 (opens new window)](https://juejin.cn/post/6844903974378668039)