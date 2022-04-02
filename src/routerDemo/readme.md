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

## 5. 通过配置实现路由管理

> `useRoutes` 可以将数组对象形式的路由，直接在页面上使用。

## 6. 获取路由的参数

1. `useParams` 获取动态路由的值；
2. `useSearchParams` 获取查询字符串的值。


## 7. 默认路由

> 当页面有多个子路由，比如在 `/goods` 时，页面展示 `商品列表`； `/goods/:id`时，展示某个商品的详情。
1. `Route` 的 `index` 属性就是用来展示默认子路由的。

```javascript
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}>
        <Route path='goods' element={<Goods />} >
        {/* 默认 子路由 ，在页面 路由为 /goods ，会展示该子路由 */}
        <Route index element={<GoodsList />}/>

        <Route path=":id" element={<GoodsDetail />}/>
        </Route>

        <Route path='customer' element={<Customer />} ></Route>
        <Route path="*" element={<NotFound />} /> 
    </Route>

    </Routes>
</BrowserRouter>
```