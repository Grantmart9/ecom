import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Size } from "./media-query";
import Container from "@mui/material/Container";
import { layoutbgcolor, layouttextcolor, textcolor } from "./AppControl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export const TopBar = ({ setTopBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: layoutbgcolor,
      }}
    >
      {isResponsiveSize ? (
        <Toolbar disableGutters>
          <div
            style={{ marginLeft: "45px" }}
            className="grid grid-cols-3 gap-10 p-1"
          >
            <IconButton href={"/shoppingcart"}>
              <ShoppingBasketIcon
                sx={{ color: layouttextcolor }}
                fontSize="medium"
              />
            </IconButton>
            <IconButton href={"/accountsettings"}>
              <AccountCircleIcon
                sx={{ color: layouttextcolor }}
                fontSize="medium"
              />
            </IconButton>
          </div>
          <Container></Container>
          <IconButton
            size="medium"
            style={{ marginRight: "45px" }}
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={setTopBarOn}
            color={textcolor}
          >
            <MenuIcon
              style={{
                color: layouttextcolor,
              }}
            />
          </IconButton>
        </Toolbar>
      ) : (
        <Toolbar disableGutters>
          <IconButton
            size="medium"
            style={{ marginLeft: "80px" }}
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={setTopBarOn}
            color={textcolor}
          >
            <MenuIcon
              style={{
                color: layouttextcolor,
              }}
            />
          </IconButton>
          <Container></Container>
          <div
            style={{ marginRight: "45px" }}
            className="grid grid-flow-col gap-3 p-1"
          >
            <div className="inline-flex">
              <TextField
                color="warning"
                sx={{ width: "25ch" }}
                size="small"
                variant="standard"
              />
              <IconButton>
                <SearchIcon sx={{ color: layouttextcolor }} fontSize="medium" />
              </IconButton>
            </div>
            <IconButton href={"/shoppingcart"}>
              <ShoppingBasketIcon
                sx={{ color: layouttextcolor }}
                fontSize="medium"
              />
            </IconButton>
            <IconButton href={"/accountsettings"}>
              <AccountCircleIcon
                sx={{ color: layouttextcolor }}
                fontSize="medium"
              />
            </IconButton>
          </div>
        </Toolbar>
      )}
    </AppBar>
  );
};
