import React, { useState } from "react";
// import order from "../assets/images/order-img.jpg";
import order from "../assets/images/order-img-1.jpg"
import { Link } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";


const OrderSection = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setText(window.alert("Your Order has been placed successfully.."));
  };

  return (
    <section className="order" id="order">
      <div className="row">
        <div className="image">
          <img src={order} alt="" />


        </div>

        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" />
          </div>

          <div className="inputBox">
            <input type="number" placeholder="Number" required />
            <input type="text" placeholder="Food Name" />
          </div>

          <textarea
            placeholder="Address"
            name=""
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>

          <Link to="/">
            <button
              type="submit"
              className="btn btn-2"
              onClick={handleSubmit}
              value={text}
            >
              Order Now
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default OrderSection;
