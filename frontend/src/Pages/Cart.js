import { Card } from "@mui/material";
import { TextField, Button } from "@mui/material";

export const Cart = ({ isResponsiveSize, topBarOn }) => {
  return (
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
          <div className="flex mx-auto"></div>
        </Card>
      </div>
    </div>
  );
};
