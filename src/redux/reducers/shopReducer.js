import { SHOP } from "../actionTypes";

const initialState = {
  products: { loading: true, data: [], error: false, count: 0 },
  saleProducts: { loading: true, data: [], error: false },
  featuredProducts: { loading: true, data: [], error: false },
  bestSellerProducts: { loading: true, data: [], error: false },
  daleProducts: { loading: true, data: [], error: false },
  productDetail: { loading: true, data: [], error: false },
  searchedProducts: { loading: true, data: [], error: false },
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    //All products
    case SHOP.FETCH_PRODUCTS:
      return {
        ...state,
        products: { loading: true, data: [], error: false, count: 0 },
      };
    case SHOP.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount,
        },
      };
    case SHOP.FETCH_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        products: {
          ...state.products,
          loading: false,
          error: true,
        },
      };
    //Sale products
    case SHOP.FETCH_SALE_PRODUCTS:
      return {
        ...state,
        saleProducts: { loading: true, data: [], error: false },
      };
    case SHOP.FETCH_SALE_PRODUCTS_SUCCESS:
      return {
        ...state,
        saleProducts: {
          ...state.saleProducts,
          loading: false,
          data: action.payload.data,
        },
      };
    case SHOP.FETCH_SALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        saleProducts: {
          ...state.saleProducts,
          loading: false,
          error: true,
        },
      };
    //Featured products
    case SHOP.FETCH_FEATURED_PRODUCTS:
      return {
        ...state,
        featuredProducts: { loading: true, data: [], error: false },
      };
    case SHOP.FETCH_FEATURED_PRODUCTS_SUCCESS:
      return {
        ...state,
        featuredProducts: {
          ...state.featuredProducts,
          loading: false,
          data: action.payload.data,
        },
      };
    case SHOP.FETCH_FEATURED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        featuredProducts: {
          ...state.featuredProducts,
          loading: false,
          error: true,
        },
      };
    //Best seller products
    case SHOP.FETCH_BEST_SELLER_PRODUCTS:
      return {
        ...state,
        bestSellerProducts: { loading: true, data: [], error: false },
      };
    case SHOP.FETCH_BEST_SELLER_PRODUCTS_SUCCESS:
      return {
        ...state,
        bestSellerProducts: {
          ...state.bestSellerProducts,
          loading: false,
          data: action.payload.data,
        },
      };
    case SHOP.FETCH_BEST_SELLER_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        bestSellerProducts: {
          ...state.bestSellerProducts,
          loading: false,
          error: true,
        },
      };
    //Dale products
    case SHOP.FETCH_DALE_PRODUCTS:
      return {
        ...state,
        daleProducts: { loading: true, data: [], error: false },
      };
    case SHOP.FETCH_DALE_PRODUCTS_SUCCESS:
      return {
        ...state,
        daleProducts: {
          ...state.daleProducts,
          loading: false,
          data: action.payload.data,
        },
      };
    case SHOP.FETCH_DALE_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        daleProducts: {
          ...state.daleProducts,
          loading: false,
          error: true,
        },
      };
    //Product detail
    case SHOP.FETCH_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: { loading: true, data: [], error: false },
      };
    case SHOP.FETCH_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          loading: false,
          data: action.payload.data,
        },
      };
    case SHOP.FETCH_PRODUCT_DETAIL_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          loading: false,
          error: true,
        },
      };
    //Searched products
    case SHOP.FETCH_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: { loading: true, data: [], error: false },
      };
    case SHOP.FETCH_SEARCHED_PRODUCTS_SUCCESS:
      return {
        ...state,
        searchedProducts: {
          ...state.searchedProducts,
          loading: false,
          data: action.payload.data,
          count: action.payload.productCount,
        },
      };
    case SHOP.FETCH_SEARCHED_PRODUCTS_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        searchedProducts: {
          ...state.searchedProducts,
          loading: false,
          error: true,
        },
      };
    //Defaul case
    default:
      return state;
  }
}
