import React from "react";
import loader from "../assets/images/loader.gif";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="#" className="btn btn3">
            Facebook
          </a>
          <a href="#" className="btn btn3">
            twitter
          </a>
          <a href="#" className="btn btn3">
            instagram
          </a>
          <a href="#" className="btn btn3">
            linkedin
          </a>
          <a href="#" className="btn btn3">
            Github
          </a>
        </div>

        <h1 className="credit">
          Created by <span>Babita Yadav </span> | All rights reserved..
        </h1>
      </section>
      <a href="#home" className="fas fa-angle-up" id="scroll-top"></a>

      {/* <div className="loader-container">
      <img src={loader} alt="" />
    </div> */}
    </>
  );
};

export default Footer;
