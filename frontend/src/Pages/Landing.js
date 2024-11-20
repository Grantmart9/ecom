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
import { easeInOut, motion, stagger } from "motion/react";

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
    <motion.ul
      className="grid grid-cols-4 mb-16"
      variants={container}
      initial={{ y: "0pt", opacity: 0 }}
      animate={{ y: isResponsiveSize ? "43pt" : "50pt", opacity: 1 }}
      transition={{ duration: 1, ease: "circIn" }}
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
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 1,
          repeatType: "mirror",
          repeat: 0,
        }}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: isResponsiveSize ? "20pt" : "40pt",
          fontWeight: "bold",
          fontFamily: AppFont,
        }}
        className="flex text-center justify-center "
      >
        Recently added
      </motion.h1>
      <div
        style={{
          zIndex: 4,
          width: "100%",
        }}
      >
        <ProductsSub />
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
