import { Rate } from "antd";
import React from "react";
import Slider from "react-slick";

const data = [
  {
    avatar: "/assets/images/sections/testimonial/one/avatar.png",
    name: "Steven Ady",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do accusantium ",
    rate: 4,
  },
  {
    avatar: "/assets/images/sections/testimonial/one/avatar.png",
    name: "Max Lane",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do accusantium ",
    rate: 4,
  },
  {
    avatar: "/assets/images/sections/testimonial/one/avatar.png",
    name: "Jugen Kloop",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do accusantium ",
    rate: 4,
  },
];

function TestimonialOneItem({ data }) {
  return (
    <div className="testimonial-one-item">
      <img src={process.env.PUBLIC_URL + data.avatar} alt="Customer avatar" />
      <h3>{data.name}</h3>
      <p>{data.review}</p>
      <Rate defaultValue={data.rate} disabled />
    </div>
  );
}

function TestimonialOne() {
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => {
      return <div></div>;
    },
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
  return (
    <div className="testimonial-one">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="slide-item">
            <TestimonialOneItem data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default React.memo(TestimonialOne);
