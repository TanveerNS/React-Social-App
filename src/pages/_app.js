import { Provider } from "react-redux";

import "../styles/antd.less";
import "../styles/styles.scss";
// import Loading from "../components/other/Loading";
import withReduxStore from "../common/withReduxStore";
import FetchInitData from "../components/other/FetchInitData";

const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <FetchInitData>
        <Component {...pageProps} />
      </FetchInitData>
    </Provider>
  );
};

export default withReduxStore(App);
