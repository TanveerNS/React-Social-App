import React from "react";
import { Collapse, Breadcrumb } from "antd";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import faqData from "../../data/pages/faq.json";

export default function faq() {
  const { Panel } = Collapse;
  const text = 1;
  return (
    <LayoutOne title="FAQ">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>FAQ</Breadcrumb.Item>
        </Breadcrumb>
        <div className="faq">
          <Collapse accordion defaultActiveKey={[1]} ghost>
            {faqData.map((item, index) => (
              <Panel header={item.title} key={index + 1}>
                <p>{item.content}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}
