import React from "react";

import Container from "../../other/Container";
import CategoryColappse from "../elements/CategoryColappse";
import { Row, Col } from "antd";
import SearchForm from "../elements/SearchForm";

function FunctionMenuOne({ activeHeaderCollapse }) {
  return (
    <div className="header-function-menu-one">
      <Container>
        <div className="function-menu-wrapper">
          <Row gutter={30}>
            <Col xs={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }} lg={6}>
              <CategoryColappse active={activeHeaderCollapse} />
            </Col>
            <Col
              xs={{ span: 24, order: 1 }}
              md={{ span: 16, order: 2 }}
              lg={18}
            >
              <SearchForm />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
export default React.memo(FunctionMenuOne);
