# Callback Hook

`useCallback()`： 主要是为了性能的优化

useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

可以认为是对依赖项的监听，接受一个回调函数和依赖项数组。

* useCallback会返回一个函数的memoized(记忆的)值。
* 该回调函数仅在某个依赖项改变时才会执行
* 在依赖不变的情况下，多次定义的时候，返回的值是相同的