import React from "react";
import logo from "../../assets/logo.svg"
import "./header.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="sub_header">
          <div><img src={logo} alt="unwind logo" /></div>

          <ul className="links">
            <li>Platform <MdOutlineKeyboardArrowDown /></li>
            <li>Solutions <MdOutlineKeyboardArrowDown /></li>
            <li>Impact <MdOutlineKeyboardArrowDown /></li>
            <li>Resources <MdOutlineKeyboardArrowDown /></li>
          </ul>

          <div className="other_cta">
            <Link to="/" className="sign_in">Sign in</Link>
            <Link to="/" className="request">Request a demo</Link>
          </div>

          <div className="menu">menu</div>
        </div>
      </header>
    </>
  );
}

export default Header;
