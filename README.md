# React

## React 脚手架 create-react-app


## React jsx 语法
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展.
- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
- 它是类型安全的，在编译过程中就能发现错误。
- 使用 JSX 编写模板更加简单快速。



## React 状态（state）
- 通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。


## React props
- state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。



## React 事件处理
React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:
- React 事件绑定属性的命名采用驼峰式写法，而不是小写。
- 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)



## React 类组件

### React 组件生命周期
![React组件生命周期](./src/images/imgs/React组件生命周期.png)

**挂载**
当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：
- constructor(): 在 React 组件挂载之前，会调用它的构造函数。
- getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
- render(): render() 方法是 class 组件中唯一必须实现的方法。
- componentDidMount(): 在组件挂载后（插入 DOM 树中）立即调用
  > render() 方法是 class 组件中唯一必须实现的方法，其他方法可以根据自己的需要来实现。

**更新**
  > 每当组件的 state 或 props 发生变化时，组件就会更新。
  > 当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
- getDerivedStateFromProps(): 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。
- shouldComponentUpdate():当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。
- render(): render() 方法是 class 组件中唯一必须实现的方法。
- getSnapshotBeforeUpdate(): 在最近一次渲染输出（提交到 DOM 节点）之前调用。
- componentDidUpdate(): 在更新后会被立即调用。
  > render() 方法是 class 组件中唯一必须实现的方法，其他方法可以根据自己的需要来实现。

**卸载**
  > 当组件从 DOM 中移除时会调用如下方法：
- componentWillUnmount(): 在组件卸载及销毁之前直接调用。



## React 组件 API
- 设置状态：setState
```javascript
setState(object nextState[, function callback])
```

- 替换状态：replaceState
```javascript
 replaceState(object nextState[, function callback])
```

- 设置属性：setProps
```javascript
setProps(object nextProps[, function callback])
```

- 替换属性：replaceProps

```javascript
 replaceProps(object nextProps[, function callback])
```

- 强制更新：forceUpdate
```javascript
forceUpdate([function callback])
```

- 获取 DOM 节点：findDOMNode
```javascript
DOMElement findDOMNode()
```

- 判断组件挂载状态：isMounted
```javascript
bool isMounted()
```


## React 函数组件

### hooks-useState(为函数组件引入状态（state）的状态钩子)
```javascript
const [state, setState] = useState(initialState);
```
> useState 的唯一参数是状态初始值（initial state），它返回了一个数组，这个数组的第 [0] 项是当前当前的状态值，第 [1] 项是可以改变状态值的方法函数。

### hooks-useEffect
```javascript
useEffect(create, deps);
```
> useEffect () 用来引入具有副作用的操作，最常见的就是向服务器请求数据。该 Hook 接收一个函数，该函数会在组件渲染到屏幕之后才执行。
> 和 react 类的生命周期相比，useEffect Hook 可以当做 componentDidMount，componentDidUpdate 和 componentWillUnmount 的组合。默认情况下，react 首次渲染和之后的每次渲染都会调用一遍传给 useEffect 的函数。

### hooks-useMemo
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
> useMemo 看起来和 useEffect 很像，但是如果你想在 useMemo 里面 setCount 或者其他修改了 DOM 的操作，那你可能会遇到一些问题。因为传入 useMemo 的函数会在渲染期间执行，你可能看不到想要的效果，所以请不要在这个函数内部执行与渲染无关的操作。

### hooks-useCallback
```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```
>返回一个 memoized 回调函数。

### hooks-useRef
```javascript
const refContainer = useRef(initialValue);
```
>- 类组件、React 元素用 React.createRef，函数组件使用 useRef
>- useRef 返回一个可变的 ref 对象，其 current 属性被初始化为传入的参数（initialValue
>- useRef 返回的 ref 对象在组件的整个生命周期内保持不变，也就是说每次重新渲染函数组件时，返回的 ref 对象都是同一个（使用 React.createRef ，每次重新渲染组件都会重新创建 ref）

### hooks-useContext
```javascript
// context.js  新建一个context
import { createContext } from 'react';
const AppContext = React.createContext({});
```
>在 hooks 中，组件都是函数，所以我们可以通过参数的方式进行传值，但是有时候我们也会遇到兄弟组件和爷孙组件之间的传值，这时候通过函数参数传值就不太方便了。hooks 提供了 useContext（共享状态钩子）来解决这个问题。

>useContext 接受一个 context 对象（从 React.createContext 返回的值）并返回当前 context 值，由最近 context 提供程序给 context 。

>当组件上层最近的 <Context.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 Context provider 的 context value 值。

>在 hooks 中使用 content，需要使用 createContext，useContext：

### hooks-useReducer
```javascript
const [state, dispatch] = useReducer(reducer, initialState, initialFunc);
```
> useReducer 可以接受三个参数，第一个参数接收一个形如 (state, action) => newState 的 reducer 纯函数，使用时可以通过 dispatch(action) 来修改相关逻辑。

#### react-hooks简单总结
hook | 功能
-------- | -----
useState | 设置和改变 state，代替原来的 state 和 setState
useReducer | 代替原来 redux 里的 reducer，方便管理状态逻辑
useEffect | 引入具有副作用的操作，类比原来的生命周期
useLayoutEffect	| 与 useEffect 作用相同，但它会同步调用 effect
useMemo | 可根据状态变化控制方法执行，优化无用渲染，提高性能
useCallback | 类似 useMemo，useMemo 优化传值，usecallback 优化传入的方法
useContext | 上下文爷孙组件及更深层组件传值
useRef	 | 返回一个可变的 ref 对象



## React Router
### 一级路由和多级路由
### 路由重定向
### 嵌套路由
### 声明式导航和编程式导航
### 动态路由
### 路由拦截
### 路由模式
### withRouter



## React 父子通信



## React 非父子通信



## React 插槽



## React Redux
### state：驱动应用的真实数据源头
### view：基于当前状态的 UI 声明性描述
### actions：根据用户输入在应用程序中发生的事件，并触发状态更新
### redux 和 reducer 合并
### redux 中间件-redux-thunk--用最简单的方式搭建异步 action 构造器
### redux 中间件-redux-promise
### redux 持久化
![react-redux模型图](./src/images/imgs/react-redux模型图.png)
![redux原理图](./src/images/imgs/redux原理图.png)
![redux原理图](./src/images/imgs/redux原理图.png)
![redux原理图](./src/images/imgs/redux的原理和基本使用.png)



## React axios



### 反向代理



## antd UI 框架
