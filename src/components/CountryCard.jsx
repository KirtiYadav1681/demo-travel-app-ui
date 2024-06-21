import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const CountryCard = ({country, content}) => {
  return (
    <div className="country-card-wrapper">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/61/727/753/italy-beach-sea-building-wallpaper-preview.jpg"
          alt="italy"
        />
        <div className="svg-div check">
          <FaCheck size={20} />
        </div>
        <div className="country-card-content-wrapper">
          <div className="card-content">
            <h3>{country}</h3>
            <div className="svg-div">
              <MdArrowOutward size={20} />
            </div>
          </div>
          <p>{content}</p>
        </div>
    </div>
  );
};

export default CountryCard;
