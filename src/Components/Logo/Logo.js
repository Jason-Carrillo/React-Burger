import React from 'react';

import burgerLogo from '../../Assets/Images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
)

export default logo