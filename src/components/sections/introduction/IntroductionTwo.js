import { Col, Row } from "antd";
import React from "react";

import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

function IntroductionTwo() {
  return (
    <div className="introduction-two">
      <Container>
        <div className="introduction-two-wrapper">
          <Row>
            <Col md={12}>
              <div className="introduction-two-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/sections/introduction/two/1.png"
                  }
                  alt="introduction-image"
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="introduction-two-content">
                <SectionTitle title="Welcome To Ogami" hideDecoration />
                <p>
                  Sed quia non numquam modi tempora indunt ut labore et dolore
                  magnam aliquam quaerat a non numquam modi tempora indunt ut
                  labore et dolore magnam aliquam magnam aliquam quaerat a non
                  numquam
                </p>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/sections/introduction/two/signature.png"
                  }
                  alt="signature"
                />
                <h3>Lettie Chavez</h3>
                <h5>LEADER</h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionTwo);
