# React-router-dom v6.x的使用

[参考地址](https://blog.csdn.net/muou_hang/article/details/121419002)
[官网文档](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md)

## 1. 原先的<Switch>替换成了<Routes>

## 2. Route中的component替换成了element

## 3. 新增<Outlet />组件以及嵌套路由新写法=====》参考：nestedRouter.js

## 4. 路由跳转 useNavigate()

    在v6版本中，已经将useHistory()取消，在跳转时可以使用 useNavigate()进行跳转。当replace为true时，执行的是重定向操作。

```javascript
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('url', {replace: true});
```