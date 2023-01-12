import React from 'react';
import { RootState } from "../../store/store";
import { useSelector } from 'react-redux';
import LabelTemp from '../labelTemp/LabelTemp';
import InfoCard from '../infoCard/InfoCard';
import { Popover } from 'antd';
import "./CardCity.css"

const CardCity: React.FC = () => {

    const city = useSelector((state: RootState) => state.city);

    const getHour = (timezone: number): string => {
        const hour: number = Math.floor(((Date.now() + (timezone * 1000)) / (1000 * 60 * 60)) % 24);
        const minutes: number = Math.floor(((Date.now() + (timezone * 1000)) / (1000 * 60)) % 60);
        return `${ hour }:${ minutes }`;
    }

    const capitalize = (desc: string): string => {
        return desc[0].toUpperCase() + desc.slice(1);
    }

    return(
        <div className='card-city'>
            <div className='card-title'>
                <div className='div-city'>{ city.city_name }</div>
                <div className='div-time'>{ getHour(city.timezone) }</div>
            </div>
            <hr />
            <div className='card-content'>
                <div className='div-img'>
                    <Popover trigger="click" content={ capitalize(city.weather.description) }>
                        <img 
                            className='weather-img'
                            src={`https://openweathermap.org/img/wn/${ city.weather?.icon }@4x.png`} 
                            alt="" 
                        />
                    </Popover>
                </div>
                <LabelTemp />
            </div>
            <hr />
            <InfoCard />
        </div>
    );
}

export default CardCity;