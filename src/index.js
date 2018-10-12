import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./utils/GlobalState";

import Router from "./utils/Router";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App>
    <Router />
  </App>,
  document.getElementById("root")
);
registerServiceWorker();
