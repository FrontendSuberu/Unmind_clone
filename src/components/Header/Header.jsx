import React, { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import "./header.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const linksRef = useRef();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (linksRef.current && !linksRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header>
        <div className="sub_header">
          <div>
            <img src={logo} alt="unwind logo" />
          </div>

          <ul className="links" ref={linksRef}>
            <li
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "platform" ? null : "platform"
                )
              }
            >
              Platform <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {activeDropdown === "platform" && (
                  <motion.div
                    className="platform_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Platform content */}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "solutions" ? null : "solutions"
                )
              }
            >
              Solutions <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {activeDropdown === "solutions" && (
                  <motion.div
                    className="solution_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Solutions content */}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              onClick={() =>
                setActiveDropdown(activeDropdown === "impact" ? null : "impact")
              }
            >
              Impact <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {activeDropdown === "impact" && (
                  <motion.div
                    className="impact_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Impact content */}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "resources" ? null : "resources"
                )
              }
            >
              Resources <MdOutlineKeyboardArrowDown />
              <AnimatePresence mode="wait">
                {activeDropdown === "resources" && (
                  <motion.div
                    className="resources_details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Resources content */}
                  </motion.div>
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
