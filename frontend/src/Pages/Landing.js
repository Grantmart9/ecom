import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { AppFont } from "components/Display/AppControl";
import { PageFooter } from "components/Display/PageFooter";
import Ad1 from "Images/ad1.png";
import Ad2 from "Images/ad2.png";
import Ad3 from "Images/ad3.png";
import Ad4 from "Images/ad4.png";
import { ProductsSub } from "./Products";
import { motion } from "framer-motion";

// StaticAdvert component with stagger animation
const StaticAdvert = ({ isResponsiveSize, topBarOn }) => {
  const ImageList = [Ad1, Ad2, Ad3, Ad4];

  // Parent variant for stagger animation
  const parentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  // Child variants for individual staggered animation
  const itemVariants = {
    initial: { opacity: 0, y: 20 }, // Start below
    animate: (i) => ({
      opacity: 1,
      y: 0, // Move up to the final position
      transition: {
        delay: i * 0.3, // Delay for staggering
        type: "spring",
        stiffness: 100,
        damping: 40,
      },
    }),
  };

  return (
    <motion.ul
      className="grid grid-cols-4"
      style={{
        marginTop: topBarOn
          ? isResponsiveSize
            ? "0pt"
            : "47pt"
          : isResponsiveSize
          ? "42pt"
          : "47pt",
      }}
      initial="initial"
      animate="animate"
      variants={parentVariants} // Parent animation for fade-in
      transition={{ duration: 2, type: "spring" }}
    >
      {ImageList.map((item, i) => (
        <motion.li
          key={i}
          variants={itemVariants} // Apply staggered child animation
          custom={i} // Pass index for stagger delay calculation
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={item} alt={`Ad ${i}`} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export const Landing = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <StaticAdvert topBarOn={topBarOn} isResponsiveSize={isResponsiveSize} />
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
