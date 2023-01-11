import { Weather } from "./Weather";
import { Temperature } from "./Temperature";

export interface City{
    cod: number;
    city_name?: string;
    weather?: Weather;
    temperature?: Temperature;
    timezone: number;
}