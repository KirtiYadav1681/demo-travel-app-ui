import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <div className="hero-banner">

        <div className="left-container">
          <p className="sub-heading">EXPLORE THE WORLD </p>
          <h1>
            Experience A Better Way To Travel, Let Us Guide You On Your Way
          </h1>
          <div className="content-wrapper">
            <RiDoubleQuotesL size={50} />
            <p className="content">
              Let's craft a curated set of destinations just for you, and we'll
              even find the best flights to get you there. Your perfect trip
              awaits.
            </p>
          </div>
          <button className="button">
            Start Travelling <MdArrowOutward />
          </button>
          <div className="rating-wrapper">
            <div className="users">
              <FaUserCircle id="first" size={35} />
              <FaUserCircle id="second" size={35} />
              <FaUserCircle id="third" size={35} />
            </div>
            <div className="rating">
              <h4>Our Happy Customers</h4>
              <div>
                <FaStar />
                <p>5.9 (3.5K Reviews)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div id="first-image">
            <img
              src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFrZSUyMGJvYXR8ZW58MHx8MHx8fDA%3D"
              alt="boat-2"
            />
          </div>
          <div id="second-image">
            <img
              src="https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGJvYXR8ZW58MHx8MHx8fDA%3D"
              alt="boat-1"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroBanner;
