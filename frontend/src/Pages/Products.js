import React, { useEffect, useState } from "react";
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
import Ad1 from "Images/ad1.png";
import Ad2 from "Images/ad2.png";
import Ad3 from "Images/ad3.png";
import Ad4 from "Images/ad4.png";
import { useAxios } from "components/API/Axios";

const Departments = ({ topBarOn, setAPIPath }) => {
  const size = Size();

  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  const isResponsiveSize2 = ["XS", "SM", "MD", "L"].includes(size);

  const DepartmentList = [
    { image: Ad1, API_path: "department1" },
    { image: Ad2, API_path: "department2" },
    { image: Ad3, API_path: "department3" },
    { image: Ad4, API_path: "department4" },
    { image: Ad1, API_path: "department5" },
    { image: Ad2, API_path: "department6" },
    { image: Ad1, API_path: "department5" },
    { image: Ad2, API_path: "department6" },
  ];

  const FetchDepartments = ({ newPath }) => {
    console.log(newPath);
    // setUrl(newPath); // Update the URL state
    // refetch(); // Trigger a refetch for the new API path
  };

  return (
    <Card className="mx-2.5 mb-3">
      <motion.CardContent
        className={`grid grid-${
          isResponsiveSize ? "cols-2" : "cols-6"
        } gap-1 px-2.5 pt-3`}
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
        transition={{ duration: 1, type: "spring" }}
      >
        {DepartmentList.map((item, i) => (
          <motion.li
            key={i}
            whileHover={{ scale: 1.045 }}
            whileTap={{ scale: 0.92 }}
            className="flex align-center justify-center"
            onClick={FetchDepartments(item.API_path)} // Update the URL state
          >
            <img
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                overflow: "hidden",
                marginBottom: "10pt",
              }}
              src={item.image}
              alt={`Ad ${i}`}
            />
          </motion.li>
        ))}
      </motion.CardContent>
    </Card>
  );
};

export const ProductsSub = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

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
  const [url, setUrl] = useState(""); // Initialize URL state

  // Call the custom useAxios hook
  const { data, loading, error, refetch } = useAxios(
    `http://127.0.0.1:5000/${url}`, // Dynamic URL
    "GET",
    {},
    false // Disable auto-fetch to rely on manual refetch
  );

  return (
    <div>
      <Departments
        topBarOn={topBarOn}
        refetch={(newPath) => refetch} // Ensure refetch is passed here
      />
      <ProductsSub topBarOn={topBarOn} />
      <PageFooter />
    </div>
  );
};
