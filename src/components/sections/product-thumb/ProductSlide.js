import { Button } from "antd";
import React, { useRef } from "react";
import Slider from "react-slick";
import classNames from "classnames";

import Product from "../../product/Product";
import FetchDataHandle from "../../other/FetchDataHandle";

function ProductSlide({
  style,
  data,
  headerTitle,
  headerClass,
  productType,
  productClassName,
  className,
  rows,
}) {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rows: rows ? rows : 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
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
  const sliderRef = useRef(null);
  return (
    <div className={`product-slide ${classNames(className)}`} style={style}>
      <div className={`product-slide-header ${classNames(headerClass)}`}>
        <h5>{headerTitle}</h5>
        <div className="product-slide-header__controller">
          <Button
            type="primary"
            icon={<i className="fal fa-angle-left" />}
            onClick={() => sliderRef.current.slickPrev()}
          />
          <Button
            type="primary"
            icon={<i className="fal fa-angle-right" />}
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>
      <div className="product-slide-content">
        <FetchDataHandle
          data={data}
          renderData={(data) => (
            <Slider ref={sliderRef} {...sliderSettings}>
              {data.map((item, index) => (
                <div className="slide-item" key={index}>
                  <Product
                    className={productClassName}
                    type={productType}
                    data={item}
                  />
                </div>
              ))}
            </Slider>
          )}
        />
      </div>
    </div>
  );
}

export default React.memo(ProductSlide);
