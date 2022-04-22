import { Navigate } from "react-router-dom";
// 实现router redirect 重定向功能
const transformRoutes = (routerList) => {
  const list = [];
  routerList.forEach((route) => {
    const obj = { ...route };
    if (obj.path === undefined) {
      return;
    }
    if (obj.redirect) {
      obj.element = <Navigate to={obj.redirect} replace={true} />;
    }
    delete obj.redirect;
    if (obj.children) {
      obj.children = transformRoutes(obj.children);
    }
    list.push(obj);
  });
  return list;
};
export default transformRoutes;
