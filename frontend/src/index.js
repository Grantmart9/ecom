import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import "tailwind.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { ScreenLayout } from "components/Display/Screenlayout";
import { PrimeReactProvider } from "primereact/api";

// Make sure to get the root DOM element
const rootElement = document.getElementById("root");

if (rootElement) {
  // If rootElement exists, render the app
  ReactDOM.createRoot(rootElement).render(
    <PrimeReactProvider>
      <BrowserRouter>
        <ScreenLayout />
      </BrowserRouter>
    </PrimeReactProvider>
  );
} else {
  console.error(
    'Failed to find the root element. Make sure <div id="root"></div> exists in your HTML.'
  );
}
