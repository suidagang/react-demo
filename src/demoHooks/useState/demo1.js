import { useState } from "react";
const StateDemo1 = () => {
  const [count, setCount] = useState(9);
  const [count1, setCount1] = useState(1);
  const addCount = () => {
    let newCount = count;
    setCount((newCount += 1));
  };
  //   ! 箭头函数方式，prevCount 每次都是最新的值
  const addCount1 = () => {
    setTimeout(() => {
      // let newCount1 = count1;
      //   setCount1((newCount1 += 1));
      setCount1((prevCount) => {
        return prevCount + 1;
      });
    }, 3000);
  };
  return (
    <>
      <p>同步更新：{count}</p>
      <button onClick={() => addCount()}>+++</button>
      <p>异步更新：{count1}</p>
      <button onClick={() => addCount1()}>+++</button>
    </>
  );
};
export default StateDemo1;
