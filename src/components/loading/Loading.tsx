import React from "react"
import { RevolvingDot } from "react-loader-spinner"
import "./Loading.css"

const Loading: React.FC = () => {
    return(
        <div className="loading">
            <RevolvingDot
                height="100"
                width="100"
                color="#92E3A9"
                secondaryColor=''
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;