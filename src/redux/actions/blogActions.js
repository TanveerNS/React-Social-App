import { BLOG } from "../actionTypes";
import * as blogApis from "../../apis/blog";

//Fetch all posts
export const fetchPosts = () => ({
  type: BLOG.FETCH_POSTS,
});

export const fetchPostsSuccess = (data, postCount) => ({
  type: BLOG.FETCH_POSTS_SUCCESS,
  payload: {
    data,
    postCount,
  },
});

export const fetchPostsFail = (err) => ({
  type: BLOG.FETCH_POSTS_FAIL,
  payload: {
    err,
  },
});

export const fetchPostsRequest = (query) => {
  return (dispatch) => {
    dispatch(fetchPosts());
    blogApis
      .fetchBlogData(query)
      .then((res) => {
        dispatch(fetchPostsSuccess(res.data, res.headers["x-total-count"]));
      })
      .catch((err) => {
        dispatch(fetchPostsFail(err));
      });
  };
};

//Fetch recent posts
export const fetchRecentPosts = () => ({
  type: BLOG.FETCH_RECENT_POSTS,
});

export const fetchRecentPostsSuccess = (data, postCount) => ({
  type: BLOG.FETCH_RECENT_POSTS_SUCCESS,
  payload: {
    data,
    postCount,
  },
});

export const fetchRecentPostsFail = (err) => ({
  type: BLOG.FETCH_RECENT_POSTS_FAIL,
  payload: {
    err,
  },
});

export const fetchRecentPostsRequest = (query) => {
  return (dispatch) => {
    dispatch(fetchRecentPosts());
    blogApis
      .fetchRecentPostData(query)
      .then((res) => {
        dispatch(
          fetchRecentPostsSuccess(res.data, res.headers["x-total-count"])
        );
      })
      .catch((err) => {
        dispatch(fetchRecentPostsFail(err));
      });
  };
};

//Fetch post details

export const fetchPostDetail = () => ({
  type: BLOG.FETCH_POST_DETAIL,
});

export const fetchPostDetailSuccess = (data) => ({
  type: BLOG.FETCH_POST_DETAIL_SUCCESS,
  payload: {
    data,
  },
});

export const fetchPostDetailFail = (err) => ({
  type: BLOG.FETCH_POST_DETAIL_FAIL,
  payload: {
    err,
  },
});

export const fetchPostDetailRequest = (slug) => {
  return (dispatch) => {
    dispatch(fetchPostDetail());
    blogApis
      .fetchPostDetailData(slug)
      .then((res) => {
        dispatch(fetchPostDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchPostDetailFail(err));
      });
  };
};
