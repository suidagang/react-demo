# Reducer Hook

[参考博客地址](https://juejin.cn/post/6844903869437181960)

**`useReducer()：Action钩子`**

**用途**：在使用React的过程中，如遇到状态管理，一般会用到Redux。而React本身是不提供状态管理的。而useReducer() 提供了状态管理。

首先，关于redux我们都知道，其原理是通过用户在页面中发起action，从而通过reducer方法来改变state，从而实现页面和状态的通信。

## **语法格式**

```javascript
const [state, dispatch] = useReducer(reducer, initialState)
```

**参数、返回值说明**

> 它接受 reducer函数 和 状态的初始值 作为参数，返回一个数组，其中第一项为当前的状态值，第二项为发送action的dispatch函数。


**最后我们总结一下这篇文章的一些主要内容：使用reducer的场景**

* 如果你的state是一个数组或者对象
* 如果你的state变化很复杂，经常一个操作需要修改很多state
* 如果你希望构建自动化测试用例来保证程序的稳定性
* 如果你需要在深层子组件里面去修改一些状态（关于这点我们下篇文章会详细介绍）
* 如果你用应用程序比较大，希望UI和业务能够分开维护