import LayoutWrapper from "../components/Wrapper/LayoutWrapper";
import "../styles/globals.css";
import { wrapper } from "../utils/redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default wrapper.withRedux(MyApp);
