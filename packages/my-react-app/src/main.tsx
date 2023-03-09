import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles, Toaster } from "my-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <Toaster />
  </React.StrictMode>
);
