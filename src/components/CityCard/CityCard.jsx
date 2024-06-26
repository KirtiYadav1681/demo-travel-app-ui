import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import './CityCard.css';

const CityCard = () => {
  return (
    <div className="city-card-wrapper">
      <img src="https://images6.alphacoders.com/555/555286.jpg" alt="venice" />

      <div className="svg-div check">
            <FaCheck size={20} />
        </div>

      <div className="city-card-content-wrapper">
        <div className="card-content">
          <h3>Rome</h3>
          <div className="svg-div">
              <MdArrowOutward size={20} />
            </div>
        </div>

        <p className="city-card-content">Venice is famous for its intricate network of Canals and transportation with the city is primarily done by boats.</p>

        <h4>Travel Days</h4>
        <div className="city-card-travel-days">
            <button className="city-button">
                Min Days <IoIosArrowDown />
            </button>
            <button className="city-button">
                Max Days <IoIosArrowDown />
            </button>
        </div>

      </div>

    </div>
  );
};

export default CityCard;
