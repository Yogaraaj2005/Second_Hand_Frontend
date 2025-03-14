import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/authContext";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </AuthProvider>
);
