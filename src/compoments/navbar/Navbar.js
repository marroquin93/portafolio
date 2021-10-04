import React from "react";
import "./Navbar.css";


const Navbar = ({ isScrolling }) => {
    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth"});
    }
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className="navbar-logo" onClick={toTheTop}>
                Iván Marroquín
                {/* <i className="fas fa-bars bars"></i> */}
                </div>
        </nav>
    )
}

export default Navbar
