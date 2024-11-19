import React, { useState } from "react";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { SideBar } from "./SideBar";
import { Slide } from "@mui/material";
import { Size } from "components/Display/media-query";
import { layoutbgcolor } from "./AppControl";

export const ScreenLayout = () => {
  const size = Size();
  const [topBarOn, setTopBarOn] = useState(false);

  const toggleTopBar = () => {
    setTopBarOn((prev) => !prev);
  };

  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);
  const isResponsiveSize2 = ["XS", "SM", "MD"].includes(size);

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
              <Slide in={true} timeout={1200} direction={"down"}>
                <div
                  style={{
                    position: "fixed",
                    top: 0, // Ensure it's at the top of the viewport
                    left: isResponsiveSize2 ? 10 : 23, // Align to the left edge
                    right: isResponsiveSize2 ? 10 : 23, // Stretch to the right edge
                    zIndex: 1000, // Ensure it’s on top of other content
                    backgroundColor: layoutbgcolor,
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div>
                <ScreenLayoutInner topBarOn={topBarOn} />
              </div>
            </div>
          ) : (
            <div>
              <Slide in={true} direction="right" timeout={1200}>
                <div
                  style={{
                    position: "fixed",
                    paddingTop: "40pt",
                    width: "200px",
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
                  marginLeft: "200px",
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
