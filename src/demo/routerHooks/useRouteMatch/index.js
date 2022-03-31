import { useRouteMatch } from "react-router";

const Component = () => {
  const match = useRouteMatch("/login");

  // ...
};

//! useRouteMatch 可以传入一个参数 path，不传参数则返回当前路由的参数信息，
//如果传了参数则用来判断当前路由是否能匹配上传递的 path，适用于判断一些全局性组件在不同路由下差异化的展示。
