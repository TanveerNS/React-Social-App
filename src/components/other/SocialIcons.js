import React from "react";
import classNames from "classnames";
import { Button } from "antd";

export default function SocialIcons({ className, type = "link", shape }) {
  return (
    <ul className={`social-icons ${classNames(className)}`}>
      <li>
        <Button type={type} shape={shape} href="#">
          <i className="fab fa-facebook-f"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="#">
          <i className="fab fa-twitter"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="#">
          <i className="fab fa-invision"></i>
        </Button>
      </li>
      <li>
        <Button type={type} shape={shape} href="#">
          <i className="fab fa-pinterest-p"></i>
        </Button>
      </li>
    </ul>
  );
}
