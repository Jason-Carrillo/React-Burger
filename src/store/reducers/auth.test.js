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
})