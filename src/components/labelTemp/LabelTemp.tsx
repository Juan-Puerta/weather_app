import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from 'react-redux';
import "./LabelTemp.css";

const LabelTemp: React.FC = () => {

    const { isInFahrenheit } = useSelector((state: RootState) => state.fahrenheit);
    const { temperature } = useSelector((state: RootState) => state.city);

    const getTemp = (kelvin: number, toFahrenheit: boolean): string => {
        if(toFahrenheit){
            return ((9 / 5) * (kelvin - 273) + 32).toFixed(2);
        }else {
            return (kelvin - 273.15).toFixed(2);
        }
    }

    return(
        <div className="label-temp">
            <div className="div-temp">
                { isInFahrenheit ? getTemp(temperature.temp, true) : getTemp(temperature.temp, false) }
            </div>
            <div className="div-med">{ isInFahrenheit ? "F°" : "C°" }</div>
        </div>
    )
}

export default LabelTemp;