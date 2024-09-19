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

属性过滤:

> 针对属性做一些格式化的操作或保留指定格式数据的操作
>
> ```javascript
> // 需要在上面的容器里使用管道
> // {{xxx | yyy}} xxx:代表要过滤前的属性,yyy是过滤的方法
> // 设置属性过滤
> new Vue({
>     // 前面配置略
>     filter:{
>         //过滤器名称: value参数是上面管道传递的参数
>         yyy(value){
>             return fn() || 方法; // 返回你想返回的
>         }
>     }
> })
> ```

### 事件绑定

事件修饰符:

`@keydown.enter='fn()'`表示按下回车后执行函数的意思

`@click.prevent`表示阻止默认行为

### 组件

> 组件:项目的一个模块/功能.(可以重复使用)
>
> 步骤:
>
> 1. 定义组件
> 2. 注册组件
> 3. 使用组件

组件有两种:`全局组件`和`局部组件`

全局组件:

```javascript
// 组件:HTML+CSS+JavaScript组件的功能模块.相当于小型的Vue示例
//data只能返回的是函数,不能是对象,因为要重复的使用,所以必须函数
// 标签名不能作为组件名称 例如:header,nav,footer,main,aside等这些标签名称

// 语法:Vue.component(组件名称,选项对象)
Vue.component('Search',{
    data(){
        return{
            msg:'消息',
        }
    },
    template:`
    	<h3>{{msg}}</h3>
    `
})
```

局部组件:

```javascript
// 在new实例对象的时候声明
// 荔枝:
new Vue({
    el:'#app',
    // 局部组件
    commponents:{
        // 组件名:
        xxx:{
            data(){},
            template:``
        }
    }
})
```

### 组件传值

#### 父组件传值给子组件

```javascript
// 父传子
// 1. 子组件Child中的props选项中定义属性
// 2. 在父组件模版中使用子组件<Child :属性='值'></Child>
// 初始化
const vm = new Vue({
    el: '#app',
    // 注册组件
    components:{
        'Parent':{
            template:``,
            components:{
                'Child':{
                    // 自定义属性接收父组件传递的值
                    // props:['num']
                    props:{
                        num:{
                            type:Number // 定义数据类型
                        }
                    },
                    template:``
                }
            }
        }
    }
})
```

#### 子组件传值给父组件

```javascript
// 子组件传值给父组件
// 是反向传值,需要 事件 来实现
// 步骤:
// 1. 在子组件中通过编写this.$emit(xxx,数据)自定义事件的方法(send)
// 2. 在子组件中调用这个send,可以通过点击事件或者使用生命周期的方式来实现
// 3. 在父组件中使用自定义事件 例如: <Child @xxx='recv'></Child>
// 4. 父组件中定义这个方法recv 用于接收子组件传递的值
// 下面是一个示例
// 初始化
const vm = new Vue({
    // 设置挂载点
    el: '#app',
    // 注册组件
    components:{
        'parent':{
            template:``,
            data(){
                return num: ''
            },
            methods:{
                recv(value){
                    // 定义方法接收子组件传递的值
                    this.num = value;
                }
            },
            components:{
                "Child":{
                    template:``,
                    methods:{
                        // 利用this.$emit()这个方法发送数据给父组件
                        send(){
                            // 定义时间名称
                            // this.$emit(事件名称,值)
                            this.$emit("xxx",xxxxxxx)
                        }
                    },
                    // 初始化
                    created(){
                        // 调用send方法
                        this.send();
                    }
                }
            }
        }
    }
})
```

#### 兄弟组件传值

```javascript
// 步骤:
// 1.创建一个Vue示例作为通信桥梁
// 2.利用这个示例调用$emit自定义事件的名称
// 3.利用这个实例调用$on监听事件触发
// 4.通过监听事件触发,获取传递的值

// 创建通信的桥梁
const brigde = new Vue();
// 初始化
new Vue({
    el: '#app',
    components:{
        // 组件一
        "Brother":{
            template:``,
            methods:{
                sendfn(){
                    brigde.$emit('xxxx',xxxxx)
                }
            },
            // 生命周期调用
            created(){
                // 发送数据
                setTimeout(()=>{
                    this.sendfn();
                },10)
            }
        },
        'Sister':{
            template:``,
            data(){
                return{
                    num: ''
                }
            },
            created(){
                brigde.$on('xxxx',(value)=>{
                    this.num = value;
                })
            }
        }
    }
})
```



### 生命周期

![](https://v2.cn.vuejs.org/images/lifecycle.png)

> 是指的是Vue程序或者组件从创建到销毁的这个过程

> 不同阶段可以调用不同的钩子函数
>
> 初始化可以在created(){}
>
> 操作DOM可以在mounted(){}

**四个阶段**:

1. *创建阶段*
2. *挂载阶段*
3. *更新阶段*
4. *销毁阶段*

**八个钩子**:

1. *创建阶段*:`beforeCreate`,`created`
2. *挂载阶段*:`beforeMount`,`mounted`
3. *更新阶段*:`beforeUpdate`,`updated`
4. *销毁阶段*:`beforeDestroy`,`destoyed`

### 过渡/动画

> 可以直接使用CSS3的`tranforms`或者`animation`

也可以使用Vue的组件:`transition`(内置组件)

![](https://v2.cn.vuejs.org/images/transition.png)

要搭配`style.css`

```css
.v-enter{
    
}
.v-enter-to{
    
}
.v-enter-active{
    
}

.v-leave{
    
}
.-v-leave-to{
    
}
.v-leave-active{
    
}
```

如果有重复出现的`transition`,要起一个`name`

```html
<transition>
	<组件 v-if='布尔值'></组件>
</transition>
```

### 混入(代码复用)

```javascript
// 定义对象(组件A和组件B都可以使用以下的选项)
// 混入对象
const options = {
    data(){
        return{
            
        }
    },
    methods:{
        show(){
            
        }
    }
}
new Vue({
    el: '#app',
    components:{
        "MyCompa":{
            // 当组件和混入对象含有同名选项,这些选项将以恰当的方式进行合并
            // 比如,数据对象在内部会进行递归合并,并发生冲突的时候以组件数据优先
            mixins:[options],
            data(){
                return {}
            },
            template:``
        },
        "MyCompb":{
            mixins:[options],
            data(){
                return {
                    
                }
            },
            template:``
        }
    }
})
```

### 自定义指令

```javascript
const vm = new Vue({
    el: '#app',
    // 自定义指令
    directives:{
        // 定义一个名,使用的时候,请在前面加上v-xxx
        // 比如我定义一个名,叫color,使用的时候,使用v-color
        color(el,binding){
            // el是dom对象
            // binding是参数对象
            // 比如我们可以这样
            el.style[`backgroundColor`] = binding.value
        },
        
        xxx(el,binding){
            // 也可以结构赋值
            let {a,b} = binding.modifiers;
            let val = binding.value;
        }
    }
})
// 主要给程序员提供扩展dom操作方法
```

### 面试题

#### `v-show`和`v-if`区别

当是`false`两者都不会占据页面位置

但是两者的控制手段不同,编译过程不同,编译条件不同

`v-show`隐藏是为该元素添加`css:display:none;`,dom元素还是存在于dom文档流里,但是`v-if`是让dom元素直接整个删除或删除

`v-show`原理:

```javascript
// https://github.com/vuejs/vue-next/blob/3cd30c5245da0733f9eb6f29d220f39c46518162/packages/runtime-dom/src/directives/vShow.ts
export const vShow: ObjectDirective<VShowElement> = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === 'none' ? '' : el.style.display
    if (transition && value) {
      transition.beforeEnter(el)
    } else {
      setDisplay(el, value)
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el)
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    // ...
  },
  beforeUnmount(el, { value }) {
    setDisplay(el, value)
  }
}
```

`v-if`原理:

```javascript
// https://github.com/vuejs/vue-next/blob/cdc9f336fd/packages/compiler-core/src/transforms/vIf.ts
export const transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      // ...
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          ) as IfConditionalExpression
        } else {
          // attach this branch's codegen node to the v-if root.
          const parentCondition = getParentCondition(ifNode.codegenNode!)
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          )
        }
      }
    })
  }
)
```



## 脚注

[^1]:渐进式:声明式渲染,指令,模版语法