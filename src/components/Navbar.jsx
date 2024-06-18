import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
        <div className="navbar-wrapper">
            <h1>Logo</h1>
            <div className="right-div">
                <p>About Us</p>
                <button>Contact Us</button>
                <FaRegUserCircle size={25}/>
            </div>
        </div>
    </header>
  )
}

export default Navbar