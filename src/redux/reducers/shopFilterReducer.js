import { SHOP_FILTER } from "../actionTypes";

const initialState = {
  sort: {},
  show: "10",
  view: "grid",
  category: "",
  color: "",
  size: "",
  tag: "",
};

export default function shopFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SHOP_FILTER.RESET_FILTERS:
      return {
        sort: {},
        show: "10",
        view: "grid",
        category: "",
        color: "",
        size: "",
        tag: "",
      };
    case SHOP_FILTER.SET_SORT:
      return {
        ...state,
        sort: action.sort,
      };
    case SHOP_FILTER.SET_SHOW:
      return {
        ...state,
        show: action.show,
      };
    case SHOP_FILTER.SET_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case SHOP_FILTER.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case SHOP_FILTER.SET_COLOR:
      return {
        ...state,
        color: action.color,
      };
    case SHOP_FILTER.SET_SIZE:
      return {
        ...state,
        size: action.size,
      };
    case SHOP_FILTER.SET_TAG:
      return {
        ...state,
        tag: action.tag,
      };
    default:
      return state;
  }
}
