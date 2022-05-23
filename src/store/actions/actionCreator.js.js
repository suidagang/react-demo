import { INCREMENT, DECREMENT } from "../actionTypes";

//同步action
export const addCount = (num) => ({ type: INCREMENT, data: num });
export const cutCount = (num) => ({ type: DECREMENT, data: num });

//异步action
export const cutCountAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(cutCount());
    }, time);
  };
};
