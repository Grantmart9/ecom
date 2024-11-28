import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { layouttextcolor, Routes } from "components/Display/AppControl";
import { Size } from "components/Display/media-query";
import { AppFont, ButtonStyle } from "./AppControl";

export const SideBar = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <div
      style={{ backgroundColor: "black" }}
      className={`grid grid-${isResponsiveSize ? "cols-4" : "row-span-1"} gap-${isResponsiveSize ? "4" : "7"} 
      } px-2 pb-3`}
    >
      {Routes.map((pagedetails) => (
        <Tooltip title={pagedetails.tooltip}>
          <IconButton
            href={pagedetails.path}
            sx={ButtonStyle}
            onClick={setTopBarOn}
            style={{
              textTransform: "none",
            }}
          >
            <div
              style={{
                fontFamily: AppFont,
                color: layouttextcolor,
                fontWeight: "lighter",

                fontSize: isResponsiveSize ? "7pt" : "10pt",
              }}
            >
              {pagedetails.name}
            </div>
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
};
