import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const TopNavBar = () => (
    <header className="topnavbar">
        <h1 className="topnavbar_title">MyReads</h1>

      <nav className="topnavbar_nav">
        <ul className="topnavbar_items">
          <li className="topnavbar_item topnavbar_item--active"><Link to="/">Currently Reading</Link></li>
          <li className="topnavbar_item"><Link to="/wanttoread">Want to Read</Link></li>
          <li className="topnavbar_item"><Link to="/read">Read</Link></li>
          <li className="topnavbar_item"><Link to="/searchbooks">Search Books</Link></li>
        </ul>
      </nav>
      </header>
)