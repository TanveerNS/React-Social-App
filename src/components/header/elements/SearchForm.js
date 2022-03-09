import React, { useCallback, useEffect, useState } from "react";
import { Select, AutoComplete, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import categories from "../../../data/categories.json";
import useDebounce from "../../../common/useDebound";
import { fetchSearchedProductRequest } from "../../../redux/actions/shopActions";
import Link from "next/link";

function SearchForm({ enterButton = "Search", hideSelect }) {
  const { Option } = Select;
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentSearch, setCurrentSearch] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const deboundValue = useDebounce(currentSearch, 300);
  const shopState = useSelector((state) => state.shopReducer);
  const { searchedProducts } = shopState;
  const onChange = (val) => {
    setCurrentSearch(val);
  };
  const onSelectOption = (value, option) => {
    setCurrentSearch(value);
  };
  const onSearch = (val) => {
    if (!currentSearch || currentSearch === "") {
      return;
    } else {
      router.push({
        pathname: process.env.PUBLIC_URL + "/shop/shop-3-column",
        query: { q: currentSearch },
      });
    }
  };
  const onChooseCateogry = (val) => {
    setCurrentCategory(val);
  };
  const options =
    searchedProducts.data.length > 0 &&
    searchedProducts.data.map((item) => ({ value: item.name }));

  useEffect(() => {
    dispatch(
      fetchSearchedProductRequest({
        input: currentSearch,
        limit: 10,
        category: currentCategory,
      })
    );
  }, [deboundValue, currentCategory]);
  return (
    <div className="search-form">
      <div className="search-form-wrapper">
        {!hideSelect && (
          <div className="search-form-select">
            <Select
              defaultValue={currentCategory}
              suffixIcon={<i className="far fa-angle-down" />}
              bordered={false}
              onChange={onChooseCateogry}
            >
              <Option value="">All categories</Option>
              {categories.map((item, index) => (
                <Option key={index} value={item.value}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </div>
        )}

        <div className="search-form-input">
          <AutoComplete
            backfill
            value={currentSearch}
            onSelect={onSelectOption}
            onChange={onChange}
            options={options}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          >
            <Input.Search
              placeholder="What do you need"
              size="large"
              enterButton={enterButton}
              bordered={false}
              loading={searchedProducts.loading}
              onSearch={onSearch}
            />
          </AutoComplete>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SearchForm);
