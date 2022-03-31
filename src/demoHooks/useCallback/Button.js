import React from "react";

const Button = ({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  );
};

export default React.memo(Button);

//! 这里或许会注意到 Button 组件的 React.memo 这个方法，此方法内会对 props 做一个浅层比较，如果如果 props 没有发生改变，则不会重新渲染此组件。
//TODO 但是传方法如果是一样，props也是不相等的
//const a = () => {};
//const b = () => {};
//a === b; // false
