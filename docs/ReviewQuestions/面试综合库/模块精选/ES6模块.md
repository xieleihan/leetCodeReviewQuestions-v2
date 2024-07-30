# ES6 面试题精选

## (https://interview.html5.wiki/section/4-ES6模块.html#_1-es5、es6-和-es2015-有什么区别)1 ES5、ES6 和 ES2015 有什么区别?

------

> `ES2015`特指在`2015`年发布的新一代`JS`语言标准，`ES6`泛指下一代 JS 语言标准，包含`ES2015`、`ES2016`、`ES2017`、`ES2018`等。现阶段在绝大部分场景下，`ES2015`默认等同`ES6`。`ES5`泛指上一代语言标准。`ES2015`可以理解为`ES5`和`ES6`的时间分界线

## (https://interview.html5.wiki/section/4-ES6模块.html#_2-babel-是什么-有什么作用)2 babel 是什么，有什么作用?

------

> `babel`是一个 `ES6` 转码器，可以将 `ES6` 代码转为 `ES5` 代码，以便兼容那些还没支持`ES6`的平台

## (https://interview.html5.wiki/section/4-ES6模块.html#_3-let-有什么用-有了-var-为什么还要用-let)3 let 有什么用，有了 var 为什么还要用 let？

------

> 在`ES6`之前，声明变量只能用`var`，`var`方式声明变量其实是很不合理的，准确的说，是因为`ES5`里面没有块级作用域是很不合理的。没有块级作用域回来带很多难以理解的问题，比如`for`循环`var`变量泄露，变量覆盖等问题。`let`声明的变量拥有自己的块级作用域，且修复了`var`声明变量带来的变量提升问题。

## (https://interview.html5.wiki/section/4-ES6模块.html#_4-举一些-es6-对-string-字符串类型做的常用升级优化)4 举一些 ES6 对 String 字符串类型做的常用升级优化?

------

**优化部分**

> `ES6`新增了字符串模板，在拼接大段字符串时，用反斜杠`(`)`取代以往的字符串相加的形式，能保留所有空格和换行，使得字符串拼接看起来更加直观，更加优雅

**升级部分**

> `ES6`在`String`原型上新增了`includes()`方法，用于取代传统的只能用`indexOf`查找包含字符的方法(`indexOf`返回`-1`表示没查到不如`includes`方法返回`false`更明确，语义更清晰), 此外还新增了`startsWith()`, `endsWith(),` `padStart()`,`padEnd()`,`repeat()`等方法，可方便的用于查找，补全字符串

## (https://interview.html5.wiki/section/4-ES6模块.html#_5-举一些-es6-对-array-数组类型做的常用升级优化)5 举一些 ES6 对 Array 数组类型做的常用升级优化

------

**优化部分**

- 数组解构赋值。`ES6`可以直接以`let [a,b,c] = [1,2,3]`形式进行变量赋值，在声明较多变量时，不用再写很多`let(var),`且映射关系清晰，且支持赋默认值
- 扩展运算符。`ES6`新增的扩展运算符(`...`)(重要),可以轻松的实现数组和松散序列的相互转化，可以取代`arguments`对象和`apply`方法，轻松获取未知参数个数情况下的参数集合。（尤其是在`ES5`中，`arguments`并不是一个真正的数组，而是一个类数组的对象，但是扩展运算符的逆运算却可以返回一个真正的数组）。扩展运算符还可以轻松方便的实现数组的复制和解构赋值（`let a = [2,3,4]`; `let b = [...a]`）

**升级部分**

> `ES6`在`Array`原型上新增了`find()`方法，用于取代传统的只能用`indexOf`查找包含数组项目的方法,且修复了`indexOf`查找不到`NaN的bug([NaN].indexOf(NaN) === -1)`.此外还新增了`copyWithin()`,`includes()`, `fill()`,`flat()`等方法，可方便的用于字符串的查找，补全,转换等

## (https://interview.html5.wiki/section/4-ES6模块.html#_6-举一些-es6-对-number-数字类型做的常用升级优化)6 举一些 ES6 对 Number 数字类型做的常用升级优化

------

**优化部分**

> ES6 在`Number`原型上新增了`isFinite()`, `isNaN()`方法，用来取代传统的全局`isFinite(),` `isNaN()`方法检测数值是否有限、是否是`NaN`。`ES5`的`isFinite()`, `isNaN()`方法都会先将非数值类型的参数转化为`Number`类型再做判断，这其实是不合理的，最造成 i`sNaN('NaN') === true`的奇怪行为`--'NaN'`是一个字符串，但是`isNaN`却说这就是`NaN`。而`Number.isFinite()`和`Number.isNaN()`则不会有此类问题(`Number.isNaN('NaN') === false`)。（`isFinite()`同上）

**升级部分**

> `ES6`在`Math`对象上新增了`Math.cbrt()`，`trunc()`，`hypot()`等等较多的科学计数法运算方法，可以更加全面的进行立方根、求和立方根等等科学计算

## (https://interview.html5.wiki/section/4-ES6模块.html#_7-举一些-es6-对-object-类型做的常用升级优化)7 举一些 ES6 对 Object 类型做的常用升级优化

------

**优化部分**

> 对象属性变量式声明。`ES6`可以直接以变量形式声明对象属性或者方法，。比传统的键值对形式声明更加简洁，更加方便，语义更加清晰

```text
let [apple, orange] = ['red appe', 'yellow orange'];
let myFruits = {apple, orange};    // let myFruits = {apple: 'red appe', orange: 'yellow orange'};
```

> 尤其在对象解构赋值(见优化部分 b.)或者模块输出变量时，这种写法的好处体现的最为明显

```text
let {keys, values, entries} = Object;
let MyOwnMethods = {keys, values, entries}; // let MyOwnMethods = {keys: keys, values: values, entries: entries}
```

可以看到属性变量式声明属性看起来更加简洁明了。方法也可以采用简洁写法

```text
let es5Fun = {
    method: function(){}
};
let es6Fun = {
    method(){}
}
```

> 对象的解构赋值。 `ES6`对象也可以像数组解构赋值那样，进行变量的解构赋值

```text
let {apple, orange} = {apple: 'red appe', orange: 'yellow orange'};
```

> 对象的扩展运算符(`...`)。 ES6 对象的扩展运算符和数组扩展运算符用法本质上差别不大，毕竟数组也就是特殊的对象。对象的扩展运算符一个最常用也最好用的用处就在于可以轻松的取出一个目标对象内部全部或者部分的可遍历属性，从而进行对象的合并和分解

```text
let {apple, orange, ...otherFruits} = {apple: 'red apple', orange: 'yellow orange', grape: 'purple grape', peach: 'sweet peach'};
// otherFruits  {grape: 'purple grape', peach: 'sweet peach'}
// 注意: 对象的扩展运算符用在解构赋值时，扩展运算符只能用在最有一个参数(otherFruits后面不能再跟其他参数)
let moreFruits = {watermelon: 'nice watermelon'};
let allFruits = {apple, orange, ...otherFruits, ...moreFruits};
```

> `super` 关键字。`ES6`在`Class`类里新增了类似`this`的关键字`super`。同`this`总是指向当前函数所在的对象不同，`super`关键字总是指向当前函数所在对象的原型对象

**升级部分**

> ```
> ES6`在`Object`原型上新增了`is()`方法，做两个目标对象的相等比较，用来完善`'==='`方法。`'==='`方法中`NaN === NaN //false`其实是不合理的，`Object.is`修复了这个小`bug`。`(Object.is(NaN, NaN) // true)
> ```

> `ES6`在`Object`原型上新增了`assign()`方法，用于对象新增属性或者多个对象合并

```text
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

> **注意**: `assign`合并的对象`target`只能合并`source1`、s`ource2`中的自身属性，并不会合并`source1`、`source2`中的继承属性，也不会合并不可枚举的属性，且无法正确复制 get 和 set 属性（会直接执行`get/set`函数，取`return`的值）

- `ES6`在`Object`原型上新增了`getOwnPropertyDescriptors()`方法，此方法增强了`ES5`中`getOwnPropertyDescriptor()`方法，可以获取指定对象所有自身属性的描述对象。结合`defineProperties()`方法，可以完美复制对象，包括复制`get`和`set`属性
- `ES6`在`Object`原型上新增了`getPrototypeOf()`和`setPrototypeOf()`方法，用来获取或设置当前对象的`prototype`对象。这个方法存在的意义在于，`ES5`中获取设置`prototype`对像是通过`__proto__`属性来实现的，然而`__proto__`属性并不是 ES 规范中的明文规定的属性，只是浏览器各大产商“私自”加上去的属性，只不过因为适用范围广而被默认使用了，再非浏览器环境中并不一定就可以使用，所以为了稳妥起见，获取或设置当前对象的`prototype`对象时，都应该采用 ES6 新增的标准用法
- `ES6`在`Object`原型上还新增了`Object.keys()`，`Object.values()`，`Object.entries()`方法，用来获取对象的所有键、所有值和所有键值对数组

## (https://interview.html5.wiki/section/4-ES6模块.html#_8-举一些-es6-对-function-函数类型做的常用升级优化)8 举一些 ES6 对 Function 函数类型做的常用升级优化?

------

**优化部分**

> 箭头函数(核心)。箭头函数是 ES6 核心的升级项之一，箭头函数里没有自己的 this,这改变了以往 JS 函数中最让人难以理解的 this 运行机制。主要优化点

- 箭头函数内的 this 指向的是函数定义时所在的对象，而不是函数执行时所在的对象。ES5 函数里的 this 总是指向函数执行时所在的对象，这使得在很多情况下`this`的指向变得很难理解，尤其是非严格模式情况下，`this`有时候会指向全局对象，这甚至也可以归结为语言层面的 bug 之一。ES6 的箭头函数优化了这一点，它的内部没有自己的`this`,这也就导致了`this`总是指向上一层的`this`，如果上一层还是箭头函数，则继续向上指，直到指向到有自己`this`的函数为止，并作为自己的`this`
- 箭头函数不能用作构造函数，因为它没有自己的`this`，无法实例化
- 也是因为箭头函数没有自己的 this,所以箭头函数 内也不存在`arguments`对象。（可以用扩展运算符代替）
- 函数默认赋值。`ES6`之前，函数的形参是无法给默认值得，只能在函数内部通过变通方法实现。`ES6`以更简洁更明确的方式进行函数默认赋值

```text
function es6Fuc (x, y = 'default') {
    console.log(x, y);
}
es6Fuc(4) // 4, default
```

**升级部分**

> ES6 新增了双冒号运算符，用来取代以往的`bind`，`call`,和`apply`。(浏览器暂不支持，`Babel`已经支持转码)

```text
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);
```

## (https://interview.html5.wiki/section/4-ES6模块.html#_9-symbol-是什么-有什么作用)9 Symbol 是什么，有什么作用？

------

> `Symbol`是`ES6`引入的第七种原始数据类型（说法不准确，应该是第七种数据类型，Object 不是原始数据类型之一，已更正），所有 Symbol()生成的值都是独一无二的，可以从根本上解决对象属性太多导致属性名冲突覆盖的问题。对象中`Symbol()`属性不能被`for...in`遍历，但是也不是私有属性

## (https://interview.html5.wiki/section/4-ES6模块.html#_10-set-是什么-有什么作用)10 Set 是什么，有什么作用？

------

> `Set`是`ES6`引入的一种类似`Array`的新的数据结构，`Set`实例的成员类似于数组`item`成员，区别是`Set`实例的成员都是唯一，不重复的。这个特性可以轻松地实现数组去重

### (https://interview.html5.wiki/section/4-ES6模块.html#介绍下-set、map、weakset-和-weakmap-的区别)介绍下 Set、Map、WeakSet 和 WeakMap 的区别

- Set——对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
- WeakSet——成员都是对象；成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏；
- Map——本质上是键值对的集合，类似集合；可以遍历，方法很多，可以跟各种数据格式转换。
- WeakMap——只接受对象最为键名（null 除外），不接受其他类型的值作为键名；键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的；不能遍历，方法有 get、set、has、delet

## (https://interview.html5.wiki/section/4-ES6模块.html#_11-map-是什么-有什么作用)11 Map 是什么，有什么作用？

------

> `Map`是`ES6`引入的一种类似`Object`的新的数据结构，`Map`可以理解为是`Object`的超集，打破了以传统键值对形式定义对象，对象的`key`不再局限于字符串，也可以是`Object`。可以更加全面的描述对象的属性

## (https://interview.html5.wiki/section/4-ES6模块.html#_12-proxy-是什么-有什么作用)12 Proxy 是什么，有什么作用？

------

> ```
> Proxy`是`ES6`新增的一个构造函数，可以理解为 JS 语言的一个代理，用来改变 JS 默认的一些语言行为，包括拦截默认的`get/set`等底层方法，使得 JS 的使用自由度更高，可以最大限度的满足开发者的需求。比如通过拦截对象的`get/set`方法，可以轻松地定制自己想要的`key`或者`value`。下面的例子可以看到，随便定义一个`myOwnObj`的`key`,都可以变成自己想要的函数
> ```

```text
function createMyOwnObj() {
	//想把所有的key都变成函数，或者Promise,或者anything
	return new Proxy({}, {
		get(target, propKey, receiver) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let randomBoolean = Math.random() > 0.5;
					let Message;
					if (randomBoolean) {
						Message = `你的${propKey}运气不错，成功了`;
						resolve(Message);
					} else {
						Message = `你的${propKey}运气不行，失败了`;
						reject(Message);
					}
				}, 1000);
			});
		}
	});
}

let myOwnObj = createMyOwnObj();

myOwnObj.hahaha.then(result => {
	console.log(result) //你的hahaha运气不错，成功了
}).catch(error => {
	console.log(error) //你的hahaha运气不行，失败了
})

myOwnObj.wuwuwu.then(result => {
	console.log(result) //你的wuwuwu运气不错，成功了
}).catch(error => {
	console.log(error) //你的wuwuwu运气不行，失败了
})
```

## (https://interview.html5.wiki/section/4-ES6模块.html#_13-reflect-是什么-有什么作用)13 Reflect 是什么，有什么作用？

------

> ```
> Reflect`是`ES6`引入的一个新的对象，他的主要作用有两点，一是将原生的一些零散分布在`Object`、`Function`或者全局函数里的方法(如`apply`、`delete`、`get`、`set`等等)，统一整合到`Reflect`上，这样可以更加方便更加统一的管理一些原生`API`。其次就是因为`Proxy`可以改写默认的原生 API，如果一旦原生`API`别改写可能就找不到了，所以`Reflect`也可以起到备份原生 API 的作用，使得即使原生`API`被改写了之后，也可以在被改写之后的`API`用上默认的`API
> ```

## (https://interview.html5.wiki/section/4-ES6模块.html#_14-promise-是什么-有什么作用)14 Promise 是什么，有什么作用？

------

> `Promise`是`ES6`引入的一个新的对象，他的主要作用是用来解决 JS 异步机制里，回调机制产生的“回调地狱”。它并不是什么突破性的`API`，只是封装了异步回调形式，使得异步回调可以写的更加优雅，可读性更高，而且可以链式调用

## (https://interview.html5.wiki/section/4-ES6模块.html#_15-iterator-是什么-有什么作用)15 Iterator 是什么，有什么作用？

------

- `Iterator`是`ES6`中一个很重要概念，它并不是对象，也不是任何一种数据类型。因为`ES6`新增了`Set`、`Map`类型，他们和`Array`、`Object`类型很像，`Array`、`Object`都是可以遍历的，但是`Set`、`Map`都不能用 for 循环遍历，解决这个问题有两种方案，一种是为`Set`、`Map`单独新增一个用来遍历的`API`，另一种是为`Set`、`Map`、`Array`、`Object`新增一个统一的遍历`API`，显然，第二种更好，`ES6`也就顺其自然的需要一种设计标准，来统一所有可遍历类型的遍历方式。`Iterator`正是这样一种标准。或者说是一种规范理念
- 就好像`JavaScript`是`ECMAScript`标准的一种具体实现一样，`Iterator`标准的具体实现是`Iterator`遍历器。`Iterator`标准规定，所有部署了`key`值为`[Symbol.iterator]`，且`[Symbol.iterator]`的`value`是标准的`Iterator`接口函数(标准的`Iterator`接口函数: 该函数必须返回一个对象，且对象中包含`next`方法，且执行`next()`能返回包含`value/done`属性的`Iterator`对象)的对象，都称之为可遍历对象，`next()`后返回的`Iterator`对象也就是`Iterator`遍历器

```text
//obj就是可遍历的，因为它遵循了Iterator标准，且包含[Symbol.iterator]方法，方法函数也符合标准的Iterator接口规范。
//obj.[Symbol.iterator]() 就是Iterator遍历器
let obj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};
```

> `ES6`给`Set`、`Map`、`Array`、`String`都加上了`[Symbol.iterator]`方法，且`[Symbol.iterator]`方法函数也符合标准的`Iterator`接口规范，所以`Set`、`Map`、`Array`、`String`默认都是可以遍历的

```text
//Array
let array = ['red', 'green', 'blue'];
array[Symbol.iterator]() //Iterator遍历器
array[Symbol.iterator]().next() //{value: "red", done: false}

//String
let string = '1122334455';
string[Symbol.iterator]() //Iterator遍历器
string[Symbol.iterator]().next() //{value: "1", done: false}

//set
let set = new Set(['red', 'green', 'blue']);
set[Symbol.iterator]() //Iterator遍历器
set[Symbol.iterator]().next() //{value: "red", done: false}

//Map
let map = new Map();
let obj= {map: 'map'};
map.set(obj, 'mapValue');
map[Symbol.iterator]().next()  {value: Array(2), done: false}
```

## (https://interview.html5.wiki/section/4-ES6模块.html#_16-for-in-和-for-of-有什么区别)16 for...in 和 for...of 有什么区别？

------

> 如果看到问题十六，那么就很好回答。问题十六提到了 ES6 统一了遍历标准，制定了可遍历对象，那么用什么方法去遍历呢？答案就是用`for...of`。ES6 规定，有所部署了载了`Iterator`接口的对象(可遍历对象)都可以通过`for...of`去遍历，而`for..in`仅仅可以遍历对象

- 这也就意味着，数组也可以用`for...of`遍历，这极大地方便了数组的取值，且避免了很多程序用`for..in`去遍历数组的恶习

## (https://interview.html5.wiki/section/4-ES6模块.html#_17-generator-函数是什么-有什么作用)17 Generator 函数是什么，有什么作用？

------

- 如果说`JavaScript`是`ECMAScript`标准的一种具体实现、`Iterator`遍历器是`Iterator`的具体实现，那么`Generator`函数可以说是`Iterator`接口的具体实现方式。
- 执行`Generator`函数会返回一个遍历器对象，每一次`Generator`函数里面的`yield`都相当一次遍历器对象的`next()`方法，并且可以通过`next(value)`方法传入自定义的 value,来改变`Generator`函数的行为。
- `Generator`函数可以通过配合`Thunk` 函数更轻松更优雅的实现异步编程和控制流管理。

### (https://interview.html5.wiki/section/4-ES6模块.html#generator-原理)generator 原理

> `Generator` 是 `ES6`中新增的语法，和 `Promise` 一样，都可以用来异步编程

```text
// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
  let a = 1 + 2;
  yield 2;
  yield 3;
}
let b = test();
console.log(b.next()); // >  { value: 2, done: false }
console.log(b.next()); // >  { value: 3, done: false }
console.log(b.next()); // >  { value: undefined, done: true }
```

> 从以上代码可以发现，加上 `*`的函数执行后拥有了 `next` 函数，也就是说函数执行后返回了一个对象。每次调用 `next` 函数可以继续执行被暂停的代码。以下是 `Generator` 函数的简单实现

```text
// cb 也就是编译过的 test 函数
function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      stop: function() {}
    };

    return {
      next: function() {
        var ret = cb(object);
        if (ret === undefined) return { value: undefined, done: true };
        return {
          value: ret,
          done: false
        };
      }
    };
  })();
}
// 如果你使用 babel 编译后可以发现 test 函数变成了这样
function test() {
  var a;
  return generator(function(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        // 可以发现通过 yield 将代码分割成几块
        // 每次执行 next 函数就执行一块代码
        // 并且表明下次需要执行哪块代码
        case 0:
          a = 1 + 2;
          _context.next = 4;
          return 2;
        case 4:
          _context.next = 6;
          return 3;
		// 执行完毕
        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}
```

### (https://interview.html5.wiki/section/4-ES6模块.html#generator-实现)Generator 实现

> `Generator` 是 `ES6`中新增的语法，和 `Promise` 一样，都可以用来异步编程

```text
// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
  let a = 1 + 2;
  yield 2;
  yield 3;
}
let b = test();
console.log(b.next()); // >  { value: 2, done: false }
console.log(b.next()); // >  { value: 3, done: false }
console.log(b.next()); // >  { value: undefined, done: true }
```

> 从以上代码可以发现，加上 `*` 的函数执行后拥有了 `next`函数，也就是说函数执行后返回了一个对象。每次调用 `next`函数可以继续执行被暂停的代码。以下是 `Generator` 函数的简单实现

```text
// cb 也就是编译过的 test 函数
function generator(cb) {
  return (function() {
    var object = {
      next: 0,
      stop: function() {}
    };

    return {
      next: function() {
        var ret = cb(object);
        if (ret === undefined) return { value: undefined, done: true };
        return {
          value: ret,
          done: false
        };
      }
    };
  })();
}
// 如果你使用 babel 编译后可以发现 test 函数变成了这样
function test() {
  var a;
  return generator(function(_context) {
    while (1) {
      switch ((_context.prev = _context.next)) {
        // 可以发现通过 yield 将代码分割成几块
        // 每次执行 next 函数就执行一块代码
        // 并且表明下次需要执行哪块代码
        case 0:
          a = 1 + 2;
          _context.next = 4;
          return 2;
        case 4:
          _context.next = 6;
          return 3;
		// 执行完毕
        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}
```

## (https://interview.html5.wiki/section/4-ES6模块.html#_18-async-函数是什么-有什么作用)18 async 函数是什么，有什么作用？

------

> `async`函数可以理解为内置自动执行器的`Generator`函数语法糖，它配合`ES6`的`Promise`近乎完美的实现了异步编程解决方案

**async、await 优缺点**

> `async` 和 `await` 相比直接使用 `Promise` 来说，优势在于处理 then 的调用链，能够更清晰准确的写出代码。缺点在于滥用 `await` 可能会导致性能问题，因为 `await` 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性

下面来看一个使用 `await` 的代码。

```text
var a = 0
var b = async () => {
  a = a + await 10
  console.log('2', a) // -> '2' 10
  a = (await 10) + a
  console.log('3', a) // -> '3' 20
}
b()
a++
console.log('1', a) // -> '1' 1
```

- 首先函数`b` 先执行，在执行到 `await 10` 之前变量 `a` 还是 `0`，因为在 `await` 内部实现了 `generators` ，`generators` 会保留堆栈中东西，所以这时候 `a = 0` 被保存了下来
- 因为 `await` 是异步操作，遇到`await`就会立即返回一个`pending`状态的`Promise`对象，暂时返回执行代码的控制权，使得函数外的代码得以继续执行，所以会先执行 `console.log('1', a)`
- 这时候同步代码执行完毕，开始执行异步代码，将保存下来的值拿出来使用，这时候 `a = 10`
- 然后后面就是常规执行代码了

## (https://interview.html5.wiki/section/4-ES6模块.html#_19-class、extends-是什么-有什么作用)19 Class、extends 是什么，有什么作用？

------

> `ES6` 的`class`可以看作只是一个`ES5`生成实例对象的构造函数的语法糖。它参考了`java`语言，定义了一个类的概念，让对象原型写法更加清晰，对象实例化更像是一种面向对象编程。`Class`类可以通过`extends`实现继承。它和 ES5 构造函数的不同点

类的内部定义的所有方法，都是不可枚举的

```text
///ES5
function ES5Fun (x, y) {
	this.x = x;
	this.y = y;
}
ES5Fun.prototype.toString = function () {
	 return '(' + this.x + ', ' + this.y + ')';
}
var p = new ES5Fun(1, 3);
p.toString();
Object.keys(ES5Fun.prototype); //['toString']

//ES6
class ES6Fun {
	constructor (x, y) {
		this.x = x;
		this.y = y;
	}
	toString () {
		return '(' + this.x + ', ' + this.y + ')';
	}
}

Object.keys(ES6Fun.prototype); //[]
```

- `ES6`的`class`类必须用`new`命令操作，而`ES5`的构造函数不用`new`也可以执行。
- `ES6`的`class`类不存在变量提升，必须先定义`class`之后才能实例化，不像`ES5`中可以将构造函数写在实例化之后。
- `ES5` 的继承，实质是先创造子类的实例对象`this`，然后再将父类的方法添加到`this`上面。`ES6` 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到`this`上面（所以必须先调用`super`方法），然后再用子类的构造函数修改`this`。

## (https://interview.html5.wiki/section/4-ES6模块.html#_20-module、export、import-是什么-有什么作用)20 module、export、import 是什么，有什么作用？

------

- `module`、`export`、`import`是`ES6`用来统一前端模块化方案的设计思路和实现方案。`export`、`import`的出现统一了前端模块化的实现方案，整合规范了浏览器/服务端的模块化方法，用来取代传统的`AMD/CMD`、`requireJS`、`seaJS`、`commondJS`等等一系列前端模块不同的实现方案，使前端模块化更加统一规范，`JS`也能更加能实现大型的应用程序开发。
- `import`引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。
- `import`引入`export`导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值

## (https://interview.html5.wiki/section/4-ES6模块.html#_21-日常前端代码开发中-有哪些值得用-es6-去改进的编程优化或者规范)21 日常前端代码开发中，有哪些值得用 ES6 去改进的编程优化或者规范？

------

- 常用箭头函数来取代`var self = this`;的做法。
- 常用`let`取代`var`命令。
- 常用数组/对象的结构赋值来命名变量，结构更清晰，语义更明确，可读性更好。
- 在长字符串多变量组合场合，用模板字符串来取代字符串累加，能取得更好地效果和阅读体验。
- 用`Class`类取代传统的构造函数，来生成实例化对象。
- 在大型应用开发中，要保持`module`模块化开发思维，分清模块之间的关系，常用`import`、`export`方法。

## (https://interview.html5.wiki/section/4-ES6模块.html#_22-es6-的了解)22 ES6 的了解

------

> 新增模板字符串（为 JavaScript 提供了简单的字符串插值功能）、箭头函数（操作符左边为输入的参数，而右边则是进行的操作以及返回的值 Inputs=>outputs。）、for-of（用来遍历数据—例如数组中的值。）arguments 对象可被不定参数和默认参数完美代替。ES6 将 promise 对象纳入规范，提供了原生的 Promise 对象。增加了 let 和 const 命令，用来声明变量。增加了块级作用域。let 命令实际上就增加了块级作用域。ES6 规定，var 命令和 function 命令声明的全局变量，属于全局对象的属性；let 命令、const 命令、class 命令声明的全局变量，不属于全局对象的属性。。还有就是引入 module 模块的概念

## (https://interview.html5.wiki/section/4-ES6模块.html#_23-说说你对-promise-的理解)23 说说你对 Promise 的理解

------

- 依照

	 

	```
	Promise/A+
	```

	 

	的定义，Promise 有四种状态：

	- `pending`: 初始状态, 非 `fulfilled` 或 `rejected.`
	- `fulfilled`: 成功的操作.
	- `rejected`: 失败的操作.
	- `settled`: `Promise`已被`fulfilled`或`rejected`，且不是`pending`

- 另外， `fulfilled` 与 `rejected` 一起合称 settled

- `Promise` 对象用来进行延迟(`deferred`) 和异步(`asynchronous` ) 计算

- 可以把 `Promise`看成一个状态机。初始是 `pending` 状态，可以通过函数 `resolve` 和 `reject`，将状态转变为 `resolved` 或者 `rejected` 状态，状态一旦改变就不能再次变化。

- `then` 函数会返回一个 `Promise` 实例，并且该返回值是一个新的实例而不是之前的实例。因为 `Promise` 规范规定除了 `pending` 状态，其他状态是不可以改变的，如果返回的是一个相同实例的话，多个 `then`调用就失去意义了

## (https://interview.html5.wiki/section/4-ES6模块.html#_24-promise-的构造函数)24 Promise 的构造函数

------

> 构造一个 `Promise`，最基本的用法如下：

```text
var promise = new Promise(function(resolve, reject) {

        if (...) {  // succeed

            resolve(result);

        } else {   // fails

            reject(Error(errMessage));

        }
    });
```

> `Promise` 实例拥有 then 方法（具有 then 方法的对象，通常被称为 thenable）。它的使用方法如下：

```text
promise.then(onFulfilled, onRejected)
```

> 接收两个函数作为参数，一个在 `fulfilled` 的时候被调用，一个在`rejected`的时候被调用，接收参数就是 future，`onFulfilled` 对应 `resolve`, `onRejected` 对应 `reject`

**什么是 Promise ？**

- Promise 就是一个对象，用来表示并传递异步操作的最终结果
- Promise 最主要的交互方式：将回调函数传入 then 方法来获得最终结果或出错原因
- Promise 代码书写上的表现：以“链式调用”代替回调函数层层嵌套（回调地狱）

## (https://interview.html5.wiki/section/4-ES6模块.html#_25-谈一谈你了解-ecmascript6-的新特性)25 谈一谈你了解 ECMAScript6 的新特性？

------

- 块级作用区域 `let a = 1;`
- 可定义常量 `const PI = 3.141592654;`
- 变量解构赋值 `var [a, b, c] = [1, 2, 3];`
- 字符串的扩展(模板字符串) `var sum =`${a + b}`;`
- 数组的扩展(转换数组类型) `Array.from($('li'));`
- 函数的扩展(扩展运算符) `[1, 2].push(...[3, 4, 5]);`
- 对象的扩展(同值相等算法) `Object.is(NaN, NaN);`
- 新增数据类型(Symbol) `let uid = Symbol('uid');`
- 新增数据结构(Map) `let set = new Set([1, 2, 2, 3]);`
- for...of 循环 `for(let val of arr){};`
- Promise 对象 `var promise = new Promise(func);`
- Generator 函数 `function* foo(x){yield x; return x*x;}`
- 引入 Class(类) `class Foo {}`
- 引入模块体系 `export default func;`
- 引入 async 函数[ES7]

```text
async function asyncPrint(value, ms) {
      await timeout(ms);
      console.log(value)
     }
```

## (https://interview.html5.wiki/section/4-ES6模块.html#与原来的比较操作符-、-的区别)与原来的比较操作符 ===、== 的区别？

------

- `==` 相等运算符，比较时会自动进行数据类型转换
- `===` 严格相等运算符，比较时不进行隐式类型转换
- `Object.is` 同值相等算法，在 `===` 基础上对 `0` 和 `NaN` 特别处理

```text
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

## (https://interview.html5.wiki/section/4-ES6模块.html#_27-什么是-babel)27 什么是 Babel

------

- `Babel` 是一个 JS 编译器，自带一组 ES6 语法转化器，用于转化 JS 代码。 这些转化器让开发者提前使用最新的 JS 语法(ES6/ES7)，而不用等浏览器全部兼容。
- `Babel` 默认只转换新的 JS 句法(syntax)，而不转换新的 API。

## (https://interview.html5.wiki/section/4-ES6模块.html#_28-symbol-有什么用处)28 symbol 有什么用处

------

> 可以用来表示一个独一无二的变量防止命名冲突。但是面试官问还有吗？我没想出其他的用处就直接答我不知道了，还可以利用  symbol 不会被常规的方法（除了  Object.getOwnPropertySymbols 外）遍历到，所以可以用来模拟私有变量。

主要用来提供遍历接口，布置了  symbol.iterator 的对象才可以使用  for···of 循环，可以统一处理数据结构。调用之后回返回一个遍历器对象，包含有一个 next 方法，使用 next 方法后有两个返回值 value 和 done 分别表示函数当前执行位置的值和是否遍历完毕。

> ```
> Symbol.for()` 可以在全局访问 `symbol
> ```

## (https://interview.html5.wiki/section/4-ES6模块.html#_29-模块化)29 模块化

------

> 在有 `Babel` 的情况下，我们可以直接使用 `ES6`的模块化

```text
// file a.js
export function a() {}
export function b() {}
// file b.js
export default function() {}

import {a, b} from './a.js'
import XXX from './b.js'
```

**CommonJS**

> `CommonJs` 是 `Node` 独有的规范，浏览器中使用就需要用到 `Browserify`解析了。

```text
// a.js
module.exports = {
    a: 1
}
// or
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1
```

> 在上述代码中，`module.exports` 和 `exports` 很容易混淆，让我们来看看大致内部实现

```text
var module = require('./a.js')
module.a
// 这里其实就是包装了一层立即执行函数，这样就不会污染全局变量了，
// 重要的是 module 这里，module 是 Node 独有的一个变量
module.exports = {
    a: 1
}
// 基本实现
var module = {
  exports: {} // exports 就是个空对象
}
// 这个是为什么 exports 和 module.exports 用法相似的原因
var exports = module.exports
var load = function (module) {
    // 导出的东西
    var a = 1
    module.exports = a
    return module.exports
};
```

> 再来说说 `module.exports` 和`exports`，用法其实是相似的，但是不能对 `exports` 直接赋值，不会有任何效果。

> 对于 `CommonJS` 和 `ES6` 中的模块化的两者区别是：

- 前者支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案,前者是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。
- 而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响
- 前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。
- 但是后者采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化
- 后者会编译成 `require/exports` 来执行的

**AMD**

> `AMD` 是由 `RequireJS` 提出的

```text
// AMD
define(['./a', './b'], function(a, b) {
    a.do()
    b.do()
})
define(function(require, exports, module) {
    var a = require('./a')
    a.doSomething()
    var b = require('./b')
    b.doSomething()
})
```

## (https://interview.html5.wiki/section/4-ES6模块.html#_30-箭头函数的特点)30 箭头函数的特点

------

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

> 箭头函数其实是没有 `this` 的，这个函数中的 `this` 只取决于他外面的第一个不是箭头函数的函数的 `this`。在这个例子中，因为调用 `a` 符合前面代码中的第一个情况，所以 `this` 是`window`。并且 `this`一旦绑定了上下文，就不会被任何代码改变

## (https://interview.html5.wiki/section/4-ES6模块.html#_31-es5-es6-的继承除了写法以外还有什么区别)31 ES5 / ES6 的继承除了写法以外还有什么区别

------

- ES5 的继承实质上是先创建子类的实例对象，然后再将父类的方法添加到 this 上（Parent.apply(this)）
- ES6 的继承机制完全不同，实质上是先创建父类的实例对象 this（所以必须先调用父类的 super()方法），然后再用子类的构造函数修改 this。
- ES5 的继承时通过原型或构造函数机制来实现。
- ES6 通过 class 关键字定义类，里面有构造方法，类之间通过 extends 关键字实现继承。
- 子类必须在 constructor 方法中调用 super 方法，否则新建实例报错。因为子类没有自己的 this 对象，而是继承了父类的 this 对象，然后对其进行加工。如果不调用 super 方法，子类得不到 this 对象。
- 注意 super 关键字指代父类的实例，即父类的 this 对象。
- 注意：在子类构造函数中，调用 super 后，才可使用 this 关键字，否则报错。function 声明会提升，但不会初始化赋值。Foo 进入暂时性死区，类似于 let、const 声明变量

## (https://interview.html5.wiki/section/4-ES6模块.html#_32-全局作用域中-用-const-和-let-声明的变量不在-window-上-那到底在哪里-如何去获取)32 全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？

------

```text
// 在 ES5 中，顶层对象的属性和全局变量是等价的，var 命令和 function 命令声明的全局变量，自然也是顶层对象。
var a = 12;
function f(){};
console.log(window.a);
// 12console.log(window.f);
// f(){}

// 但 ES6 规定，var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性，但 let 命令、const 命令、class 命令声明的全局变量，不属于顶层对象的属性。
let aa = 1;
const bb = 2;
console.log(window.aa);
// undefinedconsole.log(window.bb);
// undefined

// 在哪里？怎么获取？通过在设置断点，看看浏览器是怎么处理的：
//通过上图也可以看到，在全局作用域中，用 let 和 const 声明的全局变量并没
//有在全局对象中，只是一个块级作用域（Script）中怎么获取？在定义变量的块级作用域中就能获取啊，既然不属于顶层对象，那就不加 window（global）呗。
let aa = 1;
const bb = 2;
console.log(aa);
// 1console.log(bb);
// 2
```

## (https://interview.html5.wiki/section/4-ES6模块.html#_33-介绍下-set、map、weakset-和-weakmap-的区别)33 介绍下 Set、Map、WeakSet 和 WeakMap 的区别

------

**Set**

- 成员不能重复
- 只有健值，没有健名，有点类似数组
- 可以遍历，方法有`add`, `delete`,`has`

**weakSet**

- 成员都是对象
- 成员都是弱引用，随时可以消失。 可以用来保存 DOM 节点，不容易造成内存泄漏
- 不能遍历，方法有`add`, `delete`,`has`

**Map**

- 本质上是健值对的集合，类似集合
- 可以遍历，方法很多，可以干跟各种数据格式转换

**weakMap**

- 直接受对象作为健名（`null`除外），不接受其他类型的值作为健名
- 健名所指向的对象，不计入垃圾回收机制
- 不能遍历，方法同`get`,`set`,`has`,`delete`

## (https://interview.html5.wiki/section/4-ES6模块.html#_34-promise-all-与-promise-allsettled)34 Promise.all 与 promise.allSettled()

------

> 接受的结果与入参时的 promise 实例一一对应，且结果的每一项都是一个对象，告诉你结果和值，对象内都有一个属性叫“status”，用来明确知道对应的这个 promise 实例的状态（fulfilled 或 rejected），fulfilled 时，对象有 value 属性，rejected 时有 reason 属性，对应两种状态的返回值。

```text
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

const allSettledPromise = Promise.allSettled([resolved, rejected]);

allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```

> 重要的一点是，他不论接受入参的 promise 本身的状态，会返回所有 promise 的结果，但这一点`Promise.all`做不到，如果你需要知道所有入参的异步操作的所有结果，或者需要知道这些异步操作是否全部结束，应该使用`promise.allSettled()`

### (https://interview.html5.wiki/section/4-ES6模块.html#)

> 只有当所有入参的 promise 实例都是`fulfilled`状态，才会在`Promise.all().then()`方法中结果，返回结果也是与入参一一对应，结果中只包含实际的`resolve`的结果，不包含类似`allSettled`的`status`和`value`属性。