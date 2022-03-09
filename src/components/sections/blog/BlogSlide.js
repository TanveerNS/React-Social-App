import React from "react";
import { Skeleton, Empty } from "antd";
import classNames from "classnames";
import Slider from "react-slick";

import SectionTitle from "../../other/SectionTitle";
import Post from "../../post/Post";

export default function BlogSlide({
  headerTitle,
  headerClass,
  postClassName,
  postType,
  data,
  className,
}) {
  const settings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={`blog-slide ${classNames(className)}`}>
      <SectionTitle title={headerTitle} className={classNames(headerClass)} />
      <div className="blog-slide-content">
        {data.loading ? (
          <Skeleton active />
        ) : data.error ? (
          <h3>Get products fail, please try again</h3>
        ) : data.data.length > 0 ? (
          <Slider {...settings}>
            {data.data.map((item, index) => (
              <div key={index} className="slide-item">
                <Post
                  className={classNames(postClassName)}
                  type={postType}
                  data={item}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No product in this category"
          />
        )}
      </div>
    </div>
  );
}
