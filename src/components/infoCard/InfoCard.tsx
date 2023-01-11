import React from "react";
import { RootState } from "../../store/store";
import { useSelector } from 'react-redux';
import { Row, Col, Statistic } from "antd";
import "./InfoCard.css"

const InfoCard: React.FC = () =>{

    const city = useSelector((state: RootState) => state.city);

    return(
        <div className="info-card">
            <Row className="row-info">
                <Col>
                    <Statistic 
                        className="statistic-info"
                        title="Humidity" 
                        value={ `${ city.temperature.humidity } %` } 
                    />
                </Col>
                <Col>
                    <Statistic 
                        className="statistic-info"
                        title="Wind speed" 
                        value={ `${ city.weather?.wind_speed } m/s` } 
                    />
                </Col>
            </Row>
            <Row className="row-info">
                <Col>
                    <Statistic 
                        className="statistic-info"
                        title="Pressure" 
                        value={ `${ city.temperature.pressure } mb` } 
                    />
                </Col>
                <Col>
                    <Statistic 
                        className="statistic-info"
                        title="Visibility" 
                        value={ `${ city.weather?.visibility } m` } 
                    />
                </Col>
            </Row>
        </div>
    );
};

export default InfoCard;