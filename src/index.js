import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import App from "./App";
import { Modal } from "./assets/components";
import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./assets/hooks/myContext";

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
