import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.scss';

export default function MenuContainer() {
    return (
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/links">Links</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    );
}