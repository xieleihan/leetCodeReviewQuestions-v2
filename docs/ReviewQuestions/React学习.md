# React学习

> 由Facebook开发的现代前端框架

## 项目技术分析

- React.js

	React.js 是 Facebook 开源的一个用于构建用户界面的 JavaScript 库。它采用组件化的开发模式，使得开发者可以将复杂的 UI 拆分为多个独立的、可复用的组件。React 的核心思想是虚拟 DOM，通过高效的 diff 算法，减少对实际 DOM 的操作，从而提升应用的性能。

- React-DOM.js

	React-DOM.js 是 React 的一个扩展库，专门用于在浏览器中渲染 React 组件。它提供了与 DOM 相关的操作，使得 React 组件能够在浏览器中正确显示和交互。

- Babel.js

	Babel.js 是一个 JavaScript 编译器，主要用于将 ES6+ 代码转换为向后兼容的 JavaScript 版本。通过 Babel，开发者可以使用最新的 JavaScript 语法特性，而不必担心代码在不同浏览器中的兼容性问题。

## 项目初体验

> HTML代码使用`()`,JavaScript使用`{}`

> `JSX`是一个把`HTML`+`JavaScript`合在一起写法的东西

### 原生Web

1. Hello World

	```html
	<!DOCTYPE html>
	<html lang="zh">
	
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>helloworld</title>
	    <!-- 引入项目所需的JS文件 -->
	    <!-- 引入React核心库（使用React语法API） -->
	    <script src="./libs/react.development.js"></script>
	    <!--  渲染组件的插件 -->
	    <script src="./libs/react-dom.development.js"></script>
	    <!-- 引入babel插件 （可以把JSX或者ES6编译成ES5语法） -->
	    <script src="./libs/babel.js"></script>
	</head>
	
	<body>
	    <!-- 挂载容器 -->
	    <div id="app"></div>
	
	
	    <!-- 编写react代码 -->
	    <script type="text/babel">
	        // JSX语法  小括号(html代码)   大括号 {JS代码}
	        // 类组件
	        class App extends React.Component {
	            // render: 渲染
	            render() {
	                // 返回小括号(html代码)
	                return (
	                    <h1>hello world</h1>
	                )
	            }
	
	            // 构造函数
	            constructor() {
	                super()
	            }
	        }
	
	        // 渲染组件
	        ReactDOM.render(
	            <App />,
	            document.getElementById("app")
	        )
	
	
	    </script>
	</body>
	
	</html>
	```

	**当然也可以使用函数组件(推荐)**

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Document</title>
	    <script src="./js/react.development.js"></script>
	    <script src="./js/react-dom.development.min.js"></script>
	    <script src="./js/babel.js"></script>
	</head>
	<body>
	    <div id="app"></div>
	
	    <!-- 编写react代码 -->
	    <script type="text/babel">
	        // class App extends React.Component {
	        //     render() {
	        //         return (
	        //             <div>
	        //                 <h1>Hello World</h1>
	        //                 <p>这是一个react组件</p>
	        //             </div>
	        //         )
	        //     }
	
	        //     // 构造函数
	        //     constructor(){
	        //         super()
	        //     }
	        // }
	
	        // 使用函数
	        function App() {
	            return (
	                <div>
	                    <h1>Hello World</h1>
	                    <p>这是一个react组件</p>
	                </div>
	            )
	        }
	
	        // 渲染组件
	        ReactDOM.render(<App />, document.getElementById('app'))
	    </script>
	</body>
	</html>
	```

## 父子传值

### 子传父

> 父组件编写一个方法,直接传递给子组件
>
> 子组件通过该方法传递参数即可

子组件

```tsx
function Child({onToggleClick}){
	return (
		<>
			<div
				onClick={
					()=>{
						onToggleClick([参数])
					}
				}
			></div>
		</>
	)
}
```

父组件

```tsx
function father(){
    
    const handleToggleClick= (newState)=>{
        console.log("这是从子组件传递过来的值", newState);
    }
    
    return (
    	<>
        	<Chilld onToggleClick={handleToggleClick}></Chilld>
        </>
    );
}
```

### 父传子

> 在父组件中直接把数据存储在子组件属性里
>
> 在子组件添加参数(函数形参) props,父组件传值的数据就存储在这个props对象里面
>
> 通过props.xxx可以获取传递的数据