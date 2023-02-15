import React, { useState } from "react";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import "./App.css";

function App() {
  const [route, setRoute] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;

    cart.forEach((ele) => {
      if (item.id === ele.id) {
        isPresent = true;
      }
    });

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, operator) => {
    // console.log(item, operator);
    let idx = -1;
    cart.forEach((ele, i) => {
      if (ele.id === item.id) {
        idx = i; //find index of clicked item in cart
      }
    });

    const newArr = cart;
    newArr[idx].amount += operator; //update the quantity

    if (newArr[idx].amount === 0) {
      newArr[idx].amount = 1; //if quantity is equal to 0 , then fixed this to 1
    }
    setCart([...newArr]);
  };

  return (
    <div className="App">
      <Navbar item={cart.length} setRoute={setRoute} />
      {route ? (
        <Products handleClick={handleClick} />
      ) : (
        <CartPage cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && <div className="warning">Already added in Cart</div>}
    </div>
  );
}

export default App;
