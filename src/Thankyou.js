import React from "react";
import './App.css';
import Navbar from './Navcom/Navbar';
import thank from './thank-you.jpg';
import { useNavigate } from "react-router-dom";


function Thankyou(){
    const navi=useNavigate();
    function nav(){
        navi('/LandingPage');
    }
    return <>
    <div>
    <Navbar/>
    <div className="thankyou-content">
    <img src={thank} alt="thank you for the purchace" className="ty-img"></img>
    </div>
    <br />
    <div className="thankyou-content"><button className='button' onClick={nav}>Return Home</button></div>
    
    </div>
    </>
}

export default Thankyou;