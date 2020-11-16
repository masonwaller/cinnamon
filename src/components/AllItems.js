import React from "react";
import "../App.css";

export default function AllItems(props) {
  return (
    <div>
      <h1>All Available Items</h1>
      <div className="allList">
        {props.products.map(product => (
          <div className="card" key={product.id}>
            <img src="cinna.jpg" alt="Cinna" className="image" />
            <h4>{product.name}</h4>
            <h5>{product.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
