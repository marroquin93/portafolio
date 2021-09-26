import React from "react";
import "./About.css";
import { motion } from "framer-motion";


const  containervarians = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },

};

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc" >
        <motion.h3
        variants={containervarians}
        initial="hidden"
        animate="show"
        >
          Let me tell you something about me
          </motion.h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          provident inventore quod voluptates sequi. Quis, necessitatibus omnis
          iusto perferendis dolores voluptate et dolorum inventore autem nemo,
          quos eveniet magni nesciunt.
        </p>
      </div>
      <div className="about-img">
        <img src="https://scontent.ftgz1-1.fna.fbcdn.net/v/t1.6435-9/104912202_2787002234861174_6142321238575500834_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGWIVA38yHrlVoxBdAzwCqCBsbPKpR2FzIGxs8qlHYXMoHIdCQilKirDbxb_evK-TRqPQe4wAxBJC6URrYO4Xd-&_nc_ohc=BFmunm3k-eoAX_MCyiE&_nc_ht=scontent.ftgz1-1.fna&oh=3945b0283fe1e38db97c4e6e5f0ed439&oe=6152E3AF" alt="about"/>
      </div>
    </div>
  );
};

export default About;