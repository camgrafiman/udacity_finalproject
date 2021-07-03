import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (<>
        <p>You need to be logged to see/perform this action</p>
        <button onClick={() => loginWithRedirect()}>Login</button>
        </>)
}