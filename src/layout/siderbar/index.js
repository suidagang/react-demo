import "./index.less";
import React, { useState } from "react";
const arr = ["测试一", "测试二"];
function Siderbar() {
  const [activeNum, setActiveNum] = useState(0);
  const choiceItem = (index) => {
    setActiveNum(index);
  };
  return (
    <div>
      <div className="sys-logo">大屏项目</div>
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeNum === index
                ? "siderbar-item item-active"
                : "siderbar-item"
            }
            onClick={() => choiceItem(index)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
export default Siderbar;
