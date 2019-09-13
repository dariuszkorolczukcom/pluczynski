import React from 'react';
import '../css/App.scss';

export default function MenuContainer() {
    return (
        <React.Fragment>
            <ul>
                <li><a href="#Bio">Bio</a></li>
                <li><a href="#Links">Links</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#Music">Music</a></li>
                <li><a href="#Home">Home</a></li>
            </ul>
        </React.Fragment>
    );
}