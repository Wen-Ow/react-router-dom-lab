import { StrictMode } from "react"; // StrictMode is a tool for highlighting potential problems in an application
import { createRoot } from "react-dom/client"; // createRoot is a new API in React 18
import { BrowserRouter } from "react-router-dom"; // BrowserRouter is a router component for web apps
import "./index.css"; // Import the global CSS file
import App from "./App.jsx"; // Import the App component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {" "}
      {/* Wrap the App component with BrowserRouter to enable routing */} <App />
    </BrowserRouter>
  </StrictMode>
);
