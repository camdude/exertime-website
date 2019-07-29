import React from 'react';

import './Footer.css';

import FooterColumn from './FooterColumn/FooterColumn';

const footer = props => (
    <div className="footer">
        <div className="footerTop">
            <FooterColumn>
                Copyright 2012 by Scott Pederson and Dean Cooley
            </FooterColumn>
            <FooterColumn>
                <a href="/">Logout</a> | <a href="/">Privacy Policy</a>
            </FooterColumn>
        </div>
        {/* <div className="footerBottom">
        </div> */}
    </div>
);

export default footer;