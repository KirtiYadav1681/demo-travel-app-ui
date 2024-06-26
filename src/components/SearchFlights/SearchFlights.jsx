import React from "react";
import { SubHeading, SubSubHeading, FlightCard } from "../";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./SearchFlights.css";

const SearchFlights = () => {
  return (
    <section className="section">
      <div className="section-wrapper">
        <SubHeading subHeading="EXPLORE ROUTES FOR YOUR CHOSED DESTINATION" />

        <div className="section-top-div">
          <div>
            <h1>
              <MdOutlineFlightTakeoff /> Search Flights
            </h1>
            <SubSubHeading label="Select the flights according to your convenience" />
          </div>
        </div>

        <div className="flight-bottom-wrapper">
          <div className="flight-bottom-left-wrapper">
            <h2>Filters</h2>
            <div className="flight-column-wrapper">
              <div className="filter">
                <h4>Flight Outbound</h4>
                <p>00:00 - 23:59</p>
                <div className="filter-container">
                  <div className="filter-bar"></div>
                  <div
                    className="filter-bar-active"
                    style={{ width: "50%" }}
                  ></div>
                  <div className="filter-marker" style={{ left: "50%" }}></div>
                </div>
              </div>

              <div className="filter">
                <h4>Flight Outbound</h4>
                <p>00:00 - 23:59</p>
                <div className="filter-container">
                  <div className="filter-bar"></div>
                  <div
                    className="filter-bar-active"
                    style={{ width: "50%" }}
                  ></div>
                  <div className="filter-marker" style={{ left: "50%" }}></div>
                </div>
              </div>

              <div className="filter">
                <h4>Flight Outbound</h4>
                <p>00:00 - 23:59</p>
                <div className="filter-container">
                  <div className="filter-bar"></div>
                  <div
                    className="filter-bar-active"
                    style={{ width: "50%" }}
                  ></div>
                  <div className="filter-marker" style={{ left: "50%" }}></div>
                </div>
              </div>

              <div className="filter">
                <h4>Flight Outbound</h4>
                <p>00:00 - 23:59</p>
                <div className="filter-container">
                  <div className="filter-bar"></div>
                  <div
                    className="filter-bar-active"
                    style={{ width: "50%" }}
                  ></div>
                  <div className="filter-marker" style={{ left: "50%" }}></div>
                </div>
              </div>

              <div className="filter">
                <h4>Flight Outbound</h4>
                <p>00:00 - 23:59</p>
                <div className="filter-container">
                  <div className="filter-bar"></div>
                  <div
                    className="filter-bar-active"
                    style={{ width: "50%" }}
                  ></div>
                  <div className="filter-marker" style={{ left: "50%" }}></div>
                </div>
              </div>
            </div>

              <div className="filter">
                <h4>Maximum Stepovers</h4>
                <button>
                  Best Overall <IoIosArrowDown />
                </button>
              </div>
          </div>

          <div className="flight-bottom-right-wrapper">
            <div className="filter-right-top-wrapper">
              <div className="filter-sub-div">
                <div className="filter-sub-heading">
                  <h4>Best Overall</h4>
                  <p>From</p>
                </div>
                <div className="filter-sub-detail">
                  <p>12h 45m</p>
                  <p style={{ fontWeight: "600" }}>Rs. 113,047</p>
                </div>
              </div>

              <div className="filter-sub-div">
                <div className="filter-sub-heading">
                  <h4>Best Overall</h4>
                  <p>From</p>
                </div>
                <div className="filter-sub-detail">
                  <p>12h 45m</p>
                  <p>Rs. 113,047</p>
                </div>
              </div>

              <div className="filter-sub-div">
                <div className="filter-sub-heading">
                  <h4>Best Overall</h4>
                  <p>From</p>
                </div>
                <div className="filter-sub-detail">
                  <p>12h 45m</p>
                  <p>Rs. 113,047</p>
                </div>
              </div>
            </div>

            <div className="flight-sub-heading-section">
              <h2>Showing 93 Routes From ROM to PAR</h2>
              <div>
                <p>Sort By</p>
                <button
                  className="city-button"
                  style={{
                    color: "#323232",
                    fontWeight: "600",
                  }}
                >
                  Best Overall <IoIosArrowDown />
                </button>
              </div>
            </div>
            <p style={{ color: "#323232", fontWeight: "500" }}>
              Price per passenger includes tax and fees
            </p>

            <div className="flight-right-details-wrapper">
              <FlightCard />
              <FlightCard />
              <FlightCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFlights;
