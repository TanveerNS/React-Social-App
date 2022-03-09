import React from "react";
import { Rate, Tabs, Form, Input, Button, Row, Col } from "antd";

const { TabPane } = Tabs;

const ReviewItem = ({ data }) => {
  console.log(data);
  return (
    <div className="product-detail-tab__reviews-item">
      <div className="product-detail-tab__reviews-item__avatar">
        <img
          src={process.env.PUBLIC_URL + data.user.avatar}
          alt="Customer avatar"
        />
        <Rate defaultValue={5} disabled />
      </div>
      <div className="product-detail-tab__reviews-item__content">
        <h5>{data.commentDate}</h5>
        <h3>{data.user.name}</h3>
        <p>{data.review}</p>
      </div>
    </div>
  );
};

function ProductDetailTab({ fullDescription, specifications, reviews }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="product-detail-tab">
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Description" key="1">
          <div className="product-detail-tab__description">
            {fullDescription}
          </div>
        </TabPane>
        <TabPane tab="Specifications" key="2">
          <div className="product-detail-tab__specifications">
            <table>
              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>{specifications.weight}</td>
                </tr>
                <tr>
                  <td>Dimensions</td>
                  <td>
                    {specifications.dimensions.long} x{" "}
                    {specifications.dimensions.width} x{" "}
                    {specifications.dimensions.height}
                  </td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>{specifications.color}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{specifications.size}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPane>
        <TabPane tab="Reviews" key="3">
          <div className="product-detail-tab__reviews">
            {reviews.map((item, index) => (
              <ReviewItem key={index} data={item} />
            ))}
            <div className="product-detail-tab__reviews-form">
              <h5>Add Review</h5>
              <Form
                name="review"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={15}>
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
                    <Form.Item name="rate" label="Your rating">
                      <Rate />
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
                        Submit Review
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default React.memo(ProductDetailTab);
