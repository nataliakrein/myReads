import React from 'react';
import { Menu } from '..';
import './style.css';


export const TopNavBar = () =>{
  return (
    <header className="topnavbar">
        <h1 className="topnavbar_title">MyReads</h1>
        <nav className="topnavbar_nav">
            <Menu/>
        </nav>
    </header>
  )
}