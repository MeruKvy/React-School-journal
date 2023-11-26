import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./assets/App";
import { Modal } from "./components";
import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./hooks/myContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MyContextProvider>
      <App>
        <Modal />
      </App>
    </MyContextProvider>
  </BrowserRouter>
);
