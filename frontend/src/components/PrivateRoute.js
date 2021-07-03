import React from 'react'
import { Route } from 'react-router-dom'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from './Loading'

const PrivateRoute = ({ component, ...args }) => (
    <Route
        component={withAuthenticationRequired(component, {
        onRedirecting: ()=> <Loading></Loading>,
        })}
    {...args}
    >

    </Route>
)

export default PrivateRoute;