import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";

import footerLinks from "../../../data/footer-links.json";

function FooterQuickLinks({ colSize }) {
  return (
    <div className="footer-links">
      <Row gutter={10} justify="space-between">
        {footerLinks.map((item, index) => (
          <Col key={index} {...colSize}>
            <div className="footer-links__group">
              <h5>{item.title}</h5>
              <ul>
                {item.items.map((link, index) => (
                  <li key={index}>
                    <Link href={process.env.PUBLIC_URL + link.href}>
                      <a> {link.title}</a>
                    </Link>{" "}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default React.memo(FooterQuickLinks);
