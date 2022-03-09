import { CART } from "../actionTypes";

const initialState = { loading: true, data: [], error: false };

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART.FETCH_CART:
      return {
        loading: true,
        data: [],
        error: false,
      };
    case CART.FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case CART.FETCH_CART_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
