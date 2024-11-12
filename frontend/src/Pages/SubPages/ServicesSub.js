import { Size } from "../../components/Display/media-query";
import { Fade } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { layoutbgcolor, textcolor } from "components/Display/AppControl";
import { ServiceList } from "components/Display/AppControl";

export const ServicesSub = () => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <Fade in={true} timeout={1800}>
      <div
        style={{
          backgroundColor: layoutbgcolor,
          paddingLeft: "10pt",
          paddingRight: "10pt",
        }}
      >
        <div
          style={{ color: textcolor }}
          className="text-2xl font-bold text-center justify-center pt-5 pb-5"
        >
          Services
        </div>
        <div
          className={`grid grid-${
            isResponsiveSize ? "rows-1" : "cols-3"
          } gap-2`}
        >
          {ServiceList.map((service, i) => (
            <Card key={i}>
              <img src={service.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.service}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {service.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export const ServicesSubMain = ({topBarOn}) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD", "L"].includes(size);

  return (
    <Fade in={true} timeout={1800}>
      <div
        style={{
          backgroundColor: layoutbgcolor,
          paddingLeft: "10pt",
          paddingRight: "10pt",
          paddingTop: topBarOn
            ? isResponsiveSize
              ? "50pt"
              : "80pt"
            : isResponsiveSize
            ? "50pt"
            : "80pt",
        }}
      >
        <div
          style={{ color: textcolor }}
          className="text-2xl font-bold text-center justify-center pb-5"
        >
          Services
        </div>
        <div
          className={`grid grid-${
            isResponsiveSize ? "rows-1" : "cols-3"
          } gap-2`}
        >
          {ServiceList.map((service, i) => (
            <Card key={i}>
              <img src={service.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.service}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {service.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Fade>
  );
};
