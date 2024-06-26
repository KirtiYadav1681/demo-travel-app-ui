import React from "react";
import { IoAirplaneOutline, IoLocationOutline } from "react-icons/io5";
import './FlightCard.css';

const FlightCard = () => {
  return (
    <div className="flight-card-wrapper">
      <div className="flight-card-left-div">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/03/Air-France-Logo-1976.jpg"
          alt="air-france"
        />
        <h1>$12,022</h1>
        <p>51h 35m</p>
        <button>Book</button>
      </div>

      <div className="flight-card-right-div">

        <div className="flight-detail-card">
          <div className="flight-detail-left-div">
            <h3>Paris</h3>
            <h5>01 Mar'24 | 10:25</h5>
            <p>Leonardo Da Vinci-</p>
            <p>Flumicino Airport (FCO) </p>
          </div>
          <div className="flight-detail-center-div">
            <div className="flight-detail-center">
              <IoAirplaneOutline />
              <div></div>
              <IoLocationOutline />
            </div>
            <p>2h 15m</p>
          </div>
          <div className="flight-detail-right-div">
            <h3>Rome</h3>
            <h5>01 Mar'24 | 10:25</h5>
            <p>Orly Airport (ORY)</p>
          </div>
        </div>

        <div className="flight-detail-card">
          <div className="flight-detail-left-div">
            <h3>Paris</h3>
            <h5>01 Mar'24 | 10:25</h5>
            <p>Leonardo Da Vinci-</p>
            <p>Flumicino Airport (FCO) </p>
          </div>
          <div className="flight-detail-center-div">
            <div className="flight-detail-center">
              <IoAirplaneOutline />
              <div></div>
              <IoLocationOutline />
            </div>
            <p>2 stopovers</p>
          </div>
          <div className="flight-detail-right-div">
            <h3>Rome</h3>
            <h5>01 Mar'24 | 10:25</h5>
            <p>Orly Airport (ORY)</p>
          </div>
        </div>

        <div className="flight-detail-card">
          <div className="flight-detail-left-div">
            <h3>Paris</h3>
            <h5>01 Mar'24 | 10:25</h5>
            <p>Leonardo Da Vinci-</p>
            <p>Flumicino Airport (FCO) </p>
          </div>
          <div className="flight-detail-center-div">
            <div className="flight-detail-center">
              <IoAirplaneOutline />
              <div></div>
              <IoLocationOutline />
            </div>
            <p>1 stopover</p>
          </div>
          <div className="flight-detail-right-div">
            <h3>Rome</h3>
            <h5>01 Mar'24 | 10:25</h5>
            <p>Orly Airport (ORY)</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlightCard;
