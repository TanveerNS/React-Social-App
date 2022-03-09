import React from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

let categories = [
  { name: "Fresh Meat", href: "/shop/shop-3-column" },
  { name: "Vegetables", href: "/shop/shop-3-column" },
  { name: "Fruit & Nut Gifts", href: "/shop/shop-3-column" },
  { name: "Fresh Berries", href: "/shop/shop-3-column" },
  { name: "Ocean Foods", href: "/shop/shop-3-column" },
  { name: "Butter & Eggs", href: "/shop/shop-3-column" },
  { name: "Fastfood", href: "/shop/shop-3-column" },
  { name: "Fresh Onion", href: "/shop/shop-3-column" },
  { name: "Papayaya & Crisps", href: "/shop/shop-3-column" },
  { name: "Oatmeal", href: "/shop/shop-3-column" },
  { name: "Fresh Bananas", href: "/shop/shop-3-column" },
];

function CategoryColappse({ active }) {
  const { Panel } = Collapse;
  return (
    <div className="category-collapse">
      <Collapse
        bordered={false}
        defaultActiveKey={active ? "1" : null}
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? -180 : 0} />
        )}
        expandIconPosition="right"
      >
        <Panel
          header="All departments"
          key="1"
          extra={<i className="far fa-bars" />}
        >
          <ul>
            {categories.map((item, index) => (
              <li key={index}>
                <Link href={process.env.PUBLIC_URL + item.href}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
}

export default React.memo(CategoryColappse);
