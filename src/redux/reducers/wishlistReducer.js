import { WISHLIST } from "../actionTypes";

const initialState = { loading: true, data: [], error: false };

export default function WISHLISTReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST.FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false,
      };
    case WISHLIST.FETCH_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case WISHLIST.FETCH_WISHLIST_FAIL:
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
