import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Pickup from "./components/Pickup.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="maindiv">
        <Main />
        <Pickup />
      </div>
    </div>
  );
}

export default App;
