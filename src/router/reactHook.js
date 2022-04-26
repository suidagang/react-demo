import transformRoutes from "./fn";
import { useNavigate, useLocation, useRoutes } from "react-router-dom";
import { useEffect } from "react";
function useReactDeal(routerList, onRouteBefore) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  let reactRoute = transformRoutes(routerList);
  let isCanGoLogin = false;
  if (onRouteBefore) {
    let routerRes = onRouteBefore(pathname);
    if (routerRes) {
      isCanGoLogin = true;
    } else {
      isCanGoLogin = false;
    }
  }
  useEffect(() => {
    if (isCanGoLogin) {
      navigate("/login", { replace: true });
    }
  }, [isCanGoLogin, navigate]); //仅在挂载和卸载的时候执行

  return useRoutes(reactRoute);
}

export default useReactDeal;
