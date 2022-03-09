import React from "react";
import { Button, Row, Col } from "antd";
import Link from "next/link";

import Container from "../../other/Container";

function HeroSliderThree({ data }) {
  return (
    <div className="hero-slider -single -style-three -pink">
      <Container>
        <Row gutter={30}>
          <Col xs={24} md={8} lg={6} />
          <Col xs={24} md={16} lg={18}>
            <div className="hero-slider-wrapper">
              <div className="hero-slider-background">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/hero-slider/three/bg.png"
                  }
                  alt="Hero slider background image"
                />
              </div>
              <div className="hero-slider-content-wrapper">
                <Row justify="center" align="middle" gutter={30}>
                  <Col sm={12}>
                    <div className="hero-slider-content">
                      <h5>BUTTER & EGGS</h5>
                      <h1>Spice 100% Organnic</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do
                      </p>
                      <Button type="primary" shape="round">
                        <Link
                          href={process.env.PUBLIC_URL + "/shop/shop-3-column"}
                        >
                          <a
                            href={
                              process.env.PUBLIC_URL + "/shop/shop-3-column"
                            }
                          >
                            Shop now
                          </a>
                        </Link>
                      </Button>
                    </div>
                  </Col>
                  <Col sm={10}>
                    <div className="hero-slider-image up-down-anim">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/hero-slider/three/1.png"
                        }
                        alt="Hero slider image"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(HeroSliderThree);
