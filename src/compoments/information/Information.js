import React from "react";
import "./Information.css";
import imagenes from "../../assets/img/imagenes";

const Information = () => {
    return (
        <div className="information-container">
            <h1 className="title">SKILLSET</h1>
            <div className="information">
                      <div className="imagen elemento1">
                            <img src={imagenes.html} />
                        </div>
                        <div className="imagen elemento2">
                            <img src={imagenes.css} />
                        </div>
                        <div className="imagen elemento3">
                            <img src={imagenes.js} />
                        </div>
                        <div className="imagen elemento4">
                            <img src={imagenes.github} />
                        </div>
                        <div className="imagen elemento5">
                            <img src={imagenes.nodejs} />
                        </div>
                        <div className="imagen elemento6">
                            <img src={imagenes.react} />
                        </div>
            </div>
            
        </div>
    )
}

export default Information
