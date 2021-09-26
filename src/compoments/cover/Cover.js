import React from "react";
import "./Cover.css";
import covervideo from "../../media/VideoCover.mp4";
import { motion } from "framer-motion";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={covervideo} autoPlay loop muted />
            <h1>Iván Marroquín</h1>

            <motion.p
                initial={{ x: "-100vw" }}
                animate={{
                    x: "-100px",
                    y: 0,
                    transition: { duration: 4, ease: "easeInOut" },
                }} > ! Developer| </motion.p>

            <motion.p
                initial={{ x: "100vw" }}
                animate={{
                    x: "100px",
                    y: 0,
                    transition: { duration: 4, ease: "easeInOut" },
                }} > |JavaScript ¡ </motion.p>

        </div>
    );
};

export default Cover;
