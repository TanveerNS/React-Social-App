import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";

import * as shopActions from "../../redux/actions/shopActions";
import LayoutThree from "../../components/layout/LayoutThree";
import HeroSliderThree from "../../components/sections/hero-slider/HeroSliderThree";
import heroslideOneData from "../../data/sections/hero-slider.json";
import ProductTab from "../../components/sections/product-thumb/ProductTab";
import categories from "../../data/categories.json";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import Container from "../../components/other/Container";
import ProductSlide from "../../components/sections/product-thumb/ProductSlide";
import Benefits from "../../components/other/Benefits";
import ProductGrid from "../../components/sections/product-thumb/ProductGrid";
import TestimonialOne from "../../components/sections/testimonial/TestimonialOne";
import BannerTwo from "../../components/sections/banner/BannerTwo";
import BannerThree from "../../components/sections/banner/BannerThree";
import bannerData from "../../data/sections/banner.json";

export default function Home() {
  const dispatch = useDispatch();
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    featuredProducts: "",
    bestSellerProducts: "",
  });
  const {
    fetchFeaturedProductsRequest,
    fetchBestSellerProductsRequest,
    fetchDaleProductsRequest,
    fetchSaleProductsRequest,
  } = shopActions;
  const shopState = useSelector((state) => state.shopReducer);
  const {
    featuredProducts,
    bestSellerProducts,
    saleProducts,
    daleProducts,
  } = shopState;
  useEffect(() => {
    dispatch(fetchFeaturedProductsRequest({ limit: 6 }));
    dispatch(fetchBestSellerProductsRequest({ limit: 6 }));
    dispatch(fetchDaleProductsRequest({ limit: 6 }));
    dispatch(fetchSaleProductsRequest({ limit: 3 }));
  }, []);
  useEffect(() => {
    dispatch(
      fetchFeaturedProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.featuredProducts,
      })
    );
  }, [currentProductTabsCategory.featuredProducts]);
  useEffect(() => {
    dispatch(
      fetchBestSellerProductsRequest({
        limit: 6,
        category: currentProductTabsCategory.bestSellerProducts,
      })
    );
  }, [currentProductTabsCategory.bestSellerProducts]);
  return (
    <LayoutThree
      title="Homepage 3"
      headerClass="-pink -no-space"
      footerClass="-pink"
    >
      <HeroSliderThree data={heroslideOneData.one} />
      <Container>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} lg={6}>
            <ProductSlide
              style={{
                marginTop: 14 / 16 + "em",
                marginBottom: 30 / 16 + "em",
              }}
              productType="dale"
              headerTitle="Dale of the week"
              headerClass="-small -underline"
              className="-pink"
              data={daleProducts}
              column
            />
            <Benefits
              style={{ marginBottom: 30 / 16 + "em" }}
              className="-pink -bordered"
              column
            />
            <ProductGrid
              style={{ marginBottom: 30 / 16 + "em" }}
              headerTitle="Sale products"
              headerClass="-small -underline"
              productClassName="-bordered"
              productCol={{ xs: 24, sm: 24 }}
              gutter={0}
              className="-pink"
              productType="tiny"
              data={saleProducts}
            />
            <TestimonialOne />
          </Col>
          <Col xs={24} sm={24} lg={18}>
            <ProductTab
              style={{ marginBottom: 30 / 16 + "em" }}
              data={featuredProducts}
              productCol={{ xs: 12, sm: 8, lg: 8 }}
              onTabChange={(val) =>
                setCurrentProductTabsCategory({
                  ...currentProductTabsCategory,
                  featuredProducts: val,
                })
              }
              headerCategories={categories.slice(0, 4).map((item) => item.name)}
              headerTitle="Featured products"
              headerType="row"
              headerClass="-small -underline"
              className="-pink"
            />
            <BannerTwo />
            <ProductTab
              style={{ marginBottom: 30 / 16 + "em" }}
              data={bestSellerProducts}
              productCol={{ xs: 12, sm: 8, lg: 8 }}
              onTabChange={(val) =>
                setCurrentProductTabsCategory({
                  ...currentProductTabsCategory,
                  bestSellerProducts: val,
                })
              }
              headerCategories={categories.slice(0, 4).map((item) => item.name)}
              headerTitle="Best seller "
              headerType="row"
              headerClass="-small -underline"
              className="-pink"
            />
            <BannerThree data={bannerData.three} />
          </Col>
        </Row>
        <PartnerOne style={{ marginTop: 70 / 16 + "rem" }} />
      </Container>
    </LayoutThree>
  );
}
