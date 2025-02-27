import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./components/context/AuthContextProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
)
