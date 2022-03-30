# Ref Hook

`userRefef()`：Ref Hook可以在函数组件中存储、查找组件内的标签或任意其它数据

## **语法和参数说明**

```javascript
const refContainer = useRef()
```

**概念**：useRef返回一个可变的ref对象，useRef接受一个参数绑定在返回的ref对象的current属性上，返回的ref对象在整个生命周期中保持不变。

作用：保存标签对象，功能与React.createRef()一样
