import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPostsRequest,
  fetchRecentPostsRequest,
} from "../../redux/actions/blogActions";
import LayoutOne from "../../components/layout/LayoutOne";
import Post from "../../components/post/Post";
import FetchDataHandle from "../../components/other/FetchDataHandle";
import Container from "../../components/other/Container";

export default function blogMasonry() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const blogState = useSelector((state) => state.blogReducer);
  const { allPosts } = blogState;
  useEffect(() => {
    dispatch(fetchPostsRequest({ limit: 6, page: currentPage }));
  }, [currentPage]);
  const onPaginationChange = (current) => {
    setCurrentPage(current);
  };
  return (
    <LayoutOne title="Blog masonry">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Blog</Breadcrumb.Item>
          <Breadcrumb.Item>Blog masonry</Breadcrumb.Item>
        </Breadcrumb>
        <div className="blog-masonry">
          <FetchDataHandle
            data={allPosts}
            renderData={(data, index) => (
              <div key={index} className="blog-masonry-content">
                {data.map((item) => (
                  <div className="blog-masonry-content__item" xs={24} md={12}>
                    <Post className="-release-height" data={item} />
                  </div>
                ))}
              </div>
            )}
          ></FetchDataHandle>
        </div>
      </Container>
    </LayoutOne>
  );
}
