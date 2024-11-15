import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import { Landing } from "Pages/Landing";
import { About } from "Pages/About";
import { Contact } from "Pages/Contact";
import { Services } from "Pages/Services";
import { Routes } from "components/Display/AppControl";

export const ScreenLayoutInner = ({ topBarOn }) => {
  return (
    <div>
      <Switch>
        <Route path={Routes[0].path}>
          <Landing topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[1].path}>
          <About topBarOn={topBarOn} />
        </Route>
        <Route path={Routes[2].path}>
          <Services topBarOn={topBarOn} />
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
