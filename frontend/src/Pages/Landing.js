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
const StaticAdvert = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  const isResponsiveSize2 = ["XS", "SM", "MD", "L"].includes(size);

  const ImageList = [Ad1, Ad2, Ad3, Ad4];

  // Parent variant for stagger animation
  const parentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  // Child variants for individual staggered animation
  const itemVariants = {
    initial: { y: 8 }, // Start below
    animate: (i) => ({
      y: 0, // Move up to the final position
      transition: {
        delay: i * 0.21, // Delay for staggering
        type: "spring",
        stiffness: 100,
        damping: 6,
      },
    }),
  };

  return (
    <div>
      <motion.ul
        className={`grid grid-${isResponsiveSize ? "cols-2" : "cols-4"} gap-1 
    } px-2 pb-3 pt-2`}
        initial="initial"
        animate="animate"
        style={{
          marginTop: topBarOn
            ? isResponsiveSize
              ? "0pt"
              : isResponsiveSize2
              ? "0pt"
              : "47pt"
            : isResponsiveSize
            ? "42pt"
            : "47pt",
        }}
        variants={parentVariants} // Parent animation for fade-in
        transition={{ duration: 1, type: "spring" }}
      >
        {ImageList.map((item, i) => (
          <motion.li
            style={{ backgroundColor: "black", padding: 3 }}
            className="rounded-sm"
            key={i}
            variants={itemVariants} // Apply staggered child animation
            custom={i} // Pass index for stagger delay calculation
            delay={3}
            whileHover={{ scale: 1.043 }}
            whileTap={{ scale: 1.0 }}
          >
            <img src={item} alt={`Ad ${i}`} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
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
      <div
        style={{ width: "100%", marginBottom: "10pt" }}
        className="flex text-center justify-center"
      >
        <motion.div
          initial={{ width: "0%", backgroundColor: "transparent" }}
          animate={{
            width: "50%",
            backgroundColor: "black",
          }}
          transition={{
            duration: 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="rounded-sm shadow-md"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            fontSize: isResponsiveSize ? "14pt" : "20pt",
            fontWeight: "lighter",
            fontFamily: AppFont,
            color: "whitesmoke",
          }}
        >
          RECENTLY ADDED
        </motion.div>
      </div>
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
