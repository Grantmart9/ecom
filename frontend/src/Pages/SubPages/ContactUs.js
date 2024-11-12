import { CardContent, Card } from "@mui/material";
import {
  CompanyAddrr,
  CompanyEmail,
  CompanyTel,
  layoutbgcolor,
  textcolor,
} from "components/Display/AppControl";

export const ContactUs = () => {
  return (
    <div className="flex align-center justify-center my-auto">
      <Card sx={{ backgroundColor: layoutbgcolor, boxShadow: "none" }}>
        <CardContent
          className="flex align-center justify-center"
          sx={{ color: textcolor }}
        >
          Contact Us
        </CardContent>
        <CardContent
          className="grid grid-flow-row gap-0"
          sx={{ color: textcolor }}
        >
          <div className="flex text-center justify-center">{CompanyTel}</div>
          <div className="flex text-center justify-center">{CompanyAddrr}</div>
          <div className="flex text-center justify-center">{CompanyEmail}</div>
        </CardContent>
      </Card>
    </div>
  );
};
