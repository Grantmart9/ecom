import React from "react";
import { Button } from "@mui/material";
import { layoutbgcolor, layouttextcolor, Routes, textcolor } from "components/Display/AppControl";
import { Size } from "components/Display/media-query";
import { AppFont, ButtonStyle } from "./AppControl";

export const SideBar = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  return (
    <div
      className={`grid grid-${
        isResponsiveSize ? "cols-4" : "row-span-1"
      } gap-1 mt-${isResponsiveSize ? "16" : "20"} rounded-${
        isResponsiveSize ? "b-md" : "r-md"
      } px-2 pb-3 pt-2`}
    >
      {Routes.map((page) => (
        <div className="flex align-center justify-center">
          <Button
            key={page.path} // Add a key prop for better list rendering
            href={page.path}
            sx={ButtonStyle}
            onClick={setTopBarOn}
            style={{
              textTransform: "none",
            }}
          >
            <div
              style={{
                fontFamily: AppFont,
                color:layouttextcolor,
                fontWeight:"bold",
                fontSize: isResponsiveSize ? "5pt" : "10pt",
              }}
            >
              {page.name}
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
};
