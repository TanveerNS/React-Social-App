import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as shopActions from "../redux/actions/shopActions";
import LayoutOne from "../components/layout/LayoutOne";
import HeroSliderOne from "../components/sections/hero-slider/HeroSliderOne";
import heroslideOneData from "../data/sections/hero-slider.json";
import Benefits from "../components/other/Benefits";
import CategoriesOne from "../components/sections/categories/CategoriesOne";
import categoriesOneData from "../data/sections/categories.json";
import ProductTab from "../components/sections/product-thumb/ProductTab";
import categories from "../data/categories.json";
import IntroductionOne from "../components/sections/introduction/IntroductionOne";
import introductionOneData from "../data/sections/introduction.json";
import DowOne from "../components/sections/dale-of-week/DowOne";
import dowOneData from "../data/sections/dale-of-week.json";
import PartnerOne from "../components/sections/partners/PartnerOne";
import Container from "../components/other/Container";

export default function Home() {
  const dispatch = useDispatch();
  const [currentProductTabsCategory, setCurrentProductTabsCategory] = useState({
    daleProducts: "",
  });
  const { fetchDaleProductsRequest } = shopActions;
  const shopState = useSelector((state) => state.shopReducer);
  const { daleProducts } = shopState;
  useEffect(() => {
    dispatch(fetchDaleProductsRequest({ limit: 8 }));
  }, []);
  useEffect(() => {
    dispatch(
      fetchDaleProductsRequest({
        limit: 8,
        category: currentProductTabsCategory.daleProducts,
      })
    );
  }, [currentProductTabsCategory.daleProducts]);
  return (
    <LayoutOne title="Homepage 1">
      <HeroSliderOne data={heroslideOneData.one} />
      <Container>
        <Benefits
          threeCol
          style={{
            marginTop: -75 / 16 + "em",
            position: "relative",
            zIndex: 2,
          }}
        />
      </Container>
      <CategoriesOne data={categoriesOneData.one} />
      <Container>
        <ProductTab
          data={daleProducts}
          productCol={{ xs: 12, sm: 8, lg: 6 }}
          onTabChange={(val) =>
            setCurrentProductTabsCategory({
              ...currentProductTabsCategory,
              daleProducts: val,
            })
          }
          headerCategories={categories.slice(0, 5).map((item) => item.name)}
          headerTitle="Deal of the week"
        />
      </Container>
      <IntroductionOne data={introductionOneData.one} />
      <DowOne data={dowOneData.one} countdownLast={100000000} />
      <Container>
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}
