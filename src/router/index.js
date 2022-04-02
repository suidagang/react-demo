import Home from "@/views/home/Home";
import Detail from "@/views/detail/Detail";
import NotFound from "@/views/notFound/NotFound";
import LayoutContainer from "@/layout/index";
import Login from "@/views/login/Login";
const routes = [
  {
    path: "/",
    element: <LayoutContainer />,
    children: [
      {
        path: "/home",
        name: "主页",
        element: <Home />,
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
    ],
  },
  { path: "/login", element: <Login /> },
];
export default routes;
