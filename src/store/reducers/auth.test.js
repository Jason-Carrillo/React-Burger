import reducer from './auth';
import * as actionTypes from '../actions/actionTypes'

describe('auth reducer', () => {
    it('should return inititial state', () => {
        expect(reducer(undefined, {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirect: "/"
        }))
    })

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirect: "/"
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some_user_id'
        }))
    })
})