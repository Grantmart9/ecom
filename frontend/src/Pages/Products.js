import React, { useEffect } from "react";
import { Size } from "components/Display/media-query";
import { PageFooter } from "components/Display/PageFooter";
import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { pagebgcolor, textcolor } from "components/Display/AppControl";
import { ServiceList } from "components/Display/AppControl";
import Button from "@mui/material/Button";
import { motion } from "motion/react";

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
        className={`grid grid-${isResponsiveSize ? "rows-1" : "cols-3"} gap-3`}
      >
        {ServiceList.map((service, i) => (
          <motion.h1
            initial={{ opacity: "0%" }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "linear",
              type:"tween",
              delay: 2,
            }}
          >
            <Card key={i}>
              <Button style={{ textTransform: "none" }}>
                <img src={service.image} alt="No File" />
              </Button>
              <CardContent>
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
          </motion.h1>
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
