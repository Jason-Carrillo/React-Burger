import React, { Component } from 'react';
import axios from "../../axios-orders";
import {connect} from  'react-redux';

import Order from '../../Components/Order/Order'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store.actions/index"
import Spinner from '../../Components/UI/Spinner/Spinner'

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        let orders = <Spinner />
        if(!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order key={order.id}
                ingredients={order.ingredients}
                price={order.price}/>
            ))
    }

        return (
            <div>
                {orders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.order.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchedOrders(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));