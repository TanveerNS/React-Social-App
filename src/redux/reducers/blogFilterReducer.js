import { BLOG_FILTER } from "../actionTypes";

const initialState = {
  category: "",
  tag: "",
};

export default function blogFilterReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_FILTER.RESET_FILTERS:
      return {
        category: "",
        tag: "",
      };
    case BLOG_FILTER.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case BLOG_FILTER.SET_TAG:
      return {
        ...state,
        tag: action.tag,
      };
    default:
      return state;
  }
}
