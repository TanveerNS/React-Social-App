import React from "react";
import { Row, Col } from "antd";
import classNames from "classnames";

import benefitsData from "../../data/benefits.json";

function Benefits({ containerFluid, column, threeCol, style, className }) {
  const renderCol = () => {
    return threeCol
      ? { xs: 24, md: 8 }
      : column
      ? { xs: 24, sm: 12, md: 6, lg: 24 }
      : { xs: 24, md: 6 };
  };
  const col = renderCol();
  return (
    <div
      className={`benefits ${classNames(className, { "-column": column })}`}
      style={style}
    >
      <div className="benefits-wrapper">
        <Row gutter={10}>
          {benefitsData
            .slice(0, threeCol ? 3 : benefitsData.length)
            .map((item, index) => (
              <Col key={index} {...renderCol()}>
                <div className="benefits-item">
                  <img
                    className="benefits-item__image"
                    src={process.env.PUBLIC_URL + item.iconSrc}
                    alt="Benefit icon"
                  />
                  <h5 className="benefits-item__title">{item.name}</h5>
                  <p className="benefits-item__description">
                    {item.description}
                  </p>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}

export default React.memo(Benefits);
