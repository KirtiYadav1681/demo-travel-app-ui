import React from "react";
import SubHeading from "./SubHeading";
import SubSubHeading from "./SubSubHeading";
import WhiteButton from "./WhiteButton";
import BlackButton from "./BlackButton";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa6";
import CityCard from "./CityCard";
import { IoIosArrowDown } from "react-icons/io";

const ChooseCities = () => {
  return (
    <section className="section">
      <div className="section-wrapper">
        <SubHeading subHeading="EXPLORE CITIES OF YOUR CHOICE" />

        <div className="section-top-div">
          <div>
            <h1>Choose Cities</h1>
            <SubSubHeading label="Select the recommended cities you would like to visit" />
          </div>
          <div className="section-button-div">
            <WhiteButton label="4 Cities Selected" />
            <BlackButton label="Search Flights" />
          </div>
        </div>

        <div className="section-middle-div">
          <div style={{ position: "relative" }}>
            <div className="main-img-div">
              <img
                src="https://www.abercrombiekent.co.uk/-/media/abercrombieandkent/images/destination-guides/europe/italy/13-must-see-italian-monuments/mainitalyromenight-view-at-st-peters-cathedral.jpg?w=1920&h=940"
                alt="italy-bg"
              />
            </div>
            <div className="img-arrows-div">
                <div className="arrows-div">
                    <div className="arrow">
                        <FaArrowLeft />
                    </div>
                    <div className="arrow" style={{backgroundColor:"rgb(128, 212, 231)"}}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            <div className="img-content-div">
              <h1>Italy</h1>

              <div style={{ display: "flex", gap: "8px", marginTop: "15px" }}>
                <div>
                  <h4>Best Time To Visit</h4>
                  <div className="country-details-div">
                    <div
                      className="details-div"
                      style={{ backgroundColor: "lightGreen" }}
                    >
                      <h6>Apr-Jun</h6>
                      <p>Peak Season</p>
                    </div>
                    <div
                      className="details-div"
                      style={{ backgroundColor: "#FFDBBB" }}
                    >
                      <h6>Oct-Feb</h6>
                      <p>Moderate Season</p>
                    </div>
                    <div
                      className="details-div"
                      style={{ backgroundColor: "#ffcccb" }}
                    >
                      <h6>Jul-Sep</h6>
                      <p>Off Season</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4>Ratings</h4>
                  <div className="details-div">
                    <h6>
                      <FaStar color="#ffe600" /> 4.8
                    </h6>
                    <p>3.5K Reviews</p>
                  </div>
                </div>
                <div>
                  <h4 style={{ marginTop: 0, paddingTop: 0 }}>Blogs</h4>
                  <div
                    className="details-div"
                    style={{ display: "flex", width: "80px",backgroundColor:"#CBC3E3" }}
                  >
                    <h6 style={{ width: "50%" }}>Travel Blog</h6>
                    <div className="details-div-arrow">
                      <MdArrowOutward />
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail-content-p">
                <p>
                  The Italy, located in Northwester Europe, is a country known
                  for its picturesque landscapes, vibrant cities, and rich
                  country heritage. With a population renowned for their
                  openness, tolerence, the Dutch have fostered a society that
                  values diversity and inclusivity. The country is characterized
                  by extensive networks of canals, iconic windmills, and flat
                  terrain. Amsterdam, the capital, is celebrated for its
                  historic architecture, world-class museums such as Rijksmuseum
                  and Van Gogh Museum, and a lively atmosphere. The Netherlands
                  is also recognized for its efficient cycling infrastructure,
                  with bicycles being a popular and environmentally friendly
                  mode of transportation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-bottom-div">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
        </div>

        <button className="city-button" style={{width:"120px", alignSelf:"center", marginTop:"50px", color:"#323232"}}>
            Max Days <IoIosArrowDown />
        </button>
      </div>
    </section>
  );
};

export default ChooseCities;
