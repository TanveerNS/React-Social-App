import { Button, Row, Col } from "antd";
import Link from "next/link";
import React from "react";
import Countdown, { zeroPad } from "react-countdown";

import Container from "../../other/Container";
import SectionTitle from "../../other/SectionTitle";

function DowTwo({ countdownLast }) {
  return (
    <div className="dow-two">
      <Container>
        <Row align="middle" justify="space-between">
          <Col sm={24} lg={12}>
            <div className="dow-two-content">
              <SectionTitle title="Deal Of The Week" hideDecoration />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitt
                incididunt ut labore
              </p>
              <Countdown
                date={Date.now() + countdownLast}
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <div className="dow-two-countdown">
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(days)}</h6> <span>days</span>
                      </div>
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(hours)}</h6> <span>hr</span>
                      </div>
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(minutes)} </h6>
                        <span>min</span>
                      </div>
                      <div className="dow-two-countdown-item">
                        <h6>{zeroPad(seconds)}</h6> <span>sec</span>
                      </div>
                    </div>
                  );
                }}
              />
              <Button type="primary" shape="round">
                <Link href={process.env.PUBLIC_URL + "/shop/shop-3-column"}>
                  <a href={process.env.PUBLIC_URL + "/shop/shop-3-column"}>
                    Shop now
                  </a>
                </Link>
              </Button>
            </div>
          </Col>
          <Col lg={10}>
            {" "}
            <div className="dow-two-img up-down-anim">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/sections/dale-of-week/two/1.png"
                }
                alt="Dale of the week image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(DowTwo);
