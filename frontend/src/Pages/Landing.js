import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import {
  AppFont,
  ButtonStyle,
  CompanyName,
  pagebgcolor,
  textcolor,
} from "components/Display/AppControl";
import { PageFooter } from "components/Display/PageFooter";
import { Button } from "@mui/material";
import Ad1 from "Images/ad1.png";
import Ad2 from "Images/ad2.png";
import Ad3 from "Images/ad3.png";
import Ad4 from "Images/ad4.png";
import { ProductsSub } from "./Products";

const StaticAdvert = ({ isResponsiveSize, topBarOn }) => {
  return (
    <div
      style={{
        paddingTop: topBarOn
          ? isResponsiveSize
            ? "43pt"
            : "48pt"
          : isResponsiveSize
          ? "43pt"
          : "48pt",
      }}
    >
      <div className="grid grid-flow-col gap-0 p-2">
        <Button sx={{ padding: 0 }}>
          <img src={Ad1} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={Ad2} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={Ad3} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={Ad4} />
        </Button>
      </div>
    </div>
  );
};

export const Landing = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
          zIndex: 2,
          width: "100%",
        }}
      >
        <StaticAdvert topBarOn={topBarOn} isResponsiveSize={isResponsiveSize} />
        <ProductsSub topBarOn={topBarOn} isResponsiveSize={isResponsiveSize} />
      </div>
      <div
        style={{
          zIndex: 4,
          width: "100%",
        }}
      >
        <PageFooter />
      </div>
    </div>
  );
};
