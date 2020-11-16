import React from "react";
import "../App.css";
import Main from "./Main.js";
import Pickup from "./Pickup.js";
import HotItems from "./HotItems.js";
import AllItems from "./AllItems.js";

export default function Home() {
  const [page, setPage] = React.useState(0);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(res => setProducts(res));
  }, []);
  return (
    <div>
      {page === 0 ? (
        <div className="maindiv">
          <Main setPage={setPage} />
          <Pickup setPage={setPage} />
        </div>
      ) : page === 1 ? (
        <HotItems />
      ) : (
        <AllItems products={products} />
      )}
    </div>
  );
}
