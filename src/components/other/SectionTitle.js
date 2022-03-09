import React from "react";
import classNames from "classnames";

function SectionTitle({ title, hideDecoration, className, style }) {
  return (
    <div className={`section-title ${classNames(className)}`} style={style}>
      <h2>{title}</h2>
      {!hideDecoration && <div className="section-title-decoration" />}
    </div>
  );
}

export default React.memo(SectionTitle);
