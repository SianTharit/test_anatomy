import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BodyContextProvider } from "./context/BodyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <BodyContextProvider>
            <App />
         </BodyContextProvider>
      </BrowserRouter>
   </React.StrictMode>
);
