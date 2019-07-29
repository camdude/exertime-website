import React from 'react';

import classes from './Input.module.css';

const input = props => (
    <div className={classes.InputField}>
        <label>{props.label}</label>
        <input type="text" value={props.value} onChange={props.onChange}/>
    </div>
    
);

export default input;