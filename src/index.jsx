import React from "react";
import ReactDOM from "react-dom";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import AlertManeger from "./components/Organisms/AlertManager";
import MainPage from "./components/Pages/MainPage";
import "./style.css";

ReactDOM.render(
  <AlertHandlerProvider>
    <MainPage />
    <AlertManeger />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
