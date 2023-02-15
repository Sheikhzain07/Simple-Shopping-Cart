import React from "react";
import "../styles/card.css";

function Card({ ele, handleClick }) {
  const { title, img, author, price } = ele;
  return (
    <section>
      <div className="card">
        <div className="img">
          <img src={img} alt="prodImg" />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{author}</p>
          <p>₹ {price}</p>
          <button onClick={() => handleClick(ele)}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Card;
