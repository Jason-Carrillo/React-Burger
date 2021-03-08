import axios from 'axios';

import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authfail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, method) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIQ-2VgZuQoYotsPrAAZD2PQjIvl11ExY"
        if (!isSignup) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIQ-2VgZuQoYotsPrAAZD2PQjIvl11ExY"
        }
        axios.post(url, authData)
        .then(response => {
            console.log(response)
            dispatch(authSuccess(response.data.idToken, reponse.data.localId))
        })
        .catch(err => {
            console.log(err);
            dispatch(authfail())
        })
    }
}