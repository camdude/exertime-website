import React from 'react';

import classes from './ContentBox.module.css';

const contentBox = props => (
    <div className={classes.contentBox}>
        <h1 className={(props.underline) ? classes.underline : null}>{props.title}</h1>
        {props.children}
    </div>
);

export default contentBox;