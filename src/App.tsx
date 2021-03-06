import React from "react";
import { Route, Switch } from "react-router";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
