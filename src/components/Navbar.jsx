import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/logo-nav.png"

const Navbar = () => {
  
  const cart = useSelector((state) => state.cart);

  return (
    <header>
      <Link to={"/"} className="logo">
        <img className="logo" src={logoImg } alt="" />
        {/* <i className="fas fa-utensils"></i>Food */}
      </Link>

      <div id="menu-bar" className="fas fa-bars"></div>

      <nav className="navbar">
      <Link to="/">home</Link>
        <a href="#speciality">Speciality</a>
        <a href="#popular">Foods</a>
        <a href="#review">Review</a>
        <Link className="cart" to="/cart">
        <FaShoppingCart />({cart.length})
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
