import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router, Link } from "react-router-dom";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/App.scss';

const useStyles = makeStyles({
    list: {
        width: 200,
        height: "100%",
        backgroundColor: "#000",
    },
    fullList: {
        width: 'auto'
    },
});

export default function MobileMenuContainer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List className={"menuList"}>
                <ListItem>
                    <Link className={"menuListItem"} to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link className={"menuListItem"} to="/music">Music</Link>
                </ListItem>
                <ListItem>
                    <Link className={"menuListItem"} to="/gallery">Gallery</Link>
                </ListItem>
                <ListItem>
                    <Link className={"menuListItem"} to="/links">Links</Link>
                </ListItem>
                <ListItem>
                    <Link className={"menuListItem"} to="/about">About</Link>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <span className={"menuButton"}
                color="white"
                onClick={toggleDrawer('left', true)}>
                <MenuIcon />
            </span>
            <SwipeableDrawer
                className={classes.fullList}
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}>
                {sideList('left')}
            </SwipeableDrawer>
        </div >
    );
}