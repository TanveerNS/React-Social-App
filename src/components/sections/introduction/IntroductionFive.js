import { Col, Row } from "antd";
import React from "react";
import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

const IntroductionFive = ({ data }) => {
  return (
    <div className="introduction-five">
      <Container>
        <Row align="middle" gutter={40}>
          <Col xs={0} sm={12} md={8}>
            <div className="introduction-five-image">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/sections/introduction/five/1.png"
                }
                alt="Dale of the week icon"
              />
            </div>
          </Col>
          <Col sm={12} md={16}>
            <div className="introduction-five-benefits">
              <SectionTitle title="Why choose us" className="-left" />
              <Row gutter={[30, 30]}>
                {data.map((item) => (
                  <Col md={12}>
                    <div className="introduction-five-benefits__item">
                      <div className="introduction-five-benefits__item-image">
                        <img
                          src={process.env.PUBLIC_URL + item.iconSrc}
                          alt="Dale of the week icon"
                        />
                      </div>
                      <div className="introduction-five-benefits__item-content">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroductionFive;
