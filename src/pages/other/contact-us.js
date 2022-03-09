import { Breadcrumb, Row, Col, Form, Input, Button } from "antd";
import React from "react";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";

function contactUs() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutOne title="Contact us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Contact us</Breadcrumb.Item>
        </Breadcrumb>
        <div className="contact">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61340.5926218679!2d105.81059401774723!3d21.0067991436028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1601782776693!5m2!1svi!2s"
              width="100%"
              height="600"
              frameborder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          <div className="contact-methods">
            <Row gutter={15}>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-map-marker-alt" />
                  <p>60-49 Road 11378</p>
                  <p>New York</p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-envelope" />
                  <p>
                    <span>Phone:</span> 0123456789
                  </p>
                  <p>
                    <span>Mail:</span> info.deercreative@gmail.com
                  </p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-clock" />
                  <p>
                    <span>Week Days:</span> 10:00 – 22:00
                  </p>
                  <p>
                    <span>Sunday:</span> Close
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="contact-form">
            <div className="contact-form__title">
              <SectionTitle
                hideDecoration
                title="Leave Message"
                className="-center"
              />
              <p>Our staff will call back later and answer your questions.</p>
            </div>
            <Form
              name="review"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={30}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="message">
                    <Input.TextArea placeholder="Message" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" shape="round">
                      Send Message
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(contactUs);
