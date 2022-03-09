import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import compareReducer from "./compareReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducer from "./shopReducer";
import shopFilterReducer from "./shopFilterReducer";
import blogFilterReducer from "./blogFilterReducer";
import blogReducer from "./blogReducer";

const rootReducer = combineReducers({
  blogFilterReducer,
  blogReducer,
  shopReducer,
  shopFilterReducer,
  compareReducer,
  cartReducer,
  wishlistReducer,
});

export default rootReducer;
