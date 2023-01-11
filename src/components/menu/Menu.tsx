import React from 'react';
import { Button } from 'antd';
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/slices/citySlice';
import { changeFahrenheit } from '../../store/slices/fahrenheitSlice';
import { City } from '../../models/City';
import { Temperature } from '../../models/Temperature';
import { Weather } from '../../models/Weather';
import { weatherApi } from '../../api/weatherApi';
import { apiKey } from "../../config/apiKey"
import { Input } from "antd";
import "./Menu.css"

const { Search } = Input;

const Menu: React.FC = () =>{

    const { isInFahrenheit } = useSelector((state: RootState) => state.fahrenheit);
    const dispatch = useDispatch();

    const onSearch = async (value: string) => {
        try{
            const resp = await weatherApi.get(`data/2.5/weather?q=${ value }&APPID=${ apiKey }`)
            const { temp, feels_like, temp_max, temp_min } = resp.data.main
            const { main, description, icon } = resp.data.weather[0]
            
            const temperature: Temperature = {
                temp: temp,
                feels_like: feels_like,
                temp_max: temp_max,
                temp_min: temp_min,
            }
    
            const weather: Weather = {
                main: main,
                description: description,
                icon: icon,
                wind_speed: resp.data.wind.speed,
            }
    
            const city: City = {
                cod: 200,
                city_name: resp.data.name,
                weather: weather,
                temperature: temperature,
                timezone: resp.data.timezone,
            }

            dispatch(changeCity(city))

        } catch (error){
            console.log("caca")
        }
    };

    return(
        <div className="menu">
            <h1 className="text-menu">Weather App</h1>
            <div className='div-buttoms'>
                <Search 
                    placeholder="Search city" 
                    style={{ width: 150, }} 
                    onSearch={onSearch}
                />
                <Button 
                    className='buttom-temp'
                    onClick={() => dispatch(changeFahrenheit())}
                >
                    <div>{ isInFahrenheit ? "F°": "C°" }</div>
                </Button>
            </div>
        </div>
    )
}
  
export default Menu;