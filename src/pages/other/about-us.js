import { Breadcrumb, Row, Col, Button } from "antd";
import React from "react";
import CountUp from "react-countup";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import IntroductionFive from "../../components/sections/introduction/IntroductionFive";
import IntroductionSix from "../../components/sections/introduction/IntroductionSix";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import introductionData from "../../data/sections/dale-of-week.json";
import data from "../../data/pages/about.json";

function aboutUs() {
  return (
    <LayoutOne title="About us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>About us</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="about">
        <Container>
          <div className="about-story">
            <Row gutter={40}>
              <Col xs={24} sm={12}>
                <div className="about-story__content">
                  <SectionTitle title="The Story About Us" className="-left" />
                  <p>
                    Tyna Giang's integrated agro-forestry farming model is the
                    first project in Vietnam to achieve the highest ranking in
                    the "100 projects to combat climate change" by the Ministry
                    of Environment, Energy and Sea. France organized in 2016 ...
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit. Neque porro quisquam est, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <div className="about-story__video">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/pages/contact/video.png"
                    }
                    alt="introduction image"
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<i className="fas fa-play" />}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="about-statistical">
            <Row gutter={[30, 30]}>
              {data.statistical.map((item) => (
                <Col xs={24} md={8}>
                  <div className="about-statistical__item">
                    <div className="about-statistical__item-icon">
                      <img
                        src={process.env.PUBLIC_URL + item.icon}
                        alt="Statistcal icon"
                      />
                    </div>
                    <div className="about-statistical__item-data">
                      <CountUp start={0} end={item.number} delay={0}>
                        {({ countUpRef }) => (
                          <div className="about-statistical__item-data__countup">
                            {item.prefix && <span>{item.prefix}</span>}
                            <h3 ref={countUpRef} />
                            {item.suffixes && <span>{item.suffixes}</span>}
                          </div>
                        )}
                      </CountUp>
                      <p>{item.object}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <div className="about-introduction">
          <IntroductionFive data={introductionData.one} />
          <IntroductionSix />
        </div>

        <Container>
          <PartnerOne />
        </Container>
      </div>
    </LayoutOne>
  );
}

export default React.memo(aboutUs);
