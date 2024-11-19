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
import { Button, ImageList } from "@mui/material";
import Ad1 from "Images/ad1.png";
import Ad2 from "Images/ad2.png";
import Ad3 from "Images/ad3.png";
import Ad4 from "Images/ad4.png";
import { ProductsSub } from "./Products";
import { motion, stagger } from "motion/react";

const StaticAdvert = ({ isResponsiveSize, topBarOn }) => {
  const ImageList = [Ad1, Ad2, Ad3, Ad4];
  const scale = 1.05;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };
  return (
    <div
      className="px-3"
      style={{
        paddingTop: topBarOn
          ? isResponsiveSize
            ? "55pt"
            : "55pt"
          : isResponsiveSize
          ? "55pt"
          : "55pt",
      }}
    >
      <motion.ul
        className="grid grid-cols-4 gap-1"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {ImageList.map((item, i) => (
          <motion.li
            whileHover={{ scale: scale }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}
            key={i}
            variants={item}
          >
            <img src={item} />
          </motion.li>
        ))}
      </motion.ul>
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
          zIndex: 3,
          width: "100%",
        }}
      >
        <StaticAdvert topBarOn={topBarOn} isResponsiveSize={isResponsiveSize} />
      </div>
      <div
        style={{
          zIndex: 2,
          width: "100%",
          paddingTop: "10pt",
        }}
      >
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
