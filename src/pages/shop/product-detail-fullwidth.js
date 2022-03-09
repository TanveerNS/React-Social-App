import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb } from "antd";

import {
  fetchProductDetailRequest,
  fetchFeaturedProductsRequest,
} from "../../redux/actions/shopActions";
import LayoutTwo from "../../components/layout/LayoutTwo";
import ProductDetailLayout from "../../components/detail/product/ProductDetailLayout";
import Container from "../../components/other/Container";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import ProductGrid from "../../components/sections/product-thumb/ProductGrid";
import FetchDataHandle from "../../components/other/FetchDataHandle";

function productDetailFullwidth() {
  const dispatch = useDispatch();
  const shopState = useSelector((state) => state.shopReducer);
  const { productDetail, featuredProducts } = shopState;
  useEffect(() => {
    dispatch(fetchFeaturedProductsRequest({ limit: 6 }));
    dispatch(fetchProductDetailRequest("fresh-orange-1"));
  }, []);
  return (
    <LayoutTwo title="Product Detail Fullwidth">
      <Container fluid>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Product Detail Fullwidth</Breadcrumb.Item>
        </Breadcrumb>
        <div className="product-detail">
          <FetchDataHandle
            data={productDetail}
            renderData={(data) => (
              <ProductDetailLayout type="fluid" data={data[0]} />
            )}
          />
        </div>
        <ProductGrid
          data={featuredProducts}
          headerTitle="Featured Products"
          headerClass="-small -underline"
          productCol={{ xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }}
        />
        <PartnerOne />
      </Container>
    </LayoutTwo>
  );
}

export default React.memo(productDetailFullwidth);
