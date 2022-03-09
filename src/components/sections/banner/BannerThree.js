import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";

function BannerThree({ data }) {
  return (
    <div className="banner-three">
      <Row gutter={30}>
        {data.map((item, index) => (
          <Col key={index} span={12}>
            <div
              className="banner-three-item up-down-anim-hover"
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL + item.background
                }')`,
              }}
            >
              <Row gutter={30} justify="center">
                <Col md={10}>
                  <div className="banner-three-image">
                    <img src={process.env.PUBLIC_URL + item.image} />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="banner-three-content">
                    <div className="banner-three-content__discount">
                      <h3>
                        {item.title.main}
                        <br />
                        <b>{item.title.bold}</b>
                        <span> {item.title.discount}</span>
                      </h3>
                    </div>
                    <Button type="primary" shape="round">
                      <Link
                        href={process.env.PUBLIC_URL + "/shop/shop-3-column"}
                      >
                        <a>Shop now</a>
                      </Link>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default React.memo(BannerThree);
