import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

export const Menu = ({ close }) => {
    return (
    <div>
    <ul className="menu_items">
        <li onClick={close} className="menu_item topnavbar_item--active"><Link to="/">Currently Reading</Link></li>
        <li onClick={close} className="menu_item"><Link to="/wanttoread">Want to Read</Link></li>
        <li onClick={close} className="menu_item"><Link to="/read">Read</Link></li>
        <li onClick={close} className="menu_item"><Link to="/searchbooks">Search Books</Link></li>
    </ul>
    </div>
    )
}