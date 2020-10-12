import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Orders from "./components/Orders.js";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/orders" component={Orders} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
