import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Pagination, Breadcrumb } from "antd";
import { useRouter } from "next/router";

import {
  fetchProductsRequest,
  fetchFeaturedProductsRequest,
} from "../../redux/actions/shopActions";
import LayoutTwo from "../../components/layout/LayoutTwo";
import Container from "../../components/other/Container";
import ShopSidebar from "../../components/shop/ShopSidebar";
import ProductGrid from "../../components/sections/product-thumb/ProductGrid";
import ShopHeader from "../../components/shop/ShopHeader";

function shopGridFullwidth() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { q } = router.query;
  const [currentPage, setCurrentPage] = useState(1);
  const shopState = useSelector((state) => state.shopReducer);
  const { products, featuredProducts } = shopState;
  const shopFilterState = useSelector((state) => state.shopFilterReducer);
  const { sort, show, view, category, color, size, tag } = shopFilterState;
  useEffect(() => {
    dispatch(fetchFeaturedProductsRequest({ limit: 4 }));
  }, []);
  useEffect(() => {
    dispatch(
      fetchProductsRequest({
        limit: show,
        category: null,
        page: currentPage,
        q,
        sort,
        view,
        category,
        color,
        size,
        tag,
      })
    );
  }, [shopFilterState, currentPage, q]);
  const onPaginationChange = (current) => {
    setCurrentPage(current);
  };
  return (
    <LayoutTwo title="Shop grid fullwidth">
      <Container fluid>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
        </Breadcrumb>
        <div className="shop">
          <div className="shop-content">
            <Row gutter={30}>
              <Col xs={24} lg={8} xl={4}>
                <ShopSidebar style={{ marginTop: 10 / 16 + "em" }} />
              </Col>
              <Col xs={24} lg={16} xl={20}>
                <ShopHeader title="Shop grid fullwidth" hideView />
                <ProductGrid
                  data={products}
                  hideHeader
                  fiveCol
                  productCol={{ xs: 12, sm: 12, md: 8, xl: 6 }}
                />
                {products.count > 0 && (
                  <Pagination
                    onChange={onPaginationChange}
                    defaultCurrent={currentPage}
                    pageSize={show}
                    total={products.count}
                  />
                )}
                <ProductGrid
                  style={{ marginTop: 70 / 16 + "rem" }}
                  data={featuredProducts}
                  headerTitle="Featured Products"
                  headerClass="-small -underline"
                  productType="tiny"
                  productCol={{ xs: 12, sm: 12, xl: 6 }}
                  productClassName="-bordered"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </LayoutTwo>
  );
}

export default React.memo(shopGridFullwidth);
