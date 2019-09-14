import React from 'react';
import PlayerComponent from "../Components/PlayerComponent"
import '../css/Player.scss';

export default function MenuContainer() {
    return (
        <React.Fragment>
            <div className={"playerContainer"}><PlayerComponent /></div>
        </React.Fragment>
    );
}