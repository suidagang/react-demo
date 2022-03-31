# State Hook

useState()：状态钩子。纯函数组件没有状态，用于为函数组件引入state状态, 并进行状态数据的读写操作

**语法、参数及返回值说明:：**

```javascript
const [xxx, setXxx] = React.useState(initValue) 
```
1.**参数**:第一次初始化指定的值在内部作缓存
2.**返回值**: 包含2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数

**setXxx()2种写法**
**`setXxx(newValue)`**: 参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
**`setXxx(value => newValue)`**: 参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

## **使用场景**

* **惰性初始化 state**
* initialState 参数只会在组件的初始化渲染中起作用，后续渲染时会被忽略
* 如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用

```javascript
function Counter5(props){
    console.log('Counter5 render');
    //! 这个函数只在初始渲染时执行一次，后续更新状态重新渲染组件时，该函数就不会再被调用
    function getInitState(){
        return {number:props.number};
    }
    let [counter,setCounter] = useState(getInitState);
    return (
        <>
           <p>{counter.number}</p>
           <button onClick={()=>setCounter({number:counter.number+1})}>+</button>
           <button onClick={()=>setCounter(counter)}>setCounter</button>
        </>
    )
}
```

## **与class组件中的setState比较**

* Hook 内部使用 Object.is 来比较新/旧 state 是否相等
* 与 class 组件中的 setState 方法不同，如果你修改状态的时候，传的状态值没有变化，则不重新渲染
* 与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果

```javascript
function Counter(){
    const [counter,setCounter] = useState({name:'计数器',number:0});
    console.log('render Counter')
    // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
    return (
        <>
            <p>{counter.name}:{counter.number}</p>
            <button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</button>
            <button onClick={()=>setCounter(counter)}>++</button>
        </>
    )
}
```
