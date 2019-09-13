import React from 'react';
import '../css/Header.scss';
import MenuContainer from "./MenuContainer";

export default function HeaderContainer() {
    return (
        <div className={"Header"}>
            <div className={"Title"}>Patryk Luczynski</div>
            <MenuContainer />
        </div>
    );
}