import { CardContent, Card, Typography } from "@mui/material";

import {
  CompanyAddrr,
  CompanyEmail,
  CompanyTel,
  layoutbgcolor,
  layouttextcolor,
} from "components/Display/AppControl";

export const Cart = () => {
  return (
    <div className="flex align-center justify-center my-auto">
      <Card sx={{ backgroundColor: layoutbgcolor, boxShadow: "none" }}>
        <CardContent
          className="flex align-center justify-center"
          sx={{ color: layouttextcolor }}
        >
          Contact Us
        </CardContent>
        <Typography
          className="grid grid-flow-row gap-0"
          sx={{ color: layouttextcolor }}
        >
          <div className="flex text-center justify-center">{CompanyTel}</div>
          <div className="flex text-center justify-center">{CompanyAddrr}</div>
          <div className="flex text-center justify-center">{CompanyEmail}</div>
        </Typography>
      </Card>
    </div>
  );
};