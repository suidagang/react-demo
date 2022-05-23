import { INCREMENT, DECREMENT } from "../actionTypes";
const initialState = {
  count: 11,
};
export function reducer(state = initialState, action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case INCREMENT:
      newState.count = Number(newState.count) + Number(action.data);
      return newState;
    case DECREMENT:
      newState.count = Number(newState.count) - Number(action.data);
      return newState;
    default:
      return state;
  }
}

export default reducer;
