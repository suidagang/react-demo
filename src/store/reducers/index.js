import { INCREMENT, DECREMENT } from "../actionTypes";
const initialState = {
  count: 0,
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.count + action.data;
    case DECREMENT:
      return state.count - action.data;
    default:
      return state;
  }
}

export default reducer;
