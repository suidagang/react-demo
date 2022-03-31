import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const Compnent = () => {
  const dispatch = useDispatch();
  const clearUserInfo = useCallback(
    () => dispatch({ type: 'clearUserInfo' }),
    [dispatch]
  );
  
  return (
    <button onClick={clearUserInfo}>click</buttn>
  )
}

//使用 dispatch 来调度操作，加上 useCallback 来减少不必要的渲染。