import { useEffect } from "react";

const TestComponentWillUnmount = () => {
  useEffect(() => {
    return () => {
      console.log("类似于componentWillUnmount，通常用于清除副作用");
    };
  }, []);
};

export default TestComponentWillUnmount;
