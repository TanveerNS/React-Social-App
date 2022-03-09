import { CART } from "../actionTypes";

import * as cartApis from "../../apis/cart";

//Get cart data
export const fetchCart = () => ({
  type: CART.FETCH_CART,
});

export const fetchCartSuccess = (data) => ({
  type: CART.FETCH_CART_SUCCESS,
  payload: {
    data,
  },
});

export const fetchCartFail = (err) => ({
  type: CART.FETCH_CART_FAIL,
  payload: {
    err,
  },
});

export const fetchCartRequest = () => {
  return (dispatch) => {
    dispatch(fetchCart());
    cartApis
      .fetchCartData()
      .then((res) => {
        dispatch(fetchCartSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCartFail(err));
      });
  };
};
