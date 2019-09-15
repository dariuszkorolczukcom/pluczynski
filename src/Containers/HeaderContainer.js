import React from 'react';
import '../css/Header.scss';
import MenuContainer from "./MenuContainer";
import MobileMenuContainer from "./MobileMenuContainer";

export default class HeaderContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        }
    }
    componentDidUpdate() {
        this.setState({ width: window.innerWidth })
    }
    render() {
        return (
            <div className={"Header"} >
                {this.state.width <= 760 ?
                    <React.Fragment><MobileMenuContainer /><div className={"Title"}>Patryk Luczynski</div></React.Fragment> :
                    <React.Fragment><div className={"Title"}>Patryk Luczynski</div><MenuContainer /></React.Fragment>
                }
            </div>
        );
    }
}