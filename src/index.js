import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h1 className="ListName">Facts List</h1>
    <App />
  </React.StrictMode>,
  rootElement
);
