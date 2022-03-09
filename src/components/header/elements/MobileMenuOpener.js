import React, { useState } from "react";
import { Drawer } from "antd";

import MobileNavigator from "./MobileNavigator";

function MobileMenuOpener() {
  const [visible, setVisible] = useState(false);
  const onShowDrawer = () => {
    setVisible(true);
  };
  const onCloseDrawer = () => {
    setVisible(false);
  };
  return (
    <>
      <a onClick={onShowDrawer} className="menu-mobile-opener" href="#">
        <i className="fas fa-bars" />
      </a>
      <Drawer
        title="Close"
        placement="right"
        closable={true}
        onClose={onCloseDrawer}
        visible={visible}
        placement="left"
        width={320}
      >
        <MobileNavigator />
      </Drawer>
    </>
  );
}

export default React.memo(MobileMenuOpener);
