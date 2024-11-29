// Service Images //
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";
import Ad1 from "Images/ad1.png";
import Ad2 from "Images/ad2.png";
import Ad3 from "Images/ad3.png";
import Ad4 from "Images/ad4.png";
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

// Add company details here //
export const CompanyTel = "+ 27 61 417 0615";

// Add company details here //
export const CompanyAddrr = "123 Church street, Kuilsriver";

// Add company details here //
export const CompanyEmail = "ecom.co.za";

// Add company details here //
export const SocialMediaLinks = [
  { path: "https://instagram.com/johndoe" },
  { path: "https://instagram.com/johndoe" },
  { path: "https://instagram.com/johndoe" },
  { path: "tel:" + CompanyTel },
];

// Service List //
export const ProductList = [
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

export const DealsMainPage = [
  { name: "ad1", endpoint: "/ad1", image: Ad1 },
  { name: "ad2", endpoint: "/ad2", image: Ad2 },
  { name: "ad3", endpoint: "/ad3", image: Ad3 },
  { name: "ad4", endpoint: "/ad4", image: Ad4 },
  { name: "ad5", endpoint: "/ad5", image: Ad1 },
  { name: "ad6", endpoint: "/ad6", image: Ad2 },
  { name: "ad7", endpoint: "/ad7", image: Ad3 },
  { name: "ad8", endpoint: "/ad8", image: Ad4 },
  { name: "ad9", endpoint: "/ad9", image: Ad1 },
  { name: "ad10", endpoint: "/ad10", image: Ad2 },
  { name: "ad11", endpoint: "/ad11", image: Ad3 },
  { name: "ad12", endpoint: "/ad12", image: Ad4 },
];
export const DealsLandingPage = [
  { name: "ad1", endpoint: "/ad1", image: Ad1 },
  { name: "ad2", endpoint: "/ad2", image: Ad2 },
  { name: "ad3", endpoint: "/ad3", image: Ad3 },
  { name: "ad4", endpoint: "/ad4", image: Ad4 },
  { name: "ad5", endpoint: "/ad5", image: Ad1 },
  { name: "ad6", endpoint: "/ad6", image: Ad2 },
];

export const DepartmentList = [
  { image: Ad1, API_path: "department1" },
  { image: Ad2, API_path: "department2" },
  { image: Ad3, API_path: "department3" },
  { image: Ad4, API_path: "department4" },
  { image: Ad1, API_path: "department5" },
  { image: Ad2, API_path: "department6" },
  { image: Ad1, API_path: "department5" },
  { image: Ad2, API_path: "department6" },
];
