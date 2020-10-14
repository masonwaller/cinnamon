import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="Navbar">
      <h1 className="p">CinnaRoll</h1>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className="p">Home</p>
      </Link>
      <Link to="/orders" style={{ textDecoration: "none" }}>
        <p className="p">Orders</p>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <p className="p">About</p>
      </Link>
    </div>
  );
}

export default App;
