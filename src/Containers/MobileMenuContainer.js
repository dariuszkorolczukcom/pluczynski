import React from 'react';
import { Router, Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/App.scss';

export default function MobileMenuContainer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className={"drawer"}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem><Link className={"menuListItem"} to="/about">About</Link></ListItem>
                <ListItem><Link className={"menuListItem"} to="/links">Links</Link></ListItem>
                <ListItem><Link className={"menuListItem"} to="/gallery">Gallery</Link></ListItem>
                <ListItem><Link className={"menuListItem"} to="/music">Music</Link></ListItem>
                <ListItem><Link className={"menuListItem"} to="/">Home</Link></ListItem>
            </List>
        </div>
    );

    return (
        <div
            className={"menuList"}>
            <span className={"menuButton"} color="white" onClick={toggleDrawer('left', true)}><MenuIcon /></span>
            <Drawer width="50%" open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <Drawer>

            </Drawer>
        </div >
    );
}