import React from "react";
import { Skeleton, Empty } from "antd";

export default function FetchDataHandle({
  data,
  errorMessage = "Get products fail, please try again",
  emptyDescription = "No product in this category",
  renderData,
}) {
  return data.loading ? (
    <Skeleton active />
  ) : data.error ? (
    <h3>{errorMessage}</h3>
  ) : data.data.length > 0 ? (
    renderData && renderData(data.data)
  ) : (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={emptyDescription}
    />
  );
}
