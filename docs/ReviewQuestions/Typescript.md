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