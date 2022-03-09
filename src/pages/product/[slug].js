import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";

import { fetchProductDetailRequest } from "../../redux/actions/shopActions";
import LayoutOne from "../../components/layout/LayoutOne";
import ProductDetailLayout from "../../components/detail/product/ProductDetailLayout";
import Container from "../../components/other/Container";
import ShopSidebar from "../../components/shop/ShopSidebar";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import FetchDataHandle from "../../components/other/FetchDataHandle";

function productDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  const shopState = useSelector((state) => state.shopReducer);
  const { productDetail } = shopState;
  useEffect(() => {
    dispatch(fetchProductDetailRequest(slug));
  }, []);
  return (
    <LayoutOne title="Product detail">
      <div className="product-detail">
        <Container>
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
        </Container>
      </div>
      <Container>
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}

export default React.memo(productDetail);
