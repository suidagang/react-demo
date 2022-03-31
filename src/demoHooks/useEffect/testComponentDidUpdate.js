import { useState, useEffect } from "react";

const TestComponentDidUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
    console.log("当count发生改变时，执行当前区域的代码");
  }, [count]);
};

export default TestComponentDidUpdate;
