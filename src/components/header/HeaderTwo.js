import React from "react";
import MenuTwo from "./menu/MenuTwo";

import TopNavOne from "./top-nav/TopNavOne";

export default function HeaderTwo() {
  return (
    <>
      <TopNavOne containerFluid />
      <MenuTwo containerFluid />
    </>
  );
}
