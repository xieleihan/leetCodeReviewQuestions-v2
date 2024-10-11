# Vue3学习手册

## vite安装

> 新型前端构建工具，能够显著提升前端开发体验

下面是官方提供的方式,但是安装是极简版的

```bash
npm init vite@latest
```

民间

```bash
npm create vue
```

然后输入项目名称,使用`typescript`,不用启用`jsx`,引入`vue router`,引入`pinia`,测试工具看自己习惯,`eslist`选择吧

## 区别

> 模版,指令,事件,生命周期,组件,过渡动画,属性计算,侦听,过滤,路由,状态管理

下面介绍Vue3的模版

```vue
<template>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div class="search">
        <input type="text" placeholder="请输入关键字" v-model="keyword">
        <button @click="getInput">搜索</button>
    </div>
</template>
```

可以看到,`vue3`不需要根节点

`vue3`的 `script`脚本中，可以使用`option`式开发 `（vue2）`，也可以使用组合式开发

```vue
<script setup lang="ts">
    // 导入ref函数
    import { ref } from 'vue'
    // 定义变量 记录输入框输入的值
    // keyword: 是一个响应式对象。 以后想取值，可通过keyword.value进行取值或赋值
    let keyword = ref('')
    let text = ref('')
    // 定义函数
    const getInput = ()=> {
        // 输入的值
        console.log("值:",keyword.value)
        // 给text变量赋值
        text.value = keyword.value;
    }
</script>
```

```vue
<template>
    <h2>hello world</h2>
    <h3>{{ message }}</h3>
    <!-- <MySearch/> -->
    <my-search></my-search>
</template>


<!-- 写法1：组合式开发 -->
<script setup lang="ts">
import MySearch from './components/MySearch.vue';
import { ref } from 'vue'
let message = ref("学习Vue3框架开发~~")
</script> 

<!-- 写法2: 选项式开发 -->
<script lang="ts">
import { ref } from 'vue'
export default {
    setup() {
        const text = ref('')

        const getInputValue = () => {
            console.log(text.value)
        }

        return {
            text,
            getInputValue
        }
    }
}
</script>
```

指令和事件是一样的

### 属性计算,侦听,过滤(filters没有了)

```vue
<template>
    <div class="nav">
        <ul>
             <li 
             v-for="(item,index) in arr" 
             :key="item.id"
             :class="num == index ? 'active':''"
             @click="tab(index)"
             >{{ item.text }}</li>
        </ul>
    </div>
    <p>
        您当前点击的是第 <b><mark>{{current}} </mark></b> 个选项
    </p>
    <h4>{{ title }}</h4>
    <p>{{ time }}</p>
    <p>{{ formatime(time) }}</p>
</template>

<script setup lang="ts">
// 导入响应式函数
import {ref , computed , watch } from 'vue'
// 定义变量
let arr = ref([
    {text: "首页",id:1},
    {text: "企业介绍",id:2},
    {text: "合作伙伴",id:3},
    {text: "经典案例",id:4}
])
let num = ref(0)
let obj = ref({}) as any;
let time = ref(0);
time.value = new Date().getTime();

// 定义函数
const tab = (value: number):void => {
    num.value = value;
    // 添加数据
    obj.value[value] = true;
}

// 属性计算
const current = computed(()=>{
    return num.value + 1
})
const title = computed(()=>{
    return `学习vue3 属性计算 ~~~`
})


// 属性侦听
// 观察num变量的变化
// watch(num, (value,oldValue)=> {
//     console.log({value, oldValue});
// })
watch(obj, (n)=> {
    console.log("obj是否发生改变~~");
    console.log(n);
}, {
    deep: true,// 深度侦听
    // immediate: true// 立即执行
})

// 属性过滤filters语法在vue3中已经没有了
// 在vue3中可以直接编写函数去格式化数据
const formatime = (value: number)=> {
    // 00:00:00
    const dt = new Date()
    dt.setTime(value)
    let riqi = dt.toLocaleDateString()
    let shifenmiao = dt.toLocaleTimeString();
    return `${riqi} ${shifenmiao}`
}
</script>
```

### 生命周期

> `onMounted`是挂载DOM节点的钩子函数

```vue
<template>
    <div>
        <canvas id="canvas" ref="canvas"></canvas>
    </div>
</template>

<script setup lang="ts">
// 导入响应式API
import { ref , onMounted } from 'vue'

// beforeCreate  created 创建阶段
const canvas = ref();
// console.log('1.0',canvas.value);// undefined

// 挂载阶段
onMounted(()=>{
    // console.log('2.0',canvas.value);//  <canvas id="canvas"></canvas>
    // 挂载可以操作DOM
    const element = canvas.value;
    // 设置画布大小
    element.width = window.innerWidth;
    element.height = window.innerHeight;
    // 获取上下文对象
    const pen = element.getContext('2d');
    // console.log(pen);

    // 设置粉色的画布背景
    pen.fillStyle = "skyblue";
    pen.fillRect(0,0,element.width,element.height);

    // 绘制一个圆
    pen.beginPath();
    pen.fillStyle = "blue";
    pen.arc(
        element.width / 2,
        element.height / 2,
        100,
        0,
        360 * Math.PI / 180,
        false
    )
    pen.fill();
    pen.closePath();
})
</script>
```

### 组件传值

```vue
// Parent.vue
<template>
    <div>
        <h3>父组件</h3>
        <button @click="add">让num自增</button>
        <p>{{ ptime }}</p>
        <child :ctext="`我是父组件的数据`" :cnum="num" @send-time="revTime"></child>
    </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue'
let num = ref(2023)
let ptime = ref(0)
const add = () => {
    num.value ++
}
// 3）父组件接收子组件的值
const revTime = (value: number)=> {
    ptime.value = value;
}
</script>
```

```vue
// Child.vue
<template>
    <div class="wrap">
        <h4>子组件</h4>
        <p>{{ ctext }}</p>
        <p>{{ cnum }}</p>
        <button @click="foo">点击发送</button>
    </div>
</template>
<script lang="ts" setup>
import { ref  } from 'vue';
// 自定义属性,接收父组件传递的数据
defineProps({
    ctext: String,
    cnum: Number
})

// 子传值给父
// 步骤：
// 1） 自定义事件 
let emit = defineEmits(['send-time'])
// 定时秒数
let time = ref(7200);
// 把这个秒数传递给父组件
// 2） 发送数据给父组件
emit('send-time',time.value);
// 定义函数
const foo = ()=> {
    let v1 =  --  time.value;
    // 把计算后的秒数发送给父组件
    emit('send-time',v1);
}
</script>
```

### 组件插槽

> 可以理解为组件的扩展(结构)

```vue
// parent.vue
<child>
       <!-- <h5>abcd</h5> -->
       <!-- <h5>efg</h5> -->

       <template v-slot:left>
            <div>左边</div>
            <p>123</p>
       </template>

       <template v-slot:right>
            <div>右边</div>
            <p>456</p>
       </template>

       <!-- 没有插槽的组件，不可以直接在组件中写“内容” <组件>内容</组件>
            设置了插槽之后，可以在组件中拓展 “内容”
       -->
    </child>
```

```vue
// Child.vue
<!-- 插槽（不带name属性，叫做匿名插槽） -->
<!-- <slot></slot> -->
<div class="box">
    <div class="l">
         <!-- 插槽（带name属性，叫做具名插槽） -->
        <slot name="left"></slot>
    </div>
    <div class="r">
        <slot name="right"></slot>
    </div>
</div>
```

