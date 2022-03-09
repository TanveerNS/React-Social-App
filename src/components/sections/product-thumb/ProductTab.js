import React, { useEffect, useState } from "react";
import { Tabs, Row, Col, Empty, Skeleton } from "antd";
import classNames from "classnames";

import SectionTitle from "../../other/SectionTitle";
import Product from "../../product/Product";
import FetchDataHandle from "../../other/FetchDataHandle";

function ProductTab({
  style,
  data,
  className,
  onTabChange,
  productClassName,
  headerCategories,
  headerTitle,
  headerClass,
  showTitleDecoration = false,
  headerType = "grid",
  productCol,
}) {
  const { TabPane } = Tabs;
  const onChooseCategory = (key) => {
    onTabChange(key);
  };
  const renderTabContent = () => (
    <FetchDataHandle
      data={data}
      renderData={(data) => (
        <Row
          gutter={[
            { xs: 0, md: 15 },
            { xs: 0, md: 15 },
          ]}
        >
          {data.map((item, index) => (
            <Col key={index} {...productCol}>
              <Product className={productClassName} data={item} />
            </Col>
          ))}
        </Row>
      )}
    />
  );
  return (
    <div className={`product-tab ${classNames(className)}`} style={style}>
      <div
        className={`product-tab-header ${
          headerType === "row" ? "-style-two" : "style-one"
        }  ${classNames(headerClass)}`}
      >
        {headerType === "grid" && (
          <SectionTitle
            title={headerTitle}
            className="-center"
            hideDecoration={showTitleDecoration}
          />
        )}
        <Tabs
          tabBarExtraContent={
            headerType === "row"
              ? {
                  left: (
                    <SectionTitle
                      title={headerTitle}
                      className="-center"
                      hideDecoration
                    />
                  ),
                }
              : null
          }
          defaultActiveKey="1"
          centered={headerType === "row" ? false : true}
          onChange={onChooseCategory}
        >
          <TabPane tab="All" key="">
            {renderTabContent()}
          </TabPane>
          {headerCategories.map((item, index) => (
            <TabPane tab={item} key={item}>
              {renderTabContent()}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default React.memo(ProductTab);
