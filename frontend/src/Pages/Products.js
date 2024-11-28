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
import { AppFont } from "components/Display/AppControl";

const Departments = ({ topBarOn, setAPIPath }) => {
  const size = Size();

  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

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
        marginLeft: "10pt",
        marginRight: isResponsiveSize ? "10pt" : "0pt",
      }}
    >
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
          DEPARTMENTS
        </motion.div>
      </div>{" "}
      <div
        className={`grid ${
          isResponsiveSize ? "grid-cols-2" : "grid-cols-6"
        } gap-3 min-h-full mt-3`}
      >
        {DepartmentList.map((item, i) => (
          <div>
            <motion.ul
              variants={itemVariants} // Apply staggered child animationƒ
              key={i}
              className="flex flex-col min-h-full"
              initial={{ top: 0, left: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 5,
                type: "tween",
                delay: 1,
              }}
            >
              <motion.li
                className="rounded-sm"
                key={i}
                variants={itemVariants} // Apply staggered child animation
                custom={i} // Pass index for stagger delay calculation
                delay={3}
                whileHover={{ scale: 1.045 }}
                whileTap={{ scale: 0.94 }}
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
            </motion.ul>
          </div>
        ))}
      </div>
    </div>
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
        className={`grid ${
          isResponsiveSize ? "grid-cols-1" : "grid-cols-4"
        } gap-3 min-h-full mt-3`}
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
                whileTap={{ scale: 0.9 }}
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
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

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
      <div
        style={{
          paddingTop: topBarOn
            ? isResponsiveSize
              ? "10pt"
              : "60pt"
            : isResponsiveSize
            ? "50pt"
            : "60pt",
          paddingLeft: isResponsiveSize ? "5pt" : "10pt",
        }}
      ></div>
      <Departments
        topBarOn={topBarOn}
        refetch={(newPath) => refetch} // Ensure refetch is passed here
      />
      <ProductsSub topBarOn={topBarOn} />
      <PageFooter />
    </div>
  );
};
