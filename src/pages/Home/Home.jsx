import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// sponsors
import spon1 from "../../assets/sponsors/spon1.svg";
import spon2 from "../../assets/sponsors/spon2.svg";
import spon3 from "../../assets/sponsors/spon3.svg";
import spon4 from "../../assets/sponsors/spon4.svg";
import spon5 from "../../assets/sponsors/spon5.svg";
import spon6 from "../../assets/sponsors/spon6.svg";
import spon7 from "../../assets/sponsors/spon7.svg";
import spon8 from "../../assets/sponsors/spon8.svg";
import { BsArrowRight } from "react-icons/bs";


import icon01 from "../../assets/platform/icons/Icons-1-.svg"
import icon02 from "../../assets/platform/icons/Icons-2-.svg"
import icon03 from "../../assets/platform/icons/Icons-3-.svg"


// platform
import img01 from "../../assets/platform/for-individuals-thumb.svg";
import img02 from "../../assets/platform/for-leaders-thumb.svg";
import img03 from "../../assets/platform/for-organizations-thumb.svg";
import { FaUser, FaUsers } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

const Sponsors = [
  {
    img: spon1,
  },
  {
    img: spon2,
  },
  {
    img: spon3,
  },
  {
    img: spon4,
  },
  {
    img: spon5,
  },
  {
    img: spon6,
  },
  {
    img: spon7,
  },
  {
    img: spon8,
  },
];

// animation varients
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // Staggering animation delay between items
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// array of platform images
const forcards = [
  {
    title: "For Individuals",
    link: "/",
    img: img01,
    svg: icon01,
    text: "Revitalize your organization's mental health through accessible therapy, advanced wellbeing tools, and content backed by science.",
  },
  {
    title: "For Leaders",
    link: "/",
    img: img02,
    svg: icon02,
    text: "Strengthen your organization with science-backed coaching and development tools, nurturing leadership skills and successful teams.",
  },
  {
    title: "For Organizations",
    link: "/",
    img: img03,
    svg: icon03,
    text: "Integrate a data-driven approach to wellbeing, connecting mental health strategies to enhanced business outcomes.",
  },
];

function Home() {
  return (
    <>
      <div className="hero">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.33 }}
          viewport={{ once: true }}
          className="hero-content"
        >
          <h1>Building Mentally Healthy Businesses</h1>

          <p>
            Backed by science and tailored to your business, Unmind’s
            comprehensive mental health platform combines therapy, coaching, AI,
            and expert insights to help your organization thrive.
          </p>

          <Link>Request a demo</Link>
        </motion.div>

        {/* slider */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.63 }}

          viewport={{ once: true, amount: 0.25 }}
          className="hero_slider"
        ></motion.div>
      </div>

      <div className="sponsors">
        <p>Trusted by companies of all sizes around the world</p>
        <motion.div
          className="sponsors_logos"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.65 }}
        >
          {Sponsors.map((sponsor, key) => (
            <div className="logo_wrapper" key={key}>
              <motion.div variants={item}>
                <img src={sponsor.img} alt={`sponsor-${key}`} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="platform">
        <div className="platform_intro">
          <h1 className="platform_title">Our platform</h1>

          <p>
            A whole-person, whole-organization approach to sustainable
            high-performance.
          </p>
        </div>

        <div className="platform_cards">
          {forcards.map((forcard, index) => (
            <Link to={forcard.link} className="platform_card">
              <div className="card_top">
                {/* title for each card */}
                <div className="card_icn">
                  <img src={forcard.svg} />
                  <h1>{forcard.title}</h1>
                </div>

                {/* arrow interaction */}
                <div class="learn-more-wrapper">
                  <div class="learn-more-button">
                    <div class="learn-more-text">
                      <span class="learn-more-label">Learn more</span>
                    </div>
                    <BsArrowRight />
                  </div>
                </div>
              </div>

              <p>{forcard.text}</p>

              <div className="card_image">
                <img src={forcard.img} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
