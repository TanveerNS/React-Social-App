import React, { useEffect, useState } from "react";
import { Row, Col, Breadcrumb, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPostsRequest,
  fetchRecentPostsRequest,
} from "../../redux/actions/blogActions";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import Post from "../../components/post/Post";
import FetchDataHandle from "../../components/other/FetchDataHandle";
import PartnerOne from "../../components/sections/partners/PartnerOne";

function blogGrid2Column() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const blogState = useSelector((state) => state.blogReducer);
  const { allPosts, recentPosts } = blogState;
  useEffect(() => {
    dispatch(fetchPostsRequest({ limit: 4, page: currentPage }));
    dispatch(fetchRecentPostsRequest({ limit: 4 }));
  }, [currentPage]);
  const onPaginationChange = (current) => {
    setCurrentPage(current);
  };
  return (
    <LayoutOne title="Blog grid 2 column">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
          <Breadcrumb.Item>Blog grid 2 column</Breadcrumb.Item>
        </Breadcrumb>
        <FetchDataHandle
          data={allPosts}
          renderData={(data) => (
            <div className="blog">
              <div className="blog-content">
                <Row gutter={30}>
                  {data.map((item) => (
                    <Col xs={24} md={12}>
                      <Post data={item} />
                    </Col>
                  ))}
                </Row>
              </div>
              <Pagination
                onChange={onPaginationChange}
                defaultCurrent={currentPage}
                pageSize={4}
                total={allPosts.count}
              />
            </div>
          )}
        />
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
}

export default React.memo(blogGrid2Column);
