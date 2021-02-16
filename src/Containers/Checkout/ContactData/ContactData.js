import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button'
import axios from "../../../axios-orders";
import Spinner from '../../../Components/UI/Spinner/Spinner'
import Input from '../../../Components/UI/Input/Input'

import classes from './ContactData.module.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
            this.setState({loading: true})

            const order = {
                ingredients: this.props.ingredients,
                price: this.props.price,
                customer: {
                    name: 'Jason Carrillo',
                    address: {
                        Street: 'TestStreet 1234',
                        zipcode: '12345',
                        country: 'USA'
                    },
                    email: 'jasonemail@email.com'
                },
                deliveryMethod: 'Fastest'
            }
            axios.post('/orders.json', order)
                .then(response => {
                    this.setState({loading: false})
                    this.props.history.push('/')
                })
                .catch(error => {
                    this.setState({loading: false})
                })

    }

    render() {
        let form = (
            <form>
                <Input InputType="input"  className={classes.Input} type="text" name="name" placeholder="Enter Your name" />
                <Input InputType="input" className={classes.Input} type="email" name="email" placeholder="Enter Your email" />
                <Input InputType="input" className={classes.Input} type="text" name="street" placeholder="Enter Your Street Address" />
                <Input InputType="input" className={classes.Input} type="text" name="postal" placeholder="Enter Your Postal Code" />
                <Button buttonType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData} >
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData