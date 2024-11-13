import React from "react";
import { Button } from "@mui/material";
import {
  layoutbgcolor,
  layouttextcolor,
  Routes,
  textcolor,
} from "components/Display/AppControl";
import { Size } from "components/Display/media-query";
import { AppFont, ButtonStyle } from "./AppControl";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ShopByDeppartment = ({ setTopBarOn, isResponsiveSize }) => {
  return (
    <>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            color: layouttextcolor,
            fontSize: "10pt",
            fontFamily: AppFont,
            fontWeight: "bold",
          }}
        >
          {Routes[1].name}
        </AccordionSummary>
        <AccordionDetails>
          {Routes[1].sub.map((button, i) => (
            <Button
              key={i}
              href={button.path}
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
                  fontSize: isResponsiveSize ? "5pt" : "10pt",
                }}
              >
                {button.name}
              </div>
            </Button>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            color: layouttextcolor,
            fontSize: "10pt",
            fontFamily: AppFont,
            fontWeight: "bold",
          }}
        >
          {Routes[2].name}
        </AccordionSummary>
        <AccordionDetails>
          {Routes[2].sub.map((button, i) => (
            <Button
              key={i}
              href={button.path}
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
                  fontSize: isResponsiveSize ? "5pt" : "10pt",
                }}
              >
                {button.name}
              </div>
            </Button>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export const SideBar = ({ setTopBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <div
      className={`grid grid-${
        isResponsiveSize ? "cols-4" : "row-span-1"
      } gap-1 mt-${isResponsiveSize ? "16" : "20"} rounded-${
        isResponsiveSize ? "b-md" : "r-md"
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
            fontSize: isResponsiveSize ? "5pt" : "10pt",
          }}
        >
          {Routes[0].name}
        </div>
      </Button>
      <ShopByDeppartment
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
            fontSize: isResponsiveSize ? "5pt" : "10pt",
          }}
        >
          {Routes[3].name}
        </div>
      </Button>
    </div>
  );
};
