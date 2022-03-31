import { useParams, useEffect } from "react-router";

const Component = () => {
  const params = useParams();

  const getUserInfo = (id) => {
    // request api
    // some event
  };
  useEffect(() => {
    // parms 的 uid 发生变化就会重新请求用户信息
    getUserInfo(params.uid);
  }, [params.uid]);

  // ...
};

//! useParams 返回 react-router 的参数键值对
