import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            After all, our accessible emergency alert system is more than just a technological solution—it’s a lifeline for individuals with disabilities in times of crisis. By empowering them with timely and convenient information, we help ensure safety, security, and peace of mind in an emergency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
