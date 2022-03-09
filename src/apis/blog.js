import axiosService from "../common/axiosService";
import { API_URL } from "../common/defines";
import { renderParam } from "../common/utils";

const url = "/blog";

const renderUrl = (url, limit, category) => {
  return (
    url + "?" + renderParam("_limit", limit) + renderParam("category", category)
  );
};

export const fetchBlogData = (query) => {
  let endpoint =
    renderUrl(API_URL + url, query.limit, query.category) +
    renderParam("_page", query.page) +
    renderParam("tag_like", query.tag);
  return axiosService.get(endpoint);
};

export const fetchRecentPostData = (query) => {
  let endpoint =
    renderUrl(API_URL + url, query.limit) +
    renderParam("_sort", "publicDate") +
    renderParam("order", "desc");
  return axiosService.get(endpoint);
};

export const fetchPostDetailData = (slug) => {
  let endpoint = API_URL + url + "?" + renderParam("slug", slug);
  return axiosService.get(endpoint);
};
