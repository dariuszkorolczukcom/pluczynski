import React from 'react';
import PlayerComponent from "../Components/PlayerComponent"
import '../css/Player.scss';

export default class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.open
        }
    }
    componentWillUnmount() {
        this.setState({ open: false })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.open && <div className={"playerContainer"}><PlayerComponent /></div>}
            </React.Fragment>
        );
    }
}