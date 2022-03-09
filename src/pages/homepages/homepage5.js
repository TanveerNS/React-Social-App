import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchFeaturedProductsRequest,
  fetchDaleProductsRequest,
  fetchBestSellerProductsRequest,
  fetchSaleProductsRequest,
} from "../../redux/actions/shopActions";
import { fetchPostsRequest } from "../../redux/actions/blogActions";
import categories from "../../data/categories.json";
import LayoutFive from "../../components/layout/LayoutFive";
import HeroSliderFive from "../../components/sections/hero-slider/HeroSliderFive";
import heroslideOneData from "../../data/sections/hero-slider.json";
import Benefits from "../../components/other/Benefits";
import Container from "../../components/other/Container";
import BannerFour from "../../components/sections/banner/BannerFour";
import bannerData from "../../data/sections/banner.json";
import ProductTab from "../../components/sections/product-thumb/ProductTab";
import ProductSlide from "../../components/sections/product-thumb/ProductSlide";
import DowThree from "../../components/sections/dale-of-week/DowThree";
import BlogSlide from "../../components/sections/blog/BlogSlide";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import { Col, Row } from "antd";

export default function homepage5() {
  const dispatch = useDispatch();
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    featuredProducts: "",
  });
  const shopState = useSelector((state) => state.shopReducer);
  const blogState = useSelector((state) => state.blogReducer);
  const {
    featuredProducts,
    daleProducts,
    bestSellerProducts,
    saleProducts,
  } = shopState;
  const { allPosts } = blogState;
  useEffect(() => {
    dispatch(fetchFeaturedProductsRequest({ limit: 8 }));
    dispatch(fetchDaleProductsRequest({ limit: 9 }));
    dispatch(fetchBestSellerProductsRequest({ limit: 9 }));
    dispatch(fetchSaleProductsRequest({ limit: 9 }));
    dispatch(fetchPostsRequest({ limit: 4 }));
  }, []);
  useEffect(() => {
    dispatch(
      fetchFeaturedProductsRequest({
        limit: 8,
        category: currentProductTabsCategory.featuredProducts,
      })
    );
  }, [currentProductTabsCategory.featuredProducts]);
  return (
    <LayoutFive
      title="Homepage 5"
      headerClass="-coffee -no-space"
      footerClass="-coffee"
    >
      <HeroSliderFive data={heroslideOneData.one} />
      <Container>
        <Benefits
          className="-bordered"
          style={{ marginBottom: 30 / 16 + "em" }}
        />
      </Container>
      <BannerFour data={bannerData.four} />
      <Container>
        <ProductTab
          style={{ marginBottom: 30 / 16 + "em" }}
          data={featuredProducts}
          productCol={{ xs: 12, sm: 8, lg: 6 }}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              featuredProducts: val,
            })
          }
          headerCategories={categories.slice(0, 4).map((item) => item.name)}
          headerTitle="Featured products"
          className="-coffee"
        />
      </Container>
      <DowThree />
      <Container>
        <Row gutter={30} style={{ marginBottom: 70 / 16 + "rem" }}>
          <Col md={8}>
            <ProductSlide
              style={{
                marginTop: 14 / 16 + "em",
                marginBottom: 30 / 16 + "em",
              }}
              productType="tiny"
              headerTitle="Dale of the week"
              headerClass="-small -no-border -round-arrows"
              className="-pink"
              data={daleProducts}
              rows={3}
            />
          </Col>
          <Col md={8}>
            <ProductSlide
              style={{
                marginTop: 14 / 16 + "em",
                marginBottom: 30 / 16 + "em",
              }}
              productType="tiny"
              headerTitle="Best seller"
              headerClass="-small -no-border -round-arrows"
              className="-pink"
              data={bestSellerProducts}
              rows={3}
            />
          </Col>
          <Col md={8}>
            <ProductSlide
              style={{
                marginTop: 14 / 16 + "em",
                marginBottom: 30 / 16 + "em",
              }}
              productType="tiny"
              headerTitle="Sale products"
              headerClass="-small -no-border -round-arrows"
              className="-pink"
              data={saleProducts}
              rows={3}
            />
          </Col>
        </Row>
        <PartnerOne />
        <BlogSlide
          data={allPosts}
          postType="inline"
          postClassName="-coffee"
          headerTitle="From The Blog"
          headerClass="-center -coffee"
        />
      </Container>
    </LayoutFive>
  );
}
