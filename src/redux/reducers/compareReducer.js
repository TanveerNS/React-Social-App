import { COMPARE } from "../actionTypes";

const initialState = [];

export default function compareReducer(state = initialState, action) {
  switch (action.type) {
    case COMPARE.ADD_TO_COMPARE:
      if (!state.includes(action.payload.data)) {
        if (state.legth <= 3) {
          return [action.payload.data, ...state];
        } else {
          return [action.payload.data, ...state.slice(0, 2)];
        }
      }
    case COMPARE.REMOVE_FROM_COMPARE:
      const compareItem = state.find(
        (item) => item.id === action.payload.productId
      );
      const compareItemIndex = compareItem && state.indexOf(compareItem);
      return [
        ...state.slice(0, compareItemIndex),
        ...state.slice(compareItemIndex + 1),
      ];
    default:
      return state;
  }
}
