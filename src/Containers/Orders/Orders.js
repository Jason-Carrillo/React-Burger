import React, { Component } from 'react';
import axios from "../../axios-orders";

import Order from '../../Components/Order/Order'
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {

    componentDidMount() {
        axios.get('/orders')
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data){
                  fetchedOrders.push({
                      ...res.data[key],
                      id: key
                  });
                }
                this.setState({loading: false, orders: fetchedOrders})
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

export default withErrorHandler(Orders, axios);