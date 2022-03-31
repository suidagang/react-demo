import { shallowEqual, useSelector } from "react-redux";

const Component = () => {
  const userInfo = useSelector((state) => state.userInfo, shallowEqual);

  // ...
};

//useSelector 的第二个参数是一个比较函数，useSelector 中默认使用的是 === 来判断两次计算的结果是否相同，如果我们返回的是一个对象，那么在 useSelector 中每次调用都会返回一个新对象，所以所以为了减少一些没必要的 re-render，我们可以使用一些比较函数，如 react-redux 自带的 shallowEqual，或者是 Lodash 的 _.isEqual()、Immutable 的比较功能。
