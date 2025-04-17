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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

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
          viewport={{ once: true, amount: 0.3 }}
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
    </>
  );
}

export default Home;
