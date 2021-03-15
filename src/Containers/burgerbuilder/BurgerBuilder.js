import React, { useState, useEffect } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';

import Aux from '../../hoc/Aux/Aux'
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from 'react-redux'
import axios from "../../axios-orders";
import * as burgerBuilderActions from '../../store/actions/index'


const burgerbuilder = props =>  {
    // state = {
    //     purchasing: false
    // }

    const [purchasing, setPurchasing] = useState(false);

    const dispatch = useDispatch()

    const onIngredientAdded = (ignName) => dispatch(actions.addIngredient(ignName)),
    const onIngredientRemoved = (ignName) => dispatch(actions.removeIngredient(ignName)),
    const onInitIngredients = () => dispatch(actions.initIngredients),
    const onInitPurchase = () => dispatch(actions.purchaseInit()),
    const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path))

    useEffect(() => {
        initIngredients()
    }, [])

    const updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
            return sum > 0;
    }

    const purchaseHandler =  () => {
        if(props.isAuthenticated){
            setPurchasing(true)
        } else {
            onSetRedirectPath("/checkout")
            props.history.push("/auth");
        }
       
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false)
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push('/checkout')
    }

        const disabledInfo = {
            ...this.props.ings
        }

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;

        let burger = this.props.error ? <p>Ingredients can't be loaded! </p> : <Spinner />;

        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={props.ings}/>
                    <BuildControls
                        ingredientAdded={props.ingredientAdded}
                        ingredientRemoved={props.ingredientRemoved}
                        disabled={disabledInfo}
                        purchasable={updatePurchaseState(this.props.ings)}
                        price={props.price}
                        ordered={purchaseHandler}
                        isAuth={props.isAuthenticated}
                    />
                </Aux>
            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
                purchaseCancelled={purchaseCancelHandler}
                purchaseContinued={purchaseContinueHandler}
                price={this.props.price}
            />
        }

        return (
            <Aux>
                <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        );
    }

const mapStateToProps = state => {
    return {
        ings: state.BurgerBuilder.ingredients,
        price: state.BurgerBuilder.totalPrice,
        error: state.BurgerBuilder.error,
        isAuthenticated: state.aut.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ignName) => dispatch(actions.addIngredient(ignName)),
        onIngredientRemoved: (ignName) => dispatch(actions.removeIngredient(ignName)),
        onInitIngredients: () => dispatch(actions.initIngredients),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(burgerBuilder, axios));