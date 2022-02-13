import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutWrapper from "./components/Wrapper/LayoutWrapper";
import { AppStore } from "./utils/redux/store";

function App() {
  return (
    <Provider store={AppStore}>
      <BrowserRouter>
        <LayoutWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
