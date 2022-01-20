import { ConnectedRouter } from "connected-react-router";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import history from "../app/history";
import Home from "../views/Home";
import WhoWeAre from "../views/WhoWeAre";
import WhatWeDo from "../views/WhatWeDo";
import GetInTouch from "../views/GetInTouch";
import NotFound from "../views/NotFound";

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={"/whoweare"} component={WhoWeAre} />
        <Route path={"/whatwedo"} component={WhatWeDo} />
        <Route path={"/getintouch"} component={GetInTouch} />
        <Route path={"/"} exact={true} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
