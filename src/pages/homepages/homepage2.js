import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as shopActions from "../../redux/actions/shopActions";
import LayoutTwo from "../../components/layout/LayoutTwo";
import HeroSliderTwo from "../../components/sections/hero-slider/HeroSliderTwo";
import ProductTab from "../../components/sections/product-thumb/ProductTab";
import herosliderTwoData from "../../data/sections/hero-slider.json";
import categories from "../../data/categories.json";
import Benefits from "../../components/other/Benefits";
import ProductGrid from "../../components/sections/product-thumb/ProductGrid";
import DowTwo from "../../components/sections/dale-of-week/DowTwo";
import Container from "../../components/other/Container";
import BannerOne from "../../components/sections/banner/BannerOne";
import bannerData from "../../data/sections/banner.json";

export default function homepage2() {
  const dispatch = useDispatch();
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    featuredProducts: "",
    saleProducts: "",
    bestSellerProducts: "",
  });
  const shopState = useSelector((state) => state.shopReducer);
  const {
    products,
    saleProducts,
    featuredProducts,
    bestSellerProducts,
  } = shopState;
  const {
    fetchSaleProductsRequest,
    fetchFeaturedProductsRequest,
    fetchBestSellerProductsRequest,
    fetchProductsRequest,
  } = shopActions;
  useEffect(() => {
    dispatch(fetchProductsRequest({ limit: 10, sort: {} }));
    dispatch(fetchFeaturedProductsRequest({ limit: 12 }));
    dispatch(fetchSaleProductsRequest({ limit: 6 }));
    dispatch(fetchBestSellerProductsRequest({ limit: 6 }));
  }, []);
  useEffect(() => {
    dispatch(
      fetchFeaturedProductsRequest({
        limit: 12,
        category: currentProductTabsCategory.featuredProducts,
      })
    );
  }, [currentProductTabsCategory.featuredProducts]);
  useEffect(() => {
    dispatch(
      fetchSaleProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.saleProducts,
      })
    );
  }, [currentProductTabsCategory.saleProducts]);
  useEffect(() => {
    dispatch(
      fetchBestSellerProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.bestSellerProducts,
      })
    );
  }, [currentProductTabsCategory.bestSellerProducts]);

  return (
    <LayoutTwo title="Homepage 2">
      <HeroSliderTwo containerFluid data={herosliderTwoData.one[0]} />
      <Container fluid>
        <ProductTab
          data={featuredProducts}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              featuredProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerTitle="Featured Product"
          productClassName="-borderless"
          productCol={{ xs: 12, sm: 8, lg: 6, xl: 4 }}
        />
      </Container>
      <Container fluid>
        <Benefits className="-bordered" containerFluid />
      </Container>
      <DowTwo countdownLast={100000000} />
      <Container fluid>
        <ProductTab
          data={bestSellerProducts}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              bestSellerProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerType="row"
          headerTitle="Best seller"
          productClassName="-borderless"
          productCol={{ xs: 12, sm: 8, lg: 6, xl: 4 }}
        />
        <ProductTab
          data={saleProducts}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              saleProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerType="row"
          headerTitle="Featured Products"
          productClassName="-borderless"
          productCol={{ xs: 12, sm: 8, lg: 6, xl: 4 }}
        />

        <ProductGrid
          data={products}
          headerTitle="New Products"
          productCol={{ xs: 24, sm: 12, md: 8, lg: 6 }}
          productType="tiny"
          fiveCol
        />
      </Container>
      <BannerOne data={bannerData.one} />
    </LayoutTwo>
  );
}
