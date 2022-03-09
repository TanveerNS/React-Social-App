import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import classNames from "classnames";

import {
  setCurrentSort,
  setCurrentShow,
  setCurrentView,
} from "../../redux/actions/shopFilterActions";

const ShopHeader = ({ title, getViewPerPage, getCurrentSort, hideView }) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const shopFilterState = useSelector((state) => state.shopFilterReducer);
  const { view } = shopFilterState;
  const onSortSelectChange = (value) => {
    switch (value) {
      case "az":
        return dispatch(setCurrentSort({ sort: "name", order: "asc" }));
      case "za":
        return dispatch(setCurrentSort({ sort: "name", order: "desc" }));
      case "lowHight":
        return dispatch(setCurrentSort({ sort: "price", order: "asc" }));
      case "highLow":
        return dispatch(setCurrentSort({ sort: "price", order: "desc" }));
      default:
        return dispatch(setCurrentSort({}));
    }
  };
  const onShowSelectChange = (value) => {
    dispatch(setCurrentShow(value));
  };
  const onViewChage = (e, view) => {
    e.preventDefault();
    dispatch(setCurrentView(view));
  };
  return (
    <div className="shop-header">
      <h5>{title}</h5>
      <div className="shop-header-selectors">
        <Select
          defaultValue=""
          style={{ width: 175 }}
          onChange={onSortSelectChange}
        >
          <Option value="">Default</Option>
          <Option value="az">A to Z</Option>
          <Option value="za">Z to A</Option>
          <Option value="highLow">High to low price</Option>
          <Option value="lowHight">Low to high price</Option>
        </Select>
        <Select
          defaultValue="10"
          style={{ width: 115 }}
          onChange={onShowSelectChange}
        >
          <Option value="10">Show 10</Option>
          <Option value="15">Show 15</Option>
          <Option value="20">Show 20</Option>
        </Select>
      </div>
      {!hideView && (
        <div className="shop-header-view">
          <a
            onClick={(e) => onViewChage(e, "grid")}
            className={classNames({ active: view === "grid" })}
            href="#"
          >
            <i className="fas fa-th-large" />
          </a>
          <a
            onClick={(e) => onViewChage(e, "list")}
            className={classNames({ active: view === "list" })}
            href="#"
          >
            <i className="fas fa-th-list" />
          </a>
        </div>
      )}
    </div>
  );
};

export default React.memo(ShopHeader);
