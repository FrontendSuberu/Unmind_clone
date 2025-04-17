import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./header.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

function Header() {
  const [Platform, setPlatform] = useState(false);
  const [Solutions, setSolutions] = useState(false);
  const [Impact, setImpact] = useState(false);
  const [Resources, setResources] = useState(false);

  return (
    <>
      <header>
        <div className="sub_header">
          <div>
            <img src={logo} alt="unwind logo" />
          </div>

          <ul className="links">
            <li
              onClick={() => {
                setPlatform(!Platform);
              }}
            >
              Platform <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {Platform && (
                  <motion.div
                    className="platform_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              onClick={() => {
                setSolutions(!Solutions);
              }}
            >
              Solutions <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {Solutions && (
                  <motion.div
                    className="platform_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              onClick={() => {
                setImpact(!Impact);
              }}
            >
              Impact <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {Impact && (
                  <motion.div
                    className="platform_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              onClick={() => {
                setResources(!Resources);
              }}
            >
              Resources <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {Resources && (
                  <motion.div
                    className="platform_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <div className="other_cta">
            <Link to="/" className="sign_in">
              Sign in
            </Link>
            <Link to="/" className="request">
              Request a demo
            </Link>
          </div>

          <div className="menu">menu</div>
        </div>
      </header>
    </>
  );
}

export default Header;
