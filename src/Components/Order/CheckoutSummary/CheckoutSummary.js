import React from 'react';

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1>We hope it is amazing!</h1>
            <div style={{width: '100%', height: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger"
                    clicked
            >Cancel</Button>
            <Button
                btnType="Continue"
                clicked
            >Continue</Button>
        </div>
    )
}

export default checkoutSummary