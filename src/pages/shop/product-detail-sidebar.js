import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Breadcrumb } from "antd";

import { fetchProductDetailRequest } from "../../redux/actions/shopActions";
import LayoutOne from "../../components/layout/LayoutOne";
import ProductDetailLayout from "../../components/detail/product/ProductDetailLayout";
import Container from "../../components/other/Container";
import ShopSidebar from "../../components/shop/ShopSidebar";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import FetchDataHandle from "../../components/other/FetchDataHandle";

function productDetailSidebar() {
  const dispatch = useDispatch();
  const shopState = useSelector((state) => state.shopReducer);
  const { productDetail } = shopState;
  useEffect(() => {
    dispatch(fetchProductDetailRequest("fresh-orange-1"));
  }, []);
  return (
    <LayoutOne title="Product Detail Sidebar">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Product Detail Sidebar</Breadcrumb.Item>
        </Breadcrumb>
        <div className="product-detail">
          <Row gutter={30}>
            <Col xs={24} md={6}>
              <ShopSidebar showShortcut />
            </Col>
            <Col xs={24} md={18}>
              <FetchDataHandle
                data={productDetail}
                renderData={(data) => <ProductDetailLayout data={data[0]} />}
              />
            </Col>
          </Row>
        </div>
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}

export default React.memo(productDetailSidebar);
