import { useRoutes } from "react-router";
import Fn from "./fn";
/**
 * 描述
 * @date 2022-04-24
 * @returns {any}
 */
function RouterSui(routes, onRouteBefore, loading) {
  const fn = new Fn({
    routes,
    onRouteBefore,
    loading,
  });
  const reactRoutes = fn.transformRoutes();
  const elements = useRoutes(reactRoutes);
  return elements;
}

export default RouterSui;
