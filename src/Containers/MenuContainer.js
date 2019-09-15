import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.scss';

export default function MenuContainer() {
    return (
        <ul className="menuList">
            <li className="menuListItem"><Link to="/about">About</Link></li>
            <li className="menuListItem"><Link to="/links">Links</Link></li>
            <li className="menuListItem"><Link to="/gallery">Gallery</Link></li>
            <li className="menuListItem"><Link to="/music">Music</Link></li>
            <li className="menuListItem"><Link to="/">Home</Link></li>
        </ul>
    );
}