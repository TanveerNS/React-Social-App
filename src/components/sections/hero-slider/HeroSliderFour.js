import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Button } from "antd";
import Link from "next/link";

import { NextArrow, PrevArrow } from "../../other/SliderArrow";
import Container from "../../other/Container";

function HeroSliderFour({ data }) {
  const [currentSlideIndex, setNextSlideIndex] = useState(0);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };
  useEffect(() => {
    const currentSlide = document.querySelector(
      `.hero-slider.-style-four .slick-slide[data-index="${currentSlideIndex}"]`
    );
    const animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach((item, index) => {
      const animationName = item.dataset.animation;
      const animationDelay = item.dataset.delay;
      console.log(animationName);
      item.classList.add("animate__animated", animationName);
      item.style.animationDelay = animationDelay + "s";
      item.addEventListener("animationend", function () {
        this.classList.remove("animate__animated", animationName);
        this.removeEventListener("animationend", function () {
          return;
        });
      });
    });
  }, [currentSlideIndex]);
  return (
    <div className="hero-slider -carousel -style-four -coffee">
      <Slider
        beforeChange={beforeChange}
        className="arrow-center"
        {...settings}
      >
        {data.map((item, index) => (
          <div key={index} className="slick-slider-item">
            <div className="hero-slider-background">
              <img
                src={process.env.PUBLIC_URL + item.background}
                alt="Hero slider background image"
              />
            </div>
            <Container>
              <div className="hero-slider-content-wrapper">
                <div className="hero-slider-content">
                  <img
                    data-animation="animate__fadeInUp"
                    src={process.env.PUBLIC_URL + item.image}
                    alt="slider image"
                  />
                  <Button
                    data-delay="0.3"
                    data-animation="animate__fadeInUp"
                    type="primary"
                    shape="round"
                  >
                    <Link href={process.env.PUBLIC_URL + "/shop/shop-3-column"}>
                      <a href={process.env.PUBLIC_URL + "/shop/shop-3-column"}>
                        Shop now
                      </a>
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default React.memo(HeroSliderFour);
