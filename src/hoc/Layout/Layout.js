import React, {useState} from 'react';
import {connect} from 'react-redux'
import Aux from '../Aux/Aux'
import classes from './Layout.module.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

const layout = props => {
    const [sideDrawerisVisible, setSideDrawerIsVisible] = useState(false)

    const sideDrawerClosedHandler = () => {
       setSideDrawerIsVisible(false)
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerisVisible)
    }

        return (
            <Aux>
                <Toolbar 
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer open={sideDrawerisVisible} closed={sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

const mapStateToProps = state => {
    return {
        usAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);