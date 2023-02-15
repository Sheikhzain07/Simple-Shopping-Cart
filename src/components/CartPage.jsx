import React, { useState, useEffect } from "react";
import "../styles/cart.css";

function CartPage({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const totalPrice = () => {
    let ans = 0;

    cart.map((ele) => {
      return (ans += ele.amount * ele.price);
    });

    setPrice(ans);
  };

  const handleRemove = (id) => {
    // console.log("hello");
    const newArr = cart.filter((ele) => ele.id !== id);
    setCart(newArr);
    // totalPrice();
  };
  useEffect(() => {
    totalPrice();
  });

  return (
    <article>
      {cart?.map((ele) => {
        return (
          <div className="cardBox" key={ele.id}>
            <div className="img">
              <img src={ele.img} alt="cartImg" />
              <p>{ele.title}</p>
            </div>
            <div className="btn">
              <button onClick={() => handleChange(ele, -1)}>-</button>
              <button>{ele.amount}</button>
              <button onClick={() => handleChange(ele, +1)}>+</button>
            </div>
            <div>
              <span>₹ {ele.price} </span>
              <button onClick={() => handleRemove(ele.id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className="total">
        <span>Total Price- </span>
        <span>₹ {price}</span>
      </div>
    </article>
  );
}

export default CartPage;
