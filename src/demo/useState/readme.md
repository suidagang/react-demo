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
