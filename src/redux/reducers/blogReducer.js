import { BLOG } from "../actionTypes";

const initialState = {
  allPosts: { loading: true, data: [], error: false, count: 0 },
  recentPosts: { loading: true, data: [], error: false },
  postDetail: { loading: true, data: [], error: false },
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    //All posts
    case BLOG.FETCH_POSTS:
      return {
        ...state,
        allPosts: {
          loading: true,
          data: [],
          error: false,
        },
      };
    case BLOG.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount,
        },
      };
    case BLOG.FETCH_POSTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          loading: false,
          error: true,
        },
      };
    //Recent posts
    case BLOG.FETCH_RECENT_POSTS:
      return {
        ...state,
        recentPosts: {
          loading: true,
          data: [],
          error: false,
        },
      };
    case BLOG.FETCH_RECENT_POSTS_SUCCESS:
      return {
        ...state,
        recentPosts: {
          ...state.recentPosts,
          loading: false,
          data: action.payload.data,
          count: action.payload.postCount,
        },
      };
    case BLOG.FETCH_RECENT_POSTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        recentPosts: {
          ...state.recentPosts,
          loading: false,
          error: true,
        },
      };
    //Post detail
    case BLOG.FETCH_POST_DETAIL:
      return {
        ...state,
        postDetail: { loading: true, data: [], error: false },
      };
    case BLOG.FETCH_POST_DETAIL_SUCCESS:
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          loading: false,
          data: action.payload.data,
        },
      };
    case BLOG.FETCH_POST_DETAIL_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
}
