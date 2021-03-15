import React, { Component, useEffect } from 'react'

import Modal from '../../Components/UI/Modal/Modal'
import Aux from '../Aux/Aux'

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        
        const [error, setError] = useState(null)

       
            const reqInterceptor = axios.interceptors.request.use(req => {
                setError(null)
                return req
            })
            const resInterceptor = axios.interceptors.response.use(res => res, error => {
                setError(error)
            })
    
            useEffect(() => {
                return () => {
                    axios.interceptors.request.eject(reqInterceptor);
                    axios.interceptors.request.eject(resInterceptor);
                }
            }, [])

        const errorConfirmedHandler = () => {
            setError(null)
        }

            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
}

export default withErrorHandler