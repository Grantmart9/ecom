import React from "react";
import { layoutbgcolor } from "./AppControl";
import { AboutUs } from "Pages/SubPages/AboutUs";
import { ContactUs } from "Pages/SubPages/ContactUs";
import { SocialMediaIcons } from "./SocialMedia";

export const PageFooter = () => {
  return (
    <div
      style={{
        backgroundColor: layoutbgcolor,
        paddingBottom: "30pt",
        paddingTop: "30pt",
      }}
      className="grid sm:grid-cols-3 gap-2"
    >
      <AboutUs />
      <SocialMediaIcons />
      <ContactUs />
    </div>
  );
};
