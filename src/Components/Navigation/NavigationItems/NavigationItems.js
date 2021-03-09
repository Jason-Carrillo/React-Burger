import React from 'react';

import classes from './NavigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/">Orders</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
        {props.isAuthenticated}
        ? <NavigationItem link="/auth">Authenticate</NavigationItem>
        : <NavigationItem link="/logout">Logout</NavigationItem>
    </ul>
)

export default navigationItems;