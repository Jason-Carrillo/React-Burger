import React, { Component } from 'react'

import checkoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary'
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    render() {
        return (
            <div>
                <CheckoutSummary />
            </div>
        )
    }
}

export default Checkout;