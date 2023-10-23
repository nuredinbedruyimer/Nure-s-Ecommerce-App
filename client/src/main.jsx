import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Store from "./redux/store/Store.jsx";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />{" "}
    </BrowserRouter>
  </Provider>,
  rootElement
);
