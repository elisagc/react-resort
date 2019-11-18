import React from "react";
import { Route } from "react-router";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
    </div>
  );
};

export default App;
