import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpeg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I6.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";
import { layoutbgcolor, textcolor } from "components/Display/AppControl";

export const AboutUs = () => {
  return (
    <div className="flex align-center justify-center my-auto">
      <Card style={{ backgroundColor: layoutbgcolor, boxShadow: "none" }}>
        <CardContent
          className="flex align-center justify-center"
          sx={{ color: textcolor }}
        >
          About Us
        </CardContent>
        <CardContent
          className="flex text-center justify-center"
          sx={{ color: textcolor }}
        >
          We transform ideas into innovative software solutions with a focus on
          exceptional user experiences. Our experienced team delivers tailored
          web and app development, ensuring high-quality, scalable products with
          ongoing support. Partner with us to bring your vision to life.
        </CardContent>
      </Card>
    </div>
  );
};

export const AboutUsMain = ({ topBarOn, isResponsiveSize }) => {
  const WovenImageList = () => {
    const itemData = [
      {
        img: I1,
      },
      {
        img: I2,
      },
      {
        img: I3,
      },
      {
        img: I4,
      },
      {
        img: I5,
      },
      {
        img: I6,
      },
      {
        img: I7,
      },
      {
        img: I8,
      },
    ];

    return (
      <ImageList sx={{ padding: "20pt" }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  };

  return (
    <div
      style={{
        paddingTop: topBarOn
          ? isResponsiveSize
            ? "50pt"
            : "80pt"
          : isResponsiveSize
          ? "50pt"
          : "80pt",
      }}
      sx={{ backgroundColor: layoutbgcolor }}
      className="rounded-md"
    >
      <div sx={{ color: textcolor }}>
        <div className="grid md:grid-cols-2 gap-0">
          <div
            style={{ color: textcolor }}
            className="text-center justify-center p-4"
          >
            <div>
              At Cloudcraft, we specialize in transforming ideas into
              exceptional digital experiences. As a team of seasoned full-stack
              software developers and dedicated front-end specialists, we
              combine technical excellence with a passion for user-centric
              design. Our goal is to create innovative software solutions that
              not only meet your business needs but also deliver intuitive,
              engaging experiences for your users.
            </div>
            <div className="mt-3">
              From custom web applications to enterprise-grade solutions, we
              focus on delivering high-quality products that are scalable,
              secure, and easy to use. Our team works collaboratively with you
              from concept to launch, ensuring that every project is tailored to
              your specific requirements and goals.
            </div>
            <div className="mt-3">
              After delivery, we provide ongoing support to ensure your systems
              continue to perform optimally. Whether you're a startup aiming to
              make an impact or an established business seeking to modernize,
              Cloudcraft is your trusted partner for navigating the digital
              landscape.
            </div>
            <div className="mt-3">
              We are committed to helping you drive growth, enhance user
              experiences, and stay ahead of the curve in a fast-evolving
              market. Explore our services, check out our portfolio, and see how
              Cloudcraft can help you bring your vision to life.
            </div>
          </div>
          <div>
            <WovenImageList />
          </div>
        </div>
      </div>
    </div>
  );
};
