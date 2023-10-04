import React, { useState } from 'react';
import "./App.css";
import data from "./data.json";
import Hotels from './components.js/Hotels';
import Navbar from './components.js/Navbar';

const HotelLis = () => {
    const[menuData, setMenuData] = useState(data);
    const filterItem =(Place)=>{
        const updatedList = data.filter((curElem) => {
                  return curElem.Place === Place;
        });
        setMenuData(updatedList);
    }
  return (
    <>
    <Navbar filterItem={filterItem} />
    <Hotels menuData={menuData}/>
    
    </>
  )
}

export default HotelLis;

