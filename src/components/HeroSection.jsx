import React from "react";
// import homeImage from "../assets/images/home-img.png";
import BurgerImg from "../assets/images/burger_slide-1.png"
// import Pizaa from "../assets/images/Pizaa"
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        {/* <h3>Food  <span>made with love</span></h3> */}
        <h3>Welcome to <span>Delicious Eats....</span></h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam
          suscipit nemo, natus assumenda, similique placeat illo distinctio
          exercitationem ea, mollitia officiis nulla vel iure illum aliquid
          eaque et accusamus?
        </p>
        <Link to="/" className="btn3">
          get order now
        </Link>
      </div>

      <div className="image">
        {/* <img src={homeImage} alt="" /> */}
        <img src={BurgerImg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
