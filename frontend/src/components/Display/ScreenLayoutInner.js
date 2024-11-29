import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Landing } from "Pages/Landing";
import { Contact } from "Pages/Contact";
import { Products } from "Pages/Products";
import { Routes } from "components/Display/AppControl";
import { Login } from "Pages/Login";
import { Cart } from "Pages/Cart";
import { Deals } from "Pages/Deals";

export const ScreenLayoutInner = ({ topBarOn }) => {
  return (
    <div>
      <Switch>
        <Route path={"/home"}>
          <Landing topBarOn={topBarOn} />
        </Route>
        <Route path={"/shop"}>
          <Products topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[3].path}>
          <Contact topBarOn={topBarOn} />
        </Route>
        <Route path="/login">
          <Login topBarOn={topBarOn} />
        </Route>
        <Route path="/shoppingcart">
          <Cart topBarOn={topBarOn} />
        </Route>
        <Route path="/deals">
          <Deals topBarOn={topBarOn} />
        </Route>
        <Route path="/">
          <Landing topBarOn={topBarOn} />
        </Route>
      </Switch>
    </div>
  );
};
