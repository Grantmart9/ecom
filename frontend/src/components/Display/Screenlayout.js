import React, { useState } from "react";
import { TopBar } from "components/Display/TopBar";
import { ScreenLayoutInner } from "./ScreenLayoutInner";
import { SideBar } from "./SideBar";
import { Slide } from "@mui/material";
import { Size } from "components/Display/media-query";
import { layoutbgcolor, masterbgcolor } from "./AppControl";

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
        backgroundColor:masterbgcolor
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
                    left: 0, // Align to the left edge
                    right: 0, // Stretch to the right edge
                    zIndex: 1000, // Ensure it’s on top of other content
                    backgroundColor: layoutbgcolor,
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div>
                <ScreenLayoutInner className="h-screen" topBarOn={topBarOn} />
              </div>
            </div>
          ) : (
            <div>
              <Slide in={true} direction="right" timeout={1200}>
                <div
                  style={{
                    position: "fixed",
                    height: "100vh",
                    paddingTop: "40pt",
                    width: "200px",
                    zIndex: 1000, // Ensure it’s on top of other content
                    backgroundColor: layoutbgcolor,
                  }}
                >
                  <SideBar setTopBarOn={toggleTopBar} />
                </div>
              </Slide>
              <div
                style={{
                  marginLeft: "200px",
                  height: "100vh",
                }}
              >
                <ScreenLayoutInner className="h-screen" topBarOn={topBarOn} />
              </div>
            </div>
          )}
        </div>
      )}
      {!topBarOn && (
        <div>
          <ScreenLayoutInner className="h-screen" topBarOn={topBarOn} />
        </div>
      )}
    </div>
  );
};
