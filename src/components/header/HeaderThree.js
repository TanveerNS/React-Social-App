import React from "react";
import TopNavOne from "./top-nav/TopNavOne";
import MenuOne from "./menu/MenuOne";
import FunctionMenuTwo from "./function-menu/FunctionMenuTwo";

export default function HeaderThree({ container }) {
  return (
    <>
      <TopNavOne />
      <MenuOne />
      <FunctionMenuTwo activeCollapse={true} />
    </>
  );
}
