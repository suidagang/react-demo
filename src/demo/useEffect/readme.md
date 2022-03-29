# Effect Hook

`useEffect()`：副作用钩子。用来更好的执行副作用操作(用于模拟类组件中的生命周期钩子)，如异步请求等，在类组件中会把请求放在componentDidMount里面，在函数组件中可以使用useEffect()

**语法和说明:**

```javascript
useEffect(() => { 
      // 在此可以执行任何带副作用操作
      return () => { // 在组件卸载前执行
        // 在此做一些收尾工作, 比如清除定时器/取消订阅等
      }
}, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
```

**参数、返回值说明：**

* useEffect()接受两个参数，第一个参数是要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项，只要这个数组发生变化，useEffect()就会执行。
* 当第二项省略不填时。useEffect()会在每次组件渲染时都会执行useEffect，只要更新就会执行。
* 当第二项传 空数组[ ] 时，只会在组件挂载后运行一次。
* useEffect()返回值可以是一个函数，在组件销毁的时候会被调用。清理这些副作用可以进行如取消订阅、清除定时器操作，类似于componentWillUnmount。

**React中的副作用操作:**

* 发ajax请求数据获取
* 设置订阅 / 启动定时器
* 手动更改真实DOM

**useEffect两个注意点**

* React首次渲染和之后的每次渲染都会调用一遍useEffect函数，而之前要用两个生命周期函数分别表示 首次渲染(componentDidMonut) 和更新导致的重新渲染(componentDidUpdate)
* useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数时异步执行的，而componentDidMonut和componentDidUpdate中的代码都是同步执行的。

**`总结`** :可以把 useEffect Hook 看做如下三个函数的组合 ：componentDidMount()、componentDidUpdate()、componentWillUnmount()
