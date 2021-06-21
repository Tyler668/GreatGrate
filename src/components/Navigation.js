import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/GGlogo.png'

const Navigation = () => {
    return (
        <div className='Nav'>
            <div className='links'>
                <NavLink className='navItems' to='/'>
                    <img className='logo' src={logo}></img>
                </NavLink>
                <NavLink className='navItems' to='/about'>
                    Our Product
                </NavLink>
                <NavLink className='navItems' to='/about'>
                    Our Story
                </NavLink>
                <NavLink className='navItems' to='/purchase'>
                    Purchase
                </NavLink>
                <NavLink className='navItems' to='/about'>
                    Recipes
                </NavLink>
                <NavLink className='navItems' to='/contact'>
                    Contact
                </NavLink>
            </div>
        </div>
    );

};

export default Navigation;