import React from "react";
import { NavLink } from 'react-router-dom';
import "./style.css";

export const Menu = ({ close }) => {
    return (
    <div>
    <ul className="menu_items">
        <li onClick={close} className="menu_item"><NavLink exact to="/" activeClassName="menu_item--active">Currently Reading</NavLink></li>
        <li onClick={close} className="menu_item"><NavLink to="/wanttoread" activeClassName="menu_item--active">Want to Read</NavLink></li>
        <li onClick={close} className="menu_item"><NavLink to="/read" activeClassName="menu_item--active">Read</NavLink></li>
        <li onClick={close} className="menu_item"><NavLink to="/searchbooks" activeClassName="menu_item--active">Search Books</NavLink></li>
    </ul>
    </div>
    )
}