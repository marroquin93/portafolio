import React, { Component } from "react";


class Curriculum extends Component {
    render() {
        return (
            <div className="curriculum">
                <object
                data= {require("../../media/document/CV.pdf")}
                type="application/pdf"
                width="100%"
                height="100%"
                >
                </object>
                {/* // https://www.youtube.com/watch?v=h5I2yD6ntFM&t=183s */}

            </div>
        );
    }
}

export default Curriculum;
