import moment from "moment";

export const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency,
  }).format(price);
};

export const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }
  return "";
};

export const formatDate = (
  date,
  inputFormat = "YYYY-MM-DD",
  outputFormat = "MMM DD, YYYY"
) => {
  return moment(date, inputFormat).format(outputFormat);
};

export const removeDash = (str) => {
  return str.replace(/-/g, " ");
};
