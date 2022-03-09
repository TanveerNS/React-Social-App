import React from "react";

import Container from "../../other/Container";
import CategoryColappse from "../elements/CategoryColappse";
import { Row, Col } from "antd";
import SearchForm from "../elements/SearchForm";

function FunctionMenuTwo({ activeCollapse }) {
  return (
    <div className="header-function-menu-two">
      <Container>
        <div className="function-menu-wrapper">
          <Row align="middle" gutter={30}>
            <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }} lg={6}>
              <CategoryColappse active={activeCollapse} />
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              md={{ span: 16, order: 2 }}
              lg={12}
            >
              <SearchForm enterButton={<i className="icon_search" />} />
            </Col>
            <Col xs={24} md={{ span: 2, order: 3 }} lg={6}>
              <div className="function-menu-contact">
                <i className="fas fa-phone-alt" />
                <span>+65 11.188.888</span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default React.memo(FunctionMenuTwo);
