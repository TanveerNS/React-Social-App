import React from "react";
import { Form, Input, Button, Image } from "antd";

import { formatDate } from "../../../../common/utils";

function PostDetailCommentItem({ data }) {
  return (
    <div className="post-detail-comment__item">
      <div className="post-detail-comment__item-avatar">
        <Image
          width="80"
          height="80"
          src={process.env.PUBLIC_URL + data.user.avatar}
          alt="User avatar image"
          placeholder
        />
      </div>
      <div className="post-detail-comment__item-content">
        <h5>{formatDate(data.commentDate)}</h5>
        <h3>{data.user.name}</h3>
        <p>{data.comment}</p>
        <div className="post-detail-comment__item-content__button">
          <Button>Like</Button>
          <Button>Reply</Button>
        </div>
        <div className="post-detail-comment__item-content__reply">
          {data.reply &&
            data.reply.map((item) => <PostDetailCommentItem data={item} />)}
        </div>
      </div>
    </div>
  );
}

function PostDetailComment({ data }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="post-detail-comment">
      <div className="post-detail-comment__list">
        <h3 className="post-detail-comment__title">4 Comments</h3>
        {data.map((item) => (
          <PostDetailCommentItem data={item} />
        ))}
      </div>
      <div className="post-detail-comment__new">
        <h3 className="post-detail-comment__title">Leave a comment</h3>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="website">
            <Input placeholder="Website" />
          </Form.Item>
          <Form.Item name="message">
            <Input.TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" shape="round" htmlType="submit">
              Send message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default React.memo(PostDetailComment);
