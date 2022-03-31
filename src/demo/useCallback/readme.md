# Callback Hook

**概念**：简单来说就是返回一个函数，只有在依赖项发生变化的时候才会更新（返回一个新的函数）

`useCallback()`： 主要是为了性能的优化

useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

可以认为是对依赖项的监听，接受一个回调函数和依赖项数组。

* useCallback会返回一个函数的memoized(记忆的)值。
* 该回调函数仅在某个依赖项改变时才会执行
* 在依赖不变的情况下，多次定义的时候，返回的值是相同的

(**form表单值监控**)使用 useRef 可以生成一个变量让其在组件每个生命周期内都能访问到，且 handleSubmit 并不会因为 text 的更新而更新，也就不会让 OtherForm 多次渲染====参考**inputVal.js**


是否要把所有的方法都用 useCallback 包一层呢，这个应该也是很多刚了解 useCallback 的朋友的一疑问。先说答案是：不要把所有的方法都包上 useCallback，下面仔细讲?


**作用**：useCallback 是来优化子组件的，防止子组件的重复渲染。