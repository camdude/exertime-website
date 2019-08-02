import React from 'react';

import classes from './CardGroup.module.css';

const cardGroup = props => (
    <section className={classes.cardGroup}>
        {props.children}
    </section>
);

export default cardGroup;