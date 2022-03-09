import React from "react";
import { Button, Row, Col } from "antd";
import Link from "next/link";

import Container from "../../other/Container";
import { formatCurrency } from "../../../common/utils";

function HeroSliderFive({ data }) {
  return (
    <div className="hero-slider -single -style-five -coffee">
      <Container>
        <Row gutter={30}>
          <Col xs={24} md={8} lg={6} />
          <Col xs={24} md={16} lg={18}>
            <div className="hero-slider-wrapper">
              <div className="hero-slider-background">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/hero-slider/five/1.png"
                  }
                  alt="Hero slider background image"
                />
              </div>
              <div className="hero-slider-content-wrapper">
                <div className="hero-slider-content">
                  <h5>FRUIT FRESH</h5>
                  <h1>Orange Lemon</h1>
                  <h3>
                    {formatCurrency(14)} <span>/ Pakage</span>
                  </h3>
                  <Button type="primary" shape="round">
                    <Link href={process.env.PUBLIC_URL + "/shop/shop-3-column"}>
                      <a href={process.env.PUBLIC_URL + "/shop/shop-3-column"}>
                        Shop now
                      </a>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(HeroSliderFive);
