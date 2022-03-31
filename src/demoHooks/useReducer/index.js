import { useReducer } from "react";
const HookReducer = () => {
  const reducer = (state, action) => {
    if (action.type === "add") {
      return {
        ...state,
        count: state.count + 1,
      };
    }
  };
  const addCount = () => {
    dispatch({
      type: "add",
    });
  };
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <p>{state.count}</p>
      <button onClick={addCount}>useReducer</button>
    </>
  );
};
export default HookReducer;
