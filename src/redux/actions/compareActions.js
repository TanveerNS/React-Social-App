import { COMPARE } from "../actionTypes";

export const addToCompare = (data) => ({
  type: COMPARE.ADD_TO_COMPARE,
  payload: {
    data,
  },
});

export const removeFromCompare = (productId) => ({
  type: COMPARE.REMOVE_FROM_COMPARE,
  payload: {
    productId,
  },
});
