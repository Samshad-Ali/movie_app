import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contextwrapper from "./context/Contextwrapper";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Contextwrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Contextwrapper>
);
