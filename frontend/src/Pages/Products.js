import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { PageFooter } from "components/Display/PageFooter";
import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { pagebgcolor } from "components/Display/AppControl";
import { ServiceList } from "components/Display/AppControl";
import Button from "@mui/material/Button";
import { motion } from "framer-motion"; // Use framer-motion for animations

export const ProductsSub = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  // Parent variant for stagger animation
  const parentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  // Child variants for individual staggered animation
  const itemVariants = {
    initial: { y: 25 }, // Start below
    animate: (i) => ({
      y: 0, // Move up to the final position
      transition: {
        delay: i * 0.21, // Delay for staggering
        type: "spring",
        stiffness: 100,
        damping: 3.6,
      },
    }),
  };

  return (
    <div
      style={{
        backgroundColor: pagebgcolor,
        paddingLeft: "7pt",
        paddingRight: "7pt",
        paddingBottom: "7pt",
      }}
    >
      <div
        className={`grid ${
          isResponsiveSize ? "grid-cols-1" : "grid-cols-4"
        } gap-3 min-h-full`}
      >
        {ServiceList.map((service, i) => (
          <motion.ul
            variants={itemVariants} // Apply staggered child animationƒ
            key={i}
            className="flex flex-col min-h-full"
            initial={{ top: 0, left: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              type: "tween",
              delay: 0.3,
            }}
          >
            <Card className="flex-grow">
              <motion.li
                className="rounded-sm"
                key={i}
                variants={itemVariants} // Apply staggered child animation
                custom={i} // Pass index for stagger delay calculation
                delay={3}
                whileHover={{ scale: 1.045 }}
                whileTap={{ scale: 0.94 }}
              >
                <img src={service.image} alt="No File" className="w-full" />
              </motion.li>
              <CardContent className="flex-grow">
                <Typography gutterBottom variant="h5" component="div">
                  {service.service}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {service.text}
                </Typography>
              </CardContent>
              <CardActions className="flex align-center justify-center">
                <Button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </motion.ul>
        ))}
      </div>
    </div>
  );
};

export const Products = ({ topBarOn }) => {
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
          paddingTop: topBarOn
            ? isResponsiveSize
              ? "0pt"
              : "48pt"
            : isResponsiveSize
            ? "45pt"
            : "48pt",
        }}
      >
        <ProductsSub topBarOn={topBarOn} />
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
