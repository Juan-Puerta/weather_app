import React from 'react';
import { Input } from "antd";
import "./Menu.css"

const { Search } = Input;

const Menu: React.FC = () =>(
    <div className="menu">
        <h1 className="text-menu">Weather App</h1>
        <Search placeholder="Search city" style={{ width: 150, }} />
    </div>
)
  
export default Menu;