import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.items);
  const cartLength = cart.length;

  return (
    <>
      <div>
        <nav>
          <div className="logo">
            <Link to={"/"}>
              fake <span>Store</span>
            </Link>
          </div>
          <ul>
            <li>
              <NavLink activeClassName={"active"} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/carts"}>Product</NavLink>
            </li>
          </ul>
          <div className="cart">
            <Link to={"/addTocart"}>
              <MdOutlineShoppingCart className="carticon" />
              {cartLength > 0 && (
                <span className="cart-counter">{cartLength}</span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
