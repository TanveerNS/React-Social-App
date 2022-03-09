import React from "react";

import SectionTitle from "../../other/SectionTitle";
import Container from "../../other/Container";

const data = [
  {
    title: "Step 1",
    description: "Choose Your Products",
    image: "/assets/images/sections/introduction/three/step-1.png",
  },
  {
    title: "Step 2",
    description: "Connect Nearest Farm",
    image: "/assets/images/sections/introduction/three/step-2.png",
  },
  {
    title: "Step 3",
    description: "Share Your Location",
    image: "/assets/images/sections/introduction/three/step-3.png",
  },
  {
    title: "Step 3",
    description: "Get Delivered Fast",
    image: "/assets/images/sections/introduction/three/step-4.png",
  },
];

function IntroductionThree() {
  return (
    <div className="introduction-three">
      <Container>
        <div className="introduction-three-content">
          <SectionTitle
            title="Delivery Process"
            className="-center -title-white -coffee"
            style={{ marginBottom: 95 / 16 + "em" }}
          />
          <div className="introduction-three-steps">
            {data.map((item, index) => (
              <div key={index} className="introduction-three-steps-item">
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt="Step image"
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(IntroductionThree);
