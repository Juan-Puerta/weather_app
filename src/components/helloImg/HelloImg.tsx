import React from "react";
import Hello from "../../assets/images/hello.png"
import "./HelloImg.css"

const HelloImg: React.FC = () => {
    return(
        <div className="div-hello">
            <img src={ Hello } alt="" />
        </div>
    );
};

export default HelloImg;