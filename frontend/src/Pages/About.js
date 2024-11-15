import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { layoutbgcolor } from "components/Display/AppControl";
import { PageFooter } from "components/Display/PageFooter";
import { AboutUsMain } from "./SubPages/AboutUs";

export const About = ({ topBarOn }) => {
  const size = Size();
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
          backgroundColor: layoutbgcolor,
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <div>
          <AboutUsMain
            topBarOn={topBarOn}
            isResponsiveSize={isResponsiveSize}
          />
        </div>
      </div>
      <div>
        <PageFooter />
      </div>
    </div>
  );
};
