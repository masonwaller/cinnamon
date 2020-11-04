import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Orders from "./components/Orders.js";
import Login from "./components/Login.js";

function App() {
  const [user, setUser] = React.useState("");
  React.useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/orders" component={Orders} />
        <Route
          path="/account"
          render={props => <Login user={user} setUser={setUser} />}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
