import LayoutContainer from "@/layout/index";
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/",
    element: <LayoutContainer />,
    children: [],
  },
];
