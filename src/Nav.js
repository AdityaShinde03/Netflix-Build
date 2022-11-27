import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import './Nav.css';
import logo from '../src/assets/Netflix-logo.png';

function Nav() {
const [show,handleshow] = useState(false);
const navigate = useNavigate();


const transitionNavBar = () =>{
    if(window.scrollY > 100){
        handleshow(true);
    } else {
        handleshow(false);
    }
}

useEffect(() => {
    window.addEventListener('scroll',transitionNavBar);
    return () => window.removeEventListener('scroll',transitionNavBar);
},[])


  return (
    <div className={`nav ${show &&"nav__black"}`}>
        <div className='nav__contents'>
            <img
            onClick={() => navigate("/")}
            className='nav__logo'
            src={logo}
            alt='Netflix Logo'
            />
            <img 
            onClick={() => navigate("/profile")}
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='Netflix Avatar Logo'
            />   
        </div>
    </div>
  )
}

export default Nav;