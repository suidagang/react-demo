import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Spin } from "antd";
import LayoutContainer from "@/layout/index";
import transformRoutes from "./fn";
const Login = lazy(() => import("@/views/login/Login"));
const Home = lazy(() => import("@/views/home/Home"));
const Detail = lazy(() => import("@/views/detail/Detail"));
const NotFound = lazy(() => import("@/views/notFound/NotFound"));
const SubHome = lazy(() => import("@/views/home/subHome/index"));
const Test = lazy(() => import("@/views/test/index"));
const Test1 = lazy(() => import("@/views/test/test1"));
const Test2 = lazy(() => import("@/views/test/test2"));
const Test3 = lazy(() => import("@/views/test/test3"));
const Test4 = lazy(() => import("@/views/test/test4"));

const lazyLoad = (children) => {
  return <Suspense fallback={<Spin />}>{children}</Suspense>;
};
const routes = [
  {
    path: "*",
    element: lazyLoad(<NotFound />),
  },
  { path: "/", redirect: "/home" },
  {
    path: "/",

    element: <LayoutContainer />,
    children: [
      {
        path: "/home",
        name: "主页",
        element: lazyLoad(<Home />),
        children: [
          {
            path: "/home/subHome",
            name: "主页子页",
            element: lazyLoad(<SubHome />),
          },
        ],
      },
      {
        path: "/detail",
        name: "详情页",
        element: lazyLoad(<Detail />),
      },

      {
        path: "/test",
        name: "测试",
        element: lazyLoad(<Test />),
        children: [
          {
            path: "/test/test1",
            name: "测试1",
            element: lazyLoad(<Test1 />),
            children: [
              {
                path: "/test/test1/test3",
                name: "测试3",
                element: lazyLoad(<Test3 />),
              },
              {
                path: "/test/test1/test4",
                name: "测试4",
                element: lazyLoad(<Test4 />),
              },
            ],
          },
          {
            path: "/test/test2",
            name: "测试2",
            element: lazyLoad(<Test2 />),
          },
        ],
      },
    ],
  },
  { path: "/login", name: "登录", element: lazyLoad(<Login />) },
];
//根据路径获取路由
const checkAuth = (routers, path) => {
  for (const data of routers) {
    if ((data.path = path)) {
      return data;
    }
    if (data.children) {
      const res = checkAuth(data.children, path);
      if (res) {
        return res;
      }
    }
  }
};
const checkRouterAuth = (path) => {
  let auth = null;
  auth = checkAuth(routes, path);
  return auth;
};
const Router = () => useRoutes(transformRoutes(routes));
export default routes;
export { Router, checkRouterAuth };
