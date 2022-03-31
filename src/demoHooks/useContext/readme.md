# Context Hook

`useContext()`：共享状态钩子。作用就是可以做状态的分发，在React16.X以后支持，避免了react逐层通过Props传递数据。

>Context：一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

**使用语法和说明：**
1、创建Context容器对象

```javascript
const XxxContext = React.createContext()  
```

2、渲染子组件时，外面包裹xxxContext.Provider， 通过value属性给后代组件传递数据：

```javascript
<xxxContext.Provider value={数据}>
 <子组件/>
</xxxContext.Provider>
```

3、后代组件读取数据：

```javascript
const {} = useContext(XxxContext)
```
