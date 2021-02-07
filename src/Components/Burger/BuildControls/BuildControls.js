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
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {contols.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />

        ))}

        <button>Order Now!</button>
    </div>
)

export default buildControls;