import React, { Component } from 'react';
import axios from "../../axios-orders";

import Order from '../../Components/Order/Order'

class Orders extends Component {

    componentDidMount() {
        axios.get('orders.jason')
            .then(red => {
                this.setState({loading: false})
            })
            .catch(err => {
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        )
    }
}

export default Orders;