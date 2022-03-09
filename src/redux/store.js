import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";

const createdStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const initializeStore = (initialState = {}) => {
  return createdStore;
};
