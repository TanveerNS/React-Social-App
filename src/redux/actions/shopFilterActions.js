import { SHOP_FILTER } from "../actionTypes";

const resetShopFilter = () => {
  type: SHOP_FILTER.RESET_FILTERS;
};

export const setCurrentSort = (sort) => {
  return {
    type: SHOP_FILTER.SET_SORT,
    sort: sort,
  };
};

export const setCurrentShow = (show) => {
  return {
    type: SHOP_FILTER.SET_SHOW,
    show: show,
  };
};

export const setCurrentView = (view) => {
  return {
    type: SHOP_FILTER.SET_VIEW,
    view: view,
  };
};

export const setCurrentCategory = (category) => {
  return {
    type: SHOP_FILTER.SET_CATEGORY,
    category: category,
  };
};

export const setCurrentColor = (color) => {
  return {
    type: SHOP_FILTER.SET_COLOR,
    color: color,
  };
};

export const setCurrentSize = (size) => {
  return {
    type: SHOP_FILTER.SET_SIZE,
    size: size,
  };
};

export const setCurrentTag = (tag) => {
  return {
    type: SHOP_FILTER.SET_TAG,
    tag: tag,
  };
};
