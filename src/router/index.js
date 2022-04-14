import { lazy, Suspense } from "react";
import { Spin } from "antd";
import LayoutContainer from "@/layout/index";
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
        name: "主页",
        element: lazyLoad(<Detail />),
      },
      {
        path: "*",
        element: lazyLoad(<NotFound />),
      },
      {
        path: "/test",
        element: lazyLoad(<Test />),
        children: [
          {
            path: "/test/test1",
            element: lazyLoad(<Test1 />),
            children: [
              {
                path: "/test/test1/test3",
                element: lazyLoad(<Test3 />),
              },
              {
                path: "/test/test1/test4",
                element: lazyLoad(<Test4 />),
              },
            ],
          },
          {
            path: "/test/test2",
            element: lazyLoad(<Test2 />),
          },
        ],
      },
    ],
  },
  { path: "/login", element: lazyLoad(<Login />) },
];
export default routes;
