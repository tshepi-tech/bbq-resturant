// NPM packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Project files
import App from "./App";
import { RestaurantProvider } from "./state/RestaurantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RestaurantProvider>
      <App />
    </RestaurantProvider>
  </BrowserRouter>
);
