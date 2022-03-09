import React from "react";
import Head from "next/head";
import { BackTop } from "antd";

import HeaderFour from "../header/HeaderFour";
import Footer from "../footer/Footer";
import withHeaderScroll from "../../common/withHeaderScroll";

const ScrolledHeader = withHeaderScroll(HeaderFour);

function LayoutFour({ title, headerClass, footerClass, children }) {
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

export default React.memo(LayoutFour);
