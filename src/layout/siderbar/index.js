import { BrowserRouter, Link } from "react-router-dom";
import style from "./index.module.less";
import React, { useState } from "react";
const arr = [
  { name: "测试一", path: "/Home" },
  { name: "测试二", path: "/Detail" },
];
function Siderbar() {
  const [activeNum, setActiveNum] = useState(0);
  const choiceItem = (index) => {
    setActiveNum(index);
  };
  return (
    <div>
      <div className={style.sys_logo}>大屏项目</div>
      <BrowserRouter>
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
              {/* {item.name} */}
              <Link to={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </BrowserRouter>
    </div>
  );
}
export default Siderbar;
