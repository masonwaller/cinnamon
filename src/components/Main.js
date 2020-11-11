import React from "react";
import "../App.css";

export default function Main(props) {
  return (
    <div className="Main" onClick={() => props.setPage(1)}>
      <h3>HOT NOW</h3>
      <p>Try these hot items, you won't regret it!</p>
      <img src="cinna.jpg" alt="Cinna" className="image" />
    </div>
  );
}
