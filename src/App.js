import React, { Component, useEffect, Suspense } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import {connect} from "react-redux"

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./Containers/burgerbuilder/BurgerBuilder";
import Logout from "./Containers/Auth/Logout/Logout"
import * as actions from "./store/actions/index"

const Checkout = React.lazy (() => {
    return import('./Containers/Checkout/Checkout')
})

const Orders = React.lazy (() => {
    return import("./Containers/Orders/Orders")
})

const Auth = React.lazy (() => {
    return import("./Containers/Auth/Auth")
})

const app = props => {

    useEffect(() => {
        props.onTryAutoSignup()
    }, [props])

        let routes = (
            <Switch>
                <Route path="/auth" render={(props) => <Auth  {...props}/>} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        );

        if(this.props.isAuthenticated) {
            routes = (
            <Switch>
                <Route path="/checkout" render={(props) => <Checkout {...props}/>} />
                <Route path="/orders" render={(props) => <Orders {...props}/>} />
                <Route path="/logout" component={Logout} />
                <Route path="/auth" render={(props) => <Auth {...props}/>} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        )
        

      return (
          <div>
            <Layout>
                <Suspense fallback={<p>Loading...</p>} >
                {routes}
                </Suspense>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (app));
