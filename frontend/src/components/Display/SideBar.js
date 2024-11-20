import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  layoutbgcolor,
  layouttextcolor,
  Routes,
} from "components/Display/AppControl";
import { Size } from "components/Display/media-query";
import { AppFont, ButtonStyle } from "./AppControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Slide from "@mui/material/Slide";

const DepartmentButton = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);
  const [subMOn, setSubMOn] = useState(false);

  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <div className="flex align-center justify-center">
        <AccordionSummary
          onClick={() => setSubMOn(!subMOn)}
          style={{
            color: layouttextcolor,
            fontSize: isResponsiveSize ? "7pt" : "10pt",
            fontFamily: AppFont,
            fontWeight: "bold",
          }}
          sx={{ boxShadow: "none" }}
        >
          {Routes[1].name}
        </AccordionSummary>
      </div>
      <Slide
        in={isResponsiveSize ? subMOn : true}
        direction="down"
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 1)",
          exit: "ease",
        }}
      >
        <AccordionDetails
          className="grid grid-flow-row gap-1 mt-1"
          sx={{
            boxShadow: "none",
            position: isResponsiveSize ? "fixed" : "inherit",
            marginTop: isResponsiveSize ? "22pt" : 0,
            backgroundColor: layoutbgcolor,
          }}
        >
          {Routes[1].sub.map((button, i) => (
            <Button
              key={i}
              href={button.path}
              sx={ButtonStyle}
              className="flex align-center justify-center"
              onClick={setTopBarOn}
              style={{
                textTransform: "none",
              }}
            >
              <div
                style={{
                  fontFamily: AppFont,
                  color: layouttextcolor,
                  fontWeight: "bold",
                  fontSize: isResponsiveSize ? "7pt" : "10pt",
                }}
              >
                {button.name}
              </div>
            </Button>
          ))}
        </AccordionDetails>
      </Slide>
    </Accordion>
  );
};

const DealsButton = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);
  const [subMOn, setSubMOn] = useState(false);

  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <div className="flex align-center justify-center">
        <AccordionSummary
          onClick={() => setSubMOn(!subMOn)}
          style={{
            color: layouttextcolor,
            fontSize: isResponsiveSize ? "7pt" : "10pt",
            fontFamily: AppFont,
            fontWeight: "bold",
          }}
          sx={{ boxShadow: "none" }}
        >
          {Routes[2].name}
        </AccordionSummary>
      </div>
      <Slide
        in={isResponsiveSize ? subMOn : true}
        direction="down"
        easing={{
          enter: "cubic-bezier(0, 1.5, .8, 1)",
          exit: "ease",
        }}
      >
        <AccordionDetails
          className="grid grid-flow-row gap-1 mt-1"
          sx={{
            boxShadow: "none",
            position: isResponsiveSize ? "fixed" : "inherit",
            marginTop: isResponsiveSize ? "10pt" : 0,
            backgroundColor: layoutbgcolor,
          }}
        >
          {Routes[2].sub.map((button, i) => (
            <Button
              key={i}
              href={button.path}
              sx={ButtonStyle}
              className="flex align-center justify-center"
              onClick={setTopBarOn}
              style={{
                textTransform: "none",
              }}
            >
              <div
                style={{
                  fontFamily: AppFont,
                  color: layouttextcolor,
                  fontWeight: "bold",
                  fontSize: isResponsiveSize ? "7pt" : "10pt",
                }}
              >
                {button.name}
              </div>
            </Button>
          ))}
        </AccordionDetails>
      </Slide>
    </Accordion>
  );
};

export const SideBar = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <div
      style={{ backgroundColor: "black" }}
      className={`grid grid-${isResponsiveSize ? "cols-4" : "row-span-1"} gap-2 
      } px-2 pb-3 pt-2`}
    >
      <Button
        href={Routes[0].path}
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
            fontWeight: "bold",
            fontSize: isResponsiveSize ? "7pt" : "10pt",
          }}
        >
          {Routes[0].name}
        </div>
      </Button>
      <DepartmentButton
        setTopBarOn={setTopBarOn}
        isResponsiveSize={isResponsiveSize}
      />
      <DealsButton
        setTopBarOn={setTopBarOn}
        isResponsiveSize={isResponsiveSize}
      />
      <Button
        href={Routes[3].path}
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
            fontWeight: "bold",
            fontSize: isResponsiveSize ? "7pt" : "10pt",
          }}
        >
          {Routes[3].name}
        </div>
      </Button>
    </div>
  );
};
