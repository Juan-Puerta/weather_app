import React from 'react';
import { Button, message, Input } from 'antd';
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../store/slices/citySlice';
import { changeFahrenheit } from '../../store/slices/fahrenheitSlice';
import { City } from '../../models/City';
import { Temperature } from '../../models/Temperature';
import { Weather } from '../../models/Weather';
import { weatherApi } from '../../api/weatherApi';
import { apiKey } from "../../config/apiKey"
import { changeLoading } from '../../store/slices/loadingSlice';
import "./Menu.css";

const { Search } = Input;

const Menu: React.FC = () =>{

    const { isInFahrenheit } = useSelector((state: RootState) => state.fahrenheit);
    const dispatch = useDispatch();

    const [messageApi, contextHolder] = message.useMessage();

    const notFound = () => {
        messageApi.open({
          type: 'error',
          content: 'City not found',
        });
    };

    const onSearch = async (value: string) => {
        try{
            const resp = await weatherApi.get(`data/2.5/weather?q=${ value }&APPID=${ apiKey }`)
            const { temp, humidity, pressure } = resp.data.main
            const { description, icon } = resp.data.weather[0]
            
            const temperature: Temperature = {
                temp: temp,
                humidity: humidity,
                pressure: pressure,
            }
    
            const weather: Weather = {
                description: description,
                icon: icon,
                wind_speed: resp.data.wind.speed,
                visibility: resp.data.visibility,
            }
    
            const city: City = {
                cod: 200,
                city_name: resp.data.name,
                weather: weather,
                temperature: temperature,
                timezone: resp.data.timezone,
            }

            dispatch(changeLoading(true));
            dispatch(changeCity(city));

        } catch (error){
            notFound();
        }
    };

    return(
        <div className="menu">
            {contextHolder}
            <div className='content-logo'>
                <div className='div-logo'></div>
                <h1 className="text-menu">Weather App</h1>
            </div>
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
    );
};
  
export default Menu;