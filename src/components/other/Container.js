import React from "react";

export default function Container({ fluid, children }) {
  return (
    <div className={fluid ? "container-fluid" : "container"}>{children}</div>
  );
}
