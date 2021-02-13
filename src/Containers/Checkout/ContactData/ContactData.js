import React from 'react';
import Button from '../../../Components/UI/Button/Button'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Enter Your name" />
                    <input type="email" name="email" placeholder="Enter Your email" />
                    <input type="text" name="street" placeholder="Enter Your Street Address" />
                    <input type="text" name="postal" placeholder="Enter Your Postal Code" />
                    <Button buttonType="Success" >Order</Button>
                </form>
            </div>
        );
    }

}

export default ContactData