import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = props =>  {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>)
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>

                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button buttonType="Danger" clicked={this.props.purchaseCancelled}> Cancel </Button>
                <Button buttonType="Success" clicked={this.props.purchaseContinued}> Continue </Button>
            </Aux>
        )
    }

export default orderSummary;