import React, { Component} from 'react';
import { connect } from 'react-redux'

import Input from "../../Components/UI/Button/Button"
import classes from './Auth.module.css'
import * as actions from "../../store/actions/index"

class Auth extends Component {
state = {
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Mail Address'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },
    password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Password'
        },
        value: '',
        validation: {
            required: true,
            minLength: 6
        },
        valid: false,
        touched: false
    },
    isSignup: true
}

checkValidity (value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
}

inputChangedHandler = (event, controlName) => {
    const updatedControls = {
        ...this.state.controls,
        [controlName]: {
            ...this.state.controls[controlName],
            value: event.target.value,
            valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
            touched: true
        }
    }
    this.setState({controls: updatedControls})
}

submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value)
}

switchAuthModeHandler = () => {
    this.setState(prevState => {
        return {isSignup: !prevState.isSignup}
    })
}

    render () {
        const formElementsArray = []

        for (let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id} 
                elements={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.props.inputChangedHandler(event, formElement.id)}
                />

        ));

        return (
            <div className={Auth}>
                <form onSubmit={this.submitHandler} >
                    {form}
                <Button buttonType={sucess} > </Button>
                </form>
                <Button buttonType="Danger">Switch to {this.state.isSignup ? "Sign in" : "Sign up"}</Button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, passowrd) => dispatch(action.auth())
    }
}

export default connect(null, mapDispatchToProps) (Auth);