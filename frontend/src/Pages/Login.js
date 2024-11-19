import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { TextField } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export const Login = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <GoogleOAuthProvider clientId="354290078403-722jlc89r06hil9gckd81lco4ln39bdi.apps.googleusercontent.com">
      <div
        className="block"
        style={{
          width: topBarOn
            ? isResponsiveSize
              ? "calc(100vw)"
              : "calc(100vw - 200px)"
            : isResponsiveSize
            ? "calc(100vw)"
            : "calc(100vw)",
        }}
      >
        <div
          style={{
            zIndex: 3,
            paddingTop: topBarOn
              ? isResponsiveSize
                ? "100pt"
                : "200pt"
              : isResponsiveSize
              ? "100pt"
              : "200pt",
          }}
        >
          <Card
            style={{ maxWidth: "300pt", backgroundColor: "#3d3d3d" }}
            className="grid grid-flow-row gap-2 p-4 mx-auto"
          >
            <TextField
              style={{ backgroundColor: "whitesmoke" }}
              className="rounded-md"
              label="email/username"
            />
            <TextField
              style={{ backgroundColor: "whitesmoke" }}
              className="rounded-md"
              label="password"
            />
            <div style={{ color: "whitesmoke" }} className="text-center">
             Do you have an account ?
            </div>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
                paddingBottom: "5pt",
                paddingTop: "5pt",
              }}
            >
              Login
            </Button>
            <div style={{ color: "whitesmoke" }} className="text-center">
              or
            </div>
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
                paddingTop: "5pt",
                paddingBottom: "5pt",
              }}
            >
              Register
            </Button>
            <div className="flex mx-auto">
              <GoogleLogin
                shape="circle"
                onSuccess={responseMessage}
                onError={errorMessage}
              />
            </div>
          </Card>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};
