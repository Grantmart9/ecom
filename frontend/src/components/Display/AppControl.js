// Service Images //
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";
import RedeemIcon from "@mui/icons-material/Redeem";
import HouseIcon from "@mui/icons-material/House";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CallIcon from "@mui/icons-material/Call";

// Text color //
export const textcolor = "#4A403C";
export const layouttextcolor = "#f0f7f7";

// Background colors //
export const layoutbgcolor = "black";
export const masterbgcolor = layoutbgcolor;
export const pagebgcolor = "white";

// Text font //
export const AppFont = "Geist, sans-serif;";

// Button Styling //
export const ButtonStyle = { bgcolor: layoutbgcolor, color: layouttextcolor };

// Add company details here //
export const CompanyName = "ecom";

export const CompanyTel = "+ 27 61 417 0615";

export const CompanyAddrr = "123 Church street, Kuilsriver";

export const CompanyEmail = "ecom.co.za";

export const SocialMediaLinks = [
  { path: "https://instagram.com/johndoe" },
  { path: "https://instagram.com/johndoe" },
  { path: "https://instagram.com/johndoe" },
  { path: "tel:" + CompanyTel },
];

// Service List //
export const ServiceList = [
  {
    service: "CHUCKLES® Malted Puffs in Milk Chocolate Bulk Pack 250 g",
    image: I1,
    text: "R 3250,99",
  },
  {
    service: "CHUCKLES® Peanuts in Milk Chocolate 150 g",
    image: I2,
    text: "R 3958,99",
  },
  {
    service: "Lindt Les Grandes 34 % Hazelnut Dark Chocolate 150 g",
    image: I3,
    text: "R 389,99",
  },
  {
    service: "Dark Chocolate Cocoa Dusted Truffles 170 g",
    image: I4,
    text: "R 376,99",
  },
  {
    service: "CHUCKLES® Malted Puffs in Milk Chocolate Bulk Pack 250 g",
    image: I1,
    text: "R 3250,99",
  },
  {
    service: "CHUCKLES® Peanuts in Milk Chocolate 150 g",
    image: I2,
    text: "R 3958,99",
  },
  {
    service: "Lindt Les Grandes 34 % Hazelnut Dark Chocolate 150 g",
    image: I3,
    text: "R 389,99",
  },
  {
    service: "Dark Chocolate Cocoa Dusted Truffles 170 g",
    image: I4,
    text: "R 376,99",
  },
];

export const Routes = [
  {
    path: "/home",
    name: (
      <>
        <HouseIcon />
      </>
    ),
    tooltip: "Home",
  },
  {
    path: "/shop",
    name: (
      <>
        <RedeemIcon />
      </>
    ),
    tooltip: "Products",
  },
  {
    path: "/deals",
    name: (
      <>
        <LocalOfferIcon />
      </>
    ),
    tooltip: "Deals",
  },
  {
    path: "/contactus",
    name: (
      <>
        <CallIcon />
      </>
    ),
    tooltip: "Contact Us",
  },
];
