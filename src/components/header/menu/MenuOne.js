import React from "react";
import Link from "next/link";

import Container from "../../other/Container";
import Navigator from "../elements/Navigator";
import FunctionItems from "../elements/FunctionItems";
import MobileMenuOpener from "../elements/MobileMenuOpener";

export default function MenuOne() {
  return (
    <div className="menu -style-one">
      <Container>
        <div className="menu-wrapper">
          <MobileMenuOpener />
          <Link href={process.env.PUBLIC_URL + "/"}>
            <a className="menu-logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                alt="Ogami logo"
              />
            </a>
          </Link>
          <Navigator />
          <FunctionItems />
        </div>
      </Container>
    </div>
  );
}
