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
import { motion } from "motion/react";

const StaticAdvert = ({ isResponsiveSize, topBarOn }) => {
  const scale = 1.05;
  const isVisible = false;
  return (
    <div
      className="grid grid-cols-4 gap-0 px-3"
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
      <motion.div
        whileHover={{ scale: scale }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <Button sx={{ padding: 0 }}>
          <img src={Ad1} />
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: scale }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <Button sx={{ padding: 0 }}>
          <img src={Ad2} />
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: scale }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <Button sx={{ padding: 0 }}>
          <img src={Ad3} />
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: scale }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <Button sx={{ padding: 0 }}>
          <img src={Ad4} />
        </Button>
      </motion.div>
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
