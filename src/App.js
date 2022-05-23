import "@/assets/css/reset.less";
import "@/assets/css/App.less";

import { Router } from "./router/index";
import { Provider } from "react-redux";
// import store from "./store/index";
function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    // </Provider>
  );
}
export default App;
