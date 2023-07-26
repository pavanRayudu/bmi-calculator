import React, { useState } from "react";
import "./Header.css";

import { Link, Route, Routes } from "react-router-dom";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const clickHandler = () => {
    setDisplay(!display);
  };

  return (
    <>
      

        <div
          className="inButton"
          style={{ display: display ? "block" : "none" }}
        >
          <button onClick={clickHandler}>close</button>
          <ul>
            <li>
              <Link to="/" onClick={clickHandler}>Home</Link>
            </li>

            <li>
              <Link to="/About" onClick={clickHandler}>About</Link>
            </li>
            <li>
              <Link to="/Links" onClick={clickHandler}>Links</Link>
            </li>
            <li>
              <Link to="/Author">Author</Link>
            </li>
          </ul>
        </div>
      

      <div className="header">
        <Link to="/">
          <h1>BMI Calculator</h1>
        </Link>

        <button className="button" onClick={clickHandler}>
          Menu
        </button>

        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Links">Links</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
