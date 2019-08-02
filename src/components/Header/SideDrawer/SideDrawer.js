import React from 'react';
import {NavLink} from 'react-router-dom';

import './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer', 'open'];
    }

    return (
        <nav className={drawerClasses.join(' ')}>
            <div className="logo">
                <Logo />
            </div>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/organisations">Organisations</NavLink></li>
                <li><NavLink to="/exercises">Exercises</NavLink></li>
                <li><NavLink to="/global">Global</NavLink></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;