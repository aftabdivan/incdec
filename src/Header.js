import React from "react";
import logo from "./Image/AD logo.jpg";
import "./Header.css";



const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_div" float="left">
            <img src={logo} alt="logo" width="80px" height="80px" />
             <h1>Aftab Divan</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
