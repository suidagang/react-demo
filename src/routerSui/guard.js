import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
let temp = null;
// 获取数据类型
function getDataType(data) {
  return Object.prototype.toString.call(data).match(/\s(\w+)\]/)[1];
}

function Guard(element, meta, onRouteBefore) {
  meta = meta || {};
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  if (onRouteBefore) {
    if ((temp = element)) {
      return element;
    }
    const pathRes = onRouteBefore({ pathname, meta });
    if (getDataType(pathRes) === "Promise") {
      pathRes.then((res) => {
        if (res && res !== pathname) {
          navigate(res, { replace: true });
        }
      });
    } else {
      if (pathRes && pathRes !== pathname) {
        element = <Navigate to={pathRes} replace={true} />;
      }
    }
  }
  temp = element;
  return element;
}
export default Guard;
