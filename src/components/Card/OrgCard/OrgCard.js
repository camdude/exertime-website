import React from 'react';
import { Link } from 'react-router-dom';

import classes from './OrgCard.module.css';

const orgCard = props => {
    let groups = null;
    if(props.groups) {
        groups = props.groups.map((grp, i) => {
            return (
                <li key={i}>{grp}</li>
            );
        });
    }

    return(
        <article className={classes.orgCard}>
            <div className={classes.head}>
                <Link to={{pathname: props.url}}>
                    {props.name}
                </Link>
            </div>
            <div className={classes.content}>
                <p>Groups:</p>
                <ul>
                    {groups}
                </ul>
            </div>
        </article>
    )
}

export default orgCard;