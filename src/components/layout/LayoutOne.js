import React from "react";
import Head from "next/head";
import { BackTop } from "antd";

import HeaderOne from "../header/HeaderOne";
import Footer from "../footer/Footer";
import withHeaderScroll from "../../common/withHeaderScroll";

const ScrolledHeader = withHeaderScroll(HeaderOne);

function LayoutOne({ title, children, headerClass, footerClass }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ScrolledHeader className={headerClass} />
      {children}
      <Footer className={footerClass} />
      <BackTop />
    </>
  );
}

export default React.memo(LayoutOne);
