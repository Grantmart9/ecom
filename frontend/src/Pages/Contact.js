import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { ContactUs } from "./SubPages/ContactUs";
import { Enquire } from "./SubPages/Enquire";
import { layoutbgcolor } from "components/Display/AppControl";
import Vid from "Videos/Vid.mp4";
import ContactImage from "Images/icon.png";
import { SocialMediaIcons } from "components/Display/SocialMedia";

export const Contact = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);
  // const [y, setY] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => setY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventLitener("scroll", handleScroll);
  // }, []);

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
        paddingTop: topBarOn
          ? isResponsiveSize
            ? "10pt"
            : "0pt"
          : isResponsiveSize
          ? "0pt"
          : "0pt",
      }}
    >
      <div>
        <video
          autoPlay
          muted
          loop
          style={{
            zIndex: 1,
            width: "100%",
          }}
          src={Vid}
        />
      </div>
      <div
        style={{
          zIndex: 3,
          width: "100%",
        }}
        className="grid md:grid-cols-2 gap-0"
      >
        <div>
          <Enquire />
        </div>

        <div
          className="grid grid-rows-2 gap-2"
          style={{ backgroundColor: layoutbgcolor }}
        >
          <ContactUs
            topBarOn={topBarOn}
            isResponsiveSize={isResponsiveSize}
          />
          <div>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
};
