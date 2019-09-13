import React from 'react';
import '../css/Loading.scss';
import homeImage from '../css/img/vinyl2.png';

export default function LoadingComponent() {
    return (
        <img src={homeImage} className="Vinyl-spin" alt="Loading" />
    );
}