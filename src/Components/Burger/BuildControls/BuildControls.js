import React from 'react';

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const contols = [
    {label: "salad", type: 'salad'},
    {label: "bacon", type: 'bacon'},
    {label: "cheese", type: 'cheese'},
    {label: "meat", type: 'meat'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {contols.map(ctrl => (
            <BuildControl
                key={ctrl.label} label={ctrl.label}
                added={this.ingredientAdded}/>
        ))}
    </div>
)

export default buildControls;