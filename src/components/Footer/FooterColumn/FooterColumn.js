import React from 'react';

import './FooterColumn.css';

const footerColumn = props => (
    <div className="footerColumn">
        <h4>{props.title}</h4>
        {props.children}
    </div>
);

export default footerColumn;