import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            alt="Ogami Logo"
          />
        </a>
      </Link>
      <ul>
        <li>Address: 60-49 Road 11378 New York</li>
        <li>Phone: +65 11.188.888</li>
        <li>Email: info.deercreative@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
