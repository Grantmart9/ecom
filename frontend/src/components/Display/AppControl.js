// Service Images //
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";

///////////////////////////////
import HomeIcon from "@mui/icons-material/Home";

// Text color //
export const textcolor = "#4A403C";
export const layouttextcolor = "#f0f7f7";

// Background colors //
export const layoutbgcolor = "black";
export const masterbgcolor = layoutbgcolor;
export const pagebgcolor = "white";

// Text font //
export const AppFont = "Roboto, sans-serif";

// Button Styling //
export const ButtonStyle = { bgcolor: layoutbgcolor, color: layouttextcolor };

// Add company details here //
export const CompanyName = "CloudCraft";

export const CompanyTel = "+ 27 61 417 0615";

export const CompanyAddrr = "19 Ralph Crescent, Kuilsriver, Cape Town";

export const CompanyEmail = "cloudcraftEnquire.co.za";

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
];

export const Routes = [
  { path: "/home", name: "Home" },
  {
    path: "/shop",
    name: "Products",
    sub: [
      { path: "/products/all", name: "- All" },
      { path: "/products/women", name: "- Women" },
      { path: "/products/men", name: "- Men" },
      { path: "/products/kids", name: "- Kids" },
      { path: "/products/baby", name: "- Babies" },
      { path: "/products/home", name: "- Home" },
      { path: "/products/beauty", name: "- Beauty" },
    ],
  },
  {
    path: "/deals",
    name: "Deals",
    sub: [
      { path: "/deals20", name: "- 20% off" },
      { path: "/deals30", name: "- 30% off" },
      { path: "/deals50", name: "- 40% off" },
    ],
  },
  {
    path: "/contactus",
    name: "Contact Us",
  },
];
