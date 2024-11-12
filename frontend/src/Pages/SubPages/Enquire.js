import { Size } from "components/Display/media-query";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import {
  AppFont,
  ButtonStyle,
  layoutbgcolor,
  textcolor,
} from "components/Display/AppControl";

export const Enquire = () => {
  return (
    <div
      style={{
        fontFamily: AppFont,
        fontSize: "20pt",
        backgroundColor: layoutbgcolor,
        paddingRight: "10pt",
        paddingLeft: "10pt",
        paddingBottom: "15pt",
        paddingTop: "15pt",
      }}
    >
      <div
        style={{ fontFamily: AppFont, color: textcolor }}
        className="flex align-center justify-center"
      >
        Send Us Your Enquiry!
      </div>
      <div className="flex align-center justify-center">
        <div
          style={{
            fontFamily: AppFont,
            color: textcolor,
            backgroundColor: layoutbgcolor,
            fontSize: "10pt",
          }}
          className="grid grid-rows-1 gap-1 mt-5"
        >
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div
              style={{ fontFamily: AppFont, color: textcolor }}
              className="flex align-center justify-center text-sm"
            >
              Your name (reqiured field):
            </div>
            <div
              style={{
                backgroundColor: "White",
              }}
              className="rounded-md"
            >
              <TextField size="small" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div
              style={{ fontFamily: AppFont, color: textcolor }}
              className="flex align-center justify-center text-sm"
            >
              Your email (reqiured field):
            </div>
            <div
              style={{
                backgroundColor: "White",
              }}
              className="rounded-md"
            >
              <TextField size="small" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            <div
              style={{ fontFamily: AppFont, color: textcolor }}
              className="flex align-center justify-center text-sm"
            >
              Subject:
            </div>
            <div
              style={{
                backgroundColor: "White",
              }}
              className="rounded-md"
            >
              <TextField size="small" />
            </div>
          </div>
          <div className="grid grid-rows-1 gap-2 mt-2">
            <div
              style={{ fontFamily: AppFont, color: textcolor }}
              className="flex align-center justify-center text-lg"
            >
              Your Message
            </div>
            <div
              className="flex align-center justify-center mb-5"
              style={{
                backgroundColor: "White",
              }}
            >
              <TextField fullWidth={true} size="large" />
            </div>
          </div>
          <div className="flex align-center justify-center">
            <Button
              sx={{
                color: textcolor,
                fontFamily: AppFont,
                maxWidth: "100pt",
                bgcolor: ButtonStyle,
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
