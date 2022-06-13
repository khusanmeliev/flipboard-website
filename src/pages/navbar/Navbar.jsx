import React from "react";
import "./navbar.css";
import { FaFlipboard } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <FaFlipboard /> FLIPBOARD
        </div>
        <div className="lists">
          <ul>
            <li>Newsletters</li>
            <li>
              <input type="search" placeholder="Search Flipboard" />
            </li>
            <li>
              <button className="open">Open in app</button>
            </li>
            <li>
              <button className="sign">Sign up</button>
            </li>
            <li>
              <button className="login">Login</button>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
