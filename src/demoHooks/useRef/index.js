//input上绑定一个ref，使得input在渲染后自动焦点聚焦
import { useRef, useEffect } from "react";
const RefComponent = () => {
  let inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  return <input type="text" ref={inputRef} />;
};
export default RefComponent;
