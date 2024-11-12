// Service Images //
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I6.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";
///////////////////////////////

// Text color //
export const textcolor = "#cccaca";

// Background colors //
export const layoutbgcolor = "#12181a";
export const masterbgcolor = "#262c2e";

// Text font //
export const AppFont = "Roboto, sans-serif";

// Button Styling //
export const ButtonStyle = { bgcolor: "transparent", color: "whitesmoke" };

// Add company details here //
export const CompanyName = "CloudCraft";

export const CompanyTel = "+ 27 61 417 0615";

export const CompanyAddrr = "19 Ralph Crescent, Kuilsriver, Cape Town";

export const CompanyEmail = "cloudcraftEnquire.co.za";

export const SocialMediaLinks = [
  { path: "https://instagram.com/johndoe" },
  { path: "https://instagram.com/johndoe" },
  { path: "https://instagram.com/johndoe" },
  { path: "tel:"+CompanyTel },
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
  {
    service: "API Development and Integration",
    image: I5,
    text: "Unlock new possibilities by connecting your software with third-party services. Our API development and integration services make it easy to add functionality like payment processing, social media integration, and data sharing with other platforms. We design secure, efficient APIs that enable smooth data flow and automation, streamlining your workflows and enhancing productivity. Let us create a connected, unified platform for your business that can expand with new features and integrations over time.",
  },
  {
    service: "UI/UX Design Services",
    image: I6,
    text: "Make a lasting impression with an intuitive, visually engaging design that keeps users coming back. Our UI/UX design services focus on understanding your audience’s needs and crafting interfaces that offer a seamless, satisfying experience. From research and prototyping to designing every detail of your app or website, we prioritize usability, accessibility, and aesthetics. An investment in good design leads to higher engagement and retention, helping your brand stand out in a competitive market.",
  },
  {
    service: "Database Management and Development",
    image: I7,
    text: "Keep your data secure, organized, and accessible with our database management services. We design, optimize, and maintain databases that are fast, reliable, and tailored to your specific needs. With expertise across SQL, NoSQL, and more, our solutions ensure high performance, data integrity, and easy scalability, so you can rely on accurate and secure data. Let us handle your database needs, so you can focus on growing your business with confidence.",
  },
  {
    service: "Maintenance and Support Services",
    image: I8,
    text: "Launching your application is just the beginning. Our maintenance and support services give you peace of mind by ensuring your software stays up-to-date, secure, and optimized for the best performance. From routine updates to technical support and bug fixes, we’re here to keep your software running smoothly. Trust",
  },
];

export const Routes = [
  { path: "/home", name: "Home" },
  {
    path: "/aboutus",
    name: "About Us",
  },
  {
    path: "/service",
    name: "Services",
  },
  {
    path: "/contactus",
    name: "Contact Us",
  },
];
