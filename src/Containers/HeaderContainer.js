import React from 'react';
import '../css/Header.scss';
import MenuContainer from "./MenuContainer";
import MobileMenuContainer from "./MobileMenuContainer";

export default function HeaderContainer() {
    return (
        <div className={"Header"} >
            {window.innerWidth <= 760 ?
                <React.Fragment><MobileMenuContainer /><div className={"Title"}>Patryk Luczynski</div></React.Fragment> :
                <React.Fragment><div className={"Title"}>Patryk Luczynski</div><MenuContainer /></React.Fragment>
            }
        </div>
    );
}