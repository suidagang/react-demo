# LayoutEffect Hook

`useLayoutEffect()` ：和useEffect相同，都是用来执行副作用，但是它会在所有的DOM变更之后同步调用effect。useLayoutEffect和useEffect最大的区别就是一个是同步，一个是异步

从这个Hook的名字上也可以看出，它主要用来读取DOM布局并触发同步渲染，在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

官网建议还是尽可能的是使用标准的useEffec以避免阻塞视觉更新。