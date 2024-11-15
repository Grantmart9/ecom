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
    service: "Custom Web Application Development",
    image: I1,
    text: "Elevate your business with a custom-built web application tailored specifically for your needs. Our team develops full-featured web solutions that blend beautiful front-end design with powerful back-end functionality, making every user interaction seamless and efficient. We handle every aspect, from user-friendly interfaces to secure server architecture, ensuring your application not only looks great but also performs reliably across all devices. Get a scalable, custom solution that grows alongside your business and adapts to the latest technology.",
  },
  {
    service: "Mobile App Development",
    image: I2,
    text: "Connect with your audience anytime, anywhere with a custom mobile app. Whether you’re targeting iOS, Android, or both, we create mobile experiences that engage users on the go. Our full-stack expertise covers every stage of app development, from UX/UI design to backend integration, to ensure your app is responsive, fast, and user-friendly. By leveraging the latest in mobile frameworks, we offer quick, cost-effective solutions that give you a direct channel to interact with customers and build loyalty.",
  },
  {
    service: "E-commerce Development",
    image: I3,
    text: "Transform your business with a high-performance, visually captivating online store. Our e-commerce solutions are designed to convert visitors into loyal customers by offering a smooth and secure shopping experience. We cover every detail, from sleek product displays to secure payment gateways and efficient order management systems. Our e-commerce solutions are built to scale, keeping your store fast, reliable, and secure as you grow. Let us help you set up a powerful online storefront that boosts your brand and drives revenue.",
  },
  {
    service: "Cloud-Based Solutions and Hosting",
    image: I4,
    text: "Embrace the cloud with confidence. We offer cloud-based solutions that improve accessibility, collaboration, and cost-efficiency, freeing you from the burden of on-premises infrastructure. Our team handles everything, from building and deploying applications on platforms like AWS or Azure to ongoing server management. We ensure your applications are secure, reliable, and capable of handling any demand, so your business can operate smoothly in the digital age. Scale seamlessly with the power of the cloud.",
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
