# ImperativeHandle Hook

`useImperativeHandle()`： 可以在使用 ref 时自定义暴露给父组件的实例值。

就是说：当使用父组件把ref传递给子组件的时候，这个Hook允许在子组件中把自定义实例附加到父组件传过来的ref上，有利于父组件控制子组件。