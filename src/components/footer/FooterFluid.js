import React from "react";
import { Row, Col } from "antd";

import Container from "../other/Container";

import footerLinks from "../../data/footer-links.json";
import FooterQuickLinks from "./elements/FooterQuickLinks";
import FooterInfomation from "./elements/FooterInfomation";
import FooterSubcribeInput from "./elements/FooterSubcribeInput";

function FooterFluid() {
  return (
    <div className="footer -fluid -style-one">
      <div className="footer-top">
        <Container fluid>
          <Row gutter={15}>
            <Col xs={24} md={9} lg={6}>
              <FooterInfomation />
            </Col>
            <Col xs={24} md={15} lg={13}>
              <FooterQuickLinks colSize={{ span: 8 }} />
            </Col>
            <Col lg={5}>
              <div className="footer-subcribe">
                <div className="footer-subcribe__content">
                  <h5>Join Our Newsletter Now</h5>
                  <p>
                    Get E-mail updates about our latest shop and special offers.
                  </p>
                </div>
                <FooterSubcribeInput url="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container fluid>
          <div className="footer-bottom__wrapper">
            <p>Copyright © 2019 Ogami - All Rights Reserved.</p>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/footer/payment.png"}
              alt="Payment methods"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
export default React.memo(FooterFluid);
