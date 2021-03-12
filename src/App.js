import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import {connect} from "react-redux"
import asyncComponent from './hoc/asyncComponent/asyncComponent'

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./Containers/burgerbuilder/BurgerBuilder";
import Logout from "./Containers/Auth/Logout/Logout"
import * as actions from "./store/actions/index"

const asyncCheckout = asyncComponent (() => {
    return import('./Containers/Checkout/Checkout')
})

const asyncOrders = asyncComponent (() => {
    return import("./Containers/Orders/Orders")
})

const asyncAuth = asyncComponent (() => {
    return import("./Containers/Auth/Auth")
})

class App extends Component {

    componentDidMount () {
        this.props.onTryAutoSignup()
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        );

        if(this.props.isAuthenticated) {
            routes = (
            <Switch>
                <Route path="/checkout" component={Checkout} />
                <Route path="/orders" component={Orders} />
                <Route path="/logout" component={Logout} />
                <Route path="/auth" component={Auth} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        )
        }
        

      return (
          <div>
            <Layout>
                {routes}
            </Layout>
          </div>
      )};
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App));
