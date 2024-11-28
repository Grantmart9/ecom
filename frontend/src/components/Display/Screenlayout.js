import React, { useState } from "react";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { SideBar } from "./SideBar";
import { Slide } from "@mui/material";
import { Size } from "components/Display/media-query";
import { layoutbgcolor } from "./AppControl";
import { motion } from "motion/react";

export const ScreenLayout = () => {
  const size = Size();
  const [topBarOn, setTopBarOn] = useState(false);

  const toggleTopBar = () => {
    setTopBarOn((prev) => !prev);
  };

  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <TopBar setTopBarOn={toggleTopBar} />
      {topBarOn && (
        <div>
          {isResponsiveSize ? (
            <div>
              <motion.menu
                initial={{ y: "-100%", marginTop: 0 }}
                animate={{
                  y: "0pt",
                  marginTop: "40pt",
                }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
              >
                <SideBar setTopBarOn={toggleTopBar} />
              </motion.menu>
              <ScreenLayoutInner topBarOn={topBarOn} />
            </div>
          ) : (
            <div>
              <Slide in={true} direction="right" timeout={1200}>
                <div
                  style={{
                    position: "fixed",
                    paddingTop: "calc(100vh - (80/100*100vh)",
                    width: "80px",
                    zIndex: 1000, // Ensure it’s on top of other content
                    backgroundColor: layoutbgcolor,
                    height: "100vh",
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div
                style={{
                  marginLeft: "80px",
                }}
              >
                <ScreenLayoutInner topBarOn={topBarOn} />
              </div>
            </div>
          )}
        </div>
      )}
      {!topBarOn && (
        <div>
          <ScreenLayoutInner topBarOn={topBarOn} />
        </div>
      )}
    </div>
  );
};
