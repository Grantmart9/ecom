import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Size } from "./media-query";
import Container from "@mui/material/Container";
import Logo from "Images/icon.png";
import { layoutbgcolor, textcolor } from "./AppControl";
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
      elevation={0}
      sx={{
        backgroundColor: layoutbgcolor,
      }}
      className={`rounded-${isResponsiveSize ? "b-lg" : "br-lg"}`}
    >
      {isResponsiveSize ? (
        <Toolbar disableGutters>
          <div
            style={{ marginLeft: "45px" }}
            className="grid grid-cols-3 gap-3 p-1"
          >
            <IconButton>
              <SearchIcon sx={{ color: "whitesmoke" }} fontSize="medium" />
            </IconButton>
            <IconButton>
              <ShoppingBasketIcon
                sx={{ color: "whitesmoke" }}
                fontSize="medium"
              />
            </IconButton>
            <IconButton>
              <AccountCircleIcon
                sx={{ color: "whitesmoke" }}
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
                color: "whitesmoke",
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
                color: "whitesmoke",
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
                color="secondary"
                sx={{ width: "25ch" }}
                size="small"
                variant="standard"
              />
              <IconButton>
                <SearchIcon sx={{ color: "whitesmoke" }} fontSize="medium" />
              </IconButton>
            </div>
            <IconButton>
              <ShoppingBasketIcon
                sx={{ color: "whitesmoke" }}
                fontSize="medium"
              />
            </IconButton>
            <IconButton>
              <AccountCircleIcon
                sx={{ color: "whitesmoke" }}
                fontSize="medium"
              />
            </IconButton>
          </div>
        </Toolbar>
      )}
    </AppBar>
  );
};
