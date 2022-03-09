import React from "react";
import classNames from "classnames";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentCategory,
  setCurrentTag,
} from "../../redux/actions/blogFilterActions";
import FetchDataHandle from "../other/FetchDataHandle";
import Post from "../../components/post/Post";

const data = {
  categories: [
    { name: "Healthy", value: "healthy" },
    { name: "Nutrition Meal", value: "nutrition-meal" },
    { name: "Organic Planting", value: "organic-planting" },
    { name: "Recipes", value: "recipes" },
  ],
  tags: [
    { name: "All tag", value: "" },
    { name: "fresh", value: "fresh" },
    { name: "vegetable", value: "vegetable" },
    { name: "meat", value: "meat" },
  ],
};

const BlogSidebarSection = ({ children, title, className }) => {
  return (
    <div className={`blog-sidebar-section ${classNames(className)}`}>
      <div className="blog-sidebar-section__header">
        <h5>{title}</h5>
      </div>
      <div className="blog-sidebar-section__content">{children}</div>
    </div>
  );
};

function BlogSidebar({ recentPostsData }) {
  const dispatch = useDispatch();
  const blogFilterState = useSelector((state) => state.blogFilterReducer);
  const { category, tag } = blogFilterState;
  const onChooseCategory = (e, val) => {
    e.preventDefault();
    dispatch(setCurrentCategory(val));
  };
  const onChooseTag = (val) => {
    dispatch(setCurrentTag(val));
  };
  return (
    <div className="blog-sidebar">
      <BlogSidebarSection className="-categories" title="Categories">
        <ul>
          <li className={classNames({ active: category === "" })}>
            <a
              onClick={(e) => onChooseCategory(e, "")}
              href={process.env.PUBLIC_URL + "#"}
            >
              All departments
            </a>
          </li>
          {data.categories.map((item, index) => (
            <li
              className={classNames({ active: category === item.value })}
              key={index}
            >
              <a onClick={(e) => onChooseCategory(e, item.value)} href="#">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </BlogSidebarSection>
      <BlogSidebarSection className="-recent-post" title="Recent posts">
        <FetchDataHandle
          data={recentPostsData}
          renderData={(data) =>
            data.map((item, index) => (
              <Post key={index} type="tiny" data={item} />
            ))
          }
        />
      </BlogSidebarSection>
      <BlogSidebarSection className="-tags" title="Popular tags">
        {data.tags.map((item, index) => (
          <Button
            className={classNames({ active: tag === item.value })}
            onClick={() => onChooseTag(item.value)}
            key={index}
          >
            {item.name}
          </Button>
        ))}
      </BlogSidebarSection>
    </div>
  );
}

export default React.memo(BlogSidebar);
