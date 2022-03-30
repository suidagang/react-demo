//!类似于componentDidMount的useEffect
import { useEffect } from "react";

const TestComponentDidMount = () => {
  useEffect(() => {
    console.log("类似于componentDidMount，通常在此处调用api获取数据");
  }, []);
};
export default TestComponentDidMount;
