import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { PageFooter } from "components/Display/PageFooter";
import { ServicesSubMain } from "./SubPages/ServicesSub";

export const Services = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

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
        <ServicesSubMain topBarOn={topBarOn} />
      </div>
      <div
        style={{
          zIndex: 3,
          width: "100%",
        }}
      >
        <PageFooter />
      </div>
    </div>
  );
};
