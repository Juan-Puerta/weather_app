import React from "react";
import ImgNotFound from "../../assets/images/not_found.png"
import "./NotFound.css"

const NotFound: React.FC = () => {
    return(
        <div className="div-not-found">
            <img src={ ImgNotFound } alt="" />
        </div>
    );
};

export default NotFound;