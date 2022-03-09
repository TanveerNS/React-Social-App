import { Col, Row } from "antd";
import React from "react";
import Container from "../../other/Container";

function BannerFour({ data }) {
  function truncate(str, from, to) {
    return str.split(" ").splice(from, to).join(" ");
  }
  return (
    <div className="banner-four">
      <Container>
        <Row gutter={[30, 30]}>
          {data.map((item, index) => {
            if (item.type === "small") {
              return (
                <Col xs={0} sm={0} md={8} key={index}>
                  <div
                    className="banner-four-item -small up-down-anim-hover"
                    style={{
                      backgroundImage: `url('${
                        process.env.PUBLIC_URL + item.background
                      }')`,
                    }}
                  >
                    <img src={item.image} alt="Banner small item image" />
                  </div>
                </Col>
              );
            }
            return (
              <Col xs={24} sm={24} md={16} key={index}>
                <div
                  className="banner-four-item -big up-down-anim-hover"
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + item.background
                    }')`,
                  }}
                >
                  <Row justify="center" align="middle">
                    <Col md={12}>
                      <img src={item.image} alt="Banner big item image" />
                    </Col>
                    <Col md={12}>
                      <h5>
                        {truncate(item.content, 0, 1)}{" "}
                        <span>{truncate(item.content, 1, 1)}</span> <br />
                        {truncate(item.content, 2, item.content.length)}
                      </h5>
                    </Col>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(BannerFour);
