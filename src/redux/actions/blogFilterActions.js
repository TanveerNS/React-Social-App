import { BLOG_FILTER } from "../actionTypes";

const resetBlogFilter = () => {
  type: BLOG_FILTER.RESET_FILTERS;
};

export const setCurrentCategory = (category) => {
  return {
    type: BLOG_FILTER.SET_CATEGORY,
    category: category,
  };
};

export const setCurrentTag = (tag) => {
  return {
    type: BLOG_FILTER.SET_TAG,
    tag: tag,
  };
};
