import React from "react";
import "./Slider.css";
import  Carousel  from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { motion } from "framer-motion";
import Slides from "./Slides";
import "./Slider.css"

const proyectVariants = {
    hidden: {
        x: "-30vw",
    },
    show: {
        x: "0",
        transition: {
            duration: 3,
            ease: "easeIn",
        },
    },
};

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <motion.h2
                variants={proyectVariants}
                initial="hidden"
                animate="show"
                >
                    My Proyect</motion.h2>
            </div>

            <Carousel 
            arrows
            slidesPerPage={3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            iteWidth={400}
            slides={Slides}
            breakpoints={{
                960: {
                    slidesPerPage: 1,
                    arrows: false,
                    itemWidth: 250,
                }
            }}

            />
            
        </div>
    );
};

export default Slider;
