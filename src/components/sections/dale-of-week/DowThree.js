import React from "react";
import { Button, Col, Row } from "antd";
import Countdown, { zeroPad } from "react-countdown";
import Link from "next/link";

import SectionTitle from "../../other/SectionTitle";
import { formatCurrency } from "../../../common/utils";
import Container from "../../other/Container";

function DowThree({ countdownLast = 100000000 }) {
  return (
    <div className="dow-three">
      <Container>
        <div className="dow-three-wrapper">
          <Row>
            <Col md={12}>
              <div className="dow-three-image up-down-anim">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/sections/dale-of-week/three/1.png"
                  }
                  alt="Dale of the week image"
                />
              </div>
            </Col>
            <Col md={10}>
              <div className="dow-three-content">
                <SectionTitle
                  title="Dale of the week"
                  className="-coffee -left"
                />
                <h5>
                  {formatCurrency(19)} <span> / Pakage</span>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisiing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
                <Countdown
                  date={Date.now() + countdownLast}
                  renderer={({ days, hours, minutes, seconds }) => {
                    return (
                      <div className="dow-three-countdown">
                        <div className="dow-three-countdown-item">
                          <h6>{zeroPad(days)}</h6> <span>days</span>
                        </div>
                        <div className="dow-three-countdown-item">
                          <h6>{zeroPad(hours)}</h6> <span>hr</span>
                        </div>
                        <div className="dow-three-countdown-item">
                          <h6>{zeroPad(minutes)} </h6>
                          <span>min</span>
                        </div>
                        <div className="dow-three-countdown-item">
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
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(DowThree);
