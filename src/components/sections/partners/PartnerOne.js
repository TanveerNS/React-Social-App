import React from "react";
import Slider from "react-slick";
import Container from "../../other/Container";

function PartnerOne({ style }) {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="partner-one" style={style}>
      <div className="partner-one-wrapper">
        <Slider {...settings}>
          {Array.from(Array(8), (e, i) => (
            <div key={i} className="slider-item">
              <a href="#">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/images/sections/partners/${i + 1}.png`
                  }
                  alt="Partner logo"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default React.memo(PartnerOne);
