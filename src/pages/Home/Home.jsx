import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// sponsors
import spon1 from "../../assets/sponsors/spon1.png";
import spon2 from "../../assets/sponsors/spon2.png";
import spon3 from "../../assets/sponsors/spon3.png";
import spon4 from "../../assets/sponsors/spon4.png";
import spon5 from "../../assets/sponsors/spon5.png";
import spon6 from "../../assets/sponsors/spon6.png";
import spon7 from "../../assets/sponsors/spon7.png";
import spon8 from "../../assets/sponsors/spon8.png";

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

function Home() {
  return (
    <>
      <div className="hero">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
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
          viewport={{ once: true }} className="hero_slider"></motion.div>
      </div>

      <div className="sponsors">
        <p>Trusted by companies of all sizes around the world</p>

        <div className="sponsors_logos">
          {Sponsors.map((sponsor, key) => {
            return (
              <div className="logo_wrapper">
                <img src={sponsor.img} id={key} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
