import React from "react";
import "./Footer.css";
import "./Curriculum";

const Footer = () => {
    return (
       <footer className="footer">
           <div className="footer-information">
               <h1>Iván Marroquín</h1>
               <p>your information</p>
           </div>
           <div className="footer-contact">
               <h3>contact me</h3>
               <p>Email: marroquin@hotmail.com</p> 
               <p>Cel: 9612619136</p>
               <a href="./Curriculum" target="_blank">C.vitare</a>
           </div>
           <div className="footer-sns">
               <div className="desing-by">
               Developer Web. Iván Miguel Chame Marroquín. ©2021. All rights reserved.
               </div>
               <div className="sns-links">
                   <a href="https://www.linkedin.com/in/iv%C3%A1n-miguel-cham%C3%A9-marroqu%C3%ADn-b720a9159/" target="_blank" rel="noreferrer" >
                       <i className="fab fa-linkedin likedin"></i>
                   </a>
                   <a href="https://www.instagram.com/miguel_ivan93/?hl=es" target="_blank" rel="noreferrer" >
                       <i className="fab fa-instagram instagram"></i>
                   </a>
                   <a href="https://www.facebook.com/ivanmiguel.chame" target="_blank" rel="noreferrer" >
                       <i className="fab fa-facebook facebook"></i>
                   </a>
               </div>

           </div>
       </footer>
    );
};

export default Footer;
