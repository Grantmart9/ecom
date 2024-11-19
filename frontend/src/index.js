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
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const responseMessage = (response) => {
  console.log(response);
};
const errorMessage = (error) => {
  console.log(error);
};

// Make sure to get the root DOM element
const rootElement = document.getElementById("root");

if (rootElement) {
  // If rootElement exists, render the app
  ReactDOM.createRoot(rootElement).render(
    <GoogleOAuthProvider clientId="354290078403-722jlc89r06hil9gckd81lco4ln39bdi.apps.googleusercontent.com">
      <PrimeReactProvider>
        <BrowserRouter>
          <ScreenLayout />
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </BrowserRouter>
      </PrimeReactProvider>
    </GoogleOAuthProvider>
  );
} else {
  console.error(
    'Failed to find the root element. Make sure <div id="root"></div> exists in your HTML.'
  );
}
