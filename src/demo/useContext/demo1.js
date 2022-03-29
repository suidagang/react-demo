import React, { useContext } from "react";
const HookTest = () => {
  const AppContext = React.createContext();
  const A = () => {
    const { name } = useContext(AppContext);
    return (
      <p>
        我是A组件,我的名字是：{name}；<span>我是A的子标签：{name}</span>
      </p>
    );
  };
  const B = () => {
    const { name } = useContext(AppContext);
    return <p>我是B组件,名字是： {name}</p>;
  };
  return (
    <AppContext.Provider value={{ name: "张三" }}>
      <A />
      <B />
    </AppContext.Provider>
  );
};
export default HookTest;
