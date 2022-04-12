import Home from "@/views/home/Home";
import Detail from "@/views/detail/Detail";
import NotFound from "@/views/notFound/NotFound";
import LayoutContainer from "@/layout/index";
import Login from "@/views/login/Login";
import SubHome from "@/views/home/subHome/index";
import Test from "@/views/test/index";
import Test1 from "@/views/test/test1";
import Test2 from "@/views/test/test2";
import Test3 from "@/views/test/test3";
import Test4 from "@/views/test/test4";
const routes = [
  {
    path: "/",
    element: <LayoutContainer />,
    children: [
      {
        path: "/home",
        name: "主页",
        element: <Home />,
        children: [
          {
            path: "/home/subHome",
            name: "主页子页",
            element: <SubHome />,
          },
        ],
      },
      {
        path: "/detail",
        name: "主页",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/test",
        element: <Test />,
        children: [
          {
            path: "/test/test1",
            element: <Test1 />,
            children: [
              {
                path: "/test/test1/test3",
                element: <Test3 />,
              },
              {
                path: "/test/test1/test4",
                element: <Test4 />,
              },
            ],
          },
          {
            path: "/test/test2",
            element: <Test2 />,
          },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
];
export default routes;
