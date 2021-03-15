import React, { useEffect } from 'react';
import axios from "../../axios-orders";
import {connect} from  'react-redux';

import Order from '../../Components/Order/Order'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store.actions/index"
import Spinner from '../../Components/UI/Spinner/Spinner'

const orders = props =>  {
    useEffect(() => {
        props.onFetchOrders(props.token, this.props.userId);
    }, [])

        let orders = <Spinner />
        if(!this.props.loading) {
            orders = props.orders.map(order => (
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

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchedOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(orders, axios));