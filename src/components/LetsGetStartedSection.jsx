import React from "react";
import { MdArrowOutward } from "react-icons/md";

const LetsGetStartedSection = () => {
  return (
    <section className="hero-section" style={{ padding: "60px 10%" }}>
      <div className="hero-banner">
        <div className="left-get-started-div">
          <div className="left-left">
            <img
              src="https://images.unsplash.com/photo-1445108771252-d1cc31a02a3c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img-1"
            />
          </div>
          <div className="left-right">
            <img
              src="https://images.unsplash.com/photo-1535069440609-10482a584e72?q=80&w=2017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img-2"
            />
            <img
              src="https://images.unsplash.com/photo-1465310477141-6fb93167a273?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img-3"
            />
          </div>
        </div>

        <div className="right-get-started-div">
          <p className="sub-heading">LET'S GET STARTED</p>

          <h2 style={{marginTop:"25px"}}>What kind of trip are you looking for?</h2>
          <textarea rows="10" cols="50" placeholder="Describe your ideal trip, e.g. 'A mixture of relaxing and adventuring across Central America'." />

          <h2>When are you available to travel?</h2>
          <div className="date-picker-wrapper">
            <div>
              <h4>Earlist departure</h4>
              <input
                type="date"
                style={{ padding: "10px", fontSize: "16px" }}
              />
            </div>

            <div>
              <h4>Latest return</h4>
              <input
                type="date"
                style={{ padding: "10px", fontSize: "16px" }}
              />
            </div>
          </div>
          <button className="button" style={{marginTop: "60px"}}>
            Next <MdArrowOutward />
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default LetsGetStartedSection;
