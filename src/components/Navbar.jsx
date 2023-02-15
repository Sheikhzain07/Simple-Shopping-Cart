import React from "react";
import "../styles/navbar.css";

function Navbar({ item, setRoute }) {
  return (
    <div className="nav">
      <span className="logo" onClick={() => setRoute(true)}>
        Book Store
      </span>
      <div className="cart" onClick={() => setRoute(false)}>
        <span>
          <i class="fas fa-cart-plus"></i>
        </span>
        <span>{item}</span>
      </div>
    </div>
  );
}

export default Navbar;
