import React, { Component } from 'react';
import axios from "../../axios-orders";
import {connect} from  'react-redux';

import Order from '../../Components/Order/Order'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store.actions/index"

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}/>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchedOrders())
    };
};

export default connect(null, mapDispatchToProps)(withErrorHandler(Orders, axios));