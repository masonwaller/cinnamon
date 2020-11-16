import React from "react";
import "../App.css";

export default function Pickup(props) {
  return (
    <div className="Main" onClick={() => props.setPage(2)}>
      <h3>Pick Up Now</h3>
      <img src="cinna.jpg" alt="Cinna" className="image" />
    </div>
  );
}
