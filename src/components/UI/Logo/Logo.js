import React from 'react';

import exertimeLogo from '../../../assets/img/head_logo.PNG';
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={exertimeLogo} alt="Exertime"></img>
    </div>
);

export default logo;