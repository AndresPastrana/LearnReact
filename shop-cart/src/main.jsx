import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FilterProvider } from "./context/FilterProvider.jsx";
import ProdcutsProvider from "./context/ProdcutsProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterProvider>
      <ProdcutsProvider>
        <App />
      </ProdcutsProvider>
    </FilterProvider>
  </React.StrictMode>
);
