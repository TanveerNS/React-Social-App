import React from "react";
import Container from "../../other/Container";
import SocialIcons from "../../other/SocialIcons";
import { Select } from "antd";
import Link from "next/link";

const flagData = [
  { name: "english", image: "/assets/images/header/flag-usa.png" },
  { name: "japanese", image: "/assets/images/header/flag-jp.png" },
  { name: "vietnamese", image: "/assets/images/header/flag-vn.png" },
];

export default function TopNavOne({ containerFluid }) {
  const { Option } = Select;
  return (
    <div className="top-nav-one">
      <Container fluid={containerFluid}>
        <div className="top-nav-one-wrapper">
          <div className="top-nav-one-left">
            <ul>
              <li>
                <i className="fas fa-envelope" />
                info.deercreative@gmail.com
              </li>
              <li>
                <i className="fas fa-phone-alt" />
                +65 11.188.888
              </li>
            </ul>
          </div>
          <div className="top-nav-one-right">
            <div className="top-nav-one-right__item">
              <SocialIcons />
            </div>
            <div className="top-nav-one-right__item">
              <Select defaultValue="english" width={125} bordered={false}>
                {flagData.map((item, index) => (
                  <Option key={index} value={item.name}>
                    <img
                      style={{
                        height: 13 / 16 + "em",
                        width: 20 / 16 + "em",
                        objectFit: "contain",
                        marginTop: -3 / 16 + "em",
                        marginRight: 5 / 16 + "em",
                      }}
                      src={process.env.PUBLIC_URL + item.image}
                      alt=""
                    />
                    {item.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="top-nav-one-right__item">
              <Link href={process.env.PUBLIC_URL + "/auth/login"}>
                <a>
                  <i className="fas fa-user" />
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
