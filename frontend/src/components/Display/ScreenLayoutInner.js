import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Landing } from "Pages/Landing";
import { Contact } from "Pages/Contact";
import { Products } from "Pages/Products";
import { Routes } from "components/Display/AppControl";

export const ScreenLayoutInner = ({ topBarOn }) => {
  return (
    <div>
      <Switch>
        <Route path={Routes[0].path}>
          <Landing topBarOn={topBarOn} />
        </Route>
        <Route path={"/products"}>
          <Products topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[3].path}>
          <Contact topBarOn={topBarOn} />
        </Route>
        <Route path="/">
          <Landing topBarOn={topBarOn} />
        </Route>
      </Switch>
    </div>
  );
};
