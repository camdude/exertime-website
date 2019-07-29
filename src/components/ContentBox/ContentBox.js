import React from 'react';

import './ContentBox.css';

const contentBox = props => (
    <div className="contentBox">
        <h1>{props.title}</h1>
        {props.children}
    </div>
);

export default contentBox;