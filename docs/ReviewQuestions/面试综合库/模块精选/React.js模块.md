# React.js面试题精选

## (https://interview.html5.wiki/section/8-React.js.html#_1、react-中-keys-的作用是什么)1、React 中 keys 的作用是什么？

------

> `Keys`是 `React` 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识

- 在开发过程中，我们需要保证某个元素的 `key` 在其同级元素中具有唯一性。在 `React Diff` 算法中`React` 会借助元素的 `Key` 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 `Key` 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 `Key` 的重要性

## (https://interview.html5.wiki/section/8-React.js.html#_2、传入-setstate-函数的第二个参数的作用是什么)2、传入 setState 函数的第二个参数的作用是什么？

------

> 该函数会在 `setState` 函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成：

```text
this.setState(
  { username: 'tylermcginnis33' },
  () => console.log('setState has finished and the component has re-rendered.')
) 
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
}) 
```

## (https://interview.html5.wiki/section/8-React.js.html#_3、react-中-refs-的作用是什么)3、React 中 refs 的作用是什么

------

- `Refs` 是 `React` 提供给我们的安全访问 `DOM`元素或者某个组件实例的句柄
- 可以为元素添加`ref`属性然后在回调函数中接受该元素在 `DOM` 树中的句柄，该值会作为回调函数的第一个参数返回

## (https://interview.html5.wiki/section/8-React.js.html#_4、在生命周期中的哪一步你应该发起-ajax-请求)4、在生命周期中的哪一步你应该发起 AJAX 请求

------

> 我们应当将AJAX 请求放到 `componentDidMount` 函数中执行，主要原因有下

- `React` 下一代调和算法 `Fiber` 会通过开始或停止渲染的方式优化应用性能，其会影响到 `componentWillMount` 的触发次数。对于 `componentWillMount` 这个生命周期函数的调用次数会变得不确定，`React` 可能会多次频繁调用 `componentWillMount`。如果我们将 `AJAX` 请求放到 `componentWillMount` 函数中，那么显而易见其会被触发多次，自然也就不是好的选择。
- 如果我们将`AJAX` 请求放置在生命周期的其他函数中，我们并不能保证请求仅在组件挂载完毕后才会要求响应。如果我们的数据请求在组件挂载之前就完成，并且调用了`setState`函数将数据添加到组件状态中，对于未挂载的组件则会报错。而在 `componentDidMount` 函数中进行 `AJAX` 请求则能有效避免这个问题

## (https://interview.html5.wiki/section/8-React.js.html#_5、shouldcomponentupdate-的作用)5、shouldComponentUpdate 的作用

------

> `shouldComponentUpdate` 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新

## (https://interview.html5.wiki/section/8-React.js.html#_6、如何告诉-react-它应该编译生产环境版)6、如何告诉 React 它应该编译生产环境版

------

> 通常情况下我们会使用 `Webpack` 的 `DefinePlugin` 方法来将 `NODE_ENV` 变量值设置为 `production`。编译版本中 `React`会忽略 `propType` 验证以及其他的告警信息，同时还会降低代码库的大小，`React` 使用了 `Uglify` 插件来移除生产环境下不必要的注释等信息

## (https://interview.html5.wiki/section/8-React.js.html#_7、概述下-react-中的事件处理逻辑)7、概述下 React 中的事件处理逻辑

------

> 为了解决跨浏览器兼容性问题，`React` 会将浏览器原生事件（`Browser Native Event`）封装为合成事件（`SyntheticEvent`）传入设置的事件处理器中。这里的合成事件提供了与原生事件相同的接口，不过它们屏蔽了底层浏览器的细节差异，保证了行为的一致性。另外有意思的是，`React` 并没有直接将事件附着到子元素上，而是以单一事件监听器的方式将所有的事件发送到顶层进行处理。这样 `React` 在更新 `DOM` 的时候就不需要考虑如何去处理附着在 `DOM` 上的事件监听器，最终达到优化性能的目的

## (https://interview.html5.wiki/section/8-React.js.html#_8、createelement-与-cloneelement-的区别是什么)8、createElement 与 cloneElement 的区别是什么

------

> ```
> createElement` 函数是 JSX 编译之后使用的创建 `React Element` 的函数，而 `cloneElement` 则是用于复制某个元素并传入新的 `Props
> ```

## (https://interview.html5.wiki/section/8-React.js.html#_9、redux中间件)9、redux中间件

------

> 中间件提供第三方插件的模式，自定义拦截 `action` -> `reducer` 的过程。变为 `action` -> `middlewares` -> `reducer`。这种机制可以让我们改变数据流，实现如异步`action` ，`action` 过滤，日志输出，异常报告等功能

- `redux-logger`：提供日志输出
- `redux-thunk`：处理异步操作
- `redux-promise`：处理异步操作，`actionCreator`的返回值是`promise`

## (https://interview.html5.wiki/section/8-React.js.html#_10、redux有什么缺点)10、redux有什么缺点

------

- 一个组件所需要的数据，必须由父组件传过来，而不能像`flux`中直接从`store`取。
- 当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新`render`，可能会有效率影响，或者需要写复杂的`shouldComponentUpdate`进行判断。

## (https://interview.html5.wiki/section/8-React.js.html#_11、react组件的划分业务组件技术组件)11、react组件的划分业务组件技术组件？

------

- 根据组件的职责通常把组件分为UI组件和容器组件。
- UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
- 两者通过`React-Redux` 提供`connect`方法联系起来

## (https://interview.html5.wiki/section/8-React.js.html#_12、react旧版生命周期函数)12、react旧版生命周期函数

------

**初始化阶段**

- `getDefaultProps`:获取实例的默认属性
- `getInitialState`:获取每个实例的初始化状态
- `componentWillMount`：组件即将被装载、渲染到页面上
- `render`:组件在这里生成虚拟的`DOM`节点
- `componentDidMount`:组件真正在被装载之后

**运行中状态**

- `componentWillReceiveProps`:组件将要接收到属性的时候调用
- `shouldComponentUpdate`:组件接受到新属性或者新状态的时候（可以返回false，接收数据后不更新，阻止`render`调用，后面的函数不会被继续执行了）
- `componentWillUpdate`:组件即将更新不能修改属性和状态
- `render`:组件重新描绘
- `componentDidUpdate`:组件已经更新

**销毁阶段**

- `componentWillUnmount`:组件即将销毁

### (https://interview.html5.wiki/section/8-React.js.html#新版生命周期)新版生命周期

> 在新版本中，React 官方对生命周期有了新的 变动建议:

- 使用`getDerivedStateFromProps`替换`componentWillMount；`
- 使用`getSnapshotBeforeUpdate`替换`componentWillUpdate；`
- 避免使用`componentWillReceiveProps`；

> 其实该变动的原因，正是由于上述提到的 `Fiber`。首先，从上面我们知道 React 可以分成 `reconciliation` 与 `commit`两个阶段，对应的生命周期如下:

**reconciliation**

- `componentWillMount`
- `componentWillReceiveProps`
- `shouldComponentUpdate`
- `componentWillUpdate`

**commit**

- `componentDidMount`
- `componentDidUpdate`
- `componentWillUnmount`

> 在 `Fiber` 中，`reconciliation` 阶段进行了任务分割，涉及到 暂停 和 重启，因此可能会导致 `reconciliation` 中的生命周期函数在一次更新渲染循环中被 多次调用 的情况，产生一些意外错误

新版的建议生命周期如下:

```text
class Component extends React.Component {
  // 替换 `componentWillReceiveProps` ，
  // 初始化和 update 时被调用
  // 静态函数，无法使用 this
  static getDerivedStateFromProps(nextProps, prevState) {}
  
  // 判断是否需要更新组件
  // 可以用于组件性能优化
  shouldComponentUpdate(nextProps, nextState) {}
  
  // 组件被挂载后触发
  componentDidMount() {}
  
  // 替换 componentWillUpdate
  // 可以在更新之前获取最新 dom 数据
  getSnapshotBeforeUpdate() {}
  
  // 组件更新后调用
  componentDidUpdate() {}
  
  // 组件即将销毁
  componentWillUnmount() {}
  
  // 组件已销毁
  componentDidUnMount() {}
} 
```

**使用建议:**

- 在`constructor`初始化 `state`；

- 在`componentDidMount`中进行事件监听，并在`componentWillUnmount`中解绑事件；

- 在`componentDidMount`中进行数据的请求，而不是在`componentWillMount`；

- 需要根据

	 

	```
	props
	```

	 

	更新

	 

	```
	state
	```

	 

	时，使用

	```
	getDerivedStateFromProps(nextProps, prevState)
	```

	；

	- 旧 props 需要自己存储，以便比较；

```text
public static getDerivedStateFromProps(nextProps, prevState) {
	// 当新 props 中的 data 发生变化时，同步更新到 state 上
	if (nextProps.data !== prevState.data) {
		return {
			data: nextProps.data
		}
	} else {
		return null1
	}
} 
```

> 可以在componentDidUpdate监听 props 或者 state 的变化，例如:

```text
componentDidUpdate(prevProps) {
	// 当 id 发生变化时，重新获取数据
	if (this.props.id !== prevProps.id) {
		this.fetchData(this.props.id);
	}
} 
```

- 在componentDidUpdate使用setState时，必须加条件，否则将进入死循环；
- getSnapshotBeforeUpdate(prevProps, prevState)可以在更新之前获取最新的渲染数据，它的调用是在 render 之后， update 之前；
- shouldComponentUpdate: 默认每次调用setState，一定会最终走到 diff 阶段，但可以通过shouldComponentUpdate的生命钩子返回false来直接阻止后面的逻辑执行，通常是用于做条件渲染，优化渲染的性能。

## (https://interview.html5.wiki/section/8-React.js.html#_13、react性能优化是哪个周期函数)13、react性能优化是哪个周期函数

------

> `shouldComponentUpdate` 这个方法用来判断是否需要调用render方法重新描绘dom。因为dom的描绘非常消耗性能，如果我们能在`shouldComponentUpdate方`法中能够写出更优化的`dom diff`算法，可以极大的提高性能

## (https://interview.html5.wiki/section/8-React.js.html#_14、为什么虚拟dom会提高性能)14、为什么虚拟dom会提高性能

------

> 虚拟`dom`相当于在`js`和真实`dom`中间加了一个缓存，利用`dom diff`算法避免了没有必要的`dom`操作，从而提高性能

**具体实现步骤如下**

- 用 `JavaScript` 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 `DOM` 树，插到文档当中
- 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
- 把2所记录的差异应用到步骤1所构建的真正的`DOM`树上，视图就更新

## (https://interview.html5.wiki/section/8-React.js.html#_15、diff算法)15、diff算法?

------

- 把树形结构按照层级分解，只比较同级元素。
- 给列表结构的每个单元添加唯一的`key`属性，方便比较。
- `React` 只会匹配相同 `class` 的 `component`（这里面的`class`指的是组件的名字）
- 合并操作，调用 `component` 的 `setState` 方法的时候, `React` 将其标记为 - `dirty`.到每一个事件循环结束, `React` 检查所有标记 `dirty`的 `component`重新绘制.
- 选择性子树渲染。开发人员可以重写`shouldComponentUpdate`提高`diff`的性能

## (https://interview.html5.wiki/section/8-React.js.html#_16、react性能优化方案)16、react性能优化方案

------

- 重写`shouldComponentUpdate`来避免不必要的dom操作
- 使用 `production` 版本的`react.js`
- 使用`key`来帮助`React`识别列表中所有子组件的最小变化

## (https://interview.html5.wiki/section/8-React.js.html#_16、简述flux-思想)16、简述flux 思想

------

> `Flux` 的最大特点，就是数据的"单向流动"。

- 用户访问 `View`
- `View`发出用户的 `Action`
- `Dispatcher` 收到`Action`，要求 `Store` 进行相应的更新
- `Store` 更新后，发出一个`"change"`事件
- `View` 收到`"change"`事件后，更新页面

## (https://interview.html5.wiki/section/8-React.js.html#_17、说说你用react有什么坑点)17、说说你用react有什么坑点？

------

**1. JSX做表达式判断时候，需要强转为boolean类型**

> 如果不使用 `!!b` 进行强转数据类型，会在页面里面输出 `0`。

```text
render() {
  const b = 0;
  return <div>
    {
      !!b && <div>这是一段文本</div>
    }
  </div>
} 
```

**2. 尽量不要在 `componentWillReviceProps` 里使用 setState，如果一定要使用，那么需要判断结束条件，不然会出现无限重渲染，导致页面崩溃**

**3. 给组件添加ref时候，尽量不要使用匿名函数，因为当组件更新的时候，匿名函数会被当做新的prop处理，让ref属性接受到新函数的时候，react内部会先清空ref，也就是会以null为回调参数先执行一次ref这个props，然后在以该组件的实例执行一次ref，所以用匿名函数做ref的时候，有的时候去ref赋值后的属性会取到null**

**4. 遍历子节点的时候，不要用 index 作为组件的 key 进行传入**

## (https://interview.html5.wiki/section/8-React.js.html#_18、我现在有一个button-要用react在上面绑定点击事件-要怎么做)18、我现在有一个button，要用react在上面绑定点击事件，要怎么做？

------

```text
class Demo {
  render() {
    return <button onClick={(e) => {
      alert('我点击了按钮')
    }}>
      按钮
    </button>
  }
} 
```

**你觉得你这样设置点击事件会有什么问题吗？**

> 由于`onClick`使用的是匿名函数，所有每次重渲染的时候，会把该`onClick`当做一个新的`prop`来处理，会将内部缓存的`onClick`事件进行重新赋值，所以相对直接使用函数来说，可能有一点的性能下降

修改

```text
class Demo {

  onClick = (e) => {
    alert('我点击了按钮')
  }

  render() {
    return <button onClick={this.onClick}>
      按钮
    </button>
  } 
```

## (https://interview.html5.wiki/section/8-React.js.html#_19、react-的虚拟dom是怎么实现的)19、react 的虚拟dom是怎么实现的

------

> 首先说说为什么要使用`Virturl DOM`，因为操作真实`DOM`的耗费的性能代价太高，所以`react`内部使用`js`实现了一套dom结构，在每次操作在和真实dom之前，使用实现好的diff算法，对虚拟dom进行比较，递归找出有变化的dom节点，然后对其进行更新操作。为了实现虚拟`DOM`，我们需要把每一种节点类型抽象成对象，每一种节点类型有自己的属性，也就是prop，每次进行`diff`的时候，`react`会先比较该节点类型，假如节点类型不一样，那么`react`会直接删除该节点，然后直接创建新的节点插入到其中，假如节点类型一样，那么会比较`prop`是否有更新，假如有`prop`不一样，那么`react`会判定该节点有更新，那么重渲染该节点，然后在对其子节点进行比较，一层一层往下，直到没有子节点

## (https://interview.html5.wiki/section/8-React.js.html#_20、react-的渲染过程中-兄弟节点之间是怎么处理的-也就是key值不一样的时候)20、react 的渲染过程中，兄弟节点之间是怎么处理的？也就是key值不一样的时候

------

> 通常我们输出节点的时候都是map一个数组然后返回一个`ReactNode`，为了方便`react`内部进行优化，我们必须给每一个`reactNode`添加`key`，这个`key prop`在设计值处不是给开发者用的，而是给react用的，大概的作用就是给每一个`reactNode`添加一个身份标识，方便react进行识别，在重渲染过程中，如果key一样，若组件属性有所变化，则`react`只更新组件对应的属性；没有变化则不更新，如果key不一样，则react先销毁该组件，然后重新创建该组件

## (https://interview.html5.wiki/section/8-React.js.html#_21、介绍一下react)21、介绍一下react

------

1. 以前我们没有jquery的时候，我们大概的流程是从后端通过ajax获取到数据然后使用jquery生成dom结果然后更新到页面当中，但是随着业务发展，我们的项目可能会越来越复杂，我们每次请求到数据，或则数据有更改的时候，我们又需要重新组装一次dom结构，然后更新页面，这样我们手动同步dom和数据的成本就越来越高，而且频繁的操作dom，也使我我们页面的性能慢慢的降低。
2. 这个时候mvvm出现了，mvvm的双向数据绑定可以让我们在数据修改的同时同步dom的更新，dom的更新也可以直接同步我们数据的更改，这个特定可以大大降低我们手动去维护dom更新的成本，mvvm为react的特性之一，虽然react属于单项数据流，需要我们手动实现双向数据绑定。
3. 有了mvvm还不够，因为如果每次有数据做了更改，然后我们都全量更新dom结构的话，也没办法解决我们频繁操作dom结构(降低了页面性能)的问题，为了解决这个问题，react内部实现了一套虚拟dom结构，也就是用js实现的一套dom结构，他的作用是讲真实dom在js中做一套缓存，每次有数据更改的时候，react内部先使用算法，也就是鼎鼎有名的diff算法对dom结构进行对比，找到那些我们需要新增、更新、删除的dom节点，然后一次性对真实DOM进行更新，这样就大大降低了操作dom的次数。 那么diff算法是怎么运作的呢，首先，diff针对类型不同的节点，会直接判定原来节点需要卸载并且用新的节点来装载卸载的节点的位置；针对于节点类型相同的节点，会对比这个节点的所有属性，如果节点的所有属性相同，那么判定这个节点不需要更新，如果节点属性不相同，那么会判定这个节点需要更新，react会更新并重渲染这个节点。
4. react设计之初是主要负责UI层的渲染，虽然每个组件有自己的state，state表示组件的状态，当状态需要变化的时候，需要使用setState更新我们的组件，但是，我们想通过一个组件重渲染它的兄弟组件，我们就需要将组件的状态提升到父组件当中，让父组件的状态来控制这两个组件的重渲染，当我们组件的层次越来越深的时候，状态需要一直往下传，无疑加大了我们代码的复杂度，我们需要一个状态管理中心，来帮我们管理我们状态state。
5. 这个时候，redux出现了，我们可以将所有的state交给redux去管理，当我们的某一个state有变化的时候，依赖到这个state的组件就会进行一次重渲染，这样就解决了我们的我们需要一直把state往下传的问题。redux有action、reducer的概念，action为唯一修改state的来源，reducer为唯一确定state如何变化的入口，这使得redux的数据流非常规范，同时也暴露出了redux代码的复杂，本来那么简单的功能，却需要完成那么多的代码。
6. 后来，社区就出现了另外一套解决方案，也就是mobx，它推崇代码简约易懂，只需要定义一个可观测的对象，然后哪个组价使用到这个可观测的对象，并且这个对象的数据有更改，那么这个组件就会重渲染，而且mobx内部也做好了是否重渲染组件的生命周期shouldUpdateComponent，不建议开发者进行更改，这使得我们使用mobx开发项目的时候可以简单快速的完成很多功能，连redux的作者也推荐使用mobx进行项目开发。但是，随着项目的不断变大，mobx也不断暴露出了它的缺点，就是数据流太随意，出了bug之后不好追溯数据的流向，这个缺点正好体现出了redux的优点所在，所以针对于小项目来说，社区推荐使用mobx，对大项目推荐使用redux

## (https://interview.html5.wiki/section/8-React.js.html#_22、react怎么做数据的检查和变化)22、React怎么做数据的检查和变化

------

> ```
> Model`改变之后（可能是调用了`setState`），触发了`virtual dom`的更新，再用`diff`算法来`把virtual DOM`比较`real DOM`，看看是哪个`dom`节点更新了，再渲染`real dom
> ```

## (https://interview.html5.wiki/section/8-React.js.html#_23、react-router里的-link-标签和-a-标签有什么区别)23、react-router里的`<Link>`标签和`<a>`标签有什么区别

------

> 对比`<a>`,`Link`组件避免了不必要的重渲染

## (https://interview.html5.wiki/section/8-React.js.html#_24、connect原理)24、connect原理

------

- 首先`connect`之所以会成功，是因为`Provider`组件：
- 在原应用组件上包裹一层，使原来整个应用成为`Provider`的子组件 接收`Redux`的`store`作为`props`，通过`context`对象传递给子孙组件上的`connect`

> `connect`做了些什么。它真正连接 `Redux` 和 `React`，它包在我们的容器组件的外一层，它接收上面 `Provider` 提供的 `store` 里面的`state` 和 `dispatch`，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件

- `connect`是一个高阶函数，首先传入`mapStateToProps`、`mapDispatchToProps`，然后返回一个生产`Component`的函数(`wrapWithConnect`)，然后再将真正的`Component`作为参数传入`wrapWithConnect`，这样就生产出一个经过包裹的`Connect`组件，

**该组件具有如下特点**

- 通过`props.store`获取祖先`Component`的`store props`包括`stateProps`、`dispatchProps`、`parentProps`,合并在一起得到`nextState`，作为`props`传给真正的`Component componentDidMount`时，添加事件`this.store.subscribe(this.handleChange)`，实现页面交互
- `shouldComponentUpdate`时判断是否有避免进行渲染，提升页面性能，并得到`nextState` `componentWillUnmount`时移除注册的事件`this.handleChange`

> 由于`connect`的源码过长，我们只看主要逻辑

```text
export default function connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) {
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      constructor(props, context) {
        // 从祖先Component处获得store
        this.store = props.store || context.store
        this.stateProps = computeStateProps(this.store, props)
        this.dispatchProps = computeDispatchProps(this.store, props)
        this.state = { storeState: null }
        // 对stateProps、dispatchProps、parentProps进行合并
        this.updateState()
      }
      shouldComponentUpdate(nextProps, nextState) {
        // 进行判断，当数据发生改变时，Component重新渲染
        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
          this.updateState(nextProps)
            return true
          }
        }
        componentDidMount() {
          // 改变Component的state
          this.store.subscribe(() = {
            this.setState({
              storeState: this.store.getState()
            })
          })
        }
        render() {
          // 生成包裹组件Connect
          return (
            <WrappedComponent {...this.nextState} />
          )
        }
      }
      Connect.contextTypes = {
        store: storeShape
      }
      return Connect;
    }
  } 
```

## (https://interview.html5.wiki/section/8-React.js.html#_25、redux实现原理解析)25、Redux实现原理解析

------

**为什么要用redux**

> 在`React`中，数据在组件中是单向流动的，数据从一个方向父组件流向子组件（通过`props`）,所以，两个非父子组件之间通信就相对麻烦，`redux`的出现就是为了解决`state`里面的数据问题

**Redux设计理念**

> `Redux`是将整个应用状态存储到一个地方上称为`store`,里面保存着一个状态树`store tree`,组件可以派发(`dispatch`)行为(`action`)给`store`,而不是直接通知其他组件，组件内部通过订阅`store`中的状态`state`来刷新自己的视图

![img](https://interview.html5.wiki/image/20210629/113720.png)

**Redux三大原则**

- 唯一数据源

> 整个应用的state都被存储到一个状态树里面，并且这个状态树，只存在于唯一的store中

- 保持只读状态

> `state`是只读的，唯一改变`state`的方法就是触发`action`，`action`是一个用于描述以发生时间的普通对象

- 数据改变只能通过纯函数来执行

> 使用纯函数来执行修改，为了描述`action`如何改变`state`的，你需要编写`reducers`

**Redux源码**

```text
let createStore = (reducer) => {
    let state;
    //获取状态对象
    //存放所有的监听函数
    let listeners = [];
    let getState = () => state;
    //提供一个方法供外部调用派发action
    let dispath = (action) => {
        //调用管理员reducer得到新的state
        state = reducer(state, action);
        //执行所有的监听函数
        listeners.forEach((l) => l())
    }
    //订阅状态变化事件，当状态改变发生之后执行监听函数
    let subscribe = (listener) => {
        listeners.push(listener);
    }
    dispath();
    return {
        getState,
        dispath,
        subscribe
    }
}
let combineReducers=(renducers)=>{
    //传入一个renducers管理组，返回的是一个renducer
    return function(state={},action={}){
        let newState={};
        for(var attr in renducers){
            newState[attr]=renducers[attr](state[attr],action)

        }
        return newState;
    }
}
export {createStore,combineReducers}; 
```

## (https://interview.html5.wiki/section/8-React.js.html#_26、purecomponent和functioncomponent区别)26、pureComponent和FunctionComponent区别

------

> `PureComponent`和`Component`完全相同，但是在`shouldComponentUpdate`实现中，`PureComponent`使用了`props`和`state`的浅比较。主要作用是用来提高某些特定场景的性能

## (https://interview.html5.wiki/section/8-React.js.html#_27-react-hooks-它带来了那些便利)27 react hooks，它带来了那些便利

------

- 代码逻辑聚合，逻辑复用
- HOC嵌套地狱
- 代替class

> React 中通常使用 类定义 或者 函数定义 创建组件:

在类定义中，我们可以使用到许多 React 特性，例如 state、 各种组件生命周期钩子等，但是在函数定义中，我们却无能为力，因此 React 16.8 版本推出了一个新功能 (React Hooks)，通过它，可以更好的在函数定义组件中使用 React 特性。

**好处:**

1. 跨组件复用: 其实 render props / HOC 也是为了复用，相比于它们，Hooks 作为官方的底层 API，最为轻量，而且改造成本小，不会影响原来的组件层次结构和传说中的嵌套地狱；
2. 类定义更为复杂

- 不同的生命周期会使逻辑变得分散且混乱，不易维护和管理；
- 时刻需要关注this的指向问题；
- 代码复用代价高，高阶组件的使用经常会使整个组件树变得臃肿；

1. 状态与UI隔离: 正是由于 Hooks 的特性，状态逻辑会变成更小的粒度，并且极容易被抽象成一个自定义 Hooks，组件中的状态和 UI 变得更为清晰和隔离。

**注意:**

- 避免在 循环/条件判断/嵌套函数 中调用 hooks，保证调用顺序的稳定；
- 只有 函数定义组件 和 hooks 可以调用 hooks，避免在 类组件 或者 普通函数 中调用；
- 不能在useEffect中使用useState，React 会报错提示；
- 类组件不会被替换或废弃，不需要强制改造类组件，两种方式能并存；

**重要钩子**

1. 状态钩子 (useState): 用于定义组件的 State，其到类定义中this.state的功能；

```text
// useState 只接受一个参数: 初始状态
// 返回的是组件名和更改该组件对应的函数
const [flag, setFlag] = useState(true);
// 修改状态
setFlag(false)
	
// 上面的代码映射到类定义中:
this.state = {
	flag: true	
}
const flag = this.state.flag
const setFlag = (bool) => {
    this.setState({
        flag: bool,
    })
} 
```

1. 生命周期钩子 (useEffect):

> 类定义中有许多生命周期函数，而在 React Hooks 中也提供了一个相应的函数 (useEffect)，这里可以看做componentDidMount、componentDidUpdate和componentWillUnmount的结合。

**useEffect(callback, [source])接受两个参数**

- callback: 钩子回调函数；
- source: 设置触发条件，仅当 source 发生改变时才会触发；
- useEffect钩子在没有传入[source]参数时，默认在每次 render 时都会优先调用上次保存的回调中返回的函数，后再重新调用回调；

```text
useEffect(() => {
	// 组件挂载后执行事件绑定
	console.log('on')
	addEventListener()
	
	// 组件 update 时会执行事件解绑
	return () => {
		console.log('off')
		removeEventListener()
	}
}, [source]);


// 每次 source 发生改变时，执行结果(以类定义的生命周期，便于大家理解):
// --- DidMount ---
// 'on'
// --- DidUpdate ---
// 'off'
// 'on'
// --- DidUpdate ---
// 'off'
// 'on'
// --- WillUnmount --- 
// 'off' 
```

**通过第二个参数，我们便可模拟出几个常用的生命周期:**

- componentDidMount: 传入[]时，就只会在初始化时调用一次

```text
const useMount = (fn) => useEffect(fn, []) 
```

- componentWillUnmount: 传入[]，回调中的返回的函数也只会被最终执行一次

```text
const useUnmount = (fn) => useEffect(() => fn, []) 
```

- mounted: 可以使用 useState 封装成一个高度可复用的 mounted 状态；

```text
const useMounted = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        !mounted && setMounted(true);
        return () => setMounted(false);
    }, []);
    return mounted;
} 
```

- componentDidUpdate: useEffect每次均会执行，其实就是排除了 DidMount 后即可；

```text
const mounted = useMounted() 
useEffect(() => {
    mounted && fn()
}) 
```

1. 其它内置钩子:

- `useContext`: 获取 context 对象

- ```
	useReducer
	```

	: 类似于 Redux 思想的实现，但其并不足以替代 Redux，可以理解成一个组件内部的 redux:

	- 并不是持久化存储，会随着组件被销毁而销毁；
	- 属于组件内部，各个组件是相互隔离的，单纯用它并无法共享数据；
	- 配合useContext`的全局性，可以完成一个轻量级的 Redux；(easy-peasy)

- `useCallback`: 缓存回调函数，避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染，具有性能优化的效果；

- `useMemo`: 用于缓存传入的 props，避免依赖的组件每次都重新渲染；

- `useRef`: 获取组件的真实节点；

- ```
	useLayoutEffect
	```

	- DOM更新同步钩子。用法与useEffect类似，只是区别于执行时间点的不同
	- useEffect属于异步执行，并不会等待 DOM 真正渲染后执行，而useLayoutEffect则会真正渲染后才触发；
	- 可以获取更新后的 state；

1. 自定义钩子(useXxxxx): 基于 Hooks 可以引用其它 Hooks 这个特性，我们可以编写自定义钩子，如上面的useMounted。又例如，我们需要每个页面自定义标题:

```text
function useTitle(title) {
  useEffect(
    () => {
      document.title = title;
    });
}

// 使用:
function Home() {
	const title = '我是首页'
	useTitle(title)
	
	return (
		<div>{title}</div>
	)
} 
```

## (https://interview.html5.wiki/section/8-React.js.html#_28、react-portal-有哪些使用场景)28、React Portal 有哪些使用场景

------

- 在以前， react 中所有的组件都会位于 #app 下，而使用 Portals 提供了一种脱离 #app 的组件
- 因此 Portals 适合脱离文档流(out of flow) 的组件，特别是 position: absolute 与 position: fixed的组件。比如模态框，通知，警告，goTop 等。

以下是官方一个模态框的示例，可以在以下地址中测试效果

```text
<html>
  <body>
    <div id="app"></div>
    <div id="modal"></div>
    <div id="gotop"></div>
    <div id="alert"></div>
  </body>
</html> 
const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
} 
```

**React Hooks当中的useEffect是如何区分生命周期钩子的**

> useEffect可以看成是`componentDidMount`，`componentDidUpdate`和`componentWillUnmount`三者的结合。useEffect(callback, [source])接收两个参数，调用方式如下

```text
 useEffect(() => {
   console.log('mounted');
   
   return () => {
       console.log('willUnmount');
   }
 }, [source]); 
```

> 生命周期函数的调用主要是通过第二个参数[source]来进行控制，有如下几种情况：

- `[source]`参数不传时，则每次都会优先调用上次保存的函数中返回的那个函数，然后再调用外部那个函数；
- `[source]`参数传[]时，则外部的函数只会在初始化时调用一次，返回的那个函数也只会最终在组件卸载时调用一次；
- `[source]`参数有值时，则只会监听到数组中的值发生变化后才优先调用返回的那个函数，再调用外部的函数。

## (https://interview.html5.wiki/section/8-React.js.html#_29、react和vue的区别)29、react和vue的区别

------

**相同点：**

1. 数据驱动页面，提供响应式的试图组件
2. 都有virtual DOM,组件化的开发，通过props参数进行父子之间组件传递数据，都实现了webComponents规范
3. 数据流动单向，都支持服务器的渲染SSR
4. 都有支持native的方法，react有React native， vue有wexx

**不同点：**

1. 数据绑定：Vue实现了双向的数据绑定，react数据流动是单向的
2. 数据渲染：大规模的数据渲染，react更快
3. 使用场景：React配合Redux架构适合大规模多人协作复杂项目，Vue适合小快的项目
4. 开发风格：react推荐做法jsx + inline style把html和css都写在js了

> vue是采用webpack +vue-loader单文件组件格式，html, js, css同一个文件

# (https://interview.html5.wiki/section/8-React.js.html#)

------

- 高阶组件(Higher Order Componennt)本身其实不是组件，而是一个函数，这个函数接收一个元组件作为参数，然后返回一个新的增强组件，高阶组件的出现本身也是为了逻辑复用，举个例子

```text
function withLoginAuth(WrappedComponent) {
  return class extends React.Component {
      
      constructor(props) {
          super(props);
          this.state = {
            isLogin: false
          };
      }
      
      async componentDidMount() {
          const isLogin = await getLoginStatus();
          this.setState({ isLogin });
      }
      
      render() {
        if (this.state.isLogin) {
            return <WrappedComponent {...this.props} />;
        }
        
        return (<div>您还未登录...</div>);
      }
  }
} 
```

## (https://interview.html5.wiki/section/8-React.js.html#_31、react实现的移动应用中-如果出现卡顿-有哪些可以考虑的优化方案)31、React实现的移动应用中，如果出现卡顿，有哪些可以考虑的优化方案

------

- 增加`shouldComponentUpdate`钩子对新旧`props`进行比较，如果值相同则阻止更新，避免不必要的渲染，或者使用`PureReactComponent`替代`Component`，其内部已经封装了`shouldComponentUpdate`的浅比较逻辑
- 对于列表或其他结构相同的节点，为其中的每一项增加唯一`key`属性，以方便`React`的`diff`算法中对该节点的复用，减少节点的创建和删除操作
- `render`函数中减少类似`onClick={() => {doSomething()}}`的写法，每次调用render函数时均会创建一个新的函数，即使内容没有发生任何变化，也会导致节点没必要的重渲染，建议将函数保存在组件的成员对象中，这样只会创建一次
- 组件的`props`如果需要经过一系列运算后才能拿到最终结果，则可以考虑使用`reselect`库对结果进行缓存，如果props值未发生变化，则结果直接从缓存中拿，避免高昂的运算代价
- `webpack-bundle-analyzer`分析当前页面的依赖包，是否存在不合理性，如果存在，找到优化点并进行优化

## (https://interview.html5.wiki/section/8-React.js.html#_32、fiber)32、Fiber

------

**React 的核心流程可以分为两个部分:**

- ```
	reconciliation
	```

	 

	(调度算法，也可称为

	 

	```
	render
	```

	)

	- 更新 `state` 与 `props`；

	- 调用生命周期钩子；

	- 生成

		 

		```
		virtual dom
		```

		- 这里应该称为 `Fiber Tree` 更为符合；

	- 通过新旧 vdom 进行 diff 算法，获取 vdom change

	- 确定是否需要重新渲染

- ```
	commit
	```

	- 如需要，则操作 `dom` 节点更新

> 要了解 Fiber，我们首先来看为什么需要它

- **问题**: 随着应用变得越来越庞大，整个更新渲染的过程开始变得吃力，大量的组件渲染会导致主进程长时间被占用，导致一些动画或高频操作出现卡顿和掉帧的情况。而关键点，便是 同步阻塞。在之前的调度算法中，React 需要实例化每个类组件，生成一颗组件树，使用 同步递归 的方式进行遍历渲染，而这个过程最大的问题就是无法 暂停和恢复。
- **解决方**案: 解决同步阻塞的方法，通常有两种: 异步 与 任务分割。而 React Fiber 便是为了实现任务分割而诞生的
- 简述
	- 在 `React V16` 将调度算法进行了重构， 将之前的 `stack reconciler` 重构成新版的 fiber `reconciler`，变成了具有链表和指针的 单链表树遍历算法。通过指针映射，每个单元都记录着遍历当下的上一步与下一步，从而使遍历变得可以被暂停和重启
	- 这里我理解为是一种 任务分割调度算法，主要是 将原先同步更新渲染的任务分割成一个个独立的 小任务单位，根据不同的优先级，将小任务分散到浏览器的空闲时间执行，充分利用主进程的事件循环机制
- 核心
	- `Fiber` 这里可以具象为一个 数据结构

```text
class Fiber {
	constructor(instance) {
		this.instance = instance
		// 指向第一个 child 节点
		this.child = child
		// 指向父节点
		this.return = parent
		// 指向第一个兄弟节点
		this.sibling = previous
	}	
} 
```

- 链表树遍历算法

	: 通过 节点保存与映射，便能够随时地进行 停止和重启，这样便能达到实现任务分割的基本前提

	- 首先通过不断遍历子节点，到树末尾；
	- 开始通过 `sibling` 遍历兄弟节点；
	- return 返回父节点，继续执行2；
	- 直到 root 节点后，跳出遍历；

- 任务分割

	，React 中的渲染更新可以分成两个阶段

	- **reconciliation 阶段**: vdom 的数据对比，是个适合拆分的阶段，比如对比一部分树后，先暂停执行个动画调用，待完成后再回来继续比对
	- **Commit 阶段**: 将 change list 更新到 dom 上，并不适合拆分，才能保持数据与 UI 的同步。否则可能由于阻塞 UI 更新，而导致数据更新和 UI 不一致的情况

- 分散执行:

	 

	任务分割后，就可以把小任务单元分散到浏览器的空闲期间去排队执行，而实现的关键是两个新API:

	 

	```
	requestIdleCallback
	```

	 

	与

	 

	```
	requestAnimationFrame
	```

	- 低优先级的任务交给`requestIdleCallback`处理，这是个浏览器提供的事件循环空闲期的回调函数，需要 `pollyfill`，而且拥有 `deadline` 参数，限制执行事件，以继续切分任务；
	- 高优先级的任务交给`requestAnimationFrame`处理；

```text
// 类似于这样的方式
requestIdleCallback((deadline) => {
    // 当有空闲时间时，我们执行一个组件渲染；
    // 把任务塞到一个个碎片时间中去；
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && nextComponent) {
        nextComponent = performWork(nextComponent);
    }
}); 
```

- **优先级策略:** 文本框输入 > 本次调度结束需完成的任务 > 动画过渡 > 交互反馈 > 数据更新 > 不会显示但以防将来会显示的任务

> - Fiber 其实可以算是一种编程思想，在其它语言中也有许多应用(Ruby Fiber)。
> - 核心思想是 任务拆分和协同，主动把执行权交给主线程，使主线程有时间空挡处理其他高优先级任务。
> - 当遇到进程阻塞的问题时，任务分割、异步调用 和 缓存策略 是三个显著的解决思路。

## (https://interview.html5.wiki/section/8-React.js.html#_33、setstate)33、setState

------

> 在了解setState之前，我们先来简单了解下 React 一个包装结构: Transaction:

**事务 (Transaction)**

> 是 React 中的一个调用结构，用于包装一个方法，结构为: initialize - perform(method) - close。通过事务，可以统一管理一个方法的开始与结束；处于事务流中，表示进程正在执行一些操作

- setState: React 中用于修改状态，更新视图。它具有以下特点:

**异步与同步:** setState并不是单纯的异步或同步，这其实与调用时的环境相关:

- 在

	合成事件

	 

	和

	 

	生命周期钩子

	(除 componentDidUpdate) 中，setState是"异步"的；

	- 原因: 因为在setState的实现中，有一个判断: 当更新策略正在事务流的执行中时，该组件更新会被推入dirtyComponents队列中等待执行；否则，开始执行batchedUpdates队列更新；
		- 在生命周期钩子调用中，更新策略都处于更新之前，组件仍处于事务流中，而componentDidUpdate是在更新之后，此时组件已经不在事务流中了，因此则会同步执行；
		- 在合成事件中，React 是基于 事务流完成的事件委托机制 实现，也是处于事务流中；
	- 问题: 无法在setState后马上从this.state上获取更新后的值。
	- 解决: 如果需要马上同步去获取新值，setState其实是可以传入第二个参数的。setState(updater, callback)，在回调中即可获取最新值；

- 在

	 

	原生事件

	 

	和 setTimeout 中，setState是同步的，可以马上获取更新后的值；

	- 原因: 原生事件是浏览器本身的实现，与事务流无关，自然是同步；而setTimeout是放置于定时器线程中延后执行，此时事务流已结束，因此也是同步；

- **批量更新**: 在 合成事件 和 生命周期钩子 中，setState更新队列时，存储的是 合并状态(Object.assign)。因此前面设置的 key 值会被后面所覆盖，最终只会执行一次更新；

- 函数式

	: 由于 Fiber 及 合并 的问题，官方推荐可以传入 函数 的形式。setState(fn)，在fn中返回新的state对象即可，例如this.setState((state, props) => newState)；

	- 使用函数式，可以用于避免setState的批量更新的逻辑，传入的函数将会被 顺序调用；

**注意事项:**

- setState 合并，在 合成事件 和 生命周期钩子 中多次连续调用会被优化为一次；
- 当组件已被销毁，如果再次调用setState，React 会报错警告，通常有两种解决办法
	- 将数据挂载到外部，通过 props 传入，如放到 Redux 或 父级中；
	- 在组件内部维护一个状态量 (isUnmounted)，componentWillUnmount中标记为 true，在setState前进行判断；

# (https://interview.html5.wiki/section/8-React.js.html#-2)

------

> HOC(Higher Order Componennt) 是在 React 机制下社区形成的一种组件模式，在很多第三方开源库中表现强大。

**简述:**

- 高阶组件不是组件，是 增强函数，可以输入一个元组件，返回出一个新的增强组件；
- 高阶组件的主要作用是 代码复用，操作 状态和参数；

**用法:**

- 属性代理 (Props Proxy): 返回出一个组件，它基于被包裹组件进行 功能增强；

1. 默认参数: 可以为组件包裹一层默认参数；

```text
function proxyHoc(Comp) {
	return class extends React.Component {
		render() {
			const newProps = {
				name: 'tayde',
				age: 1,
			}
			return <Comp {...this.props} {...newProps} />
		}
	}
} 
```

1. 提取状态: 可以通过 props 将被包裹组件中的 state 依赖外层，例如用于转换受控组件:

```text
function withOnChange(Comp) {
	return class extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				name: '',
			}
		}
		onChangeName = () => {
			this.setState({
				name: 'dongdong',
			})
		}
		render() {
			const newProps = {
				value: this.state.name,
				onChange: this.onChangeName,
			}
			return <Comp {...this.props} {...newProps} />
		}
	}
} 
```

使用姿势如下，这样就能非常快速的将一个 Input 组件转化成受控组件。

```text
const NameInput = props => (<input  {...props} />)
export default withOnChange(NameInput) 
```

**包裹组件: 可以为被包裹元素进行一层包装，**

```text
function withMask(Comp) {
  return class extends React.Component {
      render() {
		  return (
		      <div>
				  <Comp {...this.props} />
					<div style={{
					  width: '100%',
					  height: '100%',
					  backgroundColor: 'rgba(0, 0, 0, .6)',
				  }} 
			  </div>
		  )
	  }
  }
} 
```

> **反向继承** (Inheritance Inversion): 返回出一个组件，继承于被包裹组件，常用于以下操作

```text
function IIHoc(Comp) {
    return class extends Comp {
        render() {
            return super.render();
        }
    };
} 
```

**渲染劫持 (Render Highjacking)**

条件渲染: 根据条件，渲染不同的组件

```text
function withLoading(Comp) {
    return class extends Comp {
        render() {
            if(this.props.isLoading) {
                return <Loading />
            } else {
                return super.render()
            }
        }
    };
} 
```

可以直接修改被包裹组件渲染出的 React 元素树

**操作状态 (Operate State)**: 可以直接通过 this.state 获取到被包裹组件的状态，并进行操作。但这样的操作容易使 state 变得难以追踪，不易维护，谨慎使用。

**应用场景:**

> 权限控制，通过抽象逻辑，统一对页面进行权限判断，按不同的条件进行页面渲染:

```text
function withAdminAuth(WrappedComponent) {
    return class extends React.Component {
		constructor(props){
			super(props)
			this.state = {
		    	isAdmin: false,
			}
		} 
		async componentWillMount() {
		    const currentRole = await getCurrentUserRole();
		    this.setState({
		        isAdmin: currentRole === 'Admin',
		    });
		}
		render() {
		    if (this.state.isAdmin) {
		        return <Comp {...this.props} />;
		    } else {
		        return (<div>您没有权限查看该页面，请联系管理员！</div>);
		    }
		}
    };
} 
```

**性能监控**，包裹组件的生命周期，进行统一埋点:

```text
function withTiming(Comp) {
    return class extends Comp {
        constructor(props) {
            super(props);
            this.start = Date.now();
            this.end = 0;
        }
        componentDidMount() {
            super.componentDidMount && super.componentDidMount();
            this.end = Date.now();
            console.log(`${WrappedComponent.name} 组件渲染时间为 ${this.end - this.start} ms`);
        }
        render() {
            return super.render();
        }
    };
} 
```

代码复用，可以将重复的逻辑进行抽象。

**使用注意:**

- 纯函数: 增强函数应为纯函数，避免侵入修改元组件；

- 避免用法污染: 理想状态下，应透传元组件的无关参数与事件，尽量保证用法不变；

- 命名空间: 为 HOC 增加特异性的组件名称，这样能便于开发调试和查找问题；

- **引用传递**: 如果需要传递元组件的 refs 引用，可以使用React.forwardRef；

- 静态方法

	: 元组件上的静态方法并无法被自动传出，会导致业务层无法调用；解决:

	- 函数导出
	- 静态方法赋值

- **重新渲**染: 由于增强函数每次调用是返回一个新组件，因此如果在 Render中使用增强函数，就会导致每次都重新渲染整个HOC，而且之前的状态会丢失；

## (https://interview.html5.wiki/section/8-React.js.html#_35、react如何进行组件-逻辑复用)35、React如何进行组件/逻辑复用?

------

> 抛开已经被官方弃用的Mixin,组件抽象的技术目前有三种比较主流:

- 高阶组件:
	- 属性代理
	- 反向继承
- 渲染属性
- react-hooks

## (https://interview.html5.wiki/section/8-React.js.html#_36、你对-time-slice的理解)36、你对 Time Slice的理解?

------

**时间分片**

- React 在渲染（render）的时候，不会阻塞现在的线程
- 如果你的设备足够快，你会感觉渲染是同步的
- 如果你设备非常慢，你会感觉还算是灵敏的
- 虽然是异步渲染，但是你将会看到完整的渲染，而不是一个组件一行行的渲染出来
- 同样书写组件的方式

> 也就是说，这是React背后在做的事情，对于我们开发者来说，是透明的，具体是什么样的效果呢？

## (https://interview.html5.wiki/section/8-React.js.html#_37、setstate到底是异步还是同步)37、setState到底是异步还是同步?

------

> 先给出答案: 有时表现出异步,有时表现出同步

- `setState`只在合成事件和钩子函数中是“异步”的，在原生事件和`setTimeout` 中都是同步的
- `setState` 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数`setState(partialState, callback)`中的`callback`拿到更新后的结果
- `setState` 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和`setTimeout` 中不会批量更新，在“异步”中如果对同一个值进行多次`setState`，`setState`的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时`setState`多个不同的值，在更新时会对其进行合并批量更新

## (https://interview.html5.wiki/section/8-React.js.html#_38-react-diff-算法)38 react diff 算法

------

![img](https://interview.html5.wiki/image/20210629/113732.png)

**diff算法的作用**

计算出Virtual DOM中真正变化的部分，并只针对该部分进行原生DOM操作，而非重新渲染整个页面。

**传统diff算法**

> 通过循环递归对节点进行依次对比，算法复杂度达到 `O(n^3)` ，n是树的节点数，这个有多可怕呢？——如果要展示1000个节点，得执行上亿次比较。。即便是CPU快能执行30亿条命令，也很难在一秒内计算出差异。

**React的diff算法**

1. 什么是调和？

> 将Virtual DOM树转换成actual DOM树的最少操作的过程 称为 调和 。

1. 什么是React diff算法？

> `diff`算法是调和的具体实现。

**diff策略**

> React用 三大策略 将O(n^3)复杂度 转化为 O(n)复杂度

**策略一（tree diff）：**

- Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。

**策略二（component diff）：**

- 拥有相同类的两个组件 生成相似的树形结构，
- 拥有不同类的两个组件 生成不同的树形结构。

**策略三（element diff）：**

对于同一层级的一组子节点，通过唯一id区分。

**tree diff**

- React通过updateDepth对Virtual DOM树进行层级控制。
- 对树分层比较，两棵树 只对同一层次节点 进行比较。如果该节点不存在时，则该节点及其子节点会被完全删除，不会再进一步比较。
- 只需遍历一次，就能完成整棵DOM树的比较。

![image-20210307224725566](https://interview.html5.wiki/image/20210629/113739.png)

那么问题来了，如果DOM节点出现了跨层级操作,diff会咋办呢？

> 答：diff只简单考虑同层级的节点位置变换，如果是跨层级的话，只有创建节点和删除节点的操作。

![image-20210307224829092](https://interview.html5.wiki/image/20210629/113745.png)

> 如上图所示，以A为根节点的整棵树会被重新创建，而不是移动，因此 官方建议不要进行DOM节点跨层级操作，可以通过CSS隐藏、显示节点，而不是真正地移除、添加DOM节点

### (https://interview.html5.wiki/section/8-React.js.html#component-diff)component diff

> React对不同的组件间的比较，有三种策略

1. 同一类型的两个组件，按原策略（层级比较）继续比较Virtual DOM树即可。
2. 同一类型的两个组件，组件A变化为组件B时，可能Virtual DOM没有任何变化，如果知道这点（变换的过程中，Virtual DOM没有改变），可节省大量计算时间，所以 用户 可以通过 `shouldComponentUpdate()` 来判断是否需要 判断计算。
3. 不同类型的组件，将一个（将被改变的）组件判断为`dirty component`（脏组件），从而替换 整个组件的所有节点。

> 注意：如果组件D和组件G的结构相似，但是 React判断是 不同类型的组件，则不会比较其结构，而是删除 组件D及其子节点，创建组件G及其子节点。

### (https://interview.html5.wiki/section/8-React.js.html#element-diff)element diff

> 当节点处于同一层级时，diff提供三种节点操作：删除、插入、移动。

- 插入：组件 C 不在集合（A,B）中，需要插入
- 删除：
	- 组件 D 在集合（A,B,D）中，但 D的节点已经更改，不能复用和更新，所以需要删除 旧的 D ，再创建新的。
	- 组件 D 之前在 集合（A,B,D）中，但集合变成新的集合（A,B）了，D 就需要被删除。
- 移动：组件D已经在集合（A,B,C,D）里了，且集合更新时，D没有发生更新，只是位置改变，如新集合（A,D,B,C），D在第二个，无须像传统diff，让旧集合的第二个B和新集合的第二个D 比较，并且删除第二个位置的B，再在第二个位置插入D，而是 （对同一层级的同组子节点） 添加唯一key进行区分，移动即可。

### (https://interview.html5.wiki/section/8-React.js.html#diff的不足与待优化的地方)diff的不足与待优化的地方

> 尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，会影响React的渲染性能

## (https://interview.html5.wiki/section/8-React.js.html#_39-redux-中间件)39 redux 中间件

------

> 中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过 滤，日志输出，异常报告等功能

常见的中间件:

- redux-logger:提供日志输出;
- redux-thunk:处理异步操作;
- redux-promise: 处理异步操作;
- actionCreator 的返回值是 promise

## (https://interview.html5.wiki/section/8-React.js.html#_40-redux-有什么缺点)40 redux 有什么缺点

------

- 一个组件所需要的数据，必须由父组件传过来，而不能像 flux 中直接从 store 取
- 当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新 render，可能会有效率影响，或者需要写复杂的 `shouldComponentUpdate` 进行判断

## (https://interview.html5.wiki/section/8-React.js.html#_41-为什么虚拟-dom-会提高性能)41 为什么虚拟 dom 会提高性能

------

> 虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff 算法避免了没有必要 的 dom 操作，从而提高性能

**具体实现步骤如下:**

1. 用 JavaScript 对象结构表示 DOM 树的结构;然后用这个树构建一个真正的 DOM 树， 插到文档当中;
2. 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记 录两棵树差异;
3. 把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。

## (https://interview.html5.wiki/section/8-React.js.html#_42-diff-算法)42 diff 算法?

------

- 把树形结构按照层级分解，只比较同级元素
- 给列表结构的每个单元添加唯一的 key 属性，方便比较
- React 只会匹配相同 class 的 component(这里面的 class 指的是组件的名字)
- 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个 事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.
- 选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能。

## (https://interview.html5.wiki/section/8-React.js.html#_43-react-生命周期函数)43 React 生命周期函数

------

**挂载阶段**

挂载阶段也可以理解为初始化阶段，也就是把我们的组件插入到 DOM 中。

- `constructor`
- `getDerivedStateFromProps`
- `~~UNSAFE_componentWillMount~~`
- `render`
- `(React Updates DOM and refs)`
- `componentDidMount`

1. constructor

组件的构造函数，第一个被执行。显式定义构造函数时，需要在第一行执行 `super(props)`，否则不能再构造函数中拿到 `this`。

在构造函数中，我们一般会做两件事：

- 初始化 state
- 对自定义方法进行 this 绑定

1. getDerivedStateFromProps

是一个静态函数，所以不能在这里使用 this，也表明了 React 官方不希望调用方滥用这个生命周期函数。每当父组件引发当前组件的渲染过程时，getDerivedStateFromProps 都会被调用，这样我们有机会根据新的 props 和当前的 state 来调整一个新的 state。

这个函数会在收到新的 props，调用了 setState 或 forceUpdate 时被调用。

1. render

React 最核心的方法，class 组件中必须实现的方法。

当 render 被调用时，它会检查 `this.props` 和 `this.state` 的变化并返回一下类型之一：

- 原生的 DOM，如 div
- React 组件
- 数组或 Fragment
- Portals（传送门）
- 字符串或数字，被渲染成文本节点
- 布尔值或 null，不会渲染任何东西

1. componentDidMount

在组件挂载之后立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。这个方法比较适合添加订阅的地方，如果添加了订阅，请记得在卸载的时候取消订阅。

你可以在 componentDidMount 里面直接调用 setState，它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前，如此保证了即使 render 了两次，用户也不会看到中间状态。

**更新阶段**

> 更新阶段是指当组件的 props 发生了改变，或者组件内部调用了 setState 或者发生了 forceUpdate，这个阶段的过程包括：

- `UNSAFE_componentWillReceiveProps`
- `getDerivedStateFromProps`
- `sholdComponentUpdate`
- `UNSAFE_componentWIllUpdate`
- `render`
- `getSnapshotBeforeUpdate`
- `(React Updates DOM and refs)`
- `componentDidUpdate`

1. shouldComponentUpdate

它有两个参数，根据此函数的返回值来判断是否重新进行渲染，首次渲染或者是当我们调用了 forceUpdate 时并不会触发此方法，此方法仅用于性能优化。

但是官方提倡我们使用内置的 PureComponent 而不是自己编写 shouldComponentUpdate。

1. getSnapshotBeforeUpdate

这个生命周期函数发生在 render 之后，在更新之前，给了一个机会去获取 DOM 信息，计算得到并返回一个 snapshot，这个 snapshot 会作为 componentDidUpdate 第三个参数传入。

1. componentDidUpdate

这个函数会在更新后被立即调用，首次渲染不会执行此方法。在这个函数中我们可以操作 DOM，可以发起请求，还可以 setState，但注意一定要用条件语句，否则会导致无限循环。

**卸载阶段**

1. componentWillUnmount

这个生命周期函数会在组件卸载销毁之前被调用，我们可以在这里执行一些清除操作。不要在这里调用 setState，因为组件不会重新渲染。

## (https://interview.html5.wiki/section/8-React.js.html#_44-react的虚拟dom和diff算法的内部实现)44 React的虚拟DOM和Diff算法的内部实现

------

> 传统 diff 算法的时间复杂度是 O(n^3)，这在前端 render 中是不可接受的。为了降低时间复杂度，react 的 diff 算法做了一些妥协，放弃了最优解，最终将时间复杂度降低到了 O(n)。

那么 react diff 算法做了哪些妥协呢？，参考如下：

1. tree diff：只对比同一层的 dom 节点，忽略 dom 节点的跨层级移动

如下图，react 只会对相同颜色方框内的 DOM 节点进行比较，即同一个父节点下的所有子节点。当发现节点不存在时，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。

这样只需要对树进行一次遍历，便能完成整个 DOM 树的比较。

![image-20210302195610674](https://interview.html5.wiki/image/20210629/113754.png)

这就意味着，如果 dom 节点发生了跨层级移动，react 会删除旧的节点，生成新的节点，而不会复用。

1. component diff：如果不是同一类型的组件，会删除旧的组件，创建新的组件

![image-20210302195654736](https://interview.html5.wiki/image/20210629/113803.png)

1. element diff：对于同一层级的一组子节点，需要通过唯一 id 进行来区分

- 如果没有 id 来进行区分，一旦有插入动作，会导致插入位置之后的列表全部重新渲染
- 这也是为什么渲染列表时为什么要使用唯一的 key。

## (https://interview.html5.wiki/section/8-React.js.html#_45-react的fiber工作原理-解决了什么问题)45 React的Fiber工作原理，解决了什么问题

------

- React Fiber 是一种基于浏览器的单线程调度算法。

> React Fiber 用类似 requestIdleCallback 的机制来做异步 diff。但是之前数据结构不支持这样的实现异步 diff，于是 React 实现了一个类似链表的数据结构，将原来的 递归diff 变成了现在的 遍历diff，这样就能做到异步可更新了

## (https://interview.html5.wiki/section/8-React.js.html#_46-setstate-是同步的还是异步的)46 setState 是同步的还是异步的

------

有时表现出同步，有时表现出异步

1. setState 只有在 React 自身的合成事件和钩子函数中是异步的，在原生事件和 setTimeout 中都是同步的
2. setState 的异步并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的异步。当然可以通过 setState 的第二个参数中的 callback 拿到更新后的结果
3. setState 的批量更新优化也是建立在异步（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会批量更新，在异步中如果对同一个值进行多次 setState，setState 的批量更新策略会对其进行覆盖，去最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新

- 合成事件中是异步
- 钩子函数中的是异步
- 原生事件中是同步
- setTimeout中是同步

## (https://interview.html5.wiki/section/8-React.js.html#_47-调用-setstate-之后发生了什么)47 调用 setState 之后发生了什么

------

> 在代码中调用 setState 函数之后，React 会将传入的参数与之前的状态进行合并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI 界面。在 React 得到元素树之后，React 会计算出新的树和老的树之间的差异，然后根据差异对界面进行最小化重新渲染。通过 diff 算法，React 能够精确制导哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

- 在 setState 的时候，React 会为当前节点创建一个 updateQueue 的更新列队。
- 然后会触发 reconciliation 过程，在这个过程中，会使用名为 Fiber 的调度算法，开始生成新的 Fiber 树， Fiber 算法的最大特点是可以做到异步可中断的执行。
- 然后 React Scheduler 会根据优先级高低，先执行优先级高的节点，具体是执行 doWork 方法。
- 在 doWork 方法中，React 会执行一遍 updateQueue 中的方法，以获得新的节点。然后对比新旧节点，为老节点打上 更新、插入、替换 等 Tag。
- 当前节点 doWork 完成后，会执行 performUnitOfWork 方法获得新节点，然后再重复上面的过程。
- 当所有节点都 doWork 完成后，会触发 commitRoot 方法，React 进入 commit 阶段。
- 在 commit 阶段中，React 会根据前面为各个节点打的 Tag，一次性更新整个 dom 元素

## (https://interview.html5.wiki/section/8-React.js.html#_48-key的作用)48 key的作用

------

> 是给每一个 vnode 的唯一 id,可以依靠 key,更准确,更快的拿到 oldVnode 中对应的 vnode 节点

```text
<!-- 更新前 -->
<div>
  <p key="ka">ka</p>
  <h3 key="song">song</he>
</div>

<!-- 更新后 -->
<div>
  <h3 key="song">song</h3>
  <p key="ka">ka</p>
</div> 
```

如果没有 key，React 会认为 div 的第一个子节点由 p 变成 h3，第二个子节点由 h3 变成 p，则会销毁这两个节点并重新构造。

但是当我们用 key 指明了节点前后对应关系后，React 知道 `key === "ka"` 的 p 更新后还在，所以可以复用该节点，只需要交换顺序。

key 是 React 用来追踪哪些列表元素被修改、被添加或者被移除的辅助标志。

在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React diff 算法中，React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。同时，React 还需要借助 key 来判断元素与本地状态的关联关系。

## (https://interview.html5.wiki/section/8-React.js.html#_49-diff-的瓶颈以及-react-的应对)49 Diff 的瓶颈以及 React 的应对

------

由于 diff 操作本身会带来性能上的损耗，在 React 文档中提到过，即使最先进的算法中，将前后两棵树完全比对的算法复杂度为`O(n3)`，其中 n 为树中元素的数量。

如果 React 使用了该算法，那么仅仅一千个元素的页面所需要执行的计算量就是十亿的量级，这无疑是无法接受的。

为了降低算法的复杂度，React 的 diff 会预设三个限制：

1. 只对同级元素进行 diff 比对。如果一个元素节点在前后两次更新中跨越了层级，那么 React 不会尝试复用它
2. 两个不同类型的元素会产生出不同的树。如果元素由 div 变成 p，React 会销毁 div 及其子孙节点，并新建 p 及其子孙节点
3. 开发者可以通过 key 来暗示哪些子元素在不同的渲染下能保持稳定

## (https://interview.html5.wiki/section/8-React.js.html#_50-react-setstate-笔试题-下面的代码输出什么)50 React setState 笔试题，下面的代码输出什么

------

```text
class Example extends React.Component {
  constructor() {
  super()
  this.state = {
    val: 0
  }
}
componentDidMount() {
  this.setState({ val: this.state.val + 1 })
  console.log(this.state.val)
  // 第 1 次 log
  this.setState({ val: this.state.val + 1 })
  console.log(this.state.val)
  // 第 2 次 log
  setTimeout(() => {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val)
    // 第 3 次 log
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val)
    // 第 4 次 log
    }, 0)
  }
  render() {
    return null
  }
}

// 答：0, 0, 1, 2 
```

## (https://interview.html5.wiki/section/8-React.js.html#_51-redux-中间件原理)51 Redux 中间件原理

------

- 指的是action和store之间，沟通的桥梁就是dispatch，action就是个对象。比如你用了redux-thunk，action也可以是个函数，怎么实现这个过程，就是通过中间件这个桥梁帮你实现的。action到达store之前会走中间件，这个中间件会把函数式的action转化为一个对象，在传递给store

## (https://interview.html5.wiki/section/8-React.js.html#_52-componentwillreceiveprops调用时机)52 componentWillReceiveProps调用时机

------

- 已经被废弃掉
- 当props改变的时候才调用，子组件第二次接收到props的时候

## (https://interview.html5.wiki/section/8-React.js.html#_53-react-性能优化)53 React 性能优化

------

- shouldCompoentUpdate
- pureComponent 自带shouldCompoentUpdate的浅比较优化
- 结合Immutable.js达到最优

## (https://interview.html5.wiki/section/8-React.js.html#_54-refs的作用是什么-你在什么样的业务场景下使用refs)54 refs的作用是什么，你在什么样的业务场景下使用refs

------

- 操作DOM，为什么操作DOM?
- 场景
	- 图片渲染好后，操作图片宽高。比如做个放大镜功能

## (https://interview.html5.wiki/section/8-React.js.html#_55-ref是一个函数又有什么好处)55 ref是一个函数又有什么好处？

------

- 方便react销毁组件、重新渲染的时候去清空refs的东西，防止内存泄露

## (https://interview.html5.wiki/section/8-React.js.html#_56-受控组件、非受控组件)56 受控组件、非受控组件

------

- 受控组件就是改变受控于数据的变化，数据变了页面也变了。受控组件更合适，数据驱动是react核心
- 非受控组件不是通过数据控制页面内容

## (https://interview.html5.wiki/section/8-React.js.html#_57-哪个生命周期发送ajax)57 哪个生命周期发送ajax

------

- componentWillMount在新版本react中已经被废弃了
- 在做ssr项目时候，componentWillMount要做服务端数据的获取，不能被占用
- 所以在componentDidMount中请求

## (https://interview.html5.wiki/section/8-React.js.html#_58-ssr原理是什么)58 ssr原理是什么？

------

> 核心原理其实就是借助虚拟DOM来实现react代码能够在服务器运行的，node里面可以执行react代码

## (https://interview.html5.wiki/section/8-React.js.html#_59-组件是什么-类是什么-类变编译成什么)59 组件是什么？类是什么？类变编译成什么

------

- 组件指的是页面的一部分，本质就是一个类，最本质就是一个构造函数
- 类编译成构造函数

## (https://interview.html5.wiki/section/8-React.js.html#_60-如何避免重复发起ajax获取数据)60 如何避免重复发起ajax获取数据？

------

- 数据放在redux里面

## (https://interview.html5.wiki/section/8-React.js.html#_61-react-router4的核心)61 react-router4的核心

------

- 路由变成了组件
- 分散到各个页面，不需要配置 比如`<link> <route></route>`

## (https://interview.html5.wiki/section/8-React.js.html#_62-什么情况下使用异步组件)62 什么情况下使用异步组件

------

- 提高页面加载速度，使用`reloadable`把各个页面分别单独打包，按需加载

### (https://interview.html5.wiki/section/8-React.js.html#和-componentdidmount-有什么差异)和 componentDidMount 有什么差异

> `useEffect` 会捕获 `props` 和 state。所以即便在回调函数里，你拿到的还是初始的 props 和 state。如果想得到“最新”的值，可以使用 ref。

### (https://interview.html5.wiki/section/8-React.js.html#hooks-为什么不能放在条件判断里)hooks 为什么不能放在条件判断里

以 setState 为例，在 react 内部，每个组件(Fiber)的 hooks 都是以链表的形式存在 memoizeState 属性中

![image-20210302195353472](https://interview.html5.wiki/image/20210629/113811.png)

> update 阶段，每次调用 setState，链表就会执行 next 向后移动一步。如果将 setState 写在条件判断中，假设条件判断不成立，没有执行里面的 setState 方法，会导致接下来所有的 setState 的取值出现偏移，从而导致异常发生。

### (https://interview.html5.wiki/section/8-React.js.html#react-父组件如何调用子组件中的方法)React 父组件如何调用子组件中的方法？

1. 如果是在方法组件中调用子组件（>= react@16.8），可以使用 useRef 和 `useImperativeHandle`:

```text
const { forwardRef, useRef, useImperativeHandle } = React;

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child");
    }
  }));
  return <h1>Hi</h1>;
});

const Parent = () => {
  const childRef = useRef();
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  );
}; 
```

1. 如果是在类组件中调用子组件（`>= react@16.4`），可以使用 createRef:

```text
const { Component } = React;

class Parent extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getAlert();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

class Child extends Component {
  getAlert() {
    alert('getAlert from Child');
  }

  render() {
    return <h1>Hello</h1>;
  }
} 
```

## (https://interview.html5.wiki/section/8-React.js.html#_63-react有哪些优化性能的手段)63 React有哪些优化性能的手段

------

**类组件中的优化手段**

- 使用纯组件 `PureComponent` 作为基类。
- 使用 `React.memo` 高阶函数包装组件。
- 使用 `shouldComponentUpdate` 生命周期函数来自定义渲染逻辑。

**方法组件中的优化手段**

- 使用 `useMemo`。
- 使用 `useCallBack`。

**其他方式**

- 在列表需要频繁变动时，使用唯一 id 作为 key，而不是数组下标。
- 必要时通过改变 CSS 样式隐藏显示组件，而不是通过条件判断显示隐藏组件。
- 使用 `Suspense` 和 lazy 进行懒加载，例如：

```text
import React, { lazy, Suspense } from "react";

export default class CallingLazyComponents extends React.Component {
  render() {
    var ComponentToLazyLoad = null;

    if (this.props.name == "Mayank") {
      ComponentToLazyLoad = lazy(() => import("./mayankComponent"));
    } else if (this.props.name == "Anshul") {
      ComponentToLazyLoad = lazy(() => import("./anshulComponent"));
    }

    return (
      <div>
        <h1>This is the Base User: {this.state.name}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ComponentToLazyLoad />
        </Suspense>
      </div>
    )
  }
} 
```

## (https://interview.html5.wiki/section/8-React.js.html#_64-为什么-react-元素有一个-typeof-属性)64 为什么 React 元素有一个 $$typeof 属性

------

![image-20210302200213923](https://interview.html5.wiki/image/20210629/113818.png)

> 目的是为了防止 XSS 攻击。因为 Synbol 无法被序列化，所以 React 可以通过有没有 $$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。

- 如果没有 $$typeof 这个属性，react 会拒绝处理该元素。
- 在 React 的古老版本中，下面的写法会出现 XSS 攻击：

```text
// 服务端允许用户存储 JSON
let expectedTextButGotJSON = {
  type: 'div',
  props: {
    dangerouslySetInnerHTML: {
      __html: '/* 把你想的搁着 */'
    },
  },
  // ...
};
let message = { text: expectedTextButGotJSON };

// React 0.13 中有风险
<p>
  {message.text}
</p> 
```

## (https://interview.html5.wiki/section/8-React.js.html#_65-react-如何区分-class组件-和-function组件)65 React 如何区分 Class组件 和 Function组件

------

一般的方式是借助 typeof 和 Function.prototype.toString 来判断当前是不是 class，如下：

```text
function isClass(func) {
  return typeof func === 'function'
    && /^class\s/.test(Function.prototype.toString.call(func));
} 
```

但是这个方式有它的局限性，因为如果用了 babel 等转换工具，将 class 写法全部转为 function 写法，上面的判断就会失效。

> React 区分 Class组件 和 Function组件的方式很巧妙，由于所有的类组件都要继承 React.Component，所以只要判断原型链上是否有 React.Component 就可以了：

```text
AComponent.prototype instanceof React.Component 
```

## (https://interview.html5.wiki/section/8-React.js.html#_66-为什么-jsx-中的组件名要以大写字母开头)66 为什么 JSX 中的组件名要以大写字母开头

------

因为 React 要知道当前渲染的是组件还是 HTML 元素

## (https://interview.html5.wiki/section/8-React.js.html#_67-react-redux-的实现原理)67 react-redux 的实现原理？

------

> 通过 redux 和 react context 配合使用，并借助高阶函数，实现了 react-redux

## (https://interview.html5.wiki/section/8-React.js.html#_68-diff算法是怎么运作)68 diff算法是怎么运作

------

每一种节点类型有自己的属性，也就是prop，每次进行diff的时候，react会先比较该节点类型，假如节点类型不一样，那么react会直接删除该节点，然后直接创建新的节点插入到其中，假如节点类型一样，那么会比较prop是否有更新，假如有prop不一样，那么react会判定该节点有更新，那么重渲染该节点，然后在对其子节点进行比较，一层一层往下，直到没有子节点

## (https://interview.html5.wiki/section/8-React.js.html#_69-react中这两个生命周期会触发死循环)69 react中这两个生命周期会触发死循环

------

> `componentWillUpdate`生命周期在`shouldComponentUpdate`返回true后被触发。在这两个生命周期只要视图更新就会触发，因此不能再这两个生命周期中使用setState。否则会导致死循环

## (https://interview.html5.wiki/section/8-React.js.html#_70-dva工作原理)70 Dva工作原理

------

> 集成`redux+redux-saga`

**工作原理**

> 改变发生通常是通过用户交互行为或者浏览器行为（如路由跳转等）触发的，当此类行为会改变数据的时候可以通过 `dispatch` 发起一个 `action`，如果是同步行为会直接通过 `Reducers` 改变 `State` ，如果是异步行为（副作用）会先触发 `Effects` 然后流向 `Reducers` 最终改变 `State`

## (https://interview.html5.wiki/section/8-React.js.html#_71-redux内部原理-内部怎么实现dispstch一个函数的)71 Redux内部原理 内部怎么实现dispstch一个函数的

------

> 以`redux-thunk`中间件作为例子，下面就是`thunkMiddleware`函数的代码

```text
// 部分转为ES5代码，运行middleware函数会返回一个新的函数，如下：
return ({ dispatch, getState }) => {
    // next实际就是传入的dispatch
    return function (next) {
        return function (action) {
            // redux-thunk核心
            if (typeof action === 'function') { 
                return action(dispatch, getState, extraArgument);
            }
            return next(action);
        };
    };
} 
```

> `redux-thunk`库内部源码非常的简单，允许`action`是一个函数，同时支持参数传递，否则调用方法不变

- `redux`创建`Store`：通过`combineReducers`函数合并`reducer`函数，返回一个新的函数`combination`（这个函数负责循环遍历运行`reducer`函数，返回全部`state`）。将这个新函数作为参数传入`createStore`函数，函数内部通过dispatch，初始化运行传入的`combination`，state生成，返回store对象
- `redux`中间件：`applyMiddleware`函数中间件的主要目的就是修改`dispatch`函数，返回经过中间件处理的新的`dispatch`函数
- `redux`使用：实际就是再次调用循环遍历调用`reducer`函数，更新`state`

## (https://interview.html5.wiki/section/8-React.js.html#_72-调和阶段-setstate内部干了什么)72 调和阶段 setState内部干了什么

------

- 当调用 setState 时，React会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态
- 这将启动一个称为和解（`reconciliation`）的过程。和解（`reconciliation`）的最终目标是以最有效的方式，根据这个新的状态来更新`UI`。 为此，`React`将构建一个新的 `React` 元素树（您可以将其视为 `UI` 的对象表示）
- 一旦有了这个树，为了弄清 UI 如何响应新的状态而改变，React 会将这个新树与上一个元素树相比较（ diff ）

> 通过这样做， React 将会知道发生的确切变化，并且通过了解发生什么变化，只需在绝对必要的情况下进行更新即可最小化 UI 的占用空间

## (https://interview.html5.wiki/section/8-React.js.html#_73-createelement过程)73 createElement过程

------

> React.createElement()： 根据指定的第一个参数创建一个React元素

```text
React.createElement(
  type,
  [props],
  [...children]
) 
```

- 第一个参数是必填，传入的是似HTML标签名称，eg: ul, li
- 第二个参数是选填，表示的是属性，eg: className
- 第三个参数是选填, 子节点，eg: 要显示的文本内容

```text
//写法一：

var child1 = React.createElement('li', null, 'one');
    var child2 = React.createElement('li', null, 'two');
    var content = React.createElement('ul', { className: 'teststyle' }, child1, child2); // 第三个参数可以分开也可以写成一个数组
      ReactDOM.render(
          content,
        document.getElementById('example')
      );

//写法二：

var child1 = React.createElement('li', null, 'one');
    var child2 = React.createElement('li', null, 'two');
    var content = React.createElement('ul', { className: 'teststyle' }, [child1, child2]);
      ReactDOM.render(
          content,
        document.getElementById('example')
      ); 
```

## (https://interview.html5.wiki/section/8-React.js.html#_74-为什么有些react生命周期钩子被标记为unsafe)74 为什么有些react生命周期钩子被标记为UNSAFE

------

### (https://interview.html5.wiki/section/8-React.js.html#componentwillmount)componentWillMount

> componentWillMount生命周期发生在首次渲染前，一般使用的小伙伴大多在这里初始化数据或异步获取外部数据赋值。初始化数据，react官方建议放在constructor里面。而异步获取外部数据，渲染并不会等待数据返回后再去渲染

```text
class Example extends React.Component {   
    state = {
        value: ''
    };
    componentWillMount() {    
        this.setState({       
            value: this.props.source.value
        });       
        this.props.source.subscribe(this.handleChange);
    }   
    componentWillUnmount() {    
        this.props.source.unsubscribe(this.handleChange ); 
    }   
    handleChange = source => {    
        this.setState({
            value: source.value
        });   
    }; 
} 
```

- 试想一下，假如组件在第一次渲染的时候被中断，由于组件没有完成渲染，所以并不会执行componentWillUnmount生命周期（注：很多人经常认为componentWillMount和componentWillUnmount总是配对，但这并不是一定的。只有调用componentDidMount后，React才能保证稍后调用componentWillUnmount进行清理）。因此handleSubscriptionChange还是会在数据返回成功后被执行，这时候setState由于组件已经被移除，就会导致内存泄漏。所以建议把异步获取外部数据写在componentDidMount生命周期里，这样就能保证componentWillUnmount生命周期会在组件移除的时候被执行，避免内存泄漏的风险。
- 现在，小伙伴清楚为什么了要用`UNSAFE_componentWillMount`替换`componentWillMount`了吧

### (https://interview.html5.wiki/section/8-React.js.html#componentwillreceiveprops)componentWillReceiveProps

> componentWillReceiveProps生命周期是在props更新时触发。一般用于props参数更新时同步更新state参数。但如果在componentWillReceiveProps生命周期直接调用父组件的某些有调用setState的函数，会导致程序死循环

```text
// 如下是子组件componentWillReceiveProps里调用父组件改变state的函数示例

class Parent extends React.Component{
    constructor(){
        super();
        this.state={
            list: [],
            selectedData: {}
        };
    }
    
    changeSelectData = selectedData => {
        this.setState({
            selectedData
        });
    }
    
    render(){
        return (
            <Clild list={this.state.list} changeSelectData={this.changeSelectData}/>
        );
    }
}
 
...
class Child extends React.Component{
    constructor(){
        super();
        this.state={
            list: []
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            list: nextProps.list
        })
        nextProps.changeSelectData(nextProps.list[0]); //默认选择第一个
    }
    ...
} 
```

- 如上代码，在Child组件的componentWillReceiveProps里直接调用Parent组件的changeSelectData去更新Parent组件state的selectedData值。会触发Parent组件重新渲染，而Parent组件重新渲染会触发Child组件的componentWillReceiveProps生命周期函数执行。如此就会陷入死循环。导致程序崩溃。
- 所以，React官方把componentWillReceiveProps替换为UNSAFE_componentWillReceiveProps，让小伙伴在使用这个生命周期的时候注意它会有缺陷，要注意避免，比如上面例子，Child在componentWillReceiveProps调用changeSelectData时先判断list是否有更新再确定是否要调用，就可以避免死循环。

### (https://interview.html5.wiki/section/8-React.js.html#componentwillupdate)componentWillUpdate

componentWillUpdate生命周期在视图更新前触发。一般用于视图更新前保存一些数据方便视图更新完成后赋值。 案例三：如下是列表加载更新后回到当前滚动条位置的案例

```text
 class ScrollingList extends React.Component {   
    listRef = null;   
    previousScrollOffset = null;   
    componentWillUpdate(nextProps, nextState) {    
        if (this.props.list.length < nextProps.list.length) {      
            this.previousScrollOffset = this.listRef.scrollHeight - this.listRef.scrollTop;    
        } 
    }   
    componentDidUpdate(prevProps, prevState) {    
        if (this.previousScrollOffset !== null) {      
            this.listRef.scrollTop = this.listRef.scrollHeight - this.previousScrollOffset;  
            this.previousScrollOffset = null;    
        }   
    }   
    render() {    
        return (       
            `<div>` {/* ...contents... */}`</div>`     
        );   
    }   
    setListRef = ref => {    this.listRef = ref;   }; 
```

- 由于componentWillUpdate和componentDidUpdate这两个生命周期函数有一定的时间差（componentWillUpdate后经过渲染、计算、再更新DOM元素，最后才调用componentDidUpdate），如果这个时间段内用户刚好拉伸了浏览器高度，那componentWillUpdate计算的previousScrollOffset就不准确了。如果在componentWillUpdate进行setState操作，会出现多次调用只更新一次的问题，把setState放在componentDidUpdate，能保证每次更新只调用一次。
- 所以，react官方建议把componentWillUpdate替换为UNSAFE_componentWillUpdate。如果真的有以上案例的需求，可以使用16.3新加入的一个周期函数getSnapshotBeforeUpdat

### (https://interview.html5.wiki/section/8-React.js.html#结论)结论

- React意识到componentWillMount、componentWillReceiveProps和componentWillUpdate这三个生命周期函数有缺陷，比较容易导致崩溃。但是由于旧的项目已经在用以及有些老开发者习惯用这些生命周期函数，于是通过给它加UNSAFE_来提醒用它的人要注意它们的缺陷
- React加入了两个新的生命周期函数getSnapshotBeforeUpdate和getDerivedStateFromProps，目的为了即使不使用这三个生命周期函数，也能实现只有这三个生命周期能实现的功能