import axiosService from "../common/axiosService";
import { API_URL } from "../common/defines";
import { renderParam } from "../common/utils";

const url = "/product";

const renderUrl = (url, limit, category) => {
  return (
    url + "?" + renderParam("_limit", limit) + renderParam("category", category)
  );
};

//Fetch list of products
export const fetchProductsData = (query) => {
  let endpoint =
    renderUrl(API_URL + url, query.limit, query.category) +
    renderParam("_page", query.page) +
    renderParam("_sort", query.sort.sort) +
    renderParam("_order", query.sort.order) +
    renderParam("q", query.q) +
    renderParam("specifications.color", query.color) +
    renderParam("specifications.size", query.size) +
    renderParam("tag_like", query.tag);
  return axiosService.get(endpoint);
};

export const fetchSaleProductsData = (query) => {
  let endpoint = renderUrl(API_URL + url, query.limit, query.category);
  return axiosService.get(endpoint);
};

export const fetchFeaturedProductsData = (query) => {
  let endpoint = renderUrl(API_URL + url, query.limit, query.category);
  return axiosService.get(endpoint);
};

export const fetchBestSellerProductsData = (query) => {
  let endpoint = renderUrl(API_URL + url, query.limit, query.category);
  return axiosService.get(endpoint);
};

export const fetchDaleProductsData = (query) => {
  let endpoint = renderUrl(API_URL + url, query.limit, query.category);
  return axiosService.get(endpoint);
};

//Fetch product detail
export const fetchProductDetailData = (slug) => {
  let endpoint = API_URL + url + "?" + renderParam("slug", slug);
  return axiosService.get(endpoint);
};

//Fetch serched product by query
export const fetchSearchedProductData = (query) => {
  let endpoint =
    API_URL +
    url +
    "?" +
    renderParam("q", query.input) +
    renderParam("category", query.category) +
    renderParam("_limit", query.limit);
  return axiosService.get(endpoint);
};
