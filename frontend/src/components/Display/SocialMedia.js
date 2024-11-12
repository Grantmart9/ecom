import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SocialMediaLinks, textcolor } from "./AppControl";
import { Button } from "@mui/material";

export const SocialMediaIcons = () => {
  return (
    <div className="flex align-center justify-center">
      <div className="grid grid-cols-4 gap-7 my-auto">
        <Button href={SocialMediaLinks[0].path}>
          <InstagramIcon fontSize={"large"} style={{ color: textcolor }} />
        </Button>
        <Button href={SocialMediaLinks[1].path}>
          <FacebookIcon fontSize={"large"} style={{ color: textcolor }} />
        </Button>
        <Button href={SocialMediaLinks[2].path}>
          <WhatsAppIcon fontSize={"large"} style={{ color: textcolor }} />
        </Button>
        <Button href={SocialMediaLinks[3].path}>
          <LocalPhoneIcon fontSize={"large"} style={{ color: textcolor }} />
        </Button>
      </div>
    </div>
  );
};
