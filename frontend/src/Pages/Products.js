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
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <div
      style={{
        backgroundColor: pagebgcolor,
        paddingLeft: "10pt",
        paddingRight: "10pt",
        paddingBottom: "10pt",
      }}
    >
      <div
        className={`grid ${
          isResponsiveSize ? "grid-cols-1" : "grid-cols-4"
        } gap-3 min-h-full`}
      >
        {ServiceList.map((service, i) => (
          <motion.div
            key={i}
            className="flex flex-col min-h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              type: "tween",
              delay: 1,
            }}
          >
            <Card className="flex-grow">
              <img src={service.image} alt="No File" className="w-full" />
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
          </motion.div>
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
              ? "48pt"
              : "48pt"
            : isResponsiveSize
            ? "48pt"
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
