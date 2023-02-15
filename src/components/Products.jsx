import React from "react";
import list from "../data";
import Card from "./Card";
import "../styles/products.css";

function Products({ handleClick }) {
  return (
    <section>
      {list.map((ele) => {
        return <Card ele={ele} key={ele.id} handleClick={handleClick} />;
      })}
    </section>
  );
}

export default Products;
