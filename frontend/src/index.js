/**
 * @description      :
 * @author           : Grant
 * @group            :
 * @created          : 17/08/2021 - 13:19:37
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 17/08/2021
 * - Author          : Grant
 * - Modification    :
 **/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import "tailwind.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { ScreenLayout } from "components/Display/Screenlayout";
//import { createTheme, ThemeProvider } from "@material-ui/core";
import { PrimeReactProvider } from "primereact/api";
import Cookies from "universal-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
const cookies = new Cookies();
//const theme = createTheme({});
//window.theme = theme;
cookies.set("Token", "", { path: "/" });
cookies.set("User_id", "", { path: "/" });

const responseMessage = (response) => {
  console.log(response);
};
const errorMessage = (error) => {
  console.log(error);
};

ReactDOM.render(
  <GoogleOAuthProvider  clientId="354290078403-722jlc89r06hil9gckd81lco4ln39bdi.apps.googleusercontent.com">
    <PrimeReactProvider>
      <BrowserRouter>
        <ScreenLayout />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </BrowserRouter>
    </PrimeReactProvider>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
