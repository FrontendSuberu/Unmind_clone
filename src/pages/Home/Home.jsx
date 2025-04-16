import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
Link;

function Home() {
  return (
    <>
      <div className="hero">
        <motion.div
          initial={{ opacity: 0,  y: 10}}
          whileInView={{ opacity: 1,  y: 0}}
          transition={{ delay: .33 }}
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
      </div>

      <div className="hed"></div>
    </>
  );
}

export default Home;
