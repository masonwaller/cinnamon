import React from "react";
import "../App.css";
import Main from "./Main.js";
import Pickup from "./Pickup.js";

export default function Home() {
  return (
    <div className="maindiv">
      <Main />
      <Pickup />
    </div>
  );
}
