import { Button, Col, Row } from "antd";
import Link from "next/link";
import React from "react";
import { Breadcrumb } from "antd";

import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";

export default function error() {
  return (
    <LayoutOne title="404 Error">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>404 Error</Breadcrumb.Item>
        </Breadcrumb>
        <div className="error">
          <Row gutter={50}>
            <Col xs={24} md={12}>
              <div className="error-content">
                <h2>OPPS! THIS PAGE COULD NOT BE FOUND</h2>
                <p>
                  Sorry bit the page you are looking for does not exist, have
                  been removed or name changed
                </p>
                <Button type="primary" shape="round">
                  <Link href={process.env.PUBLIC_URL + "/"}>
                    <a>Go to homepage</a>
                  </Link>
                </Button>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="error-img">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/pages/404/1.png"
                  }
                  alt="404 Image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
}
