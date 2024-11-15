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
import { ServicesSub } from "Pages/SubPages/ServicesSub";
import { Button } from "@mui/material";
import { Enquire } from "./SubPages/Enquire";
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I6 from "Images/I4.jpg";

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
          <img src={I1} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={I2} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={I3} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={I6} />
        </Button>
      </div>
    </div>
  );
};

const DynamicAdvert = ({ isResponsiveSize, topBarOn }) => {
  return (
    <div>
      <div className="grid grid-flow-col gap-0 p-2">
        <Button sx={{ padding: 0 }}>
          <img src={I1} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={I2} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={I3} />
        </Button>
        <Button sx={{ padding: 0 }}>
          <img src={I6} />
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
        <DynamicAdvert
          topBarOn={topBarOn}
          isResponsiveSize={isResponsiveSize}
        />
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
