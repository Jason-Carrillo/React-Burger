import * as actionTypes from './actionTypes';
import axios from "../../axios-orders"
import order from '../../Components/Order/Order';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    };
};

export const purchsaeBurgerStart = () => {
    return dispatch => {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchsaeBurgerStart())
        axios.post('/orders.json?auth=' + token, orderData)
                .then(response => {
                    console.log(response.data);
                    dispatch(purchaseBurgerSuccess(response.data.name, orderData))
                })
                .catch(error => {
                    dispatch( purchaseBurgerFail(error) )
                })
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fetchOrdersFail = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart())

        const queryParams = "?auth=" + token + '&orderby+"userId"&equalTo="' +  userId + '"'
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data){
                  fetchedOrders.push({
                      ...res.data[key],
                      id: key
                  });
                }
                dispatch(fetchOrdersSuccess(fetchOrders))
                this.setState({loading: false, orders: fetchedOrders})
            })
            .catch(err => {
                dispatch(fetchOrdersFail(error))
            })
        }
}