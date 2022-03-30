import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import StateDemo1 from "./demo/useState/demo1";
import HookReducer from "./demo/useReducer/index";
import RefComponent from "./demo/useRef/index";
import CallbackComponent from "./demo/useCallback/index";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  //! 严格模式检查只在开发模式下运行，不会与生产模式冲突
  <React.StrictMode>
    <StateDemo1 />
    <HookReducer />
    <RefComponent />
    <div style={{ marginBottom: "20px" }}></div>
    <CallbackComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
