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
            <Button buttonType="Danger"
                    clicked={props.checkoutCancelled}
            >CANCEL</Button>
            <Button
                buttonType="Success"
                clicked={props.checkoutContinue}
            >CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary