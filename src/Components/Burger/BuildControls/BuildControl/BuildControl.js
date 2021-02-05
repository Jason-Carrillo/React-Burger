import React from 'react';

import classes from '../BuildControl/BuildControl.module.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.added}>More</button>
        <button className={classes.More}>Less</button>
    </div>
)

export default buildControl;