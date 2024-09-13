# Vue2

> 作者:@SouthAki

## 是什么

> Vue.js:渐进式[^1] JavaScript 框架 一个用于构建 Web 用户界面的平易近人、高性能且多功能的框架。数据双向绑定MVVM框架**(M:model数据模型,V:view数据视图,VM:view modelVue的实例)**

本文会讲到:组件,生命周期,组件传值,路由,路由导航,路由守卫,状态管理,vuex,脚手架工具,依次推进

Vue2版本的数据响应式实现方式:`Object.defineProperty(对象,属性,{写入回调,读取回调})`



## 为什么要使用Vue

1. 减少繁琐的DOM操作
2. 数据响应式,让开发者更加关注业务逻辑的处理
3. 提高开发效率
4. 拥有完整的生态(声明式编程,组件,路由,数据状态管理,脚手架等)

## 怎么使用

1. 采用原生Vue的方式(通过script引入Vue文件)
2. 构建web项目工程(webpack vue-cli vite)

## 基础语法

命令式编程和声明式编程的区别

> 命令式注重过程,声明式注重结果
>
> ```javascript
> // 命令式
> let btn = document.querySelector('.btn');
> btn.onclick = function(){
>     console.log("点击了");
> };
> 
> // 声明式
> <div id="app">
>     <input type="text" v-model="val">
>     <button @click="search">查询</button>
> </div>
> new vue({
>     el:"app",
>     data:{val:""},
>     search(){
>         let keyword = this.val
>     }
> })
> ```

### 首次使用

引入Vue文件

```http
https://fastly.jsdelivr.net/gh/southaki/contentDeliveryNetwork@0.0.8/Vue/Vue@2/vue2.js
```

设置挂载容器

```html
<body>
    <div id= 'app'>
        
    </div>
</body>
<script>
	const vm = new Vue({
        // 设置挂载点
        el:"#app",
        // 存储数据
        // data:{}
        data(){
            return{
                msg:""
            }
        }
    })
</script>
```

Vue中表示变量的方式是用`{{}}`的方式

### 模版语法

> 写在挂载容器下的都是模版

### 指令

> 指令是一种操作DOM的快捷方式

```text
数据双向绑定: v-model
渲染超文本: v-html
渲染纯文本: v-text
属性绑定: v-bind 简写 :
事件绑定: v-on 简写 @
条件渲染: v-show v-if
列表渲染: v-for
```

### 属性计算,属性侦听,属性过滤

这里要加入点新东西:如何防止抖动或者出现`{{}}`

```html
<style>
    [v-cloak]{
        display: none;
    }
</style>
<div id="#app" v-cloak>
    <!-- 这里的v-cloak: 使用原生Vue代码开发项目的时候,防止出现抖动或者出现{{}}-->
</div>
```

通过以上的配置,可以实现防抖动,数据会等渲染完毕再展示

属性计算:`computed`这个关键字,是对象来的

```javascript
computed:{
	// 返回一个函数
}
```

属性侦听:`watch`这个关键字对象

```javascript
watch:{
    // 返回一个函数做判断啊之类的
}
```

记得,浅层的值比较可以直接比较,对一个变量进行监听

```javascript
data:{
    id:"xxxx"
},
watch:{
	id(newId,oldId){
        // 进行判断
    }  
}
```

但是深层的比较,比如数据和对象,要进入里面的话

```javascript
deep:true //开启深度
```



## 脚注

[^1]:渐进式:声明式渲染,指令,模版语法