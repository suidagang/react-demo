import { Link, useRoutes } from "react-router-dom";
import style from "./index.module.less";
import React, { useState } from "react";
// import routes from "@/router/index";
const arr = [
  { name: "测试一", path: "/home" },
  { name: "测试二", path: "/detail" },
];
function Siderbar() {
  const [activeNum, setActiveNum] = useState(0);
  const choiceItem = (index) => {
    setActiveNum(index);
  };
  return (
    <div>
      <div className={style.sys_logo}>大屏项目</div>
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeNum === index
                ? `${style.siderbar_item}  ${style.item_active}`
                : style.siderbar_item
            }
            onClick={() => choiceItem(index)}
          >
            <Link key={index} to={item.path}>
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Siderbar;
