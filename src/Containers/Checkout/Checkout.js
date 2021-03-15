import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

const checkout = props => {

const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

const checkoutContinueHandler = () => {
        props.history.replace('/checkout/contact-data');
    }

        let summary = <Redirect to="/" />
        if(this.props.ings) {
            
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;

            summary =(
                <div>
                    {purchasedRedirect}
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinue={checkoutContinueHandler}/>
                    <Route
                        path={props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            )
        }

        return (
            <div>
                {summary}
            </div>
        )
}

const mapStateToProps = state => {
    return {
        ings: state.BurgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps) (checkout);