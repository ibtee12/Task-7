import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2600,
          style: {
            borderRadius: "12px",
            background: "#173b2c",
            color: "#fff",
            fontSize: "14px",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
