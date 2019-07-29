import React from 'react';
import {NavLink} from 'react-router-dom';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../UI/Logo/Logo';

const navBar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">
                <Logo />
            </a></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/organisations">Organisations</NavLink></li>
                    <li><NavLink to="/exercises">Exercises</NavLink></li>
                    <li><NavLink to="/global">Global</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navBar;